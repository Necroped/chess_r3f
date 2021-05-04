import { OrbitControls } from '@react-three/drei';

const Controls = ({ enabled = true }) => {
  return <OrbitControls enabled={ enabled } />
}

export default Controls;