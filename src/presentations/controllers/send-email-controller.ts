import fs from 'fs'
import { MailgunAdapter } from '../../infra/mailgun/email/mailgun-adapter'
import { badRequest, ok, serverError } from '../helpers/http-helper'
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

    const { email, subject, path } = request

    const template = await fs.readFileSync(path, { encoding: 'utf-8' })

    const mailgunAdapter = new MailgunAdapter()

    try {
      await mailgunAdapter.send(process.env.MAILGUN_EMAIL_SENDER, email, subject, template)
    } catch (error) {
      return serverError(error)
    }

    return ok({ email, subject })
  }
}

export namespace SendEmailController {
  export type Request = {
    email: string,
    subject: string,
    path: string
  }
}
