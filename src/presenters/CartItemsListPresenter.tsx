'use client'

import {type FC} from "react";
import { useCartDispatch, useCartSelector } from '@/store/hooks';
import { removeFromCart } from '@/store/cart-slice';
import CartItemsListView from "@/views/layout/cart/CartItemsListView";

export type CartItemsListPresenterProps = {
    anchorEl: HTMLElement | null;
    onCloseCart: () => void;
}

const CartItemsListPresenter: FC<CartItemsListPresenterProps> = ({anchorEl, onCloseCart}) => {
    const cartItems = useCartSelector(
        state => state.productsCart.items
    );
    const dispatch = useCartDispatch();
    const totalPrice = cartItems.reduce(
        (prevValue, item) => prevValue + item.price * item.quantity, 0
    );

    function handleDeleteProduct(id: string) {
        dispatch(removeFromCart(id));
    }

    return <CartItemsListView
        anchorEl={anchorEl}
        cartItems={cartItems}
        totalPrice={totalPrice}
        onCloseCart={onCloseCart}
        handleDeleteProduct={handleDeleteProduct}
    />;
};

export default CartItemsListPresenter;