/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/**/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Giggz Brand Colors - Blue Tints
        primary: {
          50: '#E3EDF2', // Lightest blue tint
          100: '#C8DCE6', // Very light blue
          200: '#AECBD9', // Light blue
          300: '#97BACC', // Medium-light blue
          400: '#81ABBF', // Medium blue
          500: '#6D9BB3', // Base blue
          600: '#5A8DA6', // Medium-dark blue
          700: '#497E99', // Dark blue
          800: '#3A718C', // Darker blue
          900: '#2D637F', // Darkest blue
        },

        // Giggz Brand Colors - Orange/Yellow Tints
        secondary: {
          50: '#FCF4E6', // Very light cream
          100: '#F9EACD', // Light cream
          200: '#F6E0B4', // Light yellow
          300: '#F3D69C', // Medium-light yellow
          400: '#F0CC85', // Medium yellow
          500: '#EDC36E', // Base yellow
          600: '#EAB958', // Medium-dark yellow
          700: '#E7B042', // Dark yellow
          800: '#E09E19', // Orange-yellow
          900: '#D48806', // Deep orange
        },

        // Giggz Brand Colors - Gray Tints
        gray: {
          50: '#EAEAEA', // Lightest gray
          100: '#D4D4D4', // Very light gray
          200: '#BFBFBF', // Light gray
          300: '#A9A9A9', // Medium-light gray
          400: '#949494', // Medium gray
          500: '#7E7E7E', // Base gray
          600: '#696969', // Medium-dark gray
          700: '#545454', // Dark gray
          800: '#3E3E3E', // Very dark gray
          900: '#282828', // Darkest gray
        },

        // Keep your existing success colors
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e',
          600: '#16a34a',
        },

        // Card colors using lighter brand tints
        card: {
          50: '#FCFCFC', // Almost white
          100: '#F9F9F9', // Very light gray
          200: '#F6F6F6', // Light gray
        },

        // Accent colors using primary brand blues
        accent: {
          500: '#5A8DA6', // Brand blue
          600: '#497E99', // Darker brand blue
          700: '#3A718C', // Even darker brand blue
        },

        // Error colors (keeping standard reds for accessibility)
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
        },

        // Warning colors using brand yellows
        warning: {
          50: '#FCF4E6',
          100: '#F9EACD',
          500: '#EDC36E',
          600: '#E7B042',
          700: '#E09E19',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'card-hover':
          '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
        brand: '0 4px 14px 0 rgba(93, 141, 166, 0.15)', // Shadow using brand blue
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
