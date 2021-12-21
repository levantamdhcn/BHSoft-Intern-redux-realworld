import { Form, Input, Row, Col } from "antd";
import { Article } from "../../stores/type";
import { addArtilce, updateArticleAction } from "../../stores/actions/articleActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { StyledButton } from "../styled/Button.styled";
import { useEffect } from "react";
import { getArticleById } from "../../axios/articlesApis";
/* eslint-enable no-template-curly-in-string */

const NewPost = () => {
  const [form] = Form.useForm();
  const location = useLocation()
  const id = location.pathname.split("/")[2]
  useEffect(() => {
    getArticleById(id).then((response) => {
      const {title, desc, body,tagList} = response.data.article
      form.setFieldsValue({
        title,
        desc,
        body,
        tagList
      })
    })
  },[id,form])
  const history = useHistory();
  const user = useSelector(
    (state: any) => state.authReducers.user
  );
  const dispatch = useDispatch();
  const onFinish = (values: Article) => {
    if (id === undefined) {
      console.log("a")
      const newData = {
        ...values,
        author: {
          username: user.username,
          bio: user.bio,
          image: user.image
        },
        favourtied: [],
        favoritesCount: 0,
      };
      dispatch(addArtilce(newData,history));
    } else {

      dispatch(updateArticleAction(id,values,history));
    }
  };
  return (
    <div>
      <Form
        form={form}
        onFinish={onFinish}
      >
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
                  name="body"
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
                <Form.Item name="tagList">
                  <Input placeholder="Enter tags" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col span={24} style={{ textAlign: "right" }}>
                <Form.Item>
                  <StyledButton
                    className="ant-btn btn-submit"
                    htmlType="submit"
                    status="submit"
                  >
                    Publish Article
                  </StyledButton>
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
