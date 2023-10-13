import PropTypes from 'prop-types';
import css from './TransactionHistoryItem.module.css';

export const TransactionHistoryItem = ({ id, type, amount, currency }) => {
  return (
    <tbody key={id} className={css.headContainer}>
      <tr>
        <td className={css.head}>{type}</td>
        <td className={css.head}>{amount}</td>
        <td className={css.head}>{currency}</td>
      </tr>
    </tbody>
  );
};

TransactionHistoryItem.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
