import React from 'react';
import GreetingContainer from './greeting_container';

class NavBar extends React.Component { 
    render() { 
        return <div>
                    <h1>Bench BnB</h1>
                    <GreetingContainer />
            </div>
    }
}

export default NavBar