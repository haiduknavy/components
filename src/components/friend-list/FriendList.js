import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";
import { UlFriendList } from "./FriendList.styled";

export default function FriendList({ friends }) {
  return (
    <UlFriendList>
      {friends.map((item) => (
        <FriendListItem
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
          key={item.id}
        />
      ))}
    </UlFriendList>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
