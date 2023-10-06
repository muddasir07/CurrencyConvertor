import React, { useState } from 'react';

function CurrencyConverter() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('USD');
  const [result, setResult] = useState('');

  function convertCurrency() {
    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
      .then((response) => response.json())
      .then((data) => {
        const conversionRate = data.rates[toCurrency];
        const convertedAmount = (amount * conversionRate).toFixed(2);
        setResult(`${amount} ${fromCurrency} is equal to ${convertedAmount} ${toCurrency}`);
      })
      .catch((error) => {
        console.error('Error fetching exchange rates:', error);
        setResult('Could not fetch exchange rates. Please try again later.');
      });
  }

  return (
    <div className="container">
      <h1>Currency Converter</h1>
      <label htmlFor="amount">Amount</label>
      <input
        type="number"
        id="amount"
        step="0.01"
        min="0"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <label htmlFor="fromCurrency">From</label>
      <select
        id="fromCurrency"
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="JPY">JPY</option>
        <option value="PKR">PKR</option>
      </select>
      <label htmlFor="toCurrency">To:</label>
      <select
        id="toCurrency"
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="PKR">PKR</option>
        <option value="EUR">EUR</option>
        <option value="JPY">JPY</option>
      </select>
      <button onClick={convertCurrency}>Convert</button>
      <div id="result">{result}</div>
    </div>
  );
}

export default CurrencyConverter;
