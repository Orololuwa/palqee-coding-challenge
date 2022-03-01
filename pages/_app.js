import { ThemeProvider } from "styled-components";
import theme from "theme";
import GlobalStyle from "./globalStyles";
import { StoreContextProvider } from "context/storeContext";
import Header from "layout/header";
import SideBar from "layout/sidebar";
import "styles/globals.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:57541" }),
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <StoreContextProvider>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <SideBar />
          <div className="mainContent">
            <Header />
            <Component {...pageProps} />
          </div>
        </ThemeProvider>
      </StoreContextProvider>{" "}
    </ApolloProvider>
  );
}
