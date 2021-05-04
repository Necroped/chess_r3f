import { useControls } from 'leva';

const ThemeConfig = () => {

	const controllables =  useControls('Theme', {
    bgColor: {
      label: 'background',
      value: '#1e2243'
    },
    square1: {
      label: 'Square 1',
      value: '#aaa'
    },
    square2: {
      label: 'Square 2',
      value: '#666'
    },
    characterBase1: {
      label: 'Character 1',
      value: 'black'
    },
    characterBase2: {
      label: 'Character 2',
      value: 'green'
    }
  }, {
    collapsed: true
  });

  const fixed = {};

  return {
    ...controllables,
    ...fixed
  }

}

export default ThemeConfig;