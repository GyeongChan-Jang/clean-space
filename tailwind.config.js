/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Pretendard: ['Pretendard', 'sans-serif'],
        PretendardBlack: ['PretendardBlack', 'sans-serif'],
        PretendardBold: ['PretendardBold', 'sans-serif'],
        PretendardExtraBold: ['PretendardExtraBold', 'sans-serif'],
        PretendardExtraLight: ['PretendardExtraLight', 'sans-serif'],
        PretendardLight: ['PretendardLight', 'sans-serif'],
        PretendardMedium: ['PretendardMedium', 'sans-serif'],
        PretendardSemiBold: ['PretendardSemiBold', 'sans-serif'],
        PretendardThin: ['PretendardThin', 'sans-serif']
      },
      colors: {
        primary: {
          100: '#F0FBFE',
          200: '#E1F7FD',
          300: '#C3EEFB',
          400: '#A5E6FA',
          500: '#5CCEF8', // 메인 컬러
          600: '#2AB7F5',
          700: '#0D99D7',
          800: '#0B7AB0',
          900: '#085C89'
        },
        secondary: {
          100: '#F7F7F7',
          200: '#EBEBEB',
          300: '#DDDDDD',
          400: '#D3D3D3',
          500: '#C2C2C2',
          600: '#B0B0B0',
          700: '#717171',
          800: '#5E5E5E',
          900: '#222222'
        },
        success: {
          100: '#F0FFF4',
          200: '#C6F6D5',
          300: '#9AE6B4',
          400: '#68D391',
          500: '#38A169',
          600: '#2F855A',
          700: '#276749',
          800: '#22543D',
          900: '#1C4532'
        },
        danger: {
          100: '#FFF5F5',
          200: '#FED7D7',
          300: '#FEB2B2',
          400: '#FC8181',
          500: '#F56565',
          600: '#E53E3E',
          700: '#C53030',
          800: '#9B2C2C',
          900: '#742A2A'
        },
        warning: {
          100: '#FFFBEB',
          200: '#FEF3C7',
          300: '#FDE68A',
          400: '#FACC15',
          500: '#EAB308',
          600: '#CA8A04',
          700: '#A16207',
          800: '#854D0E',
          900: '#713F12'
        },
        general: {
          100: '#CED1DD',
          200: '#858585',
          300: '#EEEEEE',
          400: '#0CC25F',
          500: '#F6F8FA',
          600: '#E6F3FF',
          700: '#EBEBEB',
          800: '#ADADAD'
        }
      }
    }
  },
  plugins: []
}
