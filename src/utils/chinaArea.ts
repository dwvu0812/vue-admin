import REGION_DATA from "china-area-data";
import { cloneDeep } from "@pureadmin/utils";

type ValueLabelData = {
  value: string;
  label: string;
  children?: ValueLabelData[];
};

type ValueEnNameTelData = { value: string; enName: string; tel: string };

// Code to text conversion object, example: CodeToText['110000'] outputs "Beijing"
const CodeToText = {};
// Text to code conversion object, example: TextToCode['Beijing']['District']['Chaoyang District'].code outputs 110105
const TextToCode = {};
// Province object
const provinceObject = REGION_DATA["86"];
// Province-city-district three-level linkage data (without "All" option)
const regionData = [];
// Province-city two-level linkage data (without "All" option)
let provinceAndCityData = [];

const ALL_TEXT = "All";

CodeToText[""] = ALL_TEXT;

// Calculate provinces
Object.keys(provinceObject).forEach(prop => {
  const provinceText = provinceObject[prop];
  regionData.push({
    value: prop, // Province code value
    label: provinceText // Province text
  });
  CodeToText[prop] = provinceText;
  TextToCode[provinceText] = {
    code: prop
  };
  TextToCode[provinceText][ALL_TEXT] = {
    code: ""
  };
});

// Calculate cities
regionData.forEach(item => {
  const provinceCode = item.value;
  const provinceText = item.label;
  const provinceChildren = [];
  let cityObject = null;
  let cityCode = "";

  // Add all options to cities
  provinceChildren.push({
    value: "",
    label: ALL_TEXT
  });

  try {
    cityObject = REGION_DATA[provinceCode];
    if (cityObject) {
      Object.keys(cityObject).forEach(prop => {
        cityCode = prop;
        const cityText = cityObject[prop];
        provinceChildren.push({
          value: cityCode,
          label: cityText
        });
        CodeToText[cityCode] = cityText;
        TextToCode[provinceText][cityText] = {
          code: cityCode
        };
        TextToCode[provinceText][cityText][ALL_TEXT] = {
          code: ""
        };
      });
    }
  } catch (e) {
    throw new Error(e as string);
  }
  if (provinceChildren.length > 1) {
    item.children = provinceChildren;
  }
});

// Calculate districts
if (regionData.length > 0) {
  regionData.forEach(item => {
    if (item.children) {
      const provinceText = item.label;
      const provinceCode = item.value;
      item.children.forEach(city => {
        const cityText = city.label;
        const cityCode = city.value;
        const cityChildren = [];

        if (cityCode) {
          // Add all options to the district
          cityChildren.push({
            value: "",
            label: ALL_TEXT
          });

          try {
            const countyObject = REGION_DATA[cityCode];
            if (countyObject) {
              Object.keys(countyObject).forEach(prop => {
                const countyCode = prop;
                const countyText = countyObject[prop];
                cityChildren.push({
                  value: countyCode,
                  label: countyText
                });
                CodeToText[countyCode] = countyText;
                if (TextToCode[provinceText][cityText]) {
                  TextToCode[provinceText][cityText][countyText] = {
                    code: countyCode
                  };
                }
              });
            }
          } catch (e) {
            throw new Error(e as string);
          }
          if (cityChildren.length > 1) {
            city.children = cityChildren;
          }
        }
      });
    }
  });
}

// Calculate province and city
const tempData = JSON.parse(JSON.stringify(regionData));
tempData.forEach(item => {
  if (item.children) {
    item.children.forEach(city => {
      delete city.children;
    });
  }
});
provinceAndCityData = tempData;

// Add all options
const provinceAndCityDataPlus = JSON.parse(
  JSON.stringify(provinceAndCityData)
);
provinceAndCityDataPlus.unshift({
  value: "",
  label: ALL_TEXT
});

const regionDataPlus = JSON.parse(JSON.stringify(regionData));
regionDataPlus.unshift({
  value: "",
  label: ALL_TEXT
});

// International telephone code
const phoneData: ValueEnNameTelData[] = [
  { value: "86", enName: "China", tel: "+86" },
  { value: "93", enName: "Afghanistan", tel: "+93" },
  { value: "355", enName: "Albania", tel: "+355" },
  { value: "213", enName: "Algeria", tel: "+213" },
  { value: "376", enName: "Andorra", tel: "+376" },
  { value: "244", enName: "Angola", tel: "+244" }
];

/**
 * Convert text to region code
 * @param provinceText Province
 * @param cityText City
 * @param regionText District
 * @returns
 */
function convertTextToCode(
  provinceText: string,
  cityText: string,
  regionText?: string
): string {
  let code = "";
  if (provinceText && TextToCode[provinceText]) {
    const province = TextToCode[provinceText];
    code = province.code;

    if (cityText && province[cityText]) {
      const city = province[cityText];
      code = `${code}${cityText === ALL_TEXT ? "" : ", "}${city.code}`;

      if (regionText && city[regionText]) {
        code = `${code}${regionText === ALL_TEXT ? "" : ", "}${
          city[regionText].code
        }`;
      }
    }
  }
  return code;
}

export {
  CodeToText,
  TextToCode,
  provinceObject,
  regionData,
  provinceAndCityData,
  provinceAndCityDataPlus,
  regionDataPlus,
  phoneData,
  convertTextToCode
};
