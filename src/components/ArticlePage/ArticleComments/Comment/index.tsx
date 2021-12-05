import DeleteFilled from "@ant-design/icons/lib/icons/DeleteFilled";
import { Col, Row } from "antd";
import React from "react";

interface Props {}

export const Comment = (props: Props) => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={10} offset={7}>
        <div className="card">
          <Row>
            <Col span={24}>
              <div className="card-block">
                <p className="card-text">Comment</p>
              </div>
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
                <a href="lvtann.com" className="comment-author">
                  lvtann
                </a>
                <span className="date-posted">Sun Dec 05 2021</span>
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
