import {IProductsRepository} from "@/application/repositories/products.repository.interface";
import prisma from "@/lib/prisma";
import {type Prisma} from "@prisma/client";
import {ProductType} from "@/entities/models/product";

export class ProductsRepository implements IProductsRepository {

    async findAll(params: {
        skip?: number
        take?: number
        cursor?: Prisma.ProductWhereUniqueInput
        where?: Prisma.ProductWhereInput
        orderBy?: Prisma.ProductOrderByWithRelationInput
    } = {}): Promise<ProductType[]> {
        return await prisma.product.findMany(params);
    }

    async findById(
        id: number
    ): Promise<ProductType | null> {
        return await prisma.product.findUnique({ where: {id} });
    }

}