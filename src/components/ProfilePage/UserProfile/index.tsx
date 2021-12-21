import { Col, Row } from "antd";
import React from "react";
import { SettingOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";
import { User } from "../../../stores/type";
import { useHistory } from "react-router";
import {
  UserImg,
  Username,
  StyledUserProfile,
} from "../../styled/UserProfile.styled";
import { StyledButton } from "../../styled/Button.styled";
import { InnerContainer } from "../../styled/Container.styled";
import { addFollow, removeFollow } from "../../../stores/actions/accountsActions";

interface UserProfileProps {
  userInfor: User;
}

export const UserProfile = ({ userInfor }: UserProfileProps) => {
  const currentUser = useSelector(
    (state: any) => state.authReducers.user
  );
  const { _id } = currentUser
  const history = useHistory();
  const dispatch = useDispatch()

  const handleFollow = () => {
    const isFollowing = currentUser.following.includes(userInfor._id)
    console.log(isFollowing)
    if(!isFollowing) {
      dispatch(addFollow(userInfor._id,_id))
    }
    else{
      dispatch(removeFollow(userInfor._id))
    }
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
                    _id === userInfor._id
                      ? handleAction
                      : handleFollow
                  }
                >
                  {_id === userInfor._id ? (
                    <SettingOutlined />
                  ) : (
                    <PlusOutlined />
                  )}
                  {_id === userInfor._id
                    ? "Edit Profile Settings"
                    : currentUser.following.includes(userInfor._id)
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
