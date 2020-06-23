import React, { lazy, Suspense } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import { ToolCreate, ToolUpdate } from '../ToolsPages';

const ToolDetail = lazy(() => import("../ToolsPages/ToolDetail"));


class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }

    render() {
        const { alert } = this.props;
        return (
            
                <div className="container">                    
                    {alert.message &&
                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                    }
                    <Suspense fallback = {<h1> Loading... </h1>}>
                        <Router history={history}>
                            <Switch>
                                <PrivateRoute exact path="/" component={HomePage} />
                                <Route path="/login" component={LoginPage} />
                                <Route path="/register" component={RegisterPage} />
                                <Route path="/toolcreate" component={ToolCreate} />
                                <Route path='/tooldetail/:id' component={ToolDetail} />
                                <Route path='/toolupdate/:id' component={ToolUpdate} />
                                <Redirect from="*" to="/" />
                            </Switch>
                        </Router>
                    </Suspense>                   
                </div>
            
        );
    }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };