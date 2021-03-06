import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { NavigationBar } from './components/shared/navigationBar';
import { Landing } from './components/landing/landing';
import { SignUp } from './components/signUp/signUp';
import { Profile } from './components/profile/profile';
import { EditProfile } from './components/editProfile/editProfile';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Layout} />
          <Route path="/sign-up" component={Layout} />
          <Route path="/edit-profile" component={Layout} />
          <Route path="/:user" component={Profile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const Layout = () => {
  return (
    <div className="layout">
      <NavigationBar />
      <Switch>
        <Route path="/sign-up" component={SignUp} />
        <Route path="/edit-profile" component={EditProfile} />
      </Switch>
    </div>
  )
}

export default App;
