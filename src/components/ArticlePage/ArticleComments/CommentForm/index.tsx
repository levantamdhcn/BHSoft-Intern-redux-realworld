import { Col, Row } from "antd";
import moment from "moment";
import TextArea from "rc-textarea";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addComment } from "../../../../stores/actions/articleActions";
import {
  CommentFooter,
  StyledComment,
} from "../../../styled/ArticlePage.styled";
import { StyledButton } from "../../../styled/Button.styled";

interface CommentFormProps {
  id: string;
}

export const CommentForm = ({ id }: CommentFormProps) => {
  const [body, setBody] = useState<string>("");
  const dispatch = useDispatch();
  const history = useHistory()

  const userInfor = useSelector(
    (state: any) => state.authReducers.user
  );
  const data = {
    author: {
      username: userInfor.username,
      image: userInfor.image,
      bio: userInfor.bio
    },
    body: body,
    createdAt: moment().format("MMM Do YY"),
  };
  const handleAddComment = () => {
    dispatch(addComment(id, data,history));
  };
  return (
    <Row gutter={[16, 16]}>
      <Col span={10} offset={7}>
        <StyledComment>
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
              <CommentFooter className="card-footer">
                <a href="lvtann.com" className="comment-author">
                  <img
                    src="https://api.realworld.io/images/smiley-cyrus.jpeg"
                    alt="author-avt"
                  />
                </a>
                <StyledButton status="submit" onClick={handleAddComment}>
                  Post Comment
                </StyledButton>
              </CommentFooter>
            </Col>
          </Row>
        </StyledComment>
      </Col>
    </Row>
  );
};
