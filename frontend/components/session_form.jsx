import React from 'react';

export const SIGN_UP = 'SIGN_UP';
export const LOGIN = 'LOGIN';

export class SessionForm extends React.Component {
    constructor(props) { 
        super(props);

        this.state = {
            username: '',
            password: ''
        }

        this.formType = this.props.formType;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(field) {
        return (event)=>this.setState({[field]:event.target.value})
     }

    handleSubmit(e) { 
        e.preventDefault();
        this.formType == SIGN_UP ?
            this.props.signUp(this.state)
            : this.props.login(this.state);
        this.props.history.push('/');
    }

    render() { 
        return <div>
            <form onSubmit={this.handleSubmit}>
                <label> Username: 
                <input
                    type='text'
                    value={this.state.username}
                    onChange={this.handleInput('username')}/>
                </label>
                <br />
                <label> Password: 
                <input
                    type='password'
                    value={this.state.password}
                    onChange={this.handleInput('password')}/>
                </label>
                <button>
                    {this.formType == SIGN_UP ? 'Signup': 'Login'}
                </button>
            </form>
        </div>
    }
 }

// export const SessionForm;