import Material from '@components/materials/wood.jsx';

import TableConfig from '@config/Table.jsx';

const TableTop = ({ position, width, height }) => (
  <mesh position={position}>
    <boxGeometry args={[width, height, width]} />
    <Material />
  </mesh>
);

const TableFoot = ({ position, width, height }) => (
  <mesh position={position}>
    <boxGeometry args={[width, height, width]} />
    <Material />
  </mesh>
)

const Table = ({ position, children }) => {

  const { width, height, tabletop, tablefoot } = TableConfig();


  const feetPositions = [
    [(-width + tablefoot) * 0.5, -(height + tabletop) * 0.5, (-width + tablefoot) * 0.5],
    [( width - tablefoot) * 0.5, -(height + tabletop) * 0.5, ( width - tablefoot) * 0.5],
    [(-width + tablefoot) * 0.5, -(height + tabletop) * 0.5, ( width - tablefoot) * 0.5],
    [( width - tablefoot) * 0.5, -(height + tabletop) * 0.5, (-width + tablefoot) * 0.5],
  ];

  return (
    <group position={position}>
      { children }
      <TableTop width={width} height={tabletop} position={[0, -tabletop * 0.5, 0]} />
      <TableFoot width={tablefoot} height={height - tabletop} position={feetPositions[0]} />
      <TableFoot width={tablefoot} height={height - tabletop} position={feetPositions[1]} />
      <TableFoot width={tablefoot} height={height - tabletop} position={feetPositions[2]} />
      <TableFoot width={tablefoot} height={height - tabletop} position={feetPositions[3]} />
    </group>
  );
};

export default Table;