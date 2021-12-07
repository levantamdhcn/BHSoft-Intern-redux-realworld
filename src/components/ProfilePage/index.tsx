import { Col, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { getUserInforByUsername } from "../../localStorage";
import { ArticlesToggle } from "./ArticleToggle";
import { UserProfile } from "./UserProfile";

const ProfilePage = () => {
  const userId = useSelector(
    (state: any) => state.authReducers.currentUser.userId
  );
  const history = useHistory();
  const location = useLocation();
  const username = location.pathname.split("/")[2];
  const userInfor = getUserInforByUsername(username)[0];
  const handleAction = () => {
    history.push("/setting");
  };
  console.log(userInfor);
  return (
    <div style={{ paddingBottom: "100px" }}>
      <Row>
        <Col span={24}>
          <UserProfile
            userId={userId}
            handleAction={handleAction}
            userInfor={userInfor}
          />
        </Col>
        <Col span={24} className="profile-page">
          <ArticlesToggle userId={userInfor.userId} />
        </Col>
      </Row>
    </div>
  );
};

export default ProfilePage;
