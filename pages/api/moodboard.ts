import type { NextApiRequest, NextApiResponse } from 'next'
import { Dropmark } from '@type/dropmark'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const response = await fetch(process.env.DROPMARK_COLLECTION_URL, {
        method: 'get'
      })
      const data = await response.json()
      let items: [Dropmark] = data.items.map((o: Dropmark) => {
        const {
          id,
          name,
          type,
          description,
          collection_id,
          created_at,
          content,
          metadata
        } = o
        return {
          id,
          name,
          type,
          description,
          collection_id,
          created_at,
          content,
          metadata
        }
      })
      return res.status(200).json(items)
    } catch (error) {
      return res.status(400).send({ error: error.message })
    }
  }
}
