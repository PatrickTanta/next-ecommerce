import { Typography } from '@mui/material'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useProducts } from '../../hooks/useProducts'
import { ShopLayout } from '../../components/layouts'
import { ProductList } from '../../components/products'
import { FullScreenLoading } from '../../components/ui'
import { useEffect } from 'react'
import { SHOP_CONSTANTS } from '../../database/constants'
import { IProduct } from '../../interfaces'

const CategoryDetail: NextPage = () => {
    const router = useRouter()

    const { gender = 'unisex' } = router.query as { gender: string }
    useEffect(() => {
        if (!SHOP_CONSTANTS.validGenders.includes(gender)) {
            router.push('/404')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gender])

    const { products, isLoading } = useProducts<IProduct[]>(
        `/products?gender=${gender}`
    )

    return (
        <ShopLayout
            title={'Sh-Car-Shop'}
            pageDescription={`Encuentra los mejores autos con estilo para ${gender}'`}
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

export default CategoryDetail
