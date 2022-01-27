import mailgun from 'mailgun-js'

export class ClientMailGun {
  public client: any

  constructor () {
    this.client = mailgun({
      apiKey: process.env.MAILGUN_API_KEY,
      domain: process.env.MAILGUN_DOMAIN
    })
  }
}
