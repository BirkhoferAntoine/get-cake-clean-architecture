'use client'

import HeaderView from '@/views/layout/header/HeaderView'
import FooterView from '@/views/layout/footer/FooterView'
import {useCartSelector} from "@/store/hooks";
import CartItemsListPresenter from "@/presenters/CartItemsListPresenter";
import React from "react";
import {styled} from "@mui/system";
const Offset = styled('div')({ minHeight: 'var(--header-height)' });

export default function LayoutPresenter({ children }: { children: React.ReactNode }) {
    const cartCount = useCartSelector(state => {
        return state.productsCart.items.reduce((prevValue, item) => prevValue + item.quantity, 0 )
    });

    return (
        <>
            <HeaderView cartCount={cartCount} CartDropdown={CartItemsListPresenter} />
            <Offset/>
            <main>{children}</main>
            <FooterView />
        </>
    )
}
