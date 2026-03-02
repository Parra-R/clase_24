import './Server.css'

// Vamos a definir el contrato estricto

interface StatusProps{
    serverName:string;
    status: 'online' | 'offline' // Union type
}

const Server = (props:StatusProps) => {

    // Determinar dinámicamente la clase css
    const statusClass = props.status === 'online' ? 'status-online': 'status-offline'

    // Determinar dinamicamente el texto indicado
    const statusText = props.status === 'online' ? 'It works' : 'Fallen'

  return (
    <div className={`server-card ${statusClass}`}>
        <h3>{props.serverName}</h3>
        <span className='indicator'>{statusText}</span>
    </div>
  )
}

export default Server