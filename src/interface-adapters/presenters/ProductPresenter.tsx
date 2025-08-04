'use client'

import {type FC} from "react";
import React from "react";
import {useDispatch} from "react-redux";
import { addToCart } from "@/presentation/state/store/cart-slice";
import ProductView from "@/presentation/views/product/ProductView";
import {useQuery} from "@tanstack/react-query";
import {fetchProductById} from "@/presentation/api-operations/product.operations-service";

type ProductPresenterProps = {
    productId: string;
};
const ProductPresenter: FC<ProductPresenterProps> = ({productId}) => {
    const dispatch = useDispatch();

    const { isLoading, error, data } = useQuery({
        queryKey: ['product', productId],
        queryFn: () => fetchProductById(productId),
        enabled: Boolean(productId),
        staleTime: Infinity
    });
    function handleAddToCart() {
        if (data) {
            dispatch(addToCart({ id: data.id, title: data.title, price: data.price }));
        }
    }

    if (isLoading)  return <ProductView loading />;
    if (error)      return <ProductView error />;
    if (data)       return <ProductView product={data} handleAddToCart={handleAddToCart}/>;
};

export default ProductPresenter;