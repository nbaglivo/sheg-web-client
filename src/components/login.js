import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import {Tabs, Tab} from 'material-ui/Tabs';
import { red100, red400 } from 'material-ui/styles/colors';

const style = {
	wrapper: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		width: '100%',
		height: '100%',
		backgroundColor: red400
	},
	logo: {
		width: 120,
		height: 120,
	},
	text: {
		padding: 40,
		fontSize: 20,
		color: red100,
		fontFamily: 'Roboto'
	},
	paper: {
		width: 450,
		height: 250,
		minWidth: 450,
	},
	tabs: {
		width: '100%'
	},
	tab: {
		background: '#fff',
		color: '#3c3c3c'
	},
	form: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		padding: 20,
	},
	button: {
		marginTop: 20,
		width: 150
	}
}

const Button = ({label}) => (
	<RaisedButton
		label={label}
		style={style.button}
		primary={true}
		icon={<FontIcon className="material-icons">lock_open</FontIcon>}
	/>
);

const Login = () => (
	<div style={style.wrapper}>
		<img src="assets/cardiogram.svg" style={style.logo}></img>
		<div style={style.text}>Registro web de pacientes con fibrilación auricular</div>
		<Paper zDepth={2} style={style.paper}>
			<Tabs style={style.tabs}>
				<Tab label="SIGN UP" style={style.tab}>
					<div style={style.form}>
						<TextField hintText="Email"/>
						<TextField hintText="Password" type="password"/>
						<Button label="SIGN UP"/>
					</div>
				</Tab>
				<Tab label="LOG IN" style={style.tab}>
					<div style={style.form}>
						<TextField hintText="Email"/>
						<TextField hintText="Password" type="password"/>
						<Button label="LOG IN"/>
					</div>
				</Tab>
			</Tabs>
		</Paper>
	</div>
);

export default Login;
