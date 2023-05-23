/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: "hsl(var(--primary) / <alpha-value>)",
                content: {
                    light: "hsl(var(--content-light) / <alpha-value>)",
                    dark: "hsl(var(--content-dark) / <alpha-value>)",
                },
                bkg: {
                    green: "hsl(var(--bkg-green) / <alpha-value>)",
                    light: "hsl(var(--bkg-light) / <alpha-value>)",
                    white: "hsl(var(--bkg-white) / <alpha-value>)",
                },
                accent: {
                    green: "hsl(var(--accent-green) / <alpha-value>)",
                },
                hero: {
                    heading: "hsl(var(--hero-heading) / <alpha-value>)",
                },
                hover: {
                    gray: "hsl(var(--hover-gray) / <alpha-value>)",
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                "dark-gradient": "linear-gradient(to top, hsl(var(--dark-gradient-from)) 0%, hsl(var(--dark-gradient-to)) 100%)",
                "dark-gradient-hover": "linear-gradient(to top, hsl(var(--dark-gradient-from-hover)) 0%, hsl(var(--dark-gradient-to-hover)) 100%)",
            },
            gridTemplateColumns: {
                'auto-fit': 'repeat(auto-fit, minmax(0, 2fr))',
            },
        },
    },
    plugins: [],
}
