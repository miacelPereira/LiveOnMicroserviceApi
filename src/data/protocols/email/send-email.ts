export interface SendEmail {
  send: (from: string, to: string, subject: string, html: string) => Promise<any>
}
