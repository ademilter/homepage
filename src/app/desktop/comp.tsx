"use client";

import { useRef } from "react";
import { SPEObject } from "@splinetool/runtime";
import Spline from "@splinetool/react-spline";

export default async function MeetPage() {
  const cube = useRef<SPEObject>();

  function onLoad(splineApp: any) {
    if (cube.current) return;
    cube.current = splineApp;
  }

  function moveObj(name: string) {
    // @ts-ignore
    cube.current!.emitEvent("mouseDown", name);
  }

  return (
    <div className="grid place-items-center">
      <div className="flex items-center gap-4">
        <button
          className="border px-2 py-1"
          type="button"
          onClick={() => moveObj("Base")}
        >
          Desktop
        </button>
        <button
          className="border px-2 py-1"
          type="button"
          onClick={() => moveObj("Kef")}
        >
          Speaker
        </button>
        <button
          className="border px-2 py-1"
          type="button"
          onClick={() => moveObj("Keyboard")}
        >
          Keyboard
        </button>
      </div>

      <Spline
        onLoad={onLoad}
        scene="https://prod.spline.design/MkcG4AMRBf73Q7yR/scene.splinecode"
      />
    </div>
  );
}
