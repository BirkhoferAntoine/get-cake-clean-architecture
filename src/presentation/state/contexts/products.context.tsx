import {createContext, type FC, ReactNode, useContext, useMemo} from 'react';
import {useQuery} from '@tanstack/react-query';
import {fetchProducts} from "@/presentation/api-operations/product.operations-service";
import {ProductType} from "@/entities/models/product";

type ProductsContextProviderProps = {
    children: ReactNode
};

type ProductsContextValue = {
    isLoading: boolean;
    error: Error | null;
    data: ProductType[] | void | undefined;
}

const ProductsContext = createContext<ProductsContextValue | null>(null);

export function useProductsContext() {
    const productsCtx = useContext(ProductsContext);
    if (productsCtx === null) throw new Error('Error, products context is null');
    return productsCtx;
}

const ProductsContextProvider: FC<ProductsContextProviderProps> = ({children}) => {

    const { isLoading, error, data } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
        staleTime: Infinity
    });

    const ctx = useMemo(() => (
        { isLoading, error, data }
    ), [isLoading, error, data]);

    return (
        <ProductsContext.Provider value={ctx}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsContextProvider;
