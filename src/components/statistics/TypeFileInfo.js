import PropTypes from "prop-types";
import color from "../../helpers/doColor";
import { Item } from "./Statistics.styled";

export default function TypeFileInfo({ label, percentage }) {
  return (
    <Item style={{ backgroundColor: color() }}>
      <span className="label">{label}</span>
      <span className="percentage"> {percentage} %</span>
    </Item>
  );
}

TypeFileInfo.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
