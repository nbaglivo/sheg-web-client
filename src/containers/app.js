import { connect } from 'react-redux';
import App from '../components/app';
import { fetchUser } from '../actions/user';
import { mapStateToUser } from './usermap';

const mapDispatchToProps = (dispatch) => {
	return {
		onInputChanged: term => dispatch(fetchUser(term)),
	}
}

export default connect(mapStateToUser, mapDispatchToProps)(App)
