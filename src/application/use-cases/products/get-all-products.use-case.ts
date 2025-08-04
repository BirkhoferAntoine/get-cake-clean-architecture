import {IProductsRepository} from "@/application/repositories/products.repository.interface";
import {ProductType} from "@/entities/models/product";

export type IGetAllProductsUseCase = ReturnType<typeof getAllProductsUseCase>;

export const getAllProductsUseCase =
    (repo: IProductsRepository)=>
        async (): Promise<ProductType[]> =>
            await repo.findAll();