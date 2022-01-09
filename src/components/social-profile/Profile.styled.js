import styled from "@emotion/styled";

export const DivProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
  width: 367px;
  background-color: #fff;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 1px 3px rgba(0, 0, 0, 0.12);
  border-radius: 0px 0px 4px 4px;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0px;
`;
export const Avatar = styled.img`
  width: 150px;
  border-radius: 50%;
  background-color: #d3dfe5;
  margin-bottom: 15px;
`;
export const Name = styled.p`
  font-size: 25px;
  font-weight: bold;
  font-family: serif;
  margin: 5px;
`;
export const Text = styled.p`
  color: #aaaaaa;
  margin: 5px;
`;

export const Stats = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0px;
  margin: 0px;
`;
export const Items = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e8e8ea;
  border: 1px solid #aaaaaa;
  padding: 10px 37px;
`;
export const Quantity = styled.span`
  font-weight: bold;
`;
export const Label = styled.span`
  color: #aaaaaa;
`;
