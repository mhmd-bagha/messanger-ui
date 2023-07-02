/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'gradient-blue': 'linear-gradient(to-right, var(--blue-rgb), var(--blue-picton-rgb))'
            },
            colors: {
                'mirage': 'var(--mirage)',
                'dark-jungle': 'var(--dark-jungle)',
                'liver': 'var(--liver)',
                'pink-red': 'var(--pink-red)',
                'secandray': 'var(--secandray)',
                'blue-cyan': 'var(--blue-cyan)',
                'blue-rgb': 'var(--blue-rgb)',
                'blue-picton-rgb': 'var(--blue-picton-rgb)',
            }
        },
    },
    plugins: [],
}
