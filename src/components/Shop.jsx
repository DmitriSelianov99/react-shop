import React, {useState, useEffect} from "react";
import {API_KEY, API_URL} from '../config';

import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { BasketList } from "./BasketList";
import { Alert } from "./Alert";

function Shop(){
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);
    const [alertName, setAlertName] = useState('');

    const addToBasket = (item) => {
        const itemIndex = order.findIndex(orderItem => orderItem.id === item.id);

        if(itemIndex < 0){
            const newItem = {
                ...item,
                quantity: 1,
            }
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if(index === itemIndex){
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                } else {
                    return orderItem;
                }
            });

            setOrder(newOrder);
        }
        setAlertName(item.name)
        console.log('adding item in cart');
    };

    const removeFromBasket = (id) => {
        const newOrder = order.filter(elem => elem.id !== id);
        setOrder(newOrder);
        console.log('removing item from cart');
    };

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow);
    };

    const incrementQuantity = (id) => {
        const newOrder = order.map(el => {
            if (el.id === id){
                const newQuantity = el.quantity + 1;
                return {
                    ...el,
                    quantity: newQuantity
                }
            } else {
                return el;
            }
        });
        setOrder(newOrder);
    }

    const decrementQuantity = (id) => {
        const newOrder = order.map(el => {
            if (el.id === id){
                const newQuantity = el.quantity - 1;
                return {
                    ...el,
                    quantity: newQuantity >= 0 ? newQuantity : 0
                }
            } else {
                return el;
            }
        });
        setOrder(newOrder);
    };

    const closeAlert = () => {
        setAlertName('');
    }

    useEffect(function getGoods(){
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY,
            }
        }).then(response => response.json()).then(data => {
            data.featured && setGoods(data.featured);
            setLoading(false);
        });
    }, []);

    return (
        <main className="container content">
            <Cart quantity={order.length} handleBasketShow={handleBasketShow}/>
            {
                loading ? <Preloader /> : <GoodsList goods={goods} addToBasket={addToBasket}/>
            }
            {
                isBasketShow && <BasketList 
                                    order={order} 
                                    handleBasketShow={handleBasketShow} 
                                    removeFromBasket={removeFromBasket}
                                    decrementQuantity={decrementQuantity}
                                    incrementQuantity={incrementQuantity}
                                />
            }
            {
                alertName && <Alert name={alertName} closeAlert={closeAlert}/>
            }
        </main>
    )
}

export {Shop};