import React from 'react';
import MaterialAppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

const style = {
	bar: {
		boxShadow: 'none'
	}
}

const Menu = ({onLogout}) => (
  <IconMenu
    iconButtonElement={
      <IconButton><MoreVertIcon color="white" /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem onTouchTap={onLogout} primaryText="Salir" />
    <MenuItem primaryText="Ayuda" />
  </IconMenu>
);

Menu.muiName = 'IconMenu';

const AppBar = ({onLogout}) => (
	<MaterialAppBar title="Rewpafa" style={style.bar} iconElementRight={<Menu onLogout={onLogout} />}/>
);

export default AppBar;