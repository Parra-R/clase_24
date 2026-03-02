import './StockBadge.css'

interface StockProps{
    productName:string;
    quantity:number;
}


const StockBadge = (props:StockProps) => {

    let ClassState = "normal"
    let message = `Stock: ${props.quantity}`

    if (props.quantity === 0){
        ClassState = "sold-out"
        message = "Producto agotado"
    }else if (props.quantity <= 10){
        ClassState = "critical"
        message = `!Solo quedan ${props.quantity}`
    } 

  return (
    <div className={`badge-container ${ClassState}`}>
        <strong>{props.productName}</strong>
        <p>{message}</p>
    </div>
  )
}

export default StockBadge