import axiosService from "@/services/axiosService";
import {ProductType} from "@/contexts/products.context";

export async function fetchProducts(): Promise<ProductType[] | void> {
    try {
        return await axiosService.get<ProductType[], void>('/products');
    } catch (e) {
        if (e instanceof Error) {
            throw new Error(e.message);
        }
    }
}

export async function fetchProductById(id: string): Promise<ProductType | void> {
    try {
        return await axiosService.get<ProductType, void>(`/products/${id}`);
    } catch (e) {
        if (e instanceof Error) {
            throw new Error(e.message);
        }
    }
}