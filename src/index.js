import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';


var cardInfo ={
  bankName: 'Party tonight',
  numberCard: '9999 ave 99 st Miami FL 33133',
  expirationDate: '',
  name: 'Ricardo Aranda'
};

function CreditCard({card}){
  var {bankName, numberCard, expirationDate, name} = card;
  return <div className="credit-card">
    <div className='bank-name'>{bankName}</div>
    <div className="number-card">{numberCard}</div>
    {/* <div className='first-four-digits'>{numberCard.substring(0,4)}</div> */}
    <div className="expiration-date">
      {/* <span className="valid-thru">Valid Thru</span>{expirationDate} */}
    </div>
    <div className='name'>{name}</div>
  </div>
}
CreditCard.propTypes = {
  card: PropTypes.shape({
    bankName: PropTypes.string.isRequired,
    numberCard: PropTypes.string.isRequired,
    expirationDate: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};

ReactDOM.render(<CreditCard card={cardInfo} />, document.querySelector('#root'));