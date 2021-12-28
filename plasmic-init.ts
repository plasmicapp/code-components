/** @format */

import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
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
import {
  CmsGallery,
  CmsItemField,
  ProductCollection,
  ProductGallery,
  ProductImage,
  ProductPrice,
  ProductTitle,
} from "./components/ItemGallery";
import { MuiSelect } from "./components/MuiSelect";
import { DynWiredButton, DynWiredIconButton } from "./components/DynamicWired";
import { ArwesCard } from "./components/Arwes";
import { Figure, Text } from "@arwes/core";
import { Embed } from "./components/Embed";
import { Tilt } from "./components/Tilt";
import { ParallaxWrapper } from "./components/ParallaxWrapper";
import { Reveal } from "./components/Reveal";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "aPZu6epBt5EaEYRgMF1d6z",
      token:
        "TwiTi9V7cZzJn5j4jSpwZizlBPrDiQQh0T3hybnGtbPaHCsxBnv26Tp53atqTywSvXuXxpYpDa5Y2fqA",
    },
  ],
  preview: true,
});

//
// Registration of code components
//

PLASMIC.registerComponent(Slider, {
  name: "Slider",
  props: {
    disabled: "boolean",
    range: "boolean",
    vertical: "boolean",
  },
});

PLASMIC.registerComponent(Menu, {
  name: "Menu",
  props: {
    mode: "string",
    theme: "string",
    // We need to use `selectedKeys` instead of `defaultSelectedKeys` to
    // control/toggle the selected keys in the editor.
    selectedKeys: {
      type: "object",
      editOnly: true,
      // However we want the generated code to map the values we set in the
      // editor to `defaultSelectedKeys` (so the selected keys will change as
      // the user selects new items)
      uncontrolledProp: "defaultSelectedKeys",
    },
    children: {
      type: "slot",
      allowedComponents: ["MenuItem"],
    },
  },
});

PLASMIC.registerComponent(MenuItem, {
  name: "MenuItem",
  props: {
    key: "string",
    children: "slot",
  },
  isDefaultExport: true,
});

PLASMIC.registerComponent(Collapse, {
  name: "Collapse",
  props: {
    activeKey: {
      type: "object",
      editOnly: true,
      uncontrolledProp: "defaultActiveKey",
    },
    children: {
      type: "slot",
      allowedComponents: ["CollapsePanel"],
    },
  },
});

PLASMIC.registerComponent(CollapsePanel, {
  name: "CollapsePanel",
  props: {
    header: "string",
    key: "string",
    children: "slot",
  },
  isDefaultExport: true,
});

PLASMIC.registerComponent(Alert, {
  name: "Alert",
  props: {
    message: "string",
    description: "slot",
    type: {
      type: "choice",
      options: ["success", "info", "warning", "error"],
    },
    showIcon: "boolean",
  },
});

PLASMIC.registerComponent(YouTube, {
  name: "YouTube",
  props: {
    videoId: "string",
  },
  isDefaultExport: true,
});

PLASMIC.registerComponent(RadialChart, {
  name: "Radial Chart",
  props: {
    data: "object",
    height: "number",
    width: "number",
  },
  importName: "RadialChart",
});

PLASMIC.registerComponent(XYPlot, {
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
  importName: "XYPlot",
});

PLASMIC.registerComponent(XAxis, {
  name: "X Axis",
  props: {},
  importName: "XAxis",
});

PLASMIC.registerComponent(YAxis, {
  name: "Y Axis",
  props: {},
  importName: "YAxis",
});

PLASMIC.registerComponent(VerticalBarSeries, {
  name: "Bar Series",
  props: {
    data: "object",
    barWidth: "number",
  },
  importName: "VerticalBarSeries",
});

PLASMIC.registerComponent(GoogleMap, {
  name: "Map",
  props: {
    center: "object",
    zoom: "number",
  },
  importName: "GoogleMap",
  classNameProp: "mapContainerClassName",
});

PLASMIC.registerComponent(MuiSelect, {
  name: "MuiSelect",
  props: {
    defaultValue: "string",
    options: "object",
    label: "string",
  },
});

PLASMIC.registerComponent(MuiButtonGroup, {
  name: "MuiButtonGroup",
  props: {
    color: {
      type: "choice",
      options: ["primary", "secondary"],
    },
    variant: {
      type: "choice",
      options: ["contained", "outlined", "text"],
    },
    children: "slot",
  },
  importName: "ButtonGroup",
});

