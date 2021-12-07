import { Tabs } from "antd";
import React, { useEffect } from "react";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { Post as PostType } from "../../stores/type";
import { getPostAction } from "../../stores/actions/postActions";

const { TabPane } = Tabs;

const NewFeeds = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostAction);
  }, [dispatch]);

  const posts = useSelector((state: any) => state.postReducers.posts);
  const isLogged = useSelector(
    (state: any) => state.authReducers.currentUser.authenticated
  );
  return (
    <div>
      <Tabs defaultActiveKey="1" className="newfeeds-holder">
        {isLogged ? (
          <TabPane tab="Your Feed" key="1">
            Your Feed
          </TabPane>
        ) : (
          ""
        )}
        <TabPane tab="Global Feed" key="2">
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
