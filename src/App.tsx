import './App.css'
import Server from './components/Server/Server'

function App() {


  return (
    <>
      <Server serverName='Web principal' status='online'></Server>
      <Server serverName='Base de Datos' status='online'></Server>
      <Server serverName='Api de Pago' status='offline'></Server>
    </>
  )
}

export default App
