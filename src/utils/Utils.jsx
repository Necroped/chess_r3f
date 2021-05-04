import ChessboardConfig from '@config/Chessboard.jsx';
import ThemeConfig from '@config/Theme.jsx';

const Utils = () => {
    
  const { squareSize, lines, columns } = ChessboardConfig();
  const { square1, square2 } = ThemeConfig();

  const getX = (col) => (col - (columns - 1) / 2) * squareSize;
  const getY = (line) => ((lines - 1) / 2 - line) * squareSize;
  const getPosition = (col, line) => {
    const x = getX(col);
    const y = getY(line);
    return [x, 0, y];
  };
  const getSquareText =  (col, line) => String.fromCharCode(65 + col) + (line + 1);
  const getSquareColor = (col, line) => (col + line) % 2 ? square1 : square2;

  return {
    getX,
    getY,
    getPosition,
    getSquareText,
    getSquareColor,
  }
  
}

export default Utils;