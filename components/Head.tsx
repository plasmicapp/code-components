import * as React from "react";
import NextHead from 'next/head'

interface HeadProps {
  children: React.ReactNode;
}

export default function Head({children}: HeadProps) {
  return <div>
    <NextHead>
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBA3XOn42g_kW2DDuVgwsZ-Q2jdrRbAvzY" type="text/javascript" key="maps"></script>
    </NextHead>
    {children}
  </div>
}