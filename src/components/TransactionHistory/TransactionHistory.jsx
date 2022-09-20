import PropTypes from 'prop-types';
import s from './TransactionHistory.module.scss';

const TransactionHistory = props => {
  const { items } = props;

  return (
    <table className={s['transaction-history']}>
      <thead className={s.transactionHeader}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={s.transaction}>
        {items.map(item => (
          <tr key={item.id} className={s.transactionColumn}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
