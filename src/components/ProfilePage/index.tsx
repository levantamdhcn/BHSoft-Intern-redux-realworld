import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { getUserByUsername } from "../../axios/userApis";
import { ArticlesToggle } from "./ArticleToggle";
import { UserProfile } from "./UserProfile";

const ProfilePage = () => {
  const [userInfor, setUserInfor] = useState({
    _id: "",
    username: "",
    password: "",
    email: "",
    bio: "",
    image: "",
    following: []
  })
  const location = useLocation();
  const username = location.pathname.split("/")[2];
  useEffect(() => {
    getUserByUsername(username).then((response) => {
      setUserInfor(response.data.user[0])
    })
  },[username])
  return (
    <div style={{ paddingBottom: "100px" }}>
      <Row>
        <Col span={24}>
          <UserProfile userInfor={userInfor} />
        </Col>
        <Col span={24}>
          <ArticlesToggle userId={userInfor._id} />
        </Col>
      </Row>
    </div>
  );
};

export default ProfilePage;
