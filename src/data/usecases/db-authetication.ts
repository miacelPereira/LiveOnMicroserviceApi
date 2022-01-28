import { Authentication } from '../../domain/usecases'
import { Encrypter, LoadAccountByTokenRepository } from '../../data/protocols'

export class DbAuthentication implements Authentication {
  private readonly loadAccountByTokenRepository: LoadAccountByTokenRepository
  private readonly encrypter: Encrypter

  constructor (loadAccountByTokenRepository: LoadAccountByTokenRepository, encrypter: Encrypter) {
    this.loadAccountByTokenRepository = loadAccountByTokenRepository
    this.encrypter = encrypter
  }

  async auth (authenticationParams: Authentication.Params): Promise<Authentication.Result> {
    const account = await this.loadAccountByTokenRepository.loadByToken(authenticationParams.apiKey)
    if (account) {
      const accessToken = await this.encrypter.encrypt(account.id)
      return {
        accessToken,
        name: account.name
      }
    }
    return null
  }
}
