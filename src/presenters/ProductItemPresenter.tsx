'use client'

import { type FC } from 'react';
import {ProductType} from '@/contexts/products.context';
import { addToCart } from '@/store/cart-slice';
import { useDispatch } from 'react-redux';
import ProductItemView from "@/views/productItem/ProductItemView";

type ProductItemProps = {
    product: ProductType;
}

const ProductItemPresenter: FC<ProductItemProps> = ({ product }) => {

    const dispatch = useDispatch();
    function handleAddToCart() {
        dispatch(addToCart({id: product.id, title: product.title, price: product.price}));
    }

    return <ProductItemView product={product} handleAddToCart={handleAddToCart} />;
};

export default ProductItemPresenter;