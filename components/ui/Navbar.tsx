import NextLink from 'next/link'
import {AppBar, Badge, Box, Button, IconButton, Link, Toolbar, Typography} from '@mui/material'
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'

export const Navbar = () => {
    return (
        <AppBar>
            <Toolbar>
                <NextLink href='/' passHref>
                    <Typography variant='h6'>SH cars</Typography>
                    {/*<Typography sx={{ ml: 0.5 }} >Shop</Typography>*/}
                </NextLink>

                <Box flex={ 1 } />

                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <NextLink href='/category/men' passHref>
                        <Button>Nombres</Button>
                    </NextLink>
                    <NextLink href='/category/women' passHref>
                        <Button>Mujeres</Button>
                    </NextLink>
                    <NextLink href='/category/kid' passHref>
                        <Button>Niños</Button>
                    </NextLink>
                </Box>

                <Box flex={ 1 } />

                <IconButton>
                    <SearchOutlined />
                </IconButton>

                <NextLink href='/cart' passHref>
                    <IconButton>
                        <Badge badgeContent={ 2 } color='secondary'>
                            <ShoppingCartOutlined />
                        </Badge>
                    </IconButton>
                </NextLink>

                <Button>
                    Menú
                </Button>

            </Toolbar>

        </AppBar>
    )
}
