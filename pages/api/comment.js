import redis from '@lib/redis'

export default async (req, res) => {
  const { token, text } = req.body

  if (req.method === 'GET') {
    try {
      const response = await redis.hvals('comments')
      const comments = response
        .map((comment) => {
          console.log(comment)
          return JSON.parse(comment)
        })
        .sort((a, b) => b.created_at - a.created_at)
      return res.status(200).json(comments)
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  }

  if (req.method === 'POST') {
    if (!token) {
      return res.status(403).send('Unauthorized')
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
      const timestamp = Date.now()

      const newComment = {
        created_at: timestamp,
        text,
        name,
        picture
      }

      await redis.hset('comments', timestamp, JSON.stringify(newComment))
      return res.status(200).json(newComment)
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  }

  return res.send('Method not allowed.')
}
