import React from 'react';
import { Meteor } from 'meteor/meteor';
import  ReactDOM  from 'react-dom';
import  { BrowserRouter as Router, Switch, Route}  from 'react-router-dom';


import App from '../imports/ui/App'
import contactMe from '../imports/ui/ContactMe'
import Lost from '../imports/ui/Lost'

Meteor.startup(() => {

    ReactDOM.render((
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/contactMe" component={contactMe} />
                <Route component={Lost} />
            </Switch>
        </Router>
    ), document.getElementById('root'))
})
