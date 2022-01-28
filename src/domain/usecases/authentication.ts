export interface Authentication {
  auth: (authenticationParams: Authentication.Params) => Promise<Authentication.Result>
}

export namespace Authentication {
  export type Params = {
    apiKey: string
  }

  export type Result = {
    accessToken: string
    name: string
  }
}
