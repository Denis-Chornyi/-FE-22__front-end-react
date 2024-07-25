import React from 'react';
import Transaction from './Transaction';

const TransactionsList = ({transactions}) => {
  return (
    <ul className="transactions">
      {transactions.map(transaction => (
        <Transaction {...transaction} key={transaction.id} />
      ))}
    </ul>
  );
};

export default TransactionsList;
