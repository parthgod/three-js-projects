import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CanvasLoader from '../Loader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

const Earth = () => {
  const [earthModel, setEarthModel] = useState(null);

  useEffect(() => {
    const objLoader = new OBJLoader();
    objLoader.load('./speaker/speaker.obj', (loadedModel) => {
      setEarthModel(loadedModel);
    });
  }, []);

  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor='black' />
      <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={100} castShadow shadow-mapSize={1024} />
      <pointLight intensity={10} />
      <primitive object={earthModel} scale={10} />
    </mesh>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, position: [-4, -10, 6] }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;