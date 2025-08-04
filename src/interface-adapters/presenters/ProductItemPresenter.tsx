'use client'

import { type FC } from 'react';
import { addToCart } from '@/presentation/state/store/cart-slice';
import { useDispatch } from 'react-redux';
import ProductItemView from "@/presentation/views/productItem/ProductItemView";
import {ProductType} from "@/entities/models/product";

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