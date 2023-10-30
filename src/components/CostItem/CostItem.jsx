import './CostItem.css'
import CostDate from '../CostDate/CostDate'
import Card from '../Card/Card'
import React, { useState } from 'react'

const  CostItem = (props) => {

  const [description, setDescription] = useState(props.description);

  const changeDescriptionHandler = () => {
    setDescription('New Cost');
    console.log(description);
  };

  return(
    <Card className='cost-item'>
      <CostDate date={props.date} />
      <div className='cost-item__description'>
        <div>{description}</div>
        <div className='cost-item__price'>{props.amount} Р</div>
      </div>
      <button onClick={changeDescriptionHandler}>Изменить</button>
    </Card>
  )
}

export default CostItem
