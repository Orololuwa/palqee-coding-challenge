import { ThemeProvider } from "styled-components";
import theme from "theme";
import GlobalStyle from "./globalStyles";
import Header from "layout/header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
