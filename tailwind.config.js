/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'];
export const theme = {
  extend: {},
  colors: {

  },
};
export const plugins = [require('flowbite/plugin')];