import * as express from 'express'
import routes from './routes'

class App {
  public express: express.Express;

  constructor () {
    this.express = express()
    this.express.use(routes)
  }
}

export default new App().express
