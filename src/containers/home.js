import { connect } from 'react-redux';
import Home from '../components/home';
import { signOut } from '../actions/auth';

const mapDispatchToProps = (dispatch) => {
	return {
		onLogout: () => dispatch(signOut()),
	}
}

const noop = () => ({});

export default connect(noop, mapDispatchToProps)(Home);
