import { Box, Button, Grid, Typography, Chip } from '@mui/material'
import { ShopLayout } from '../../components/layouts/ShopLayout'
import { ProductSlideshow } from '../../components/products'
import { ItemCounter } from '../../components/ui/ItemCounter'
import { SizeSelector } from '../../components/products/SizeSelector'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { dbProducts } from '../../database'
import { IProduct } from '../../interfaces'

interface Props {
    product: IProduct
}

const ProductPage: NextPage<Props> = ({ product }) => {
    return (
        <ShopLayout title={product.title} pageDescription={product.description}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={7}>
                    <ProductSlideshow images={product.images} />
                </Grid>

                <Grid item xs={12} sm={5}>
                    <Box display="flex" flexDirection="column">
                        {/* titulos */}
                        <Typography variant="h1" component="h1">
                            {product.title}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            component="h2"
                        >{`$${product.price}`}</Typography>

                        {/* quantity */}
                        <Box sx={{ my: 2 }}>
                            <Typography variant="subtitle2">
                                Cantidad
                            </Typography>
                            <ItemCounter />
                            <SizeSelector
                                selectedSize={product.sizes[0]}
                                sizes={product.sizes}
                            />
                        </Box>

                        {/* add to cart */}
                        <Button color="secondary" className="circular-btn">
                            Agregar al carrito
                        </Button>

                        {/* <Chip label='No hay disponibles' color='error' variant='outlined'></Chip> */}

                        {/* Description */}
                        <Box sx={{ mt: 3 }}>
                            <Typography variant="subtitle2">
                                Descripción
                            </Typography>
                            <Typography variant="body2">
                                {product.description}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ShopLayout>
    )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const productSlugs = await dbProducts.getAllProductSlugs()

    const paths = productSlugs.map(({ slug }) => ({ params: { slug } }))

    return {
        paths,
        fallback: 'blocking'
    }
}

// `getStaticPaths` requires using `getStaticProps`
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug = '' } = params as { slug: string }
    const product = await dbProducts.getProductBySlug(slug)

    if (!product) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        // Passed to the page component as props
        props: { product },
        revalidate: 60 * 60 * 24
    }
}

export default ProductPage
