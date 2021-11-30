import { Form, Input, Button, Row, Col } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { NavLink } from 'react-router-dom';

const SignUp = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
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
        </Col>
        <Col span={10} offset={7}>
          <Form
            name="basic"
            labelCol={{ span: 0 }}
            wrapperCol={{ span: 24 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="Email"
              rules={[{ required: true, message: 'Please input your email!' }]}
              className='form-input'
            >
              <Input placeholder="Email"/>
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
              className='form-input'
            >
              <Input.Password placeholder="Password"/>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
              <Button type="primary" htmlType="submit" className='ant-btn btn-submit'>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Content>
  );
}
export default SignUp