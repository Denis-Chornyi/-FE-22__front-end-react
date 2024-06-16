import React from 'react';
import moment from 'moment';

const Transaction = ({ from, to, amount, rate, time }) => {
  const date = moment(time).format('DD MMM');
  const times = moment(time).format('HH:mm');
  const amounts = new Intl.NumberFormat('en-GB').format(
    amount
  );
  return (
    <li className="transaction">
      <span className="transaction__date">{date}</span>
      <span className="transaction__time">{times}</span>
      <span className="transaction__assets">
        {from} → {to}
      </span>
      <span className="transaction__rate">{rate}</span>
      <span className="transaction__amount">{amounts}</span>
    </li>
  );
};

export default Transaction;

{
  /* <ul class="transactions">
  <li class="transaction">
    <span class="transaction__date">10 Jan</span>
    <span class="transaction__time">19:08</span>
    <span class="transaction__assets">USD → EUR</span>
    <span class="transaction__rate">0.8</span>
    <span class="transaction__amount">1,200</span>
  </li>
  ...
  <li class="transaction">
    <span class="transaction__date">10 Jan</span>
    <span class="transaction__time">19:01</span>
    <span class="transaction__assets">EUR → USD</span>
    <span class="transaction__rate">1.1</span>
    <span class="transaction__amount">100</span>
  </li>
</ul> */
}
