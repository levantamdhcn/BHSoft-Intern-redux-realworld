import { Button, Col, Row } from "antd";
import React from "react";
import { SettingOutlined } from "@ant-design/icons";

interface Props {}

export const UserProfile = (props: Props) => {
  return (
    <div className="user-profile">
      <Row gutter={[8, 8]} className="container small-container">
        <Col span={24}>
          <img
            src="https://api.realworld.io/images/smiley-cyrus.jpeg"
            alt="user-img"
            className="user-img"
          ></img>
        </Col>
        <Col span={24}>
          <Row gutter={[12, 12]}>
            <Col span={24} className="username">
              lvtann
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row gutter={[12, 12]} style={{ textAlign: "right" }}>
            <Col span={24}>
              <Button className="ant-btn">
                <SettingOutlined />
                Edit Profile Settings
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
