"use client";

import { useRef } from "react";
import { SPEObject } from "@splinetool/runtime";
import Spline from "@splinetool/react-spline";

export default async function MeetPage() {
  const cube = useRef<SPEObject>();

  function onLoad(splineApp: any) {
    if (cube.current) return;
    console.log("-1", splineApp.findObjectByName("Cube"));
    cube.current = splineApp;
  }

  function moveObj() {
    console.log(cube.current);
    cube.current!.emitEvent("mouseHover");
  }

  return (
    <div className="grid place-items-center">
      <button type="button" onClick={moveObj}>
        Move Cube
      </button>

      <Spline
        onLoad={onLoad}
        scene="https://prod.spline.design/MkcG4AMRBf73Q7yR/scene.splinecode"
      />
    </div>
  );
}
