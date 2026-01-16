import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/portfolio/desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.2} groundColor="black" />

      {!isMobile && (
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
      )}

      <pointLight intensity={isMobile ? 0.6 : 1} />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.55 : 0.75}
        position={isMobile ? [0, -2.5, -1.8] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const canvasRef = useRef(null);

  // Detect mobile
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () =>
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  // Lazy load when canvas enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (canvasRef.current) observer.observe(canvasRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={canvasRef} style={{ width: "100%", height: "100%" }}>
      {shouldLoad && (
        <Canvas
          frameloop="demand"
          shadows={!isMobile}
          dpr={[1, isMobile ? 1 : 2]}
          camera={{
            position: isMobile ? [4, 2, 5] : [20, 3, 5],
            fov: isMobile ? 35 : 25,
          }}
          gl={{ antialias: true }}
          performance={{ min: 0.5 }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />

            <Computers isMobile={isMobile} />
          </Suspense>

          <Preload all />
        </Canvas>
      )}
    </div>
  );
};

export default ComputersCanvas;
