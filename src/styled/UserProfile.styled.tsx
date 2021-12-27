import styled from "styled-components";

export const StyledUserProfile = styled.div`
  background-color: #f3f3f3;
  padding: 32px 0 16px 0;
  text-align: center;
`;

export const UserImg = styled.div`
  & img {
    width: 100px;
    height: 100px;
    margin-bottom: 16px;
    border-radius: 50%;
  }
`;

export const Username = styled.div`
  color: #373a3c;
  font-size: 23px;
  font-weight: 700;
`;
