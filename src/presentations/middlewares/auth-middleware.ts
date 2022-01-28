import { Middleware, HttpResponse } from '../../presentations/protocols'
import { forbidden, ok, serverError } from '../../presentations/helpers'
import { AccessDeniedError } from '../../presentations/errors'
import { JwtAdapter } from '../../infra/cryptography'

export class AuthMiddleware implements Middleware {
  private readonly jwtAdapter: JwtAdapter

  constructor (jwtAdapter: JwtAdapter) {
    this.jwtAdapter = jwtAdapter
  }

  async handle (request: AuthMiddleware.Request): Promise<HttpResponse> {
    try {
      const { accesstoken } = request

      if (accesstoken) {
        const jwt = await this.jwtAdapter.decrypt(accesstoken)

        return ok(jwt)
      }
      return forbidden(new AccessDeniedError())
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace AuthMiddleware {
  export type Request = {
    accesstoken?: string
  }
}
