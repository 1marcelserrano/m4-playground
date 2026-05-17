import type { Config } from "tailwindcss";

// Tokens drawn from mscreative-site/DESIGN.md §2 (Core System) + §3 (Typography).
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // DESIGN.md §2 — System Core
        void: "#06060A",
        institutional: "#0D0A14",
        rufous: "#C2612C",
        provocation: "#FF5200",
        khaki: "#B68400",
        muted: "#7A7080",
        hairline: "#1E1828",
        // M4 canonical
        m4: "#FF3B00",
      },
      fontFamily: {
        // bound to next/font CSS variables in app/layout.tsx
        display: ["var(--font-space-mono)", "monospace"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-fira-code)", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.02em",
        data: "0.06em",
      },
      borderRadius: {
        none: "0",
      },
    },
  },
  plugins: [],
};

export default config;
