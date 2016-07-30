import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

const style = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'column',
	margin: 50,
	padding: 50,
}

const buttonStyle = {
	marginTop: 20
}

const titleStyle = {
	fontWeight: 600,
	fontSize: 19
}

const Login = () => (
	<Paper zDepth={2} style={style}>
		<div style={titleStyle}> Log in </div>
		<TextField
			hintText="User name"
			floatingLabelText="Username"
			/>
		<br />
		<TextField
			hintText="Password Field"
			floatingLabelText="Password"
			type="password"
		/>
		<RaisedButton
			label="Log in"
			style={buttonStyle}
			primary={true}
			icon={<FontIcon className="material-icons">lock_open</FontIcon>}
		/>
	</Paper>
)

export default Login;
