/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        bs: "900px",
        "2xl": "1536px",
      },
      colors: {
        basic: "#FF7F50",
        org: "#ffffff",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        current: "currentColor",
        transparent: "transparent",

        black: "#000",
        white: "#fff",
        gray: {
          50: "#F6F6F6",
          100: "#E7E7E7",
          200: "#D1D1D1",
          300: "#B0B0B0",
          400: "#888888",
          500: "#6D6D6D",
          600: "#5D5D5D",
          700: "#4C4C4C",
          800: "#454545",
          900: "#3D3D3D",
        },
        blueGray: {
          50: "#F4F6F7",
          100: "#E4E7E9",
          200: "#CBD1D6",
          300: "#A7B0B9",
          400: "#7B8795",
          500: "#606C7A",
          600: "#535B67",
          700: "#474E57",
          800: "#3F434B",
          900: "#383C41",
        },
        red: {
          50: "#FFF1F1",
          100: "#FFDFDF",
          200: "#FFC5C5",
          300: "#FF9D9D",
          400: "#FF6464",
          500: "#FF1E1E",
          600: "#ED1515",
          700: "#C80D0D",
          800: "#A50F0F",
          900: "#881414",
        },
        green: {
          50: "#FDFFE4",
          100: "#F9FFC4",
          200: "#F1FF90",
          300: "#E2FF50",
          400: "#CCFF00",
          500: "#B2E600",
          600: "#8AB800",
          700: "#688B00",
          800: "#526D07",
          900: "#455C0B",
        },
      },
      spacing: {
        px: "1px",
        0: "0px",
        0.5: "0.125rem",
        1: "0.25rem",
        1.5: "0.375rem",
        2: "0.5rem",
        2.5: "0.625rem",
        3: "0.75rem",
        3.5: "0.875rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        11: "2.75rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        18: "4.5rem",
        20: "5rem",
        24: "6rem",
        26: "6.5rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        44: "11rem",
        48: "12rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        96: "24rem",
      },
      animation: {
        none: "none",
        spin: "spin 1s linear infinite",
        ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        bounce: "bounce 1s infinite",
      },
      backdropBlur: (theme) => theme("blur"),
      backdropBrightness: (theme) => theme("brightness"),
      backdropContrast: (theme) => theme("contrast"),
      backdropGrayscale: (theme) => theme("grayscale"),
      backdropHueRotate: (theme) => theme("hueRotate"),
      backdropInvert: (theme) => theme("invert"),
      backdropOpacity: (theme) => theme("opacity"),
      backdropSaturate: (theme) => theme("saturate"),
      backdropSepia: (theme) => theme("sepia"),
      backgroundColor: (theme) => ({
        ...theme("colors"),
        body: "#0E0F11",
      }),
      backgroundImage: {
        none: "none",
        "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
        "gradient-to-tr":
          "linear-gradient(to top right, var(--tw-gradient-stops))",
        "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
        "gradient-to-br":
          "linear-gradient(to bottom right, var(--tw-gradient-stops))",
        "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
        "gradient-to-bl":
          "linear-gradient(to bottom left, var(--tw-gradient-stops))",
        "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))",
        "gradient-to-tl":
          "linear-gradient(to top left, var(--tw-gradient-stops))",
        "gradient-white":
          "linear-gradient(0deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)",
        "gradient-black":
          "linear-gradient(0deg, #07070E 0%, rgba(0, 0, 0, 0) 100%)",
        "radial-dark-green":
          "radial-gradient(446.50% 301.92% at 50.09% 3.49%, #052410 13.21%, #75A274 27.92%, #A0CAAC 34.17%)",
      },
      backgroundOpacity: (theme) => theme("opacity"),
      backgroundPosition: {
        bottom: "bottom",
        center: "center",
        left: "left",
        "left-bottom": "left bottom",
        "left-top": "left top",
        right: "right",
        "right-bottom": "right bottom",
        "right-top": "right top",
        top: "top",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
      },
      blur: {
        0: "0",
        none: "0",
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "40px",
        "3xl": "64px",
      },
      brightness: {
        0: "0",
        50: ".5",
        75: ".75",
        90: ".9",
        95: ".95",
        100: "1",
        105: "1.05",
        110: "1.1",
        125: "1.25",
        150: "1.5",
        200: "2",
      },
      borderColor: (theme) => ({
        ...theme("colors"),
        DEFAULT: "#e5e7eb",
      }),
      borderOpacity: (theme) => theme("opacity"),
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.25rem",
        "4xl": "1.5rem",
        "5xl": "1.875rem",
        "6xl": "3.125rem",
        "7xl": "5rem",
        full: "9999px",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        8: "8px",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05);",
        DEFAULT:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
        none: "none",
      },
      caretColor: (theme) => theme("colors"),
      contrast: {
        0: "0",
        50: ".5",
        75: ".75",
        100: "1",
        125: "1.25",
        150: "1.5",
        200: "2",
      },
      container: {},
      cursor: {
        auto: "auto",
        DEFAULT: "default",
        pointer: "pointer",
        wait: "wait",
        text: "text",
        move: "move",
        "not-allowed": "not-allowed",
      },
      divideColor: (theme) => theme("borderColor"),
      divideOpacity: (theme) => theme("borderOpacity"),
      divideWidth: (theme) => theme("borderWidth"),
      dropShadow: {
        sm: "0 1px 1px rgba(0,0,0,0.05)",
        DEFAULT: [
          "0 1px 2px rgba(0, 0, 0, 0.1)",
          "0 1px 1px rgba(0, 0, 0, 0.06)",
        ],
        md: ["0 4px 3px rgba(0, 0, 0, 0.07)", "0 2px 2px rgba(0, 0, 0, 0.06)"],
        lg: ["0 10px 8px rgba(0, 0, 0, 0.04)", "0 4px 3px rgba(0, 0, 0, 0.1)"],
        xl: [
          "0 20px 13px rgba(0, 0, 0, 0.03)",
          "0 8px 5px rgba(0, 0, 0, 0.08)",
        ],
        "2xl": "0 25px 25px rgba(0, 0, 0, 0.15)",
        none: "0 0 #0000",
      },
      fill: {
        current: "currentColor",
      },
      grayscale: {
        0: "0",
        DEFAULT: "100%",
      },
      hueRotate: {
        "-180": "-180deg",
        "-90": "-90deg",
        "-60": "-60deg",
        "-30": "-30deg",
        "-15": "-15deg",
        0: "0deg",
        15: "15deg",
        30: "30deg",
        60: "60deg",
        90: "90deg",
        180: "180deg",
      },
      invert: {
        0: "0",
        DEFAULT: "100%",
      },
      flex: {
        1: "1 1 0%",
        auto: "1 1 auto",
        initial: "0 1 auto",
        none: "none",
      },
      flexGrow: {
        0: "0",
        DEFAULT: "1",
      },
      flexShrink: {
        0: "0",
        DEFAULT: "1",
      },
      fontFamily: {
        body: "IBM Plex sans",
        heading: "IBM Plex Sans Condensed",
        sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
        mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["2rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.5rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.5rem", { lineHeight: "1" }],
        "7xl": ["3.875rem", { lineHeight: "1" }],
        "8xl": ["4.5rem", { lineHeight: "1" }],
        "9xl": ["5rem", { lineHeight: "1" }],
        "10xl": ["6rem", { lineHeight: "1" }],
      },
      fontWeight: {
        hairline: "100",
        thin: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      gap: (theme) => theme("spacing"),
      gradientColorStops: (theme) => theme("colors"),
      gridAutoColumns: {
        auto: "auto",
        min: "min-content",
        max: "max-content",
        fr: "minmax(0, 1fr)",
      },
      gridAutoRows: {
        auto: "auto",
        min: "min-content",
        max: "max-content",
        fr: "minmax(0, 1fr)",
      },
      gridColumn: {
        auto: "auto",
        "span-1": "span 1 / span 1",
        "span-2": "span 2 / span 2",
        "span-3": "span 3 / span 3",
        "span-4": "span 4 / span 4",
        "span-5": "span 5 / span 5",
        "span-6": "span 6 / span 6",
        "span-7": "span 7 / span 7",
        "span-8": "span 8 / span 8",
        "span-9": "span 9 / span 9",
        "span-10": "span 10 / span 10",
        "span-11": "span 11 / span 11",
        "span-12": "span 12 / span 12",
        "span-full": "1 / -1",
      },
      gridColumnEnd: {
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
      },
      gridColumnStart: {
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
      },
      gridRow: {
        auto: "auto",
        "span-1": "span 1 / span 1",
        "span-2": "span 2 / span 2",
        "span-3": "span 3 / span 3",
        "span-4": "span 4 / span 4",
        "span-5": "span 5 / span 5",
        "span-6": "span 6 / span 6",
        "span-full": "1 / -1",
      },
      gridRowStart: {
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
      },
      gridRowEnd: {
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
      },
      gridTemplateColumns: {
        none: "none",
        1: "repeat(1, minmax(0, 1fr))",
        2: "repeat(2, minmax(0, 1fr))",
        3: "repeat(3, minmax(0, 1fr))",
        4: "repeat(4, minmax(0, 1fr))",
        5: "repeat(5, minmax(0, 1fr))",
        6: "repeat(6, minmax(0, 1fr))",
        7: "repeat(7, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))",
        9: "repeat(9, minmax(0, 1fr))",
        10: "repeat(10, minmax(0, 1fr))",
        11: "repeat(11, minmax(0, 1fr))",
        12: "repeat(12, minmax(0, 1fr))",
      },
      gridTemplateRows: {
        none: "none",
        1: "repeat(1, minmax(0, 1fr))",
        2: "repeat(2, minmax(0, 1fr))",
        3: "repeat(3, minmax(0, 1fr))",
        4: "repeat(4, minmax(0, 1fr))",
        5: "repeat(5, minmax(0, 1fr))",
        6: "repeat(6, minmax(0, 1fr))",
      },
      height: (theme) => ({
        auto: "auto",
        ...theme("spacing"),
        full: "100%",
        screen: "100vh",
      }),
      inset: (theme, { negative }) => ({
        auto: "auto",
        ...theme("spacing"),
        ...negative(theme("spacing")),
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        full: "100%",
        "-1/2": "-50%",
        "-1/3": "-33.333333%",
        "-2/3": "-66.666667%",
        "-1/4": "-25%",
        "-2/4": "-50%",
        "-3/4": "-75%",
        "-full": "-100%",
      }),
      keyframes: {
        spin: {
          to: {
            transform: "rotate(360deg)",
          },
        },
        ping: {
          "75%, 100%": {
            transform: "scale(2)",
            opacity: "0",
          },
        },
        pulse: {
          "50%": {
            opacity: ".5",
          },
        },
        bounce: {
          "0%, 100%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "none",
            animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
          },
        },
      },
      letterSpacing: {
        "10xl": "-4.8px",
        "9xl": "-4px",
        "8xl": "-3.6px",
        "7xl": "-1.86px",
        "6xl": "-1.44px",
        "5xl": "-0.96px",
        "4xl": "-2px",
        "3xl": "-0.64px",
        "2xl": "-0.48px",
        tightest: "-0.05em",
        tighter: "-0.04em",
        tight: "-0.02em",
        normal: "0em",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em",
      },
      lineHeight: {
        none: "1",
        tight: "1.25",
        snug: "1.375",
        normal: "1.5",
        relaxed: "1.625",
        loose: "2",
        3: ".75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
      },
      listStyleType: {
        none: "none",
        disc: "disc",
        decimal: "decimal",
      },
      margin: (theme, { negative }) => ({
        auto: "auto",
        ...theme("spacing"),
        ...negative(theme("spacing")),
      }),
      maxHeight: {
        full: "100%",
        screen: "100vh",
      },
      maxWidth: {
        none: "none",
        0: "0rem",
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
        full: "100%",
        min: "min-content",
        max: "max-content",
        prose: "65ch",
      },
      minHeight: {
        0: "0",
        full: "100%",
        screen: "100vh",
      },
      minWidth: {
        0: "0",
        full: "100%",
        min: "min-content",
        max: "max-content",
      },
      objectPosition: {
        bottom: "bottom",
        center: "center",
        left: "left",
        "left-bottom": "left bottom",
        "left-top": "left top",
        right: "right",
        "right-bottom": "right bottom",
        "right-top": "right top",
        top: "top",
      },
      opacity: {
        0: "0",
        5: "0.05",
        10: "0.1",
        20: "0.2",
        25: "0.25",
        30: "0.3",
        40: "0.4",
        50: "0.5",
        60: "0.6",
        70: "0.7",
        75: "0.75",
        80: "0.8",
        90: "0.9",
        95: "0.95",
        100: "1",
      },
      order: {
        first: "-9999",
        last: "9999",
        none: "0",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
      },
      outline: {
        none: ["2px solid transparent", "2px"],
        white: ["2px dotted white", "2px"],
        black: ["2px dotted black", "2px"],
      },
      padding: (theme) => theme("spacing"),
      placeholderColor: (theme) => theme("colors"),
      placeholderOpacity: (theme) => theme("opacity"),
      ringColor: (theme) => ({
        DEFAULT: theme("colors.blue.500", "#3b82f6"),
        ...theme("colors"),
      }),
      ringOffsetColor: (theme) => theme("colors"),
      ringOffsetWidth: {
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px",
      },
      ringOpacity: (theme) => ({
        DEFAULT: "0.5",
        ...theme("opacity"),
      }),
      ringWidth: {
        DEFAULT: "3px",
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px",
      },
      rotate: {
        "-180": "-180deg",
        "-90": "-90deg",
        "-45": "-45deg",
        "-12": "-12deg",
        "-6": "-6deg",
        "-3": "-3deg",
        "-2": "-2deg",
        "-1": "-1deg",
        0: "0deg",
        1: "1deg",
        2: "2deg",
        3: "3deg",
        6: "6deg",
        12: "12deg",
        45: "45deg",
        90: "90deg",
        180: "180deg",
      },
      saturate: {
        0: "0",
        50: ".5",
        100: "1",
        150: "1.5",
        200: "2",
      },
      scale: {
        0: "0",
        50: ".5",
        75: ".75",
        90: ".9",
        95: ".95",
        100: "1",
        105: "1.05",
        110: "1.1",
        125: "1.25",
        150: "1.5",
      },
      sepia: {
        0: "0",
        DEFAULT: "100%",
      },
      skew: {
        "-12": "-12deg",
        "-6": "-6deg",
        "-3": "-3deg",
        "-2": "-2deg",
        "-1": "-1deg",
        0: "0deg",
        1: "1deg",
        2: "2deg",
        3: "3deg",
        6: "6deg",
        12: "12deg",
      },
      space: (theme, { negative }) => ({
        ...theme("spacing"),
        ...negative(theme("spacing")),
      }),
      stroke: {
        current: "currentColor",
      },
      textColor: (theme) => ({
        ...theme("colors"),
        body: "#ffffff",
      }),
      textOpacity: (theme) => theme("opacity"),
      transformOrigin: {
        center: "center",
        top: "top",
        "top-right": "top right",
        right: "right",
        "bottom-right": "bottom right",
        bottom: "bottom",
        "bottom-left": "bottom left",
        left: "left",
        "top-left": "top left",
      },
      transitionDelay: {
        75: "75ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        300: "300ms",
        500: "500ms",
        700: "700ms",
        1000: "1000ms",
      },
      transitionDuration: {
        DEFAULT: "150ms",
        75: "75ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        300: "300ms",
        500: "500ms",
        700: "700ms",
        1000: "1000ms",
      },
      transitionProperty: {
        none: "none",
        all: "all",
        DEFAULT:
          "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
        colors: "background-color, border-color, color, fill, stroke",
        opacity: "opacity",
        shadow: "box-shadow",
        transform: "transform",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
        linear: "linear",
        in: "cubic-bezier(0.4, 0, 1, 1)",
        out: "cubic-bezier(0, 0, 0.2, 1)",
        "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      translate: (theme, { negative }) => ({
        ...theme("spacing"),
        ...negative(theme("spacing")),
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        full: "100%",
        "-1/2": "-50%",
        "-1/3": "-33.333333%",
        "-2/3": "-66.666667%",
        "-1/4": "-25%",
        "-2/4": "-50%",
        "-3/4": "-75%",
        "-full": "-100%",
      }),
      width: (theme) => ({
        auto: "auto",
        ...theme("spacing"),
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
        full: "100%",
        screen: "100vw",
      }),
      zIndex: {
        auto: "auto",
        0: "0",
        10: "10",
        20: "20",
        30: "30",
        40: "40",
        50: "50",
      },
    },
    variantOrder: [
      "first",
      "last",
      "odd",
      "even",
      "visited",
      "checked",
      "group-hover",
      "group-focus",
      "focus-within",
      "hover",
      "focus",
      "focus-visible",
      "active",
      "disabled",
    ],
    variants: {
      accessibility: ["responsive", "focus-within", "focus"],
      alignContent: ["responsive"],
      alignItems: ["responsive"],
      alignSelf: ["responsive"],
      animation: ["responsive", "hover", "group-hover"],
      appearance: ["responsive"],
      backgroundAttachment: ["responsive"],
      backgroundClip: ["responsive"],
      backgroundColor: [
        "responsive",
        "dark",
        "group-hover",
        "focus-within",
        "hover",
        "focus",
      ],
      backgroundImage: ["responsive", "hover", "group-hover"],
      backgroundOpacity: [
        "responsive",
        "dark",
        "group-hover",
        "focus-within",
        "hover",
        "focus",
      ],
      backgroundPosition: ["responsive"],
      backgroundRepeat: ["responsive"],
      backgroundSize: ["responsive"],
      blur: ["responsive", "hover", "group-hover", "focus"],
      backdropBlur: ["responsive"],
      backdropBrightness: ["responsive"],
      backdropContrast: ["responsive"],
      backdropFilter: ["responsive"],
      backdropGrayscale: ["responsive"],
      backdropHueRotate: ["responsive"],
      backdropInvert: ["responsive"],
      backdropOpacity: ["responsive"],
      backdropSaturate: ["responsive"],
      backdropSepia: ["responsive"],
      borderCollapse: ["responsive"],
      borderColor: [
        "responsive",
        "dark",
        "group-hover",
        "focus-within",
        "hover",
        "focus",
      ],
      borderOpacity: [
        "responsive",
        "dark",
        "group-hover",
        "focus-within",
        "hover",
        "focus",
      ],
      borderRadius: ["responsive"],
      borderStyle: ["responsive"],
      borderWidth: ["responsive"],
      boxShadow: [
        "responsive",
        "group-hover",
        "focus-within",
        "hover",
        "focus",
      ],
      boxSizing: ["responsive"],
      clear: ["responsive"],
      container: ["responsive"],
      cursor: ["responsive"],
      display: ["responsive", "hover", "group-hover"],
      divideColor: ["responsive", "dark"],
      divideOpacity: ["responsive", "dark"],
      divideStyle: ["responsive"],
      divideWidth: ["responsive"],
      fill: ["responsive"],
      filter: ["hover", "group-hover", "focus"],
      flex: ["responsive"],
      flexDirection: ["responsive"],
      flexGrow: ["responsive"],
      flexShrink: ["responsive"],
      flexWrap: ["responsive"],
      float: ["responsive"],
      fontFamily: ["responsive"],
      fontSize: ["responsive"],
      fontSmoothing: ["responsive"],
      fontStyle: ["responsive"],
      fontVariantNumeric: ["responsive"],
      fontWeight: ["responsive"],
      gap: ["responsive"],
      gradientColorStops: [
        "responsive",
        "dark",
        "hover",
        "focus",
        "group-hover",
      ],
      gridAutoColumns: ["responsive"],
      gridAutoFlow: ["responsive"],
      gridAutoRows: ["responsive"],
      gridColumn: ["responsive"],
      gridColumnEnd: ["responsive"],
      gridColumnStart: ["responsive"],
      gridRow: ["responsive"],
      gridRowEnd: ["responsive"],
      gridRowStart: ["responsive"],
      gridTemplateColumns: ["responsive"],
      gridTemplateRows: ["responsive"],
      height: ["responsive"],
      inset: ["responsive"],
      justifyContent: ["responsive"],
      justifyItems: ["responsive"],
      justifySelf: ["responsive"],
      letterSpacing: ["responsive"],
      lineHeight: ["responsive"],
      listStylePosition: ["responsive"],
      listStyleType: ["responsive"],
      margin: ["responsive"],
      maxHeight: ["responsive"],
      maxWidth: ["responsive"],
      minHeight: ["responsive"],
      minWidth: ["responsive"],
      objectFit: ["responsive"],
      objectPosition: ["responsive"],
      opacity: ["responsive", "group-hover", "focus-within", "hover", "focus"],
      order: ["responsive"],
      outline: ["responsive", "focus-within", "focus"],
      overflow: ["responsive"],
      overscrollBehavior: ["responsive"],
      padding: ["responsive"],
      placeContent: ["responsive"],
      placeItems: ["responsive"],
      placeSelf: ["responsive"],
      placeholderColor: ["responsive", "dark", "focus"],
      placeholderOpacity: ["responsive", "dark", "focus"],
      pointerEvents: ["responsive"],
      position: ["responsive"],
      resize: ["responsive"],
      ringColor: [
        "responsive",
        "dark",
        "focus-within",
        "focus",
        "group-hover",
        "hover",
      ],
      ringOffsetColor: [
        "responsive",
        "dark",
        "focus-within",
        "focus",
        "group-hover",
        "hover",
      ],
      ringOffsetWidth: [
        "responsive",
        "focus-within",
        "focus",
        "group-hover",
        "hover",
      ],
      ringOpacity: [
        "responsive",
        "dark",
        "focus-within",
        "focus",
        "group-hover",
        "hover",
      ],
      ringWidth: [
        "responsive",
        "focus-within",
        "focus",
        "group-hover",
        "hover",
      ],
      rotate: ["responsive", "group-hover", "hover", "focus"],
      scale: ["responsive", "group-hover", "hover", "focus"],
      skew: ["responsive", "group-hover", "hover", "focus"],
      space: ["responsive"],
      stroke: ["responsive"],
      strokeWidth: ["responsive"],
      tableLayout: ["responsive"],
      textAlign: ["responsive"],
      textColor: [
        "responsive",
        "dark",
        "group-hover",
        "focus-within",
        "hover",
        "focus",
      ],
      textDecoration: [
        "responsive",
        "group-hover",
        "focus-within",
        "hover",
        "focus",
      ],
      textOpacity: [
        "responsive",
        "dark",
        "group-hover",
        "focus-within",
        "hover",
        "focus",
      ],
      textOverflow: ["responsive"],
      textTransform: ["responsive"],
      transform: ["responsive", "hover", "group-hover"],
      transformOrigin: ["responsive"],
      transitionDelay: ["responsive"],
      transitionDuration: ["responsive"],
      transitionProperty: ["responsive"],
      transitionTimingFunction: ["responsive"],
      translate: ["responsive", "group-hover", "hover", "focus"],
      userSelect: ["responsive"],
      verticalAlign: ["responsive"],
      visibility: ["responsive"],
      whitespace: ["responsive"],
      width: ["responsive"],
      wordBreak: ["responsive"],
      zIndex: ["responsive", "focus-within", "focus"],

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        bs: "8px",
        bm: "20px",
        bg: "80px",
      },

      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
