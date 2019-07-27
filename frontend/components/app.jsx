import React from 'react';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import NavBar from './nav_bar';
import { Route } from 'react-router-dom';
import Arbitrary from './app_container'
// import { Redirect } from 'react-router-dom'

// const Auth = ({ component: Component, path, loggedIn, exact }) => {
  // debugger;

//   return <Route exact={exact} path={path} render={() => (
//     !loggedIn ? (
//       <Redirect to="/" />
//     ) : (
//         { Component }
//       )
//   )} />
// }

const App = () => (
  <div>
    <header>
      <NavBar/>
    </header>
    
    < Arbitrary path="/login" component={LoginFormContainer}/>
    < Arbitrary path="/signup" component={SignupFormContainer}/>
   
    
  </div>
);

export default App;