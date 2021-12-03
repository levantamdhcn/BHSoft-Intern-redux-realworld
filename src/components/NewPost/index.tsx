import { Form, Input, Button, Row, Col } from 'antd';
/* eslint-enable no-template-curly-in-string */

const NewPost = () => {
    return (
        <div>
           <Form>
               <Row gutter={[16,16]}>
                    <Col span={8} offset={7}>
                        <Row gutter={[16,16]}>
                            <Col span={24}>
                                <Form.Item>
                                    <Input size={'large'} placeholder='Article Title' style={{ padding: '10px', fontSize: '20px'}}/>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={[16,16]}>
                            <Col span={24}>
                                <Form.Item>
                                    <Input placeholder="What's this article about?"/>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={[16,16]}>
                            <Col span={24}>
                                <Form.Item>
                                    <Input.TextArea rows={7} placeholder='Write your article (in markdown)'/>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={[16,16]}>
                            <Col span={24}>
                                <Form.Item>
                                    <Input placeholder='Enter tags'/>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={[16,16]}>
                            <Col span={24} style={{ textAlign: 'right'}}>
                                <Form.Item>
                                    <Button className='ant-btn ant-btn btn-submit'>Publish Article</Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
               </Row>
           </Form>
        </div>
    )
};

export default NewPost
