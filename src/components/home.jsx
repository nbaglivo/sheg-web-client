import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';

import AppBar from '../containers/appbar';

import { VisibleOnlyAdmin, VisibleOnlyMD } from '../util/wrappers';

import { routerActions } from 'react-router-redux'


const MDTabs = VisibleOnlyMD(() => (
	<Tabs>
		<Tab label="Inicio">
			<div>TODO Perfil</div>
		</Tab>
		<Tab label="Pacientes">
			<div>TODO Enfermedad</div>
		</Tab>
	</Tabs>
));

const AdminTabs = VisibleOnlyAdmin(() => (
	<Tabs>
		<Tab label="Inicio">
			<div>TODO Perfil</div>
		</Tab>
		<Tab label="ADMIN">
			<div>TODO Enfermedad</div>
		</Tab>
	</Tabs>
));

const Home = () => (
	<div>
		<AppBar />
		<div>
			<MDTabs />
			<AdminTabs />
		</div>
	</div>
);

export default Home;
