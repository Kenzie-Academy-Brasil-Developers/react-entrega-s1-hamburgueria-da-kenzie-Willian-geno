import './carrinho.css'
function Carrinho (props) {
    
    return(
        <div className = "divListProducts">
            <ul className = "ulCarronho">
                {props.currentSale.map(item => (
                    <li key = {item.id}>
                       <div className = 'productsCharacteristics'>
                            <div>{item.name}</div>
                            <div>{item.category}</div>
                            <div>R$ {item.price}</div>
                        </div> 
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Carrinho;