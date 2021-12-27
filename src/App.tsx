import React, { useEffect } from "react";
import {
  Router,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GlobleStyle } from "./globalStyles";
import { StyledLayout } from "./styled/Layout.styled";
import { getArticle } from "./stores/actions/articleActions";
import routes from './routes'
import { renderRoute } from "./routes"
import {createBrowserHistory} from "history"

const history = createBrowserHistory()

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getArticle)
  }, [dispatch]);

  const isLoading = useSelector((state: any) => state.articleReducers.isLoading)
  
  return (
    <Router history={history}>
      <GlobleStyle />
      <StyledLayout>
          {
            isLoading ? "" : renderRoute(routes)
          }
      </StyledLayout>
    </Router>
  );
}

export default App;

