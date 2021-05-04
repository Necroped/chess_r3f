import { useControls } from 'leva';

const Chessboard = () => {

	const controllables = useControls('Chessboard', {
    position: [0, 0, 0],
    squareSize: {
      value: 4,
      min: 1
    },
    lines: {
      value: 8,
      min: 1,
      max: 20,
      step: 1,
    },
    columns: {
      value: 8,
      min: 1,
      max: 20,
      step: 1,
    },
    height: {
      value: 0.5,
      min: 0.5,
      max: 2,
      step: 0.1
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

export default Chessboard;