// This file, like the global.d.ts file in the same directory, is also for global type declarations. However, this file stores some miscellaneous global types that can be used directly in .vue, .ts, and .tsx files without importing, providing type hints

type RefType<T> = T | null;

type EmitType = (event: string, ...args: any[]) => void;

type TargetContext = "_self" | "_blank";

type ComponentRef<T extends HTMLElement = HTMLDivElement> =
  ComponentElRef<T> | null;

type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>;

type ForDataType<T> = {
  [P in T]?: ForDataType<T[P]>;
};

type AnyFunction<T> = (...args: any[]) => T;

type PropType<T> = VuePropType<T>;

type Writable<T> = {
  -readonly [P in keyof T]: T[P];
};

type Nullable<T> = T | null;

type NonNullable<T> = T extends null | undefined ? never : T;

type Recordable<T = any> = Record<string, T>;

type ReadonlyRecordable<T = any> = {
  readonly [key: string]: T;
};

type Indexable<T = any> = {
  [key: string]: T;
};

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

type Exclusive<T, U> = (Without<T, U> & U) | (Without<U, T> & T);

type TimeoutHandle = ReturnType<typeof setTimeout>;

type IntervalHandle = ReturnType<typeof setInterval>;

type Effect = "light" | "dark";

interface ChangeEvent extends Event {
  target: HTMLInputElement;
}

interface WheelEvent {
  path?: EventTarget[];
}

interface ImportMetaEnv extends ViteEnv {
  __: unknown;
}

interface Fn<T = any, R = T> {
  (...arg: T[]): R;
}

interface PromiseFn<T = any, R = T> {
  (...arg: T[]): Promise<R>;
}

interface ComponentElRef<T extends HTMLElement = HTMLDivElement> {
  $el: T;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function parseInt(s: string | number, radix?: number): number;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function parseFloat(string: string | number): number;
