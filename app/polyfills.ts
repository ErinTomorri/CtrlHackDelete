if (typeof window !== "undefined") {
  (window as any).global = window;
  (window as any).Buffer = require("buffer").Buffer;
} 