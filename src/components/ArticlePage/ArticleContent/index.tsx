import { Col, Row } from "antd";
import React from "react";
import { ArticleComments } from "../ArticleComments";
import { CommentForm } from "../ArticleComments/CommentForm";

interface Props {}

export const ArticleContent = (props: Props) => {
  return (
    <div className="container">
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <p>Content</p>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <CommentForm />
              <ArticleComments />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
