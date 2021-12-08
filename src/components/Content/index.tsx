import React from "react";
import NewFeeds from "../NewFeeds/index";
import PopularTags from "../NewFeeds/PopularTags";
import { Row, Col, Layout } from "antd";
import { useSelector } from "react-redux";
import { Article } from "../../stores/type";

const AppContent = () => {
  const articles = useSelector((state: any) => state.articleReducers.articles);
  let tagList: string[] = [];
  articles.forEach((element: Article) => {
    tagList = tagList.concat(element.tagList);
  });
  let uniqueTags = tagList.filter((c, index) => {
    return tagList.indexOf(c) === index;
  });
  return (
    <Layout.Content style={{ padding: "0 50px 100px 50px" }}>
      <Row gutter={[32, 16]}>
        <Col span={18}>
          <NewFeeds />
        </Col>
        <Col span={6}>
          <PopularTags tagList={uniqueTags} />
        </Col>
      </Row>
    </Layout.Content>
  );
};

export default AppContent;
