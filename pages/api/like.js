const redis = require('redis')
const { promisify } = require('util')

const client = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD
})

const hincrbyAsync = promisify(client.hincrby).bind(client)

export default async function handler(req, res) {
  const id = req.body.id
  try {
    const count = await hincrbyAsync('likes', id, 1)
    // client.hdel('likes', id)
    res.status(200).json({ count })
  } catch (error) {
    console.error(error)
    res.status(error.status || 500).end(error.message)
  }
}
