import { connect } from 'react-redux';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import { withRouter, Route, Redirect } from 'react-router-dom'
import React from 'react'

// import App from './app'

const mapS_P = ({ session }) => ({
    user: session.userId
}
)

const mapD_P = dispatch => ({
    // logout: () => dispatch(logout())
});

const Arbitrary = (props) => {
    // debugger;
    // if (props.user) {
    //     props.history.push('/')
    //     return null
    // } else {
    //     return <div> 
    //         <Route path='/login' component={LoginFormContainer}/>
    //         <Route path='/signup' component={SignupFormContainer} />
    //     </div>
    // }
    // debugger;
    let { user, component: Component, path } = props
    return < Route path={path} render={(props) =>  !user ?  <Component {...props} />  : <Redirect to="/" />  } />
}
{/* props.location.pathName == '/login' ? <LoginFormContainer />
: props.location.pathName == '/signup' ? < SignupFormContainer />
    : <Redirect to='/' /> */}

export default withRouter(connect(mapS_P, mapD_P)(Arbitrary));