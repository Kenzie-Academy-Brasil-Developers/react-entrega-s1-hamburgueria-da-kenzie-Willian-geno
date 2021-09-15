import "./product.css"

function Product (props) {

    return(
           <div className = "divListProducts">
               <div className = "productsCharacteristics">
                   <div>{props.produto.name}</div>
                   <div>{props.produto.category}</div>
                   <div>R$ {props.produto.price}</div>
                    
                </div>
            <button className = "buttonProduct" onClick = {() => {props.function(props.produto.id)}}>Adicionar ao carrinho</button>
           </div>
            
    )
}

export default Product;