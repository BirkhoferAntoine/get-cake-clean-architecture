import type { Product, Prisma } from '@prisma/client'
import prisma from '@/lib/prisma'

export class ProductService {
    async getAllProducts(params: {
        skip?: number
        take?: number
        cursor?: Prisma.ProductWhereUniqueInput
        where?: Prisma.ProductWhereInput
        orderBy?: Prisma.ProductOrderByWithRelationInput
    } = {}): Promise<Product[]> {
        return prisma.product.findMany(params)
    }

    async getProductById(
        where: Prisma.ProductWhereUniqueInput
    ): Promise<Product | null> {
        return prisma.product.findUnique({ where })
    }

}

export const productService = new ProductService();
