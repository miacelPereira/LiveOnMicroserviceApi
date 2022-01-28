import multer from 'multer'
import { Router } from 'express'
import { adaptRoute } from '../adapters'
import { makeSendEmailController } from '../factories/controllers'
import { auth } from '../middlewares'

const upload = multer({ dest: 'temporaryFiles/' })

export default (router: Router): void => {
  router.post('/notification/email', auth, upload.single('template'), adaptRoute(makeSendEmailController()))
}
