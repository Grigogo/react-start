import './CostItem.css'
import CostDate from '../CostDate/CostDate'
import Card from '../Card/Card'

function CostItem(props) {

  return(
    <Card className='cost-item'>
      <CostDate date={props.date} />
      <div className='cost-item__description'>
        <div>{props.description}</div>
        <div className='cost-item__price'>{props.amount} Р</div>
      </div>
    </Card>
  )
}

export default CostItem
