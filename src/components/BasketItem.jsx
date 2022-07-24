function BasketItem(props) {
    const {
            id, 
            name, 
            price, 
            quantity, 
            removeFromBasket = Function.prototype,
            decrementQuantity = Function.prototype,
            incrementQuantity = Function.prototype,
    } = props;
    if (quantity > 0){
        return (
            <li className="collection-item">
                <b>{name}</b> x {quantity} = {price * quantity}₽
                <span href="#!" className="secondary-content" onClick={() => removeFromBasket(id)}>
                    <i className="material-icons basket-delete">close</i>
                </span>
                <span href="#!" className="secondary-content changing-quantity">
                        <i className="material-icons decrement-item" onClick={() => decrementQuantity(id)}>remove</i>
                    <span>{quantity}</span>
                    <i className="material-icons increment-item" onClick={() => incrementQuantity(id)}>add</i>
                </span>
            </li>
        )
    }
}

export {BasketItem}