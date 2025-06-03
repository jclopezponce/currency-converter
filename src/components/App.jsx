import React, { useState } from 'react'
import InputAmount from "./InputAmount"
import Convertion from "./Convertion"
import Header from './Header';

function App(props) {
  const [rate, setRate] = useState([]);

 function addRate(newRate){
   setRate([newRate])
  }

  return (
    <div className='card'>
      <Header/>
      <InputAmount onAdd={addRate}/>
      <div>
      {rate.map((rateItem, index) =>(
        <Convertion
        id = {index}
        key = {index}
      ratio={rateItem.rateResult}
      amount = {rateItem.amount}
      from = {rateItem.from}
      to = {rateItem.to}
      />
      ))}
     
      </div>
    </div>
  )
}

export default App
