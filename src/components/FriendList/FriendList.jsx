import FriendListItem from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
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

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
