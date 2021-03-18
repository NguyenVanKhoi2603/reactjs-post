import './App.css';
import React, { Suspense, lazy } from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const NewFeedScreen = lazy(() => import('./pages/NewFeed'));
const LoginScreen = lazy(() => import('./pages/Login'));
const Profile = lazy(() => import('./pages/Profile'));
function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={NewFeedScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/Profile" component={Profile} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
