import { type Request, type Response } from 'express'
import { type ParamsDictionary as ExpressParams, type Query as ExpressQuery } from 'express-serve-static-core'
import prisma from "../dbClient.js"
import { type User } from "../entities"
import { type _Entity } from "./taggedEntities"

export * from "./taggedEntities"

export type Query<Entities extends _Entity[], Input, Output> = Operation<Entities, Input, Output>

export type Action<Entities extends _Entity[], Input, Output> = Operation<Entities, Input, Output>

export type AuthenticatedQuery<Entities extends _Entity[], Input, Output> = 
  AuthenticatedOperation<Entities, Input, Output>

export type AuthenticatedAction<Entities extends _Entity[], Input, Output> = 
  AuthenticatedOperation<Entities, Input, Output>

type AuthenticatedOperation<Entities extends _Entity[], Input, Output> = (
  args: Input,
  context: ContextWithUser<Entities>,
) => Promise<Output>

export type AuthenticatedApi<
  Entities extends _Entity[],
  Params extends ExpressParams,
  ResBody,
  ReqBody,
  ReqQuery extends ExpressQuery,
  Locals extends Record<string, any>
> = (
  req: Request<Params, ResBody, ReqBody, ReqQuery, Locals>,
  res: Response<ResBody, Locals>,
  context: ContextWithUser<Entities>,
) => void

type Operation<Entities extends _Entity[], Input, Output> = (
  args: Input,
  context: Context<Entities>,
) => Promise<Output>

export type Api<
  Entities extends _Entity[],
  Params extends ExpressParams,
  ResBody,
  ReqBody,
  ReqQuery extends ExpressQuery,
  Locals extends Record<string, any>
> = (
  req: Request<Params, ResBody, ReqBody, ReqQuery, Locals>,
  res: Response<ResBody, Locals>,
  context: Context<Entities>,
) => void

type EntityMap<Entities extends _Entity[]> = {
  [EntityName in Entities[number]["_entityName"]]: PrismaDelegate[EntityName]
}

type PrismaDelegate = {
  "User": typeof prisma.user,
  "SocialLogin": typeof prisma.socialLogin,
}

type Context<Entities extends _Entity[]> = Expand<{
  entities: Expand<EntityMap<Entities>>
}>

type ContextWithUser<Entities extends _Entity[]> = Expand<Context<Entities> & UserInContext>

export type UserInContext = {
  // TODO: This type must match the logic in core/auth.js (if we remove the
  // password field from the object there, we must do the same here). Ideally,
  // these two things would live in the same place:
  // https://github.com/wasp-lang/wasp/issues/965
  user: Omit<User, 'password'>
}

// This is a helper type used exclusively for DX purposes. It's a No-op for the
// compiler, but expands the type's representatoin in IDEs (i.e., inlines all
// type constructors) to make it more readable for the user.
//
// Check this SO answer for details: https://stackoverflow.com/a/57683652
type Expand<T extends object> = T extends infer O ? { [K in keyof O]: O[K] } : never