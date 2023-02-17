import Head from 'next/dist/shared/lib/head'
import { FC } from 'react'
import { Navbar, SideMenu } from '../ui'

interface Props {
    children: JSX.Element | JSX.Element[]
    title: string
    pageDescription: string
    imageFullUrl?: string
}

export const ShopLayout: FC<Props> = ({
    children,
    title,
    pageDescription,
    imageFullUrl
}) => {
    return (
        <>
            <Head>
                <title>{title}</title>

                <meta name="description" content={pageDescription} />

                <meta name="og:title" content={title} />
                <meta name="og:description" content={imageFullUrl} />

                {imageFullUrl && (
                    <meta name="og:image" content={imageFullUrl} />
                )}
            </Head>

            <SideMenu />

            <nav>
                <Navbar />
            </nav>

            <main
                style={{
                    margin: '80px auto',
                    maxWidth: '1440px',
                    padding: '0 30px'
                }}
            >
                {children}
            </main>
        </>
    )
}
