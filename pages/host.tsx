import * as React from "react";
import { registerComponent, PlasmicCanvasHost } from "@plasmicapp/host";
import { Slider, Menu, Collapse, Alert } from "antd";
import MenuItem from "antd/lib/menu/MenuItem";
import CollapsePanel from "antd/lib/collapse/CollapsePanel";
import YouTube from "react-youtube";
import {
  RadialChart,
  XYPlot,
  XAxis,
  YAxis,
  VerticalBarSeries,
} from "react-vis";
import { GoogleMap } from "@react-google-maps/api";

import "antd/dist/antd.css";
import "react-vis/dist/style.css";
import Head from "next/head";

function Host() {
  const [canvasHost, setCanvasHost] = React.useState<React.ReactNode>(null);
  React.useEffect(() => {
    registerComponent(Slider, {
      name: "Slider",
      props: {
        disabled: "boolean",
        range: "boolean",
        vertical: "boolean",
      },
      importPath: "antd",
    });

    registerComponent(Menu, {
      name: "Menu",
      props: {
        mode: "string",
        theme: "string",
        selectedKeys: "object",
        defaultSelectedKeys: "object",
        children: {
          type: "slot",
          allowedComponents: ["MenuItem"],
        },
      },
      importPath: "antd",
    });

    registerComponent(MenuItem, {
      name: "MenuItem",
      props: {
        key: "string",
        children: "slot",
      },
      importPath: "antd/lib/menu/MenuItem",
      isDefaultExport: true,
    });

    registerComponent(Collapse, {
      name: "Collapse",
      props: {
        defaultActiveKey: "object",
        children: {
          type: "slot",
          allowedComponents: ["CollapsePanel"],
        },
      },
      importPath: "antd",
    });

    registerComponent(CollapsePanel, {
      name: "CollapsePanel",
      props: {
        header: "string",
        key: "string",
        children: "slot",
      },
      importPath: "antd/lib/collapse/CollapsePanel",
      isDefaultExport: true,
    });

    registerComponent(Alert, {
      name: "Alert",
      props: {
        message: "string",
        description: "slot",
        type: "string",
        showIcon: "boolean",
      },
      importPath: "antd",
    });

    registerComponent(YouTube, {
      name: "YouTube",
      props: {
        videoId: "string",
      },
      importPath: "react-youtube",
      isDefaultExport: true,
    });

    registerComponent(RadialChart, {
      name: "Radial Chart",
      props: {
        data: "object",
        height: "number",
        width: "number",
      },
      importPath: "react-vis",
      importName: "RadialChart",
    });

    registerComponent(XYPlot, {
      name: "XY Plot",
      props: {
        height: "number",
        width: "number",
        xDomain: "object",
        yDomain: "object",
        children: {
          type: "slot",
          allowedComponents: ["X Axis", "Y Axis", "Bar Series"],
        },
      },
      importPath: "react-vis",
      importName: "XYPlot",
    });

    registerComponent(XAxis, {
      name: "X Axis",
      props: {},
      importPath: "react-vis",
      importName: "XAxis",
    });

    registerComponent(YAxis, {
      name: "Y Axis",
      props: {},
      importPath: "react-vis",
      importName: "YAxis",
    });

    registerComponent(VerticalBarSeries, {
      name: "Bar Series",
      props: {
        data: "object",
        barWidth: "number",
      },
      importPath: "react-vis",
      importName: "VerticalBarSeries",
    });

    registerComponent(GoogleMap, {
      name: "Map",
      props: {
        center: "object",
        zoom: "number",
      },
      importPath: "@react-google-maps/api",
      importName: "GoogleMap",
      classNameProp: "mapContainerClassName",
    });
    document.querySelector("body").style.display = "contents";
    setCanvasHost(<PlasmicCanvasHost />);
  }, []);
  return (
    <div>
      <Head>
        <script src="/preamble.js" />
      </Head>
      {canvasHost}
    </div>
  );
}

export default Host;
