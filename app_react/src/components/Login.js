import React from 'react';

class Login extends React.Component
{
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        };
    }

    onEmailChange = event => {
        this.setState({ email : event.target.value }, () => {
            console.log('Email Changed');
        });
    }

    onPasswordChange = event => {
        this.setState({ password : event.target.value }, () => {
            console.log('Password Changed');
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        localStorage.setItem('token', 'abcd');
    }

    render() {
        return (
            <>
                <form method="POST" onSubmit={this.handleFormSubmit}>
                    <input type="text" name="email" placeholder="Votre email" onChange={this.onEmailChange}/>
                    <input type="password" name="password" placeholder="Votre password" onChange={this.onPasswordChange}/>
                    <button type="submit">Me connecter</button>
                </form>
            </>
        );
    }
}

export default Login;