import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserById } from "../../../axios/userApis";
import { Article } from "../../../stores/type";
import Post from "../../Post";
import { PostList } from "../../styled/Post.styled";
import { Tabs, StyledTabPane } from "../../styled/Tabs.styled";

interface ArticlesToggleProps {
  userId: string;
}

export const ArticlesToggle = ({ userId }: ArticlesToggleProps) => {
  const isLoading = false
  const [userInfor, setUserInfor] = useState({
    userId: "",
    username: "",
    password: "",
    email: "",
    bio: "",
    image: "",
    following: []
  });
  useEffect(() => {
    getUserById(userId).then((response) => {
      setUserInfor(response.data)
    })
  }, [userId]);
  const articles = useSelector((state: any) => state.articleReducers.articles);
  const myArticles = articles.filter(
    (article: Article) => article.author.username === userInfor.username
  );
  const author = {
    username: userInfor?.username,
    image: userInfor?.image,
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
                    id: item._id,
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
      <StyledTabPane tab="Favorited Articles" key="2">
        {isLoading ? (
          "Loading"
        ) : (
          <>
            <PostList>
              {articles
                .filter((item: Article) => item.favorited.includes(userId))
                .map((item: Article, index: number) => {
                  const postInfor = {
                    title: item.title,
                    author: item.author,
                    tagList: item.tagList,
                    createdAt: item.createdAt,
                    description: item.desc,
                    id: item._id,
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
