import { Form, Input, Row, Col } from "antd";
import { Article } from "../../stores/type";
import { addArtilce, updateArticle } from "../../stores/actions/articleActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import moment from "moment";
import { StyledButton } from "../styled/Button.styled";
/* eslint-enable no-template-curly-in-string */

interface NewPostProps {
  id?: string;
}

const NewPost = ({ id }: NewPostProps) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userId = useSelector(
    (state: any) => state.authReducers.currentUser.userId
  );
  const articleInfor = useSelector((state: any) =>
    state.articleReducers.articles.filter(
      (item: Article) => item.articleId === id
    )
  );

  if (id) {
    var { title, desc, content, tag } = articleInfor[0];
  } // when the id is availale that user is updating post, and only get the infor when updating

  const onFinish = (values: Article) => {
    if (!id) {
      const createdAt = moment().format("MMM Do YY");
      const newData = {
        ...values,
        userId: userId,
        favourtied: false,
        favoritesCount: 0,
        createdAt,
        articleId: Math.random().toString(36).substr(2, 9),
      };
      dispatch(addArtilce(newData));

      setTimeout(() => {
        history.push(`/article/${newData.articleId}`);
      }, 200);
    } else {
      dispatch(updateArticle(values));
      setTimeout(() => {
        history.push(`/article/${articleInfor[0].articleId}`);
      }, 200);
    }
  };
  return (
    <div>
      <Form
        onFinish={onFinish}
        initialValues={{
          title: id ? title : "",
          desc: id ? desc : "",
          content: id ? content : "",
          tag: id ? tag : "",
        }}
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
