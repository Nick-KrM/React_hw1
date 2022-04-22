import React from 'react';
import PropTypes, { func } from 'prop-types';
import styles from './TransactionHistory.module.css';

function firstLetterToUpperCase(arr) {
  return arr[0].toUpperCase() + arr.slice(1);
}

function TransactionHistory({ items }) {
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.head}>
        <tr className={styles.headList}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.listItems}>
        {items.map(item => (
          <tr key={item.id} className={styles.item}>
            <td className={styles.type}>{firstLetterToUpperCase(item.type)}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
