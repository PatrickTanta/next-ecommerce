import { Box, Button, Grid, Typography, Chip } from '@mui/material'
import { ShopLayout } from '../../components/layouts/ShopLayout'
import { ProductSlideshow } from '../../components/products'
import { ItemCounter } from '../../components/ui/ItemCounter'
import { SizeSelector } from '../../components/products/SizeSelector'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { dbProducts } from '../../database'
import { ICartProduct, IProduct, ISize } from '../../interfaces'
import { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import { CartContext } from '../../context'

interface Props {
    product: IProduct
}

const ProductPage: NextPage<Props> = ({ product }) => {
    const router = useRouter()

    const { addProductToCart } = useContext(CartContext)

    const [tempCartProduct, setTempCartProduct] = useState<ICartProduct>({
        _id: product._id,
        image: product.images[0],
        price: product.price,
        size: undefined,
        slug: product.slug,
        title: product.title,
        gender: product.gender,
        quantity: 1
    })

    const onAddProduct = () => {
        if (!tempCartProduct.size) return

        // Call conetxt action to add on
        addProductToCart(tempCartProduct)
    }

    const updateQuantity = (currentValue: number) => {
        setTempCartProduct((currentProduct) => ({
            ...currentProduct,
            quantity: currentValue
        }))
    }

    const selectedSize = (size: ISize) => {
        setTempCartProduct((currentProduct) => ({
            ...currentProduct,
            size
        }))
    }

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
                            <ItemCounter
                                currentValue={tempCartProduct.quantity}
                                onUpdateQuantity={updateQuantity}
                                maxValue={product.inStock}
                            />
                            <SizeSelector
                                selectedSize={tempCartProduct.size}
                                sizes={product.sizes}
                                onSelectedSize={selectedSize}
                            />
                        </Box>

                        {product.inStock === 0 ? (
                            <Chip
                                label="No hay disponibles"
                                color="error"
                                variant="outlined"
                            />
                        ) : (
                            <Button
                                color="secondary"
                                className="circular-btn"
                                onClick={onAddProduct}
                            >
                                {tempCartProduct.size
                                    ? 'Agregar al carrito'
                                    : 'Seleccione una talla'}
                            </Button>
                        )}

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
    console.log('paths ', paths)

    return {
        paths,
        // fallback: false
        fallback: 'blocking'
    }
}

// `getStaticPaths` requires using `getStaticProps`
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug = '' } = params as { slug: string }
    console.log('slug: ', slug)
    const product = await dbProducts.getProductBySlug(slug)

    console.log('product from getStaticProps ', product)

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
