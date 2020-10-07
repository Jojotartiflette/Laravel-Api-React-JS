import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Register from './Register';


class AppRouter extends React.Component
{
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/register" component={Register} />
            </Switch>
        );
    }
}

export default AppRouter;