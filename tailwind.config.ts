import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#08111f",
        mist: "#eef3f8",
        cyan: "#85e7ff",
        coral: "#ff8d6d",
        lime: "#d5ff72",
      },
      boxShadow: {
        glow: "0 25px 80px rgba(133, 231, 255, 0.18)",
      },
      backgroundImage: {
        noise:
          "radial-gradient(circle at 20% 20%, rgba(133, 231, 255, 0.16), transparent 28%), radial-gradient(circle at 80% 0%, rgba(213, 255, 114, 0.14), transparent 20%), radial-gradient(circle at 50% 100%, rgba(255, 141, 109, 0.16), transparent 22%)",
      },
    },
  },
  plugins: [],
};

export default config;
