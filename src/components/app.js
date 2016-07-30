import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { red500, red700, pinkA200 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
	palette: {
		primary1Color: red700,
		primary2Color: red500,
		secondary1Color: pinkA200,
	},
	appBar: {
		height: 75,
	},
});

const App = ({ pushPath, children }) => (
	<div>
		<MuiThemeProvider muiTheme={muiTheme}>
		    <main>      
			  	<AppBar title="Pasae Client" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
			    {children}
		    </main>
		</MuiThemeProvider>
	</div>
)

export default App
