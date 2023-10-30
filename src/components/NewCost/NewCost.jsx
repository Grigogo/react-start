import CostForm from "./CostForm"

const NewCost = (props) => {

  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString()
    }

    props.onAddCost(costData);
  }

  return (
    <>
      <CostForm  onSaveCostData={saveCostDataHandler} />
    </>
  )
}

export default NewCost
