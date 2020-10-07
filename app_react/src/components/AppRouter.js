import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';


class AppRouter extends React.Component
{
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        );
    }
}

export default AppRouter;