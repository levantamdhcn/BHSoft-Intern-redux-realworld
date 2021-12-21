import { Form, Input, Row, Col } from "antd";
import { Content } from "antd/lib/layout/layout";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  FormItem,
  FormMsgItem,
  FormMsgList,
  FormNavigate,
  FormTitle,
} from "../styled/Form.styled";
import { StyledButton } from "../styled/Button.styled";
import { signUpAction } from "../../stores/actions/authActions";

const SignUp = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useDispatch();
  const errorMsg = useSelector(
    (state: any) => state.authReducers.signUpErrorMsg
  );

  const history = useHistory();

  const onFinish = () => {
    dispatch(signUpAction(email, username, password, history));
  };

  return (
    <Content style={{ padding: "0 50px" }}>
      <Row gutter={[16, 16]}>
        <Col span={10} offset={4} style={{ textAlign: "center" }}>
          <Row gutter={[16, 16]}>
            <Col span={24} offset={7}>
              <FormTitle>Sign Up</FormTitle>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={24} offset={7}>
              <FormNavigate to="/signin">Have an account?</FormNavigate>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={24} offset={7}>
              <FormMsgList>
                {errorMsg
                  ? errorMsg.map((item: string) => (
                      <FormMsgItem>{item}</FormMsgItem>
                    ))
                  : ""}
              </FormMsgList>
            </Col>
          </Row>
        </Col>
        <Col span={10} offset={7}>
          <Form
            name="basic"
            labelCol={{ span: 0 }}
            wrapperCol={{ span: 24 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <FormItem
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                placeholder="Username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </FormItem>

            <FormItem
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </FormItem>

            <FormItem
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </FormItem>

            <FormItem wrapperCol={{ offset: 9, span: 24 }}>
              <StyledButton status="submit" type="primary" htmlType="submit">
                Sign Up
              </StyledButton>
            </FormItem>
          </Form>
        </Col>
      </Row>
    </Content>
  );
};
export default SignUp;
