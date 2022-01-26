import { Router } from 'express'
import { adaptRoute } from '../adapters'
import { makeSendEmailController } from '../factories/controllers'

export default (router: Router): void => {
  router.post('/notification/email', adaptRoute(makeSendEmailController()))
}
