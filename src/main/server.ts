import 'dotenv/config'

class Server {
  constructor () {
    this.init()
  }

  async init () {
    const port = process.env.PORT
    const { setupApp } = await import('./config/app')

    const server = await setupApp()
    server
      .listen(port, () => console.log(`working on port ${port}`))
  }
}

export default new Server()
