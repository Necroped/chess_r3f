import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

import Debug from '@components/Debug.3D.jsx';
import Scene from '@components/Scene.3D.jsx';

import Global from '@config/Global.jsx';
import ThemeConfig from '@config/Theme.jsx';

const App = () => {

  const { camera } = Global();
  const { bgColor,  } = ThemeConfig();

  return (
    <Canvas camera={camera} gl={{ logarithmicDepthBuffer: true }}>
      <color attach="background" args={[bgColor]} />
      <Debug />
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
  
export default App;