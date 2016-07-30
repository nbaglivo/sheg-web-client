import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import {Tabs, Tab} from 'material-ui/Tabs';


const style = {
	wrapper: {
		display: 'flex',
		justifyContent: 'center',
		width: '100%',
		paddingTop: 100
	},
	paper: {
		width: 450,
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
		secondary={true}
		icon={<FontIcon className="material-icons">lock_open</FontIcon>}
	/>
);

const Login = () => (
	<div style={style.wrapper}>
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
