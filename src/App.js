import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import Users from './user/pages/Users'
import NewPlace from './places/pages/NewPlace'
import MainNavigation from './shared/Components/Navigation/MainNavigation'
import UserPlaces from './places/pages/UserPlaces'

const App = () => {
  return <Router>

    <MainNavigation />
    <main>


      <Switch>
        <Route exact path='/'>
          <Users />
        </Route>

        <Route exact path="/:userId/places">
          <UserPlaces/>
        </Route>

        <Route exact path="/place/new" >
          <NewPlace />
        </Route>

        <Redirect to="/" />
      </Switch>

    </main>

  </Router>

}

export default App;
