import type { Config } from "tailwindcss";

import { skeleton, contentPath } from "@skeletonlabs/skeleton/plugin";
import * as themes from "@skeletonlabs/skeleton/themes";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    contentPath(import.meta.url, "react"),
  ],
  darkMode: "selector",
  theme: {
    extend: {
      gridTemplateColumns: {
        "13": "repeat(13, minmax(0, 1fr))",
      },
    },
  },
  plugins: [
    skeleton({
      // NOTE: each theme included will be added to your CSS bundle
      themes: [themes.rose],
    }),
  ],
} satisfies Config;
