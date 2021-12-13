import { Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { getUserInforById } from "../../../localStorage";
import { deleteArticle } from "../../../stores/actions/articleActions";
import { Article, Articles } from "../../../stores/type";
import {
  ArticleMeta,
  StyledArticleBanner,
} from "../../styled/ArticlePage.styled";
import { InnerContainer } from "../../styled/Container.styled";

interface ArticleBannerProps {
  id: string;
  articlesMeta: Articles;
}

export const ArticleBanner = ({ id, articlesMeta }: ArticleBannerProps) => {
  const dispatch = useDispatch();

  const articleInfo = articlesMeta.filter(
    (item: Article) => item.articleId === id
  );

  const userCreateInfo = getUserInforById(articleInfo[0].userId);

  // const dispatch = useDispatch();
  const history = useHistory();

  const handleUpdate = () => {
    history.push(`/editor/${id}`);
  };
  const handleDelete = () => {
    dispatch(deleteArticle(articleInfo[0].articleId));
    history.push("/");
  };

  return (
    <StyledArticleBanner>
      <InnerContainer>
        <h1 className="article-title">{articleInfo[0].title}</h1>
        <ArticleMeta>
          <a href="#@user" className="post-article">
            <img src={userCreateInfo[0].image} alt="avatar" />
          </a>
          <div className="infor">
            <a href="#@user" className="author">
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
            <Button
              ghost
              className="ant-btn btn-outline-danger"
              onClick={handleDelete}
            >
              Delete Article
            </Button>
          </span>
        </ArticleMeta>
      </InnerContainer>
    </StyledArticleBanner>
  );
};
