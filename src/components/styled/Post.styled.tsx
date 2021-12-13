import styled from "styled-components";

export const PostList = styled.div`
  list-style-type: none;
  padding-left: 0 !important;
  .ant-card-body {
    padding: unset !important;
  }
`;

export const PostItem = styled.div`
  margin-top: 0 !important;
  padding: 24px 0 !important;
  display: block;
  .post-meta {
    margin-bottom: 16px;
    & img {
      width: 32px;
      height: 32px;
      border-radius: 30px;
    }
    .infor {
      display: inline-block !important;
      margin-left: 5px;
      vertical-align: middle;
      .author {
        display: block;
        color: var(--primary-color);
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
  }
  .post-preview {
    & h1 {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 3px !important;
      line-height: 1.1;
    }
    & p {
      font-size: 16px;
      font-weight: 300;
      margin-bottom: 15px !important;
      line-height: 1.3;
      color: #999;
    }
    & span {
      font-size: 12.8px;
      font-weight: 300;
      color: #bbb;
    }
  }
  .post-react {
    float: right !important;
  }
  .post-footer {
    display: flex;
    justify-content: space-between;
  }
`;

export const PostMeta = styled.div`
  .post-meta {
    margin-bottom: 16px;
    & img {
      width: 32px;
      height: 32px;
      border-radius: 30px;
    }
    .infor {
      display: inline-block !important;
      margin-left: 5px;
      vertical-align: middle;
      .author {
        display: block;
        color: var(--primary-color);
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
  }
`;
