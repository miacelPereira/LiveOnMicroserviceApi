import { makeSendEmailValidation } from '.'
import { Controller } from '../../../presentations/protocols'
import { SendEmailController } from '../../../presentations/controllers'

export const makeSendEmailController = (): Controller => {
  return new SendEmailController(makeSendEmailValidation())
}
