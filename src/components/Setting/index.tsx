import { Button, Col, Form, Input, Row } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getUserInforById } from "../../localStorage";
import { updateAccount } from "../../stores/actions/accountsActions";
import { signOutAction } from "../../stores/actions/authActions";

const Setting = () => {
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogOut = () => {
    dispatch(signOutAction);
  };
  const userId = useSelector(
    (state: any) => state.authReducers.currentUser.userId
  );
  const onFinish = (values: any) => {
    const valuesToUpdate = {
      ...values,
      userId: userId,
      password,
    };
    updateAccount(valuesToUpdate);
    setTimeout(() => {
      history.push("/");
    }, 500);
  };
  const { image, username, email, bio } = getUserInforById(userId)[0];
  return (
    <div style={{ marginBottom: "100px" }}>
      <Form
        initialValues={{
          image: image,
          username: username,
          email: email,
          bio: bio,
        }}
        onFinish={onFinish}
      >
        <Row gutter={[16, 16]}>
          <Col span={8} offset={7}>
            <Row>
              <Col span={24}>
                <Form.Item name="image">
                  <Input size={"large"} placeholder="URL of profile picture" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Form.Item name="username">
                  <Input
                    className="form-input-large form-text-large"
                    placeholder="Username"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Form.Item name="bio">
                  <Input.TextArea
                    rows={6}
                    className="form-text-large"
                    placeholder="Short bio about you"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Form.Item name="email">
                  <Input
                    className="form-input-large form-text-large"
                    placeholder="Email"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Form.Item>
                  <Input
                    className="form-input-large form-text-large"
                    placeholder="New Password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col span={24} style={{ textAlign: "right" }}>
                <Form.Item>
                  <Button className="btn ant-btn btn-submit" htmlType="submit">
                    Update Settings
                  </Button>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col span={24} style={{ textAlign: "right" }}>
                <hr style={{ margin: "16px 0" }} />
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col span={24} style={{ textAlign: "left" }}>
                <Button className="ant-btn btn-logout" onClick={handleLogOut}>
                  Or click here to logout.
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Setting;
