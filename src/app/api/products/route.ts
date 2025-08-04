export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
import { getAllProductsUseCase } from '@/application/use-cases/products/get-all-products.use-case'
import { ProductsRepository }    from '@/infrastructure/repositories/products.repository'

export async function GET() {

    try {
        const products = await getAllProductsUseCase(new ProductsRepository())();
        return NextResponse.json(products)
    } catch (err) {
        console.error(err)
        return NextResponse.json(
            { error: 'Unable to fetch products' },
            { status: 500 }
        )
    }
}
