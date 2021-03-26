import Redis from 'ioredis'

class Client {
  constructor() {
    throw new Error('Use Singleton.getInstance()')
  }

  static getInstance() {
    if (!Client.instance) {
      Client.instance = new Redis(process.env.REDIS_URL)
    }
    return Client.instance
  }
}

export default Client.getInstance()
