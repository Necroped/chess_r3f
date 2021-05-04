import { Text } from '@react-three/drei';

import Material from '@components/materials/chess.jsx';

import ChessboardConfig from '@config/Chessboard.jsx';

import Utils from '@utils/Utils.jsx';

import { get as getGame } from '@stores/Game.jsx';
import { get as getCurrent} from '@stores/Current.jsx';

const Square = ({ position, color, size, txt }) => {

  const setGame = getGame(state => state.set);
  const setCurrent = getCurrent(state => state.set);

  const { height } = ChessboardConfig();
  const { character, square } = getCurrent();
  const { getPosition } = Utils();

  const onHover = () => {
    if(character !== null) {
      setCurrent({ square: position })
    }
  }
  const onClick = () => {
    if(character && square) {
      setGame(state => { state.characters[character].position = square });
      setCurrent({ square: null, character: null })
    }
  }

  return (
    <group position={getPosition(...position)} onPointerOver={onHover} onPointerDown={onClick}>
      <mesh position={[0, height / 2, 0]}>
        <boxGeometry args={[size, height, size]} />
        <Material color={square === position ? 'blue' : color} />
      </mesh>
      <Text 
        position={[0, height + 0.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={size / 2}
      >
        { txt }
      </Text>
    </group>
  )
}

export default Square;
