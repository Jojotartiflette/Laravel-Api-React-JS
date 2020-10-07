import React from 'react';
import Navbar from './Navbar';

class Login extends React.Component
{
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        };
    }

    handleEmailChange = event => {
        this.setState({ email : event.target.value }, () => {
            console.log(this.state);
        });
    }

    handlePasswordChange = event => {
        this.setState({ password : event.target.value }, () => {
            console.log(this.state);
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log('Connexion');
    }

    render() {
        return (
            <>
                <Navbar />
                <div class="container w-50">
                    <h2 class="text-center my-5">Connexion</h2>
                    <form method="POST" onSubmit={this.handleSubmit}>
                        <div class="form-group">
                            <label for="email">Adresse email</label>
                            <input onChange={this.handleEmailChange} type="email" class="form-control" id="email" aria-describedby="emailHelp" />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="password">Mot de passe</label>
                            <input onChange={this.handlePasswordChange} type="password" class="form-control" id="password" />
                        </div>
                        <button type="submit" class="btn btn-primary">Me connecter</button>
                    </form>
                </div>
            </>
        );
    }
}

export default Login;