import { Divider, Grid, Typography, Box, Card, Button, CardContent } from '@mui/material'
import { ShopLayout } from "../../components/layouts"
import { CartList } from '../../components/cart'
import { OrderSummary } from '../../components/cart/OrderSummary'
import NextLink from 'next/link'

const SummaryPage = () => {
  return (
    <ShopLayout title='Resumen de orden' pageDescription='Resumen de la orden'>
        <Typography variant='h1' component='h1'>
            Resumen de la orden
        </Typography>

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

                        <Divider />

                        <OrderSummary />

                        <Box sx={{ mt: 1 }}>
                            <Button color='secondary' className='circular-btn' fullWidth>
                                Confirmar orden
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </ShopLayout>
  )
}

export default SummaryPage
