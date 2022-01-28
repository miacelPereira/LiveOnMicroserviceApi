import { Router } from 'express'
import { adaptRoute } from '../adapters'
import { makeGetAccessTokenController } from '../factories/controllers'
export default (router: Router): void => {
  router.post('/login', adaptRoute(makeGetAccessTokenController()))
}
