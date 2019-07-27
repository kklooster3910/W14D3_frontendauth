import { connect } from 'react-redux';
// import TheForm from './session_form';
import { LOGIN, SessionForm } from './session_form';
import { login } from '../actions/session';

const msp = ({errors}, ownProps) => ({
    errors,
    formType: LOGIN
})

const mdp = (dispatch, ownProps)=> ({
    login: user => dispatch(login(user))
})

export default connect(
    msp,mdp
)(SessionForm)


