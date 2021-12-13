import { Col, Row } from "antd";
import React from "react";
import { SettingOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";
import { User } from "../../../stores/type";
import { addFollow } from "../../../stores/actions/accountsActions";
import { getUserInforById } from "../../../localStorage";
import { useHistory, useLocation } from "react-router";
import {
  UserImg,
  Username,
  StyledUserProfile,
} from "../../styled/UserProfile.styled";
import { StyledButton } from "../../styled/Button.styled";
import { InnerContainer } from "../../styled/Container.styled";

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
    <StyledUserProfile>
      <InnerContainer>
        <Row gutter={[8, 8]}>
          <Col span={24}>
            <UserImg>
              <img src={userInfor.image} alt="user-img"></img>
            </UserImg>
          </Col>
          <Col span={24}>
            <Row gutter={[12, 12]}>
              <Col span={24}>
                <Username>{userInfor.username}</Username>
              </Col>
            </Row>
            <Row gutter={[12, 12]}>
              <Col span={24}>{userInfor.bio}</Col>
            </Row>
          </Col>
          <Col span={24}>
            <Row gutter={[12, 12]} style={{ textAlign: "right" }}>
              <Col span={24}>
                <StyledButton
                  status="secondary"
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
                </StyledButton>
              </Col>
            </Row>
          </Col>
        </Row>
      </InnerContainer>
    </StyledUserProfile>
  );
};
