const Redis = require('ioredis')

const redis = new Redis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD
})

export default async function handler(req, res) {
  const id = req.body.id
  try {
    redis.get(id).then(function (result) {
      const count = Number(result || 0) + 1
      redis.set(id, count)
      res.status(200).end(JSON.stringify({ count }))
    })
  } catch (error) {
    console.error(error)
    res.status(error.status || 500).end(error.message)
  }
}
