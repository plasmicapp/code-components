import * as React from "react";
import Head from "../components/Head";
import { PlasmicHome } from "../components/plasmic/code_component_examples/PlasmicHome";
import 'antd/dist/antd.css';
import "react-vis/dist/style.css";

function Home() {
  return <Head><PlasmicHome /></Head>;
}

export default Home;
