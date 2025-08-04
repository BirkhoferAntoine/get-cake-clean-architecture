import {ProductType} from "@/entities/models/product";
import { Prisma } from "@prisma/client";

export interface IProductsRepository {
    findAll(params?: Prisma.ProductFindManyArgs): Promise<ProductType[]>;
    findById(id: number): Promise<ProductType | null>;
}