import { Cylinder } from '@react-three/drei';

import Totoro from '@components/characters/Totoro.jsx';
import Female1 from '@components/characters/Female1.jsx';
import Female2 from '@components/characters/Female2.jsx';
import Male1 from '@components/characters/Male1.jsx';
import Male2 from '@components/characters/Male2.jsx';
import Material from '@components/materials/chess.jsx';

import ChessboardConfig from '@config/Chessboard.jsx';
import ThemeConfig from '@config/Theme.jsx';

import { get as getCurrent } from '@stores/Current.jsx';

const Character = ({ position, rotation, name }) => {

  const { squareSize } = ChessboardConfig();
  const { characterBase1, characterBase2 } = ThemeConfig();

  let model;
  switch(name) {
    case 'Totoro':
      model = <Totoro />;
    break;
    case 'Female1':
      model = <Female1 />;
    break;
    case 'Female2':
      model = <Female2 />;
    break;
    case 'Male1':
      model = <Male1 />;
    break;
    case 'Male2':
      model = <Male2 />;
    break;
    default: 
  }
	
  const { character } = getCurrent();
  const setCurrent = getCurrent(state => state.set);
  const isCurrent = character === name;

  return (
    <group 
      scale={squareSize} 
      rotation={rotation} 
      position={position} 
      onPointerDown={(e) => {
        e.stopPropagation();
        setCurrent({ character: !isCurrent ? name : null });
      }}
    >
      <mesh position={[0, 0.1, 0]}>
        { model }
      </mesh>
      <Cylinder args={[0.4, 0.4, 0.2, 128]}>
        <Material color={character === name ? characterBase2 : characterBase1 } />
      </Cylinder>
    </group>
  )
}

export default Character;