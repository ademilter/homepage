const redis = require('redis')
const { promisify } = require('util')

const client = redis.createClient({
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

  try {
    const ids = data.items.map((item) => item._id)
    const hmgetAsync = promisify(client.hmget).bind(client)
    const likes = await hmgetAsync('likes', ids)
    return data.items.map((o, i) => {
      return { ...o, like: likes[i] || 0 }
    })
  } catch (err) {
    return data.items
  }
}

export { getBookmark }
