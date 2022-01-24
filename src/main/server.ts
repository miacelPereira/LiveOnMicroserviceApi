import express from 'express'

class Server {
  server: express

  constructor () {
    this.init()
  }

  init () {
    this.server = express()

    this.server
      .listen(3333, () => console.log('working on port 3333'))
  }
}

export default new Server()
