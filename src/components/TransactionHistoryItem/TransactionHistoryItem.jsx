export const TransactionHistoryItem = ({ id, type, amount, currency }) => {
  return (
    <>
      <tbody key={id}>
        <tr>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      </tbody>
    </>
  );
};
