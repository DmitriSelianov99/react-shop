import { BasketItem } from "./BasketItem";

function BasketList(props) {
    const {
            order = [], 
            handleBasketShow = Function.prototype, 
            removeFromBasket = Function.prototype,
            decrementQuantity = Function.prototype,
            incrementQuantity = Function.prototype,
    } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);

    return (
        <ul className="collection basket-list">
            <li className="collection-item active">Корзина</li>
            {
                order.length ? order.map(elem => {
                    return <BasketItem 
                                key={elem.id} 
                                {...elem} 
                                removeFromBasket={removeFromBasket} 
                                decrementQuantity={decrementQuantity}
                                incrementQuantity={incrementQuantity}
                            />
                }) : <li className="collection-item">Корзина пуста</li>
            }
            <li className="collection-item active">
                Общая стоимость: {totalPrice}₽
            </li>
            <button className="secondary-content btn btn-small arrange-order left">Оформить заказ</button>
            <li className="material-icons basket-close" onClick={handleBasketShow}>close</li>
        </ul>
    )
}

export {BasketList};