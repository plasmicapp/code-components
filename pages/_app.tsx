import * as React from "react";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBA3XOn42g_kW2DDuVgwsZ-Q2jdrRbAvzY"
          type="text/javascript"
          key="maps"
        ></script>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
