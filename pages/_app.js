import '../styles/globals.css'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { Global, css } from '@emotion/react'

const GlobalStyle = ({ children }) => {
  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }
          ::-webkit-scrollbar {
            width: 5px;
          }
          ::-webkit-scrollbar-track {
            background: #f1f1f1;
          }
          ::-webkit-scrollbar-thumb {
            background: #333;
            border-radius: 10px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #555;
          }
          .selected {
            background: #fafafa;
            color: #333;
            border-bottom: solid 6px #000;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }

          .container {
            width: 90%;
            margin: 1rem auto;
          }

          .amount {
            padding: 5px 40px;
            border: solid 2px green;
            border-radius: 6px;
            color: green;
            font-weight: 800;
            font-size: 1rem;
          }

          .dashboard {
            width: 30%;
            padding: 1rem 2rem;
            border-left: solid 1px #333;
            border-right: solid 1px #333;
          }

          .selected {
            background: #fafafa;
            color: #333;
            border-bottom: solid 6px #000;
          }
          select {
            outline: none;
            border: solid 1px #ccc !important;
            color: #999 !important;
            padding: 8px;
            border-radius: 4px;
            transition: all 0.5s ease-in-out;
            width: 100%;
          }
          input {
            outline: none !important;
            border: solid 1px #ccc !important;
            /* color: #fff; */
            padding: 8px;
            border-radius: 4px;
            transition: all 0.5s ease-in-out;
            width: 100%;
            background: none !important;
          }
          input:focus {
            border: solid 1px #333 !important;
            padding-left: 1rem;
            background: #fff !important;
            color: #333;
          }
          input::placeholder {
            font-size: 1rem;
          }

          .resTable {
            overflow-x: auto;
            overflow-y: scroll;
            margin-bottom: 5rem;
          }

          table {
            border: 1px solid #ccc;
            border-collapse: collapse;
            margin: 0;
            padding: 0;
            width: 100%;
            background: #fff;
          }

          table caption {
            font-size: 1.5em;
            margin: 0.5em 0 0.75em;
          }

          table tr {
            border: 1px solid #ddd;
            padding: 0.35em;
          }

          table th,
          table td {
            text-align: center;
          }

          table thead {
            box-shadow: 10px 5px 4px rgba(0, 0, 0, 0.15);
          }

          table th {
            font-size: 0.85em;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            padding: 20px;
          }

          table td {
            font-size: 0.85em;
            text-transform: uppercase;
            padding: 20px;
          }

          table td:nth-of-type(2) {
            font-weight: 900;
          }
          table td:nth-of-type(8) {
            color: green;
          }
          table td:first-of-type {
            display: none;
          }
          table th:first-of-type {
            display: none;
          }

          @media screen and (max-width: 700px) {
            .displaySm {
              display: none;
            }
          }

          @media screen and (max-width: 800px) {
            table {
              border: 0;
              padding: 20px;
              overflow-y: scroll;
            }

            table caption {
              font-size: 1.3em;
            }

            table thead {
              border: none;
              clip: rect(0 0 0 0);
              height: 1px;
              margin: -1px;
              overflow: scroll;
              font-weight: 900;
              padding: 0;
              /* position: absolute; */
              width: 1px;
              white-space: nowrap;
            }

            table tr {
              border-bottom: 3px solid #ddd;
              /* display: block; */
              /* margin-bottom: 0.625em; */
            }

            table th {
              font-weight: 900;
              color: #999;
              padding: 10px 20px;
              font-size: 0.8em;
            }

            table td {
              /* border-bottom: 1px solid #ddd; */
              /* display: block; */
              font-size: 0.8em;
              /* text-align: right; */
              white-space: nowrap;
            }

            table td::before {
              /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
              content: attr(data-label);
              /* float: left; */
              font-weight: bold;
              text-transform: uppercase;
            }

            table td:last-child {
              border-bottom: 0;
            }
          }
        `}
      />
      {children}
    </>
  )
}

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
