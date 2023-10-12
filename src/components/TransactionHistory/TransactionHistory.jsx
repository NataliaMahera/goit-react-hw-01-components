import { TransactionHistoryItem } from '../TransactionHistoryItem/TransactionHistoryItem';
import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(({ id, type, amount, currency }) => (
        <TransactionHistoryItem
          key={id}
          type={type}
          amount={amount}
          currency={currency}
        />
      ))}
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
