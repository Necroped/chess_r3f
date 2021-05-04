import ChessboardConfig from '@config/Chessboard.jsx';

import Square from '@components/Square.3D.jsx';

import Utils from '@utils/Utils.jsx';

const ChessBoard = ({ position }) => {
  
  const { squareSize, lines, columns } = ChessboardConfig();
  const { getSquareText, getSquareColor } = Utils();

  const squares = [];
  for(let i = 0; i < columns; i++) {
    for (let j = 0; j < lines; j++) {
      let txt = getSquareText(i, j);
      let color = getSquareColor(i, j);
      squares.push(<Square
        key={txt}
        position={[i, j]}
        color={color}
        size={squareSize}
        txt={txt}
      />);
    }
  }

  return (
    <group position={position}>
      { squares }
    </group>
  );
};

export default ChessBoard;