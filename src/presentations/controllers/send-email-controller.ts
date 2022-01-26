import { ok } from '../helpers/http-helper'
import { Controller, HttpResponse, Validation } from '../protocols'

export class SendEmailController implements Controller {
  private readonly validation: Validation

  constructor (validation: Validation) {
    this.validation = validation
  }

  async handle (request: SendEmailController.Request): Promise<HttpResponse> {
    return ok(request)
  }
}

export namespace SendEmailController {
  export type Request = {
    email: string
  }
}
