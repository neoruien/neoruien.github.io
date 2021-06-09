import React from "react";
import Particles from "react-particles-js";
import ParticlesConfig from "../config/particles-config.js";

export default function ParticlesBackground() {
    return (
        <Particles canvasClassName="ParticlesBackground" params={ParticlesConfig}></Particles>
    );
}
