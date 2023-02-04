import { Divider, Grid, Typography, Box, Card, Button, CardContent, Chip } from '@mui/material'
import { ShopLayout } from "../../components/layouts"
import { CartList } from '../../components/cart'
import { OrderSummary } from '../../components/cart/OrderSummary'
import NextLink from 'next/link'
import { CreditCardOffOutlined } from '@mui/icons-material'

const OrderPage = () => {
  return (
    <ShopLayout title='Resumen de la orden 2345648' pageDescription='Resumen de la orden'>
        <Typography variant='h1' component='h1'>
            Orden: ABC123
        </Typography>

        <Chip
            sx={{ my: 1 }}
            label='Pendiente de pago'
            variant='outlined'
            color='error'
            icon={ <CreditCardOffOutlined /> }
        />

        <Chip
            sx={{ my: 1 }}
            label='Orden ya fue Pagadaa'
            variant='outlined'
            color='success'
            icon={ <CreditCardOffOutlined /> }
        />

        <Grid container>
            <Grid item xs={ 12 } sm={ 7 }>
                {/* CartList */}
                <CartList />
            </Grid>
            <Grid item xs={ 12 } sm={ 5 }>
                <Card className='summary-cart'>
                    <CardContent>
                        <Typography>Resumen (3 productos)</Typography>
                        <Divider sx={{ my: 1 }} />

                        <Box display='flex' justifyContent='space-between'>
                            <Typography variant='subtitle1'>Direccion de entrega</Typography>
                           <NextLink href='/checkout/address'>
                                Editar
                            </NextLink> 
                        </Box>

                        <Typography>Patrick Tanta</Typography>
                        <Typography>uacgi</Typography>
                        <Typography>Peru</Typography>
                        <Typography>+51 945645212</Typography>

                        <Divider sx={{ my:1 }} />

                        <OrderSummary />

                        <Box sx={{ mt: 1 }}>
                            <h1>Págar</h1>
                        </Box>

                        <Chip
                            sx={{ my: 1 }}
                            label='Orden ya fue Pagadaa'
                            variant='outlined'
                            color='success'
                            icon={ <CreditCardOffOutlined /> }
                        />
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </ShopLayout>
  )
}

export default OrderPage
