import NextLink from 'next/link'
import {
    AppBar,
    Badge,
    Box,
    Button,
    IconButton,
    Toolbar,
    Typography
} from '@mui/material'
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { UiContext } from '../../context/ui'

export const Navbar = () => {
    const { asPath } = useRouter()

    const { toggleSideMenu } = useContext(UiContext)
    const handleMenuClick = () => {
        toggleSideMenu()
    }

    return (
        <AppBar>
            <Toolbar>
                <NextLink href="/" passHref>
                    <Typography variant="h6">SH cars</Typography>
                    {/*<Typography sx={{ ml: 0.5 }} >Shop</Typography>*/}
                </NextLink>

                <Box flex={1} />

                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <NextLink href="/category/men" passHref>
                        <Button
                            color={
                                asPath === '/category/men' ? 'primary' : 'info'
                            }
                        >
                            Nombres
                        </Button>
                    </NextLink>
                    <NextLink href="/category/women" passHref>
                        <Button
                            color={
                                asPath === '/category/women'
                                    ? 'primary'
                                    : 'info'
                            }
                        >
                            Mujeres
                        </Button>
                    </NextLink>
                    <NextLink href="/category/kid" passHref>
                        <Button
                            color={
                                asPath === '/category/kid' ? 'primary' : 'info'
                            }
                        >
                            Niños
                        </Button>
                    </NextLink>
                </Box>

                <Box flex={1} />

                <IconButton>
                    <SearchOutlined />
                </IconButton>

                <NextLink href="/cart" passHref>
                    <IconButton>
                        <Badge badgeContent={2} color="secondary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </IconButton>
                </NextLink>

                <Button onClick={handleMenuClick}>Menú</Button>
            </Toolbar>
        </AppBar>
    )
}
