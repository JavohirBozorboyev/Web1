import AppContainer from "../layout/AppContainer/AppContainer";
import "../styles/globals.css";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <AppContainer>
      <Component {...pageProps} />
    </AppContainer>
  );
}

export default MyApp;
