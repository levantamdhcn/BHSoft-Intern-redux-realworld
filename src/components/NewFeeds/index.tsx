import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserInforById } from "../../localStorage";
import { Article } from "../../stores/type";
import { ArticlesList } from "../ArticlesList";
import { Tabs as TabsStyled } from "../styled/Tabs.styled";
import { StyledTabPane } from "../styled/Tabs.styled";
const NewFeeds = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const articles = useSelector((state: any) => state.articleReducers.articles);
  const currentUserId = useSelector(
    (state: any) => state.authReducers.currentUser.userId
  );
  const getPrivtaeFeed = () => {
    if (currentUserId !== "") {
      const followingUsers = getUserInforById(currentUserId)[0].following;
      const privateFeed = articles.filter((article: Article) =>
        followingUsers.includes(article.userId)
      );
      return privateFeed;
    } else return [];
  };

  const isLogged = useSelector(
    (state: any) => state.authReducers.currentUser.authenticated
  );
  return (
    <TabsStyled defaultActiveKey="1">
      {isLogged ? (
        <StyledTabPane tab="Your Feed" key="1">
          {isLoading ? (
            "Loading..."
          ) : getPrivtaeFeed().length > 0 ? (
            <ArticlesList articles={getPrivtaeFeed()} />
          ) : (
            "No articles are here... yet."
          )}
        </StyledTabPane>
      ) : (
        ""
      )}
      <StyledTabPane tab="Global Feed" key="2">
        {isLoading ? (
          "Loading..."
        ) : articles.length > 0 ? (
          <ArticlesList articles={articles} />
        ) : (
          "No articles are here... yet."
        )}
      </StyledTabPane>
    </TabsStyled>
  );
};

export default NewFeeds;
