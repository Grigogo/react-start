import Cost from "./components/Cost/Cost";

function App() {

  const costs = [
    {
      date: new Date(2023, 9, 10),
      description: 'Монитор',
      amount: 32000
    },
    {
      date: new Date(2023, 8, 11),
      description: 'Блок питания',
      amount: 3200
    },
    {
      date: new Date(2023, 8, 18),
      description: 'Корпус',
      amount: 3500
    }
  ];

  return (
    <>
      <h1>Статруем</h1>
      <Cost costs={costs} />
    </>
  )
}

export default App
