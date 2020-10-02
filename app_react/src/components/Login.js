import React from 'react';

class Login extends React.Component
{
    constructor() {
        super();
        this.state = {

        };
    }

    email = event => {
        console.log('Email Changed');
    }

    render() {
        return (
            <>
                <form method="POST">
                    <input type="text" name="email" placeholder="Votre email" onChange={this.email}/>
                    <input type="password" name="password" placeholder="Votre password" />
                    <button type="submit">Me connecter</button>
                </form>
            </>
        )
    }
}

export default Login;