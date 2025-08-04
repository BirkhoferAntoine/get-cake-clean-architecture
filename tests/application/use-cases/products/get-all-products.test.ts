import { describe, it, expect, beforeEach } from 'vitest'
import { getAllProductsUseCase } from '@/application/use-cases/products/get-all-products.use-case'
import type { IProductsRepository } from '@/application/repositories/products.repository.interface'
import type { ProductType } from '@/entities/models/product'

class InMemoryProductsRepo implements IProductsRepository {
    items: ProductType[] = []

    async findAll() {
        return this.items
    }

    async findById(_id: number) {
        return null
    }
}

describe('getAllProductsUseCase', () => {
    let repo: InMemoryProductsRepo
    let useCase: ReturnType<typeof getAllProductsUseCase>

    beforeEach(() => {
        repo = new InMemoryProductsRepo()
        useCase = getAllProductsUseCase(repo)
    })

    it('returns an empty array when repo has no products', async () => {
        const result = await useCase()
        expect(Array.isArray(result)).toBe(true)
        expect(result).toHaveLength(0)
    })

    it('returns all products from repo', async () => {
        repo.items = [
            { id: 1, title: 'A', description: '', price: 1, image: '', model: '', category: 'X', rating: 4, ratingCount: 10 },
            { id: 2, title: 'B', description: '', price: 2, image: '', model: '', category: 'Y', rating: 5, ratingCount: 20 },
        ]
        const result = await useCase()
        expect(result).toHaveLength(2)
        expect(result.map(p => p.title)).toEqual(['A', 'B'])
    })

    it('propagates errors from the repository', async () => {
        const error = new Error('DB down')
        repo.findAll = () => Promise.reject(error)
        await expect(useCase()).rejects.toThrow('DB down')
    })
})