import { useState, useEffect } from "react";

const useHardwareAcceleration = () => {
  const [isAccelerated, setIsAccelerated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAcceleration = () => {
      try {
        const canvas = document.createElement("canvas");
        const gl = (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")) as WebGLRenderingContext | null;

        if (!gl) {
          return false;
        }

        const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
        if (debugInfo) {
          const renderer = String(gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) || "");
          const vendor = String(gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) || "");

          console.log("GPU Vendor:", vendor);
          console.log("GPU Renderer:", renderer);

          // Software renderer kontrolü
          const softwareRenderers = ["swiftshader", "llvmpipe", "software", "microsoft basic"];
          const isSoftware = softwareRenderers.some((sw) => renderer.toLowerCase().includes(sw));

          return !isSoftware;
        }

        return true;
      } catch (e) {
        console.error("Hardware acceleration check failed:", e);
        return false;
      }
    };

    setIsAccelerated(checkAcceleration());
  }, []);

  return isAccelerated;
};

export default useHardwareAcceleration;
