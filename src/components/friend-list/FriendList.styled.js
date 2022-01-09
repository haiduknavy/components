import styled from "@emotion/styled";

export const UlFriendList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 0;
  padding: 0;
`;
export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 370px;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 1px 3px rgba(0, 0, 0, 0.12);
  border-radius: 0px 0px 4px 4px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const Status = styled.span`
  height: 20px;
  width: 20px;
  margin-right: 10px;
  border-radius: 50%;
  border: 1px solid #aaaaaa;
`;
export const Avatar = styled.img`
  background-color: "#aaaaaa";
  margin-right: 10px;
`;
export const Name = styled.p`
  font-weight: bold;
  font-family: serif;
`;
