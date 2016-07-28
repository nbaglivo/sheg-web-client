import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

const App = ({ pushPath, children }) => (
	<div>
		<MuiThemeProvider>
		    <main>      
			  	<AppBar title="Pasae Client" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
			    {children}
		    </main>
		</MuiThemeProvider>
	</div>
)

export default App
