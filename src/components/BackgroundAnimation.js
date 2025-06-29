"use client";

import { useEffect, useRef } from "react";

export default function BackgroundAnimation() {
  const vantaRef = useRef(null);

  useEffect(() => {
    const loadScript = (src) =>
      new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });

    async function initVanta() {
      try {
        // Load Three.js first
        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js");
        // Load Vanta.js after Three.js
        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.24/vanta.dots.min.js");

        if (window.VANTA) {
          vantaRef.current = window.VANTA.DOTS({
            el: "#vanta-bg",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0xff9b3f, // Change color
            backgroundColor: 0x1e1d21, // Change background
          });
        }
      } catch (error) {
        console.error("Failed to load Vanta.js", error);
      }
    }

    initVanta();

    return () => {
      if (vantaRef.current) vantaRef.current.destroy();
    };
  }, []);

  return <div id="vanta-bg" className="absolute top-0 left-0 w-full h-full -z-10"></div>;
}
