import { Divider, Grid, Typography, Box, Card, Button, CardContent } from '@mui/material'
import { ShopLayout } from "../../components/layouts"
import { CartList } from '../../components/cart'
import { OrderSummary } from '../../components/cart/OrderSummary'

const CartPage = () => {
  return (
    <ShopLayout title='Carrito - 3' pageDescription='Carrito de compras de la tienda'>
        <Typography variant='h1' component='h1'>
            Carrito
        </Typography>

        <Grid container>
            <Grid item xs={ 12 } sm={ 7 }>
                {/* CartList */}
                <CartList />
            </Grid>
            <Grid item xs={ 12 } sm={ 5 }>
                <Card className='summary-cart'>
                    <CardContent>
                        <Typography>Orden</Typography>
                        <Divider sx={{ my: 1 }} />

                        <OrderSummary />

                        <Box sx={{ mt: 1 }}>
                            <Button color='secondary' className='circular-btn' fullWidth>
                                Checkout
                            </Button>     
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </ShopLayout>
  )
}

export default CartPage