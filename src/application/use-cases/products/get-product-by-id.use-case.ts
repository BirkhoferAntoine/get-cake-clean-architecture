import {ProductType} from "@/entities/models/product";
import {IProductsRepository} from "@/application/repositories/products.repository.interface";
import {NotFoundError} from "@/entities/errors/common";
export type IGetProductByIdUseCase = ReturnType<typeof getProductByIdUseCase>;

export const getProductByIdUseCase =
    (repo: IProductsRepository) =>
        async (productId: number): Promise<ProductType|null> => {
            const product = await repo.findById(productId);

            if (!product) {
                throw new NotFoundError(`Product not found`);
            }

            return product;
        };

