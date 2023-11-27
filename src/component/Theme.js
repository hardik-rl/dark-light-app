// // src/Theme.js
// import { createGlobalStyle } from 'styled-components';

// export const lightTheme = {
//   body: '#fff',
//   text: '#000',
// };

// export const darkTheme = {
//   body: '#1a1a1a',
//   text: '#fff',
// };

// export const GlobalStyles = createGlobalStyle`
//   body {
//     background-color: ${(props) => props.theme.body};
//     color: ${(props) => props.theme.text};
//     transition: background-color 0.3s, color 0.3s;
//   }
// `;

export const lightTheme = {
  body: '#fff',
  text: '#000',
};

export const darkTheme = {
  body: '#1a1a1a',
  text: '#fff',
};

export const GlobalStyles = (theme) => {
  const root = document.documentElement;
  root.style.setProperty('--body-bg', theme.body);
  root.style.setProperty('--text-color', theme.text);

  document.body.classList.toggle('dark-theme', theme === 'dark');
};
