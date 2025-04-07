// Global router type declaration

import type { RouteComponent, RouteLocationNormalized } from "vue-router";
import type { FunctionalComponent } from "vue";

declare global {
  interface ToRouteType extends RouteLocationNormalized {
    meta: CustomizeRouteMeta;
  }

  /**
   * @description Complete child route `meta` configuration table
   */
  interface CustomizeRouteMeta {
    /** Menu name (compatible with internationalization and non-internationalization, if using internationalization format, must add corresponding entries in the `locales` folder in the root directory) `Required` */
    title: string;
    /** Menu icon `Optional` */
    icon?: string | FunctionalComponent;
    /** Extra icon to the right of the menu name */
    extraIcon?: string | FunctionalComponent;
    /** Whether to display in menu (default `true`) `Optional` */
    showLink?: boolean;
    /** Whether to display parent menu `Optional` */
    showParent?: boolean;
    /** Page-level permission settings `Optional` */
    roles?: Array<string>;
    /** Button-level permission settings `Optional` */
    auths?: Array<string>;
    /** Route component caching (enable `true`, disable `false`) `Optional` */
    keepAlive?: boolean;
    /** Embedded `iframe` link `Optional` */
    frameSrc?: string;
    /** Whether to enable first-time loading animation for `iframe` page (default `true`) `Optional` */
    frameLoading?: boolean;
    /** Page loading animation (two modes, the second has higher priority, the first uses Vue's built-in `transitions` animation, the second uses `animate.css` for entry and exit animations, the platform recommends the second mode, which already includes `animate.css`, just specify the animation name) `Optional` */
    transition?: {
      /**
       * @description Current route animation effect
       * @see {@link https://next.router.vuejs.org/guide/advanced/transitions.html#transitions}
       * @see animate.css {@link https://animate.style}
       */
      name?: string;
      /** Entry animation */
      enterTransition?: string;
      /** Exit animation */
      leaveTransition?: string;
    };
    /** Prohibit adding current menu name or custom information to tab page (default `false`) */
    hiddenTag?: boolean;
    /** Whether the current menu name is fixed displayed in the tab page and cannot be closed (default `false`) */
    fixedTag?: boolean;
    /** Maximum number of dynamic routes that can be opened `Optional` */
    dynamicLevel?: number;
    /** Activate a certain menu
     * (Mainly used for routes that pass parameters through `query` or `params`, when they are not displayed in the menu through `showLink: false` configuration, there will be no menu highlighting,
     * and by setting `activePath` to specify the activated menu, highlighting can be obtained, `activePath` is the `path` of the specified activated menu)
     */
    activePath?: string;
  }

  /**
   * @description Complete child route configuration table
   */
  interface RouteChildrenConfigsTable {
    /** Child route address `Required` */
    path: string;
    /** Route name (should not be duplicated, and keep consistent with the current component's `name`) `Required` */
    name?: string;
    /** Route redirect `Optional` */
    redirect?: string;
    /** Lazy loaded component `Optional` */
    component?: RouteComponent;
    meta?: CustomizeRouteMeta;
    /** Child route configuration items */
    children?: Array<RouteChildrenConfigsTable>;
  }

  /**
   * @description Overall route configuration table (including complete child routes)
   */
  interface RouteConfigsTable {
    /** Route address `Required` */
    path: string;
    /** Route name (keep unique) `Optional` */
    name?: string;
    /** `Layout` component `Optional` */
    component?: RouteComponent;
    /** Route redirect `Optional` */
    redirect?: string;
    meta?: {
      /** Menu name (compatible with internationalization and non-internationalization, if using internationalization format, must add corresponding entries in the `locales` folder in the root directory) `Required` */
      title: string;
      /** Menu icon `Optional` */
      icon?: string | FunctionalComponent;
      /** Whether to display in menu (default `true`) `Optional` */
      showLink?: boolean;
      /** Menu ascending sort, higher value is sorted later (only for top-level routes) `Optional` */
      rank?: number;
    };
    /** Child route configuration items */
    children?: Array<RouteChildrenConfigsTable>;
  }
}

// https://router.vuejs.org/zh/guide/advanced/meta.html#typescript
declare module "vue-router" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface RouteMeta extends CustomizeRouteMeta {}
}
