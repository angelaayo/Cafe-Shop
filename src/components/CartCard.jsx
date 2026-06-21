export default function CartCard(props){
    return(
        <div>
            <h2>{props.cartItem.title}</h2>
            <h2>{props.cartItem.count}</h2>
        </div>
    )
}