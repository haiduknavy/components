import PropTypes from "prop-types";
import {
  DivProfile,
  Description,
  Avatar,
  Name,
  Text,
  Stats,
  Items,
  Quantity,
  Label,
} from "./Profile.styled";

export default function Profile({ userName, tag, location, avatar, stats }) {
  return (
    <DivProfile>
      <Description>
        <Avatar src={avatar} alt="User avatar" width="180" />
        <Name>{userName}</Name>
        <Text>@{tag}</Text>
        <Text>{location}</Text>
      </Description>
      <Stats>
        <Items>
          <Label>Followers </Label>
          <Quantity>{stats.followers}</Quantity>
        </Items>
        <Items>
          <Label>Views </Label>
          <Quantity>{stats.views}</Quantity>
        </Items>
        <Items>
          <Label>Likes </Label>
          <Quantity>{stats.likes}</Quantity>
        </Items>
      </Stats>
    </DivProfile>
  );
}

Profile.propTypes = {
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
