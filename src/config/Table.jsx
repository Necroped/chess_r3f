import { useControls } from 'leva';

const Table = () => {

	const controllables = useControls('Table', {
    position: {
        value: [0, 0, 0],
    },
    width: {
      value: 50,
      min: 50,
      max: 200,
      step: 5,
    },
    height: {
      value: 100,
      min: 50,
      max: 100,
      step: 5,
    },
    tabletop: {
      value: 10,
      min: 5,
      max: 20,
      step: 2,
    },
    tablefoot: {
      value: 10,
      min: 10,
      max: 20,
      step: 1,
    }
  }, {
    collapsed: true
  });
  
  const fixed = {}

  return {
    ...controllables,
    ...fixed
  }
}

export default Table;