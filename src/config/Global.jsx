import { useControls } from 'leva';

const GlobalConfig = () => {

	const controllables =  useControls('Global', {
  }, {
    collapsed: true
  });

  const fixed = {
    camera: { fov: 45, position: [0, 60, 60] }
  }

  return {
    ...controllables,
    ...fixed
  }

}

export default GlobalConfig;