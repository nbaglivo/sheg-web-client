import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';

import AppBar from '../containers/appbar';

import { VisibleOnlyAdmin, VisibleOnlyMD } from '../util/wrappers';

import { routerActions } from 'react-router-redux'

const style = {
	padding: '20px',
	textAlign:'center'
}

const paperStyle = {
	height: 'calc(100% - 30px)'
}

const MDTabs = VisibleOnlyMD(() => (
	<Tabs>	
		<Tab label="Home">
			<div style={style}>Home del médico.</div>
		</Tab>
		<Tab label="Pacientes">
			<div style={style}>Pacientes del médico.</div>
		</Tab>
	</Tabs>
));

const AdminTabs = VisibleOnlyAdmin(() => (
	<Tabs>	
		<Tab label="Home">
			<div style={style}>Home del admin.</div>
		</Tab>
		<Tab label="Pacientes">
			<div style={style}>Todos los pacientes.</div>
		</Tab>
	</Tabs>
));

const Home = () => (
	<div style={paperStyle}>
		<AppBar />
		<Paper style={paperStyle}>
			<MDTabs />
			<AdminTabs />
		</Paper>
	</div>
);

export default Home;
