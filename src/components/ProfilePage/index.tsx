import { Col, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { ArticlesToggle } from "./ArticleToggle";
import { UserProfile } from "./UserProfile";

const ProfilePage = () => {
  const userId = useSelector(
    (state: any) => state.authReducers.currentUser.userId
  );
  const history = useHistory();
  const handleAction = () => {
    history.push("/setting");
  };
  return (
    <div style={{ paddingBottom: "100px" }}>
      <Row>
        <Col span={24}>
          <UserProfile userId={userId} handleAction={handleAction} />
        </Col>
        <Col span={24} className="profile-page">
          <ArticlesToggle />
        </Col>
      </Row>
    </div>
  );
};

export default ProfilePage;
