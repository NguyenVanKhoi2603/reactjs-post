import './App.css';
import React, { Suspense, lazy } from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const NewFeedScreen = lazy(() => import('./pages/NewFeed'));
const LoginScreen = lazy(() => import('./pages/Login'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={NewFeedScreen} />
          <Route path="/login" component={LoginScreen} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
