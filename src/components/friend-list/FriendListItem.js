import PropTypes from "prop-types";
import { Item, Status, Avatar, Name } from "./FriendList.styled";
export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <Item>
      <Status style={{ backgroundColor: isOnline ? "green" : "red" }} />
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
