import Product from "../Product/Product";
import "./menuContainer.css";


function MenuContainder (props) {

    return(
        <ul>
           {props.products.map(item => <li key = {item.id}><Product  produto = {item} function = {props.function}/></li> )}
        </ul> 
            
    )
}

export default MenuContainder;