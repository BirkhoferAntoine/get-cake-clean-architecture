
export const runtime = 'nodejs'

import { NextResponse } from 'next/server';
import { ProductsRepository } from '@/infrastructure/repositories/products.repository';
import {getProductByIdUseCase} from "@/application/use-cases/products/get-product-by-id.use-case";

export async function GET(
    _req: Request,
    { params }: { params: { id: string } }
) {
    const id = Number(params.id)
    if (Number.isNaN(id)) {
        return NextResponse.json({ error: 'Invalid product ID' }, { status: 400 })
    }

    try {
        const product = await getProductByIdUseCase(new ProductsRepository())(id)
        if (!product) {
            return NextResponse.json({ error: 'Not found' }, { status: 404 })
        }
        return NextResponse.json(product)
    } catch (err) {
        console.error(err)
        return NextResponse.json(
            { error: 'Unable to fetch product' },
            { status: 500 }
        )
    }
}
