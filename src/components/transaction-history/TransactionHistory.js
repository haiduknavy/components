import PropTypes from "prop-types";
import {
  TableTransactionHistory,
  TableHeader,
  TableHeaderCell,
  CellBorder,
  TableBody,
  TableRow,
  TableData,
  TableDataBorder,
} from "./TransactionHistory.styled";

export default function TransactionHistory({ items }) {
  return (
    <TableTransactionHistory>
      <TableHeader>
        <tr>
          <TableHeaderCell>Type</TableHeaderCell>
          <CellBorder>Amount</CellBorder>
          <TableHeaderCell>Currency</TableHeaderCell>
        </tr>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.id}>
            <TableData>{item.type}</TableData>
            <TableDataBorder>{item.amount}</TableDataBorder>
            <TableData>{item.currency}</TableData>
          </TableRow>
        ))}
      </TableBody>
    </TableTransactionHistory>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
