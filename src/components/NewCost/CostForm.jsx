import React, { useState } from 'react'
import Card from '../Card/Card'
import './CostForm.css' 

const CostForm = (props) => {

  const [inputName, setInputName] = useState('');
  const [inputAmount, setInputAmount] = useState('');
  const [inputDate, setInputDate] = useState('');

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
  }

  const amountChangeHandler = (event) => {
    setInputAmount(event.target.value);
  }

  const dateChangeHandler = (event) => {
    setInputDate(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const costData = {
      name: inputName,
      amount: inputAmount,
      date: new Date(inputDate)
    }

    props.onSaveCostData(costData);
    setInputName('');
    setInputAmount('');
    setInputDate('');

  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div className="cost-form__wrapper">
          <div className="cost-form__element">
            <label>Название</label>
            <input type="text" value={inputName} onChange={nameChangeHandler}/>
          </div>
          <div className="cost-form__element">
            <label htmlFor="">Сумма</label>
            <input type="number" min='0.01' step='0.01' value={inputAmount} onChange={amountChangeHandler}/>
          </div>
          <div className="cost-form__element">
            <label htmlFor="">Дата</label>
            <input type="date" min='2022-01-01' step='2023-10-17' value={inputDate} onChange={dateChangeHandler}/>
          </div>
          <div className="cost-form__button">
            <button type="submit">Добавить расход</button>
          </div>
        </div>
      </form>
    </Card>
  )
}

export default CostForm
