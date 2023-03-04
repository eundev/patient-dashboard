module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // **Override** Tailwind default configuration
    fontFamily: {
      sans: ["Scandia", "Helvetica", "Arial", "sans-serif"],
    },
    screens: {
      // Use plain classes to catch smaller devices (without screen prefix)
      xxs: "350px", // => @media (min-width: 350px) { ... }
      xs: "410px", // => @media (min-width: 410px) { ... }
      sm: "640px", // => @media (min-width: 640px) { ... }
      md: "768px", // => @media (min-width: 768px) { ... }
      lg: "1024px", // => @media (min-width: 1024px) { ... }
      "2lg": "1152px", // => @media (min-width: 1152px) { ... }
      xl: "1280px", // => @media (min-width: 1280px) { ... }
      "1xl": "1440px", // => @media (min-width: 1440px) { ... }
      "2xl": "1536px", // => @media (min-width: 1536px) { ... }
      "3xl": "1792px", // => @media (min-width: 1792px) { ... }
    },
    extend: {
      // **Extend** Tailwind default configuration
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontSize: {
        xxs: "0.60rem",
        md: "1.065rem",
        // ui-kit
        "title-1": "3rem",     // 42px
        "title-2": "2rem",     // 32px
        "title-3": "1.75rem",  // 28px
        "title-4": "1.5rem",   // 24px
        "body-1": "1.5rem",   // 24px
        "body-2": "1.25rem",  // 20px
        "body-3": "1rem",     // 16px
        "body-4": "0.875rem", // 14px
        "body-5": "0.75rem"   // 12px
      },
      maxWidth: {
        "screen-3xl": "1736px",
        "screen-4xl": "1864px",
        "screen-5xl": "1992px",
      },
      width: {
        "screen-xl": "1280px",
        "screen-2xl": "1508px",
        "screen-3xl": "1736px",
      },
      spacing: {
        110: "28rem",
        120: "32rem",
        130: "40rem",
        140: "52rem",
      },
      colors: {
        "examedi-blue-brand": "#133963",
        "examedi-black-dark": "#4F4F4F",
        "examedi-black-light": "#122843",
        "examedi-blue-3": "#008CFF",
        "examedi-blue-dark": "#3C5588",
        "examedi-blue-dark-75": "#6D80A6",
        "examedi-blue-dark-50": "#9EAAC3",
        "examedi-blue-dark-25": "#CED5E1",
        "examedi-blue-dark-5": "#F5F7F9",
        "examedi-blue-strong": "#457DF1",
        "examedi-blue-strong-75": "#739EF5",
        "examedi-blue-strong-50": "#A2BEF8",
        "examedi-blue-strong-25": "#D0DFFC",
        "examedi-blue-strong-05": " #F6F9FE",
        "examedi-blue-lighter": "#72A1E2",
        "examedi-blue-lightest": "#DFECFF",
        "examedi-blue-normal": "#008CFF",
        "examedi-blue-light": "#2068E9",
        "examedi-blue-calypso": "#68C0DC",
        "examedi-blue-soft": "#739EF5",
        "examedi-blue-lighter": "#72A1E2",
        "examedi-blue-lightest": "#DFECFF",
        "examedi-gray-2": "#4F4F4F",
        "examedi-gray-3": "#828282",
        "examedi-gray-4": "#BDBDBD",
        "examedi-gray-5": "#E0E0E0",
        "examedi-gray-6": "#F2F2F2",
        "examedi-gray-7": "#FAFAFA",
        "examedi-gray-8": "#D9D9D9",
        "examedi-gray-regular": "#A7A7A7",
        "examedi-gray-bg": "#F6F6F6",
        "examedi-gray-light": "#C4C4C4",
        "examedi-gray-lighter": "#CBCBCB",
        "examedi-gray-line": "#D3D3D3",
        "examedi-gray-normal": "#AEAEAF",
        "examedi-gray-strong": "#7B7B7B",
        "examedi-green-background": "#DBF3E5",
        "examedi-green-normal": "#219C70",
        "examedi-green-strong": "#75E0CB",
        "examedi-green-strong-75": "#98E8D8",
        "examedi-green-strong-50": "#BAF0E5",
        "examedi-green-strong-25": "#DDF7F2",
        "examedi-green-strong-5": "#F8FEFD",
        "examedi-green-success": "#6FCF97",
        "examedi-orange-strong": "#F79326",
        "examedi-orange-light": "#FAAD2E",
        "examedi-orange-normal": "#F9B522",
        "examedi-pink-light": "#FF7575",
        "examedi-pink-lighter": "#cd688f",
        "examedi-purple-light": "#634cc5",
        "examedi-red-background": "#FAD5D5",
        "examedi-red-error": "#EB5757",
        "examedi-red-light": "#F66341",
        "examedi-red-strong": "#F54D26",
        "examedi-salmon": "#FF8970",
        "examedi-salmon-75": "#FFA694",
        "examedi-salmon-50": "#FFC4B8",
        "examedi-salmon-25": "#FFE1DB",
        "examedi-salmon-5": "#FFF9F8",
        "examedi-white-light": "#FBFBFB",
        "examedi-white-lighter": "#FDFDFD",
        "examedi-white-normal": "#F4F4F4",
        "examedi-white-pure": "#FFFFFF",
        "examedi-white-strong": "#F3F3F3",
        "examedi-yellow-alert": "#FFD964",
        "examedi-yellow-background": "#FFF6D8",
        "examedi-yellow-soft": "#FEE89F",
        "examedi-completed-timeline-event": "#3FB371",
        "examedi-uncompleted-timeline-event": "#F9F9F9",
        "medipro-green": "#007089",
        "medipro-light-green": "#0C778F",
        "redmedicasur-light-blue": "#00b6de",
        "redmedicasur-gray": "#484f61",
        salcobrand: "#0074C8",
        "salcobrand-50": "#7DB8E3",
        "salcobrand-25": "#BFDCF1",
        "exanutri-purple-normal": "#9760D4",
        "exanutri-purple-light": "#B188DF",
        "exanutri-purple-lighter": "#F5EFFB",
        sanasalud: "#FD8204",
        "sanasalud-25": "#FD82041A",
        "sanasalud-50": "#FEC081",
        "oncocare": "#3C4761",
        "oncocare-25": "#3C47611A",
        "oncocare-50": "#7B8BC2",
        "oncocare-red": "#F36E63",
        "oncocare-red-25": "#F36E631A",
        "oncocare-red-50": "#F7A69A",
        "wallmart": "#0071DC",
        "wallmart-75": "#4094E5",
        "wallmart-blue-light": "#DDE8F1",
        "wallmart-background": "#E0F1FF",
        "wallmart-white": "#F0F8FF",
        "cms-light-green": "#98E8D8",
        "fitfood": "#005551",
        "fitfood-50": "#00555180",
        "fitfood-pink": "#F4AABA",
        "fitfood-pink-50": "#F8D3D3",
        "examedi-pregnancy": "#C88879",
        // ui-kit start
        // https://www.figma.com/file/Jf1RGhjEoldbkT0wxFgkZ0/UI-Kit?node-id=1583%3A1045&t=BjgsY3gvAY4VAEm4-0
        c1: "#457DF1", // blue 100%
        c2: "#739EF5", // blue 75%
        c3: "#A2BEF8", // blue 50%
        c4: "#D0DFFC", // blue 25%
        c5: "#F6F9FE", // blue 5%
        v1: "#75E0CB", // green 100%
        v2: "#98E8D8", // green 75%
        v3: "#BAF0E5", // green 50%
        v4: "#DDF7F2", // green 25%
        v5: "#F8FEFD", // green 5%
        s1: "#FF8970", // red 100%
        s2: "#FFA694", // red 75%
        s3: "#FFC4B8", // red 50%
        s4: "#FFE1DB", // red 25%
        s5: "#FFF9F8", // red 5%
        a1: "#3C5588", // dark blue 100%
        a2: "#6D80A6", // dark blue 75%
        a3: "#9EAAC3", // dark blue 50%
        a4: "#CED5E1", // dark blue 25%
        a5: "#F5F7F9", // dark blue 5%
        g1: "#4F4F4F", // gray 100%
        g2: "#7B7B7B", // gray 75%
        g3: "#A7A7A7", // gray 50%
        g4: "#D3D3D3", // gray 25%
        g5: "#FAFAFA", // gray 5%
        "gray-bg": "#F6F6F6",
        "error-bg": "#FAD5D5",
        "success-bg": "#DBF3E5",
        "warning-bg": "#FFF6D8",
        "light-gray-bg": "#FAFAFA",
        error: "#EB5757",
        warning: "#6FCF97",
        success: "#FFD964",
        // ui kit end
      },
      transitionProperty: {
        width: "width",
      },
      dropShadow: {
        "examedi-card": "0px 2px 50px rgba(0, 0, 0, 0.05)",
        "examedi-card-2": "0px 4px 8px rgba(130, 130, 130, 0.5)",
        "examedi-button": "0px 4px 8px rgba(69,125,241,0.4)",
        "examedi-button-2": "0px 4px 16px rgba(69,125,241,0.6)",
        "examedi-button-3": "0px 4px 12px rgba(123,123,123,0.5)",
        "examedi-button-black": "0px 4px 15px rgba(79, 79, 79, 0.3)",
        "examedi-doctor-card": "0px 0px 30px rgba(0, 0, 0, 0.1)",
      },
      boxShadow: {
        "examedi-card": "0px 2px 50px rgba(0, 0, 0, 0.05)",
        "examedi-card-2": "0px 4px 8px rgba(130, 130, 130, 0.5)",
        "examedi-button": "0px 4px 8px rgba(69,125,241,0.4)",
        "examedi-button-2": "0px 4px 16px rgba(69,125,241,0.6)",
        "examedi-button-3": "0px 4px 12px rgba(123,123,123,0.5)",
        "examedi-button-black": "0px 4px 15px rgba(79, 79, 79, 0.3)",
        "examedi-doctor-card": "0px 0px 30px rgba(0, 0, 0, 0.1)",
        "wallmart-button": "0px 4px 10px rgba(69, 125, 241, 0.6)",
        "navbar-button": "0px 4px 8px rgba(0, 0, 0, 0.25)",
        "navbar": "0px 4px 8px rgba(129, 129, 129, 0.1)",
        // ui-kit
        "blue": "0px 4px 16px 0px #457DF199",
        "white": "0px 4px 16px rgba(211,211,211,0.5)",
        xs: "0px 4px 12px 0px #4F4F4F1A",
        sm: "0px 4px 16px 0px #4F4F4F33",
        md: "0px 4px 8px 0px #00000040",
        lg: "0px 4px 16px 0px #4F4F4F80",
      },
      gridTemplateColumns: {
        13: "repeat(13, minmax(0, 1fr))",
        14: "repeat(14, minmax(0, 1fr))",
        15: "repeat(15, minmax(0, 1fr))",
        16: "repeat(16, minmax(0, 1fr))",
      },
      gridColumn: {
        "span-13": "span 13 / span 13",
        "span-14": "span 14 / span 14",
        "span-15": "span 15 / span 15",
        "span-16": "span 16 / span 16",
      },
    },
  },
  variants: {
    extend: {},
  },
};
