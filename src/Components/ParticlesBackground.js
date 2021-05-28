import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Particles from "react-particles-js";
import ParticlesConfig from "./particles-config.js";

export default function ParticlesBackground() {
    return (
        <Particles canvasClassName="particles-bkgd" params={ParticlesConfig}></Particles>
    );
}
