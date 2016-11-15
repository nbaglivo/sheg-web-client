import { connect } from 'react-redux';
import Home from '../components/home';
import { signOut } from '../actions/auth';

const noop = () => ({});

export default connect(noop, noop)(Home);
