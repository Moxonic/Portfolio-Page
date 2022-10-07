import React from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import canvasSettings from "../../assets/particlesjs-config.json"


const BackgroundParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);


  return (
    <Particles className="particle" id="tsparticles" init={particlesInit}  options={canvasSettings} />
  )
}

export default BackgroundParticles