import { Button, Col, Form, Input, Row } from 'antd'
import React from 'react'

const Setting = () => {
    return (
        <div style={{ marginBottom: '100px'}}>
            <Form>
                <Row gutter={[16,16]}>
                    <Col span={8} offset={7}>
                        <Row>
                            <Col span={24}>
                                <Form.Item>
                                    <Input size={'large'} placeholder='URL of profile picture'/>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <Form.Item>
                                    <Input className='form-input-large form-text-large' placeholder='Username'/>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <Form.Item>
                                    <Input.TextArea rows={6} className='form-text-large' placeholder='Short bio about you'/>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row >
                            <Col span={24}>
                                <Form.Item>
                                    <Input className='form-input-large form-text-large' placeholder='Email'/>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <Form.Item>
                                    <Input className='form-input-large form-text-large' placeholder='New Password'/>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={[16,16]}>
                            <Col span={24} style={{ textAlign: 'right'}}>
                                <Form.Item>
                                    <Button className='btn ant-btn btn-submit'>Update Settings</Button>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={[16,16]}>
                            <Col span={24} style={{ textAlign: 'right'}}>
                                <hr style={{ margin: '16px 0'}}/>
                            </Col>
                        </Row>
                        <Row gutter={[16,16]}>
                            <Col span={24} style={{ textAlign: 'left'}}>
                                <Button className='ant-btn btn-logout'>Or click here to logout.</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Form>
            
        </div>
    )
}

export default Setting
