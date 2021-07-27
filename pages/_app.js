import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { Global, css } from '@emotion/react';


const GlobalStyle = ({ children }) => {
  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          };
          body {
            background: #fafafa;
          };
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
      {children}
    </>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider>
      <GlobalStyle />
        <Component {...pageProps} />
      </ChakraProvider>
    </ThemeProvider>
  )
}

export default MyApp
