import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database'
import { Product } from '../../../models'
import { IProduct } from '../../../interfaces/products'

type Data = { message?: string } | IProduct

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    switch (req.method) {
        case 'GET':
            return getProductDetail(req, res)
        default:
            return res.status(400).json({ message: 'Bad request' })
    }
}

const getProductDetail = async (
    req: NextApiRequest,
    res: NextApiResponse<Data>
) => {
    const { slug } = req.query

    await db.connect()

    const currentProduct = await Product.findOne({ slug }).lean()

    await db.disconnect()

    if (!currentProduct) {
        res.status(200).json({
            message: 'There is not product with this slug ' + slug
        })
    }

    return res.status(200).json(currentProduct || {})
}
