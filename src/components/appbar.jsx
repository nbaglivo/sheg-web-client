import React from 'react';
import MaterialAppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const style = {
	boxShadow: 'none'
}

const AppBar = ({onLogout}) => (
	<MaterialAppBar title="Pasae Cli" style={style} iconElementRight={<FlatButton onClick={onLogout} label="Logout" />}/>
);

export default AppBar;