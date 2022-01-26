import { badRequest, ok } from '../helpers/http-helper'
import { Controller, HttpResponse, Validation } from '../protocols'

export class SendEmailController implements Controller {
  private readonly validation: Validation

  constructor (validation: Validation) {
    this.validation = validation
  }

  async handle (request: SendEmailController.Request): Promise<HttpResponse> {
    const error = this.validation.validate(request)

    if (error) {
      return badRequest(error)
    }

    const { email } = request

    return ok({ email })
  }
}

export namespace SendEmailController {
  export type Request = {
    email: string
  }
}
