import { ShopLayout } from '../../components/layouts'
import { Chip, Grid, Typography } from '@mui/material'
import { DataGrid, GridColDef, GridRenderCellParam } from '@mui/x-data-grid'
import NextLink from 'next/link';

const HistoryPage = () => {

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
        field: 'fullname',
        headerName: 'Nombre Completo',
        width: 300
    },
    {
        field: 'paid',
        headerName: 'Pagado',
        width: 200,
        description: 'Muestra informacion si esta pagada la orden o no',
        renderCell: (params: GridRenderCellParam[]) => {
            return (
                params!.row.paid
                    ?  <Chip color='success' label='Pagada' variant='outlined' />
                    :  <Chip color='error' label='No Pagada' variant='outlined' />
            )
        }
    },
    {
        field: 'order',
        headerName: 'Ver orden',
        width: 200,
        description: 'Muestra informacion si esta pagada la orden o no',
        renderCell: (params: GridRenderCellParam[]) => {
            return (
                <NextLink href={ `/orders/${ params.row.id }` }>
                    Ver orden
                </NextLink>
            )
        }
    }
  ]

    const rows = [
        { id: 0, paid: true, fullname: 'John Doe' },
        { id: 1, paid: false, fullname: 'Mellisa Flores' },
        { id: 2, paid: true, fullname: 'Pedro Herrera' },
        { id: 3, paid: false, fullname: 'John DoeNatalia salas' }
    ]

  return (
    <ShopLayout title='Historial de ordenes' pageDescription='Historial de ordenes del cliente'>
        <Typography variant='h1'>Historial de ordenes</Typography>

        <Grid container>
          <Grid item xs={12} sx={{ height: 650 , width: '100%'}}>
            <DataGrid
              rows={ rows }
              columns={ columns }
              pageSize={ 5 }
            />

          </Grid>
        </Grid>
    </ShopLayout>
  )
}

export default HistoryPage
