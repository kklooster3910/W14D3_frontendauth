import { connect } from 'react-redux';
import { logout } from '../actions/session';
import Greeting from './greeting'

const mapS_P = ({ entities, session }) => ({
        user: entities.users[session.userId]
    }
)

const mapD_P = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapS_P, mapD_P)(Greeting);