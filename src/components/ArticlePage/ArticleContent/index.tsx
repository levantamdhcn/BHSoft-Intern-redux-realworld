import { Col, Row } from "antd";
import React from "react";
import { Container } from "../../styled/Container.styled";
import { TagItem, TagList } from "../../styled/TagsHolder.styled";
import { ArticleComments } from "../ArticleComments";
import { CommentForm } from "../ArticleComments/CommentForm";

interface Props {
  body?: string;
  tagList?: Array<string>;
  id: string;
}

export const ArticleContent = ({ body, tagList, id }: Props) => {
  return (
    <Container>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <p>{body}</p>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <TagList>
                {Array.isArray(tagList) ? (
                  tagList.map((tag) => <TagItem key={tag}>{tag}</TagItem>)
                ) : (
                  <TagItem key={tagList}>{tagList}</TagItem>
                )}
              </TagList>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <CommentForm id={id} />
              <ArticleComments id={id}/>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
