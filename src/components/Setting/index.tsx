import { Col, Form, Input, Row } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { updateAccount } from "../../stores/actions/accountsActions";
import { signOutAction } from "../../stores/actions/authActions";
import { FormItem } from "../styled/Form.styled";
import { StyledButton } from "../styled/Button.styled";

const Setting = () => {
  const [password, setPassword] = useState<string>("");

  const token = useSelector((state: any) => state.authReducers.user.refreshToken)

  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogOut = () => {
    dispatch(signOutAction(token, history));
  };
  const user = useSelector(
    (state: any) => state.authReducers.user
  );
  const onFinish = (values: any) => {
    const valuesToUpdate = {
      ...values,
      _id: user._id,
      password,
    };
    dispatch(updateAccount(valuesToUpdate, history));
  };
  const { image, username, email, bio } = user;
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
                <FormItem name="image">
                  <Input size={"large"} placeholder="URL of profile picture" />
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <FormItem size="large" name="username">
                  <Input placeholder="Username" />
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <FormItem name="bio">
                  <Input.TextArea rows={6} placeholder="Short bio about you" />
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <FormItem name="email" size="large">
                  <Input placeholder="Email" />
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <FormItem size="large" name="password">
                  <Input
                    placeholder="New Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormItem>
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col span={24} style={{ textAlign: "right" }}>
                <FormItem>
                  <StyledButton status="submit" htmlType="submit">
                    Update Settings
                  </StyledButton>
                </FormItem>
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col span={24} style={{ textAlign: "right" }}>
                <hr style={{ margin: "16px 0" }} />
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col span={24} style={{ textAlign: "left" }}>
                <StyledButton status="logout" onClick={handleLogOut}>
                  Or click here to logout.
                </StyledButton>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Setting;
