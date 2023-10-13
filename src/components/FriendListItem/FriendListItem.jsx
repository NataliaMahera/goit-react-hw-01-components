import css from './FriendListItem.module.css';

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  const online = isOnline ? 'green' : 'red';
  const isOnlineStyles = {
    backgroundColor: online,
  };

  return (
    <li key={id} className={css.item}>
      <span className={css.status} style={isOnlineStyles}>
        {isOnline}
      </span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
