import { connect } from 'react-redux';
import Login from '../components/login';

// TODO: dispatch action
const mapDispatchToProps = (dispatch) => {
	return {
		onSubmitForm: ({email, password}) => console.log('submit email=%O, password=%O', email, password),
	}
}

const noop = () => {};

export default connect(noop, mapDispatchToProps)(Login);
