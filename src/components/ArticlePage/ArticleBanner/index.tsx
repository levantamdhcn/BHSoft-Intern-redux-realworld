import { Button } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getUserInforById } from "../../../localStorage";
import { Article } from "../../../stores/type";

interface ArticleBannerProps {
  id: string;
}

export const ArticleBanner = ({ id }: ArticleBannerProps) => {
  const articlesMeta = useSelector(
    (state: any) => state.articleReducers.articles
  );

  const articleInfo = articlesMeta.filter(
    (item: Article) => item.articleId === id
  );

  const userCreateInfo = getUserInforById(articleInfo[0].userId);

  // const dispatch = useDispatch();
  const history = useHistory();

  const handleUpdate = () => {
    history.push("/editor");
  };
  // const handleDelete = () => {};

  return (
    <div>
      <div className="banner article-banner">
        <div className="container small-container">
          <h1 className="article-title">{articleInfo[0].title}</h1>
          <div className="post-meta">
            <a href="#@user" className="post-article">
              <img src={userCreateInfo[0].image} alt="avatar" />
            </a>
            <div className="infor article-infor">
              <a href="#@user" className="author artilce-author">
                {userCreateInfo[0].username}
              </a>
              <span className="date">Sat Dec 04 2021</span>
            </div>
            <span className="article-action">
              <Button
                ghost
                size="middle"
                className="ant-btn btn-outline-secondary"
                onClick={handleUpdate}
              >
                Edit Article
              </Button>
              <Button ghost className="ant-btn btn-outline-danger">
                Delete Article
              </Button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
