'use client'

import Link from 'next/link'
import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import { sxStyles } from './headerView.styles';
import {Box} from "@mui/system";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {GiCakeSlice} from "react-icons/gi";
import React, {FC, useState} from 'react';
import {CartItemsListPresenterProps} from "@/presenters/CartItemsListPresenter";

type HeaderViewProps = {
    cartCount: number
    CartDropdown: React.ComponentType<CartItemsListPresenterProps>
}

const HeaderView: FC<HeaderViewProps> = (
    {cartCount, CartDropdown }
) => {

    const [anchorEl, setAnchorEl] = useState<HTMLElement| null>(null);

    function handleCloseCart() {
        setAnchorEl(null);
    }

    function handleCart(event: React.MouseEvent<HTMLElement>) {
        setAnchorEl(event.currentTarget);
    }

    return (
        <AppBar position="fixed" sx={sxStyles.appBar} component="header">
            <Toolbar sx={sxStyles.toolBar}>
                <Link href={'/'} style={sxStyles.logoLink}>
                    <Box sx={sxStyles.logoContainer}>
                        <GiCakeSlice color={'var(--yellow)'} size={'28'}/>
                    </Box>
                    <Box sx={sxStyles.logoText}>
                        <Typography variant={'h5'}>Get Cake</Typography>
                    </Box>
                </Link>
                <Box sx={sxStyles.cartBox}>
                    <Button
                        size="large"
                        aria-label="cart of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleCart}
                    >
                        <ShoppingCartIcon /> {cartCount}
                    </Button>
                    <CartDropdown anchorEl={anchorEl} onCloseCart={handleCloseCart} />
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default HeaderView;
