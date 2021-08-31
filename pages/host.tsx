import * as React from "react";
import { PlasmicCanvasHost } from "@plasmicapp/loader-nextjs/host";
import Head from "next/head";
import "../init";

function Host() {
  return (
    <div>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        !function(){const n=window,i="__REACT_DEVTOOLS_GLOBAL_HOOK__",o="__PlasmicPreambleVersion",t=function(){}
if(void 0!==n){if(n.parent!==n)try{n[i]=n.parent[i]}catch(e){}if(!n[i]){const r=new Map
n[i]={supportsFiber:!0,renderers:r,inject:function(n){r.set(r.size+1,n)},onCommitFiberRoot:t,onCommitFiberUnmount:t}}n[i][o]||(n[i][o]="1")}}()`,
          }}
        ></script>
        <link
          href="https://fonts.googleapis.com/css?family=Material+Icons&display=block"
          rel="stylesheet"
        />
      </Head>
      <PlasmicCanvasHost />
    </div>
  );
}

export default Host;
