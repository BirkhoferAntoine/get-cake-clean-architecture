import axiosService from "@/lib/axiosService";

import {ProductType} from "@/entities/models/product";

export const fetchProducts =
    async (): Promise<ProductType[] | void> =>
        await axiosService.get<ProductType[], void>('/products');

export const fetchProductById =
    async (id: string): Promise<ProductType | void> =>
        await axiosService.get<ProductType, void>(`/products/${id}`);