import { Button, Col, Row } from "antd";
import TextArea from "rc-textarea";
import React from "react";

export const CommentForm = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={10} offset={7}>
        <div className="card">
          <Row>
            <Col span={24}>
              <TextArea rows={2} className="form-control" />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div className="card-footer">
                <a href="lvtann.com" className="comment-author">
                  <img
                    src="https://api.realworld.io/images/smiley-cyrus.jpeg"
                    alt="author-avt"
                  />
                </a>
                <Button className="ant-btn btn-submit">Post Comment</Button>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
};
