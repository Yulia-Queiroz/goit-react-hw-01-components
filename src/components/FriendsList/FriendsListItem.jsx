import PropTypes from 'prop-types';
import css from './FriendsList.module.css';

const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span
        className={
          isOnline
            ? `${css.status} ${css.online}`
            : `${css.status} ${css.offline}`
        }
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendsListItem;
