import Redis from 'ioredis'

class Client {
  constructor() {
    throw new Error('Use Singleton.getInstance()')
  }

  static getInstance() {
    if (!Client.instance) {
      Client.instance = new Redis({
        host: process.env.REDIS_URL_HOST,
        password: process.env.REDIS_URL_PASSWORD,
        port: process.env.REDIS_URL_PORT
      })
    }
    return Client.instance
  }
}

export default Client.getInstance()
