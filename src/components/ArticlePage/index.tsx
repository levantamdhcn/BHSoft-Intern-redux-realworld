import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getArticleById } from "../../axios/articlesApis";
import { ArticleBanner } from "./ArticleBanner";
import { ArticleContent } from "./ArticleContent";


export const ArticlePage = () => {
  const [articleMeta, setArticleMeta] = useState({
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

  const id = useLocation().pathname.split("/")[2]
  useEffect(() => {
    getArticleById(id).then((response) => {
      setArticleMeta(response.data.article)
    })
  },[id])

  const { body, tagList } = articleMeta
  return (
    <div>
      <ArticleBanner id={id}/>
      <ArticleContent
        body={body}
        id={id}
        tagList={tagList}
      />
    </div>
  );
};
