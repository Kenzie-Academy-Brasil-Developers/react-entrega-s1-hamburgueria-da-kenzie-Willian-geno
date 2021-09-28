function Carrinho (props) {
    
    return(
        <div >
            <ul className = "ulCarronho">
                {props.currentSale.map(item => (
                    <li key = {item.id} className ="liCarrinho">
                       <div >
                            <h3 className = "h3Carrinho">{item.name}</h3>
                            <h5 className = "h5Carrinho" >{item.category}</h5>
                        </div> 
                            <h3 className = "h3Carrinho">R$ {item.price}</h3>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Carrinho;