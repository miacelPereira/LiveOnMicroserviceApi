export interface SendEmail {
  send: (from: string, to: string[], subject: string, text: string, html: string) => Promise<any>
}
