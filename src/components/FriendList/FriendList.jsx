import PropTypes from 'prop-types';
// import css from './FriendList.module.css'

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ id, avatar, name, isOnline }) => {
        const online = isOnline ? '' : '';
        const isOnlineStyles = {
          backgroundColor: online,
        };

        return (
          <li key={id} className="item">
            <span className="status" style={isOnlineStyles}>
              {isOnline}
            </span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
  id: PropTypes.number,
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
