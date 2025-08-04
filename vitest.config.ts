import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './vitest.setup.ts',
        include: ['tests/**/*.test.{ts,tsx}'],
        alias: {
            '@': '/src',
        },
        coverage: {
            provider: 'istanbul',
            reporter: ['text', 'json', 'html'],
        },
    },
    resolve: {
        alias: {
            '@': '/src',
        },
    },
})
