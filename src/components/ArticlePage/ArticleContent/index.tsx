import { Col, Row } from "antd";
import React from "react";
import { ArticleComments } from "../ArticleComments";
import { CommentForm } from "../ArticleComments/CommentForm";

interface Props {
  body?: string;
  tagList?: [];
  comments: [];
}

export const ArticleContent = ({ body, tagList, comments }: Props) => {
  return (
    <div className="container">
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <p>{body}</p>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <ul className="tag-list">
                {tagList?.map((tag) => (
                  <li key={tag} className="tag-item">
                    {tag}
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <CommentForm />
              <ArticleComments comments={comments} />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
