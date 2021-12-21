import { Form, Input, Row, Col } from "antd";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { SmallContent } from "../styled/Content.styled";
import {
  FormItem,
  FormMsgItem,
  FormMsgList,
  FormNavigate,
  FormTitle,
} from "../styled/Form.styled";
import { StyledButton } from "../styled/Button.styled";
import { signInAction } from "../../stores/actions/authActions";

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const errorMsg = useSelector(
    (state: any) => state.authReducers.signInErrorMsg
  );

  const history = useHistory();

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const dispatch = useDispatch();

  const onFinish = () => {
    dispatch(signInAction(email, password,history));
  };

  return (
    <SmallContent>
      <Row gutter={[16, 16]}>
        <Col span={10} offset={4} style={{ textAlign: "center" }}>
          <Row gutter={[16, 16]}>
            <Col span={24} offset={7}>
              <FormTitle>Sign In</FormTitle>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={24} offset={7}>
              <FormNavigate to="/signup">Need an account?</FormNavigate>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={24} offset={7}>
              <FormMsgList>
                {errorMsg
                  ? errorMsg.map((item: string) => (
                      <FormMsgItem key={item}>{item}</FormMsgItem>
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
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            onFinish={onFinish}
          >
            <FormItem
              name="Email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormItem>

            <FormItem wrapperCol={{ offset: 10, span: 16 }}>
              <StyledButton status="submit" htmlType="submit">
                Sign In
              </StyledButton>
            </FormItem>
          </Form>
        </Col>
      </Row>
    </SmallContent>
  );
};
export default SignIn;
