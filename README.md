<h1>vue-pure-admin</h1>

![GitHub license](https://img.shields.io/github/license/pure-admin/vue-pure-admin?style=flat)
![GitHub stars](https://img.shields.io/github/stars/pure-admin/vue-pure-admin?color=fa6470&style=flat)
![GitHub forks](https://img.shields.io/github/forks/pure-admin/vue-pure-admin?style=flat)

**English** | [中文](./README.en-US.md)

## Introduction

`vue-pure-admin` is an open-source and ready-to-use admin system template. It is completely written and organized according to the `ECMAScript` module (`ESM`) specification, using the latest `Vue3`, `Vite`, `Element-Plus`, `TypeScript`, `Pinia`, `Tailwindcss` and other mainstream technologies.

## Development Philosophy

Innovation through stability, seeing the future through technology

## Simplified Version (Please use the simplified version for actual project development, providing both `non-internationalized` and `internationalized` versions)

The simplified version is a framework extracted from [vue-pure-admin](https://github.com/pure-admin/vue-pure-admin), containing the main functionalities, more suitable for actual project development. Even with globally importing [element-plus](https://element-plus.org), the packaged size is still less than `2.3MB`, and it will permanently sync with the complete version's code. After enabling `brotli` compression and `cdn` replacement of local libraries, the package size is less than `350kb`.

[Click to view the non-internationalized simplified version](https://github.com/pure-admin/pure-admin-thin)  
[Click to view the internationalized simplified version](https://github.com/pure-admin/pure-admin-thin/tree/i18n)

## Companion Videos

[Click to view UI design](https://www.bilibili.com/video/BV17g411T7rq)  
[Click to view quick development tutorial](https://www.bilibili.com/video/BV1kg411v7QT)

## Detailed Documentation

[Click to view vue-pure-admin documentation](https://pure-admin.cn/)  
[Click to view @pureadmin/utils documentation](https://pure-admin-utils.netlify.app)

## Quality Service, Software Outsourcing, Sponsorship Support

[Click to view details](https://pure-admin.cn/pages/service/)

## `js` Version

[Click to view js version](https://pure-admin.cn/pages/js/)

## `max` Version

[Click to view max version](https://pure-admin.cn/pages/max/)

## `Tauri` Version

[Click to view Tauri version](https://github.com/pure-admin/tauri-pure-admin)

## `Electron` Version

[Click to view Electron version](https://github.com/pure-admin/electron-pure-admin)

## Preview

[Click to view preview](https://pure-admin.github.io/vue-pure-admin)

`PC` version

<p align="center">
  <img alt="PureAdmin" src="https://xiaoxian521.github.io/hyperlink/img/vue-pure-admin/1.jpg">
  <br />
  <img alt="PureAdmin" src="https://xiaoxian521.github.io/hyperlink/img/vue-pure-admin/2.jpg">
</p>

Dark style

<p align="center">
  <img alt="PureAdmin" src="https://xiaoxian521.github.io/hyperlink/img/vue-pure-admin/3.jpg">
  <br />
  <img alt="PureAdmin" src="https://xiaoxian521.github.io/hyperlink/img/vue-pure-admin/4.jpg">
</p>

Mobile version

<p align="center">
  <img alt="PureAdmin" src="https://xiaoxian521.github.io/hyperlink/img/vue-pure-admin/5.jpg">
</p>

### Using `Gitpod`

Open the project in `Gitpod` (a free online development environment for `GitHub`) and start coding immediately.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/pure-admin/vue-pure-admin)

## Installation and Usage

### Fetch Code

#### Recommended to use `@pureadmin/cli` scaffolding

<br/>
<img src="https://xiaoxian521.github.io/hyperlink/gif/pure-admin-cli.gif" alt="pure-admin-cli" />

1. Global installation

```bash
npm install -g @pureadmin/cli
```

2. Interactively select template and create project

```bash
pure create
```

[Click to view detailed usage of @pureadmin/cli scaffolding](https://github.com/pure-admin/pure-admin-cli#pureadmincli)

#### Fetch from `GitHub`

```bash
git clone https://github.com/pure-admin/vue-pure-admin.git
```

#### Fetch from `Gitee`

```bash
git clone https://gitee.com/yiming_chang/vue-pure-admin.git
```

### Install Dependencies

```bash
cd vue-pure-admin

pnpm install
```

### Start the Platform

```bash
pnpm dev
```

### Project Build

```bash
pnpm build
```

## Docker Support

1. Customize the image name as `vue-pure-admin` (please note that there is a dot `.` at the end of the command below, indicating the use of the `Dockerfile` in the current path, which can be specified according to actual situation)

```bash
docker build -t vue-pure-admin .
```

2. Port mapping and starting `docker` container (`8080:80`: means using port `80` in the container and forwarding that port to port `8080` on the host; `pure-admin`: means custom container name; `vue-pure-admin`: means custom image name)

```bash
docker run -dp 8080:80  --name pure-admin vue-pure-admin
```

After completing the above two commands, open `http://localhost:8080` in your browser to preview.

Of course, you can also operate `docker` projects through the [Docker Desktop](https://www.docker.com/products/docker-desktop/) visual interface, as shown below

<p align="center">
  <img alt="docker-desktop" width="100%" src="https://xiaoxian521.github.io/hyperlink/img/docker-desktop.jpg">
</p>

## Changelog

[CHANGELOG](./CHANGELOG.zh_CN.md)

## How to Contribute

You are very welcome to join us! [Raise an Issue](https://github.com/pure-admin/vue-pure-admin/issues/new/choose) or submit a `Pull Request`.

**Pull Request:**

1. Fork the code!
2. Create your own branch: `git checkout -b feat/xxxx`
3. Submit your changes: `git commit -am 'feat(function): add xxxxx'`
4. Push your branch: `git push origin feat/xxxx`
5. Submit a `pull request`

## Special Code Contributors

Thank you very much for understanding the source code and making excellent contributions to the `pure-admin` organization ❤️

|                   **Contributors**                    |                                   **Specific code**                                   |
| :---------------------------------------------: | :------------------------------------------------------------------------------: |
|       [hb0730](https://github.com/hb0730)       |    [Code](https://github.com/pure-admin/vue-pure-admin/commits?author=hb0730)    |
|         [o-cc](https://github.com/o-cc)         |     [Code](https://github.com/pure-admin/vue-pure-admin/commits?author=o-cc)     |
| [yj-liuzepeng](https://github.com/yj-liuzepeng) | [Code](https://github.com/pure-admin/vue-pure-admin/commits?author=yj-liuzepeng) |
|   [skyline523](https://github.com/skyline523)   |  [Code](https://github.com/pure-admin/vue-pure-admin/commits?author=skyline523)  |
| [shark-lajiao](https://github.com/shark-lajiao) | [Code](https://github.com/pure-admin/vue-pure-admin/commits?author=shark-lajiao) |
|      [WitMiao](https://github.com/WitMiao)      |   [Code](https://github.com/pure-admin/vue-pure-admin/commits?author=WitMiao)    |
|     [QFifteen](https://github.com/QFifteen)     |   [Code](https://github.com/pure-admin/vue-pure-admin/commits?author=QFifteen)   |
|      [edgexie](https://github.com/edgexie)      |   [Code](https://github.com/pure-admin/vue-pure-admin/commits?author=edgexie)    |
|       [way-jm](https://github.com/way-jm)       |    [Code](https://github.com/pure-admin/vue-pure-admin/commits?author=way-jm)    |
|   [simple-hui](https://github.com/simple-hui)   |  [Code](https://github.com/pure-admin/vue-pure-admin/commits?author=simple-hui)  |

## `Git` Contribution Submission Specification

Reference [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) specification ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

- `feat` Add new features
- `fix` Fix issues/bugs
- `style` Code style related without affecting operation results
- `perf` Optimization/performance improvement
- `refactor` Refactoring
- `revert` Undo modifications
- `test` Test related
- `docs` Documentation/notes
- `chore` Dependency updates/scaffolding configuration changes, etc.
- `workflow` Workflow improvements
- `ci` Continuous integration
- `types` Type definition file changes
- `wip` In development

## Browser Support

For local development, we recommend using `Chrome`, `Edge`, or `Firefox` browsers. The author commonly uses the latest version of `Chrome`.
In actual use, `Firefox` seems to have smoother animations compared to other browsers, but the author is accustomed to using `Chrome`. Choose based on your personal preference.
For more detailed browser compatibility support, please see [Which browsers does Vue support?](https://cn.vuejs.org/about/faq.html#what-browsers-does-vue-support) and [Vite Browser Compatibility](https://cn.vitejs.dev/guide/build#browser-compatibility).

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                                                Not supported                                                                                                |                                                                                              Last two versions                                                                                              |                                                                                                   Last two versions                                                                                                    |                                                                                                 Last two versions                                                                                                  |                                                                                                 Last two versions                                                                                                  |

## Maintainers

[xiaoxian521](https://github.com/xiaoxian521)、[Ten-K](https://github.com/Ten-K)

## License

Completely free and open source

[MIT © 2020-present, pure-admin](./LICENSE)

## `Star`

Thank you very much to the kind people who leave stars, I appreciate your support :heart:

[![Stargazers repo roster for @pure-admin/vue-pure-admin](https://bytecrank.com/nastyox/reporoster/php/stargazersSVG.php?user=pure-admin&repo=vue-pure-admin)](https://github.com/pure-admin/vue-pure-admin/stargazers)

## `Fork`

Look at those `guys` and `gals` seriously `learning`, they're really `pretty good` :heart:

[![Forkers repo roster for @pure-admin/vue-pure-admin](https://bytecrank.com/nastyox/reporoster/php/forkersSVG.php?user=pure-admin&repo=vue-pure-admin)](https://github.com/pure-admin/vue-pure-admin/network/members)
