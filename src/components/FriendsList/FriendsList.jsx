import PropTypes from 'prop-types';
import FriendsListItem from 'components/FriendsList/FriendsListItem';
import css from './FriendsList.module.css';

const FriendsList = ({ friends }) => {
  return (
    <ul className={css['friend-list']}>
      {friends.map(friend => {
        return (
          <li key={friend.id} className={css.item}>
            <FriendsListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FriendsList;
