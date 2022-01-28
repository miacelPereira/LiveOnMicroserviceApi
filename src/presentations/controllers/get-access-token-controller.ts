import { Authentication } from '../../domain/usecases'
import { ok, serverError } from '../helpers/http-helper'
import { Controller } from '../protocols'

export class GetAccessTokenController implements Controller {
  private readonly authentication: Authentication

  constructor (authentication: Authentication) {
    this.authentication = authentication
  }

  async handle (request: GetAccessTokenController.Request) {
    const authenticationModel = await this.authentication.auth(request)

    if (!authenticationModel) {
      return serverError(new Error())
    }

    return ok(authenticationModel)
  }
}

export namespace GetAccessTokenController {
  export type Request = {
    apiKey: string
  }
}
