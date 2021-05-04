import { useControls } from 'leva';

const Debug = () => {

	const controllables = useControls('Debug', {
    isActivated: true,
    size: {
      value: 10,
      min: 1,
      max: 100,
      step: 1
    },
    stats: true,
  }, {
    collapsed: true
  });

  
  const fixed = {}

  return {
    ...controllables,
    ...fixed
  }

}

export default Debug;