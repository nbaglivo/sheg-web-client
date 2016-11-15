import { connect } from 'react-redux';
import AppBar from '../components/appbar';
import { signOut } from '../actions/auth';

const mapDispatchToProps = (dispatch) => {
	return {
		onLogout: () => dispatch(signOut()),
	}
}

const noop = () => ({});

export default connect(noop, mapDispatchToProps)(AppBar);
