import { Col, Row } from "antd";
import React from "react";
import { ArticlesToggle } from "./ArticleToggle";
import { UserProfile } from "./UserProfile";

const ProfilePage = () => {
  return (
    <div style={{ paddingBottom: "100px" }}>
      <Row>
        <Col span={24}>
          <UserProfile />
        </Col>
        <Col span={24} className="profile-page">
          <ArticlesToggle />
        </Col>
      </Row>
    </div>
  );
};

export default ProfilePage;
