import React from 'react';
import Navbar from './Navbar';

class Register extends React.Component
{
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            confirm_password: '',
        };
    }

    handleNameChange = event => {
        this.setState({ name : event.target.value }, () => {
            console.log(this.state);
        });
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

    handleConfirmPasswordChange = event => {
        this.setState({ confirm_password : event.target.value }, () => {
            console.log(this.state);
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log('Inscription');
    }

    render() {
        return (
            <>
                <Navbar />
                <div class="container w-50">
                    <h2 class="text-center my-5">Inscription</h2>
                    <form method="POST" onSubmit={this.handleSubmit}>
                        <div class="form-group">
                            <label for="name">Nom</label>
                            <input onChange={this.handleNameChange} type="text" class="form-control" id="name" aria-describedby="emailHelp" />
                        </div>
                        <div class="form-group">
                            <label for="email">Adresse email</label>
                            <input onChange={this.handleEmailChange} type="email" class="form-control" id="email" aria-describedby="emailHelp" />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="password">Mot de passe</label>
                            <input onChange={this.handlePasswordChange} type="password" class="form-control" id="password" />
                        </div>
                        <div class="form-group">
                            <label for="confirmPassword">Confirmation du mot de passe</label>
                            <input onChange={this.handleConfirmPasswordChange} type="password" class="form-control" id="confirm-password" />
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </>
        );
    }
}

export default Register;