import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const addTextBackgroundUtilities = ({ addUtilities, theme }: any) => {
  const newUtilities = {
    '.text-bg-animated': {
      'color': 'transparent',
      'background-size': '200%',
      'background-position': '0 50%',
      'background-clip': 'text',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
      'transition': 'filter 0.3s ease',
      'background-image': "url('/text-bg.jpg')", // Default light mode
    },
    '.text-bg-light': {
      'background-image': "url('/text-bg-white.jpg')",
			"filter": 'invert(0.8)',
    },
    '.text-bg-dark': {
      'background-image': "url('/text-bg-white.jpg')",
      'filter': 'brightness(1.2) contrast(1.3)',
    },
    // Dark mode media query
    '@media (prefers-color-scheme: dark)': {
      '.text-bg-animated': {
        'background-image': "url('/text-bg-white.jpg')",
        'filter': 'brightness(1.2) contrast(1.3)',
      }
    },
    // Manual dark mode class
    '.dark .text-bg-animated': {
      'background-image': "url('/text-bg-white.jpg')",
      'filter': 'brightness(1.2) contrast(1.3)',
    }
  };

  addUtilities(newUtilities);
};

const addVariablesForColors = ({ addBase, theme }: any) => {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
};

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			'color-1': 'hsl(var(--color-1))',
  			'color-2': 'hsl(var(--color-2))',
  			'color-3': 'hsl(var(--color-3))',
  			'color-4': 'hsl(var(--color-4))',
  			'color-5': 'hsl(var(--color-5))'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		fontFamily: {
  			regular: ["SFProRegular", "sans-serif"],
  			medium: ["SFProMedium", "sans-serif"],
  			bold: ["SFProBold", "sans-serif"]
  		},
		animation: {
			rainbow: 'rainbow var(--speed, 2s) infinite linear',
			'shimmer-slide': 'shimmer-slide var(--speed) ease-in-out infinite alternate',
			'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear',
			'animate-background': 'animate-background 5s infinite alternate linear',
			'blur-in': 'blur-in 1s ease-out forwards',
			'blur-in-mask': 'blur-in-mask 0.8s ease-out forwards'
		},
		keyframes: {
			rainbow: {
				'0%': {
					'background-position': '0%'
				},
				'100%': {
					'background-position': '200%'
				}
			},
			'shimmer-slide': {
				to: {
					transform: 'translate(calc(100cqw - 100%), 0)'
				}
			},
			'spin-around': {
				'0%': {
					transform: 'translateZ(0) rotate(0)'
				},
				'15%, 35%': {
					transform: 'translateZ(0) rotate(90deg)'
				},
				'65%, 85%': {
					transform: 'translateZ(0) rotate(270deg)'
				},
				'100%': {
					transform: 'translateZ(0) rotate(360deg)'
				}
			},
			'animate-background': {
				'0%': {
					'background-position': '0 50%'
				},
				'100%': {
					'background-position': '100% 50%'
				}
			},
			'blur-in': {
				'0%': {
					filter: 'blur(10px)',
					opacity: '0'
				},
				'100%': {
					filter: 'blur(0px)',
					opacity: '1'
				}
			},
			'blur-in-mask': {
				'0%': {
					filter: 'blur(10px)',
					opacity: '0',
					'clip-path': 'inset(0 100% 0 0)'
				},
				'100%': {
					filter: 'blur(0px)',
					opacity: '1',
					'clip-path': 'inset(0 0% 0 0)'
				}
			}
		}
  	}
  },
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors, // Add the custom plugin here
    addTextBackgroundUtilities, // Add text background utilities
  ],
};

export default config;
