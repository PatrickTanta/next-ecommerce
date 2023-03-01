import NextLink from 'next/link'
import {
    AppBar,
    Badge,
    Box,
    Button,
    IconButton,
    Input,
    InputAdornment,
    Toolbar,
    Typography
} from '@mui/material'
import {
    ClearOutlined,
    SearchOutlined,
    ShoppingCartOutlined
} from '@mui/icons-material'
import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
import { UiContext } from '../../context/ui'

export const Navbar = () => {
    const { asPath, push } = useRouter()

    const [searchTerm, setSearchTerm] = useState('')
    const [isSearchVisible, setIsSearchVisible] = useState(false)

    const onSearchTerm = () => {
        if (!searchTerm.trim().length) return
        push(`/search/${searchTerm}`)
    }

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

                <Box
                    sx={{
                        display: isSearchVisible
                            ? 'none'
                            : { xs: 'none', sm: 'block' }
                    }}
                >
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

                {/* desktop */}
                {isSearchVisible ? (
                    <Input
                        autoFocus
                        type="text"
                        placeholder="Buscar..."
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => setIsSearchVisible(false)}
                                >
                                    <ClearOutlined />
                                </IconButton>
                            </InputAdornment>
                        }
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyPress={(e) =>
                            e.key === 'Enter' ? onSearchTerm() : null
                        }
                    />
                ) : (
                    <IconButton
                        sx={{ display: { xs: 'none', sm: 'flex' } }}
                        onClick={() => setIsSearchVisible(true)}
                    >
                        <SearchOutlined />
                    </IconButton>
                )}

                {/* mobile */}
                <IconButton
                    sx={{ display: { xs: 'flex', sm: 'none' } }}
                    onClick={toggleSideMenu}
                >
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
