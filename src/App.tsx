import { Layout } from 'antd';
import React from 'react';
import './App.css';
import AppBanner from './components/Banner';
import AppContent from './components/Content';
import AppFooter from './components/Footer';
import AppHeader from './components/Header';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import SignIn from './components/SignInForm';
import SignUp from './components/SignUpForm';
import { useSelector } from 'react-redux';

function App() {
  const isLogged = useSelector((state: any) => state.authReducers.token.authenticated)

  return (
    <Router>
      <Layout className="layout">
        <AppHeader />
          <Switch>
            <Route path='/signin'>
              { !isLogged ? <SignIn /> : <Redirect to='/'/>}
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
