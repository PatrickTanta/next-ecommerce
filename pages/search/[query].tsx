import { Typography, Box } from '@mui/material'
import { ShopLayout } from '../../components/layouts'
import { ProductList } from '../../components/products'
import { GetServerSideProps, NextPage } from 'next'
import { IProduct } from '../../interfaces'
import { dbProducts } from '../../database'

interface Props {
    products: IProduct[]
    foundProducts: boolean
    query: string
}

const SearchPage: NextPage<Props> = ({ foundProducts, query, products }) => {
    return (
        <ShopLayout
            title={'Sh-Car-Shop Search'}
            pageDescription={
                'Encuentra los mejores autos de segunda mano aquí.'
            }
            imageFullUrl={''}
        >
            <Typography variant="h1" component="h1">
                Buscar producto
            </Typography>
            <Typography variant="h3" sx={{ mb: 1 }}>
                {query}
            </Typography>

            {foundProducts ? (
                <Typography
                    textTransform="capitalize"
                    variant="h3"
                    sx={{ mb: 1 }}
                >
                    Termino: {query}
                </Typography>
            ) : (
                <Box display="flex">
                    <Typography variant="h3" sx={{ mb: 1 }}>
                        No encontramos ningún producto
                    </Typography>
                    <Typography variant="h3" sx={{ mb: 1 }}>
                        {query}
                    </Typography>
                </Box>
            )}

            <ProductList products={products} />
        </ShopLayout>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { query = '' } = params as { query: string }

    if (query.trim().length === 0) {
        return { redirect: { destination: '/', permanent: true } }
    }

    let products = await dbProducts.getProductsByTerm(query)
    const foundProducts = products.length > 0

    if (!foundProducts) {
        products = await dbProducts.getAllProducts()
    }

    return {
        props: {
            query,
            products,
            foundProducts
        }
    }
}

export default SearchPage
