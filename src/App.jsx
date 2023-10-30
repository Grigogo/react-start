import NewCost from "./components/NewCost/NewCost";
import Cost from "./components/Cost/Cost";

function App() {

  const costs = [
    {
      id: 'c1',
      date: new Date(2023, 9, 10),
      description: 'Монитор',
      amount: 32000
    },
    {
      id: 'c2',
      date: new Date(2023, 8, 11),
      description: 'Блок питания',
      amount: 3200
    },
    {
      id: 'c3',
      date: new Date(2023, 8, 18),
      description: 'Корпус',
      amount: 3500
    }
  ];

  const addCostHandler = (cost) => {
    console.log(cost);
    console.log('App Component');
  }

  return (
    <>
      <NewCost onAddCost={addCostHandler} />

      <Cost costs={costs} />
    </>
  )
}

export default App
