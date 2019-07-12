import React from 'react';

export default function CodeCreditCardForm({ children }) {
  return (
    <div key="Payment">
      <div className="App-payment">
        {children}
      </div>
    </div>
  );
}
