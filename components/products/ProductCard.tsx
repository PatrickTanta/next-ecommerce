import {
    Box,
    Card,
    CardActionArea,
    CardMedia,
    Grid,
    Typography
} from '@mui/material'
import { useMemo, useState, FC } from 'react'
import NextLink from 'next/link'
import { IProduct } from '../../interfaces/products'

interface Props {
    product: IProduct
}

export const ProductCard: FC<Props> = ({ product }) => {
    const [isHovered, setIsHovered] = useState<boolean>(false)
    const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false)

    const productImage = useMemo(() => {
        return isHovered
            ? `/products/${product.images[1]}`
            : `/products/${product.images[0]}`
    }, [isHovered, product.images])

    return (
        <Grid
            item
            xs={6}
            sm={4}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Card>
                <NextLink
                    href={`/product/${product.slug}`}
                    passHref
                    prefetch={false}
                >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            className="fadeIn"
                            image={productImage}
                            alt={product.title}
                            onLoad={() => setIsImageLoaded(true)}
                        />
                    </CardActionArea>
                </NextLink>
            </Card>

            <Box
                sx={{ mt: 1, display: isImageLoaded ? 'block' : 'none' }}
                className="fadeIn"
            >
                <Typography fontWeight={700}>{product.title}</Typography>
                <Typography fontWeight={500}>{`$${product.price}`}</Typography>
            </Box>
        </Grid>
    )
}
