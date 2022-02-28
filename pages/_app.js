import { ThemeProvider } from "styled-components";
import theme from "theme";
import GlobalStyle from "./globalStyles";
import Header from "layout/header";
import SideBar from "layout/sidebar";
import 'styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <SideBar />
        <div className="mainContent">
          <Header />
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  );
}
