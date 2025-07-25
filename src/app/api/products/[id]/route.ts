export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
import { productService } from '@/services/product.service'

export async function GET(
    _req: Request,
    { params }: { params: { id: string } }
) {
    const id = Number(params.id)
    if (Number.isNaN(id)) {
        return NextResponse.json({ error: 'Invalid product ID' }, { status: 400 })
    }

    try {
        const product = await productService.getProductById({ id })
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
