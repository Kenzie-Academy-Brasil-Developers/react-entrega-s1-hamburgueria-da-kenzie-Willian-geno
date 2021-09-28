function Product (props) {

    return(
           <div className = "divListProducts">
               <div className = "productsCharacteristics">
                   <h3>{props.produto.name}</h3>
                   <h5>{props.produto.category}</h5>    
                </div>
            <h3>R$ {props.produto.price}</h3>
            <button className = "buttonProduct" onClick = {() => {props.function(props.produto.id)}}>Adicionar ao carrinho</button>
           </div>
            
    )
}

export default Product;