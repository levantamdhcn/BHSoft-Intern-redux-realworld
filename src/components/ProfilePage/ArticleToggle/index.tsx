import { Tabs } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { getUserInforById } from "../../../localStorage";
import { Article } from "../../../stores/type";
import Post from "../../NewFeeds/Post";

interface Props {}

const { TabPane } = Tabs;

export const ArticlesToggle = (props: Props) => {
  const currentUserId = useSelector(
    (state: any) => state.authReducers.currentUser.userId
  );
  const userInfor = getUserInforById(currentUserId);
  const articles = useSelector((state: any) => state.articleReducers.articles);
  const myArticles = articles.filter(
    (article: Article) => article.userId === currentUserId
  );
  const author = {
    username: userInfor[0].username,
    image: userInfor[0].image,
  };
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
                      favoritesCount={0}
                      favorited={true}
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
          {/* {posts.map((item: PostType, index: number) => {
                return (
                  <li key={index}>
                    <Post
                      title={item.title}
                      author={item.author}
                      tagList={item.tagList}
                      createdAt={item.createdAt}
                      description={item.description}
                    />
                  </li>
                );
              })} */}
        </ul>
      </TabPane>
    </Tabs>
  );
};
