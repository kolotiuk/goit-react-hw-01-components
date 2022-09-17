import FriendListItem from 'components/FriendListItem/FriendListItem';

const FriendList = props => {
  const { friends } = props;

  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </ul>
  );
};

export default FriendList;
