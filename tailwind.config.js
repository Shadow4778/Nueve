/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary color scheme based on rgb(71 85 105) - slate-600
        primary: {
          50: '#f8fafc',   // Very light slate
          100: '#f1f5f9',  // Light slate
          200: '#e2e8f0',  // Lighter slate
          300: '#cbd5e1',  // Light-medium slate
          400: '#94a3b8',  // Medium slate
          500: '#64748b',  // Medium-dark slate
          600: '#475569',  // Primary color - rgb(71 85 105)
          700: '#334155',  // Dark slate
          800: '#1e293b',  // Darker slate
          900: '#0f172a',  // Very dark slate
        },
        // Compatible pastel colors that work with slate-600
        pastel: {
          // Soft blues that complement slate
          blue: '#dbeafe',      // Light blue
          'blue-light': '#eff6ff', // Very light blue
          'blue-dark': '#3b82f6',  // Medium blue
          
          // Warm oranges for contrast
          orange: '#fed7aa',    // Light orange
          'orange-light': '#fef3e2', // Very light orange
          'orange-dark': '#ea580c',  // Medium orange
          
          // Neutral greys that harmonize
          grey: '#e5e7eb',      // Light grey
          'grey-light': '#f3f4f6', // Very light grey
          'grey-dark': '#6b7280',  // Medium grey
          
          // Soft yellows for warmth
          lemon: '#fef3c7',     // Light yellow
          'lemon-light': '#fffbeb', // Very light yellow
          'lemon-dark': '#d97706',  // Medium yellow
          
          // Muted greens for balance
          green: '#d1fae5',     // Light green
          'green-light': '#ecfdf5', // Very light green
          'green-dark': '#059669',  // Medium green
          
          // Soft purples for elegance
          purple: '#e9d5ff',    // Light purple
          'purple-light': '#f3e8ff', // Very light purple
          'purple-dark': '#7c3aed', // Medium purple
          
          // Soft rose/pink tones
          pink: '#fce7f3',      // Light pink
          'pink-light': '#fdf2f8', // Very light pink
          'pink-dark': '#be185d',  // Medium pink
        }
      }
    },
  },
  plugins: [],
};