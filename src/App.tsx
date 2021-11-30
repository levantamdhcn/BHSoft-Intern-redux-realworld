import { Layout } from 'antd';
import React from 'react';
import './App.css';
import AppBanner from './components/Banner';
import AppContent from './components/Content';
import AppFooter from './components/Footer';
import AppHeader from './components/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from './components/SignInForm';
import SignUp from './components/SignUpForm';

function App() {
  return (
    <Router>
      <Layout className="layout">
        <AppHeader />
          <Switch>
            <Route path='/signin'>
              <SignIn />
            </Route>
            <Route path='/signup'>
              <SignUp />
            </Route>
            <Route path='/'>
              <AppBanner />
              <AppContent />
            </Route>
          </Switch>
        <AppFooter />
    </Layout>
    </Router>
  )
}

export default App
