import './CostItem.css'

function CostItem() {
  return(
    <div className='cost-item'>
      <div>Дата</div>
      <div className='cost-item__description'>
        <div>Монитор</div>
        <div className='cost-item__price'>32000 Р</div>
      </div>
    </div>
  )
}

export default CostItem
