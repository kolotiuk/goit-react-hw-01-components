import FriendListItem from 'components/FriendListItem/FriendListItem';
import s from './FriendList.module.scss';

const FriendList = props => {
  const { friends } = props;

  return (
    <ul className={s['friend-list']}>
      {friends.map(friend => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </ul>
  );
};

export default FriendList;
