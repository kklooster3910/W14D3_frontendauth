import { connect } from 'react-redux';
// import { SessionForm } from './session_form';
import { SIGN_UP, SessionForm } from './session_form';
import { signup } from '../actions/session';

const msp = ({entities,session}, ownProps) => {
    console.log('anything')
    return ({
    formType: SIGN_UP,
}

)}

const mdp = (dispatch, ownProps)=> ({
    signUp: user => dispatch(signup(user))
})



export default connect(
    msp,mdp
)(SessionForm)