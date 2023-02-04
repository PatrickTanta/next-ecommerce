import { Grid, Typography } from '@mui/material'

export const OrderSummary = () => {
  return (
    <Grid container>

        <Grid item xs={ 6 }>
            <Typography variant='body1'>No. Productos</Typography>
        </Grid>
        <Grid item xs={ 6 } display='flex' justifyContent='end'>
            <Typography variant='body1'>3 items</Typography>
        </Grid>

        <Grid item xs={ 6 }>
            <Typography variant='body1'>Subtotal</Typography>
        </Grid>
        <Grid item xs={ 6 } display='flex' justifyContent='end'>
            <Typography variant='body1'>{ `$${ 155.36 }` }</Typography>
        </Grid>

        <Grid item xs={ 6 } sx={{ mt: 2 }}>
            <Typography variant='subtitle1'>Impuestos(15%)</Typography>
        </Grid>
        <Grid item xs={ 6 } sx={{ mt: 2 }} display='flex' justifyContent='end'>
            <Typography variant='subtitle1'>{ `$${ 186.34 }` }</Typography>
        </Grid>

    </Grid>
  )
}
