import styled from "styled-components";

export const StyledArticleBanner = styled.div`
  background-color: #333;
  padding: 32px 0;
  text-align: left;
  margin-bottom: 32px;
  .article-title {
    line-height: 1;
    font-size: 45px;
    color: #fff;
    font-weight: 700;
  }
`;

export const ArticleMeta = styled.div`
  .post-article {
    margin-bottom: 16px;
    & img {
      width: 32px;
      height: 32px;
      border-radius: 30px;
    }
  }
  .infor {
    display: inline-block !important;
    margin-left: 5px;
    vertical-align: middle;
    .author {
      display: block;
      color: #fff;
      font-size: 16px;
      line-height: 0.8;
      &:hover {
        color: #555;
        text-decoration: underline;
      }
    }
    .date {
      color: #bbb;
      font-size: 11.8px;
    }
  }
  .article-action {
    margin-left: 20px;
  }
  .article-action > button {
    margin-right: 10px;
  }
`;

export const ArticleContent = styled.div``;

export const StyledComment = styled.div`
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  margin-bottom: 20px;
  .card-block {
    padding: 20px;
    & p {
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 0;
    }
  }
  .form-control {
    border: none;
    border-radius: 5px;
    padding: 20px;
    width: 100%;
    height: 100%;
  }
  .form-control:focus-visible {
    outline: none;
  }
`;

export const CommentFooter = styled.div`
  padding: 12px 20px;
  border-top: 1px solid #e5e5e5;
  vertical-align: middle;
  .comment-author {
    color: var(--primary-color);
    font-weight: 600;
    & img {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      margin-right: 5px;
    }
  }
  .date-posted {
    margin-left: 5px;
    font-weight: 600;
    font-size: 12px;
    color: #bbb;
  }
  .comment-action {
    float: right;
    & svg {
      color: #333;
      cursor: pointer;
      opacity: 0.6;
      &:hover {
        opacity: 1;
      }
    }
  }
  .ant-btn {
    float: right;
    padding: 4px 8px;
    font-size: 14px;
    line-height: 1.5;
  }
`;
