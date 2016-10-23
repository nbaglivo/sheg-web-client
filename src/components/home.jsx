import React from 'react';
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import FlatButton from 'material-ui/FlatButton';

const style = {
	appbar: {
		boxShadow: 'none'
	}
}

const UserHome = ({onLogout}) => (
	<div>
		<AppBar title="Pasae Cli" style={style.appbar} iconElementRight={<FlatButton onClick={onLogout} label="Logout" />}/>
		<Tabs>
			<Tab label="Perfil" >
				<div>TODO Perfil</div>
			</Tab>
			<Tab label="Enfermedad">
				<div>TODO Enfermedad</div>
			</Tab>
		</Tabs>
	</div>
)

export default UserHome;
