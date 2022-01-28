import { MongoHelper } from '../infra/db'
import 'dotenv/config'
class Server {
  constructor () {
    this.init()
  }

  async init () {
    MongoHelper.connect(process.env.MONGODB_URL_CONNECT)
      .then(async () => {
        const port = process.env.PORT
        const { setupApp } = await import('./config/app')
        const server = await setupApp()
        server.listen(port, () => console.log(`working on port ${port}`))
      }).catch(console.error)
  }
}

export default new Server()
