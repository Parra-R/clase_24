import './PlanCard.css'

interface PlanProps{
    nombrePlan: string;
    precio: number;
    esPopular: boolean;
}


const PlanCard = (props:PlanProps) => {
    // Si es popular, añadir clase destacado sino vacio ""
    const isSpecial = props.esPopular ? 'outstanding' : ''

  return (
    <div className={`plan-card ${isSpecial}`}>
        {props.esPopular && <span className='label-popular'> Más elegido</span>}
        <h2>{props.nombrePlan}</h2>
        <p>{props.precio} / al mes</p>
    </div>
  )
}

export default PlanCard