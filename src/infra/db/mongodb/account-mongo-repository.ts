import { MongoHelper } from '.'
import { LoadAccountByTokenRepository } from '../../../data/protocols/db'

export class AccountMongoRepository implements LoadAccountByTokenRepository {
  async loadByToken (token: string) {
    const accountCollection = MongoHelper.getCollection('account')

    const account = await accountCollection.findOne({ apiKey: token })

    return account && MongoHelper.map(account)
  }
}
