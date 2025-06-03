import React ,{useState} from 'react';
import currencies from "../currencies"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { NumericFormat } from 'react-number-format';
import axios from 'axios';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import Freecurrencyapi from '@everapi/freecurrencyapi-js';


export default function InputAmount(props) {
  
  const [conversion, setconversion] = useState({
    amount : '',
    from : 'USD',
    to : 'EUR',
  });

  const [exchange, setExchange] = useState({
    rate : "",
    rateResult : "",
    from : "",
    to: "",
    amount : ""
  })

  const [hidden, setHidden] = useState(true)

  const freecurrencyapi = new Freecurrencyapi(import.meta.env.VITE_EXCHANGE_APIKEY);
  

  function handleChange(event){
    const {value, name} = event.target;
    setconversion((prevconversion)=>{
      return {
        ...prevconversion,
        [name] : value
      }
    })
  }

function submitconversion(){
  freecurrencyapi.latest({
    base_currency: conversion.from,
    currencies: conversion.to
}).then(response => {
  let rate = response.data[`${conversion.to}`]
  rate = rate.toFixed(2)
  let total = conversion.amount * rate
    total = total.toFixed(2)
    const newExchange = {
      rate: rate,
      rateResult : total,
      from : conversion.from,
      to: conversion.to,
      amount: conversion.amount
    };
    setExchange(newExchange);
    props.onAdd(newExchange)
    setHidden(false)
});
}

  return (
    <div>
      <div className='amount'>
      <NumericFormat
        className='input'
        name="amount"
        value={conversion.amount}
        onChange={handleChange}
        customInput={TextField}
        valueIsNumericString
        variant="outlined"
        label="Amount"
      /></div>
      <div className='currency'>
        <div className='selects'>
        From
        <select
          name="from"
          value={conversion.from}
          onChange={handleChange}
        >{currencies.map((currency)=>{
        return(
            <option key={currency.Code} value={currency.Code}>{currency.Name}</option>
        )})}
        </select>
        </div>
        <div className='icons'>
        <CurrencyExchangeIcon/>
        </div>
        <div className='selects'>
        To
        <select
          name='to'
          value={conversion.to}
          onChange={handleChange}
             >{currencies.map((currency)=>{
        return(
            <option key={currency.Code} value={currency.Code}>{currency.Name}</option>
        )})}
        </select>
        </div>   
        </div>
        <div hidden={hidden}>
          1 {exchange.from} = {exchange.rate} {exchange.to}
        </div>
        <div id="boton">
      <Button  variant="contained" onClick={submitconversion}>Convert</Button></div>
      </div>

  );
}
