// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aPZu6epBt5EaEYRgMF1d6z
// Component: 9K6Sk2ST166Ni
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import HomeHeader from "../../HomeHeader"; // plasmic-import: 3oILK2v_-pyvd/component
import ListItem from "../../ListItem"; // plasmic-import: UmnocbxlOe4RY/component
import YouTube from "react-youtube"; // plasmic-import: -IzJqW3d4U/codeComponent
import { GoogleMap } from "@react-google-maps/api"; // plasmic-import: JpRCwVFY78Q/codeComponent
import { Slider } from "antd"; // plasmic-import: qXDIYs1hPZ/codeComponent
import { Menu } from "antd"; // plasmic-import: a0dmmmT9bh/codeComponent
import MenuItem from "antd/lib/menu/MenuItem"; // plasmic-import: ZFeP1ZxmO_/codeComponent
import { Collapse } from "antd"; // plasmic-import: HrrYx87CJM/codeComponent
import CollapsePanel from "antd/lib/collapse/CollapsePanel"; // plasmic-import: yTjqZvpEeG/codeComponent
import { Alert } from "antd"; // plasmic-import: zDhUktoIlT/codeComponent
import { RadialChart } from "react-vis"; // plasmic-import: zQ6T7Q81cg/codeComponent
import { XYPlot } from "react-vis"; // plasmic-import: klMWInag0f/codeComponent
import { XAxis } from "react-vis"; // plasmic-import: UdxtqL9t93/codeComponent
import { YAxis } from "react-vis"; // plasmic-import: OoewUcYk73/codeComponent
import { VerticalBarSeries } from "react-vis"; // plasmic-import: 123d63LFaV/codeComponent
import Footer from "../../Footer"; // plasmic-import: wGo48tXf46AUw/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_code_component_examples.module.css"; // plasmic-import: aPZu6epBt5EaEYRgMF1d6z/projectcss
import * as sty from "./PlasmicHome.module.css"; // plasmic-import: 9K6Sk2ST166Ni/css

import PlasmicLogoIcon from "./icons/PlasmicIcon__PlasmicLogo"; // plasmic-import: bD0dbNOKNGywZ/icon

export type PlasmicHome__VariantMembers = {};

export type PlasmicHome__VariantsArgs = {};
type VariantPropType = keyof PlasmicHome__VariantsArgs;
export const PlasmicHome__VariantProps = new Array<VariantPropType>();

export type PlasmicHome__ArgsType = {};
type ArgPropType = keyof PlasmicHome__ArgsType;
export const PlasmicHome__ArgProps = new Array<ArgPropType>();

