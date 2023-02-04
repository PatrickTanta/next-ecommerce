import Head from 'next/head'
import { Box } from '@mui/material'
import { FC } from 'react'

interface Props {
    children: React.ReactNode
    title: string
}

export const AuthLayout: FC<Props> = ({ children, title }) => {
  return (
    <>
        <Head>
            <title>{ title }</title>
        </Head>

        <main>
            <Box display='flex' justifyContent='center' alignItems='center'>
                { children }
            </Box>
        </main>
    </>
  )
}
