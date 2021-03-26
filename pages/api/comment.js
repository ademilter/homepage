import redis from '@lib/redis'
import { nanoid } from 'nanoid'

export default async (req, res) => {
  if (req.method === 'GET') {
    const { url } = req.query

    if (!url) {
      return res.status(400).send('Invalid paramaters')
    }

    try {
      const response = await redis.lrange(url, 0, -1)
      const comments = response.map((comment) => JSON.parse(comment))
      return res.status(200).json(comments)
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  }

  if (req.method === 'POST') {
    const { token, text, url } = req.body

    if (!token) {
      return res.status(403).send('Unauthorized')
    }
    if (!text || !url) {
      return res.status(400).send('Invalid paramaters')
    }

    try {
      const response = await fetch(
        `https://${process.env.NEXT_PUBLIC_AUTH0_DOMAIN}/userinfo`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      )
      const { name, picture } = await response.json()

      const newComment = {
        id: nanoid(),
        created_at: Date.now(),
        text,
        name,
        picture,
        url
      }

      await redis.lpush(url, JSON.stringify(newComment))
      return res.status(200).json(newComment)
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  }

  return res.send('Method not allowed.')
}
