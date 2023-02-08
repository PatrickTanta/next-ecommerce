import { Typography } from '@mui/material'
import { ShopLayout } from '../components/layouts'
import { ProductList } from '../components/products'
import { NextPage } from 'next'
import { useProducts } from '../hooks'
import { FullScreenLoading } from '../components/ui'

const HomePage: NextPage = () => {
    const { products, isLoading } = useProducts('/products')

    return (
        <ShopLayout
            title={'Sh-Car-Shop'}
            pageDescription={
                'Encuentra los mejores autos de segunda mano aquí.'
            }
            imageFullUrl={''}
        >
            <Typography variant="h1" component="h1">
                Tienda
            </Typography>
            <Typography variant="h2" sx={{ mb: 1 }}>
                Todos los productos
            </Typography>

            {isLoading ? (
                <FullScreenLoading />
            ) : (
                <ProductList products={products} />
            )}
        </ShopLayout>
    )
}

export default HomePage
