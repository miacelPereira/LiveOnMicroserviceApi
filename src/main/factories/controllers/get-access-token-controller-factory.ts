import { Controller } from '../../../presentations/protocols'
import { GetAccessTokenController } from '../../../presentations/controllers'
import { makeDbAuthentication } from '../usecase'

export const makeGetAccessTokenController = (): Controller => {
  return new GetAccessTokenController(makeDbAuthentication())
}
