import { CircularProgress, Typography, Box } from '@mui/material'

export const FullScreenLoading = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="calc(100vh - 200px)"
        >
            <Typography sx={{ mb: 3 }} variant="h2">
                Cargando...
            </Typography>
            <CircularProgress thickness={3} />
        </Box>
    )
}
