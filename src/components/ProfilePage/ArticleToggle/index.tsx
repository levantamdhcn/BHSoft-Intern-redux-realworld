import { Tabs } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { getUserInforById } from "../../../localStorage";
import { Article, Post as PostType } from "../../../stores/type";
import Post from "../../Post";

interface ArticlesToggleProps {
  userId: string;
}

const { TabPane } = Tabs;

export const ArticlesToggle = ({ userId }: ArticlesToggleProps) => {
  const userInfor = getUserInforById(userId);
  const articles = useSelector((state: any) => state.articleReducers.articles);
  const myArticles = articles.filter(
    (article: Article) => article.userId === userId
  );
  const author = {
    username: userInfor[0].username,
    image: userInfor[0].image,
  };
  const posts = useSelector((state: any) => state.postReducers.posts);
  return (
    <Tabs defaultActiveKey="1" className="newfeeds-holder">
      <TabPane tab="My Articles" key="1">
        <ul className="post-list">
          {myArticles.length > 0
            ? myArticles.map((item: Article, index: number) => {
                return (
                  <li key={index}>
                    <Post
                      title={item.title}
                      author={author}
                      tagList={item.tagList}
                      createdAt={item.createdAt}
                      description={item.desc}
                      id={item.articleId}
                      favoritesCount={item.favoritesCount}
                      favorited={item.favorited}
                      comments={[]}
                    />
                  </li>
                );
              })
            : ""}
        </ul>
      </TabPane>
      <TabPane tab="Favourited Articles" key="2">
        <ul className="post-list">
          {articles
            .filter((item: Article) => item.favorited === true)
            .map((item: Article, index: number) => {
              const author = {
                username: getUserInforById(item.userId)[0].username,
                image: getUserInforById(item.userId)[0].image,
              };
              return (
                <li key={index}>
                  <Post
                    title={item.title}
                    author={author}
                    tagList={item.tagList}
                    createdAt={item.createdAt}
                    description={item.desc}
                    id={item.articleId}
                    favoritesCount={item.favoritesCount}
                    favorited={item.favorited}
                    comments={[]}
                  />
                </li>
              );
            })}
        </ul>
        <ul className="post-list">
          {posts
            .filter((item: PostType) => item.favorited === true)
            .map((item: PostType, index: number) => {
              return (
                <li key={index}>
                  <Post
                    title={item.title}
                    author={item.author}
                    tagList={item.tagList}
                    createdAt={item.createdAt}
                    description={item.description}
                    id={""}
                    favoritesCount={item.favoritesCount}
                    favorited={item.favorited}
                    slug={item.slug}
                    comments={[]}
                  />
                </li>
              );
            })}
        </ul>
      </TabPane>
    </Tabs>
  );
};