export type PlasmicHome__OverridesType = {
  root?: p.Flex<"div">;
  homeHeader?: p.Flex<typeof HomeHeader>;
  container?: p.Flex<"div">;
  youTube?: p.Flex<typeof YouTube>;
  map?: p.Flex<typeof GoogleMap>;
  slider?: p.Flex<typeof Slider>;
  menu?: p.Flex<typeof Menu>;
  collapse?: p.Flex<typeof Collapse>;
  svg?: p.Flex<"svg">;
  radialChart?: p.Flex<typeof RadialChart>;
  xyPlot?: p.Flex<typeof XYPlot>;
  xAxis?: p.Flex<typeof XAxis>;
  yAxis?: p.Flex<typeof YAxis>;
  barSeries?: p.Flex<typeof VerticalBarSeries>;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultHomeProps {
  dataFetches: PlasmicHome__Fetches;
}

function PlasmicHome__RenderFunc(props: {
  variants: PlasmicHome__VariantsArgs;
  args: PlasmicHome__ArgsType;
  overrides: PlasmicHome__OverridesType;
  dataFetches?: PlasmicHome__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <React.Fragment>
      <Head>
        <title key="title">{""}</title>
        <meta key="og:title" property="og:title" content={""} />
        <meta
          key="description"
          name="description"
          property="og:description"
          content={""}
        />
      </Head>

      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__datbb)}
          >
            <HomeHeader
              data-plasmic-name={"homeHeader"}
              data-plasmic-override={overrides.homeHeader}
              className={classNames("__wab_instance", sty.homeHeader)}
              title={"Code components"}
            />

            <p.Stack
              as={"div"}
              data-plasmic-name={"container"}
              data-plasmic-override={overrides.container}
              hasGap={true}
              className={classNames(defaultcss.all, sty.container)}
            >
              <ListItem
                _package={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box___33MxC
                    )}
                  >
                    {"react-youtube"}
                  </div>
                }
                className={classNames("__wab_instance", sty.listItem__tfkV)}
                title={"Youtube"}
              >
                <YouTube
                  data-plasmic-name={"youTube"}
                  data-plasmic-override={overrides.youTube}
                  className={classNames("__wab_instance", sty.youTube)}
                  videoId={"R6MeLqRQzYw" as const}
                />
              </ListItem>

              <ListItem
                _package={"@react-google-maps/api"}
                className={classNames("__wab_instance", sty.listItem__il7Xs)}
                title={"Maps"}
              >
                <GoogleMap
                  data-plasmic-name={"map"}
                  data-plasmic-override={overrides.map}
                  center={{ lat: -5, lng: -40 }}
                  mapContainerClassName={classNames("__wab_instance", sty.map)}
                  zoom={6 as const}
                />
              </ListItem>

              <ListItem
                _package={"antd"}
                className={classNames("__wab_instance", sty.listItem__tChJd)}
                title={"Slider"}
              >
                <Slider
                  data-plasmic-name={"slider"}
                  data-plasmic-override={overrides.slider}
                  className={classNames("__wab_instance", sty.slider)}
                  range={true}
                  vertical={false}
                />
              </ListItem>

              <ListItem
                _package={"antd"}
                className={classNames("__wab_instance", sty.listItem__el4De)}
                title={"Menu"}
              >
                <Menu
                  data-plasmic-name={"menu"}
                  data-plasmic-override={overrides.menu}
                  className={classNames("__wab_instance", sty.menu)}
                  defaultSelectedKeys={["opt3"]}
                >
                  <MenuItem
                    className={classNames(
                      "__wab_instance",
                      sty.menuItem___83QR3
                    )}
                    key={"opt1" as const}
                  >
                    {"Menu Option 1"}
                  </MenuItem>

                  <MenuItem
                    className={classNames(
                      "__wab_instance",
                      sty.menuItem___1PLx
                    )}
                    key={"opt2" as const}
                  >
                    {"Menu Option 2"}
                  </MenuItem>

                  <MenuItem
                    className={classNames(
                      "__wab_instance",
                      sty.menuItem__xo8Jv
                    )}
                    key={"opt3" as const}
                  >
                    {"Menu Option 3"}
                  </MenuItem>
                </Menu>
              </ListItem>

              <ListItem
                _package={"antd"}
                className={classNames("__wab_instance", sty.listItem__kfrAt)}
                title={"Collapse"}
              >
                <Collapse
                  data-plasmic-name={"collapse"}
                  data-plasmic-override={overrides.collapse}
                  className={classNames("__wab_instance", sty.collapse)}
                  defaultActiveKey={["1"]}
                >
                  <CollapsePanel
                    className={classNames(
                      "__wab_instance",
                      sty.collapsePanel___7XMTk
                    )}
                    header={"My collapse header" as const}
                    key={"1" as const}
                  >
                    {"First collapse contents!"}
                  </CollapsePanel>

                  <CollapsePanel
                    className={classNames(
                      "__wab_instance",
                      sty.collapsePanel__and7C
                    )}
                    header={"My other collapse panel" as const}
                    key={"2" as const}
                  >
                    {"More super fancy content"}
                  </CollapsePanel>
                </Collapse>
              </ListItem>

              <ListItem
                _package={"antd"}
                className={classNames("__wab_instance", sty.listItem__peCqW)}
                title={"Alert"}
              >
                <Alert
                  className={classNames("__wab_instance", sty.alert__nuj4J)}
                  description={
                    <div className={classNames(defaultcss.all, sty.box__qCm7R)}>
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.box__q6Thx
                        )}
                      >
                        {"Description goes here! "}
                      </div>

                      <PlasmicLogoIcon
                        data-plasmic-name={"svg"}
                        data-plasmic-override={overrides.svg}
                        className={classNames(defaultcss.all, sty.svg)}
                        role={"img"}
                      />
                    </div>
                  }
                  message={"So cooooool!" as const}
                  showIcon={true}
                  type={"success" as const}
                />

                <Alert
                  className={classNames("__wab_instance", sty.alert__bQk8E)}
                  description={":("}
                  message={"Ooops" as const}
                  showIcon={true}
                  type={"error" as const}
                />
              </ListItem>

              <ListItem
                _package={"react-vis"}
                className={classNames("__wab_instance", sty.listItem___2Iz78)}
                title={"Radial Chart"}
              >
                <RadialChart
                  data-plasmic-name={"radialChart"}
                  data-plasmic-override={overrides.radialChart}
                  className={classNames("__wab_instance", sty.radialChart)}
                  data={[
                    { angle: 1 },
                    { angle: 5 },
                    { angle: 7 },
                    { angle: 12 },
                    { angle: 7 }
                  ]}
                  height={150 as const}
                  width={150 as const}
                />
              </ListItem>

              <ListItem
                _package={"react-vis"}
                className={classNames("__wab_instance", sty.listItem__dL0Ja)}
                title={"Bar Series + XY Plot"}
              >
                <XYPlot
                  data-plasmic-name={"xyPlot"}
                  data-plasmic-override={overrides.xyPlot}
                  className={classNames("__wab_instance", sty.xyPlot)}
                  height={200 as const}
                  width={200 as const}
                  xDomain={[10, 50]}
                  yDomain={[0, 100]}
                >
                  <XAxis
                    data-plasmic-name={"xAxis"}
                    data-plasmic-override={overrides.xAxis}
                    className={classNames("__wab_instance", sty.xAxis)}
                  />

                  <YAxis
                    data-plasmic-name={"yAxis"}
                    data-plasmic-override={overrides.yAxis}
                    className={classNames("__wab_instance", sty.yAxis)}
                  />

                  <VerticalBarSeries
                    data-plasmic-name={"barSeries"}
                    data-plasmic-override={overrides.barSeries}
                    barWidth={1 as const}
                    className={classNames("__wab_instance", sty.barSeries)}
                    data={[
                      { id: 0, x: 12, y: 30 },
                      { id: 1, x: 29, y: 46 },
                      { id: 2, x: 43, y: 60 },
                      { id: 3, x: 16, y: 40 },
                      { id: 4, x: 39, y: 55 },
                      { id: 5, x: 25, y: 94 },
                      { id: 6, x: 36, y: 78 },
                      { id: 7, x: 33, y: 69 }
                    ]}
                  />
                </XYPlot>
              </ListItem>
            </p.Stack>

            <Footer
              data-plasmic-name={"footer"}
              data-plasmic-override={overrides.footer}
              className={classNames("__wab_instance", sty.footer)}
            />
          </p.Stack>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "homeHeader",
    "container",
    "youTube",
    "map",
    "slider",
    "menu",
    "collapse",
    "svg",
    "radialChart",
    "xyPlot",
    "xAxis",
    "yAxis",
    "barSeries",
    "footer"
  ],
  homeHeader: ["homeHeader"],
  container: [
    "container",
    "youTube",
    "map",
    "slider",
    "menu",
    "collapse",
    "svg",
    "radialChart",
    "xyPlot",
    "xAxis",
    "yAxis",
    "barSeries"
  ],
  youTube: ["youTube"],
  map: ["map"],
  slider: ["slider"],
  menu: ["menu"],
  collapse: ["collapse"],
  svg: ["svg"],
  radialChart: ["radialChart"],
  xyPlot: ["xyPlot", "xAxis", "yAxis", "barSeries"],
  xAxis: ["xAxis"],
  yAxis: ["yAxis"],
  barSeries: ["barSeries"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  homeHeader: typeof HomeHeader;
  container: "div";
  youTube: typeof YouTube;
  map: typeof GoogleMap;
  slider: typeof Slider;
  menu: typeof Menu;
  collapse: typeof Collapse;
  svg: "svg";
  radialChart: typeof RadialChart;
  xyPlot: typeof XYPlot;
  xAxis: typeof XAxis;
  yAxis: typeof YAxis;
  barSeries: typeof VerticalBarSeries;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHome__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHome__VariantsArgs;
    args?: PlasmicHome__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicHome__Fetches;
  } & Omit<PlasmicHome__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHome__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHome__ArgProps,
      internalVariantPropNames: PlasmicHome__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicHome__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHome";
  } else {
    func.displayName = `PlasmicHome.${nodeName}`;
  }
  return func;
}

export const PlasmicHome = Object.assign(
  // Top-level PlasmicHome renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    homeHeader: makeNodeComponent("homeHeader"),
    container: makeNodeComponent("container"),
    youTube: makeNodeComponent("youTube"),
    map: makeNodeComponent("map"),
    slider: makeNodeComponent("slider"),
    menu: makeNodeComponent("menu"),
    collapse: makeNodeComponent("collapse"),
    svg: makeNodeComponent("svg"),
    radialChart: makeNodeComponent("radialChart"),
    xyPlot: makeNodeComponent("xyPlot"),
    xAxis: makeNodeComponent("xAxis"),
    yAxis: makeNodeComponent("yAxis"),
    barSeries: makeNodeComponent("barSeries"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicHome
    internalVariantProps: PlasmicHome__VariantProps,
    internalArgProps: PlasmicHome__ArgProps
  }
);

export default PlasmicHome;
/* prettier-ignore-end */