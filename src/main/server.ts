import 'dotenv/config'
import express from 'express'

class Server {
  server: express

  constructor () {
    this.init()
  }

  init () {
    const port = process.env.PORT
    this.server = express()

    this.server
      .listen(port, () => console.log(`working on port ${port}`))
  }
}

export default new Server()
