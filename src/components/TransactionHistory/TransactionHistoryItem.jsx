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
