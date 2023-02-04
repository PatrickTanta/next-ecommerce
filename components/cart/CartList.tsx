import { initialData } from '../../database/products'
import {
    Box,
    Button,
    CardActionArea,
    CardMedia,
    Grid,
    Typography
} from '@mui/material'
import NextLink from 'next/link'
import { ItemCounter } from '../ui'
import { FC } from 'react'

const productsInCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2]
]

interface Props {
    editable?: boolean
}

export const CartList: FC<Props> = ({ editable = false }) => {
    return (
        <>
            {productsInCart.map((product) => (
                <Grid container spacing={2} key={product?.slug} sx={{ mb: 1 }}>
                    <Grid item xs={3}>
                        <NextLink href="/product/slug">
                            <CardActionArea>
                                <CardMedia
                                    image={`/products/${product.images[0]}`}
                                    component="img"
                                    sx={{ borderRadius: '5px' }}
                                />
                            </CardActionArea>
                        </NextLink>
                    </Grid>
                    <Grid item xs={7}>
                        <Box display="flex" flexDirection="column">
                            <Typography variant="body1">
                                {product.title}
                            </Typography>
                            <Typography variant="body1">Talla: M</Typography>

                            {/* Conditional */}
                            <ItemCounter />
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="body1">{`$${product.price}`}</Typography>

                        {editable && (
                            <Button variant="text" color="secondary">
                                Remove
                            </Button>
                        )}
                    </Grid>
                </Grid>
            ))}
        </>
    )
}
