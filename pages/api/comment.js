import redis from '@lib/redis'

export default async (req, res) => {
  const { token, text } = req.body

  if (req.method === 'GET') {
    const comments = await redis.hgetall('comments')
    console.log('comments', comments)
    return res.status(200).json(comments)
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
      const id = Date.now()
      const newComment = {
        id,
        created_at: id,
        text,
        name,
        picture
      }

      await redis.hset('comments', id, JSON.stringify(newComment))
      return res.status(200).json(newComment)
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  }

  return res.send('Method not allowed.')
}
