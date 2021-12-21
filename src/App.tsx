import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import NewPost from "./components/NewPost";
import Setting from "./components/Setting";
import ProfilePage from "./components/ProfilePage";
import { ArticlePage } from "./components/ArticlePage";
import { GlobleStyle } from "./globalStyles";
import { StyledLayout } from "./components/styled/Layout.styled";
import { getArticle } from "./stores/actions/articleActions";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getArticle)
  }, [dispatch]);
  const isSignedIn = useSelector(
    (state: any) => state.authReducers.token
  );
  const isLoading = useSelector((state: any) => state.articleReducers.isLoading)
  return (
    <Router>
      <GlobleStyle />
      <StyledLayout>
        <AppHeader />
        {
          isLoading ? "" : <Switch>
          <Route path="/signin">
            {isSignedIn === "" ? <SignIn /> : <Redirect to="/" />}
          </Route>
          <Route path="/signup">
            {isSignedIn === "" ? <SignUp /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/editor">
            {isSignedIn !== ""? <NewPost /> : <Redirect to="/" />}
          </Route>
          <Route path="/editor/:id">
            {isSignedIn !== "" ? <NewPost/> : <Redirect to="/" />}
          </Route>
          <Route path="/setting">
            {isSignedIn !== "" ? <Setting /> : <Redirect to="/" />}
          </Route>
          <Route path="/article/:id">
            <ArticlePage/>
          </Route>
          <Route path="/profile/:id">
            <ProfilePage />
          </Route>
          <Route path="/">
            {isSignedIn !== "" ? "" : <AppBanner />}
            <AppContent />
          </Route>
        </Switch>
        }
        <AppFooter />
      </StyledLayout>
    </Router>
  );
}

export default App;

