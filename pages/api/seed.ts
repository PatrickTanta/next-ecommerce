import { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../database'
import Product from '../../models/Product'
import { initialData } from '../../database/products'

type Data = { message: string }

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (process.env.NODE_ENV === 'production') {
        return res
            .status(200)
            .json({ message: 'You dont have access to this API' })
    }

    await db.connect()
    await Product.deleteMany()
    await Product.insertMany(initialData.products)

    await db.disconnect()
    res.status(200).json({ message: 'Database seeded' })
}
