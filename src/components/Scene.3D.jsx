import Controls from '@components/Controls.3D.jsx';
import Lights from '@components/Lights.3D.jsx';
import Table from '@components/Table.3D.jsx';
import ChessBoard from '@components/ChessBoard.3D.jsx'
import Character from '@components/Character.3D.jsx';

import TableConfig from '@config/Table.jsx';
import ChessboardConfig from '@config/Chessboard.jsx';

import { get as getGame } from '@stores/Game.jsx';

import Utils from '@utils/Utils.jsx';

const Scene = () => {

  const { position: tablePosition } = TableConfig();
  const { position: chessboardPosition, height } = ChessboardConfig();
  const { getX, getY } = Utils();

  const { characters } =  getGame();

  return (
    <>
      <Table position={tablePosition}>
        <ChessBoard position={chessboardPosition} />
        {Object.entries(characters).map(([name, data], index) =>
          <Character name={name} position={[getX(data.position[0]), height, getY(data.position[1])]} key={index} />
        )}
      </Table>
      <Lights/>
      <Controls />
    </>
  );
}

export default Scene;