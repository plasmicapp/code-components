import * as React from "react";
import { PlasmicCanvasHost, registerComponent } from "@plasmicapp/host";
import { Alert, Carousel, Collapse, Menu, Slider } from "antd";
import MenuItem from "antd/lib/menu/MenuItem";
import CollapsePanel from "antd/lib/collapse/CollapsePanel";
import YouTube from "react-youtube";
import {
  RadialChart,
  VerticalBarSeries,
  XAxis,
  XYPlot,
  YAxis,
} from "react-vis";
import { GoogleMap } from "@react-google-maps/api";
import {
  Button as MuiButton,
  ButtonGroup as MuiButtonGroup,
} from "@material-ui/core";

import Head from "next/head";
import { CmsGallery, ProductGallery } from "../components/ItemGallery";
import { MuiSelect } from "../components/MuiSelect";
import { DynWiredButton, DynWiredIconButton } from "../components/DynamicWired";
import { ArwesCard } from "../components/Arwes";
import { Text } from "@arwes/core";
import { Embed } from "../components/Embed";
import ReactParallaxTilt from "react-parallax-tilt";
import { Tilt } from "../components/Tilt";
import { Parallax } from "react-scroll-parallax";
import { ParallaxWrapper } from "../components/ParallaxWrapper";
import { Reveal } from "../components/Reveal";

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

registerComponent(MuiSelect, {
  name: "MuiSelect",
  props: {
    defaultValue: "string",
    options: "object",
    label: "string",
  },
  importPath: "./components/MuiSelect",
  importName: "Select",
});

registerComponent(MuiButtonGroup, {
  name: "MuiButtonGroup",
  props: {
    color: "string",
    variant: "string",
    children: "slot",
  },
  importPath: "@material-ui/core",
  importName: "ButtonGroup",
});

registerComponent(MuiButton, {
  name: "MuiButton",
  props: {
    children: "slot",
    disabled: "boolean",
    color: "string",
    variant: "string",
    href: "string",
  },
  importPath: "@material-ui/core",
  importName: "Button",
});

registerComponent(DynWiredButton, {
  name: "WiredButton",
  props: {
    children: "string",
    elevation: "number",
    disabled: "boolean",
  },
  importPath: "./components/DynamicWired",
  importName: "DynWiredButton",
});

registerComponent(DynWiredIconButton, {
  name: "WiredIconButton",
  props: {
    icon: "string",
    iconSize: "number",
    iconColor: "string",
    lineColor: "string",
    disabled: "boolean",
  },
  importPath: "./components/DynamicWired",
  importName: "DynWiredIconButton",
});

registerComponent(ProductGallery, {
  name: "ProductGallery",
  props: {
    count: "number",
    scroller: "boolean",
    category: "string",
  },
  importPath: "./components/ItemGallery",
  importName: "CmsGallery",
});

registerComponent(CmsGallery, {
  name: "CmsGallery",
  props: {
    count: "number",
    scroller: "boolean",
  },
  importPath: "./components/ItemGallery",
  importName: "CmsGallery",
});

registerComponent(ArwesCard, {
  name: "ArwesCard",
  props: {
    children: "slot",
  },
  importPath: "./components/Arwes",
  importName: "ArwesCard",
});

registerComponent(Text, {
  name: "ArwesText",
  props: {
    children: "string",
    as: "string",
  },
  importPath: "@arwes/core",
  importName: "Text",
});

registerComponent(Carousel, {
  name: "Carousel",
  props: {
    children: "slot",
  },
  importPath: "antd",
});

registerComponent(Embed, {
  name: "Embed",
  props: {
    code: "string",
  },
  importPath: "./components/Embed",
});

registerComponent(Tilt, {
  name: "Tilt",
  props: {
    tiltEnable: "boolean",
    tiltReverse: "boolean",
    tiltAngleXInitial: "number",
    tiltAngleYInitial: "number",
    tiltMaxAngleX: "number",
    tiltMaxAngleY: "number",
    tiltAxis: "string",
    tiltAngleXManual: "number",
    tiltAngleYManual: "number",
    glareEnable: "boolean",
    glareMaxOpacity: "number",
    glareColor: "string",
    glareBorderRadius: "number",
    glarePosition: "string",
    scale: "number",
    perspective: "number",
    flipVertically: "boolean",
    flipHorizontally: "boolean",
    reset: "boolean",
    transitionEasing: "string",
    transitionSpeed: "number",
    trackOnWindow: "boolean",
    gyroscope: "boolean",
    children: "slot",
  },
  importPath: "./components/Tilt",
});

registerComponent(ParallaxWrapper, {
  name: "Parallax",
  props: {
    x: "object",
    y: "object",
    disabled: "boolean",
    children: "slot",
  },
  importPath: "./components/ParallaxWrapper",
  importName: "ParallaxWrapper",
});

registerComponent(Reveal, {
  name: "Reveal",
  props: {
    children: "slot",
    effect: "string",
    cascade: "boolean",
    damping: "boolean",
    direction: "string",
    delay: "number",
    duration: "number",
    fraction: "number",
    triggerOnce: "boolean",
  },
  importPath: "./components/Reveal",
  importName: "Reveal",
});

function Host() {
  return (
    <div>
      <Head>
        <script src="https://studio.plasmic.app/static/js/preamble.js" />
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
