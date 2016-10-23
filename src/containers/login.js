import { connect } from 'react-redux';
import Login from '../components/login';
import { signIn } from '../actions/auth';

const mapDispatchToProps = (dispatch) => {
	return {
		onSubmitForm: ({email, password}) => dispatch(signIn(email, password)),
	}
}

const noop = () => ({});

export default connect(noop, mapDispatchToProps)(Login);