PLASMIC.registerComponent(MuiButton, {
  name: "MuiButton",
  props: {
    children: "slot",
    disabled: "boolean",
    color: {
      type: "choice",
      options: ["primary", "secondary"],
    },
    variant: {
      type: "choice",
      options: ["contained", "outlined", "text"],
    },
    href: "string",
  },
  importName: "Button",
});

PLASMIC.registerComponent(DynWiredButton, {
  name: "WiredButton",
  props: {
    children: "string",
    elevation: "number",
    disabled: "boolean",
  },
  importName: "DynWiredButton",
});

PLASMIC.registerComponent(DynWiredIconButton, {
  name: "WiredIconButton",
  props: {
    icon: "string",
    iconSize: "number",
    iconColor: "string",
    lineColor: "string",
    disabled: "boolean",
  },
  importName: "DynWiredIconButton",
});

PLASMIC.registerComponent(ProductGallery, {
  name: "ProductGallery",
  props: {
    count: "number",
    scroller: "boolean",
    category: {
      type: "choice",
      options: ["", "Boots", "Shirts", "Knitwear"],
    },
  },
});

PLASMIC.registerComponent(ProductCollection, {
  name: "ProductCollection",
  displayName: "Product Collection",
  props: {
    collectionHandle: {
      type: "choice",
      options: [
        "latest-stuff",
        "casual-things",
        "summer-collection",
        "services",
        "gifts",
      ],
    },
    scroller: "boolean",
    count: "number",
    children: "slot",
    columns: {
      type: "number",
      defaultValue: 4,
    },
    columnGap: {
      type: "number",
      defaultValue: 16,
    },
    rowGap: {
      type: "number",
      defaultValue: 16,
    },
  },
  importPath: "./ProductComponents",
});

PLASMIC.registerComponent(ProductTitle, {
  name: "ProductTitle",
  props: {},
});

PLASMIC.registerComponent(ProductImage, {
  name: "ProductImage",
  props: {},
});

PLASMIC.registerComponent(ProductPrice, {
  name: "ProductPrice",
  props: {},
});

PLASMIC.registerComponent(CmsGallery, {
  name: "CmsGallery",
  props: {
    count: "number",
    scroller: "boolean",
    children: "slot",
    columns: {
      type: "number",
      defaultValue: 4,
    },
    columnGap: {
      type: "number",
      defaultValue: 16,
    },
    rowGap: {
      type: "number",
      defaultValue: 16,
    },
  },
});

PLASMIC.registerComponent(CmsItemField, {
  name: "CmsItemField",
  props: {
    field: "string",
  },
});

PLASMIC.registerComponent(ArwesCard, {
  name: "ArwesCard",
  props: {
    caption: "slot",
    children: "slot",
    title: "slot",
  },
  importName: "ArwesCard",
});

PLASMIC.registerComponent(Text, {
  name: "ArwesText",
  props: {
    children: "slot",
    as: "string",
  },
  importName: "Text",
});

PLASMIC.registerComponent(Figure, {
  name: "ArwesFigure",
  props: {
    children: "slot",
    alt: "string",
    src: "string",
  },
  importName: "Figure",
});

PLASMIC.registerComponent(Carousel, {
  name: "Carousel",
  props: {
    children: "slot",
  },
});

// PLASMIC.registerComponent(Embed, {
//   name: "Embed",
//   props: {
//     code: "string",
//   },
// });

PLASMIC.registerComponent(Tilt, {
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
    glareBorderRadius: "string",
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
});

PLASMIC.registerComponent(ParallaxWrapper, {
  name: "Parallax",
  props: {
    speed: "number",
    disabled: "boolean",
    children: "slot",
  },
  importName: "ParallaxWrapper",
});

PLASMIC.registerComponent(Reveal, {
  name: "Reveal",
  props: {
    children: "slot",
    effect: {
      type: "choice",
      options: [
        "bounce",
        "fade",
        "flip",
        "hinge",
        "jackinthebox",
        "roll",
        "rotate",
        "slide",
        "zoom",
      ],
    },
    cascade: "boolean",
    damping: "boolean",
    direction: {
      type: "choice",
      options: ["up", "down", "left", "right"],
    },
    delay: "number",
    duration: "number",
    fraction: "number",
    triggerOnce: "boolean",
  },
  importName: "Reveal",
});
