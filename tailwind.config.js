/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        "./sections/**/*.{js,ts,jsx,tsx,mdx}",
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: "hsl(var(--primary) / <alpha-value>)",
                content: {
                    light: {
                        1: "hsl(var(--content-light) / <alpha-value>)",
                        2: "hsl(var(--content-light-2) / <alpha-value>)",
                    },
                    dark: {
                        1: "hsl(var(--content-dark) / <alpha-value>)",
                        2: "hsl(var(--content-dark-2) / <alpha-value>)",
                        3: "hsl(var(--content-dark-3) / <alpha-value>)",
                    }
                },
                bkg: {
                    green: "hsl(var(--bkg-green) / <alpha-value>)",
                    light: {
                        1: "hsl(var(--bkg-light) / <alpha-value>)",
                        2: "hsl(var(--bkg-light-2) / <alpha-value>)",
                    },
                    white: "hsl(var(--bkg-white) / <alpha-value>)",
                },
                hero: {
                    heading: "hsl(var(--hero-heading) / <alpha-value>)",
                },
                hover: {
                    gray: "hsl(var(--hover-gray) / <alpha-value>)",
                },
                outlineColor: {
                    1: "hsl(var(--outline-color-1) / <alpha-value>)",
                    2: "hsl(var(--outline-color-2) / <alpha-value>)",
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                "dark-gradient": "linear-gradient(to top, hsl(var(--dark-gradient-from)) 0%, hsl(var(--dark-gradient-to)) 100%)",
                "dark-gradient-hover": "linear-gradient(to top, hsl(var(--dark-gradient-from-hover)) 0%, hsl(var(--dark-gradient-to-hover)) 100%)",
                "green-gradient": "linear-gradient(to top, hsl(var(--green-gradient-from)) 0%, hsl(var(--green-gradient-to)) 100%)",
                "green-gradient-hover": "linear-gradient(to top, hsl(var(--green-gradient-from-hover)) 0%, hsl(var(--green-gradient-to-hover)) 100%)",
            },
            gridTemplateColumns: {
                'auto-fit': 'repeat(auto-fit, minmax(0, 2fr))',
            },
        },
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
}
