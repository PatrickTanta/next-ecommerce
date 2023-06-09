import type { NextApiRequest, NextApiResponse } from 'next'
import { SHOP_CONSTANTS, db } from '../../../database'
import { IProduct } from '../../../interfaces/products'
import Product from '../../../models/Product'

type Data = { message?: string } | IProduct[]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    switch (req.method) {
        case 'GET':
            return getProductsByCategory(req, res)

        default:
            return res.status(400).json({ message: 'Bad request' })
    }
}

const getProductsByCategory = async (
    req: NextApiRequest,
    res: NextApiResponse<Data>
) => {
    const { gender = 'all' } = req.query

    let condition = {}

    if (gender !== 'all' && SHOP_CONSTANTS.validGenders.includes(`${gender}`)) {
        condition = {
            gender
        }
    }

    await db.connect()

    const products = await Product.find(condition)
        .select('title images price inStock -_id')
        .lean()

    await db.disconnect()

    return res.status(200).json(products)
}
