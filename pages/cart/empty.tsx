import { Box, Typography } from "@mui/material"
import { ShopLayout } from '../../components/layouts/ShopLayout';
import { RemoveShoppingCartOutlined } from "@mui/icons-material";
import NextLink from 'next/link'
import Link from "next/link";

const EmptyPage = () => {
  return (
    <ShopLayout title='Carrito vacío' pageDescription="No hay artículos en el carrito de compra">
        <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            height='calc(100vh - 200px)'
            sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
        >
            <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
            <Box display='flex' flexDirection='column' alignItems='center'>
                <Typography>Su carrito está vacío</Typography>
                <NextLink href='/' passHref>
                    Regresar
                </NextLink>
            </Box>
        </Box>
    </ShopLayout>
  )
}

export default EmptyPage
