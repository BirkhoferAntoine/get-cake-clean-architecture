export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
import { productService } from '@/services/product.service'

export async function GET() {
    try {
        const products = await productService.getAllProducts()
        return NextResponse.json(products)
    } catch (err) {
        console.error(err)
        return NextResponse.json(
            { error: 'Unable to fetch products' },
            { status: 500 }
        )
    }
}
