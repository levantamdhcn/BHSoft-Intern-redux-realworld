import { Layout } from "antd";
import React from "react";
import "./App.css";
import AppBanner from "./components/Banner";
import AppContent from "./components/Content";
import AppFooter from "./components/Footer";
import AppHeader from "./components/Header";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import SignIn from "./components/SignInForm";
import SignUp from "./components/SignUpForm";
import { useSelector } from "react-redux";
import NewPost from "./components/NewPost";
import Setting from "./components/Setting";
import ProfilePage from "./components/ProfilePage";
import { ArticlePage } from "./components/ArticlePage";

function App() {
  const isLogged = useSelector(
    (state: any) => state.authReducers.isSigninSuccess
  );
  const articleId = useSelector(
    (state: any) => state.articleReducers.currentArticle
  );
  console.log(articleId);

  return (
    <Router>
      <Layout className="layout">
        <AppHeader />
        <Switch>
          <Route path="/signin">
            {!isLogged ? <SignIn /> : <Redirect to="/" />}
          </Route>
          <Route path="/signup">
            {!isLogged ? <SignUp /> : <Redirect to="/" />}
          </Route>
          <Route path="/editor">
            {isLogged ? <NewPost /> : <Redirect to="/" />}
          </Route>
          <Route path="/setting">
            {isLogged ? <Setting /> : <Redirect to="/" />}
          </Route>
          <Route path="/article/:id">
            {isLogged ? <ArticlePage id={articleId} /> : <Redirect to="/" />}
          </Route>
          <Route path="/profile">
            {isLogged ? <ProfilePage /> : <Redirect to="/" />}
          </Route>
          <Route path="/">
            {isLogged ? "" : <AppBanner />}
            <AppContent />
          </Route>
        </Switch>
        <AppFooter />
      </Layout>
    </Router>
  );
}

export default App;
