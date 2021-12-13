import DeleteFilled from "@ant-design/icons/lib/icons/DeleteFilled";
import { Col, Row } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteComment } from "../../../../stores/actions/articleActions";
import {
  CommentFooter,
  StyledComment,
} from "../../../styled/ArticlePage.styled";

interface CommentProps {
  body: string;
  image: string;
  username: string;
  createdAt: string;
  id: string;
}

export const Comment = ({
  body,
  image,
  username,
  createdAt,
  id,
}: CommentProps) => {
  const dispatch = useDispatch();
  const handleDelComment = () => {
    dispatch(deleteComment(id));
  };
  return (
    <Row gutter={[16, 16]}>
      <Col span={10} offset={7}>
        <StyledComment>
          <Row>
            <Col span={24}>
              <div className="card-block">
                <p className="card-text">{body}</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <CommentFooter>
                <a href="lvtann.com" className="comment-author">
                  <img src={image} alt="author-avt" />
                </a>
                <a href="lvtann.com" className="comment-author">
                  {username}
                </a>
                <span className="date-posted">{createdAt.split("T")[0]}</span>
                <span className="comment-action">
                  <DeleteFilled onClick={handleDelComment} />
                </span>
              </CommentFooter>
            </Col>
          </Row>
        </StyledComment>
      </Col>
    </Row>
  );
};
