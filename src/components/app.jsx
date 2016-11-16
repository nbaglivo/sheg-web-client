import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { red500, red700, pinkA200 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
	palette: {
		primary1Color: red700,
		primary2Color: pinkA200,
		secondary1Color: pinkA200,
	},
	appBar: {
		height: 56,
	},
});

const style = {
	height: '100%'
}

const App = ({ pushPath, children }) => (
	<div style={style}>
		<MuiThemeProvider muiTheme={muiTheme}>
		    <main style={style}>
			    { children }
		    </main>
		</MuiThemeProvider>
	</div>
)

export default App
