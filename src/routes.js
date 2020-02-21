import React from 'react';
import {Switch, Route} from 'react-router-dom'

//components
import GuestHome from './components/guestHome'
import Home from './components/home'
import Reviews from './components/reviews'

export default (
    <Switch>
        <Route component={GuestHome} exact path='/' />
        <Route component={Home} path='/home' />
        <Route component={Reviews} path='/post-review' />
    </Switch>
)