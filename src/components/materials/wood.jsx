import { useTexture } from '@react-three/drei';

const WoodMaterial = () => {
  const texture = useTexture('./textures/wood.jpg');
  return <meshStandardMaterial map={ texture }/>
}

export default WoodMaterial;