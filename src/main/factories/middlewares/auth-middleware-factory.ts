import { Middleware } from '../../../presentations/protocols'
import { JwtAdapter } from '@/infra/cryptography'
import { AuthMiddleware } from '../../../presentations/middlewares/auth-middleware'

export const makeAuthMiddleware = (): Middleware => {
  const jwtAdapter = new JwtAdapter(process.env.JWT_SECRET)
  return new AuthMiddleware(jwtAdapter)
}
