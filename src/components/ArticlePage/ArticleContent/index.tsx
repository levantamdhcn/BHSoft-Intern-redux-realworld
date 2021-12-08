import { Col, Row } from "antd";
import React from "react";
import { ArticleComments } from "../ArticleComments";
import { CommentForm } from "../ArticleComments/CommentForm";

interface Props {
  body?: string;
  tagList?: [] | string;
  comments: [];
  id: string;
}

export const ArticleContent = ({ body, tagList, comments, id }: Props) => {
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
                {Array.isArray(tagList) ? (
                  tagList.map((tag) => (
                    <li key={tag} className="tag-item">
                      {tag}
                    </li>
                  ))
                ) : (
                  <li key={tagList} className="tag-item">
                    {tagList}
                  </li>
                )}
              </ul>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <CommentForm id={id} />
              <ArticleComments comments={comments} />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
