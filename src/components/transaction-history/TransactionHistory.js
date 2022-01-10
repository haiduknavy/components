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
        {items.map(({ id, type, amount, currency }) => (
          <TableRow key={id}>
            <TableData>{type}</TableData>
            <TableDataBorder>{amount}</TableDataBorder>
            <TableData>{currency}</TableData>
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
