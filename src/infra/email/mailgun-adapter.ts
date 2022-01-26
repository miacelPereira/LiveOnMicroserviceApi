import Mailgun from 'mailgun.js'
import formData from 'form-data'
import Client from 'mailgun.js/dist/lib/client'
import { SendEmail } from '../../data/protocols/email'

export class MailgunAdapter implements SendEmail {
  private client: Client

  constructor () {
    const mailgun = new Mailgun(formData)
    this.client = mailgun.client({
      username: 'api',
      key: process.env.MAILGUN_API_KEY
    })
  }

  async send (from: string, to: string[], subject: string, text: string, html: string) {
    return this.client.messages.create(process.env.EMAIL_SENDER, { from, to, subject, text, html })
  }
}
