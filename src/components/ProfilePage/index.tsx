import { Col, Row } from "antd";
import React from "react";
import { useLocation } from "react-router";
import { getUserInforByUsername } from "../../localStorage";
import { ArticlesToggle } from "./ArticleToggle";
import { UserProfile } from "./UserProfile";

const ProfilePage = () => {
  const location = useLocation();
  const username = location.pathname.split("/")[2];
  const userInfor = getUserInforByUsername(username)[0];

  return (
    <div style={{ paddingBottom: "100px" }}>
      <Row>
        <Col span={24}>
          <UserProfile userInfor={userInfor} />
        </Col>
        <Col span={24} className="profile-page">
          <ArticlesToggle userId={userInfor.userId} />
        </Col>
      </Row>
    </div>
  );
};

export default ProfilePage;
