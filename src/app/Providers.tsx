'use client'

import { ReactNode } from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider as ReduxProvider } from 'react-redux'
import ProductsContextProvider from '@/presentation/state/contexts/products.context'
import {theme} from '@/lib/theme/theme'
import { store } from '@/presentation/state/store/store'

const queryClient = new QueryClient()

export function Providers({ children }: { children: ReactNode }) {
    return (
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <QueryClientProvider client={queryClient}>
                <ReduxProvider store={store}>
                    <ProductsContextProvider>
                        <ThemeProvider theme={theme}>
                            <CssBaseline />
                            {children}
                        </ThemeProvider>
                    </ProductsContextProvider>
                </ReduxProvider>
            </QueryClientProvider>
        </AppRouterCacheProvider>
    )
}
