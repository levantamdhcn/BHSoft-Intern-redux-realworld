import { Tabs } from "antd";
import React, { useEffect } from "react";
import Post from "../Post";
import { useDispatch, useSelector } from "react-redux";
import { Article, Post as PostType } from "../../stores/type";
import { getPostAction } from "../../stores/actions/postActions";
import { getUserInforById } from "../../localStorage";

const { TabPane } = Tabs;

const NewFeeds = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostAction());
  }, [dispatch]);

  const posts = useSelector((state: any) => state.postReducers.posts);
  const articles = useSelector((state: any) => state.articleReducers.articles);
  const isLogged = useSelector(
    (state: any) => state.authReducers.currentUser.authenticated
  );
  return (
    <div>
      <Tabs defaultActiveKey="1" className="newfeeds-holder">
        {isLogged ? (
          <TabPane tab="Your Feed" key="1">
            No articles are here... yet.
          </TabPane>
        ) : (
          ""
        )}
        <TabPane tab="Global Feed" key="2">
          <ul className="post-list">
            {articles.map((item: Article, index: number) => {
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
            {posts.map((item: PostType, index: number) => {
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
    </div>
  );
};

export default NewFeeds;
