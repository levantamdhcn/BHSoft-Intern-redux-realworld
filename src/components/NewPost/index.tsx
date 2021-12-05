import { Form, Input, Button, Row, Col } from "antd";
import { Article } from "../../stores/type";
import { addArtilce } from "../../stores/actions/articleActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import moment from "moment";
/* eslint-enable no-template-curly-in-string */

const NewPost = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userId = useSelector(
    (state: any) => state.authReducers.currentUser.userId
  );
  const createdAt = moment().format("MMM Do YY");
  const onFinish = (values: Article) => {
    const newData = {
      ...values,
      userId: userId,
      createdAt,
      articleId: Math.random().toString(36).substr(2, 9),
    };
    dispatch(addArtilce(newData));

    setTimeout(() => {
      history.push(`/article/${newData.articleId}`);
    }, 2000);
  };
  return (
    <div>
      <Form onFinish={onFinish}>
        <Row gutter={[16, 16]}>
          <Col span={8} offset={7}>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Form.Item
                  name="title"
                  rules={[
                    {
                      required: true,
                      message: "Title can't be blank",
                    },
                  ]}
                >
                  <Input
                    size={"large"}
                    placeholder="Article Title"
                    style={{ padding: "10px", fontSize: "20px" }}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Form.Item
                  name="desc"
                  rules={[
                    {
                      required: true,
                      message: "description can't be blank",
                    },
                  ]}
                >
                  <Input placeholder="What's this article about?" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Form.Item
                  name="content"
                  rules={[
                    {
                      required: true,
                      message: "Body can't be blank",
                    },
                  ]}
                >
                  <Input.TextArea
                    rows={7}
                    placeholder="Write your article (in markdown)"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Form.Item name="tag">
                  <Input placeholder="Enter tags" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col span={24} style={{ textAlign: "right" }}>
                <Form.Item>
                  <Button className="ant-btn btn-submit" htmlType="submit">
                    Publish Article
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default NewPost;
