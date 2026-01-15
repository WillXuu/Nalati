import type { NextConfig } from "next";

type MemoryStorage = {
  getItem: (key: string) => string | null;
  setItem: (key: string, value: string) => void;
  removeItem: (key: string) => void;
  clear: () => void;
  key: (index: number) => string | null;
  readonly length: number;
};

const ensureLocalStoragePolyfill = () => {
  if (typeof globalThis === 'undefined') {
    return;
  }

  const globalObject = globalThis as typeof globalThis & {
    localStorage?: MemoryStorage;
  };

  const shouldPolyfill =
    !globalObject.localStorage ||
    typeof globalObject.localStorage.getItem !== 'function' ||
    typeof globalObject.localStorage.setItem !== 'function';

  if (!shouldPolyfill) {
    return;
  }

  let store: Record<string, string> = {};

  const memoryStorage: MemoryStorage = {
    get length() {
      return Object.keys(store).length;
    },
    clear: () => {
      store = {};
    },
    getItem: (key: string) => (key in store ? store[key] : null),
    key: (index: number) => Object.keys(store)[index] ?? null,
    removeItem: (key: string) => {
      delete store[key];
    },
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
  };

  globalObject.localStorage = memoryStorage;
};

ensureLocalStoragePolyfill();

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
