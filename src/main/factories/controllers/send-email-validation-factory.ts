import { Validation } from '../../../presentations/protocols'
import { EmailValidatorAdapter } from '../../../infra/validators'
import { EmailValidation, ValidationComposite } from '../../../validation/validators'

export const makeSendEmailValidation = (): any => {
  const validations: Validation[] = []
  validations.push(new EmailValidation('email', new EmailValidatorAdapter()))
  return new ValidationComposite(validations)
}
