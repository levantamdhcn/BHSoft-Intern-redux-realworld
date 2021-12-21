import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Article } from "../../stores/type";
import { ArticlesList } from "../ArticlesList";
import { Tabs as TabsStyled } from "../styled/Tabs.styled";
import { StyledTabPane } from "../styled/Tabs.styled";
const NewFeeds = () => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(()=>{
      setIsLoading(false)
    },1500 )
  }, []);

  const articles = useSelector((state: any) => state.articleReducers.articles);
  const user = useSelector(
    (state: any) => state.authReducers.user
  );
  const isSignedIn = useSelector((state: any) => state.authReducers.isSignedIn)
  const getPrivateFeed = () => {
    if (user._id) {
      const followingUsers = user.following;
      const privateFeed = articles.filter((article: Article) => {
        return followingUsers.includes(user._id)
      }
      );
      return privateFeed;
    } else return [];
  };
  return (
    <TabsStyled defaultActiveKey="1">
      {isSignedIn !== "" ? (
        <StyledTabPane tab="Your Feed" key="1">
          {isLoading ? (
            "Loading..."
          ) : getPrivateFeed().length > 0 ? (
            <ArticlesList articles={getPrivateFeed()} />
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
