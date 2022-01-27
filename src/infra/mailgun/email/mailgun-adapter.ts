import { ClientMailGun } from '../'
import { SendEmail } from '../../../data/protocols/email'

export class MailgunAdapter implements SendEmail {
  private mailgun: ClientMailGun

  constructor () {
    this.mailgun = new ClientMailGun()
  }

  async send (from: string, to: string, subject: string, html: string) {
    return this.mailgun
      .client.messages().send({ from, to, subject, html })
  }
}
