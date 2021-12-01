import { Form, Input, Button, Row, Col } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux'
import { authActions } from '../../stores/index';
import { useState } from 'react';

const SignUp = () => {

  const [email,setEmail] = useState<string>('')
  const [password,setPassword] = useState<string>('')
  
  const isSuccess = useSelector((state: any) => state.authReducers.isSignUpSuccess)
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const dispatch = useDispatch()
  const { signInAction } = bindActionCreators( authActions, dispatch) 

  const onFinish = () => {
    signInAction(email,password)
  };

  return (
    <Content style={{ padding: '0 50px' }}>
      <Row gutter={[16, 16]}>
        <Col span={10} offset={4} style={ { textAlign: 'center' } }>
          <Row gutter={[16, 16]}>
            <Col span={24} offset={7}>
              <h1 className='form-title'>Sign In</h1>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={24} offset={7}>
              <NavLink to="/signup" className='form-navigate'>Need an account?</NavLink>
            </Col>
          </Row>
          {
            isSuccess ? '' : <Row gutter={[16, 16]}>
                              <Col span={24} offset={7}>
                                <ul className='error-msg-holder'>
                                  <li className="error-msg">email or password is invalid</li>  
                                </ul>
                              </Col>
                            </Row>
          }
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
            <Form.Item
              name="Email"
              rules={[{ required: true, message: 'Please input your email!' }]}
              className='form-input'
            >
              <Input placeholder="Email" onChange={ (e) => (setEmail(e.target.value))}/>
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
              className='form-input'
            >
              <Input.Password placeholder="Password" onChange={ (e) => (setPassword(e.target.value)) }/>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
              <Button type="primary" htmlType="submit" className='ant-btn btn-submit'>
                Sign In
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Content>
  );
}
export default SignUp