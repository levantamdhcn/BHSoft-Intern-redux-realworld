import { Button, Col, Row } from "antd";
import moment from "moment";
import TextArea from "rc-textarea";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInforById } from "../../../../localStorage";
import { addComment } from "../../../../stores/actions/articleActions";

interface CommentFormProps {
  id: string;
}

export const CommentForm = ({ id }: CommentFormProps) => {
  const [body, setBody] = useState<string>("");
  const dispatch = useDispatch();

  const currentUserId = useSelector(
    (state: any) => state.authReducers.currentUser.userId
  );

  var userInfor = getUserInforById(currentUserId);
  const data = {
    author: {
      username: userInfor[0].username,
      image: userInfor[0].image,
    },
    body: body,
    id: Math.random().toString(36).substr(2, 9),
    createdAt: moment().format("MMM Do YY"),
  };

  const handleAddComment = () => {
    dispatch(addComment(id, data));
  };
  return (
    <Row gutter={[16, 16]}>
      <Col span={10} offset={7}>
        <div className="card">
          <Row>
            <Col span={24}>
              <TextArea
                rows={2}
                className="form-control"
                onChange={(e) => setBody(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div className="card-footer">
                <a href="lvtann.com" className="comment-author">
                  <img
                    src="https://api.realworld.io/images/smiley-cyrus.jpeg"
                    alt="author-avt"
                  />
                </a>
                <Button
                  className="ant-btn btn-submit"
                  onClick={handleAddComment}
                >
                  Post Comment
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
};
