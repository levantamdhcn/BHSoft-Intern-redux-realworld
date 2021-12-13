import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserInforById } from "../../../localStorage";
import { Article } from "../../../stores/type";
import Post from "../../Post";
import { PostList } from "../../styled/Post.styled";
import { Tabs, StyledTabPane } from "../../styled/Tabs.styled";

interface ArticlesToggleProps {
  userId: string;
}

export const ArticlesToggle = ({ userId }: ArticlesToggleProps) => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const userInfor = getUserInforById(userId);
  const articles = useSelector((state: any) => state.articleReducers.articles);
  const myArticles = articles.filter(
    (article: Article) => article.userId === userId
  );
  const author = {
    username: userInfor[0].username,
    image: userInfor[0].image,
  };
  return (
    <Tabs defaultActiveKey="1">
      <StyledTabPane tab="My Articles" key="1">
        {isLoading ? (
          "Loading..."
        ) : (
          <ul className="post-list">
            {myArticles.length > 0
              ? myArticles.map((item: Article, index: number) => {
                  const postInfor = {
                    title: item.title,
                    author: author,
                    tagList: item.tagList,
                    createdAt: item.createdAt,
                    description: item.desc,
                    id: item.articleId,
                    favoritesCount: item.favoritesCount,
                    favorited: item.favorited,
                    comments: [],
                  };
                  return (
                    <li key={index}>
                      <Post
                        post={postInfor}
                        linkToProfile={`/profile/${author.username}`}
                      />
                    </li>
                  );
                })
              : ""}
          </ul>
        )}
      </StyledTabPane>
      <StyledTabPane tab="Favourited Articles" key="2">
        {isLoading ? (
          "Loading"
        ) : (
          <>
            <PostList>
              {articles
                .filter((item: Article) => item.favorited === true)
                .map((item: Article, index: number) => {
                  const author = {
                    username: getUserInforById(item.userId)[0].username,
                    image: getUserInforById(item.userId)[0].image,
                  };
                  const postInfor = {
                    title: item.title,
                    author: author,
                    tagList: item.tagList,
                    createdAt: item.createdAt,
                    description: item.desc,
                    id: item.articleId,
                    favoritesCount: item.favoritesCount,
                    favorited: item.favorited,
                    comments: [],
                  };
                  return (
                    <li key={index}>
                      <Post
                        post={postInfor}
                        linkToProfile={`/profile/${author.username}`}
                      />
                    </li>
                  );
                })}
            </PostList>
          </>
        )}
      </StyledTabPane>
    </Tabs>
  );
};
