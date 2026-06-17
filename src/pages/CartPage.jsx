import { useCart } from "../Context/CartContext"

export default function CartPage(){
    const {totalCartCount} = useCart();
    return(
        <>
        <h1>Cart view</h1>
        <h2>{totalCartCount()}</h2>
        </>
    )
}