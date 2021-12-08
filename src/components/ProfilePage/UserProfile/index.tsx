import { Button, Col, Row } from "antd";
import React from "react";
import { SettingOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";
import { User } from "../../../stores/type";
import { addFollow } from "../../../stores/actions/accountsActions";
import { getUserInforById } from "../../../localStorage";
import { useHistory, useLocation } from "react-router";

interface UserProfileProps {
  userInfor: User;
}

export const UserProfile = ({ userInfor }: UserProfileProps) => {
  const currentUserId = useSelector(
    (state: any) => state.authReducers.currentUser.userId
  );
  const currentUserInfor = getUserInforById(currentUserId)[0];
  const history = useHistory();
  const location = useLocation();

  const handleFollow = () => {
    addFollow(userInfor.userId, currentUserId);
    setTimeout(() => {
      history.push(location.pathname);
    }, 200);
  };

  const handleAction = () => {
    history.push("/setting");
  };

  return (
    <div className="user-profile">
      <Row gutter={[8, 8]} className="container small-container">
        <Col span={24}>
          <img src={userInfor.image} alt="user-img" className="user-img"></img>
        </Col>
        <Col span={24}>
          <Row gutter={[12, 12]}>
            <Col span={24} className="username">
              {userInfor.username}
            </Col>
          </Row>
          <Row gutter={[12, 12]}>
            <Col span={24} className="bio">
              {userInfor.bio}
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row gutter={[12, 12]} style={{ textAlign: "right" }}>
            <Col span={24}>
              <Button
                className="ant-btn btn-secondary"
                onClick={
                  currentUserId === userInfor.userId
                    ? handleAction
                    : handleFollow
                }
              >
                {currentUserId === userInfor.userId ? (
                  <SettingOutlined />
                ) : (
                  <PlusOutlined />
                )}
                {currentUserId === userInfor.userId
                  ? "Edit Profile Settings"
                  : currentUserInfor.following.includes(userInfor.userId)
                  ? "Unfollow"
                  : "Follow"}
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
