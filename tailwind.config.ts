import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        max_xl: { max: "1214px" },
        max_xl_2: { max: "1180px" },
        max_lg: { max: "1040px" },
        max_md: { max: "970px" },
        max_md_sm: { max: "700px" },
        max_sm: { max: "660px" },
      },
      colors: {
        tw_primary: "#002a1f",
        tw_second: "#73ba9b",
        tw_text: "#d5f2e3",
        tw_link: "#fa2d0b",
        tw_bg: "#001e1f",
      },
    },
  },
  plugins: [],
};
export default config;
