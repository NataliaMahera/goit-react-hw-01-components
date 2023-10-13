import { Profile } from './Profile/Profile';
import user from '../data-json/user.json';

import { Statistics } from './Statistics/Statistics';
import data from '../data-json/data.json';

import { FriendList } from './FriendList/FriendList';
import friendList from '../data-json/friends.json';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../data-json/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

      <FriendList friends={friendList} />

      <TransactionHistory items={transactions} />
    </>
  );
};
