import { Authentication } from '../../../domain/usecases'
import { AccountMongoRepository } from '../../../infra/db'
import { DbAuthentication } from '../../../data/usecases'
import { JwtAdapter } from '../../../infra/cryptography'

export const makeDbAuthentication = (): Authentication => {
  const jwtAdapter = new JwtAdapter(process.env.JWT_SECRET)
  const accountMongoRepository = new AccountMongoRepository()
  return new DbAuthentication(accountMongoRepository, jwtAdapter)
}
