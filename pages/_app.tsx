import * as React from "react";
import Head from "next/head";
import "../styles/globals.css";
import "antd/dist/antd.css";
import "react-vis/dist/style.css";
import { ParallaxProvider } from "react-scroll-parallax";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBA3XOn42g_kW2DDuVgwsZ-Q2jdrRbAvzY"
          type="text/javascript"
          key="maps"
        ></script>
      </Head>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </div>
  );
}

export default MyApp;
