import './App.css'
import StockBadge from './components/StockBadge/StockBadge'
import PlanCard from './components/PlanCard/PlanCard'


function App() {


  return (
    <>
      <StockBadge productName='Monitor' quantity= {4}></StockBadge>
      <StockBadge productName='Teclado' quantity= {0}></StockBadge>
      <StockBadge productName='Raton' quantity= {20}></StockBadge>


      <PlanCard nombrePlan='Básico' precio={5} esPopular></PlanCard>
      <PlanCard nombrePlan='Medio' precio={20} esPopular= {false}></PlanCard>

    </>
  )
}

export default App
