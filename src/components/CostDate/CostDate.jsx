function CostDate(props) {

  const costDate = props.date.toLocaleString('ru-RU', {day: "numeric", month: "long", year: "numeric"})


  return (
    <div>{costDate}</div>
  )
}

export default CostDate
