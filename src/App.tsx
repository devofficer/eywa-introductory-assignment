import React from 'react';
import { inject, observer } from 'mobx-react';
import { Switch, Route, Redirect } from 'react-router';
import { ConnectWallet, TestTokens } from './components';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        background: 'url(./bg.svg)',
        backgroundSize: 'cover',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
});

const App = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Switch>
                <Route path='/connect-wallet' exact component={ConnectWallet} />
                <Route path='/get-test-tokens' exact component={TestTokens} />
                <Redirect from="/" to="/connect-wallet" />
            </Switch>
        </div>
    );
}

export default inject("routing")(observer(App));
