import type { ECharts } from "echarts";
import type { TableColumns } from "@pureadmin/table";

/**
 * Global type declarations that can be used directly in `.vue`, `.ts`, and `.tsx` files without importing to get type hints
 */
declare global {
  /**
   * Type definitions for platform name, version, required `node` and `pnpm` versions, dependencies, and last build time
   */
  const __APP_INFO__: {
    pkg: {
      name: string;
      version: string;
      engines: {
        node: string;
        pnpm: string;
      };
      dependencies: Recordable<string>;
      devDependencies: Recordable<string>;
    };
    lastBuildTime: string;
  };

  /**
   * Window type definitions
   */
  interface Window {
    // Global vue app instance
    __APP__: App<Element>;
    webkitCancelAnimationFrame: (handle: number) => void;
    mozCancelAnimationFrame: (handle: number) => void;
    oCancelAnimationFrame: (handle: number) => void;
    msCancelAnimationFrame: (handle: number) => void;
    webkitRequestAnimationFrame: (callback: FrameRequestCallback) => number;
    mozRequestAnimationFrame: (callback: FrameRequestCallback) => number;
    oRequestAnimationFrame: (callback: FrameRequestCallback) => number;
    msRequestAnimationFrame: (callback: FrameRequestCallback) => number;
  }

  /**
   * Document type definitions
   */
  interface Document {
    webkitFullscreenElement?: Element;
    mozFullScreenElement?: Element;
    msFullscreenElement?: Element;
  }

  /**
   * Type declarations for packaging compression formats
   */
  type ViteCompression =
    | "none"
    | "gzip"
    | "brotli"
    | "both"
    | "gzip-clear"
    | "brotli-clear"
    | "both-clear";

  /**
   * Type declarations for global custom environment variables
   * @see {@link https://pure-admin.cn/pages/config/#%E5%85%B7%E4%BD%93%E9%85%8D%E7%BD%AE}
   */
  interface ViteEnv {
    VITE_PORT: number;
    VITE_PUBLIC_PATH: string;
    VITE_ROUTER_HISTORY: string;
    VITE_CDN: boolean;
    VITE_HIDE_HOME: string;
    VITE_COMPRESSION: ViteCompression;
  }

  /**
   * Extends `@pureadmin/table` `TableColumns` for direct global use
   */
  type TableColumnList = Array<TableColumns>;

  /**
   * Type declaration for the `public/platform-config.json` file
   * @see {@link https://pure-admin.cn/pages/config/#platform-config-json}
   */
  interface PlatformConfigs {
    Version?: string;
    Title?: string;
    FixedHeader?: boolean;
    HiddenSideBar?: boolean;
    MultiTagsCache?: boolean;
    MaxTagsLevel?: number;
    KeepAlive?: boolean;
    Locale?: string;
    Layout?: string;
    Theme?: string;
    DarkMode?: boolean;
    OverallStyle?: string;
    Grey?: boolean;
    Weak?: boolean;
    HideTabs?: boolean;
    HideFooter?: boolean;
    Stretch?: boolean | number;
    SidebarStatus?: boolean;
    EpThemeColor?: string;
    ShowLogo?: boolean;
    ShowModel?: string;
    MenuArrowIconNoTransition?: boolean;
    CachingAsyncRoutes?: boolean;
    TooltipEffect?: Effect;
    ResponsiveStorageNameSpace?: string;
    MenuSearchHistory?: number;
    MapConfigure?: {
      amapKey?: string;
      options: {
        resizeEnable?: boolean;
        center?: number[];
        zoom?: number;
      };
    };
  }

  /**
   * Unlike the `PlatformConfigs` type, this is the type declaration for caching to the browser's local storage
   * @see {@link https://pure-admin.cn/pages/config/#platform-config-json}
   */
  interface StorageConfigs {
    version?: string;
    title?: string;
    fixedHeader?: boolean;
    hiddenSideBar?: boolean;
    multiTagsCache?: boolean;
    keepAlive?: boolean;
    locale?: string;
    layout?: string;
    theme?: string;
    darkMode?: boolean;
    grey?: boolean;
    weak?: boolean;
    hideTabs?: boolean;
    hideFooter?: boolean;
    sidebarStatus?: boolean;
    epThemeColor?: string;
    themeColor?: string;
    overallStyle?: string;
    showLogo?: boolean;
    showModel?: string;
    menuSearchHistory?: number;
    mapConfigure?: {
      amapKey?: string;
      options: {
        resizeEnable?: boolean;
        center?: number[];
        zoom?: number;
      };
    };
    username?: string;
  }

  /**
   * Type declaration for `responsive-storage` local responsive `storage`
   */
  interface ResponsiveStorage {
    locale: {
      locale?: string;
    };
    layout: {
      layout?: string;
      theme?: string;
      darkMode?: boolean;
      sidebarStatus?: boolean;
      epThemeColor?: string;
      themeColor?: string;
      overallStyle?: string;
    };
    configure: {
      grey?: boolean;
      weak?: boolean;
      hideTabs?: boolean;
      hideFooter?: boolean;
      showLogo?: boolean;
      showModel?: string;
      multiTagsCache?: boolean;
      stretch?: boolean | number;
    };
    tags?: Array<any>;
  }

  /**
   * Type declaration for the global properties object accessible to all component instances in the platform
   */
  interface GlobalPropertiesApi {
    $echarts: ECharts;
    $storage: ResponsiveStorage;
    $config: PlatformConfigs;
  }

  /**
   * Extend `Element`
   */
  interface Element {
    // v-ripple applies to src/directives/ripple/index.ts file
    _ripple?: {
      enabled?: boolean;
      centered?: boolean;
      class?: string;
      circle?: boolean;
      touched?: boolean;
    };
  }
}
