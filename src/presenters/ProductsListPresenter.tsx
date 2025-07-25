'use client'

import {useProductsContext} from "@/contexts/products.context";
import ProductsListView from "@/views/productsList/ProductsListView";


const ProductsListPresenter = () => {
    const { isLoading, error, data } = useProductsContext();

    return <ProductsListView isLoading={isLoading} error={error} data={data || []} />;
};

export default ProductsListPresenter;