import React from "react";
import Particles from "react-particles";
import { Engine } from "tsparticles-engine";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";

export class Result extends React.PureComponent {
  // this customizes the component tsParticles installation
  async customInit(engine) {
    // this adds the preset to tsParticles, you can safely use the
    await loadFireworksPreset(engine);
  }

  render() {
    const options = {
      preset: "fireworks",
    };

    return (
      <div>
        <Particles options={options} init={this.customInit} />
        <p>something</p>
      </div>
    );
  }
}
