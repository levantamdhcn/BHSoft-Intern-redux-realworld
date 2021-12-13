import styled from "styled-components";

export const TagsHolder = styled.div`
  background-color: #f3f3f3;
  font-size: 16px;
  padding: 5px 10px 10px 20px;
  border-radius: 4px;
  h1 {
    font-size: 16px;
    color: #373a3c;
    font-weight: 400;
  }
`;

export const TagList = styled.ul`
  list-style: none;
  margin-bottom: 0 !important;
  max-width: 50%;
  vertical-align: top;
  padding-left: 0 !important;
  display: inline-block;
`;

export const TagItem = styled.li`
  color: #aaa;
  font-weight: 300;
  font-size: 12px;
  border: 1px solid #ddd;
  border-radius: 160px;
  padding: 0 8px;
  margin-right: 5px;
  display: inline-block;
`;
