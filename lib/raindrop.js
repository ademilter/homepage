const Redis = require('ioredis')

const redis = new Redis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD
})

const URL = [
  'https://api.raindrop.io/rest/v1/raindrops/0?',
  'perpage=50&',
  'search=[{"key":"tag","val":"history"}]'
].join('')

async function getBookmark() {
  const res = await fetch(URL, {
    method: 'get',
    headers: new Headers({
      Authorization: `Bearer ${process.env.RAINDROP_ACCESS_TOKEN}`
    })
  })
  const data = await res.json()
  const dataWithLikes = data.items.map(async (o) => {
    const like = await redis.get(o._id)
    return { ...o, like: like || 0 }
  })
  return Promise.all(dataWithLikes)
}

export { getBookmark }
