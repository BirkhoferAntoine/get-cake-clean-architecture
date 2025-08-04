import { describe, it, expect, beforeEach } from 'vitest'
import { getProductByIdUseCase } from '@/application/use-cases/products/get-product-by-id.use-case'
import type { IProductsRepository } from '@/application/repositories/products.repository.interface'
import type { ProductType } from '@/entities/models/product'
import { NotFoundError } from '@/entities/errors/common'

class InMemoryProductsRepo implements IProductsRepository {
    items: ProductType[] = []

    async findAll() {
        return []
    }

    async findById(id: number) {
        return this.items.find(p => p.id === id) || null
    }
}

describe('getProductByIdUseCase', () => {
    let repo: InMemoryProductsRepo
    let useCase: ReturnType<typeof getProductByIdUseCase>

    beforeEach(() => {
        repo = new InMemoryProductsRepo()
        useCase = getProductByIdUseCase(repo)
    })

    it('returns the correct product when it exists', async () => {
        repo.items = [
            { id: 42, title: 'The answer cake', description: '', price: 42, image: '', model: '', category: 'Meta', rating: 4.2, ratingCount: 42 }
        ]
        const product = await useCase(42)
        expect(product).not.toBeNull()
        expect(product?.id).toBe(42)
        expect(product?.title).toBe('The answer cake')
    })

    it('throws NotFoundError when the product does not exist', async () => {
        repo.items = []
        await expect(useCase(100)).rejects.toBeInstanceOf(NotFoundError)
    })

    it('propagates other errors from the repository', async () => {
        const error = new Error('DB failure')
        repo.findById = () => Promise.reject(error)
        await expect(useCase(1)).rejects.toThrow('DB failure')
    })
})
