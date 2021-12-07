import { Button, Col, Row } from "antd";
import React from "react";
import { SettingOutlined } from "@ant-design/icons";

import { getUserInforById } from "../../../localStorage";
import { useSelector } from "react-redux";
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";

interface UserProfileProps {
  userId: string;
  handleAction: () => void;
}

export const UserProfile = ({ userId, handleAction }: UserProfileProps) => {
  const currentUserId = useSelector(
    (state: any) => state.authReducers.currentUser.userId
  );
  const userInfor = getUserInforById(userId)[0];
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
              <Button className="ant-btn" onClick={handleAction}>
                {currentUserId === userId ? (
                  <SettingOutlined />
                ) : (
                  <PlusOutlined />
                )}
                {currentUserId === userId ? "Edit Profile Settings" : "Follow"}
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
