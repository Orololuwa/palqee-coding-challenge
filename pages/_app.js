import { ThemeProvider } from "styled-components";
import theme from "theme";
import GlobalStyle from "./globalStyles";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
