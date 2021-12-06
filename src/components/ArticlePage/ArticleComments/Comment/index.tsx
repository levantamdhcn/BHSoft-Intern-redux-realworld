import DeleteFilled from "@ant-design/icons/lib/icons/DeleteFilled";
import { Col, Row } from "antd";
import React from "react";

interface CommentProps {
  body: string;
  image: string;
  username: string;
  createdAt: string;
}

export const Comment = ({ body, image, username, createdAt }: CommentProps) => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={10} offset={7}>
        <div className="card">
          <Row>
            <Col span={24}>
              <div className="card-block">
                <p className="card-text">{body}</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div className="card-footer">
                <a href="lvtann.com" className="comment-author">
                  <img src={image} alt="author-avt" />
                </a>
                <a href="lvtann.com" className="comment-author">
                  {username}
                </a>
                <span className="date-posted">{createdAt.split("T")[0]}</span>
                <span className="comment-action">
                  <DeleteFilled />
                </span>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
};
