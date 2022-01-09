import styled from "@emotion/styled";

export const TableTransactionHistory = styled.table`
  max-width: 1100px;
  border: 1px solid #2a2a2a;
  border-radius: 6px;
  box-shadow: 4px 8px 10px -4px #a09c9c;
  border-spacing: 0;
  overflow: hidden;
  margin-top: 50px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 0;
  padding: 0;
`;
export const TableHeader = styled.thead`
  padding: 15px;
  margin: 6px auto;
  font-size: 16px;
  color: #fff;
  text-transform: uppercase;
  border-radius: 4px;
  background-color: rgb(97, 218, 251);
`;
export const TableHeaderCell = styled.th`
  width: 200px;
  padding-top: 15px;
  padding-bottom: 15px;
`;
export const CellBorder = styled.th`
  width: 200px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
`;
export const TableBody = styled.tbody`
  padding: 15px;
  margin: 6px auto;
  border-radius: 4px;
  background-color: rgb(241, 243, 241);
`;
export const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: #fff;
  }
`;
export const TableData = styled.td`
  padding: 0;
  padding-top: 15px;
  padding-bottom: 15px;
  text-transform: capitalize;
  text-align: center;
`;
export const TableDataBorder = styled.td`
  border-left: 1px solid #c7c0c0;
  border-right: 1px solid #c7c0c0;
  text-align: center;
`;
