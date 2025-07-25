import React, {type FC} from "react";
import {Menu, MenuItem} from "@mui/material";
import { CartItemType } from '@/store/cart-slice';
import CartItemView from "@/views/layout/cart/CartItemView";

type CartItemsListViewProps = {
    anchorEl: HTMLElement|null,
    cartItems: CartItemType[],
    totalPrice: number,
    onCloseCart: () => void,
    handleDeleteProduct: (id: string) => void,
};

const CartItemsListView: FC<CartItemsListViewProps> = (
    {anchorEl, onCloseCart, cartItems, handleDeleteProduct, totalPrice}
) => {
    return (
        <Menu
            id="cart-menu"
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={onCloseCart}
        >
            {cartItems.map(item => {
                return (
                    <CartItemView
                        product={item}
                        onDelete={handleDeleteProduct}
                        key={'cart-item-'+item.id}
                    />
                )
            })}
            <MenuItem >Total Price: {totalPrice}€</MenuItem>
            <MenuItem onClick={onCloseCart}>Close</MenuItem>
        </Menu>
    );
};

export default CartItemsListView;