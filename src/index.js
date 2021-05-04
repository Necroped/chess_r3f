import ReactDOM from 'react-dom';
import React from 'react';
import './styles.css'

import APP_3D from '@components/App.3D.jsx';

import { get as getCurrent } from '@stores/Current.jsx';

const App = () => {

  const { character } = getCurrent();

	return (
		<div className="h-full w-full flex flex-row">
      <div className="w-9/12 p-12">
				<APP_3D />
			</div>
			<div className="w-3/12 py-12">{ character ?? 'No character selected' }</div>
		</div>
	)
}

ReactDOM.render(<App/>, document.getElementById('root'));
