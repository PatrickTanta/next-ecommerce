import type { NextApiRequest, NextApiResponse } from 'next'
import { IProduct } from '../../../interfaces/products'
import { db } from '../../../database'
import Product from '../../../models/Product'

type Data = { message?: string } | IProduct[]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    switch (req.method) {
        case 'GET':
            return searchProducts(req, res)
        default:
            return res.status(400).json({
                message: 'Bad Request'
            })
    }
}

const searchProducts = async (
    req: NextApiRequest,
    res: NextApiResponse<Data>
) => {
    let { q = '' } = req.query
    if (q.length === 0) {
        return res
            .status(200)
            .json({ message: 'You should specify the query of search' })
    }

    q = q.toString().toLowerCase()

    await db.connect()

    const products = await Product.find({
        $text: { $search: q }
    }).lean()

    await db.disconnect()

    return res.status(200).json(products)
}
