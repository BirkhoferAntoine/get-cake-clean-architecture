'use client'

import {type FC} from "react";
import {useDispatch} from "react-redux";
import { addToCart } from "@/store/cart-slice";
import ProductView from "@/views/product/ProductView";
import {useQuery} from "@tanstack/react-query";
import {fetchProductById} from "@/services/operations/productOperations.service";

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