import { Tabs } from "antd";
import React, { useEffect } from "react";
import Post from "./Post";
import { postActions } from "../../stores/index";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { Post as PostType } from "../../stores/type";

const { TabPane } = Tabs;

const NewFeeds = () => {
  const dispatch = useDispatch();
  const { getPostAction } = bindActionCreators(postActions, dispatch);
  useEffect(() => {
    getPostAction();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
