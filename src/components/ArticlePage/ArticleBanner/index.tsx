import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { getArticleById } from "../../../axios/articlesApis";
import { deleteArticleAction } from "../../../stores/actions/articleActions";
import {
  ArticleMeta,
  StyledArticleBanner,
} from "../../styled/ArticlePage.styled";
import { InnerContainer } from "../../styled/Container.styled";

interface ArticleBannerProps {
  id: string;
}

export const ArticleBanner = ({ id }: ArticleBannerProps) => {

  const [articleInfo, setArticleInfo] = useState({
    _id: "",
    title: "",
    desc: "",
    body: "",
    comments: [],
    tagList: [],
    author: {
      username: "",
      bio: "",
      image: "",
    }
  })
  useEffect(() => {
    getArticleById(id).then((response) => {
      setArticleInfo(response.data.article)
    })
  },[id])
  const dispatch = useDispatch();
  const history = useHistory();

  const handleUpdate = () => {
    history.push(`/editor/${id}`);
  };
  const handleDelete = () => {
    dispatch(deleteArticleAction(articleInfo._id, history));
    history.push("/");
  };

  return (
    <StyledArticleBanner>
      <InnerContainer>
        <h1 className="article-title">{articleInfo.title}</h1>
        <ArticleMeta>
          <a href="#@user" className="post-article">
            <img src={articleInfo.author.image} alt="avatar" />
          </a>
          <div className="infor">
            <a href="#@user" className="author">
              {articleInfo.author.username}
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
