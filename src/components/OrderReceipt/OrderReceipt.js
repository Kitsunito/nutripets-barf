import './OrderReceipt.css';

const OrderReceipt = ({successOrder}) => {
    return (
        <div className="orderReceipt-container">
            <h3>Orden generada correctamente</h3>
            <p>Su código de órden es: {successOrder}</p>
        </div>
    )
}

export default OrderReceipt;