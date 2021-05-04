import { Stats } from '@react-three/drei'; 

import DebugConfig from '@config/Debug.jsx';

const Debug = () => {

	const { size, isActivated, stats } = DebugConfig();

  return <>
    { isActivated && <axesHelper args={[size, size, size]} /> }
    { stats && <Stats/> }
  </>
}

export default Debug;