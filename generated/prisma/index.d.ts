
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ClientInfo
 * 
 */
export type ClientInfo = $Result.DefaultSelection<Prisma.$ClientInfoPayload>
/**
 * Model ClientDetails
 * 
 */
export type ClientDetails = $Result.DefaultSelection<Prisma.$ClientDetailsPayload>
/**
 * Model ClientInfoLog
 * 
 */
export type ClientInfoLog = $Result.DefaultSelection<Prisma.$ClientInfoLogPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Menu
 * 
 */
export type Menu = $Result.DefaultSelection<Prisma.$MenuPayload>
/**
 * Model MenuItem
 * 
 */
export type MenuItem = $Result.DefaultSelection<Prisma.$MenuItemPayload>
/**
 * Model Country
 * 
 */
export type Country = $Result.DefaultSelection<Prisma.$CountryPayload>
/**
 * Model State
 * 
 */
export type State = $Result.DefaultSelection<Prisma.$StatePayload>
/**
 * Model SuperUser
 * 
 */
export type SuperUser = $Result.DefaultSelection<Prisma.$SuperUserPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ClientInfos
 * const clientInfos = await prisma.clientInfo.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ClientInfos
   * const clientInfos = await prisma.clientInfo.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.clientInfo`: Exposes CRUD operations for the **ClientInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClientInfos
    * const clientInfos = await prisma.clientInfo.findMany()
    * ```
    */
  get clientInfo(): Prisma.ClientInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clientDetails`: Exposes CRUD operations for the **ClientDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClientDetails
    * const clientDetails = await prisma.clientDetails.findMany()
    * ```
    */
  get clientDetails(): Prisma.ClientDetailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clientInfoLog`: Exposes CRUD operations for the **ClientInfoLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClientInfoLogs
    * const clientInfoLogs = await prisma.clientInfoLog.findMany()
    * ```
    */
  get clientInfoLog(): Prisma.ClientInfoLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.menu`: Exposes CRUD operations for the **Menu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Menus
    * const menus = await prisma.menu.findMany()
    * ```
    */
  get menu(): Prisma.MenuDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.menuItem`: Exposes CRUD operations for the **MenuItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MenuItems
    * const menuItems = await prisma.menuItem.findMany()
    * ```
    */
  get menuItem(): Prisma.MenuItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.country`: Exposes CRUD operations for the **Country** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Countries
    * const countries = await prisma.country.findMany()
    * ```
    */
  get country(): Prisma.CountryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.state`: Exposes CRUD operations for the **State** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more States
    * const states = await prisma.state.findMany()
    * ```
    */
  get state(): Prisma.StateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.superUser`: Exposes CRUD operations for the **SuperUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SuperUsers
    * const superUsers = await prisma.superUser.findMany()
    * ```
    */
  get superUser(): Prisma.SuperUserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ClientInfo: 'ClientInfo',
    ClientDetails: 'ClientDetails',
    ClientInfoLog: 'ClientInfoLog',
    User: 'User',
    Role: 'Role',
    Menu: 'Menu',
    MenuItem: 'MenuItem',
    Country: 'Country',
    State: 'State',
    SuperUser: 'SuperUser'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "clientInfo" | "clientDetails" | "clientInfoLog" | "user" | "role" | "menu" | "menuItem" | "country" | "state" | "superUser"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ClientInfo: {
        payload: Prisma.$ClientInfoPayload<ExtArgs>
        fields: Prisma.ClientInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientInfoPayload>
          }
          findFirst: {
            args: Prisma.ClientInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientInfoPayload>
          }
          findMany: {
            args: Prisma.ClientInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientInfoPayload>[]
          }
          create: {
            args: Prisma.ClientInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientInfoPayload>
          }
          createMany: {
            args: Prisma.ClientInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientInfoPayload>[]
          }
          delete: {
            args: Prisma.ClientInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientInfoPayload>
          }
          update: {
            args: Prisma.ClientInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientInfoPayload>
          }
          deleteMany: {
            args: Prisma.ClientInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientInfoPayload>[]
          }
          upsert: {
            args: Prisma.ClientInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientInfoPayload>
          }
          aggregate: {
            args: Prisma.ClientInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClientInfo>
          }
          groupBy: {
            args: Prisma.ClientInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientInfoCountArgs<ExtArgs>
            result: $Utils.Optional<ClientInfoCountAggregateOutputType> | number
          }
        }
      }
      ClientDetails: {
        payload: Prisma.$ClientDetailsPayload<ExtArgs>
        fields: Prisma.ClientDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientDetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientDetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientDetailsPayload>
          }
          findFirst: {
            args: Prisma.ClientDetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientDetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientDetailsPayload>
          }
          findMany: {
            args: Prisma.ClientDetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientDetailsPayload>[]
          }
          create: {
            args: Prisma.ClientDetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientDetailsPayload>
          }
          createMany: {
            args: Prisma.ClientDetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientDetailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientDetailsPayload>[]
          }
          delete: {
            args: Prisma.ClientDetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientDetailsPayload>
          }
          update: {
            args: Prisma.ClientDetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientDetailsPayload>
          }
          deleteMany: {
            args: Prisma.ClientDetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientDetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientDetailsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientDetailsPayload>[]
          }
          upsert: {
            args: Prisma.ClientDetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientDetailsPayload>
          }
          aggregate: {
            args: Prisma.ClientDetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClientDetails>
          }
          groupBy: {
            args: Prisma.ClientDetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientDetailsCountArgs<ExtArgs>
            result: $Utils.Optional<ClientDetailsCountAggregateOutputType> | number
          }
        }
      }
      ClientInfoLog: {
        payload: Prisma.$ClientInfoLogPayload<ExtArgs>
        fields: Prisma.ClientInfoLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientInfoLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientInfoLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientInfoLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientInfoLogPayload>
          }
          findFirst: {
            args: Prisma.ClientInfoLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientInfoLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientInfoLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientInfoLogPayload>
          }
          findMany: {
            args: Prisma.ClientInfoLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientInfoLogPayload>[]
          }
          create: {
            args: Prisma.ClientInfoLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientInfoLogPayload>
          }
          createMany: {
            args: Prisma.ClientInfoLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientInfoLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientInfoLogPayload>[]
          }
          delete: {
            args: Prisma.ClientInfoLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientInfoLogPayload>
          }
          update: {
            args: Prisma.ClientInfoLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientInfoLogPayload>
          }
          deleteMany: {
            args: Prisma.ClientInfoLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientInfoLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientInfoLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientInfoLogPayload>[]
          }
          upsert: {
            args: Prisma.ClientInfoLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientInfoLogPayload>
          }
          aggregate: {
            args: Prisma.ClientInfoLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClientInfoLog>
          }
          groupBy: {
            args: Prisma.ClientInfoLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientInfoLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientInfoLogCountArgs<ExtArgs>
            result: $Utils.Optional<ClientInfoLogCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Menu: {
        payload: Prisma.$MenuPayload<ExtArgs>
        fields: Prisma.MenuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MenuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          findFirst: {
            args: Prisma.MenuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          findMany: {
            args: Prisma.MenuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>[]
          }
          create: {
            args: Prisma.MenuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          createMany: {
            args: Prisma.MenuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MenuCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>[]
          }
          delete: {
            args: Prisma.MenuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          update: {
            args: Prisma.MenuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          deleteMany: {
            args: Prisma.MenuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MenuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MenuUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>[]
          }
          upsert: {
            args: Prisma.MenuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          aggregate: {
            args: Prisma.MenuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenu>
          }
          groupBy: {
            args: Prisma.MenuGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenuCountArgs<ExtArgs>
            result: $Utils.Optional<MenuCountAggregateOutputType> | number
          }
        }
      }
      MenuItem: {
        payload: Prisma.$MenuItemPayload<ExtArgs>
        fields: Prisma.MenuItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MenuItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenuItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          findFirst: {
            args: Prisma.MenuItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenuItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          findMany: {
            args: Prisma.MenuItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>[]
          }
          create: {
            args: Prisma.MenuItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          createMany: {
            args: Prisma.MenuItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MenuItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>[]
          }
          delete: {
            args: Prisma.MenuItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          update: {
            args: Prisma.MenuItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          deleteMany: {
            args: Prisma.MenuItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MenuItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MenuItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>[]
          }
          upsert: {
            args: Prisma.MenuItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          aggregate: {
            args: Prisma.MenuItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenuItem>
          }
          groupBy: {
            args: Prisma.MenuItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenuItemCountArgs<ExtArgs>
            result: $Utils.Optional<MenuItemCountAggregateOutputType> | number
          }
        }
      }
      Country: {
        payload: Prisma.$CountryPayload<ExtArgs>
        fields: Prisma.CountryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CountryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CountryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findFirst: {
            args: Prisma.CountryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CountryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findMany: {
            args: Prisma.CountryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          create: {
            args: Prisma.CountryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          createMany: {
            args: Prisma.CountryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CountryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          delete: {
            args: Prisma.CountryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          update: {
            args: Prisma.CountryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          deleteMany: {
            args: Prisma.CountryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CountryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CountryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          upsert: {
            args: Prisma.CountryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          aggregate: {
            args: Prisma.CountryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCountry>
          }
          groupBy: {
            args: Prisma.CountryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CountryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CountryCountArgs<ExtArgs>
            result: $Utils.Optional<CountryCountAggregateOutputType> | number
          }
        }
      }
      State: {
        payload: Prisma.$StatePayload<ExtArgs>
        fields: Prisma.StateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          findFirst: {
            args: Prisma.StateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          findMany: {
            args: Prisma.StateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>[]
          }
          create: {
            args: Prisma.StateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          createMany: {
            args: Prisma.StateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>[]
          }
          delete: {
            args: Prisma.StateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          update: {
            args: Prisma.StateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          deleteMany: {
            args: Prisma.StateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>[]
          }
          upsert: {
            args: Prisma.StateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          aggregate: {
            args: Prisma.StateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateState>
          }
          groupBy: {
            args: Prisma.StateGroupByArgs<ExtArgs>
            result: $Utils.Optional<StateGroupByOutputType>[]
          }
          count: {
            args: Prisma.StateCountArgs<ExtArgs>
            result: $Utils.Optional<StateCountAggregateOutputType> | number
          }
        }
      }
      SuperUser: {
        payload: Prisma.$SuperUserPayload<ExtArgs>
        fields: Prisma.SuperUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SuperUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SuperUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperUserPayload>
          }
          findFirst: {
            args: Prisma.SuperUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SuperUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperUserPayload>
          }
          findMany: {
            args: Prisma.SuperUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperUserPayload>[]
          }
          create: {
            args: Prisma.SuperUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperUserPayload>
          }
          createMany: {
            args: Prisma.SuperUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SuperUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperUserPayload>[]
          }
          delete: {
            args: Prisma.SuperUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperUserPayload>
          }
          update: {
            args: Prisma.SuperUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperUserPayload>
          }
          deleteMany: {
            args: Prisma.SuperUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SuperUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SuperUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperUserPayload>[]
          }
          upsert: {
            args: Prisma.SuperUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperUserPayload>
          }
          aggregate: {
            args: Prisma.SuperUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSuperUser>
          }
          groupBy: {
            args: Prisma.SuperUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<SuperUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.SuperUserCountArgs<ExtArgs>
            result: $Utils.Optional<SuperUserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    clientInfo?: ClientInfoOmit
    clientDetails?: ClientDetailsOmit
    clientInfoLog?: ClientInfoLogOmit
    user?: UserOmit
    role?: RoleOmit
    menu?: MenuOmit
    menuItem?: MenuItemOmit
    country?: CountryOmit
    state?: StateOmit
    superUser?: SuperUserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClientInfoCountOutputType
   */

  export type ClientInfoCountOutputType = {
    ClientDetails: number
    User: number
    Role: number
    ClientInfoLog: number
  }

  export type ClientInfoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ClientDetails?: boolean | ClientInfoCountOutputTypeCountClientDetailsArgs
    User?: boolean | ClientInfoCountOutputTypeCountUserArgs
    Role?: boolean | ClientInfoCountOutputTypeCountRoleArgs
    ClientInfoLog?: boolean | ClientInfoCountOutputTypeCountClientInfoLogArgs
  }

  // Custom InputTypes
  /**
   * ClientInfoCountOutputType without action
   */
  export type ClientInfoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInfoCountOutputType
     */
    select?: ClientInfoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientInfoCountOutputType without action
   */
  export type ClientInfoCountOutputTypeCountClientDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientDetailsWhereInput
  }

  /**
   * ClientInfoCountOutputType without action
   */
  export type ClientInfoCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * ClientInfoCountOutputType without action
   */
  export type ClientInfoCountOutputTypeCountRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
  }

  /**
   * ClientInfoCountOutputType without action
   */
  export type ClientInfoCountOutputTypeCountClientInfoLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientInfoLogWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Subordinates: number
    roleuser: number
    ClientInfoLog: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Subordinates?: boolean | UserCountOutputTypeCountSubordinatesArgs
    roleuser?: boolean | UserCountOutputTypeCountRoleuserArgs
    ClientInfoLog?: boolean | UserCountOutputTypeCountClientInfoLogArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubordinatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRoleuserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClientInfoLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientInfoLogWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    Users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type MenuCountOutputType
   */

  export type MenuCountOutputType = {
    MenuItems: number
  }

  export type MenuCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MenuItems?: boolean | MenuCountOutputTypeCountMenuItemsArgs
  }

  // Custom InputTypes
  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCountOutputType
     */
    select?: MenuCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeCountMenuItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuItemWhereInput
  }


  /**
   * Count Type CountryCountOutputType
   */

  export type CountryCountOutputType = {
    ClientDetails: number
  }

  export type CountryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ClientDetails?: boolean | CountryCountOutputTypeCountClientDetailsArgs
  }

  // Custom InputTypes
  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryCountOutputType
     */
    select?: CountryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeCountClientDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientDetailsWhereInput
  }


  /**
   * Count Type SuperUserCountOutputType
   */

  export type SuperUserCountOutputType = {
    Subordinates: number
  }

  export type SuperUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Subordinates?: boolean | SuperUserCountOutputTypeCountSubordinatesArgs
  }

  // Custom InputTypes
  /**
   * SuperUserCountOutputType without action
   */
  export type SuperUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperUserCountOutputType
     */
    select?: SuperUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SuperUserCountOutputType without action
   */
  export type SuperUserCountOutputTypeCountSubordinatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuperUserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ClientInfo
   */

  export type AggregateClientInfo = {
    _count: ClientInfoCountAggregateOutputType | null
    _avg: ClientInfoAvgAggregateOutputType | null
    _sum: ClientInfoSumAggregateOutputType | null
    _min: ClientInfoMinAggregateOutputType | null
    _max: ClientInfoMaxAggregateOutputType | null
  }

  export type ClientInfoAvgAggregateOutputType = {
    ClientInfoID: number | null
    status: number | null
    updated_by: number | null
  }

  export type ClientInfoSumAggregateOutputType = {
    ClientInfoID: bigint | null
    status: number | null
    updated_by: number | null
  }

  export type ClientInfoMinAggregateOutputType = {
    ClientInfoID: bigint | null
    client_name: string | null
    firm_name: string | null
    status: number | null
    created_at: Date | null
    updated_at: Date | null
    updated_by: number | null
  }

  export type ClientInfoMaxAggregateOutputType = {
    ClientInfoID: bigint | null
    client_name: string | null
    firm_name: string | null
    status: number | null
    created_at: Date | null
    updated_at: Date | null
    updated_by: number | null
  }

  export type ClientInfoCountAggregateOutputType = {
    ClientInfoID: number
    client_name: number
    firm_name: number
    status: number
    created_at: number
    updated_at: number
    updated_by: number
    _all: number
  }


  export type ClientInfoAvgAggregateInputType = {
    ClientInfoID?: true
    status?: true
    updated_by?: true
  }

  export type ClientInfoSumAggregateInputType = {
    ClientInfoID?: true
    status?: true
    updated_by?: true
  }

  export type ClientInfoMinAggregateInputType = {
    ClientInfoID?: true
    client_name?: true
    firm_name?: true
    status?: true
    created_at?: true
    updated_at?: true
    updated_by?: true
  }

  export type ClientInfoMaxAggregateInputType = {
    ClientInfoID?: true
    client_name?: true
    firm_name?: true
    status?: true
    created_at?: true
    updated_at?: true
    updated_by?: true
  }

  export type ClientInfoCountAggregateInputType = {
    ClientInfoID?: true
    client_name?: true
    firm_name?: true
    status?: true
    created_at?: true
    updated_at?: true
    updated_by?: true
    _all?: true
  }

  export type ClientInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientInfo to aggregate.
     */
    where?: ClientInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientInfos to fetch.
     */
    orderBy?: ClientInfoOrderByWithRelationInput | ClientInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClientInfos
    **/
    _count?: true | ClientInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientInfoMaxAggregateInputType
  }

  export type GetClientInfoAggregateType<T extends ClientInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateClientInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientInfo[P]>
      : GetScalarType<T[P], AggregateClientInfo[P]>
  }




  export type ClientInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientInfoWhereInput
    orderBy?: ClientInfoOrderByWithAggregationInput | ClientInfoOrderByWithAggregationInput[]
    by: ClientInfoScalarFieldEnum[] | ClientInfoScalarFieldEnum
    having?: ClientInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientInfoCountAggregateInputType | true
    _avg?: ClientInfoAvgAggregateInputType
    _sum?: ClientInfoSumAggregateInputType
    _min?: ClientInfoMinAggregateInputType
    _max?: ClientInfoMaxAggregateInputType
  }

  export type ClientInfoGroupByOutputType = {
    ClientInfoID: bigint
    client_name: string
    firm_name: string
    status: number | null
    created_at: Date
    updated_at: Date
    updated_by: number | null
    _count: ClientInfoCountAggregateOutputType | null
    _avg: ClientInfoAvgAggregateOutputType | null
    _sum: ClientInfoSumAggregateOutputType | null
    _min: ClientInfoMinAggregateOutputType | null
    _max: ClientInfoMaxAggregateOutputType | null
  }

  type GetClientInfoGroupByPayload<T extends ClientInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientInfoGroupByOutputType[P]>
            : GetScalarType<T[P], ClientInfoGroupByOutputType[P]>
        }
      >
    >


  export type ClientInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ClientInfoID?: boolean
    client_name?: boolean
    firm_name?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    updated_by?: boolean
    ClientDetails?: boolean | ClientInfo$ClientDetailsArgs<ExtArgs>
    User?: boolean | ClientInfo$UserArgs<ExtArgs>
    Role?: boolean | ClientInfo$RoleArgs<ExtArgs>
    ClientInfoLog?: boolean | ClientInfo$ClientInfoLogArgs<ExtArgs>
    _count?: boolean | ClientInfoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientInfo"]>

  export type ClientInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ClientInfoID?: boolean
    client_name?: boolean
    firm_name?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    updated_by?: boolean
  }, ExtArgs["result"]["clientInfo"]>

  export type ClientInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ClientInfoID?: boolean
    client_name?: boolean
    firm_name?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    updated_by?: boolean
  }, ExtArgs["result"]["clientInfo"]>

  export type ClientInfoSelectScalar = {
    ClientInfoID?: boolean
    client_name?: boolean
    firm_name?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    updated_by?: boolean
  }

  export type ClientInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ClientInfoID" | "client_name" | "firm_name" | "status" | "created_at" | "updated_at" | "updated_by", ExtArgs["result"]["clientInfo"]>
  export type ClientInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ClientDetails?: boolean | ClientInfo$ClientDetailsArgs<ExtArgs>
    User?: boolean | ClientInfo$UserArgs<ExtArgs>
    Role?: boolean | ClientInfo$RoleArgs<ExtArgs>
    ClientInfoLog?: boolean | ClientInfo$ClientInfoLogArgs<ExtArgs>
    _count?: boolean | ClientInfoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientInfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClientInfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClientInfo"
    objects: {
      ClientDetails: Prisma.$ClientDetailsPayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs>[]
      Role: Prisma.$RolePayload<ExtArgs>[]
      ClientInfoLog: Prisma.$ClientInfoLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ClientInfoID: bigint
      client_name: string
      firm_name: string
      status: number | null
      created_at: Date
      updated_at: Date
      updated_by: number | null
    }, ExtArgs["result"]["clientInfo"]>
    composites: {}
  }

  type ClientInfoGetPayload<S extends boolean | null | undefined | ClientInfoDefaultArgs> = $Result.GetResult<Prisma.$ClientInfoPayload, S>

  type ClientInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientInfoCountAggregateInputType | true
    }

  export interface ClientInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClientInfo'], meta: { name: 'ClientInfo' } }
    /**
     * Find zero or one ClientInfo that matches the filter.
     * @param {ClientInfoFindUniqueArgs} args - Arguments to find a ClientInfo
     * @example
     * // Get one ClientInfo
     * const clientInfo = await prisma.clientInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientInfoFindUniqueArgs>(args: SelectSubset<T, ClientInfoFindUniqueArgs<ExtArgs>>): Prisma__ClientInfoClient<$Result.GetResult<Prisma.$ClientInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClientInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientInfoFindUniqueOrThrowArgs} args - Arguments to find a ClientInfo
     * @example
     * // Get one ClientInfo
     * const clientInfo = await prisma.clientInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientInfoClient<$Result.GetResult<Prisma.$ClientInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientInfoFindFirstArgs} args - Arguments to find a ClientInfo
     * @example
     * // Get one ClientInfo
     * const clientInfo = await prisma.clientInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientInfoFindFirstArgs>(args?: SelectSubset<T, ClientInfoFindFirstArgs<ExtArgs>>): Prisma__ClientInfoClient<$Result.GetResult<Prisma.$ClientInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientInfoFindFirstOrThrowArgs} args - Arguments to find a ClientInfo
     * @example
     * // Get one ClientInfo
     * const clientInfo = await prisma.clientInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientInfoClient<$Result.GetResult<Prisma.$ClientInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClientInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClientInfos
     * const clientInfos = await prisma.clientInfo.findMany()
     * 
     * // Get first 10 ClientInfos
     * const clientInfos = await prisma.clientInfo.findMany({ take: 10 })
     * 
     * // Only select the `ClientInfoID`
     * const clientInfoWithClientInfoIDOnly = await prisma.clientInfo.findMany({ select: { ClientInfoID: true } })
     * 
     */
    findMany<T extends ClientInfoFindManyArgs>(args?: SelectSubset<T, ClientInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClientInfo.
     * @param {ClientInfoCreateArgs} args - Arguments to create a ClientInfo.
     * @example
     * // Create one ClientInfo
     * const ClientInfo = await prisma.clientInfo.create({
     *   data: {
     *     // ... data to create a ClientInfo
     *   }
     * })
     * 
     */
    create<T extends ClientInfoCreateArgs>(args: SelectSubset<T, ClientInfoCreateArgs<ExtArgs>>): Prisma__ClientInfoClient<$Result.GetResult<Prisma.$ClientInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClientInfos.
     * @param {ClientInfoCreateManyArgs} args - Arguments to create many ClientInfos.
     * @example
     * // Create many ClientInfos
     * const clientInfo = await prisma.clientInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientInfoCreateManyArgs>(args?: SelectSubset<T, ClientInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClientInfos and returns the data saved in the database.
     * @param {ClientInfoCreateManyAndReturnArgs} args - Arguments to create many ClientInfos.
     * @example
     * // Create many ClientInfos
     * const clientInfo = await prisma.clientInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClientInfos and only return the `ClientInfoID`
     * const clientInfoWithClientInfoIDOnly = await prisma.clientInfo.createManyAndReturn({
     *   select: { ClientInfoID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClientInfo.
     * @param {ClientInfoDeleteArgs} args - Arguments to delete one ClientInfo.
     * @example
     * // Delete one ClientInfo
     * const ClientInfo = await prisma.clientInfo.delete({
     *   where: {
     *     // ... filter to delete one ClientInfo
     *   }
     * })
     * 
     */
    delete<T extends ClientInfoDeleteArgs>(args: SelectSubset<T, ClientInfoDeleteArgs<ExtArgs>>): Prisma__ClientInfoClient<$Result.GetResult<Prisma.$ClientInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClientInfo.
     * @param {ClientInfoUpdateArgs} args - Arguments to update one ClientInfo.
     * @example
     * // Update one ClientInfo
     * const clientInfo = await prisma.clientInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientInfoUpdateArgs>(args: SelectSubset<T, ClientInfoUpdateArgs<ExtArgs>>): Prisma__ClientInfoClient<$Result.GetResult<Prisma.$ClientInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClientInfos.
     * @param {ClientInfoDeleteManyArgs} args - Arguments to filter ClientInfos to delete.
     * @example
     * // Delete a few ClientInfos
     * const { count } = await prisma.clientInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientInfoDeleteManyArgs>(args?: SelectSubset<T, ClientInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClientInfos
     * const clientInfo = await prisma.clientInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientInfoUpdateManyArgs>(args: SelectSubset<T, ClientInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientInfos and returns the data updated in the database.
     * @param {ClientInfoUpdateManyAndReturnArgs} args - Arguments to update many ClientInfos.
     * @example
     * // Update many ClientInfos
     * const clientInfo = await prisma.clientInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClientInfos and only return the `ClientInfoID`
     * const clientInfoWithClientInfoIDOnly = await prisma.clientInfo.updateManyAndReturn({
     *   select: { ClientInfoID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClientInfo.
     * @param {ClientInfoUpsertArgs} args - Arguments to update or create a ClientInfo.
     * @example
     * // Update or create a ClientInfo
     * const clientInfo = await prisma.clientInfo.upsert({
     *   create: {
     *     // ... data to create a ClientInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClientInfo we want to update
     *   }
     * })
     */
    upsert<T extends ClientInfoUpsertArgs>(args: SelectSubset<T, ClientInfoUpsertArgs<ExtArgs>>): Prisma__ClientInfoClient<$Result.GetResult<Prisma.$ClientInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClientInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientInfoCountArgs} args - Arguments to filter ClientInfos to count.
     * @example
     * // Count the number of ClientInfos
     * const count = await prisma.clientInfo.count({
     *   where: {
     *     // ... the filter for the ClientInfos we want to count
     *   }
     * })
    **/
    count<T extends ClientInfoCountArgs>(
      args?: Subset<T, ClientInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClientInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientInfoAggregateArgs>(args: Subset<T, ClientInfoAggregateArgs>): Prisma.PrismaPromise<GetClientInfoAggregateType<T>>

    /**
     * Group by ClientInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientInfoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientInfoGroupByArgs['orderBy'] }
        : { orderBy?: ClientInfoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClientInfo model
   */
  readonly fields: ClientInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClientInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ClientDetails<T extends ClientInfo$ClientDetailsArgs<ExtArgs> = {}>(args?: Subset<T, ClientInfo$ClientDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    User<T extends ClientInfo$UserArgs<ExtArgs> = {}>(args?: Subset<T, ClientInfo$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Role<T extends ClientInfo$RoleArgs<ExtArgs> = {}>(args?: Subset<T, ClientInfo$RoleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ClientInfoLog<T extends ClientInfo$ClientInfoLogArgs<ExtArgs> = {}>(args?: Subset<T, ClientInfo$ClientInfoLogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientInfoLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ClientInfo model
   */
  interface ClientInfoFieldRefs {
    readonly ClientInfoID: FieldRef<"ClientInfo", 'BigInt'>
    readonly client_name: FieldRef<"ClientInfo", 'String'>
    readonly firm_name: FieldRef<"ClientInfo", 'String'>
    readonly status: FieldRef<"ClientInfo", 'Int'>
    readonly created_at: FieldRef<"ClientInfo", 'DateTime'>
    readonly updated_at: FieldRef<"ClientInfo", 'DateTime'>
    readonly updated_by: FieldRef<"ClientInfo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ClientInfo findUnique
   */
  export type ClientInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInfo
     */
    select?: ClientInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInfo
     */
    omit?: ClientInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInfoInclude<ExtArgs> | null
    /**
     * Filter, which ClientInfo to fetch.
     */
    where: ClientInfoWhereUniqueInput
  }

  /**
   * ClientInfo findUniqueOrThrow
   */
  export type ClientInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInfo
     */
    select?: ClientInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInfo
     */
    omit?: ClientInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInfoInclude<ExtArgs> | null
    /**
     * Filter, which ClientInfo to fetch.
     */
    where: ClientInfoWhereUniqueInput
  }

  /**
   * ClientInfo findFirst
   */
  export type ClientInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInfo
     */
    select?: ClientInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInfo
     */
    omit?: ClientInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInfoInclude<ExtArgs> | null
    /**
     * Filter, which ClientInfo to fetch.
     */
    where?: ClientInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientInfos to fetch.
     */
    orderBy?: ClientInfoOrderByWithRelationInput | ClientInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientInfos.
     */
    cursor?: ClientInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientInfos.
     */
    distinct?: ClientInfoScalarFieldEnum | ClientInfoScalarFieldEnum[]
  }

  /**
   * ClientInfo findFirstOrThrow
   */
  export type ClientInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInfo
     */
    select?: ClientInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInfo
     */
    omit?: ClientInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInfoInclude<ExtArgs> | null
    /**
     * Filter, which ClientInfo to fetch.
     */
    where?: ClientInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientInfos to fetch.
     */
    orderBy?: ClientInfoOrderByWithRelationInput | ClientInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientInfos.
     */
    cursor?: ClientInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientInfos.
     */
    distinct?: ClientInfoScalarFieldEnum | ClientInfoScalarFieldEnum[]
  }

  /**
   * ClientInfo findMany
   */
  export type ClientInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInfo
     */
    select?: ClientInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInfo
     */
    omit?: ClientInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInfoInclude<ExtArgs> | null
    /**
     * Filter, which ClientInfos to fetch.
     */
    where?: ClientInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientInfos to fetch.
     */
    orderBy?: ClientInfoOrderByWithRelationInput | ClientInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClientInfos.
     */
    cursor?: ClientInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientInfos.
     */
    skip?: number
    distinct?: ClientInfoScalarFieldEnum | ClientInfoScalarFieldEnum[]
  }

  /**
   * ClientInfo create
   */
  export type ClientInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInfo
     */
    select?: ClientInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInfo
     */
    omit?: ClientInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a ClientInfo.
     */
    data: XOR<ClientInfoCreateInput, ClientInfoUncheckedCreateInput>
  }

  /**
   * ClientInfo createMany
   */
  export type ClientInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClientInfos.
     */
    data: ClientInfoCreateManyInput | ClientInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClientInfo createManyAndReturn
   */
  export type ClientInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInfo
     */
    select?: ClientInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInfo
     */
    omit?: ClientInfoOmit<ExtArgs> | null
    /**
     * The data used to create many ClientInfos.
     */
    data: ClientInfoCreateManyInput | ClientInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClientInfo update
   */
  export type ClientInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInfo
     */
    select?: ClientInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInfo
     */
    omit?: ClientInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a ClientInfo.
     */
    data: XOR<ClientInfoUpdateInput, ClientInfoUncheckedUpdateInput>
    /**
     * Choose, which ClientInfo to update.
     */
    where: ClientInfoWhereUniqueInput
  }

  /**
   * ClientInfo updateMany
   */
  export type ClientInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClientInfos.
     */
    data: XOR<ClientInfoUpdateManyMutationInput, ClientInfoUncheckedUpdateManyInput>
    /**
     * Filter which ClientInfos to update
     */
    where?: ClientInfoWhereInput
    /**
     * Limit how many ClientInfos to update.
     */
    limit?: number
  }

  /**
   * ClientInfo updateManyAndReturn
   */
  export type ClientInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInfo
     */
    select?: ClientInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInfo
     */
    omit?: ClientInfoOmit<ExtArgs> | null
    /**
     * The data used to update ClientInfos.
     */
    data: XOR<ClientInfoUpdateManyMutationInput, ClientInfoUncheckedUpdateManyInput>
    /**
     * Filter which ClientInfos to update
     */
    where?: ClientInfoWhereInput
    /**
     * Limit how many ClientInfos to update.
     */
    limit?: number
  }

  /**
   * ClientInfo upsert
   */
  export type ClientInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInfo
     */
    select?: ClientInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInfo
     */
    omit?: ClientInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the ClientInfo to update in case it exists.
     */
    where: ClientInfoWhereUniqueInput
    /**
     * In case the ClientInfo found by the `where` argument doesn't exist, create a new ClientInfo with this data.
     */
    create: XOR<ClientInfoCreateInput, ClientInfoUncheckedCreateInput>
    /**
     * In case the ClientInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientInfoUpdateInput, ClientInfoUncheckedUpdateInput>
  }

  /**
   * ClientInfo delete
   */
  export type ClientInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInfo
     */
    select?: ClientInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInfo
     */
    omit?: ClientInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInfoInclude<ExtArgs> | null
    /**
     * Filter which ClientInfo to delete.
     */
    where: ClientInfoWhereUniqueInput
  }

  /**
   * ClientInfo deleteMany
   */
  export type ClientInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientInfos to delete
     */
    where?: ClientInfoWhereInput
    /**
     * Limit how many ClientInfos to delete.
     */
    limit?: number
  }

  /**
   * ClientInfo.ClientDetails
   */
  export type ClientInfo$ClientDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientDetails
     */
    select?: ClientDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientDetails
     */
    omit?: ClientDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientDetailsInclude<ExtArgs> | null
    where?: ClientDetailsWhereInput
    orderBy?: ClientDetailsOrderByWithRelationInput | ClientDetailsOrderByWithRelationInput[]
    cursor?: ClientDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientDetailsScalarFieldEnum | ClientDetailsScalarFieldEnum[]
  }

  /**
   * ClientInfo.User
   */
  export type ClientInfo$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * ClientInfo.Role
   */
  export type ClientInfo$RoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    cursor?: RoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * ClientInfo.ClientInfoLog
   */
  export type ClientInfo$ClientInfoLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInfoLog
     */
    select?: ClientInfoLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInfoLog
     */
    omit?: ClientInfoLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInfoLogInclude<ExtArgs> | null
    where?: ClientInfoLogWhereInput
    orderBy?: ClientInfoLogOrderByWithRelationInput | ClientInfoLogOrderByWithRelationInput[]
    cursor?: ClientInfoLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientInfoLogScalarFieldEnum | ClientInfoLogScalarFieldEnum[]
  }

  /**
   * ClientInfo without action
   */
  export type ClientInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInfo
     */
    select?: ClientInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInfo
     */
    omit?: ClientInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInfoInclude<ExtArgs> | null
  }


  /**
   * Model ClientDetails
   */

  export type AggregateClientDetails = {
    _count: ClientDetailsCountAggregateOutputType | null
    _avg: ClientDetailsAvgAggregateOutputType | null
    _sum: ClientDetailsSumAggregateOutputType | null
    _min: ClientDetailsMinAggregateOutputType | null
    _max: ClientDetailsMaxAggregateOutputType | null
  }

  export type ClientDetailsAvgAggregateOutputType = {
    ClientDetailsID: number | null
    ClientInfoID: number | null
  }

  export type ClientDetailsSumAggregateOutputType = {
    ClientDetailsID: bigint | null
    ClientInfoID: bigint | null
  }

  export type ClientDetailsMinAggregateOutputType = {
    ClientDetailsID: bigint | null
    email: string | null
    contact_number: string | null
    address: string | null
    state_name: string | null
    state_isoCode: string | null
    brand: string | null
    country_name: string | null
    country_isoCode: string | null
    country_phonecode: string | null
    currency: string | null
    agreement_date: Date | null
    renewal_date: Date | null
    address_proof: string | null
    tax_proof: string | null
    logo_exists: boolean | null
    file_name: string | null
    file_extension: string | null
    created_at: Date | null
    updated_at: Date | null
    ClientInfoID: bigint | null
  }

  export type ClientDetailsMaxAggregateOutputType = {
    ClientDetailsID: bigint | null
    email: string | null
    contact_number: string | null
    address: string | null
    state_name: string | null
    state_isoCode: string | null
    brand: string | null
    country_name: string | null
    country_isoCode: string | null
    country_phonecode: string | null
    currency: string | null
    agreement_date: Date | null
    renewal_date: Date | null
    address_proof: string | null
    tax_proof: string | null
    logo_exists: boolean | null
    file_name: string | null
    file_extension: string | null
    created_at: Date | null
    updated_at: Date | null
    ClientInfoID: bigint | null
  }

  export type ClientDetailsCountAggregateOutputType = {
    ClientDetailsID: number
    email: number
    contact_number: number
    address: number
    state_name: number
    state_isoCode: number
    brand: number
    country_name: number
    country_isoCode: number
    country_phonecode: number
    currency: number
    agreement_date: number
    renewal_date: number
    address_proof: number
    tax_proof: number
    logo_exists: number
    file_name: number
    file_extension: number
    created_at: number
    updated_at: number
    ClientInfoID: number
    _all: number
  }


  export type ClientDetailsAvgAggregateInputType = {
    ClientDetailsID?: true
    ClientInfoID?: true
  }

  export type ClientDetailsSumAggregateInputType = {
    ClientDetailsID?: true
    ClientInfoID?: true
  }

  export type ClientDetailsMinAggregateInputType = {
    ClientDetailsID?: true
    email?: true
    contact_number?: true
    address?: true
    state_name?: true
    state_isoCode?: true
    brand?: true
    country_name?: true
    country_isoCode?: true
    country_phonecode?: true
    currency?: true
    agreement_date?: true
    renewal_date?: true
    address_proof?: true
    tax_proof?: true
    logo_exists?: true
    file_name?: true
    file_extension?: true
    created_at?: true
    updated_at?: true
    ClientInfoID?: true
  }

  export type ClientDetailsMaxAggregateInputType = {
    ClientDetailsID?: true
    email?: true
    contact_number?: true
    address?: true
    state_name?: true
    state_isoCode?: true
    brand?: true
    country_name?: true
    country_isoCode?: true
    country_phonecode?: true
    currency?: true
    agreement_date?: true
    renewal_date?: true
    address_proof?: true
    tax_proof?: true
    logo_exists?: true
    file_name?: true
    file_extension?: true
    created_at?: true
    updated_at?: true
    ClientInfoID?: true
  }

  export type ClientDetailsCountAggregateInputType = {
    ClientDetailsID?: true
    email?: true
    contact_number?: true
    address?: true
    state_name?: true
    state_isoCode?: true
    brand?: true
    country_name?: true
    country_isoCode?: true
    country_phonecode?: true
    currency?: true
    agreement_date?: true
    renewal_date?: true
    address_proof?: true
    tax_proof?: true
    logo_exists?: true
    file_name?: true
    file_extension?: true
    created_at?: true
    updated_at?: true
    ClientInfoID?: true
    _all?: true
  }

  export type ClientDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientDetails to aggregate.
     */
    where?: ClientDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientDetails to fetch.
     */
    orderBy?: ClientDetailsOrderByWithRelationInput | ClientDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClientDetails
    **/
    _count?: true | ClientDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientDetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientDetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientDetailsMaxAggregateInputType
  }

  export type GetClientDetailsAggregateType<T extends ClientDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateClientDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientDetails[P]>
      : GetScalarType<T[P], AggregateClientDetails[P]>
  }




  export type ClientDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientDetailsWhereInput
    orderBy?: ClientDetailsOrderByWithAggregationInput | ClientDetailsOrderByWithAggregationInput[]
    by: ClientDetailsScalarFieldEnum[] | ClientDetailsScalarFieldEnum
    having?: ClientDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientDetailsCountAggregateInputType | true
    _avg?: ClientDetailsAvgAggregateInputType
    _sum?: ClientDetailsSumAggregateInputType
    _min?: ClientDetailsMinAggregateInputType
    _max?: ClientDetailsMaxAggregateInputType
  }

  export type ClientDetailsGroupByOutputType = {
    ClientDetailsID: bigint
    email: string
    contact_number: string
    address: string | null
    state_name: string | null
    state_isoCode: string | null
    brand: string | null
    country_name: string | null
    country_isoCode: string | null
    country_phonecode: string | null
    currency: string | null
    agreement_date: Date | null
    renewal_date: Date | null
    address_proof: string | null
    tax_proof: string | null
    logo_exists: boolean | null
    file_name: string | null
    file_extension: string | null
    created_at: Date
    updated_at: Date
    ClientInfoID: bigint
    _count: ClientDetailsCountAggregateOutputType | null
    _avg: ClientDetailsAvgAggregateOutputType | null
    _sum: ClientDetailsSumAggregateOutputType | null
    _min: ClientDetailsMinAggregateOutputType | null
    _max: ClientDetailsMaxAggregateOutputType | null
  }

  type GetClientDetailsGroupByPayload<T extends ClientDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], ClientDetailsGroupByOutputType[P]>
        }
      >
    >


  export type ClientDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ClientDetailsID?: boolean
    email?: boolean
    contact_number?: boolean
    address?: boolean
    state_name?: boolean
    state_isoCode?: boolean
    brand?: boolean
    country_name?: boolean
    country_isoCode?: boolean
    country_phonecode?: boolean
    currency?: boolean
    agreement_date?: boolean
    renewal_date?: boolean
    address_proof?: boolean
    tax_proof?: boolean
    logo_exists?: boolean
    file_name?: boolean
    file_extension?: boolean
    created_at?: boolean
    updated_at?: boolean
    ClientInfoID?: boolean
    country?: boolean | ClientDetails$countryArgs<ExtArgs>
    ClientInfo?: boolean | ClientInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientDetails"]>

  export type ClientDetailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ClientDetailsID?: boolean
    email?: boolean
    contact_number?: boolean
    address?: boolean
    state_name?: boolean
    state_isoCode?: boolean
    brand?: boolean
    country_name?: boolean
    country_isoCode?: boolean
    country_phonecode?: boolean
    currency?: boolean
    agreement_date?: boolean
    renewal_date?: boolean
    address_proof?: boolean
    tax_proof?: boolean
    logo_exists?: boolean
    file_name?: boolean
    file_extension?: boolean
    created_at?: boolean
    updated_at?: boolean
    ClientInfoID?: boolean
    country?: boolean | ClientDetails$countryArgs<ExtArgs>
    ClientInfo?: boolean | ClientInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientDetails"]>

  export type ClientDetailsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ClientDetailsID?: boolean
    email?: boolean
    contact_number?: boolean
    address?: boolean
    state_name?: boolean
    state_isoCode?: boolean
    brand?: boolean
    country_name?: boolean
    country_isoCode?: boolean
    country_phonecode?: boolean
    currency?: boolean
    agreement_date?: boolean
    renewal_date?: boolean
    address_proof?: boolean
    tax_proof?: boolean
    logo_exists?: boolean
    file_name?: boolean
    file_extension?: boolean
    created_at?: boolean
    updated_at?: boolean
    ClientInfoID?: boolean
    country?: boolean | ClientDetails$countryArgs<ExtArgs>
    ClientInfo?: boolean | ClientInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientDetails"]>

  export type ClientDetailsSelectScalar = {
    ClientDetailsID?: boolean
    email?: boolean
    contact_number?: boolean
    address?: boolean
    state_name?: boolean
    state_isoCode?: boolean
    brand?: boolean
    country_name?: boolean
    country_isoCode?: boolean
    country_phonecode?: boolean
    currency?: boolean
    agreement_date?: boolean
    renewal_date?: boolean
    address_proof?: boolean
    tax_proof?: boolean
    logo_exists?: boolean
    file_name?: boolean
    file_extension?: boolean
    created_at?: boolean
    updated_at?: boolean
    ClientInfoID?: boolean
  }

  export type ClientDetailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ClientDetailsID" | "email" | "contact_number" | "address" | "state_name" | "state_isoCode" | "brand" | "country_name" | "country_isoCode" | "country_phonecode" | "currency" | "agreement_date" | "renewal_date" | "address_proof" | "tax_proof" | "logo_exists" | "file_name" | "file_extension" | "created_at" | "updated_at" | "ClientInfoID", ExtArgs["result"]["clientDetails"]>
  export type ClientDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | ClientDetails$countryArgs<ExtArgs>
    ClientInfo?: boolean | ClientInfoDefaultArgs<ExtArgs>
  }
  export type ClientDetailsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | ClientDetails$countryArgs<ExtArgs>
    ClientInfo?: boolean | ClientInfoDefaultArgs<ExtArgs>
  }
  export type ClientDetailsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | ClientDetails$countryArgs<ExtArgs>
    ClientInfo?: boolean | ClientInfoDefaultArgs<ExtArgs>
  }

  export type $ClientDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClientDetails"
    objects: {
      country: Prisma.$CountryPayload<ExtArgs> | null
      ClientInfo: Prisma.$ClientInfoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ClientDetailsID: bigint
      email: string
      contact_number: string
      address: string | null
      state_name: string | null
      state_isoCode: string | null
      brand: string | null
      country_name: string | null
      country_isoCode: string | null
      country_phonecode: string | null
      currency: string | null
      agreement_date: Date | null
      renewal_date: Date | null
      address_proof: string | null
      tax_proof: string | null
      logo_exists: boolean | null
      file_name: string | null
      file_extension: string | null
      created_at: Date
      updated_at: Date
      ClientInfoID: bigint
    }, ExtArgs["result"]["clientDetails"]>
    composites: {}
  }

  type ClientDetailsGetPayload<S extends boolean | null | undefined | ClientDetailsDefaultArgs> = $Result.GetResult<Prisma.$ClientDetailsPayload, S>

  type ClientDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientDetailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientDetailsCountAggregateInputType | true
    }

  export interface ClientDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClientDetails'], meta: { name: 'ClientDetails' } }
    /**
     * Find zero or one ClientDetails that matches the filter.
     * @param {ClientDetailsFindUniqueArgs} args - Arguments to find a ClientDetails
     * @example
     * // Get one ClientDetails
     * const clientDetails = await prisma.clientDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientDetailsFindUniqueArgs>(args: SelectSubset<T, ClientDetailsFindUniqueArgs<ExtArgs>>): Prisma__ClientDetailsClient<$Result.GetResult<Prisma.$ClientDetailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClientDetails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientDetailsFindUniqueOrThrowArgs} args - Arguments to find a ClientDetails
     * @example
     * // Get one ClientDetails
     * const clientDetails = await prisma.clientDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientDetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientDetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientDetailsClient<$Result.GetResult<Prisma.$ClientDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientDetailsFindFirstArgs} args - Arguments to find a ClientDetails
     * @example
     * // Get one ClientDetails
     * const clientDetails = await prisma.clientDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientDetailsFindFirstArgs>(args?: SelectSubset<T, ClientDetailsFindFirstArgs<ExtArgs>>): Prisma__ClientDetailsClient<$Result.GetResult<Prisma.$ClientDetailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientDetailsFindFirstOrThrowArgs} args - Arguments to find a ClientDetails
     * @example
     * // Get one ClientDetails
     * const clientDetails = await prisma.clientDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientDetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientDetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientDetailsClient<$Result.GetResult<Prisma.$ClientDetailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClientDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientDetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClientDetails
     * const clientDetails = await prisma.clientDetails.findMany()
     * 
     * // Get first 10 ClientDetails
     * const clientDetails = await prisma.clientDetails.findMany({ take: 10 })
     * 
     * // Only select the `ClientDetailsID`
     * const clientDetailsWithClientDetailsIDOnly = await prisma.clientDetails.findMany({ select: { ClientDetailsID: true } })
     * 
     */
    findMany<T extends ClientDetailsFindManyArgs>(args?: SelectSubset<T, ClientDetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClientDetails.
     * @param {ClientDetailsCreateArgs} args - Arguments to create a ClientDetails.
     * @example
     * // Create one ClientDetails
     * const ClientDetails = await prisma.clientDetails.create({
     *   data: {
     *     // ... data to create a ClientDetails
     *   }
     * })
     * 
     */
    create<T extends ClientDetailsCreateArgs>(args: SelectSubset<T, ClientDetailsCreateArgs<ExtArgs>>): Prisma__ClientDetailsClient<$Result.GetResult<Prisma.$ClientDetailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClientDetails.
     * @param {ClientDetailsCreateManyArgs} args - Arguments to create many ClientDetails.
     * @example
     * // Create many ClientDetails
     * const clientDetails = await prisma.clientDetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientDetailsCreateManyArgs>(args?: SelectSubset<T, ClientDetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClientDetails and returns the data saved in the database.
     * @param {ClientDetailsCreateManyAndReturnArgs} args - Arguments to create many ClientDetails.
     * @example
     * // Create many ClientDetails
     * const clientDetails = await prisma.clientDetails.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClientDetails and only return the `ClientDetailsID`
     * const clientDetailsWithClientDetailsIDOnly = await prisma.clientDetails.createManyAndReturn({
     *   select: { ClientDetailsID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientDetailsCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientDetailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientDetailsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClientDetails.
     * @param {ClientDetailsDeleteArgs} args - Arguments to delete one ClientDetails.
     * @example
     * // Delete one ClientDetails
     * const ClientDetails = await prisma.clientDetails.delete({
     *   where: {
     *     // ... filter to delete one ClientDetails
     *   }
     * })
     * 
     */
    delete<T extends ClientDetailsDeleteArgs>(args: SelectSubset<T, ClientDetailsDeleteArgs<ExtArgs>>): Prisma__ClientDetailsClient<$Result.GetResult<Prisma.$ClientDetailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClientDetails.
     * @param {ClientDetailsUpdateArgs} args - Arguments to update one ClientDetails.
     * @example
     * // Update one ClientDetails
     * const clientDetails = await prisma.clientDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientDetailsUpdateArgs>(args: SelectSubset<T, ClientDetailsUpdateArgs<ExtArgs>>): Prisma__ClientDetailsClient<$Result.GetResult<Prisma.$ClientDetailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClientDetails.
     * @param {ClientDetailsDeleteManyArgs} args - Arguments to filter ClientDetails to delete.
     * @example
     * // Delete a few ClientDetails
     * const { count } = await prisma.clientDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDetailsDeleteManyArgs>(args?: SelectSubset<T, ClientDetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClientDetails
     * const clientDetails = await prisma.clientDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientDetailsUpdateManyArgs>(args: SelectSubset<T, ClientDetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientDetails and returns the data updated in the database.
     * @param {ClientDetailsUpdateManyAndReturnArgs} args - Arguments to update many ClientDetails.
     * @example
     * // Update many ClientDetails
     * const clientDetails = await prisma.clientDetails.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClientDetails and only return the `ClientDetailsID`
     * const clientDetailsWithClientDetailsIDOnly = await prisma.clientDetails.updateManyAndReturn({
     *   select: { ClientDetailsID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientDetailsUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientDetailsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientDetailsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClientDetails.
     * @param {ClientDetailsUpsertArgs} args - Arguments to update or create a ClientDetails.
     * @example
     * // Update or create a ClientDetails
     * const clientDetails = await prisma.clientDetails.upsert({
     *   create: {
     *     // ... data to create a ClientDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClientDetails we want to update
     *   }
     * })
     */
    upsert<T extends ClientDetailsUpsertArgs>(args: SelectSubset<T, ClientDetailsUpsertArgs<ExtArgs>>): Prisma__ClientDetailsClient<$Result.GetResult<Prisma.$ClientDetailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClientDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientDetailsCountArgs} args - Arguments to filter ClientDetails to count.
     * @example
     * // Count the number of ClientDetails
     * const count = await prisma.clientDetails.count({
     *   where: {
     *     // ... the filter for the ClientDetails we want to count
     *   }
     * })
    **/
    count<T extends ClientDetailsCountArgs>(
      args?: Subset<T, ClientDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClientDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientDetailsAggregateArgs>(args: Subset<T, ClientDetailsAggregateArgs>): Prisma.PrismaPromise<GetClientDetailsAggregateType<T>>

    /**
     * Group by ClientDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientDetailsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientDetailsGroupByArgs['orderBy'] }
        : { orderBy?: ClientDetailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClientDetails model
   */
  readonly fields: ClientDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClientDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    country<T extends ClientDetails$countryArgs<ExtArgs> = {}>(args?: Subset<T, ClientDetails$countryArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ClientInfo<T extends ClientInfoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientInfoDefaultArgs<ExtArgs>>): Prisma__ClientInfoClient<$Result.GetResult<Prisma.$ClientInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ClientDetails model
   */
  interface ClientDetailsFieldRefs {
    readonly ClientDetailsID: FieldRef<"ClientDetails", 'BigInt'>
    readonly email: FieldRef<"ClientDetails", 'String'>
    readonly contact_number: FieldRef<"ClientDetails", 'String'>
    readonly address: FieldRef<"ClientDetails", 'String'>
    readonly state_name: FieldRef<"ClientDetails", 'String'>
    readonly state_isoCode: FieldRef<"ClientDetails", 'String'>
    readonly brand: FieldRef<"ClientDetails", 'String'>
    readonly country_name: FieldRef<"ClientDetails", 'String'>
    readonly country_isoCode: FieldRef<"ClientDetails", 'String'>
    readonly country_phonecode: FieldRef<"ClientDetails", 'String'>
    readonly currency: FieldRef<"ClientDetails", 'String'>
    readonly agreement_date: FieldRef<"ClientDetails", 'DateTime'>
    readonly renewal_date: FieldRef<"ClientDetails", 'DateTime'>
    readonly address_proof: FieldRef<"ClientDetails", 'String'>
    readonly tax_proof: FieldRef<"ClientDetails", 'String'>
    readonly logo_exists: FieldRef<"ClientDetails", 'Boolean'>
    readonly file_name: FieldRef<"ClientDetails", 'String'>
    readonly file_extension: FieldRef<"ClientDetails", 'String'>
    readonly created_at: FieldRef<"ClientDetails", 'DateTime'>
    readonly updated_at: FieldRef<"ClientDetails", 'DateTime'>
    readonly ClientInfoID: FieldRef<"ClientDetails", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * ClientDetails findUnique
   */
  export type ClientDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientDetails
     */
    select?: ClientDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientDetails
     */
    omit?: ClientDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientDetailsInclude<ExtArgs> | null
    /**
     * Filter, which ClientDetails to fetch.
     */
    where: ClientDetailsWhereUniqueInput
  }

  /**
   * ClientDetails findUniqueOrThrow
   */
  export type ClientDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientDetails
     */
    select?: ClientDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientDetails
     */
    omit?: ClientDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientDetailsInclude<ExtArgs> | null
    /**
     * Filter, which ClientDetails to fetch.
     */
    where: ClientDetailsWhereUniqueInput
  }

  /**
   * ClientDetails findFirst
   */
  export type ClientDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientDetails
     */
    select?: ClientDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientDetails
     */
    omit?: ClientDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientDetailsInclude<ExtArgs> | null
    /**
     * Filter, which ClientDetails to fetch.
     */
    where?: ClientDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientDetails to fetch.
     */
    orderBy?: ClientDetailsOrderByWithRelationInput | ClientDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientDetails.
     */
    cursor?: ClientDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientDetails.
     */
    distinct?: ClientDetailsScalarFieldEnum | ClientDetailsScalarFieldEnum[]
  }

  /**
   * ClientDetails findFirstOrThrow
   */
  export type ClientDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientDetails
     */
    select?: ClientDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientDetails
     */
    omit?: ClientDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientDetailsInclude<ExtArgs> | null
    /**
     * Filter, which ClientDetails to fetch.
     */
    where?: ClientDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientDetails to fetch.
     */
    orderBy?: ClientDetailsOrderByWithRelationInput | ClientDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientDetails.
     */
    cursor?: ClientDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientDetails.
     */
    distinct?: ClientDetailsScalarFieldEnum | ClientDetailsScalarFieldEnum[]
  }

  /**
   * ClientDetails findMany
   */
  export type ClientDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientDetails
     */
    select?: ClientDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientDetails
     */
    omit?: ClientDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientDetailsInclude<ExtArgs> | null
    /**
     * Filter, which ClientDetails to fetch.
     */
    where?: ClientDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientDetails to fetch.
     */
    orderBy?: ClientDetailsOrderByWithRelationInput | ClientDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClientDetails.
     */
    cursor?: ClientDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientDetails.
     */
    skip?: number
    distinct?: ClientDetailsScalarFieldEnum | ClientDetailsScalarFieldEnum[]
  }

  /**
   * ClientDetails create
   */
  export type ClientDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientDetails
     */
    select?: ClientDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientDetails
     */
    omit?: ClientDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a ClientDetails.
     */
    data: XOR<ClientDetailsCreateInput, ClientDetailsUncheckedCreateInput>
  }

  /**
   * ClientDetails createMany
   */
  export type ClientDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClientDetails.
     */
    data: ClientDetailsCreateManyInput | ClientDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClientDetails createManyAndReturn
   */
  export type ClientDetailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientDetails
     */
    select?: ClientDetailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientDetails
     */
    omit?: ClientDetailsOmit<ExtArgs> | null
    /**
     * The data used to create many ClientDetails.
     */
    data: ClientDetailsCreateManyInput | ClientDetailsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientDetailsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClientDetails update
   */
  export type ClientDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientDetails
     */
    select?: ClientDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientDetails
     */
    omit?: ClientDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a ClientDetails.
     */
    data: XOR<ClientDetailsUpdateInput, ClientDetailsUncheckedUpdateInput>
    /**
     * Choose, which ClientDetails to update.
     */
    where: ClientDetailsWhereUniqueInput
  }

  /**
   * ClientDetails updateMany
   */
  export type ClientDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClientDetails.
     */
    data: XOR<ClientDetailsUpdateManyMutationInput, ClientDetailsUncheckedUpdateManyInput>
    /**
     * Filter which ClientDetails to update
     */
    where?: ClientDetailsWhereInput
    /**
     * Limit how many ClientDetails to update.
     */
    limit?: number
  }

  /**
   * ClientDetails updateManyAndReturn
   */
  export type ClientDetailsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientDetails
     */
    select?: ClientDetailsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientDetails
     */
    omit?: ClientDetailsOmit<ExtArgs> | null
    /**
     * The data used to update ClientDetails.
     */
    data: XOR<ClientDetailsUpdateManyMutationInput, ClientDetailsUncheckedUpdateManyInput>
    /**
     * Filter which ClientDetails to update
     */
    where?: ClientDetailsWhereInput
    /**
     * Limit how many ClientDetails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientDetailsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClientDetails upsert
   */
  export type ClientDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientDetails
     */
    select?: ClientDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientDetails
     */
    omit?: ClientDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the ClientDetails to update in case it exists.
     */
    where: ClientDetailsWhereUniqueInput
    /**
     * In case the ClientDetails found by the `where` argument doesn't exist, create a new ClientDetails with this data.
     */
    create: XOR<ClientDetailsCreateInput, ClientDetailsUncheckedCreateInput>
    /**
     * In case the ClientDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientDetailsUpdateInput, ClientDetailsUncheckedUpdateInput>
  }

  /**
   * ClientDetails delete
   */
  export type ClientDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientDetails
     */
    select?: ClientDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientDetails
     */
    omit?: ClientDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientDetailsInclude<ExtArgs> | null
    /**
     * Filter which ClientDetails to delete.
     */
    where: ClientDetailsWhereUniqueInput
  }

  /**
   * ClientDetails deleteMany
   */
  export type ClientDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientDetails to delete
     */
    where?: ClientDetailsWhereInput
    /**
     * Limit how many ClientDetails to delete.
     */
    limit?: number
  }

  /**
   * ClientDetails.country
   */
  export type ClientDetails$countryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    where?: CountryWhereInput
  }

  /**
   * ClientDetails without action
   */
  export type ClientDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientDetails
     */
    select?: ClientDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientDetails
     */
    omit?: ClientDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientDetailsInclude<ExtArgs> | null
  }


  /**
   * Model ClientInfoLog
   */

  export type AggregateClientInfoLog = {
    _count: ClientInfoLogCountAggregateOutputType | null
    _avg: ClientInfoLogAvgAggregateOutputType | null
    _sum: ClientInfoLogSumAggregateOutputType | null
    _min: ClientInfoLogMinAggregateOutputType | null
    _max: ClientInfoLogMaxAggregateOutputType | null
  }

  export type ClientInfoLogAvgAggregateOutputType = {
    ClientInfoLogId: number | null
    clientId: number | null
    createdBy: number | null
  }

  export type ClientInfoLogSumAggregateOutputType = {
    ClientInfoLogId: bigint | null
    clientId: bigint | null
    createdBy: bigint | null
  }

  export type ClientInfoLogMinAggregateOutputType = {
    ClientInfoLogId: bigint | null
    clientId: bigint | null
    renewalDate: Date | null
    createdAt: Date | null
    createdBy: bigint | null
  }

  export type ClientInfoLogMaxAggregateOutputType = {
    ClientInfoLogId: bigint | null
    clientId: bigint | null
    renewalDate: Date | null
    createdAt: Date | null
    createdBy: bigint | null
  }

  export type ClientInfoLogCountAggregateOutputType = {
    ClientInfoLogId: number
    clientId: number
    renewalDate: number
    createdAt: number
    createdBy: number
    _all: number
  }


  export type ClientInfoLogAvgAggregateInputType = {
    ClientInfoLogId?: true
    clientId?: true
    createdBy?: true
  }

  export type ClientInfoLogSumAggregateInputType = {
    ClientInfoLogId?: true
    clientId?: true
    createdBy?: true
  }

  export type ClientInfoLogMinAggregateInputType = {
    ClientInfoLogId?: true
    clientId?: true
    renewalDate?: true
    createdAt?: true
    createdBy?: true
  }

  export type ClientInfoLogMaxAggregateInputType = {
    ClientInfoLogId?: true
    clientId?: true
    renewalDate?: true
    createdAt?: true
    createdBy?: true
  }

  export type ClientInfoLogCountAggregateInputType = {
    ClientInfoLogId?: true
    clientId?: true
    renewalDate?: true
    createdAt?: true
    createdBy?: true
    _all?: true
  }

  export type ClientInfoLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientInfoLog to aggregate.
     */
    where?: ClientInfoLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientInfoLogs to fetch.
     */
    orderBy?: ClientInfoLogOrderByWithRelationInput | ClientInfoLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientInfoLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientInfoLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientInfoLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClientInfoLogs
    **/
    _count?: true | ClientInfoLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientInfoLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientInfoLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientInfoLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientInfoLogMaxAggregateInputType
  }

  export type GetClientInfoLogAggregateType<T extends ClientInfoLogAggregateArgs> = {
        [P in keyof T & keyof AggregateClientInfoLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientInfoLog[P]>
      : GetScalarType<T[P], AggregateClientInfoLog[P]>
  }




  export type ClientInfoLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientInfoLogWhereInput
    orderBy?: ClientInfoLogOrderByWithAggregationInput | ClientInfoLogOrderByWithAggregationInput[]
    by: ClientInfoLogScalarFieldEnum[] | ClientInfoLogScalarFieldEnum
    having?: ClientInfoLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientInfoLogCountAggregateInputType | true
    _avg?: ClientInfoLogAvgAggregateInputType
    _sum?: ClientInfoLogSumAggregateInputType
    _min?: ClientInfoLogMinAggregateInputType
    _max?: ClientInfoLogMaxAggregateInputType
  }

  export type ClientInfoLogGroupByOutputType = {
    ClientInfoLogId: bigint
    clientId: bigint | null
    renewalDate: Date | null
    createdAt: Date | null
    createdBy: bigint | null
    _count: ClientInfoLogCountAggregateOutputType | null
    _avg: ClientInfoLogAvgAggregateOutputType | null
    _sum: ClientInfoLogSumAggregateOutputType | null
    _min: ClientInfoLogMinAggregateOutputType | null
    _max: ClientInfoLogMaxAggregateOutputType | null
  }

  type GetClientInfoLogGroupByPayload<T extends ClientInfoLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientInfoLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientInfoLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientInfoLogGroupByOutputType[P]>
            : GetScalarType<T[P], ClientInfoLogGroupByOutputType[P]>
        }
      >
    >


  export type ClientInfoLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ClientInfoLogId?: boolean
    clientId?: boolean
    renewalDate?: boolean
    createdAt?: boolean
    createdBy?: boolean
    client?: boolean | ClientInfoLog$clientArgs<ExtArgs>
    createdUser?: boolean | ClientInfoLog$createdUserArgs<ExtArgs>
  }, ExtArgs["result"]["clientInfoLog"]>

  export type ClientInfoLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ClientInfoLogId?: boolean
    clientId?: boolean
    renewalDate?: boolean
    createdAt?: boolean
    createdBy?: boolean
    client?: boolean | ClientInfoLog$clientArgs<ExtArgs>
    createdUser?: boolean | ClientInfoLog$createdUserArgs<ExtArgs>
  }, ExtArgs["result"]["clientInfoLog"]>

  export type ClientInfoLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ClientInfoLogId?: boolean
    clientId?: boolean
    renewalDate?: boolean
    createdAt?: boolean
    createdBy?: boolean
    client?: boolean | ClientInfoLog$clientArgs<ExtArgs>
    createdUser?: boolean | ClientInfoLog$createdUserArgs<ExtArgs>
  }, ExtArgs["result"]["clientInfoLog"]>

  export type ClientInfoLogSelectScalar = {
    ClientInfoLogId?: boolean
    clientId?: boolean
    renewalDate?: boolean
    createdAt?: boolean
    createdBy?: boolean
  }

  export type ClientInfoLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ClientInfoLogId" | "clientId" | "renewalDate" | "createdAt" | "createdBy", ExtArgs["result"]["clientInfoLog"]>
  export type ClientInfoLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientInfoLog$clientArgs<ExtArgs>
    createdUser?: boolean | ClientInfoLog$createdUserArgs<ExtArgs>
  }
  export type ClientInfoLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientInfoLog$clientArgs<ExtArgs>
    createdUser?: boolean | ClientInfoLog$createdUserArgs<ExtArgs>
  }
  export type ClientInfoLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientInfoLog$clientArgs<ExtArgs>
    createdUser?: boolean | ClientInfoLog$createdUserArgs<ExtArgs>
  }

  export type $ClientInfoLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClientInfoLog"
    objects: {
      client: Prisma.$ClientInfoPayload<ExtArgs> | null
      createdUser: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      ClientInfoLogId: bigint
      clientId: bigint | null
      renewalDate: Date | null
      createdAt: Date | null
      createdBy: bigint | null
    }, ExtArgs["result"]["clientInfoLog"]>
    composites: {}
  }

  type ClientInfoLogGetPayload<S extends boolean | null | undefined | ClientInfoLogDefaultArgs> = $Result.GetResult<Prisma.$ClientInfoLogPayload, S>

  type ClientInfoLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientInfoLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientInfoLogCountAggregateInputType | true
    }

  export interface ClientInfoLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClientInfoLog'], meta: { name: 'ClientInfoLog' } }
    /**
     * Find zero or one ClientInfoLog that matches the filter.
     * @param {ClientInfoLogFindUniqueArgs} args - Arguments to find a ClientInfoLog
     * @example
     * // Get one ClientInfoLog
     * const clientInfoLog = await prisma.clientInfoLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientInfoLogFindUniqueArgs>(args: SelectSubset<T, ClientInfoLogFindUniqueArgs<ExtArgs>>): Prisma__ClientInfoLogClient<$Result.GetResult<Prisma.$ClientInfoLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClientInfoLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientInfoLogFindUniqueOrThrowArgs} args - Arguments to find a ClientInfoLog
     * @example
     * // Get one ClientInfoLog
     * const clientInfoLog = await prisma.clientInfoLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientInfoLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientInfoLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientInfoLogClient<$Result.GetResult<Prisma.$ClientInfoLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientInfoLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientInfoLogFindFirstArgs} args - Arguments to find a ClientInfoLog
     * @example
     * // Get one ClientInfoLog
     * const clientInfoLog = await prisma.clientInfoLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientInfoLogFindFirstArgs>(args?: SelectSubset<T, ClientInfoLogFindFirstArgs<ExtArgs>>): Prisma__ClientInfoLogClient<$Result.GetResult<Prisma.$ClientInfoLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientInfoLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientInfoLogFindFirstOrThrowArgs} args - Arguments to find a ClientInfoLog
     * @example
     * // Get one ClientInfoLog
     * const clientInfoLog = await prisma.clientInfoLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientInfoLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientInfoLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientInfoLogClient<$Result.GetResult<Prisma.$ClientInfoLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClientInfoLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientInfoLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClientInfoLogs
     * const clientInfoLogs = await prisma.clientInfoLog.findMany()
     * 
     * // Get first 10 ClientInfoLogs
     * const clientInfoLogs = await prisma.clientInfoLog.findMany({ take: 10 })
     * 
     * // Only select the `ClientInfoLogId`
     * const clientInfoLogWithClientInfoLogIdOnly = await prisma.clientInfoLog.findMany({ select: { ClientInfoLogId: true } })
     * 
     */
    findMany<T extends ClientInfoLogFindManyArgs>(args?: SelectSubset<T, ClientInfoLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientInfoLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClientInfoLog.
     * @param {ClientInfoLogCreateArgs} args - Arguments to create a ClientInfoLog.
     * @example
     * // Create one ClientInfoLog
     * const ClientInfoLog = await prisma.clientInfoLog.create({
     *   data: {
     *     // ... data to create a ClientInfoLog
     *   }
     * })
     * 
     */
    create<T extends ClientInfoLogCreateArgs>(args: SelectSubset<T, ClientInfoLogCreateArgs<ExtArgs>>): Prisma__ClientInfoLogClient<$Result.GetResult<Prisma.$ClientInfoLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClientInfoLogs.
     * @param {ClientInfoLogCreateManyArgs} args - Arguments to create many ClientInfoLogs.
     * @example
     * // Create many ClientInfoLogs
     * const clientInfoLog = await prisma.clientInfoLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientInfoLogCreateManyArgs>(args?: SelectSubset<T, ClientInfoLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClientInfoLogs and returns the data saved in the database.
     * @param {ClientInfoLogCreateManyAndReturnArgs} args - Arguments to create many ClientInfoLogs.
     * @example
     * // Create many ClientInfoLogs
     * const clientInfoLog = await prisma.clientInfoLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClientInfoLogs and only return the `ClientInfoLogId`
     * const clientInfoLogWithClientInfoLogIdOnly = await prisma.clientInfoLog.createManyAndReturn({
     *   select: { ClientInfoLogId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientInfoLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientInfoLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientInfoLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClientInfoLog.
     * @param {ClientInfoLogDeleteArgs} args - Arguments to delete one ClientInfoLog.
     * @example
     * // Delete one ClientInfoLog
     * const ClientInfoLog = await prisma.clientInfoLog.delete({
     *   where: {
     *     // ... filter to delete one ClientInfoLog
     *   }
     * })
     * 
     */
    delete<T extends ClientInfoLogDeleteArgs>(args: SelectSubset<T, ClientInfoLogDeleteArgs<ExtArgs>>): Prisma__ClientInfoLogClient<$Result.GetResult<Prisma.$ClientInfoLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClientInfoLog.
     * @param {ClientInfoLogUpdateArgs} args - Arguments to update one ClientInfoLog.
     * @example
     * // Update one ClientInfoLog
     * const clientInfoLog = await prisma.clientInfoLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientInfoLogUpdateArgs>(args: SelectSubset<T, ClientInfoLogUpdateArgs<ExtArgs>>): Prisma__ClientInfoLogClient<$Result.GetResult<Prisma.$ClientInfoLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClientInfoLogs.
     * @param {ClientInfoLogDeleteManyArgs} args - Arguments to filter ClientInfoLogs to delete.
     * @example
     * // Delete a few ClientInfoLogs
     * const { count } = await prisma.clientInfoLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientInfoLogDeleteManyArgs>(args?: SelectSubset<T, ClientInfoLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientInfoLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientInfoLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClientInfoLogs
     * const clientInfoLog = await prisma.clientInfoLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientInfoLogUpdateManyArgs>(args: SelectSubset<T, ClientInfoLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientInfoLogs and returns the data updated in the database.
     * @param {ClientInfoLogUpdateManyAndReturnArgs} args - Arguments to update many ClientInfoLogs.
     * @example
     * // Update many ClientInfoLogs
     * const clientInfoLog = await prisma.clientInfoLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClientInfoLogs and only return the `ClientInfoLogId`
     * const clientInfoLogWithClientInfoLogIdOnly = await prisma.clientInfoLog.updateManyAndReturn({
     *   select: { ClientInfoLogId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientInfoLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientInfoLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientInfoLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClientInfoLog.
     * @param {ClientInfoLogUpsertArgs} args - Arguments to update or create a ClientInfoLog.
     * @example
     * // Update or create a ClientInfoLog
     * const clientInfoLog = await prisma.clientInfoLog.upsert({
     *   create: {
     *     // ... data to create a ClientInfoLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClientInfoLog we want to update
     *   }
     * })
     */
    upsert<T extends ClientInfoLogUpsertArgs>(args: SelectSubset<T, ClientInfoLogUpsertArgs<ExtArgs>>): Prisma__ClientInfoLogClient<$Result.GetResult<Prisma.$ClientInfoLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClientInfoLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientInfoLogCountArgs} args - Arguments to filter ClientInfoLogs to count.
     * @example
     * // Count the number of ClientInfoLogs
     * const count = await prisma.clientInfoLog.count({
     *   where: {
     *     // ... the filter for the ClientInfoLogs we want to count
     *   }
     * })
    **/
    count<T extends ClientInfoLogCountArgs>(
      args?: Subset<T, ClientInfoLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientInfoLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClientInfoLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientInfoLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientInfoLogAggregateArgs>(args: Subset<T, ClientInfoLogAggregateArgs>): Prisma.PrismaPromise<GetClientInfoLogAggregateType<T>>

    /**
     * Group by ClientInfoLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientInfoLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientInfoLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientInfoLogGroupByArgs['orderBy'] }
        : { orderBy?: ClientInfoLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientInfoLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientInfoLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClientInfoLog model
   */
  readonly fields: ClientInfoLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClientInfoLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientInfoLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientInfoLog$clientArgs<ExtArgs> = {}>(args?: Subset<T, ClientInfoLog$clientArgs<ExtArgs>>): Prisma__ClientInfoClient<$Result.GetResult<Prisma.$ClientInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    createdUser<T extends ClientInfoLog$createdUserArgs<ExtArgs> = {}>(args?: Subset<T, ClientInfoLog$createdUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ClientInfoLog model
   */
  interface ClientInfoLogFieldRefs {
    readonly ClientInfoLogId: FieldRef<"ClientInfoLog", 'BigInt'>
    readonly clientId: FieldRef<"ClientInfoLog", 'BigInt'>
    readonly renewalDate: FieldRef<"ClientInfoLog", 'DateTime'>
    readonly createdAt: FieldRef<"ClientInfoLog", 'DateTime'>
    readonly createdBy: FieldRef<"ClientInfoLog", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * ClientInfoLog findUnique
   */
  export type ClientInfoLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInfoLog
     */
    select?: ClientInfoLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInfoLog
     */
    omit?: ClientInfoLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInfoLogInclude<ExtArgs> | null
    /**
     * Filter, which ClientInfoLog to fetch.
     */
    where: ClientInfoLogWhereUniqueInput
  }

  /**
   * ClientInfoLog findUniqueOrThrow
   */
  export type ClientInfoLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInfoLog
     */
    select?: ClientInfoLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInfoLog
     */
    omit?: ClientInfoLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInfoLogInclude<ExtArgs> | null
    /**
     * Filter, which ClientInfoLog to fetch.
     */
    where: ClientInfoLogWhereUniqueInput
  }

  /**
   * ClientInfoLog findFirst
   */
  export type ClientInfoLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInfoLog
     */
    select?: ClientInfoLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInfoLog
     */
    omit?: ClientInfoLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInfoLogInclude<ExtArgs> | null
    /**
     * Filter, which ClientInfoLog to fetch.
     */
    where?: ClientInfoLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientInfoLogs to fetch.
     */
    orderBy?: ClientInfoLogOrderByWithRelationInput | ClientInfoLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientInfoLogs.
     */
    cursor?: ClientInfoLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientInfoLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientInfoLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientInfoLogs.
     */
    distinct?: ClientInfoLogScalarFieldEnum | ClientInfoLogScalarFieldEnum[]
  }

  /**
   * ClientInfoLog findFirstOrThrow
   */
  export type ClientInfoLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInfoLog
     */
    select?: ClientInfoLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInfoLog
     */
    omit?: ClientInfoLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInfoLogInclude<ExtArgs> | null
    /**
     * Filter, which ClientInfoLog to fetch.
     */
    where?: ClientInfoLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientInfoLogs to fetch.
     */
    orderBy?: ClientInfoLogOrderByWithRelationInput | ClientInfoLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientInfoLogs.
     */
    cursor?: ClientInfoLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientInfoLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientInfoLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientInfoLogs.
     */
    distinct?: ClientInfoLogScalarFieldEnum | ClientInfoLogScalarFieldEnum[]
  }

  /**
   * ClientInfoLog findMany
   */
  export type ClientInfoLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInfoLog
     */
    select?: ClientInfoLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInfoLog
     */
    omit?: ClientInfoLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInfoLogInclude<ExtArgs> | null
    /**
     * Filter, which ClientInfoLogs to fetch.
     */
    where?: ClientInfoLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientInfoLogs to fetch.
     */
    orderBy?: ClientInfoLogOrderByWithRelationInput | ClientInfoLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClientInfoLogs.
     */
    cursor?: ClientInfoLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientInfoLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientInfoLogs.
     */
    skip?: number
    distinct?: ClientInfoLogScalarFieldEnum | ClientInfoLogScalarFieldEnum[]
  }

  /**
   * ClientInfoLog create
   */
  export type ClientInfoLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInfoLog
     */
    select?: ClientInfoLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInfoLog
     */
    omit?: ClientInfoLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInfoLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ClientInfoLog.
     */
    data?: XOR<ClientInfoLogCreateInput, ClientInfoLogUncheckedCreateInput>
  }

  /**
   * ClientInfoLog createMany
   */
  export type ClientInfoLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClientInfoLogs.
     */
    data: ClientInfoLogCreateManyInput | ClientInfoLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClientInfoLog createManyAndReturn
   */
  export type ClientInfoLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInfoLog
     */
    select?: ClientInfoLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInfoLog
     */
    omit?: ClientInfoLogOmit<ExtArgs> | null
    /**
     * The data used to create many ClientInfoLogs.
     */
    data: ClientInfoLogCreateManyInput | ClientInfoLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInfoLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClientInfoLog update
   */
  export type ClientInfoLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInfoLog
     */
    select?: ClientInfoLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInfoLog
     */
    omit?: ClientInfoLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInfoLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ClientInfoLog.
     */
    data: XOR<ClientInfoLogUpdateInput, ClientInfoLogUncheckedUpdateInput>
    /**
     * Choose, which ClientInfoLog to update.
     */
    where: ClientInfoLogWhereUniqueInput
  }

  /**
   * ClientInfoLog updateMany
   */
  export type ClientInfoLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClientInfoLogs.
     */
    data: XOR<ClientInfoLogUpdateManyMutationInput, ClientInfoLogUncheckedUpdateManyInput>
    /**
     * Filter which ClientInfoLogs to update
     */
    where?: ClientInfoLogWhereInput
    /**
     * Limit how many ClientInfoLogs to update.
     */
    limit?: number
  }

  /**
   * ClientInfoLog updateManyAndReturn
   */
  export type ClientInfoLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInfoLog
     */
    select?: ClientInfoLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInfoLog
     */
    omit?: ClientInfoLogOmit<ExtArgs> | null
    /**
     * The data used to update ClientInfoLogs.
     */
    data: XOR<ClientInfoLogUpdateManyMutationInput, ClientInfoLogUncheckedUpdateManyInput>
    /**
     * Filter which ClientInfoLogs to update
     */
    where?: ClientInfoLogWhereInput
    /**
     * Limit how many ClientInfoLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInfoLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClientInfoLog upsert
   */
  export type ClientInfoLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInfoLog
     */
    select?: ClientInfoLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInfoLog
     */
    omit?: ClientInfoLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInfoLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ClientInfoLog to update in case it exists.
     */
    where: ClientInfoLogWhereUniqueInput
    /**
     * In case the ClientInfoLog found by the `where` argument doesn't exist, create a new ClientInfoLog with this data.
     */
    create: XOR<ClientInfoLogCreateInput, ClientInfoLogUncheckedCreateInput>
    /**
     * In case the ClientInfoLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientInfoLogUpdateInput, ClientInfoLogUncheckedUpdateInput>
  }

  /**
   * ClientInfoLog delete
   */
  export type ClientInfoLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInfoLog
     */
    select?: ClientInfoLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInfoLog
     */
    omit?: ClientInfoLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInfoLogInclude<ExtArgs> | null
    /**
     * Filter which ClientInfoLog to delete.
     */
    where: ClientInfoLogWhereUniqueInput
  }

  /**
   * ClientInfoLog deleteMany
   */
  export type ClientInfoLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientInfoLogs to delete
     */
    where?: ClientInfoLogWhereInput
    /**
     * Limit how many ClientInfoLogs to delete.
     */
    limit?: number
  }

  /**
   * ClientInfoLog.client
   */
  export type ClientInfoLog$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInfo
     */
    select?: ClientInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInfo
     */
    omit?: ClientInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInfoInclude<ExtArgs> | null
    where?: ClientInfoWhereInput
  }

  /**
   * ClientInfoLog.createdUser
   */
  export type ClientInfoLog$createdUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ClientInfoLog without action
   */
  export type ClientInfoLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInfoLog
     */
    select?: ClientInfoLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInfoLog
     */
    omit?: ClientInfoLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInfoLogInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    UserID: number | null
    clientId: number | null
    roleId: number | null
    reportsTo: number | null
  }

  export type UserSumAggregateOutputType = {
    UserID: bigint | null
    clientId: bigint | null
    roleId: bigint | null
    reportsTo: bigint | null
  }

  export type UserMinAggregateOutputType = {
    UserID: bigint | null
    username: string | null
    email: string | null
    password: string | null
    phonenumber: string | null
    status: boolean | null
    clientId: bigint | null
    roleId: bigint | null
    createddate: Date | null
    updateddate: Date | null
    IsAdmin: boolean | null
    reportsTo: bigint | null
    person_name: string | null
    passwordResetToken: string | null
    passwordResetExpires: Date | null
  }

  export type UserMaxAggregateOutputType = {
    UserID: bigint | null
    username: string | null
    email: string | null
    password: string | null
    phonenumber: string | null
    status: boolean | null
    clientId: bigint | null
    roleId: bigint | null
    createddate: Date | null
    updateddate: Date | null
    IsAdmin: boolean | null
    reportsTo: bigint | null
    person_name: string | null
    passwordResetToken: string | null
    passwordResetExpires: Date | null
  }

  export type UserCountAggregateOutputType = {
    UserID: number
    username: number
    email: number
    password: number
    phonenumber: number
    status: number
    clientId: number
    roleId: number
    createddate: number
    updateddate: number
    IsAdmin: number
    reportsTo: number
    person_name: number
    passwordResetToken: number
    passwordResetExpires: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    UserID?: true
    clientId?: true
    roleId?: true
    reportsTo?: true
  }

  export type UserSumAggregateInputType = {
    UserID?: true
    clientId?: true
    roleId?: true
    reportsTo?: true
  }

  export type UserMinAggregateInputType = {
    UserID?: true
    username?: true
    email?: true
    password?: true
    phonenumber?: true
    status?: true
    clientId?: true
    roleId?: true
    createddate?: true
    updateddate?: true
    IsAdmin?: true
    reportsTo?: true
    person_name?: true
    passwordResetToken?: true
    passwordResetExpires?: true
  }

  export type UserMaxAggregateInputType = {
    UserID?: true
    username?: true
    email?: true
    password?: true
    phonenumber?: true
    status?: true
    clientId?: true
    roleId?: true
    createddate?: true
    updateddate?: true
    IsAdmin?: true
    reportsTo?: true
    person_name?: true
    passwordResetToken?: true
    passwordResetExpires?: true
  }

  export type UserCountAggregateInputType = {
    UserID?: true
    username?: true
    email?: true
    password?: true
    phonenumber?: true
    status?: true
    clientId?: true
    roleId?: true
    createddate?: true
    updateddate?: true
    IsAdmin?: true
    reportsTo?: true
    person_name?: true
    passwordResetToken?: true
    passwordResetExpires?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    UserID: bigint
    username: string
    email: string
    password: string
    phonenumber: string
    status: boolean
    clientId: bigint
    roleId: bigint
    createddate: Date
    updateddate: Date | null
    IsAdmin: boolean
    reportsTo: bigint | null
    person_name: string | null
    passwordResetToken: string | null
    passwordResetExpires: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    UserID?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    phonenumber?: boolean
    status?: boolean
    clientId?: boolean
    roleId?: boolean
    createddate?: boolean
    updateddate?: boolean
    IsAdmin?: boolean
    reportsTo?: boolean
    person_name?: boolean
    passwordResetToken?: boolean
    passwordResetExpires?: boolean
    ClientInfo?: boolean | ClientInfoDefaultArgs<ExtArgs>
    Role?: boolean | RoleDefaultArgs<ExtArgs>
    ReportsToUser?: boolean | User$ReportsToUserArgs<ExtArgs>
    Subordinates?: boolean | User$SubordinatesArgs<ExtArgs>
    roleuser?: boolean | User$roleuserArgs<ExtArgs>
    ClientInfoLog?: boolean | User$ClientInfoLogArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    UserID?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    phonenumber?: boolean
    status?: boolean
    clientId?: boolean
    roleId?: boolean
    createddate?: boolean
    updateddate?: boolean
    IsAdmin?: boolean
    reportsTo?: boolean
    person_name?: boolean
    passwordResetToken?: boolean
    passwordResetExpires?: boolean
    ClientInfo?: boolean | ClientInfoDefaultArgs<ExtArgs>
    Role?: boolean | RoleDefaultArgs<ExtArgs>
    ReportsToUser?: boolean | User$ReportsToUserArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    UserID?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    phonenumber?: boolean
    status?: boolean
    clientId?: boolean
    roleId?: boolean
    createddate?: boolean
    updateddate?: boolean
    IsAdmin?: boolean
    reportsTo?: boolean
    person_name?: boolean
    passwordResetToken?: boolean
    passwordResetExpires?: boolean
    ClientInfo?: boolean | ClientInfoDefaultArgs<ExtArgs>
    Role?: boolean | RoleDefaultArgs<ExtArgs>
    ReportsToUser?: boolean | User$ReportsToUserArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    UserID?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    phonenumber?: boolean
    status?: boolean
    clientId?: boolean
    roleId?: boolean
    createddate?: boolean
    updateddate?: boolean
    IsAdmin?: boolean
    reportsTo?: boolean
    person_name?: boolean
    passwordResetToken?: boolean
    passwordResetExpires?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"UserID" | "username" | "email" | "password" | "phonenumber" | "status" | "clientId" | "roleId" | "createddate" | "updateddate" | "IsAdmin" | "reportsTo" | "person_name" | "passwordResetToken" | "passwordResetExpires", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ClientInfo?: boolean | ClientInfoDefaultArgs<ExtArgs>
    Role?: boolean | RoleDefaultArgs<ExtArgs>
    ReportsToUser?: boolean | User$ReportsToUserArgs<ExtArgs>
    Subordinates?: boolean | User$SubordinatesArgs<ExtArgs>
    roleuser?: boolean | User$roleuserArgs<ExtArgs>
    ClientInfoLog?: boolean | User$ClientInfoLogArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ClientInfo?: boolean | ClientInfoDefaultArgs<ExtArgs>
    Role?: boolean | RoleDefaultArgs<ExtArgs>
    ReportsToUser?: boolean | User$ReportsToUserArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ClientInfo?: boolean | ClientInfoDefaultArgs<ExtArgs>
    Role?: boolean | RoleDefaultArgs<ExtArgs>
    ReportsToUser?: boolean | User$ReportsToUserArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      ClientInfo: Prisma.$ClientInfoPayload<ExtArgs>
      Role: Prisma.$RolePayload<ExtArgs>
      ReportsToUser: Prisma.$UserPayload<ExtArgs> | null
      Subordinates: Prisma.$UserPayload<ExtArgs>[]
      roleuser: Prisma.$RolePayload<ExtArgs>[]
      ClientInfoLog: Prisma.$ClientInfoLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      UserID: bigint
      username: string
      email: string
      password: string
      phonenumber: string
      status: boolean
      clientId: bigint
      roleId: bigint
      createddate: Date
      updateddate: Date | null
      IsAdmin: boolean
      reportsTo: bigint | null
      person_name: string | null
      passwordResetToken: string | null
      passwordResetExpires: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `UserID`
     * const userWithUserIDOnly = await prisma.user.findMany({ select: { UserID: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `UserID`
     * const userWithUserIDOnly = await prisma.user.createManyAndReturn({
     *   select: { UserID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `UserID`
     * const userWithUserIDOnly = await prisma.user.updateManyAndReturn({
     *   select: { UserID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ClientInfo<T extends ClientInfoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientInfoDefaultArgs<ExtArgs>>): Prisma__ClientInfoClient<$Result.GetResult<Prisma.$ClientInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ReportsToUser<T extends User$ReportsToUserArgs<ExtArgs> = {}>(args?: Subset<T, User$ReportsToUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Subordinates<T extends User$SubordinatesArgs<ExtArgs> = {}>(args?: Subset<T, User$SubordinatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    roleuser<T extends User$roleuserArgs<ExtArgs> = {}>(args?: Subset<T, User$roleuserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ClientInfoLog<T extends User$ClientInfoLogArgs<ExtArgs> = {}>(args?: Subset<T, User$ClientInfoLogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientInfoLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly UserID: FieldRef<"User", 'BigInt'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phonenumber: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'Boolean'>
    readonly clientId: FieldRef<"User", 'BigInt'>
    readonly roleId: FieldRef<"User", 'BigInt'>
    readonly createddate: FieldRef<"User", 'DateTime'>
    readonly updateddate: FieldRef<"User", 'DateTime'>
    readonly IsAdmin: FieldRef<"User", 'Boolean'>
    readonly reportsTo: FieldRef<"User", 'BigInt'>
    readonly person_name: FieldRef<"User", 'String'>
    readonly passwordResetToken: FieldRef<"User", 'String'>
    readonly passwordResetExpires: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.ReportsToUser
   */
  export type User$ReportsToUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * User.Subordinates
   */
  export type User$SubordinatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User.roleuser
   */
  export type User$roleuserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    cursor?: RoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * User.ClientInfoLog
   */
  export type User$ClientInfoLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInfoLog
     */
    select?: ClientInfoLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInfoLog
     */
    omit?: ClientInfoLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInfoLogInclude<ExtArgs> | null
    where?: ClientInfoLogWhereInput
    orderBy?: ClientInfoLogOrderByWithRelationInput | ClientInfoLogOrderByWithRelationInput[]
    cursor?: ClientInfoLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientInfoLogScalarFieldEnum | ClientInfoLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    RoleID: number | null
    clientId: number | null
    createdBy: number | null
  }

  export type RoleSumAggregateOutputType = {
    RoleID: bigint | null
    clientId: bigint | null
    createdBy: bigint | null
  }

  export type RoleMinAggregateOutputType = {
    RoleID: bigint | null
    rolename: string | null
    clientId: bigint | null
    createdBy: bigint | null
    createddate: Date | null
    updateddate: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    RoleID: bigint | null
    rolename: string | null
    clientId: bigint | null
    createdBy: bigint | null
    createddate: Date | null
    updateddate: Date | null
  }

  export type RoleCountAggregateOutputType = {
    RoleID: number
    rolename: number
    clientId: number
    createdBy: number
    createddate: number
    updateddate: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    RoleID?: true
    clientId?: true
    createdBy?: true
  }

  export type RoleSumAggregateInputType = {
    RoleID?: true
    clientId?: true
    createdBy?: true
  }

  export type RoleMinAggregateInputType = {
    RoleID?: true
    rolename?: true
    clientId?: true
    createdBy?: true
    createddate?: true
    updateddate?: true
  }

  export type RoleMaxAggregateInputType = {
    RoleID?: true
    rolename?: true
    clientId?: true
    createdBy?: true
    createddate?: true
    updateddate?: true
  }

  export type RoleCountAggregateInputType = {
    RoleID?: true
    rolename?: true
    clientId?: true
    createdBy?: true
    createddate?: true
    updateddate?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    RoleID: bigint
    rolename: string
    clientId: bigint | null
    createdBy: bigint | null
    createddate: Date | null
    updateddate: Date | null
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    RoleID?: boolean
    rolename?: boolean
    clientId?: boolean
    createdBy?: boolean
    createddate?: boolean
    updateddate?: boolean
    ClientInfo?: boolean | Role$ClientInfoArgs<ExtArgs>
    CreatedByUser?: boolean | Role$CreatedByUserArgs<ExtArgs>
    Users?: boolean | Role$UsersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    RoleID?: boolean
    rolename?: boolean
    clientId?: boolean
    createdBy?: boolean
    createddate?: boolean
    updateddate?: boolean
    ClientInfo?: boolean | Role$ClientInfoArgs<ExtArgs>
    CreatedByUser?: boolean | Role$CreatedByUserArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    RoleID?: boolean
    rolename?: boolean
    clientId?: boolean
    createdBy?: boolean
    createddate?: boolean
    updateddate?: boolean
    ClientInfo?: boolean | Role$ClientInfoArgs<ExtArgs>
    CreatedByUser?: boolean | Role$CreatedByUserArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    RoleID?: boolean
    rolename?: boolean
    clientId?: boolean
    createdBy?: boolean
    createddate?: boolean
    updateddate?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"RoleID" | "rolename" | "clientId" | "createdBy" | "createddate" | "updateddate", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ClientInfo?: boolean | Role$ClientInfoArgs<ExtArgs>
    CreatedByUser?: boolean | Role$CreatedByUserArgs<ExtArgs>
    Users?: boolean | Role$UsersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ClientInfo?: boolean | Role$ClientInfoArgs<ExtArgs>
    CreatedByUser?: boolean | Role$CreatedByUserArgs<ExtArgs>
  }
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ClientInfo?: boolean | Role$ClientInfoArgs<ExtArgs>
    CreatedByUser?: boolean | Role$CreatedByUserArgs<ExtArgs>
  }

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      ClientInfo: Prisma.$ClientInfoPayload<ExtArgs> | null
      CreatedByUser: Prisma.$UserPayload<ExtArgs> | null
      Users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      RoleID: bigint
      rolename: string
      clientId: bigint | null
      createdBy: bigint | null
      createddate: Date | null
      updateddate: Date | null
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `RoleID`
     * const roleWithRoleIDOnly = await prisma.role.findMany({ select: { RoleID: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `RoleID`
     * const roleWithRoleIDOnly = await prisma.role.createManyAndReturn({
     *   select: { RoleID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `RoleID`
     * const roleWithRoleIDOnly = await prisma.role.updateManyAndReturn({
     *   select: { RoleID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ClientInfo<T extends Role$ClientInfoArgs<ExtArgs> = {}>(args?: Subset<T, Role$ClientInfoArgs<ExtArgs>>): Prisma__ClientInfoClient<$Result.GetResult<Prisma.$ClientInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    CreatedByUser<T extends Role$CreatedByUserArgs<ExtArgs> = {}>(args?: Subset<T, Role$CreatedByUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Users<T extends Role$UsersArgs<ExtArgs> = {}>(args?: Subset<T, Role$UsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly RoleID: FieldRef<"Role", 'BigInt'>
    readonly rolename: FieldRef<"Role", 'String'>
    readonly clientId: FieldRef<"Role", 'BigInt'>
    readonly createdBy: FieldRef<"Role", 'BigInt'>
    readonly createddate: FieldRef<"Role", 'DateTime'>
    readonly updateddate: FieldRef<"Role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.ClientInfo
   */
  export type Role$ClientInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInfo
     */
    select?: ClientInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInfo
     */
    omit?: ClientInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInfoInclude<ExtArgs> | null
    where?: ClientInfoWhereInput
  }

  /**
   * Role.CreatedByUser
   */
  export type Role$CreatedByUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Role.Users
   */
  export type Role$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model Menu
   */

  export type AggregateMenu = {
    _count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  export type MenuAvgAggregateOutputType = {
    MenuID: number | null
  }

  export type MenuSumAggregateOutputType = {
    MenuID: bigint | null
  }

  export type MenuMinAggregateOutputType = {
    MenuID: bigint | null
    menu_name: string | null
    icon_code: string | null
    created_at: Date | null
  }

  export type MenuMaxAggregateOutputType = {
    MenuID: bigint | null
    menu_name: string | null
    icon_code: string | null
    created_at: Date | null
  }

  export type MenuCountAggregateOutputType = {
    MenuID: number
    menu_name: number
    icon_code: number
    created_at: number
    _all: number
  }


  export type MenuAvgAggregateInputType = {
    MenuID?: true
  }

  export type MenuSumAggregateInputType = {
    MenuID?: true
  }

  export type MenuMinAggregateInputType = {
    MenuID?: true
    menu_name?: true
    icon_code?: true
    created_at?: true
  }

  export type MenuMaxAggregateInputType = {
    MenuID?: true
    menu_name?: true
    icon_code?: true
    created_at?: true
  }

  export type MenuCountAggregateInputType = {
    MenuID?: true
    menu_name?: true
    icon_code?: true
    created_at?: true
    _all?: true
  }

  export type MenuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Menu to aggregate.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Menus
    **/
    _count?: true | MenuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuMaxAggregateInputType
  }

  export type GetMenuAggregateType<T extends MenuAggregateArgs> = {
        [P in keyof T & keyof AggregateMenu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenu[P]>
      : GetScalarType<T[P], AggregateMenu[P]>
  }




  export type MenuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuWhereInput
    orderBy?: MenuOrderByWithAggregationInput | MenuOrderByWithAggregationInput[]
    by: MenuScalarFieldEnum[] | MenuScalarFieldEnum
    having?: MenuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuCountAggregateInputType | true
    _avg?: MenuAvgAggregateInputType
    _sum?: MenuSumAggregateInputType
    _min?: MenuMinAggregateInputType
    _max?: MenuMaxAggregateInputType
  }

  export type MenuGroupByOutputType = {
    MenuID: bigint
    menu_name: string
    icon_code: string
    created_at: Date
    _count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  type GetMenuGroupByPayload<T extends MenuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuGroupByOutputType[P]>
            : GetScalarType<T[P], MenuGroupByOutputType[P]>
        }
      >
    >


  export type MenuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MenuID?: boolean
    menu_name?: boolean
    icon_code?: boolean
    created_at?: boolean
    MenuItems?: boolean | Menu$MenuItemsArgs<ExtArgs>
    _count?: boolean | MenuCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menu"]>

  export type MenuSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MenuID?: boolean
    menu_name?: boolean
    icon_code?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["menu"]>

  export type MenuSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MenuID?: boolean
    menu_name?: boolean
    icon_code?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["menu"]>

  export type MenuSelectScalar = {
    MenuID?: boolean
    menu_name?: boolean
    icon_code?: boolean
    created_at?: boolean
  }

  export type MenuOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"MenuID" | "menu_name" | "icon_code" | "created_at", ExtArgs["result"]["menu"]>
  export type MenuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MenuItems?: boolean | Menu$MenuItemsArgs<ExtArgs>
    _count?: boolean | MenuCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MenuIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MenuIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MenuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Menu"
    objects: {
      MenuItems: Prisma.$MenuItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      MenuID: bigint
      menu_name: string
      icon_code: string
      created_at: Date
    }, ExtArgs["result"]["menu"]>
    composites: {}
  }

  type MenuGetPayload<S extends boolean | null | undefined | MenuDefaultArgs> = $Result.GetResult<Prisma.$MenuPayload, S>

  type MenuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MenuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MenuCountAggregateInputType | true
    }

  export interface MenuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Menu'], meta: { name: 'Menu' } }
    /**
     * Find zero or one Menu that matches the filter.
     * @param {MenuFindUniqueArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MenuFindUniqueArgs>(args: SelectSubset<T, MenuFindUniqueArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Menu that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MenuFindUniqueOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MenuFindUniqueOrThrowArgs>(args: SelectSubset<T, MenuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Menu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindFirstArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MenuFindFirstArgs>(args?: SelectSubset<T, MenuFindFirstArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Menu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindFirstOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MenuFindFirstOrThrowArgs>(args?: SelectSubset<T, MenuFindFirstOrThrowArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Menus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Menus
     * const menus = await prisma.menu.findMany()
     * 
     * // Get first 10 Menus
     * const menus = await prisma.menu.findMany({ take: 10 })
     * 
     * // Only select the `MenuID`
     * const menuWithMenuIDOnly = await prisma.menu.findMany({ select: { MenuID: true } })
     * 
     */
    findMany<T extends MenuFindManyArgs>(args?: SelectSubset<T, MenuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Menu.
     * @param {MenuCreateArgs} args - Arguments to create a Menu.
     * @example
     * // Create one Menu
     * const Menu = await prisma.menu.create({
     *   data: {
     *     // ... data to create a Menu
     *   }
     * })
     * 
     */
    create<T extends MenuCreateArgs>(args: SelectSubset<T, MenuCreateArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Menus.
     * @param {MenuCreateManyArgs} args - Arguments to create many Menus.
     * @example
     * // Create many Menus
     * const menu = await prisma.menu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MenuCreateManyArgs>(args?: SelectSubset<T, MenuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Menus and returns the data saved in the database.
     * @param {MenuCreateManyAndReturnArgs} args - Arguments to create many Menus.
     * @example
     * // Create many Menus
     * const menu = await prisma.menu.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Menus and only return the `MenuID`
     * const menuWithMenuIDOnly = await prisma.menu.createManyAndReturn({
     *   select: { MenuID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MenuCreateManyAndReturnArgs>(args?: SelectSubset<T, MenuCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Menu.
     * @param {MenuDeleteArgs} args - Arguments to delete one Menu.
     * @example
     * // Delete one Menu
     * const Menu = await prisma.menu.delete({
     *   where: {
     *     // ... filter to delete one Menu
     *   }
     * })
     * 
     */
    delete<T extends MenuDeleteArgs>(args: SelectSubset<T, MenuDeleteArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Menu.
     * @param {MenuUpdateArgs} args - Arguments to update one Menu.
     * @example
     * // Update one Menu
     * const menu = await prisma.menu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MenuUpdateArgs>(args: SelectSubset<T, MenuUpdateArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Menus.
     * @param {MenuDeleteManyArgs} args - Arguments to filter Menus to delete.
     * @example
     * // Delete a few Menus
     * const { count } = await prisma.menu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MenuDeleteManyArgs>(args?: SelectSubset<T, MenuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Menus
     * const menu = await prisma.menu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MenuUpdateManyArgs>(args: SelectSubset<T, MenuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menus and returns the data updated in the database.
     * @param {MenuUpdateManyAndReturnArgs} args - Arguments to update many Menus.
     * @example
     * // Update many Menus
     * const menu = await prisma.menu.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Menus and only return the `MenuID`
     * const menuWithMenuIDOnly = await prisma.menu.updateManyAndReturn({
     *   select: { MenuID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MenuUpdateManyAndReturnArgs>(args: SelectSubset<T, MenuUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Menu.
     * @param {MenuUpsertArgs} args - Arguments to update or create a Menu.
     * @example
     * // Update or create a Menu
     * const menu = await prisma.menu.upsert({
     *   create: {
     *     // ... data to create a Menu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Menu we want to update
     *   }
     * })
     */
    upsert<T extends MenuUpsertArgs>(args: SelectSubset<T, MenuUpsertArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCountArgs} args - Arguments to filter Menus to count.
     * @example
     * // Count the number of Menus
     * const count = await prisma.menu.count({
     *   where: {
     *     // ... the filter for the Menus we want to count
     *   }
     * })
    **/
    count<T extends MenuCountArgs>(
      args?: Subset<T, MenuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MenuAggregateArgs>(args: Subset<T, MenuAggregateArgs>): Prisma.PrismaPromise<GetMenuAggregateType<T>>

    /**
     * Group by Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MenuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuGroupByArgs['orderBy'] }
        : { orderBy?: MenuGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MenuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Menu model
   */
  readonly fields: MenuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Menu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    MenuItems<T extends Menu$MenuItemsArgs<ExtArgs> = {}>(args?: Subset<T, Menu$MenuItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Menu model
   */
  interface MenuFieldRefs {
    readonly MenuID: FieldRef<"Menu", 'BigInt'>
    readonly menu_name: FieldRef<"Menu", 'String'>
    readonly icon_code: FieldRef<"Menu", 'String'>
    readonly created_at: FieldRef<"Menu", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Menu findUnique
   */
  export type MenuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu findUniqueOrThrow
   */
  export type MenuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu findFirst
   */
  export type MenuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Menus.
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Menus.
     */
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * Menu findFirstOrThrow
   */
  export type MenuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Menus.
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Menus.
     */
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * Menu findMany
   */
  export type MenuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menus to fetch.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Menus.
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * Menu create
   */
  export type MenuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * The data needed to create a Menu.
     */
    data: XOR<MenuCreateInput, MenuUncheckedCreateInput>
  }

  /**
   * Menu createMany
   */
  export type MenuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Menus.
     */
    data: MenuCreateManyInput | MenuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Menu createManyAndReturn
   */
  export type MenuCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * The data used to create many Menus.
     */
    data: MenuCreateManyInput | MenuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Menu update
   */
  export type MenuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * The data needed to update a Menu.
     */
    data: XOR<MenuUpdateInput, MenuUncheckedUpdateInput>
    /**
     * Choose, which Menu to update.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu updateMany
   */
  export type MenuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Menus.
     */
    data: XOR<MenuUpdateManyMutationInput, MenuUncheckedUpdateManyInput>
    /**
     * Filter which Menus to update
     */
    where?: MenuWhereInput
    /**
     * Limit how many Menus to update.
     */
    limit?: number
  }

  /**
   * Menu updateManyAndReturn
   */
  export type MenuUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * The data used to update Menus.
     */
    data: XOR<MenuUpdateManyMutationInput, MenuUncheckedUpdateManyInput>
    /**
     * Filter which Menus to update
     */
    where?: MenuWhereInput
    /**
     * Limit how many Menus to update.
     */
    limit?: number
  }

  /**
   * Menu upsert
   */
  export type MenuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * The filter to search for the Menu to update in case it exists.
     */
    where: MenuWhereUniqueInput
    /**
     * In case the Menu found by the `where` argument doesn't exist, create a new Menu with this data.
     */
    create: XOR<MenuCreateInput, MenuUncheckedCreateInput>
    /**
     * In case the Menu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenuUpdateInput, MenuUncheckedUpdateInput>
  }

  /**
   * Menu delete
   */
  export type MenuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter which Menu to delete.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu deleteMany
   */
  export type MenuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Menus to delete
     */
    where?: MenuWhereInput
    /**
     * Limit how many Menus to delete.
     */
    limit?: number
  }

  /**
   * Menu.MenuItems
   */
  export type Menu$MenuItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    where?: MenuItemWhereInput
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    cursor?: MenuItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * Menu without action
   */
  export type MenuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
  }


  /**
   * Model MenuItem
   */

  export type AggregateMenuItem = {
    _count: MenuItemCountAggregateOutputType | null
    _avg: MenuItemAvgAggregateOutputType | null
    _sum: MenuItemSumAggregateOutputType | null
    _min: MenuItemMinAggregateOutputType | null
    _max: MenuItemMaxAggregateOutputType | null
  }

  export type MenuItemAvgAggregateOutputType = {
    MenuItemID: number | null
    menuId: number | null
    sort: number | null
    status: number | null
  }

  export type MenuItemSumAggregateOutputType = {
    MenuItemID: bigint | null
    menuId: bigint | null
    sort: number | null
    status: number | null
  }

  export type MenuItemMinAggregateOutputType = {
    MenuItemID: bigint | null
    menuId: bigint | null
    display_name: string | null
    action_url: string | null
    sort: number | null
    created_at: Date | null
    icon_code: string | null
    status: number | null
  }

  export type MenuItemMaxAggregateOutputType = {
    MenuItemID: bigint | null
    menuId: bigint | null
    display_name: string | null
    action_url: string | null
    sort: number | null
    created_at: Date | null
    icon_code: string | null
    status: number | null
  }

  export type MenuItemCountAggregateOutputType = {
    MenuItemID: number
    menuId: number
    display_name: number
    action_url: number
    sort: number
    created_at: number
    icon_code: number
    status: number
    _all: number
  }


  export type MenuItemAvgAggregateInputType = {
    MenuItemID?: true
    menuId?: true
    sort?: true
    status?: true
  }

  export type MenuItemSumAggregateInputType = {
    MenuItemID?: true
    menuId?: true
    sort?: true
    status?: true
  }

  export type MenuItemMinAggregateInputType = {
    MenuItemID?: true
    menuId?: true
    display_name?: true
    action_url?: true
    sort?: true
    created_at?: true
    icon_code?: true
    status?: true
  }

  export type MenuItemMaxAggregateInputType = {
    MenuItemID?: true
    menuId?: true
    display_name?: true
    action_url?: true
    sort?: true
    created_at?: true
    icon_code?: true
    status?: true
  }

  export type MenuItemCountAggregateInputType = {
    MenuItemID?: true
    menuId?: true
    display_name?: true
    action_url?: true
    sort?: true
    created_at?: true
    icon_code?: true
    status?: true
    _all?: true
  }

  export type MenuItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuItem to aggregate.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MenuItems
    **/
    _count?: true | MenuItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuItemMaxAggregateInputType
  }

  export type GetMenuItemAggregateType<T extends MenuItemAggregateArgs> = {
        [P in keyof T & keyof AggregateMenuItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenuItem[P]>
      : GetScalarType<T[P], AggregateMenuItem[P]>
  }




  export type MenuItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuItemWhereInput
    orderBy?: MenuItemOrderByWithAggregationInput | MenuItemOrderByWithAggregationInput[]
    by: MenuItemScalarFieldEnum[] | MenuItemScalarFieldEnum
    having?: MenuItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuItemCountAggregateInputType | true
    _avg?: MenuItemAvgAggregateInputType
    _sum?: MenuItemSumAggregateInputType
    _min?: MenuItemMinAggregateInputType
    _max?: MenuItemMaxAggregateInputType
  }

  export type MenuItemGroupByOutputType = {
    MenuItemID: bigint
    menuId: bigint
    display_name: string
    action_url: string
    sort: number
    created_at: Date
    icon_code: string | null
    status: number
    _count: MenuItemCountAggregateOutputType | null
    _avg: MenuItemAvgAggregateOutputType | null
    _sum: MenuItemSumAggregateOutputType | null
    _min: MenuItemMinAggregateOutputType | null
    _max: MenuItemMaxAggregateOutputType | null
  }

  type GetMenuItemGroupByPayload<T extends MenuItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuItemGroupByOutputType[P]>
            : GetScalarType<T[P], MenuItemGroupByOutputType[P]>
        }
      >
    >


  export type MenuItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MenuItemID?: boolean
    menuId?: boolean
    display_name?: boolean
    action_url?: boolean
    sort?: boolean
    created_at?: boolean
    icon_code?: boolean
    status?: boolean
    Menu?: boolean | MenuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuItem"]>

  export type MenuItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MenuItemID?: boolean
    menuId?: boolean
    display_name?: boolean
    action_url?: boolean
    sort?: boolean
    created_at?: boolean
    icon_code?: boolean
    status?: boolean
    Menu?: boolean | MenuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuItem"]>

  export type MenuItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MenuItemID?: boolean
    menuId?: boolean
    display_name?: boolean
    action_url?: boolean
    sort?: boolean
    created_at?: boolean
    icon_code?: boolean
    status?: boolean
    Menu?: boolean | MenuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuItem"]>

  export type MenuItemSelectScalar = {
    MenuItemID?: boolean
    menuId?: boolean
    display_name?: boolean
    action_url?: boolean
    sort?: boolean
    created_at?: boolean
    icon_code?: boolean
    status?: boolean
  }

  export type MenuItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"MenuItemID" | "menuId" | "display_name" | "action_url" | "sort" | "created_at" | "icon_code" | "status", ExtArgs["result"]["menuItem"]>
  export type MenuItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Menu?: boolean | MenuDefaultArgs<ExtArgs>
  }
  export type MenuItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Menu?: boolean | MenuDefaultArgs<ExtArgs>
  }
  export type MenuItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Menu?: boolean | MenuDefaultArgs<ExtArgs>
  }

  export type $MenuItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MenuItem"
    objects: {
      Menu: Prisma.$MenuPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      MenuItemID: bigint
      menuId: bigint
      display_name: string
      action_url: string
      sort: number
      created_at: Date
      icon_code: string | null
      status: number
    }, ExtArgs["result"]["menuItem"]>
    composites: {}
  }

  type MenuItemGetPayload<S extends boolean | null | undefined | MenuItemDefaultArgs> = $Result.GetResult<Prisma.$MenuItemPayload, S>

  type MenuItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MenuItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MenuItemCountAggregateInputType | true
    }

  export interface MenuItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MenuItem'], meta: { name: 'MenuItem' } }
    /**
     * Find zero or one MenuItem that matches the filter.
     * @param {MenuItemFindUniqueArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MenuItemFindUniqueArgs>(args: SelectSubset<T, MenuItemFindUniqueArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MenuItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MenuItemFindUniqueOrThrowArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MenuItemFindUniqueOrThrowArgs>(args: SelectSubset<T, MenuItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenuItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemFindFirstArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MenuItemFindFirstArgs>(args?: SelectSubset<T, MenuItemFindFirstArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenuItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemFindFirstOrThrowArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MenuItemFindFirstOrThrowArgs>(args?: SelectSubset<T, MenuItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MenuItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MenuItems
     * const menuItems = await prisma.menuItem.findMany()
     * 
     * // Get first 10 MenuItems
     * const menuItems = await prisma.menuItem.findMany({ take: 10 })
     * 
     * // Only select the `MenuItemID`
     * const menuItemWithMenuItemIDOnly = await prisma.menuItem.findMany({ select: { MenuItemID: true } })
     * 
     */
    findMany<T extends MenuItemFindManyArgs>(args?: SelectSubset<T, MenuItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MenuItem.
     * @param {MenuItemCreateArgs} args - Arguments to create a MenuItem.
     * @example
     * // Create one MenuItem
     * const MenuItem = await prisma.menuItem.create({
     *   data: {
     *     // ... data to create a MenuItem
     *   }
     * })
     * 
     */
    create<T extends MenuItemCreateArgs>(args: SelectSubset<T, MenuItemCreateArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MenuItems.
     * @param {MenuItemCreateManyArgs} args - Arguments to create many MenuItems.
     * @example
     * // Create many MenuItems
     * const menuItem = await prisma.menuItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MenuItemCreateManyArgs>(args?: SelectSubset<T, MenuItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MenuItems and returns the data saved in the database.
     * @param {MenuItemCreateManyAndReturnArgs} args - Arguments to create many MenuItems.
     * @example
     * // Create many MenuItems
     * const menuItem = await prisma.menuItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MenuItems and only return the `MenuItemID`
     * const menuItemWithMenuItemIDOnly = await prisma.menuItem.createManyAndReturn({
     *   select: { MenuItemID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MenuItemCreateManyAndReturnArgs>(args?: SelectSubset<T, MenuItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MenuItem.
     * @param {MenuItemDeleteArgs} args - Arguments to delete one MenuItem.
     * @example
     * // Delete one MenuItem
     * const MenuItem = await prisma.menuItem.delete({
     *   where: {
     *     // ... filter to delete one MenuItem
     *   }
     * })
     * 
     */
    delete<T extends MenuItemDeleteArgs>(args: SelectSubset<T, MenuItemDeleteArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MenuItem.
     * @param {MenuItemUpdateArgs} args - Arguments to update one MenuItem.
     * @example
     * // Update one MenuItem
     * const menuItem = await prisma.menuItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MenuItemUpdateArgs>(args: SelectSubset<T, MenuItemUpdateArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MenuItems.
     * @param {MenuItemDeleteManyArgs} args - Arguments to filter MenuItems to delete.
     * @example
     * // Delete a few MenuItems
     * const { count } = await prisma.menuItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MenuItemDeleteManyArgs>(args?: SelectSubset<T, MenuItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MenuItems
     * const menuItem = await prisma.menuItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MenuItemUpdateManyArgs>(args: SelectSubset<T, MenuItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuItems and returns the data updated in the database.
     * @param {MenuItemUpdateManyAndReturnArgs} args - Arguments to update many MenuItems.
     * @example
     * // Update many MenuItems
     * const menuItem = await prisma.menuItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MenuItems and only return the `MenuItemID`
     * const menuItemWithMenuItemIDOnly = await prisma.menuItem.updateManyAndReturn({
     *   select: { MenuItemID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MenuItemUpdateManyAndReturnArgs>(args: SelectSubset<T, MenuItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MenuItem.
     * @param {MenuItemUpsertArgs} args - Arguments to update or create a MenuItem.
     * @example
     * // Update or create a MenuItem
     * const menuItem = await prisma.menuItem.upsert({
     *   create: {
     *     // ... data to create a MenuItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MenuItem we want to update
     *   }
     * })
     */
    upsert<T extends MenuItemUpsertArgs>(args: SelectSubset<T, MenuItemUpsertArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MenuItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemCountArgs} args - Arguments to filter MenuItems to count.
     * @example
     * // Count the number of MenuItems
     * const count = await prisma.menuItem.count({
     *   where: {
     *     // ... the filter for the MenuItems we want to count
     *   }
     * })
    **/
    count<T extends MenuItemCountArgs>(
      args?: Subset<T, MenuItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MenuItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MenuItemAggregateArgs>(args: Subset<T, MenuItemAggregateArgs>): Prisma.PrismaPromise<GetMenuItemAggregateType<T>>

    /**
     * Group by MenuItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MenuItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuItemGroupByArgs['orderBy'] }
        : { orderBy?: MenuItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MenuItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MenuItem model
   */
  readonly fields: MenuItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MenuItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenuItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Menu<T extends MenuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MenuDefaultArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MenuItem model
   */
  interface MenuItemFieldRefs {
    readonly MenuItemID: FieldRef<"MenuItem", 'BigInt'>
    readonly menuId: FieldRef<"MenuItem", 'BigInt'>
    readonly display_name: FieldRef<"MenuItem", 'String'>
    readonly action_url: FieldRef<"MenuItem", 'String'>
    readonly sort: FieldRef<"MenuItem", 'Int'>
    readonly created_at: FieldRef<"MenuItem", 'DateTime'>
    readonly icon_code: FieldRef<"MenuItem", 'String'>
    readonly status: FieldRef<"MenuItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MenuItem findUnique
   */
  export type MenuItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem findUniqueOrThrow
   */
  export type MenuItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem findFirst
   */
  export type MenuItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuItems.
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuItems.
     */
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * MenuItem findFirstOrThrow
   */
  export type MenuItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuItems.
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuItems.
     */
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * MenuItem findMany
   */
  export type MenuItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItems to fetch.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MenuItems.
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * MenuItem create
   */
  export type MenuItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * The data needed to create a MenuItem.
     */
    data: XOR<MenuItemCreateInput, MenuItemUncheckedCreateInput>
  }

  /**
   * MenuItem createMany
   */
  export type MenuItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MenuItems.
     */
    data: MenuItemCreateManyInput | MenuItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MenuItem createManyAndReturn
   */
  export type MenuItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * The data used to create many MenuItems.
     */
    data: MenuItemCreateManyInput | MenuItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MenuItem update
   */
  export type MenuItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * The data needed to update a MenuItem.
     */
    data: XOR<MenuItemUpdateInput, MenuItemUncheckedUpdateInput>
    /**
     * Choose, which MenuItem to update.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem updateMany
   */
  export type MenuItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MenuItems.
     */
    data: XOR<MenuItemUpdateManyMutationInput, MenuItemUncheckedUpdateManyInput>
    /**
     * Filter which MenuItems to update
     */
    where?: MenuItemWhereInput
    /**
     * Limit how many MenuItems to update.
     */
    limit?: number
  }

  /**
   * MenuItem updateManyAndReturn
   */
  export type MenuItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * The data used to update MenuItems.
     */
    data: XOR<MenuItemUpdateManyMutationInput, MenuItemUncheckedUpdateManyInput>
    /**
     * Filter which MenuItems to update
     */
    where?: MenuItemWhereInput
    /**
     * Limit how many MenuItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MenuItem upsert
   */
  export type MenuItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * The filter to search for the MenuItem to update in case it exists.
     */
    where: MenuItemWhereUniqueInput
    /**
     * In case the MenuItem found by the `where` argument doesn't exist, create a new MenuItem with this data.
     */
    create: XOR<MenuItemCreateInput, MenuItemUncheckedCreateInput>
    /**
     * In case the MenuItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenuItemUpdateInput, MenuItemUncheckedUpdateInput>
  }

  /**
   * MenuItem delete
   */
  export type MenuItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter which MenuItem to delete.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem deleteMany
   */
  export type MenuItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuItems to delete
     */
    where?: MenuItemWhereInput
    /**
     * Limit how many MenuItems to delete.
     */
    limit?: number
  }

  /**
   * MenuItem without action
   */
  export type MenuItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
  }


  /**
   * Model Country
   */

  export type AggregateCountry = {
    _count: CountryCountAggregateOutputType | null
    _avg: CountryAvgAggregateOutputType | null
    _sum: CountrySumAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  export type CountryAvgAggregateOutputType = {
    CountryID: number | null
  }

  export type CountrySumAggregateOutputType = {
    CountryID: bigint | null
  }

  export type CountryMinAggregateOutputType = {
    CountryID: bigint | null
    isoCode: string | null
    name: string | null
    phonecode: string | null
    flag: string | null
    currency: string | null
    latitude: string | null
    longitude: string | null
    createdAt: Date | null
  }

  export type CountryMaxAggregateOutputType = {
    CountryID: bigint | null
    isoCode: string | null
    name: string | null
    phonecode: string | null
    flag: string | null
    currency: string | null
    latitude: string | null
    longitude: string | null
    createdAt: Date | null
  }

  export type CountryCountAggregateOutputType = {
    CountryID: number
    isoCode: number
    name: number
    phonecode: number
    flag: number
    currency: number
    latitude: number
    longitude: number
    createdAt: number
    _all: number
  }


  export type CountryAvgAggregateInputType = {
    CountryID?: true
  }

  export type CountrySumAggregateInputType = {
    CountryID?: true
  }

  export type CountryMinAggregateInputType = {
    CountryID?: true
    isoCode?: true
    name?: true
    phonecode?: true
    flag?: true
    currency?: true
    latitude?: true
    longitude?: true
    createdAt?: true
  }

  export type CountryMaxAggregateInputType = {
    CountryID?: true
    isoCode?: true
    name?: true
    phonecode?: true
    flag?: true
    currency?: true
    latitude?: true
    longitude?: true
    createdAt?: true
  }

  export type CountryCountAggregateInputType = {
    CountryID?: true
    isoCode?: true
    name?: true
    phonecode?: true
    flag?: true
    currency?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    _all?: true
  }

  export type CountryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Country to aggregate.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Countries
    **/
    _count?: true | CountryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CountryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CountrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountryMaxAggregateInputType
  }

  export type GetCountryAggregateType<T extends CountryAggregateArgs> = {
        [P in keyof T & keyof AggregateCountry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountry[P]>
      : GetScalarType<T[P], AggregateCountry[P]>
  }




  export type CountryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountryWhereInput
    orderBy?: CountryOrderByWithAggregationInput | CountryOrderByWithAggregationInput[]
    by: CountryScalarFieldEnum[] | CountryScalarFieldEnum
    having?: CountryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountryCountAggregateInputType | true
    _avg?: CountryAvgAggregateInputType
    _sum?: CountrySumAggregateInputType
    _min?: CountryMinAggregateInputType
    _max?: CountryMaxAggregateInputType
  }

  export type CountryGroupByOutputType = {
    CountryID: bigint
    isoCode: string
    name: string
    phonecode: string
    flag: string | null
    currency: string | null
    latitude: string | null
    longitude: string | null
    createdAt: Date | null
    _count: CountryCountAggregateOutputType | null
    _avg: CountryAvgAggregateOutputType | null
    _sum: CountrySumAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  type GetCountryGroupByPayload<T extends CountryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CountryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountryGroupByOutputType[P]>
            : GetScalarType<T[P], CountryGroupByOutputType[P]>
        }
      >
    >


  export type CountrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CountryID?: boolean
    isoCode?: boolean
    name?: boolean
    phonecode?: boolean
    flag?: boolean
    currency?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    ClientDetails?: boolean | Country$ClientDetailsArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["country"]>

  export type CountrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CountryID?: boolean
    isoCode?: boolean
    name?: boolean
    phonecode?: boolean
    flag?: boolean
    currency?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["country"]>

  export type CountrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CountryID?: boolean
    isoCode?: boolean
    name?: boolean
    phonecode?: boolean
    flag?: boolean
    currency?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["country"]>

  export type CountrySelectScalar = {
    CountryID?: boolean
    isoCode?: boolean
    name?: boolean
    phonecode?: boolean
    flag?: boolean
    currency?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
  }

  export type CountryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"CountryID" | "isoCode" | "name" | "phonecode" | "flag" | "currency" | "latitude" | "longitude" | "createdAt", ExtArgs["result"]["country"]>
  export type CountryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ClientDetails?: boolean | Country$ClientDetailsArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CountryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CountryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CountryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Country"
    objects: {
      ClientDetails: Prisma.$ClientDetailsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      CountryID: bigint
      isoCode: string
      name: string
      phonecode: string
      flag: string | null
      currency: string | null
      latitude: string | null
      longitude: string | null
      createdAt: Date | null
    }, ExtArgs["result"]["country"]>
    composites: {}
  }

  type CountryGetPayload<S extends boolean | null | undefined | CountryDefaultArgs> = $Result.GetResult<Prisma.$CountryPayload, S>

  type CountryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CountryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CountryCountAggregateInputType | true
    }

  export interface CountryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Country'], meta: { name: 'Country' } }
    /**
     * Find zero or one Country that matches the filter.
     * @param {CountryFindUniqueArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CountryFindUniqueArgs>(args: SelectSubset<T, CountryFindUniqueArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Country that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CountryFindUniqueOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CountryFindUniqueOrThrowArgs>(args: SelectSubset<T, CountryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Country that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CountryFindFirstArgs>(args?: SelectSubset<T, CountryFindFirstArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Country that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CountryFindFirstOrThrowArgs>(args?: SelectSubset<T, CountryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countries
     * const countries = await prisma.country.findMany()
     * 
     * // Get first 10 Countries
     * const countries = await prisma.country.findMany({ take: 10 })
     * 
     * // Only select the `CountryID`
     * const countryWithCountryIDOnly = await prisma.country.findMany({ select: { CountryID: true } })
     * 
     */
    findMany<T extends CountryFindManyArgs>(args?: SelectSubset<T, CountryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Country.
     * @param {CountryCreateArgs} args - Arguments to create a Country.
     * @example
     * // Create one Country
     * const Country = await prisma.country.create({
     *   data: {
     *     // ... data to create a Country
     *   }
     * })
     * 
     */
    create<T extends CountryCreateArgs>(args: SelectSubset<T, CountryCreateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Countries.
     * @param {CountryCreateManyArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CountryCreateManyArgs>(args?: SelectSubset<T, CountryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Countries and returns the data saved in the database.
     * @param {CountryCreateManyAndReturnArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Countries and only return the `CountryID`
     * const countryWithCountryIDOnly = await prisma.country.createManyAndReturn({
     *   select: { CountryID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CountryCreateManyAndReturnArgs>(args?: SelectSubset<T, CountryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Country.
     * @param {CountryDeleteArgs} args - Arguments to delete one Country.
     * @example
     * // Delete one Country
     * const Country = await prisma.country.delete({
     *   where: {
     *     // ... filter to delete one Country
     *   }
     * })
     * 
     */
    delete<T extends CountryDeleteArgs>(args: SelectSubset<T, CountryDeleteArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Country.
     * @param {CountryUpdateArgs} args - Arguments to update one Country.
     * @example
     * // Update one Country
     * const country = await prisma.country.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CountryUpdateArgs>(args: SelectSubset<T, CountryUpdateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Countries.
     * @param {CountryDeleteManyArgs} args - Arguments to filter Countries to delete.
     * @example
     * // Delete a few Countries
     * const { count } = await prisma.country.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CountryDeleteManyArgs>(args?: SelectSubset<T, CountryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CountryUpdateManyArgs>(args: SelectSubset<T, CountryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries and returns the data updated in the database.
     * @param {CountryUpdateManyAndReturnArgs} args - Arguments to update many Countries.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Countries and only return the `CountryID`
     * const countryWithCountryIDOnly = await prisma.country.updateManyAndReturn({
     *   select: { CountryID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CountryUpdateManyAndReturnArgs>(args: SelectSubset<T, CountryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Country.
     * @param {CountryUpsertArgs} args - Arguments to update or create a Country.
     * @example
     * // Update or create a Country
     * const country = await prisma.country.upsert({
     *   create: {
     *     // ... data to create a Country
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Country we want to update
     *   }
     * })
     */
    upsert<T extends CountryUpsertArgs>(args: SelectSubset<T, CountryUpsertArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryCountArgs} args - Arguments to filter Countries to count.
     * @example
     * // Count the number of Countries
     * const count = await prisma.country.count({
     *   where: {
     *     // ... the filter for the Countries we want to count
     *   }
     * })
    **/
    count<T extends CountryCountArgs>(
      args?: Subset<T, CountryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CountryAggregateArgs>(args: Subset<T, CountryAggregateArgs>): Prisma.PrismaPromise<GetCountryAggregateType<T>>

    /**
     * Group by Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CountryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountryGroupByArgs['orderBy'] }
        : { orderBy?: CountryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CountryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Country model
   */
  readonly fields: CountryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Country.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CountryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ClientDetails<T extends Country$ClientDetailsArgs<ExtArgs> = {}>(args?: Subset<T, Country$ClientDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Country model
   */
  interface CountryFieldRefs {
    readonly CountryID: FieldRef<"Country", 'BigInt'>
    readonly isoCode: FieldRef<"Country", 'String'>
    readonly name: FieldRef<"Country", 'String'>
    readonly phonecode: FieldRef<"Country", 'String'>
    readonly flag: FieldRef<"Country", 'String'>
    readonly currency: FieldRef<"Country", 'String'>
    readonly latitude: FieldRef<"Country", 'String'>
    readonly longitude: FieldRef<"Country", 'String'>
    readonly createdAt: FieldRef<"Country", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Country findUnique
   */
  export type CountryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findUniqueOrThrow
   */
  export type CountryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findFirst
   */
  export type CountryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findFirstOrThrow
   */
  export type CountryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findMany
   */
  export type CountryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Countries to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country create
   */
  export type CountryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to create a Country.
     */
    data: XOR<CountryCreateInput, CountryUncheckedCreateInput>
  }

  /**
   * Country createMany
   */
  export type CountryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Countries.
     */
    data: CountryCreateManyInput | CountryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Country createManyAndReturn
   */
  export type CountryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * The data used to create many Countries.
     */
    data: CountryCreateManyInput | CountryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Country update
   */
  export type CountryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to update a Country.
     */
    data: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
    /**
     * Choose, which Country to update.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country updateMany
   */
  export type CountryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Countries.
     */
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to update.
     */
    limit?: number
  }

  /**
   * Country updateManyAndReturn
   */
  export type CountryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * The data used to update Countries.
     */
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to update.
     */
    limit?: number
  }

  /**
   * Country upsert
   */
  export type CountryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The filter to search for the Country to update in case it exists.
     */
    where: CountryWhereUniqueInput
    /**
     * In case the Country found by the `where` argument doesn't exist, create a new Country with this data.
     */
    create: XOR<CountryCreateInput, CountryUncheckedCreateInput>
    /**
     * In case the Country was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
  }

  /**
   * Country delete
   */
  export type CountryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter which Country to delete.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country deleteMany
   */
  export type CountryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Countries to delete
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to delete.
     */
    limit?: number
  }

  /**
   * Country.ClientDetails
   */
  export type Country$ClientDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientDetails
     */
    select?: ClientDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientDetails
     */
    omit?: ClientDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientDetailsInclude<ExtArgs> | null
    where?: ClientDetailsWhereInput
    orderBy?: ClientDetailsOrderByWithRelationInput | ClientDetailsOrderByWithRelationInput[]
    cursor?: ClientDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientDetailsScalarFieldEnum | ClientDetailsScalarFieldEnum[]
  }

  /**
   * Country without action
   */
  export type CountryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
  }


  /**
   * Model State
   */

  export type AggregateState = {
    _count: StateCountAggregateOutputType | null
    _avg: StateAvgAggregateOutputType | null
    _sum: StateSumAggregateOutputType | null
    _min: StateMinAggregateOutputType | null
    _max: StateMaxAggregateOutputType | null
  }

  export type StateAvgAggregateOutputType = {
    stateId: number | null
  }

  export type StateSumAggregateOutputType = {
    stateId: bigint | null
  }

  export type StateMinAggregateOutputType = {
    stateId: bigint | null
    name: string | null
    isoCode: string | null
    countryCode: string | null
    latitude: string | null
    longitude: string | null
    createdAt: Date | null
  }

  export type StateMaxAggregateOutputType = {
    stateId: bigint | null
    name: string | null
    isoCode: string | null
    countryCode: string | null
    latitude: string | null
    longitude: string | null
    createdAt: Date | null
  }

  export type StateCountAggregateOutputType = {
    stateId: number
    name: number
    isoCode: number
    countryCode: number
    latitude: number
    longitude: number
    createdAt: number
    _all: number
  }


  export type StateAvgAggregateInputType = {
    stateId?: true
  }

  export type StateSumAggregateInputType = {
    stateId?: true
  }

  export type StateMinAggregateInputType = {
    stateId?: true
    name?: true
    isoCode?: true
    countryCode?: true
    latitude?: true
    longitude?: true
    createdAt?: true
  }

  export type StateMaxAggregateInputType = {
    stateId?: true
    name?: true
    isoCode?: true
    countryCode?: true
    latitude?: true
    longitude?: true
    createdAt?: true
  }

  export type StateCountAggregateInputType = {
    stateId?: true
    name?: true
    isoCode?: true
    countryCode?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    _all?: true
  }

  export type StateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which State to aggregate.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned States
    **/
    _count?: true | StateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StateMaxAggregateInputType
  }

  export type GetStateAggregateType<T extends StateAggregateArgs> = {
        [P in keyof T & keyof AggregateState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateState[P]>
      : GetScalarType<T[P], AggregateState[P]>
  }




  export type StateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StateWhereInput
    orderBy?: StateOrderByWithAggregationInput | StateOrderByWithAggregationInput[]
    by: StateScalarFieldEnum[] | StateScalarFieldEnum
    having?: StateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StateCountAggregateInputType | true
    _avg?: StateAvgAggregateInputType
    _sum?: StateSumAggregateInputType
    _min?: StateMinAggregateInputType
    _max?: StateMaxAggregateInputType
  }

  export type StateGroupByOutputType = {
    stateId: bigint
    name: string
    isoCode: string
    countryCode: string
    latitude: string | null
    longitude: string | null
    createdAt: Date | null
    _count: StateCountAggregateOutputType | null
    _avg: StateAvgAggregateOutputType | null
    _sum: StateSumAggregateOutputType | null
    _min: StateMinAggregateOutputType | null
    _max: StateMaxAggregateOutputType | null
  }

  type GetStateGroupByPayload<T extends StateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StateGroupByOutputType[P]>
            : GetScalarType<T[P], StateGroupByOutputType[P]>
        }
      >
    >


  export type StateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    stateId?: boolean
    name?: boolean
    isoCode?: boolean
    countryCode?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["state"]>

  export type StateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    stateId?: boolean
    name?: boolean
    isoCode?: boolean
    countryCode?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["state"]>

  export type StateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    stateId?: boolean
    name?: boolean
    isoCode?: boolean
    countryCode?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["state"]>

  export type StateSelectScalar = {
    stateId?: boolean
    name?: boolean
    isoCode?: boolean
    countryCode?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
  }

  export type StateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"stateId" | "name" | "isoCode" | "countryCode" | "latitude" | "longitude" | "createdAt", ExtArgs["result"]["state"]>

  export type $StatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "State"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      stateId: bigint
      name: string
      isoCode: string
      countryCode: string
      latitude: string | null
      longitude: string | null
      createdAt: Date | null
    }, ExtArgs["result"]["state"]>
    composites: {}
  }

  type StateGetPayload<S extends boolean | null | undefined | StateDefaultArgs> = $Result.GetResult<Prisma.$StatePayload, S>

  type StateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StateCountAggregateInputType | true
    }

  export interface StateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['State'], meta: { name: 'State' } }
    /**
     * Find zero or one State that matches the filter.
     * @param {StateFindUniqueArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StateFindUniqueArgs>(args: SelectSubset<T, StateFindUniqueArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one State that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StateFindUniqueOrThrowArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StateFindUniqueOrThrowArgs>(args: SelectSubset<T, StateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first State that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateFindFirstArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StateFindFirstArgs>(args?: SelectSubset<T, StateFindFirstArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first State that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateFindFirstOrThrowArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StateFindFirstOrThrowArgs>(args?: SelectSubset<T, StateFindFirstOrThrowArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more States that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all States
     * const states = await prisma.state.findMany()
     * 
     * // Get first 10 States
     * const states = await prisma.state.findMany({ take: 10 })
     * 
     * // Only select the `stateId`
     * const stateWithStateIdOnly = await prisma.state.findMany({ select: { stateId: true } })
     * 
     */
    findMany<T extends StateFindManyArgs>(args?: SelectSubset<T, StateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a State.
     * @param {StateCreateArgs} args - Arguments to create a State.
     * @example
     * // Create one State
     * const State = await prisma.state.create({
     *   data: {
     *     // ... data to create a State
     *   }
     * })
     * 
     */
    create<T extends StateCreateArgs>(args: SelectSubset<T, StateCreateArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many States.
     * @param {StateCreateManyArgs} args - Arguments to create many States.
     * @example
     * // Create many States
     * const state = await prisma.state.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StateCreateManyArgs>(args?: SelectSubset<T, StateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many States and returns the data saved in the database.
     * @param {StateCreateManyAndReturnArgs} args - Arguments to create many States.
     * @example
     * // Create many States
     * const state = await prisma.state.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many States and only return the `stateId`
     * const stateWithStateIdOnly = await prisma.state.createManyAndReturn({
     *   select: { stateId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StateCreateManyAndReturnArgs>(args?: SelectSubset<T, StateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a State.
     * @param {StateDeleteArgs} args - Arguments to delete one State.
     * @example
     * // Delete one State
     * const State = await prisma.state.delete({
     *   where: {
     *     // ... filter to delete one State
     *   }
     * })
     * 
     */
    delete<T extends StateDeleteArgs>(args: SelectSubset<T, StateDeleteArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one State.
     * @param {StateUpdateArgs} args - Arguments to update one State.
     * @example
     * // Update one State
     * const state = await prisma.state.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StateUpdateArgs>(args: SelectSubset<T, StateUpdateArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more States.
     * @param {StateDeleteManyArgs} args - Arguments to filter States to delete.
     * @example
     * // Delete a few States
     * const { count } = await prisma.state.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StateDeleteManyArgs>(args?: SelectSubset<T, StateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more States.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many States
     * const state = await prisma.state.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StateUpdateManyArgs>(args: SelectSubset<T, StateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more States and returns the data updated in the database.
     * @param {StateUpdateManyAndReturnArgs} args - Arguments to update many States.
     * @example
     * // Update many States
     * const state = await prisma.state.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more States and only return the `stateId`
     * const stateWithStateIdOnly = await prisma.state.updateManyAndReturn({
     *   select: { stateId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StateUpdateManyAndReturnArgs>(args: SelectSubset<T, StateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one State.
     * @param {StateUpsertArgs} args - Arguments to update or create a State.
     * @example
     * // Update or create a State
     * const state = await prisma.state.upsert({
     *   create: {
     *     // ... data to create a State
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the State we want to update
     *   }
     * })
     */
    upsert<T extends StateUpsertArgs>(args: SelectSubset<T, StateUpsertArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of States.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateCountArgs} args - Arguments to filter States to count.
     * @example
     * // Count the number of States
     * const count = await prisma.state.count({
     *   where: {
     *     // ... the filter for the States we want to count
     *   }
     * })
    **/
    count<T extends StateCountArgs>(
      args?: Subset<T, StateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a State.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StateAggregateArgs>(args: Subset<T, StateAggregateArgs>): Prisma.PrismaPromise<GetStateAggregateType<T>>

    /**
     * Group by State.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StateGroupByArgs['orderBy'] }
        : { orderBy?: StateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the State model
   */
  readonly fields: StateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for State.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the State model
   */
  interface StateFieldRefs {
    readonly stateId: FieldRef<"State", 'BigInt'>
    readonly name: FieldRef<"State", 'String'>
    readonly isoCode: FieldRef<"State", 'String'>
    readonly countryCode: FieldRef<"State", 'String'>
    readonly latitude: FieldRef<"State", 'String'>
    readonly longitude: FieldRef<"State", 'String'>
    readonly createdAt: FieldRef<"State", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * State findUnique
   */
  export type StateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Filter, which State to fetch.
     */
    where: StateWhereUniqueInput
  }

  /**
   * State findUniqueOrThrow
   */
  export type StateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Filter, which State to fetch.
     */
    where: StateWhereUniqueInput
  }

  /**
   * State findFirst
   */
  export type StateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Filter, which State to fetch.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for States.
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of States.
     */
    distinct?: StateScalarFieldEnum | StateScalarFieldEnum[]
  }

  /**
   * State findFirstOrThrow
   */
  export type StateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Filter, which State to fetch.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for States.
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of States.
     */
    distinct?: StateScalarFieldEnum | StateScalarFieldEnum[]
  }

  /**
   * State findMany
   */
  export type StateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Filter, which States to fetch.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing States.
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    distinct?: StateScalarFieldEnum | StateScalarFieldEnum[]
  }

  /**
   * State create
   */
  export type StateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * The data needed to create a State.
     */
    data: XOR<StateCreateInput, StateUncheckedCreateInput>
  }

  /**
   * State createMany
   */
  export type StateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many States.
     */
    data: StateCreateManyInput | StateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * State createManyAndReturn
   */
  export type StateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * The data used to create many States.
     */
    data: StateCreateManyInput | StateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * State update
   */
  export type StateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * The data needed to update a State.
     */
    data: XOR<StateUpdateInput, StateUncheckedUpdateInput>
    /**
     * Choose, which State to update.
     */
    where: StateWhereUniqueInput
  }

  /**
   * State updateMany
   */
  export type StateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update States.
     */
    data: XOR<StateUpdateManyMutationInput, StateUncheckedUpdateManyInput>
    /**
     * Filter which States to update
     */
    where?: StateWhereInput
    /**
     * Limit how many States to update.
     */
    limit?: number
  }

  /**
   * State updateManyAndReturn
   */
  export type StateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * The data used to update States.
     */
    data: XOR<StateUpdateManyMutationInput, StateUncheckedUpdateManyInput>
    /**
     * Filter which States to update
     */
    where?: StateWhereInput
    /**
     * Limit how many States to update.
     */
    limit?: number
  }

  /**
   * State upsert
   */
  export type StateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * The filter to search for the State to update in case it exists.
     */
    where: StateWhereUniqueInput
    /**
     * In case the State found by the `where` argument doesn't exist, create a new State with this data.
     */
    create: XOR<StateCreateInput, StateUncheckedCreateInput>
    /**
     * In case the State was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StateUpdateInput, StateUncheckedUpdateInput>
  }

  /**
   * State delete
   */
  export type StateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Filter which State to delete.
     */
    where: StateWhereUniqueInput
  }

  /**
   * State deleteMany
   */
  export type StateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which States to delete
     */
    where?: StateWhereInput
    /**
     * Limit how many States to delete.
     */
    limit?: number
  }

  /**
   * State without action
   */
  export type StateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
  }


  /**
   * Model SuperUser
   */

  export type AggregateSuperUser = {
    _count: SuperUserCountAggregateOutputType | null
    _avg: SuperUserAvgAggregateOutputType | null
    _sum: SuperUserSumAggregateOutputType | null
    _min: SuperUserMinAggregateOutputType | null
    _max: SuperUserMaxAggregateOutputType | null
  }

  export type SuperUserAvgAggregateOutputType = {
    superUserId: number | null
    clientId: number | null
    roleId: number | null
    reportsToId: number | null
  }

  export type SuperUserSumAggregateOutputType = {
    superUserId: bigint | null
    clientId: bigint | null
    roleId: bigint | null
    reportsToId: bigint | null
  }

  export type SuperUserMinAggregateOutputType = {
    superUserId: bigint | null
    username: string | null
    email: string | null
    password: string | null
    phonenumber: string | null
    status: boolean | null
    clientId: bigint | null
    roleId: bigint | null
    createddate: Date | null
    updateddate: Date | null
    IsAdmin: boolean | null
    reportsToId: bigint | null
    person_name: string | null
    passwordResetToken: string | null
    passwordResetExpires: Date | null
  }

  export type SuperUserMaxAggregateOutputType = {
    superUserId: bigint | null
    username: string | null
    email: string | null
    password: string | null
    phonenumber: string | null
    status: boolean | null
    clientId: bigint | null
    roleId: bigint | null
    createddate: Date | null
    updateddate: Date | null
    IsAdmin: boolean | null
    reportsToId: bigint | null
    person_name: string | null
    passwordResetToken: string | null
    passwordResetExpires: Date | null
  }

  export type SuperUserCountAggregateOutputType = {
    superUserId: number
    username: number
    email: number
    password: number
    phonenumber: number
    status: number
    clientId: number
    roleId: number
    createddate: number
    updateddate: number
    IsAdmin: number
    reportsToId: number
    person_name: number
    passwordResetToken: number
    passwordResetExpires: number
    _all: number
  }


  export type SuperUserAvgAggregateInputType = {
    superUserId?: true
    clientId?: true
    roleId?: true
    reportsToId?: true
  }

  export type SuperUserSumAggregateInputType = {
    superUserId?: true
    clientId?: true
    roleId?: true
    reportsToId?: true
  }

  export type SuperUserMinAggregateInputType = {
    superUserId?: true
    username?: true
    email?: true
    password?: true
    phonenumber?: true
    status?: true
    clientId?: true
    roleId?: true
    createddate?: true
    updateddate?: true
    IsAdmin?: true
    reportsToId?: true
    person_name?: true
    passwordResetToken?: true
    passwordResetExpires?: true
  }

  export type SuperUserMaxAggregateInputType = {
    superUserId?: true
    username?: true
    email?: true
    password?: true
    phonenumber?: true
    status?: true
    clientId?: true
    roleId?: true
    createddate?: true
    updateddate?: true
    IsAdmin?: true
    reportsToId?: true
    person_name?: true
    passwordResetToken?: true
    passwordResetExpires?: true
  }

  export type SuperUserCountAggregateInputType = {
    superUserId?: true
    username?: true
    email?: true
    password?: true
    phonenumber?: true
    status?: true
    clientId?: true
    roleId?: true
    createddate?: true
    updateddate?: true
    IsAdmin?: true
    reportsToId?: true
    person_name?: true
    passwordResetToken?: true
    passwordResetExpires?: true
    _all?: true
  }

  export type SuperUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SuperUser to aggregate.
     */
    where?: SuperUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuperUsers to fetch.
     */
    orderBy?: SuperUserOrderByWithRelationInput | SuperUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SuperUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuperUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuperUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SuperUsers
    **/
    _count?: true | SuperUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SuperUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SuperUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SuperUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SuperUserMaxAggregateInputType
  }

  export type GetSuperUserAggregateType<T extends SuperUserAggregateArgs> = {
        [P in keyof T & keyof AggregateSuperUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuperUser[P]>
      : GetScalarType<T[P], AggregateSuperUser[P]>
  }




  export type SuperUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuperUserWhereInput
    orderBy?: SuperUserOrderByWithAggregationInput | SuperUserOrderByWithAggregationInput[]
    by: SuperUserScalarFieldEnum[] | SuperUserScalarFieldEnum
    having?: SuperUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SuperUserCountAggregateInputType | true
    _avg?: SuperUserAvgAggregateInputType
    _sum?: SuperUserSumAggregateInputType
    _min?: SuperUserMinAggregateInputType
    _max?: SuperUserMaxAggregateInputType
  }

  export type SuperUserGroupByOutputType = {
    superUserId: bigint
    username: string
    email: string
    password: string
    phonenumber: string
    status: boolean
    clientId: bigint | null
    roleId: bigint | null
    createddate: Date
    updateddate: Date | null
    IsAdmin: boolean
    reportsToId: bigint | null
    person_name: string | null
    passwordResetToken: string | null
    passwordResetExpires: Date | null
    _count: SuperUserCountAggregateOutputType | null
    _avg: SuperUserAvgAggregateOutputType | null
    _sum: SuperUserSumAggregateOutputType | null
    _min: SuperUserMinAggregateOutputType | null
    _max: SuperUserMaxAggregateOutputType | null
  }

  type GetSuperUserGroupByPayload<T extends SuperUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SuperUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SuperUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SuperUserGroupByOutputType[P]>
            : GetScalarType<T[P], SuperUserGroupByOutputType[P]>
        }
      >
    >


  export type SuperUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    superUserId?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    phonenumber?: boolean
    status?: boolean
    clientId?: boolean
    roleId?: boolean
    createddate?: boolean
    updateddate?: boolean
    IsAdmin?: boolean
    reportsToId?: boolean
    person_name?: boolean
    passwordResetToken?: boolean
    passwordResetExpires?: boolean
    ReportsTo?: boolean | SuperUser$ReportsToArgs<ExtArgs>
    Subordinates?: boolean | SuperUser$SubordinatesArgs<ExtArgs>
    _count?: boolean | SuperUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["superUser"]>

  export type SuperUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    superUserId?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    phonenumber?: boolean
    status?: boolean
    clientId?: boolean
    roleId?: boolean
    createddate?: boolean
    updateddate?: boolean
    IsAdmin?: boolean
    reportsToId?: boolean
    person_name?: boolean
    passwordResetToken?: boolean
    passwordResetExpires?: boolean
    ReportsTo?: boolean | SuperUser$ReportsToArgs<ExtArgs>
  }, ExtArgs["result"]["superUser"]>

  export type SuperUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    superUserId?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    phonenumber?: boolean
    status?: boolean
    clientId?: boolean
    roleId?: boolean
    createddate?: boolean
    updateddate?: boolean
    IsAdmin?: boolean
    reportsToId?: boolean
    person_name?: boolean
    passwordResetToken?: boolean
    passwordResetExpires?: boolean
    ReportsTo?: boolean | SuperUser$ReportsToArgs<ExtArgs>
  }, ExtArgs["result"]["superUser"]>

  export type SuperUserSelectScalar = {
    superUserId?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    phonenumber?: boolean
    status?: boolean
    clientId?: boolean
    roleId?: boolean
    createddate?: boolean
    updateddate?: boolean
    IsAdmin?: boolean
    reportsToId?: boolean
    person_name?: boolean
    passwordResetToken?: boolean
    passwordResetExpires?: boolean
  }

  export type SuperUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"superUserId" | "username" | "email" | "password" | "phonenumber" | "status" | "clientId" | "roleId" | "createddate" | "updateddate" | "IsAdmin" | "reportsToId" | "person_name" | "passwordResetToken" | "passwordResetExpires", ExtArgs["result"]["superUser"]>
  export type SuperUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ReportsTo?: boolean | SuperUser$ReportsToArgs<ExtArgs>
    Subordinates?: boolean | SuperUser$SubordinatesArgs<ExtArgs>
    _count?: boolean | SuperUserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SuperUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ReportsTo?: boolean | SuperUser$ReportsToArgs<ExtArgs>
  }
  export type SuperUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ReportsTo?: boolean | SuperUser$ReportsToArgs<ExtArgs>
  }

  export type $SuperUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SuperUser"
    objects: {
      ReportsTo: Prisma.$SuperUserPayload<ExtArgs> | null
      Subordinates: Prisma.$SuperUserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      superUserId: bigint
      username: string
      email: string
      password: string
      phonenumber: string
      status: boolean
      clientId: bigint | null
      roleId: bigint | null
      createddate: Date
      updateddate: Date | null
      IsAdmin: boolean
      reportsToId: bigint | null
      person_name: string | null
      passwordResetToken: string | null
      passwordResetExpires: Date | null
    }, ExtArgs["result"]["superUser"]>
    composites: {}
  }

  type SuperUserGetPayload<S extends boolean | null | undefined | SuperUserDefaultArgs> = $Result.GetResult<Prisma.$SuperUserPayload, S>

  type SuperUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SuperUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SuperUserCountAggregateInputType | true
    }

  export interface SuperUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SuperUser'], meta: { name: 'SuperUser' } }
    /**
     * Find zero or one SuperUser that matches the filter.
     * @param {SuperUserFindUniqueArgs} args - Arguments to find a SuperUser
     * @example
     * // Get one SuperUser
     * const superUser = await prisma.superUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SuperUserFindUniqueArgs>(args: SelectSubset<T, SuperUserFindUniqueArgs<ExtArgs>>): Prisma__SuperUserClient<$Result.GetResult<Prisma.$SuperUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SuperUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SuperUserFindUniqueOrThrowArgs} args - Arguments to find a SuperUser
     * @example
     * // Get one SuperUser
     * const superUser = await prisma.superUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SuperUserFindUniqueOrThrowArgs>(args: SelectSubset<T, SuperUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SuperUserClient<$Result.GetResult<Prisma.$SuperUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SuperUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperUserFindFirstArgs} args - Arguments to find a SuperUser
     * @example
     * // Get one SuperUser
     * const superUser = await prisma.superUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SuperUserFindFirstArgs>(args?: SelectSubset<T, SuperUserFindFirstArgs<ExtArgs>>): Prisma__SuperUserClient<$Result.GetResult<Prisma.$SuperUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SuperUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperUserFindFirstOrThrowArgs} args - Arguments to find a SuperUser
     * @example
     * // Get one SuperUser
     * const superUser = await prisma.superUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SuperUserFindFirstOrThrowArgs>(args?: SelectSubset<T, SuperUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__SuperUserClient<$Result.GetResult<Prisma.$SuperUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SuperUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SuperUsers
     * const superUsers = await prisma.superUser.findMany()
     * 
     * // Get first 10 SuperUsers
     * const superUsers = await prisma.superUser.findMany({ take: 10 })
     * 
     * // Only select the `superUserId`
     * const superUserWithSuperUserIdOnly = await prisma.superUser.findMany({ select: { superUserId: true } })
     * 
     */
    findMany<T extends SuperUserFindManyArgs>(args?: SelectSubset<T, SuperUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuperUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SuperUser.
     * @param {SuperUserCreateArgs} args - Arguments to create a SuperUser.
     * @example
     * // Create one SuperUser
     * const SuperUser = await prisma.superUser.create({
     *   data: {
     *     // ... data to create a SuperUser
     *   }
     * })
     * 
     */
    create<T extends SuperUserCreateArgs>(args: SelectSubset<T, SuperUserCreateArgs<ExtArgs>>): Prisma__SuperUserClient<$Result.GetResult<Prisma.$SuperUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SuperUsers.
     * @param {SuperUserCreateManyArgs} args - Arguments to create many SuperUsers.
     * @example
     * // Create many SuperUsers
     * const superUser = await prisma.superUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SuperUserCreateManyArgs>(args?: SelectSubset<T, SuperUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SuperUsers and returns the data saved in the database.
     * @param {SuperUserCreateManyAndReturnArgs} args - Arguments to create many SuperUsers.
     * @example
     * // Create many SuperUsers
     * const superUser = await prisma.superUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SuperUsers and only return the `superUserId`
     * const superUserWithSuperUserIdOnly = await prisma.superUser.createManyAndReturn({
     *   select: { superUserId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SuperUserCreateManyAndReturnArgs>(args?: SelectSubset<T, SuperUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuperUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SuperUser.
     * @param {SuperUserDeleteArgs} args - Arguments to delete one SuperUser.
     * @example
     * // Delete one SuperUser
     * const SuperUser = await prisma.superUser.delete({
     *   where: {
     *     // ... filter to delete one SuperUser
     *   }
     * })
     * 
     */
    delete<T extends SuperUserDeleteArgs>(args: SelectSubset<T, SuperUserDeleteArgs<ExtArgs>>): Prisma__SuperUserClient<$Result.GetResult<Prisma.$SuperUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SuperUser.
     * @param {SuperUserUpdateArgs} args - Arguments to update one SuperUser.
     * @example
     * // Update one SuperUser
     * const superUser = await prisma.superUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SuperUserUpdateArgs>(args: SelectSubset<T, SuperUserUpdateArgs<ExtArgs>>): Prisma__SuperUserClient<$Result.GetResult<Prisma.$SuperUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SuperUsers.
     * @param {SuperUserDeleteManyArgs} args - Arguments to filter SuperUsers to delete.
     * @example
     * // Delete a few SuperUsers
     * const { count } = await prisma.superUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SuperUserDeleteManyArgs>(args?: SelectSubset<T, SuperUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SuperUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SuperUsers
     * const superUser = await prisma.superUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SuperUserUpdateManyArgs>(args: SelectSubset<T, SuperUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SuperUsers and returns the data updated in the database.
     * @param {SuperUserUpdateManyAndReturnArgs} args - Arguments to update many SuperUsers.
     * @example
     * // Update many SuperUsers
     * const superUser = await prisma.superUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SuperUsers and only return the `superUserId`
     * const superUserWithSuperUserIdOnly = await prisma.superUser.updateManyAndReturn({
     *   select: { superUserId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SuperUserUpdateManyAndReturnArgs>(args: SelectSubset<T, SuperUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuperUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SuperUser.
     * @param {SuperUserUpsertArgs} args - Arguments to update or create a SuperUser.
     * @example
     * // Update or create a SuperUser
     * const superUser = await prisma.superUser.upsert({
     *   create: {
     *     // ... data to create a SuperUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SuperUser we want to update
     *   }
     * })
     */
    upsert<T extends SuperUserUpsertArgs>(args: SelectSubset<T, SuperUserUpsertArgs<ExtArgs>>): Prisma__SuperUserClient<$Result.GetResult<Prisma.$SuperUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SuperUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperUserCountArgs} args - Arguments to filter SuperUsers to count.
     * @example
     * // Count the number of SuperUsers
     * const count = await prisma.superUser.count({
     *   where: {
     *     // ... the filter for the SuperUsers we want to count
     *   }
     * })
    **/
    count<T extends SuperUserCountArgs>(
      args?: Subset<T, SuperUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SuperUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SuperUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SuperUserAggregateArgs>(args: Subset<T, SuperUserAggregateArgs>): Prisma.PrismaPromise<GetSuperUserAggregateType<T>>

    /**
     * Group by SuperUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SuperUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SuperUserGroupByArgs['orderBy'] }
        : { orderBy?: SuperUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SuperUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuperUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SuperUser model
   */
  readonly fields: SuperUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SuperUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SuperUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ReportsTo<T extends SuperUser$ReportsToArgs<ExtArgs> = {}>(args?: Subset<T, SuperUser$ReportsToArgs<ExtArgs>>): Prisma__SuperUserClient<$Result.GetResult<Prisma.$SuperUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Subordinates<T extends SuperUser$SubordinatesArgs<ExtArgs> = {}>(args?: Subset<T, SuperUser$SubordinatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuperUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SuperUser model
   */
  interface SuperUserFieldRefs {
    readonly superUserId: FieldRef<"SuperUser", 'BigInt'>
    readonly username: FieldRef<"SuperUser", 'String'>
    readonly email: FieldRef<"SuperUser", 'String'>
    readonly password: FieldRef<"SuperUser", 'String'>
    readonly phonenumber: FieldRef<"SuperUser", 'String'>
    readonly status: FieldRef<"SuperUser", 'Boolean'>
    readonly clientId: FieldRef<"SuperUser", 'BigInt'>
    readonly roleId: FieldRef<"SuperUser", 'BigInt'>
    readonly createddate: FieldRef<"SuperUser", 'DateTime'>
    readonly updateddate: FieldRef<"SuperUser", 'DateTime'>
    readonly IsAdmin: FieldRef<"SuperUser", 'Boolean'>
    readonly reportsToId: FieldRef<"SuperUser", 'BigInt'>
    readonly person_name: FieldRef<"SuperUser", 'String'>
    readonly passwordResetToken: FieldRef<"SuperUser", 'String'>
    readonly passwordResetExpires: FieldRef<"SuperUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SuperUser findUnique
   */
  export type SuperUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperUser
     */
    select?: SuperUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperUser
     */
    omit?: SuperUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperUserInclude<ExtArgs> | null
    /**
     * Filter, which SuperUser to fetch.
     */
    where: SuperUserWhereUniqueInput
  }

  /**
   * SuperUser findUniqueOrThrow
   */
  export type SuperUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperUser
     */
    select?: SuperUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperUser
     */
    omit?: SuperUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperUserInclude<ExtArgs> | null
    /**
     * Filter, which SuperUser to fetch.
     */
    where: SuperUserWhereUniqueInput
  }

  /**
   * SuperUser findFirst
   */
  export type SuperUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperUser
     */
    select?: SuperUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperUser
     */
    omit?: SuperUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperUserInclude<ExtArgs> | null
    /**
     * Filter, which SuperUser to fetch.
     */
    where?: SuperUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuperUsers to fetch.
     */
    orderBy?: SuperUserOrderByWithRelationInput | SuperUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SuperUsers.
     */
    cursor?: SuperUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuperUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuperUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SuperUsers.
     */
    distinct?: SuperUserScalarFieldEnum | SuperUserScalarFieldEnum[]
  }

  /**
   * SuperUser findFirstOrThrow
   */
  export type SuperUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperUser
     */
    select?: SuperUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperUser
     */
    omit?: SuperUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperUserInclude<ExtArgs> | null
    /**
     * Filter, which SuperUser to fetch.
     */
    where?: SuperUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuperUsers to fetch.
     */
    orderBy?: SuperUserOrderByWithRelationInput | SuperUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SuperUsers.
     */
    cursor?: SuperUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuperUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuperUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SuperUsers.
     */
    distinct?: SuperUserScalarFieldEnum | SuperUserScalarFieldEnum[]
  }

  /**
   * SuperUser findMany
   */
  export type SuperUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperUser
     */
    select?: SuperUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperUser
     */
    omit?: SuperUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperUserInclude<ExtArgs> | null
    /**
     * Filter, which SuperUsers to fetch.
     */
    where?: SuperUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuperUsers to fetch.
     */
    orderBy?: SuperUserOrderByWithRelationInput | SuperUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SuperUsers.
     */
    cursor?: SuperUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuperUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuperUsers.
     */
    skip?: number
    distinct?: SuperUserScalarFieldEnum | SuperUserScalarFieldEnum[]
  }

  /**
   * SuperUser create
   */
  export type SuperUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperUser
     */
    select?: SuperUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperUser
     */
    omit?: SuperUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperUserInclude<ExtArgs> | null
    /**
     * The data needed to create a SuperUser.
     */
    data: XOR<SuperUserCreateInput, SuperUserUncheckedCreateInput>
  }

  /**
   * SuperUser createMany
   */
  export type SuperUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SuperUsers.
     */
    data: SuperUserCreateManyInput | SuperUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SuperUser createManyAndReturn
   */
  export type SuperUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperUser
     */
    select?: SuperUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SuperUser
     */
    omit?: SuperUserOmit<ExtArgs> | null
    /**
     * The data used to create many SuperUsers.
     */
    data: SuperUserCreateManyInput | SuperUserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperUserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SuperUser update
   */
  export type SuperUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperUser
     */
    select?: SuperUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperUser
     */
    omit?: SuperUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperUserInclude<ExtArgs> | null
    /**
     * The data needed to update a SuperUser.
     */
    data: XOR<SuperUserUpdateInput, SuperUserUncheckedUpdateInput>
    /**
     * Choose, which SuperUser to update.
     */
    where: SuperUserWhereUniqueInput
  }

  /**
   * SuperUser updateMany
   */
  export type SuperUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SuperUsers.
     */
    data: XOR<SuperUserUpdateManyMutationInput, SuperUserUncheckedUpdateManyInput>
    /**
     * Filter which SuperUsers to update
     */
    where?: SuperUserWhereInput
    /**
     * Limit how many SuperUsers to update.
     */
    limit?: number
  }

  /**
   * SuperUser updateManyAndReturn
   */
  export type SuperUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperUser
     */
    select?: SuperUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SuperUser
     */
    omit?: SuperUserOmit<ExtArgs> | null
    /**
     * The data used to update SuperUsers.
     */
    data: XOR<SuperUserUpdateManyMutationInput, SuperUserUncheckedUpdateManyInput>
    /**
     * Filter which SuperUsers to update
     */
    where?: SuperUserWhereInput
    /**
     * Limit how many SuperUsers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperUserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SuperUser upsert
   */
  export type SuperUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperUser
     */
    select?: SuperUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperUser
     */
    omit?: SuperUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperUserInclude<ExtArgs> | null
    /**
     * The filter to search for the SuperUser to update in case it exists.
     */
    where: SuperUserWhereUniqueInput
    /**
     * In case the SuperUser found by the `where` argument doesn't exist, create a new SuperUser with this data.
     */
    create: XOR<SuperUserCreateInput, SuperUserUncheckedCreateInput>
    /**
     * In case the SuperUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SuperUserUpdateInput, SuperUserUncheckedUpdateInput>
  }

  /**
   * SuperUser delete
   */
  export type SuperUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperUser
     */
    select?: SuperUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperUser
     */
    omit?: SuperUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperUserInclude<ExtArgs> | null
    /**
     * Filter which SuperUser to delete.
     */
    where: SuperUserWhereUniqueInput
  }

  /**
   * SuperUser deleteMany
   */
  export type SuperUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SuperUsers to delete
     */
    where?: SuperUserWhereInput
    /**
     * Limit how many SuperUsers to delete.
     */
    limit?: number
  }

  /**
   * SuperUser.ReportsTo
   */
  export type SuperUser$ReportsToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperUser
     */
    select?: SuperUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperUser
     */
    omit?: SuperUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperUserInclude<ExtArgs> | null
    where?: SuperUserWhereInput
  }

  /**
   * SuperUser.Subordinates
   */
  export type SuperUser$SubordinatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperUser
     */
    select?: SuperUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperUser
     */
    omit?: SuperUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperUserInclude<ExtArgs> | null
    where?: SuperUserWhereInput
    orderBy?: SuperUserOrderByWithRelationInput | SuperUserOrderByWithRelationInput[]
    cursor?: SuperUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SuperUserScalarFieldEnum | SuperUserScalarFieldEnum[]
  }

  /**
   * SuperUser without action
   */
  export type SuperUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperUser
     */
    select?: SuperUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperUser
     */
    omit?: SuperUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperUserInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ClientInfoScalarFieldEnum: {
    ClientInfoID: 'ClientInfoID',
    client_name: 'client_name',
    firm_name: 'firm_name',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at',
    updated_by: 'updated_by'
  };

  export type ClientInfoScalarFieldEnum = (typeof ClientInfoScalarFieldEnum)[keyof typeof ClientInfoScalarFieldEnum]


  export const ClientDetailsScalarFieldEnum: {
    ClientDetailsID: 'ClientDetailsID',
    email: 'email',
    contact_number: 'contact_number',
    address: 'address',
    state_name: 'state_name',
    state_isoCode: 'state_isoCode',
    brand: 'brand',
    country_name: 'country_name',
    country_isoCode: 'country_isoCode',
    country_phonecode: 'country_phonecode',
    currency: 'currency',
    agreement_date: 'agreement_date',
    renewal_date: 'renewal_date',
    address_proof: 'address_proof',
    tax_proof: 'tax_proof',
    logo_exists: 'logo_exists',
    file_name: 'file_name',
    file_extension: 'file_extension',
    created_at: 'created_at',
    updated_at: 'updated_at',
    ClientInfoID: 'ClientInfoID'
  };

  export type ClientDetailsScalarFieldEnum = (typeof ClientDetailsScalarFieldEnum)[keyof typeof ClientDetailsScalarFieldEnum]


  export const ClientInfoLogScalarFieldEnum: {
    ClientInfoLogId: 'ClientInfoLogId',
    clientId: 'clientId',
    renewalDate: 'renewalDate',
    createdAt: 'createdAt',
    createdBy: 'createdBy'
  };

  export type ClientInfoLogScalarFieldEnum = (typeof ClientInfoLogScalarFieldEnum)[keyof typeof ClientInfoLogScalarFieldEnum]


  export const UserScalarFieldEnum: {
    UserID: 'UserID',
    username: 'username',
    email: 'email',
    password: 'password',
    phonenumber: 'phonenumber',
    status: 'status',
    clientId: 'clientId',
    roleId: 'roleId',
    createddate: 'createddate',
    updateddate: 'updateddate',
    IsAdmin: 'IsAdmin',
    reportsTo: 'reportsTo',
    person_name: 'person_name',
    passwordResetToken: 'passwordResetToken',
    passwordResetExpires: 'passwordResetExpires'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    RoleID: 'RoleID',
    rolename: 'rolename',
    clientId: 'clientId',
    createdBy: 'createdBy',
    createddate: 'createddate',
    updateddate: 'updateddate'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const MenuScalarFieldEnum: {
    MenuID: 'MenuID',
    menu_name: 'menu_name',
    icon_code: 'icon_code',
    created_at: 'created_at'
  };

  export type MenuScalarFieldEnum = (typeof MenuScalarFieldEnum)[keyof typeof MenuScalarFieldEnum]


  export const MenuItemScalarFieldEnum: {
    MenuItemID: 'MenuItemID',
    menuId: 'menuId',
    display_name: 'display_name',
    action_url: 'action_url',
    sort: 'sort',
    created_at: 'created_at',
    icon_code: 'icon_code',
    status: 'status'
  };

  export type MenuItemScalarFieldEnum = (typeof MenuItemScalarFieldEnum)[keyof typeof MenuItemScalarFieldEnum]


  export const CountryScalarFieldEnum: {
    CountryID: 'CountryID',
    isoCode: 'isoCode',
    name: 'name',
    phonecode: 'phonecode',
    flag: 'flag',
    currency: 'currency',
    latitude: 'latitude',
    longitude: 'longitude',
    createdAt: 'createdAt'
  };

  export type CountryScalarFieldEnum = (typeof CountryScalarFieldEnum)[keyof typeof CountryScalarFieldEnum]


  export const StateScalarFieldEnum: {
    stateId: 'stateId',
    name: 'name',
    isoCode: 'isoCode',
    countryCode: 'countryCode',
    latitude: 'latitude',
    longitude: 'longitude',
    createdAt: 'createdAt'
  };

  export type StateScalarFieldEnum = (typeof StateScalarFieldEnum)[keyof typeof StateScalarFieldEnum]


  export const SuperUserScalarFieldEnum: {
    superUserId: 'superUserId',
    username: 'username',
    email: 'email',
    password: 'password',
    phonenumber: 'phonenumber',
    status: 'status',
    clientId: 'clientId',
    roleId: 'roleId',
    createddate: 'createddate',
    updateddate: 'updateddate',
    IsAdmin: 'IsAdmin',
    reportsToId: 'reportsToId',
    person_name: 'person_name',
    passwordResetToken: 'passwordResetToken',
    passwordResetExpires: 'passwordResetExpires'
  };

  export type SuperUserScalarFieldEnum = (typeof SuperUserScalarFieldEnum)[keyof typeof SuperUserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ClientInfoWhereInput = {
    AND?: ClientInfoWhereInput | ClientInfoWhereInput[]
    OR?: ClientInfoWhereInput[]
    NOT?: ClientInfoWhereInput | ClientInfoWhereInput[]
    ClientInfoID?: BigIntFilter<"ClientInfo"> | bigint | number
    client_name?: StringFilter<"ClientInfo"> | string
    firm_name?: StringFilter<"ClientInfo"> | string
    status?: IntNullableFilter<"ClientInfo"> | number | null
    created_at?: DateTimeFilter<"ClientInfo"> | Date | string
    updated_at?: DateTimeFilter<"ClientInfo"> | Date | string
    updated_by?: IntNullableFilter<"ClientInfo"> | number | null
    ClientDetails?: ClientDetailsListRelationFilter
    User?: UserListRelationFilter
    Role?: RoleListRelationFilter
    ClientInfoLog?: ClientInfoLogListRelationFilter
  }

  export type ClientInfoOrderByWithRelationInput = {
    ClientInfoID?: SortOrder
    client_name?: SortOrder
    firm_name?: SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrderInput | SortOrder
    ClientDetails?: ClientDetailsOrderByRelationAggregateInput
    User?: UserOrderByRelationAggregateInput
    Role?: RoleOrderByRelationAggregateInput
    ClientInfoLog?: ClientInfoLogOrderByRelationAggregateInput
  }

  export type ClientInfoWhereUniqueInput = Prisma.AtLeast<{
    ClientInfoID?: bigint | number
    client_name?: string
    AND?: ClientInfoWhereInput | ClientInfoWhereInput[]
    OR?: ClientInfoWhereInput[]
    NOT?: ClientInfoWhereInput | ClientInfoWhereInput[]
    firm_name?: StringFilter<"ClientInfo"> | string
    status?: IntNullableFilter<"ClientInfo"> | number | null
    created_at?: DateTimeFilter<"ClientInfo"> | Date | string
    updated_at?: DateTimeFilter<"ClientInfo"> | Date | string
    updated_by?: IntNullableFilter<"ClientInfo"> | number | null
    ClientDetails?: ClientDetailsListRelationFilter
    User?: UserListRelationFilter
    Role?: RoleListRelationFilter
    ClientInfoLog?: ClientInfoLogListRelationFilter
  }, "ClientInfoID" | "client_name">

  export type ClientInfoOrderByWithAggregationInput = {
    ClientInfoID?: SortOrder
    client_name?: SortOrder
    firm_name?: SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrderInput | SortOrder
    _count?: ClientInfoCountOrderByAggregateInput
    _avg?: ClientInfoAvgOrderByAggregateInput
    _max?: ClientInfoMaxOrderByAggregateInput
    _min?: ClientInfoMinOrderByAggregateInput
    _sum?: ClientInfoSumOrderByAggregateInput
  }

  export type ClientInfoScalarWhereWithAggregatesInput = {
    AND?: ClientInfoScalarWhereWithAggregatesInput | ClientInfoScalarWhereWithAggregatesInput[]
    OR?: ClientInfoScalarWhereWithAggregatesInput[]
    NOT?: ClientInfoScalarWhereWithAggregatesInput | ClientInfoScalarWhereWithAggregatesInput[]
    ClientInfoID?: BigIntWithAggregatesFilter<"ClientInfo"> | bigint | number
    client_name?: StringWithAggregatesFilter<"ClientInfo"> | string
    firm_name?: StringWithAggregatesFilter<"ClientInfo"> | string
    status?: IntNullableWithAggregatesFilter<"ClientInfo"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"ClientInfo"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"ClientInfo"> | Date | string
    updated_by?: IntNullableWithAggregatesFilter<"ClientInfo"> | number | null
  }

  export type ClientDetailsWhereInput = {
    AND?: ClientDetailsWhereInput | ClientDetailsWhereInput[]
    OR?: ClientDetailsWhereInput[]
    NOT?: ClientDetailsWhereInput | ClientDetailsWhereInput[]
    ClientDetailsID?: BigIntFilter<"ClientDetails"> | bigint | number
    email?: StringFilter<"ClientDetails"> | string
    contact_number?: StringFilter<"ClientDetails"> | string
    address?: StringNullableFilter<"ClientDetails"> | string | null
    state_name?: StringNullableFilter<"ClientDetails"> | string | null
    state_isoCode?: StringNullableFilter<"ClientDetails"> | string | null
    brand?: StringNullableFilter<"ClientDetails"> | string | null
    country_name?: StringNullableFilter<"ClientDetails"> | string | null
    country_isoCode?: StringNullableFilter<"ClientDetails"> | string | null
    country_phonecode?: StringNullableFilter<"ClientDetails"> | string | null
    currency?: StringNullableFilter<"ClientDetails"> | string | null
    agreement_date?: DateTimeNullableFilter<"ClientDetails"> | Date | string | null
    renewal_date?: DateTimeNullableFilter<"ClientDetails"> | Date | string | null
    address_proof?: StringNullableFilter<"ClientDetails"> | string | null
    tax_proof?: StringNullableFilter<"ClientDetails"> | string | null
    logo_exists?: BoolNullableFilter<"ClientDetails"> | boolean | null
    file_name?: StringNullableFilter<"ClientDetails"> | string | null
    file_extension?: StringNullableFilter<"ClientDetails"> | string | null
    created_at?: DateTimeFilter<"ClientDetails"> | Date | string
    updated_at?: DateTimeFilter<"ClientDetails"> | Date | string
    ClientInfoID?: BigIntFilter<"ClientDetails"> | bigint | number
    country?: XOR<CountryNullableScalarRelationFilter, CountryWhereInput> | null
    ClientInfo?: XOR<ClientInfoScalarRelationFilter, ClientInfoWhereInput>
  }

  export type ClientDetailsOrderByWithRelationInput = {
    ClientDetailsID?: SortOrder
    email?: SortOrder
    contact_number?: SortOrder
    address?: SortOrderInput | SortOrder
    state_name?: SortOrderInput | SortOrder
    state_isoCode?: SortOrderInput | SortOrder
    brand?: SortOrderInput | SortOrder
    country_name?: SortOrderInput | SortOrder
    country_isoCode?: SortOrderInput | SortOrder
    country_phonecode?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    agreement_date?: SortOrderInput | SortOrder
    renewal_date?: SortOrderInput | SortOrder
    address_proof?: SortOrderInput | SortOrder
    tax_proof?: SortOrderInput | SortOrder
    logo_exists?: SortOrderInput | SortOrder
    file_name?: SortOrderInput | SortOrder
    file_extension?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    ClientInfoID?: SortOrder
    country?: CountryOrderByWithRelationInput
    ClientInfo?: ClientInfoOrderByWithRelationInput
  }

  export type ClientDetailsWhereUniqueInput = Prisma.AtLeast<{
    ClientDetailsID?: bigint | number
    ClientInfoID?: bigint | number
    AND?: ClientDetailsWhereInput | ClientDetailsWhereInput[]
    OR?: ClientDetailsWhereInput[]
    NOT?: ClientDetailsWhereInput | ClientDetailsWhereInput[]
    email?: StringFilter<"ClientDetails"> | string
    contact_number?: StringFilter<"ClientDetails"> | string
    address?: StringNullableFilter<"ClientDetails"> | string | null
    state_name?: StringNullableFilter<"ClientDetails"> | string | null
    state_isoCode?: StringNullableFilter<"ClientDetails"> | string | null
    brand?: StringNullableFilter<"ClientDetails"> | string | null
    country_name?: StringNullableFilter<"ClientDetails"> | string | null
    country_isoCode?: StringNullableFilter<"ClientDetails"> | string | null
    country_phonecode?: StringNullableFilter<"ClientDetails"> | string | null
    currency?: StringNullableFilter<"ClientDetails"> | string | null
    agreement_date?: DateTimeNullableFilter<"ClientDetails"> | Date | string | null
    renewal_date?: DateTimeNullableFilter<"ClientDetails"> | Date | string | null
    address_proof?: StringNullableFilter<"ClientDetails"> | string | null
    tax_proof?: StringNullableFilter<"ClientDetails"> | string | null
    logo_exists?: BoolNullableFilter<"ClientDetails"> | boolean | null
    file_name?: StringNullableFilter<"ClientDetails"> | string | null
    file_extension?: StringNullableFilter<"ClientDetails"> | string | null
    created_at?: DateTimeFilter<"ClientDetails"> | Date | string
    updated_at?: DateTimeFilter<"ClientDetails"> | Date | string
    country?: XOR<CountryNullableScalarRelationFilter, CountryWhereInput> | null
    ClientInfo?: XOR<ClientInfoScalarRelationFilter, ClientInfoWhereInput>
  }, "ClientDetailsID" | "ClientInfoID">

  export type ClientDetailsOrderByWithAggregationInput = {
    ClientDetailsID?: SortOrder
    email?: SortOrder
    contact_number?: SortOrder
    address?: SortOrderInput | SortOrder
    state_name?: SortOrderInput | SortOrder
    state_isoCode?: SortOrderInput | SortOrder
    brand?: SortOrderInput | SortOrder
    country_name?: SortOrderInput | SortOrder
    country_isoCode?: SortOrderInput | SortOrder
    country_phonecode?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    agreement_date?: SortOrderInput | SortOrder
    renewal_date?: SortOrderInput | SortOrder
    address_proof?: SortOrderInput | SortOrder
    tax_proof?: SortOrderInput | SortOrder
    logo_exists?: SortOrderInput | SortOrder
    file_name?: SortOrderInput | SortOrder
    file_extension?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    ClientInfoID?: SortOrder
    _count?: ClientDetailsCountOrderByAggregateInput
    _avg?: ClientDetailsAvgOrderByAggregateInput
    _max?: ClientDetailsMaxOrderByAggregateInput
    _min?: ClientDetailsMinOrderByAggregateInput
    _sum?: ClientDetailsSumOrderByAggregateInput
  }

  export type ClientDetailsScalarWhereWithAggregatesInput = {
    AND?: ClientDetailsScalarWhereWithAggregatesInput | ClientDetailsScalarWhereWithAggregatesInput[]
    OR?: ClientDetailsScalarWhereWithAggregatesInput[]
    NOT?: ClientDetailsScalarWhereWithAggregatesInput | ClientDetailsScalarWhereWithAggregatesInput[]
    ClientDetailsID?: BigIntWithAggregatesFilter<"ClientDetails"> | bigint | number
    email?: StringWithAggregatesFilter<"ClientDetails"> | string
    contact_number?: StringWithAggregatesFilter<"ClientDetails"> | string
    address?: StringNullableWithAggregatesFilter<"ClientDetails"> | string | null
    state_name?: StringNullableWithAggregatesFilter<"ClientDetails"> | string | null
    state_isoCode?: StringNullableWithAggregatesFilter<"ClientDetails"> | string | null
    brand?: StringNullableWithAggregatesFilter<"ClientDetails"> | string | null
    country_name?: StringNullableWithAggregatesFilter<"ClientDetails"> | string | null
    country_isoCode?: StringNullableWithAggregatesFilter<"ClientDetails"> | string | null
    country_phonecode?: StringNullableWithAggregatesFilter<"ClientDetails"> | string | null
    currency?: StringNullableWithAggregatesFilter<"ClientDetails"> | string | null
    agreement_date?: DateTimeNullableWithAggregatesFilter<"ClientDetails"> | Date | string | null
    renewal_date?: DateTimeNullableWithAggregatesFilter<"ClientDetails"> | Date | string | null
    address_proof?: StringNullableWithAggregatesFilter<"ClientDetails"> | string | null
    tax_proof?: StringNullableWithAggregatesFilter<"ClientDetails"> | string | null
    logo_exists?: BoolNullableWithAggregatesFilter<"ClientDetails"> | boolean | null
    file_name?: StringNullableWithAggregatesFilter<"ClientDetails"> | string | null
    file_extension?: StringNullableWithAggregatesFilter<"ClientDetails"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"ClientDetails"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"ClientDetails"> | Date | string
    ClientInfoID?: BigIntWithAggregatesFilter<"ClientDetails"> | bigint | number
  }

  export type ClientInfoLogWhereInput = {
    AND?: ClientInfoLogWhereInput | ClientInfoLogWhereInput[]
    OR?: ClientInfoLogWhereInput[]
    NOT?: ClientInfoLogWhereInput | ClientInfoLogWhereInput[]
    ClientInfoLogId?: BigIntFilter<"ClientInfoLog"> | bigint | number
    clientId?: BigIntNullableFilter<"ClientInfoLog"> | bigint | number | null
    renewalDate?: DateTimeNullableFilter<"ClientInfoLog"> | Date | string | null
    createdAt?: DateTimeNullableFilter<"ClientInfoLog"> | Date | string | null
    createdBy?: BigIntNullableFilter<"ClientInfoLog"> | bigint | number | null
    client?: XOR<ClientInfoNullableScalarRelationFilter, ClientInfoWhereInput> | null
    createdUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ClientInfoLogOrderByWithRelationInput = {
    ClientInfoLogId?: SortOrder
    clientId?: SortOrderInput | SortOrder
    renewalDate?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    client?: ClientInfoOrderByWithRelationInput
    createdUser?: UserOrderByWithRelationInput
  }

  export type ClientInfoLogWhereUniqueInput = Prisma.AtLeast<{
    ClientInfoLogId?: bigint | number
    AND?: ClientInfoLogWhereInput | ClientInfoLogWhereInput[]
    OR?: ClientInfoLogWhereInput[]
    NOT?: ClientInfoLogWhereInput | ClientInfoLogWhereInput[]
    clientId?: BigIntNullableFilter<"ClientInfoLog"> | bigint | number | null
    renewalDate?: DateTimeNullableFilter<"ClientInfoLog"> | Date | string | null
    createdAt?: DateTimeNullableFilter<"ClientInfoLog"> | Date | string | null
    createdBy?: BigIntNullableFilter<"ClientInfoLog"> | bigint | number | null
    client?: XOR<ClientInfoNullableScalarRelationFilter, ClientInfoWhereInput> | null
    createdUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "ClientInfoLogId">

  export type ClientInfoLogOrderByWithAggregationInput = {
    ClientInfoLogId?: SortOrder
    clientId?: SortOrderInput | SortOrder
    renewalDate?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    _count?: ClientInfoLogCountOrderByAggregateInput
    _avg?: ClientInfoLogAvgOrderByAggregateInput
    _max?: ClientInfoLogMaxOrderByAggregateInput
    _min?: ClientInfoLogMinOrderByAggregateInput
    _sum?: ClientInfoLogSumOrderByAggregateInput
  }

  export type ClientInfoLogScalarWhereWithAggregatesInput = {
    AND?: ClientInfoLogScalarWhereWithAggregatesInput | ClientInfoLogScalarWhereWithAggregatesInput[]
    OR?: ClientInfoLogScalarWhereWithAggregatesInput[]
    NOT?: ClientInfoLogScalarWhereWithAggregatesInput | ClientInfoLogScalarWhereWithAggregatesInput[]
    ClientInfoLogId?: BigIntWithAggregatesFilter<"ClientInfoLog"> | bigint | number
    clientId?: BigIntNullableWithAggregatesFilter<"ClientInfoLog"> | bigint | number | null
    renewalDate?: DateTimeNullableWithAggregatesFilter<"ClientInfoLog"> | Date | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"ClientInfoLog"> | Date | string | null
    createdBy?: BigIntNullableWithAggregatesFilter<"ClientInfoLog"> | bigint | number | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    UserID?: BigIntFilter<"User"> | bigint | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phonenumber?: StringFilter<"User"> | string
    status?: BoolFilter<"User"> | boolean
    clientId?: BigIntFilter<"User"> | bigint | number
    roleId?: BigIntFilter<"User"> | bigint | number
    createddate?: DateTimeFilter<"User"> | Date | string
    updateddate?: DateTimeNullableFilter<"User"> | Date | string | null
    IsAdmin?: BoolFilter<"User"> | boolean
    reportsTo?: BigIntNullableFilter<"User"> | bigint | number | null
    person_name?: StringNullableFilter<"User"> | string | null
    passwordResetToken?: StringNullableFilter<"User"> | string | null
    passwordResetExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    ClientInfo?: XOR<ClientInfoScalarRelationFilter, ClientInfoWhereInput>
    Role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    ReportsToUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    Subordinates?: UserListRelationFilter
    roleuser?: RoleListRelationFilter
    ClientInfoLog?: ClientInfoLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    UserID?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phonenumber?: SortOrder
    status?: SortOrder
    clientId?: SortOrder
    roleId?: SortOrder
    createddate?: SortOrder
    updateddate?: SortOrderInput | SortOrder
    IsAdmin?: SortOrder
    reportsTo?: SortOrderInput | SortOrder
    person_name?: SortOrderInput | SortOrder
    passwordResetToken?: SortOrderInput | SortOrder
    passwordResetExpires?: SortOrderInput | SortOrder
    ClientInfo?: ClientInfoOrderByWithRelationInput
    Role?: RoleOrderByWithRelationInput
    ReportsToUser?: UserOrderByWithRelationInput
    Subordinates?: UserOrderByRelationAggregateInput
    roleuser?: RoleOrderByRelationAggregateInput
    ClientInfoLog?: ClientInfoLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    UserID?: bigint | number
    email?: string
    email_clientId?: UserEmailClientIdCompoundUniqueInput
    username_clientId?: UserUsernameClientIdCompoundUniqueInput
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phonenumber?: StringFilter<"User"> | string
    status?: BoolFilter<"User"> | boolean
    clientId?: BigIntFilter<"User"> | bigint | number
    roleId?: BigIntFilter<"User"> | bigint | number
    createddate?: DateTimeFilter<"User"> | Date | string
    updateddate?: DateTimeNullableFilter<"User"> | Date | string | null
    IsAdmin?: BoolFilter<"User"> | boolean
    reportsTo?: BigIntNullableFilter<"User"> | bigint | number | null
    person_name?: StringNullableFilter<"User"> | string | null
    passwordResetToken?: StringNullableFilter<"User"> | string | null
    passwordResetExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    ClientInfo?: XOR<ClientInfoScalarRelationFilter, ClientInfoWhereInput>
    Role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    ReportsToUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    Subordinates?: UserListRelationFilter
    roleuser?: RoleListRelationFilter
    ClientInfoLog?: ClientInfoLogListRelationFilter
  }, "UserID" | "email" | "email_clientId" | "username_clientId">

  export type UserOrderByWithAggregationInput = {
    UserID?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phonenumber?: SortOrder
    status?: SortOrder
    clientId?: SortOrder
    roleId?: SortOrder
    createddate?: SortOrder
    updateddate?: SortOrderInput | SortOrder
    IsAdmin?: SortOrder
    reportsTo?: SortOrderInput | SortOrder
    person_name?: SortOrderInput | SortOrder
    passwordResetToken?: SortOrderInput | SortOrder
    passwordResetExpires?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    UserID?: BigIntWithAggregatesFilter<"User"> | bigint | number
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    phonenumber?: StringWithAggregatesFilter<"User"> | string
    status?: BoolWithAggregatesFilter<"User"> | boolean
    clientId?: BigIntWithAggregatesFilter<"User"> | bigint | number
    roleId?: BigIntWithAggregatesFilter<"User"> | bigint | number
    createddate?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updateddate?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    IsAdmin?: BoolWithAggregatesFilter<"User"> | boolean
    reportsTo?: BigIntNullableWithAggregatesFilter<"User"> | bigint | number | null
    person_name?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordResetToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordResetExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    RoleID?: BigIntFilter<"Role"> | bigint | number
    rolename?: StringFilter<"Role"> | string
    clientId?: BigIntNullableFilter<"Role"> | bigint | number | null
    createdBy?: BigIntNullableFilter<"Role"> | bigint | number | null
    createddate?: DateTimeNullableFilter<"Role"> | Date | string | null
    updateddate?: DateTimeNullableFilter<"Role"> | Date | string | null
    ClientInfo?: XOR<ClientInfoNullableScalarRelationFilter, ClientInfoWhereInput> | null
    CreatedByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    Users?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    RoleID?: SortOrder
    rolename?: SortOrder
    clientId?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    createddate?: SortOrderInput | SortOrder
    updateddate?: SortOrderInput | SortOrder
    ClientInfo?: ClientInfoOrderByWithRelationInput
    CreatedByUser?: UserOrderByWithRelationInput
    Users?: UserOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    RoleID?: bigint | number
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    rolename?: StringFilter<"Role"> | string
    clientId?: BigIntNullableFilter<"Role"> | bigint | number | null
    createdBy?: BigIntNullableFilter<"Role"> | bigint | number | null
    createddate?: DateTimeNullableFilter<"Role"> | Date | string | null
    updateddate?: DateTimeNullableFilter<"Role"> | Date | string | null
    ClientInfo?: XOR<ClientInfoNullableScalarRelationFilter, ClientInfoWhereInput> | null
    CreatedByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    Users?: UserListRelationFilter
  }, "RoleID">

  export type RoleOrderByWithAggregationInput = {
    RoleID?: SortOrder
    rolename?: SortOrder
    clientId?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    createddate?: SortOrderInput | SortOrder
    updateddate?: SortOrderInput | SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    RoleID?: BigIntWithAggregatesFilter<"Role"> | bigint | number
    rolename?: StringWithAggregatesFilter<"Role"> | string
    clientId?: BigIntNullableWithAggregatesFilter<"Role"> | bigint | number | null
    createdBy?: BigIntNullableWithAggregatesFilter<"Role"> | bigint | number | null
    createddate?: DateTimeNullableWithAggregatesFilter<"Role"> | Date | string | null
    updateddate?: DateTimeNullableWithAggregatesFilter<"Role"> | Date | string | null
  }

  export type MenuWhereInput = {
    AND?: MenuWhereInput | MenuWhereInput[]
    OR?: MenuWhereInput[]
    NOT?: MenuWhereInput | MenuWhereInput[]
    MenuID?: BigIntFilter<"Menu"> | bigint | number
    menu_name?: StringFilter<"Menu"> | string
    icon_code?: StringFilter<"Menu"> | string
    created_at?: DateTimeFilter<"Menu"> | Date | string
    MenuItems?: MenuItemListRelationFilter
  }

  export type MenuOrderByWithRelationInput = {
    MenuID?: SortOrder
    menu_name?: SortOrder
    icon_code?: SortOrder
    created_at?: SortOrder
    MenuItems?: MenuItemOrderByRelationAggregateInput
  }

  export type MenuWhereUniqueInput = Prisma.AtLeast<{
    MenuID?: bigint | number
    AND?: MenuWhereInput | MenuWhereInput[]
    OR?: MenuWhereInput[]
    NOT?: MenuWhereInput | MenuWhereInput[]
    menu_name?: StringFilter<"Menu"> | string
    icon_code?: StringFilter<"Menu"> | string
    created_at?: DateTimeFilter<"Menu"> | Date | string
    MenuItems?: MenuItemListRelationFilter
  }, "MenuID">

  export type MenuOrderByWithAggregationInput = {
    MenuID?: SortOrder
    menu_name?: SortOrder
    icon_code?: SortOrder
    created_at?: SortOrder
    _count?: MenuCountOrderByAggregateInput
    _avg?: MenuAvgOrderByAggregateInput
    _max?: MenuMaxOrderByAggregateInput
    _min?: MenuMinOrderByAggregateInput
    _sum?: MenuSumOrderByAggregateInput
  }

  export type MenuScalarWhereWithAggregatesInput = {
    AND?: MenuScalarWhereWithAggregatesInput | MenuScalarWhereWithAggregatesInput[]
    OR?: MenuScalarWhereWithAggregatesInput[]
    NOT?: MenuScalarWhereWithAggregatesInput | MenuScalarWhereWithAggregatesInput[]
    MenuID?: BigIntWithAggregatesFilter<"Menu"> | bigint | number
    menu_name?: StringWithAggregatesFilter<"Menu"> | string
    icon_code?: StringWithAggregatesFilter<"Menu"> | string
    created_at?: DateTimeWithAggregatesFilter<"Menu"> | Date | string
  }

  export type MenuItemWhereInput = {
    AND?: MenuItemWhereInput | MenuItemWhereInput[]
    OR?: MenuItemWhereInput[]
    NOT?: MenuItemWhereInput | MenuItemWhereInput[]
    MenuItemID?: BigIntFilter<"MenuItem"> | bigint | number
    menuId?: BigIntFilter<"MenuItem"> | bigint | number
    display_name?: StringFilter<"MenuItem"> | string
    action_url?: StringFilter<"MenuItem"> | string
    sort?: IntFilter<"MenuItem"> | number
    created_at?: DateTimeFilter<"MenuItem"> | Date | string
    icon_code?: StringNullableFilter<"MenuItem"> | string | null
    status?: IntFilter<"MenuItem"> | number
    Menu?: XOR<MenuScalarRelationFilter, MenuWhereInput>
  }

  export type MenuItemOrderByWithRelationInput = {
    MenuItemID?: SortOrder
    menuId?: SortOrder
    display_name?: SortOrder
    action_url?: SortOrder
    sort?: SortOrder
    created_at?: SortOrder
    icon_code?: SortOrderInput | SortOrder
    status?: SortOrder
    Menu?: MenuOrderByWithRelationInput
  }

  export type MenuItemWhereUniqueInput = Prisma.AtLeast<{
    MenuItemID?: bigint | number
    AND?: MenuItemWhereInput | MenuItemWhereInput[]
    OR?: MenuItemWhereInput[]
    NOT?: MenuItemWhereInput | MenuItemWhereInput[]
    menuId?: BigIntFilter<"MenuItem"> | bigint | number
    display_name?: StringFilter<"MenuItem"> | string
    action_url?: StringFilter<"MenuItem"> | string
    sort?: IntFilter<"MenuItem"> | number
    created_at?: DateTimeFilter<"MenuItem"> | Date | string
    icon_code?: StringNullableFilter<"MenuItem"> | string | null
    status?: IntFilter<"MenuItem"> | number
    Menu?: XOR<MenuScalarRelationFilter, MenuWhereInput>
  }, "MenuItemID">

  export type MenuItemOrderByWithAggregationInput = {
    MenuItemID?: SortOrder
    menuId?: SortOrder
    display_name?: SortOrder
    action_url?: SortOrder
    sort?: SortOrder
    created_at?: SortOrder
    icon_code?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: MenuItemCountOrderByAggregateInput
    _avg?: MenuItemAvgOrderByAggregateInput
    _max?: MenuItemMaxOrderByAggregateInput
    _min?: MenuItemMinOrderByAggregateInput
    _sum?: MenuItemSumOrderByAggregateInput
  }

  export type MenuItemScalarWhereWithAggregatesInput = {
    AND?: MenuItemScalarWhereWithAggregatesInput | MenuItemScalarWhereWithAggregatesInput[]
    OR?: MenuItemScalarWhereWithAggregatesInput[]
    NOT?: MenuItemScalarWhereWithAggregatesInput | MenuItemScalarWhereWithAggregatesInput[]
    MenuItemID?: BigIntWithAggregatesFilter<"MenuItem"> | bigint | number
    menuId?: BigIntWithAggregatesFilter<"MenuItem"> | bigint | number
    display_name?: StringWithAggregatesFilter<"MenuItem"> | string
    action_url?: StringWithAggregatesFilter<"MenuItem"> | string
    sort?: IntWithAggregatesFilter<"MenuItem"> | number
    created_at?: DateTimeWithAggregatesFilter<"MenuItem"> | Date | string
    icon_code?: StringNullableWithAggregatesFilter<"MenuItem"> | string | null
    status?: IntWithAggregatesFilter<"MenuItem"> | number
  }

  export type CountryWhereInput = {
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    CountryID?: BigIntFilter<"Country"> | bigint | number
    isoCode?: StringFilter<"Country"> | string
    name?: StringFilter<"Country"> | string
    phonecode?: StringFilter<"Country"> | string
    flag?: StringNullableFilter<"Country"> | string | null
    currency?: StringNullableFilter<"Country"> | string | null
    latitude?: StringNullableFilter<"Country"> | string | null
    longitude?: StringNullableFilter<"Country"> | string | null
    createdAt?: DateTimeNullableFilter<"Country"> | Date | string | null
    ClientDetails?: ClientDetailsListRelationFilter
  }

  export type CountryOrderByWithRelationInput = {
    CountryID?: SortOrder
    isoCode?: SortOrder
    name?: SortOrder
    phonecode?: SortOrder
    flag?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    ClientDetails?: ClientDetailsOrderByRelationAggregateInput
  }

  export type CountryWhereUniqueInput = Prisma.AtLeast<{
    CountryID?: bigint | number
    isoCode?: string
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    name?: StringFilter<"Country"> | string
    phonecode?: StringFilter<"Country"> | string
    flag?: StringNullableFilter<"Country"> | string | null
    currency?: StringNullableFilter<"Country"> | string | null
    latitude?: StringNullableFilter<"Country"> | string | null
    longitude?: StringNullableFilter<"Country"> | string | null
    createdAt?: DateTimeNullableFilter<"Country"> | Date | string | null
    ClientDetails?: ClientDetailsListRelationFilter
  }, "CountryID" | "isoCode">

  export type CountryOrderByWithAggregationInput = {
    CountryID?: SortOrder
    isoCode?: SortOrder
    name?: SortOrder
    phonecode?: SortOrder
    flag?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    _count?: CountryCountOrderByAggregateInput
    _avg?: CountryAvgOrderByAggregateInput
    _max?: CountryMaxOrderByAggregateInput
    _min?: CountryMinOrderByAggregateInput
    _sum?: CountrySumOrderByAggregateInput
  }

  export type CountryScalarWhereWithAggregatesInput = {
    AND?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    OR?: CountryScalarWhereWithAggregatesInput[]
    NOT?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    CountryID?: BigIntWithAggregatesFilter<"Country"> | bigint | number
    isoCode?: StringWithAggregatesFilter<"Country"> | string
    name?: StringWithAggregatesFilter<"Country"> | string
    phonecode?: StringWithAggregatesFilter<"Country"> | string
    flag?: StringNullableWithAggregatesFilter<"Country"> | string | null
    currency?: StringNullableWithAggregatesFilter<"Country"> | string | null
    latitude?: StringNullableWithAggregatesFilter<"Country"> | string | null
    longitude?: StringNullableWithAggregatesFilter<"Country"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"Country"> | Date | string | null
  }

  export type StateWhereInput = {
    AND?: StateWhereInput | StateWhereInput[]
    OR?: StateWhereInput[]
    NOT?: StateWhereInput | StateWhereInput[]
    stateId?: BigIntFilter<"State"> | bigint | number
    name?: StringFilter<"State"> | string
    isoCode?: StringFilter<"State"> | string
    countryCode?: StringFilter<"State"> | string
    latitude?: StringNullableFilter<"State"> | string | null
    longitude?: StringNullableFilter<"State"> | string | null
    createdAt?: DateTimeNullableFilter<"State"> | Date | string | null
  }

  export type StateOrderByWithRelationInput = {
    stateId?: SortOrder
    name?: SortOrder
    isoCode?: SortOrder
    countryCode?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
  }

  export type StateWhereUniqueInput = Prisma.AtLeast<{
    stateId?: bigint | number
    AND?: StateWhereInput | StateWhereInput[]
    OR?: StateWhereInput[]
    NOT?: StateWhereInput | StateWhereInput[]
    name?: StringFilter<"State"> | string
    isoCode?: StringFilter<"State"> | string
    countryCode?: StringFilter<"State"> | string
    latitude?: StringNullableFilter<"State"> | string | null
    longitude?: StringNullableFilter<"State"> | string | null
    createdAt?: DateTimeNullableFilter<"State"> | Date | string | null
  }, "stateId">

  export type StateOrderByWithAggregationInput = {
    stateId?: SortOrder
    name?: SortOrder
    isoCode?: SortOrder
    countryCode?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    _count?: StateCountOrderByAggregateInput
    _avg?: StateAvgOrderByAggregateInput
    _max?: StateMaxOrderByAggregateInput
    _min?: StateMinOrderByAggregateInput
    _sum?: StateSumOrderByAggregateInput
  }

  export type StateScalarWhereWithAggregatesInput = {
    AND?: StateScalarWhereWithAggregatesInput | StateScalarWhereWithAggregatesInput[]
    OR?: StateScalarWhereWithAggregatesInput[]
    NOT?: StateScalarWhereWithAggregatesInput | StateScalarWhereWithAggregatesInput[]
    stateId?: BigIntWithAggregatesFilter<"State"> | bigint | number
    name?: StringWithAggregatesFilter<"State"> | string
    isoCode?: StringWithAggregatesFilter<"State"> | string
    countryCode?: StringWithAggregatesFilter<"State"> | string
    latitude?: StringNullableWithAggregatesFilter<"State"> | string | null
    longitude?: StringNullableWithAggregatesFilter<"State"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"State"> | Date | string | null
  }

  export type SuperUserWhereInput = {
    AND?: SuperUserWhereInput | SuperUserWhereInput[]
    OR?: SuperUserWhereInput[]
    NOT?: SuperUserWhereInput | SuperUserWhereInput[]
    superUserId?: BigIntFilter<"SuperUser"> | bigint | number
    username?: StringFilter<"SuperUser"> | string
    email?: StringFilter<"SuperUser"> | string
    password?: StringFilter<"SuperUser"> | string
    phonenumber?: StringFilter<"SuperUser"> | string
    status?: BoolFilter<"SuperUser"> | boolean
    clientId?: BigIntNullableFilter<"SuperUser"> | bigint | number | null
    roleId?: BigIntNullableFilter<"SuperUser"> | bigint | number | null
    createddate?: DateTimeFilter<"SuperUser"> | Date | string
    updateddate?: DateTimeNullableFilter<"SuperUser"> | Date | string | null
    IsAdmin?: BoolFilter<"SuperUser"> | boolean
    reportsToId?: BigIntNullableFilter<"SuperUser"> | bigint | number | null
    person_name?: StringNullableFilter<"SuperUser"> | string | null
    passwordResetToken?: StringNullableFilter<"SuperUser"> | string | null
    passwordResetExpires?: DateTimeNullableFilter<"SuperUser"> | Date | string | null
    ReportsTo?: XOR<SuperUserNullableScalarRelationFilter, SuperUserWhereInput> | null
    Subordinates?: SuperUserListRelationFilter
  }

  export type SuperUserOrderByWithRelationInput = {
    superUserId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phonenumber?: SortOrder
    status?: SortOrder
    clientId?: SortOrderInput | SortOrder
    roleId?: SortOrderInput | SortOrder
    createddate?: SortOrder
    updateddate?: SortOrderInput | SortOrder
    IsAdmin?: SortOrder
    reportsToId?: SortOrderInput | SortOrder
    person_name?: SortOrderInput | SortOrder
    passwordResetToken?: SortOrderInput | SortOrder
    passwordResetExpires?: SortOrderInput | SortOrder
    ReportsTo?: SuperUserOrderByWithRelationInput
    Subordinates?: SuperUserOrderByRelationAggregateInput
  }

  export type SuperUserWhereUniqueInput = Prisma.AtLeast<{
    superUserId?: bigint | number
    AND?: SuperUserWhereInput | SuperUserWhereInput[]
    OR?: SuperUserWhereInput[]
    NOT?: SuperUserWhereInput | SuperUserWhereInput[]
    username?: StringFilter<"SuperUser"> | string
    email?: StringFilter<"SuperUser"> | string
    password?: StringFilter<"SuperUser"> | string
    phonenumber?: StringFilter<"SuperUser"> | string
    status?: BoolFilter<"SuperUser"> | boolean
    clientId?: BigIntNullableFilter<"SuperUser"> | bigint | number | null
    roleId?: BigIntNullableFilter<"SuperUser"> | bigint | number | null
    createddate?: DateTimeFilter<"SuperUser"> | Date | string
    updateddate?: DateTimeNullableFilter<"SuperUser"> | Date | string | null
    IsAdmin?: BoolFilter<"SuperUser"> | boolean
    reportsToId?: BigIntNullableFilter<"SuperUser"> | bigint | number | null
    person_name?: StringNullableFilter<"SuperUser"> | string | null
    passwordResetToken?: StringNullableFilter<"SuperUser"> | string | null
    passwordResetExpires?: DateTimeNullableFilter<"SuperUser"> | Date | string | null
    ReportsTo?: XOR<SuperUserNullableScalarRelationFilter, SuperUserWhereInput> | null
    Subordinates?: SuperUserListRelationFilter
  }, "superUserId">

  export type SuperUserOrderByWithAggregationInput = {
    superUserId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phonenumber?: SortOrder
    status?: SortOrder
    clientId?: SortOrderInput | SortOrder
    roleId?: SortOrderInput | SortOrder
    createddate?: SortOrder
    updateddate?: SortOrderInput | SortOrder
    IsAdmin?: SortOrder
    reportsToId?: SortOrderInput | SortOrder
    person_name?: SortOrderInput | SortOrder
    passwordResetToken?: SortOrderInput | SortOrder
    passwordResetExpires?: SortOrderInput | SortOrder
    _count?: SuperUserCountOrderByAggregateInput
    _avg?: SuperUserAvgOrderByAggregateInput
    _max?: SuperUserMaxOrderByAggregateInput
    _min?: SuperUserMinOrderByAggregateInput
    _sum?: SuperUserSumOrderByAggregateInput
  }

  export type SuperUserScalarWhereWithAggregatesInput = {
    AND?: SuperUserScalarWhereWithAggregatesInput | SuperUserScalarWhereWithAggregatesInput[]
    OR?: SuperUserScalarWhereWithAggregatesInput[]
    NOT?: SuperUserScalarWhereWithAggregatesInput | SuperUserScalarWhereWithAggregatesInput[]
    superUserId?: BigIntWithAggregatesFilter<"SuperUser"> | bigint | number
    username?: StringWithAggregatesFilter<"SuperUser"> | string
    email?: StringWithAggregatesFilter<"SuperUser"> | string
    password?: StringWithAggregatesFilter<"SuperUser"> | string
    phonenumber?: StringWithAggregatesFilter<"SuperUser"> | string
    status?: BoolWithAggregatesFilter<"SuperUser"> | boolean
    clientId?: BigIntNullableWithAggregatesFilter<"SuperUser"> | bigint | number | null
    roleId?: BigIntNullableWithAggregatesFilter<"SuperUser"> | bigint | number | null
    createddate?: DateTimeWithAggregatesFilter<"SuperUser"> | Date | string
    updateddate?: DateTimeNullableWithAggregatesFilter<"SuperUser"> | Date | string | null
    IsAdmin?: BoolWithAggregatesFilter<"SuperUser"> | boolean
    reportsToId?: BigIntNullableWithAggregatesFilter<"SuperUser"> | bigint | number | null
    person_name?: StringNullableWithAggregatesFilter<"SuperUser"> | string | null
    passwordResetToken?: StringNullableWithAggregatesFilter<"SuperUser"> | string | null
    passwordResetExpires?: DateTimeNullableWithAggregatesFilter<"SuperUser"> | Date | string | null
  }

  export type ClientInfoCreateInput = {
    ClientInfoID?: bigint | number
    client_name: string
    firm_name: string
    status?: number | null
    created_at: Date | string
    updated_at?: Date | string
    updated_by?: number | null
    ClientDetails?: ClientDetailsCreateNestedManyWithoutClientInfoInput
    User?: UserCreateNestedManyWithoutClientInfoInput
    Role?: RoleCreateNestedManyWithoutClientInfoInput
    ClientInfoLog?: ClientInfoLogCreateNestedManyWithoutClientInput
  }

  export type ClientInfoUncheckedCreateInput = {
    ClientInfoID?: bigint | number
    client_name: string
    firm_name: string
    status?: number | null
    created_at: Date | string
    updated_at?: Date | string
    updated_by?: number | null
    ClientDetails?: ClientDetailsUncheckedCreateNestedManyWithoutClientInfoInput
    User?: UserUncheckedCreateNestedManyWithoutClientInfoInput
    Role?: RoleUncheckedCreateNestedManyWithoutClientInfoInput
    ClientInfoLog?: ClientInfoLogUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientInfoUpdateInput = {
    ClientInfoID?: BigIntFieldUpdateOperationsInput | bigint | number
    client_name?: StringFieldUpdateOperationsInput | string
    firm_name?: StringFieldUpdateOperationsInput | string
    status?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    ClientDetails?: ClientDetailsUpdateManyWithoutClientInfoNestedInput
    User?: UserUpdateManyWithoutClientInfoNestedInput
    Role?: RoleUpdateManyWithoutClientInfoNestedInput
    ClientInfoLog?: ClientInfoLogUpdateManyWithoutClientNestedInput
  }

  export type ClientInfoUncheckedUpdateInput = {
    ClientInfoID?: BigIntFieldUpdateOperationsInput | bigint | number
    client_name?: StringFieldUpdateOperationsInput | string
    firm_name?: StringFieldUpdateOperationsInput | string
    status?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    ClientDetails?: ClientDetailsUncheckedUpdateManyWithoutClientInfoNestedInput
    User?: UserUncheckedUpdateManyWithoutClientInfoNestedInput
    Role?: RoleUncheckedUpdateManyWithoutClientInfoNestedInput
    ClientInfoLog?: ClientInfoLogUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientInfoCreateManyInput = {
    ClientInfoID?: bigint | number
    client_name: string
    firm_name: string
    status?: number | null
    created_at: Date | string
    updated_at?: Date | string
    updated_by?: number | null
  }

  export type ClientInfoUpdateManyMutationInput = {
    ClientInfoID?: BigIntFieldUpdateOperationsInput | bigint | number
    client_name?: StringFieldUpdateOperationsInput | string
    firm_name?: StringFieldUpdateOperationsInput | string
    status?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ClientInfoUncheckedUpdateManyInput = {
    ClientInfoID?: BigIntFieldUpdateOperationsInput | bigint | number
    client_name?: StringFieldUpdateOperationsInput | string
    firm_name?: StringFieldUpdateOperationsInput | string
    status?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ClientDetailsCreateInput = {
    ClientDetailsID?: bigint | number
    email: string
    contact_number: string
    address?: string | null
    state_name?: string | null
    state_isoCode?: string | null
    brand?: string | null
    country_name?: string | null
    country_phonecode?: string | null
    currency?: string | null
    agreement_date?: Date | string | null
    renewal_date?: Date | string | null
    address_proof?: string | null
    tax_proof?: string | null
    logo_exists?: boolean | null
    file_name?: string | null
    file_extension?: string | null
    created_at: Date | string
    updated_at?: Date | string
    country?: CountryCreateNestedOneWithoutClientDetailsInput
    ClientInfo: ClientInfoCreateNestedOneWithoutClientDetailsInput
  }

  export type ClientDetailsUncheckedCreateInput = {
    ClientDetailsID?: bigint | number
    email: string
    contact_number: string
    address?: string | null
    state_name?: string | null
    state_isoCode?: string | null
    brand?: string | null
    country_name?: string | null
    country_isoCode?: string | null
    country_phonecode?: string | null
    currency?: string | null
    agreement_date?: Date | string | null
    renewal_date?: Date | string | null
    address_proof?: string | null
    tax_proof?: string | null
    logo_exists?: boolean | null
    file_name?: string | null
    file_extension?: string | null
    created_at: Date | string
    updated_at?: Date | string
    ClientInfoID: bigint | number
  }

  export type ClientDetailsUpdateInput = {
    ClientDetailsID?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    contact_number?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    state_name?: NullableStringFieldUpdateOperationsInput | string | null
    state_isoCode?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    country_name?: NullableStringFieldUpdateOperationsInput | string | null
    country_phonecode?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    agreement_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    renewal_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address_proof?: NullableStringFieldUpdateOperationsInput | string | null
    tax_proof?: NullableStringFieldUpdateOperationsInput | string | null
    logo_exists?: NullableBoolFieldUpdateOperationsInput | boolean | null
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    file_extension?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: CountryUpdateOneWithoutClientDetailsNestedInput
    ClientInfo?: ClientInfoUpdateOneRequiredWithoutClientDetailsNestedInput
  }

  export type ClientDetailsUncheckedUpdateInput = {
    ClientDetailsID?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    contact_number?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    state_name?: NullableStringFieldUpdateOperationsInput | string | null
    state_isoCode?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    country_name?: NullableStringFieldUpdateOperationsInput | string | null
    country_isoCode?: NullableStringFieldUpdateOperationsInput | string | null
    country_phonecode?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    agreement_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    renewal_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address_proof?: NullableStringFieldUpdateOperationsInput | string | null
    tax_proof?: NullableStringFieldUpdateOperationsInput | string | null
    logo_exists?: NullableBoolFieldUpdateOperationsInput | boolean | null
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    file_extension?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ClientInfoID?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ClientDetailsCreateManyInput = {
    ClientDetailsID?: bigint | number
    email: string
    contact_number: string
    address?: string | null
    state_name?: string | null
    state_isoCode?: string | null
    brand?: string | null
    country_name?: string | null
    country_isoCode?: string | null
    country_phonecode?: string | null
    currency?: string | null
    agreement_date?: Date | string | null
    renewal_date?: Date | string | null
    address_proof?: string | null
    tax_proof?: string | null
    logo_exists?: boolean | null
    file_name?: string | null
    file_extension?: string | null
    created_at: Date | string
    updated_at?: Date | string
    ClientInfoID: bigint | number
  }

  export type ClientDetailsUpdateManyMutationInput = {
    ClientDetailsID?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    contact_number?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    state_name?: NullableStringFieldUpdateOperationsInput | string | null
    state_isoCode?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    country_name?: NullableStringFieldUpdateOperationsInput | string | null
    country_phonecode?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    agreement_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    renewal_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address_proof?: NullableStringFieldUpdateOperationsInput | string | null
    tax_proof?: NullableStringFieldUpdateOperationsInput | string | null
    logo_exists?: NullableBoolFieldUpdateOperationsInput | boolean | null
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    file_extension?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientDetailsUncheckedUpdateManyInput = {
    ClientDetailsID?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    contact_number?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    state_name?: NullableStringFieldUpdateOperationsInput | string | null
    state_isoCode?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    country_name?: NullableStringFieldUpdateOperationsInput | string | null
    country_isoCode?: NullableStringFieldUpdateOperationsInput | string | null
    country_phonecode?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    agreement_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    renewal_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address_proof?: NullableStringFieldUpdateOperationsInput | string | null
    tax_proof?: NullableStringFieldUpdateOperationsInput | string | null
    logo_exists?: NullableBoolFieldUpdateOperationsInput | boolean | null
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    file_extension?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ClientInfoID?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ClientInfoLogCreateInput = {
    ClientInfoLogId?: bigint | number
    renewalDate?: Date | string | null
    createdAt?: Date | string | null
    client?: ClientInfoCreateNestedOneWithoutClientInfoLogInput
    createdUser?: UserCreateNestedOneWithoutClientInfoLogInput
  }

  export type ClientInfoLogUncheckedCreateInput = {
    ClientInfoLogId?: bigint | number
    clientId?: bigint | number | null
    renewalDate?: Date | string | null
    createdAt?: Date | string | null
    createdBy?: bigint | number | null
  }

  export type ClientInfoLogUpdateInput = {
    ClientInfoLogId?: BigIntFieldUpdateOperationsInput | bigint | number
    renewalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client?: ClientInfoUpdateOneWithoutClientInfoLogNestedInput
    createdUser?: UserUpdateOneWithoutClientInfoLogNestedInput
  }

  export type ClientInfoLogUncheckedUpdateInput = {
    ClientInfoLogId?: BigIntFieldUpdateOperationsInput | bigint | number
    clientId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    renewalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type ClientInfoLogCreateManyInput = {
    ClientInfoLogId?: bigint | number
    clientId?: bigint | number | null
    renewalDate?: Date | string | null
    createdAt?: Date | string | null
    createdBy?: bigint | number | null
  }

  export type ClientInfoLogUpdateManyMutationInput = {
    ClientInfoLogId?: BigIntFieldUpdateOperationsInput | bigint | number
    renewalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClientInfoLogUncheckedUpdateManyInput = {
    ClientInfoLogId?: BigIntFieldUpdateOperationsInput | bigint | number
    clientId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    renewalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type UserCreateInput = {
    UserID?: bigint | number
    username: string
    email: string
    password: string
    phonenumber: string
    status: boolean
    createddate?: Date | string
    updateddate?: Date | string | null
    IsAdmin: boolean
    person_name?: string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    ClientInfo: ClientInfoCreateNestedOneWithoutUserInput
    Role: RoleCreateNestedOneWithoutUsersInput
    ReportsToUser?: UserCreateNestedOneWithoutSubordinatesInput
    Subordinates?: UserCreateNestedManyWithoutReportsToUserInput
    roleuser?: RoleCreateNestedManyWithoutCreatedByUserInput
    ClientInfoLog?: ClientInfoLogCreateNestedManyWithoutCreatedUserInput
  }

  export type UserUncheckedCreateInput = {
    UserID?: bigint | number
    username: string
    email: string
    password: string
    phonenumber: string
    status: boolean
    clientId: bigint | number
    roleId: bigint | number
    createddate?: Date | string
    updateddate?: Date | string | null
    IsAdmin: boolean
    reportsTo?: bigint | number | null
    person_name?: string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    Subordinates?: UserUncheckedCreateNestedManyWithoutReportsToUserInput
    roleuser?: RoleUncheckedCreateNestedManyWithoutCreatedByUserInput
    ClientInfoLog?: ClientInfoLogUncheckedCreateNestedManyWithoutCreatedUserInput
  }

  export type UserUpdateInput = {
    UserID?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phonenumber?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createddate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsAdmin?: BoolFieldUpdateOperationsInput | boolean
    person_name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ClientInfo?: ClientInfoUpdateOneRequiredWithoutUserNestedInput
    Role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    ReportsToUser?: UserUpdateOneWithoutSubordinatesNestedInput
    Subordinates?: UserUpdateManyWithoutReportsToUserNestedInput
    roleuser?: RoleUpdateManyWithoutCreatedByUserNestedInput
    ClientInfoLog?: ClientInfoLogUpdateManyWithoutCreatedUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    UserID?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phonenumber?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    clientId?: BigIntFieldUpdateOperationsInput | bigint | number
    roleId?: BigIntFieldUpdateOperationsInput | bigint | number
    createddate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsAdmin?: BoolFieldUpdateOperationsInput | boolean
    reportsTo?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    person_name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Subordinates?: UserUncheckedUpdateManyWithoutReportsToUserNestedInput
    roleuser?: RoleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    ClientInfoLog?: ClientInfoLogUncheckedUpdateManyWithoutCreatedUserNestedInput
  }

  export type UserCreateManyInput = {
    UserID?: bigint | number
    username: string
    email: string
    password: string
    phonenumber: string
    status: boolean
    clientId: bigint | number
    roleId: bigint | number
    createddate?: Date | string
    updateddate?: Date | string | null
    IsAdmin: boolean
    reportsTo?: bigint | number | null
    person_name?: string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    UserID?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phonenumber?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createddate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsAdmin?: BoolFieldUpdateOperationsInput | boolean
    person_name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    UserID?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phonenumber?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    clientId?: BigIntFieldUpdateOperationsInput | bigint | number
    roleId?: BigIntFieldUpdateOperationsInput | bigint | number
    createddate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsAdmin?: BoolFieldUpdateOperationsInput | boolean
    reportsTo?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    person_name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoleCreateInput = {
    RoleID?: bigint | number
    rolename: string
    createddate?: Date | string | null
    updateddate?: Date | string | null
    ClientInfo?: ClientInfoCreateNestedOneWithoutRoleInput
    CreatedByUser?: UserCreateNestedOneWithoutRoleuserInput
    Users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    RoleID?: bigint | number
    rolename: string
    clientId?: bigint | number | null
    createdBy?: bigint | number | null
    createddate?: Date | string | null
    updateddate?: Date | string | null
    Users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    RoleID?: BigIntFieldUpdateOperationsInput | bigint | number
    rolename?: StringFieldUpdateOperationsInput | string
    createddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ClientInfo?: ClientInfoUpdateOneWithoutRoleNestedInput
    CreatedByUser?: UserUpdateOneWithoutRoleuserNestedInput
    Users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    RoleID?: BigIntFieldUpdateOperationsInput | bigint | number
    rolename?: StringFieldUpdateOperationsInput | string
    clientId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    RoleID?: bigint | number
    rolename: string
    clientId?: bigint | number | null
    createdBy?: bigint | number | null
    createddate?: Date | string | null
    updateddate?: Date | string | null
  }

  export type RoleUpdateManyMutationInput = {
    RoleID?: BigIntFieldUpdateOperationsInput | bigint | number
    rolename?: StringFieldUpdateOperationsInput | string
    createddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoleUncheckedUpdateManyInput = {
    RoleID?: BigIntFieldUpdateOperationsInput | bigint | number
    rolename?: StringFieldUpdateOperationsInput | string
    clientId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MenuCreateInput = {
    MenuID?: bigint | number
    menu_name: string
    icon_code: string
    created_at?: Date | string
    MenuItems?: MenuItemCreateNestedManyWithoutMenuInput
  }

  export type MenuUncheckedCreateInput = {
    MenuID?: bigint | number
    menu_name: string
    icon_code: string
    created_at?: Date | string
    MenuItems?: MenuItemUncheckedCreateNestedManyWithoutMenuInput
  }

  export type MenuUpdateInput = {
    MenuID?: BigIntFieldUpdateOperationsInput | bigint | number
    menu_name?: StringFieldUpdateOperationsInput | string
    icon_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    MenuItems?: MenuItemUpdateManyWithoutMenuNestedInput
  }

  export type MenuUncheckedUpdateInput = {
    MenuID?: BigIntFieldUpdateOperationsInput | bigint | number
    menu_name?: StringFieldUpdateOperationsInput | string
    icon_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    MenuItems?: MenuItemUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type MenuCreateManyInput = {
    MenuID?: bigint | number
    menu_name: string
    icon_code: string
    created_at?: Date | string
  }

  export type MenuUpdateManyMutationInput = {
    MenuID?: BigIntFieldUpdateOperationsInput | bigint | number
    menu_name?: StringFieldUpdateOperationsInput | string
    icon_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuUncheckedUpdateManyInput = {
    MenuID?: BigIntFieldUpdateOperationsInput | bigint | number
    menu_name?: StringFieldUpdateOperationsInput | string
    icon_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemCreateInput = {
    MenuItemID?: bigint | number
    display_name: string
    action_url: string
    sort: number
    created_at?: Date | string
    icon_code?: string | null
    status?: number
    Menu: MenuCreateNestedOneWithoutMenuItemsInput
  }

  export type MenuItemUncheckedCreateInput = {
    MenuItemID?: bigint | number
    menuId: bigint | number
    display_name: string
    action_url: string
    sort: number
    created_at?: Date | string
    icon_code?: string | null
    status?: number
  }

  export type MenuItemUpdateInput = {
    MenuItemID?: BigIntFieldUpdateOperationsInput | bigint | number
    display_name?: StringFieldUpdateOperationsInput | string
    action_url?: StringFieldUpdateOperationsInput | string
    sort?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    icon_code?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    Menu?: MenuUpdateOneRequiredWithoutMenuItemsNestedInput
  }

  export type MenuItemUncheckedUpdateInput = {
    MenuItemID?: BigIntFieldUpdateOperationsInput | bigint | number
    menuId?: BigIntFieldUpdateOperationsInput | bigint | number
    display_name?: StringFieldUpdateOperationsInput | string
    action_url?: StringFieldUpdateOperationsInput | string
    sort?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    icon_code?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
  }

  export type MenuItemCreateManyInput = {
    MenuItemID?: bigint | number
    menuId: bigint | number
    display_name: string
    action_url: string
    sort: number
    created_at?: Date | string
    icon_code?: string | null
    status?: number
  }

  export type MenuItemUpdateManyMutationInput = {
    MenuItemID?: BigIntFieldUpdateOperationsInput | bigint | number
    display_name?: StringFieldUpdateOperationsInput | string
    action_url?: StringFieldUpdateOperationsInput | string
    sort?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    icon_code?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
  }

  export type MenuItemUncheckedUpdateManyInput = {
    MenuItemID?: BigIntFieldUpdateOperationsInput | bigint | number
    menuId?: BigIntFieldUpdateOperationsInput | bigint | number
    display_name?: StringFieldUpdateOperationsInput | string
    action_url?: StringFieldUpdateOperationsInput | string
    sort?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    icon_code?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
  }

  export type CountryCreateInput = {
    CountryID?: bigint | number
    isoCode: string
    name: string
    phonecode: string
    flag?: string | null
    currency?: string | null
    latitude?: string | null
    longitude?: string | null
    createdAt?: Date | string | null
    ClientDetails?: ClientDetailsCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateInput = {
    CountryID?: bigint | number
    isoCode: string
    name: string
    phonecode: string
    flag?: string | null
    currency?: string | null
    latitude?: string | null
    longitude?: string | null
    createdAt?: Date | string | null
    ClientDetails?: ClientDetailsUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryUpdateInput = {
    CountryID?: BigIntFieldUpdateOperationsInput | bigint | number
    isoCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phonecode?: StringFieldUpdateOperationsInput | string
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ClientDetails?: ClientDetailsUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateInput = {
    CountryID?: BigIntFieldUpdateOperationsInput | bigint | number
    isoCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phonecode?: StringFieldUpdateOperationsInput | string
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ClientDetails?: ClientDetailsUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type CountryCreateManyInput = {
    CountryID?: bigint | number
    isoCode: string
    name: string
    phonecode: string
    flag?: string | null
    currency?: string | null
    latitude?: string | null
    longitude?: string | null
    createdAt?: Date | string | null
  }

  export type CountryUpdateManyMutationInput = {
    CountryID?: BigIntFieldUpdateOperationsInput | bigint | number
    isoCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phonecode?: StringFieldUpdateOperationsInput | string
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CountryUncheckedUpdateManyInput = {
    CountryID?: BigIntFieldUpdateOperationsInput | bigint | number
    isoCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phonecode?: StringFieldUpdateOperationsInput | string
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StateCreateInput = {
    stateId?: bigint | number
    name: string
    isoCode: string
    countryCode: string
    latitude?: string | null
    longitude?: string | null
    createdAt?: Date | string | null
  }

  export type StateUncheckedCreateInput = {
    stateId?: bigint | number
    name: string
    isoCode: string
    countryCode: string
    latitude?: string | null
    longitude?: string | null
    createdAt?: Date | string | null
  }

  export type StateUpdateInput = {
    stateId?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    isoCode?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StateUncheckedUpdateInput = {
    stateId?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    isoCode?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StateCreateManyInput = {
    stateId?: bigint | number
    name: string
    isoCode: string
    countryCode: string
    latitude?: string | null
    longitude?: string | null
    createdAt?: Date | string | null
  }

  export type StateUpdateManyMutationInput = {
    stateId?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    isoCode?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StateUncheckedUpdateManyInput = {
    stateId?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    isoCode?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SuperUserCreateInput = {
    superUserId?: bigint | number
    username: string
    email: string
    password: string
    phonenumber: string
    status: boolean
    clientId?: bigint | number | null
    roleId?: bigint | number | null
    createddate?: Date | string
    updateddate?: Date | string | null
    IsAdmin: boolean
    person_name?: string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    ReportsTo?: SuperUserCreateNestedOneWithoutSubordinatesInput
    Subordinates?: SuperUserCreateNestedManyWithoutReportsToInput
  }

  export type SuperUserUncheckedCreateInput = {
    superUserId?: bigint | number
    username: string
    email: string
    password: string
    phonenumber: string
    status: boolean
    clientId?: bigint | number | null
    roleId?: bigint | number | null
    createddate?: Date | string
    updateddate?: Date | string | null
    IsAdmin: boolean
    reportsToId?: bigint | number | null
    person_name?: string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    Subordinates?: SuperUserUncheckedCreateNestedManyWithoutReportsToInput
  }

  export type SuperUserUpdateInput = {
    superUserId?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phonenumber?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    clientId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    roleId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createddate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsAdmin?: BoolFieldUpdateOperationsInput | boolean
    person_name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ReportsTo?: SuperUserUpdateOneWithoutSubordinatesNestedInput
    Subordinates?: SuperUserUpdateManyWithoutReportsToNestedInput
  }

  export type SuperUserUncheckedUpdateInput = {
    superUserId?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phonenumber?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    clientId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    roleId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createddate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsAdmin?: BoolFieldUpdateOperationsInput | boolean
    reportsToId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    person_name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Subordinates?: SuperUserUncheckedUpdateManyWithoutReportsToNestedInput
  }

  export type SuperUserCreateManyInput = {
    superUserId?: bigint | number
    username: string
    email: string
    password: string
    phonenumber: string
    status: boolean
    clientId?: bigint | number | null
    roleId?: bigint | number | null
    createddate?: Date | string
    updateddate?: Date | string | null
    IsAdmin: boolean
    reportsToId?: bigint | number | null
    person_name?: string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
  }

  export type SuperUserUpdateManyMutationInput = {
    superUserId?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phonenumber?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    clientId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    roleId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createddate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsAdmin?: BoolFieldUpdateOperationsInput | boolean
    person_name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SuperUserUncheckedUpdateManyInput = {
    superUserId?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phonenumber?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    clientId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    roleId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createddate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsAdmin?: BoolFieldUpdateOperationsInput | boolean
    reportsToId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    person_name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ClientDetailsListRelationFilter = {
    every?: ClientDetailsWhereInput
    some?: ClientDetailsWhereInput
    none?: ClientDetailsWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type RoleListRelationFilter = {
    every?: RoleWhereInput
    some?: RoleWhereInput
    none?: RoleWhereInput
  }

  export type ClientInfoLogListRelationFilter = {
    every?: ClientInfoLogWhereInput
    some?: ClientInfoLogWhereInput
    none?: ClientInfoLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ClientDetailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientInfoLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientInfoCountOrderByAggregateInput = {
    ClientInfoID?: SortOrder
    client_name?: SortOrder
    firm_name?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
  }

  export type ClientInfoAvgOrderByAggregateInput = {
    ClientInfoID?: SortOrder
    status?: SortOrder
    updated_by?: SortOrder
  }

  export type ClientInfoMaxOrderByAggregateInput = {
    ClientInfoID?: SortOrder
    client_name?: SortOrder
    firm_name?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
  }

  export type ClientInfoMinOrderByAggregateInput = {
    ClientInfoID?: SortOrder
    client_name?: SortOrder
    firm_name?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
  }

  export type ClientInfoSumOrderByAggregateInput = {
    ClientInfoID?: SortOrder
    status?: SortOrder
    updated_by?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type CountryNullableScalarRelationFilter = {
    is?: CountryWhereInput | null
    isNot?: CountryWhereInput | null
  }

  export type ClientInfoScalarRelationFilter = {
    is?: ClientInfoWhereInput
    isNot?: ClientInfoWhereInput
  }

  export type ClientDetailsCountOrderByAggregateInput = {
    ClientDetailsID?: SortOrder
    email?: SortOrder
    contact_number?: SortOrder
    address?: SortOrder
    state_name?: SortOrder
    state_isoCode?: SortOrder
    brand?: SortOrder
    country_name?: SortOrder
    country_isoCode?: SortOrder
    country_phonecode?: SortOrder
    currency?: SortOrder
    agreement_date?: SortOrder
    renewal_date?: SortOrder
    address_proof?: SortOrder
    tax_proof?: SortOrder
    logo_exists?: SortOrder
    file_name?: SortOrder
    file_extension?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    ClientInfoID?: SortOrder
  }

  export type ClientDetailsAvgOrderByAggregateInput = {
    ClientDetailsID?: SortOrder
    ClientInfoID?: SortOrder
  }

  export type ClientDetailsMaxOrderByAggregateInput = {
    ClientDetailsID?: SortOrder
    email?: SortOrder
    contact_number?: SortOrder
    address?: SortOrder
    state_name?: SortOrder
    state_isoCode?: SortOrder
    brand?: SortOrder
    country_name?: SortOrder
    country_isoCode?: SortOrder
    country_phonecode?: SortOrder
    currency?: SortOrder
    agreement_date?: SortOrder
    renewal_date?: SortOrder
    address_proof?: SortOrder
    tax_proof?: SortOrder
    logo_exists?: SortOrder
    file_name?: SortOrder
    file_extension?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    ClientInfoID?: SortOrder
  }

  export type ClientDetailsMinOrderByAggregateInput = {
    ClientDetailsID?: SortOrder
    email?: SortOrder
    contact_number?: SortOrder
    address?: SortOrder
    state_name?: SortOrder
    state_isoCode?: SortOrder
    brand?: SortOrder
    country_name?: SortOrder
    country_isoCode?: SortOrder
    country_phonecode?: SortOrder
    currency?: SortOrder
    agreement_date?: SortOrder
    renewal_date?: SortOrder
    address_proof?: SortOrder
    tax_proof?: SortOrder
    logo_exists?: SortOrder
    file_name?: SortOrder
    file_extension?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    ClientInfoID?: SortOrder
  }

  export type ClientDetailsSumOrderByAggregateInput = {
    ClientDetailsID?: SortOrder
    ClientInfoID?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type ClientInfoNullableScalarRelationFilter = {
    is?: ClientInfoWhereInput | null
    isNot?: ClientInfoWhereInput | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ClientInfoLogCountOrderByAggregateInput = {
    ClientInfoLogId?: SortOrder
    clientId?: SortOrder
    renewalDate?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
  }

  export type ClientInfoLogAvgOrderByAggregateInput = {
    ClientInfoLogId?: SortOrder
    clientId?: SortOrder
    createdBy?: SortOrder
  }

  export type ClientInfoLogMaxOrderByAggregateInput = {
    ClientInfoLogId?: SortOrder
    clientId?: SortOrder
    renewalDate?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
  }

  export type ClientInfoLogMinOrderByAggregateInput = {
    ClientInfoLogId?: SortOrder
    clientId?: SortOrder
    renewalDate?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
  }

  export type ClientInfoLogSumOrderByAggregateInput = {
    ClientInfoLogId?: SortOrder
    clientId?: SortOrder
    createdBy?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type UserEmailClientIdCompoundUniqueInput = {
    email: string
    clientId: bigint | number
  }

  export type UserUsernameClientIdCompoundUniqueInput = {
    username: string
    clientId: bigint | number
  }

  export type UserCountOrderByAggregateInput = {
    UserID?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phonenumber?: SortOrder
    status?: SortOrder
    clientId?: SortOrder
    roleId?: SortOrder
    createddate?: SortOrder
    updateddate?: SortOrder
    IsAdmin?: SortOrder
    reportsTo?: SortOrder
    person_name?: SortOrder
    passwordResetToken?: SortOrder
    passwordResetExpires?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    UserID?: SortOrder
    clientId?: SortOrder
    roleId?: SortOrder
    reportsTo?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    UserID?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phonenumber?: SortOrder
    status?: SortOrder
    clientId?: SortOrder
    roleId?: SortOrder
    createddate?: SortOrder
    updateddate?: SortOrder
    IsAdmin?: SortOrder
    reportsTo?: SortOrder
    person_name?: SortOrder
    passwordResetToken?: SortOrder
    passwordResetExpires?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    UserID?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phonenumber?: SortOrder
    status?: SortOrder
    clientId?: SortOrder
    roleId?: SortOrder
    createddate?: SortOrder
    updateddate?: SortOrder
    IsAdmin?: SortOrder
    reportsTo?: SortOrder
    person_name?: SortOrder
    passwordResetToken?: SortOrder
    passwordResetExpires?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    UserID?: SortOrder
    clientId?: SortOrder
    roleId?: SortOrder
    reportsTo?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type RoleCountOrderByAggregateInput = {
    RoleID?: SortOrder
    rolename?: SortOrder
    clientId?: SortOrder
    createdBy?: SortOrder
    createddate?: SortOrder
    updateddate?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    RoleID?: SortOrder
    clientId?: SortOrder
    createdBy?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    RoleID?: SortOrder
    rolename?: SortOrder
    clientId?: SortOrder
    createdBy?: SortOrder
    createddate?: SortOrder
    updateddate?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    RoleID?: SortOrder
    rolename?: SortOrder
    clientId?: SortOrder
    createdBy?: SortOrder
    createddate?: SortOrder
    updateddate?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    RoleID?: SortOrder
    clientId?: SortOrder
    createdBy?: SortOrder
  }

  export type MenuItemListRelationFilter = {
    every?: MenuItemWhereInput
    some?: MenuItemWhereInput
    none?: MenuItemWhereInput
  }

  export type MenuItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MenuCountOrderByAggregateInput = {
    MenuID?: SortOrder
    menu_name?: SortOrder
    icon_code?: SortOrder
    created_at?: SortOrder
  }

  export type MenuAvgOrderByAggregateInput = {
    MenuID?: SortOrder
  }

  export type MenuMaxOrderByAggregateInput = {
    MenuID?: SortOrder
    menu_name?: SortOrder
    icon_code?: SortOrder
    created_at?: SortOrder
  }

  export type MenuMinOrderByAggregateInput = {
    MenuID?: SortOrder
    menu_name?: SortOrder
    icon_code?: SortOrder
    created_at?: SortOrder
  }

  export type MenuSumOrderByAggregateInput = {
    MenuID?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type MenuScalarRelationFilter = {
    is?: MenuWhereInput
    isNot?: MenuWhereInput
  }

  export type MenuItemCountOrderByAggregateInput = {
    MenuItemID?: SortOrder
    menuId?: SortOrder
    display_name?: SortOrder
    action_url?: SortOrder
    sort?: SortOrder
    created_at?: SortOrder
    icon_code?: SortOrder
    status?: SortOrder
  }

  export type MenuItemAvgOrderByAggregateInput = {
    MenuItemID?: SortOrder
    menuId?: SortOrder
    sort?: SortOrder
    status?: SortOrder
  }

  export type MenuItemMaxOrderByAggregateInput = {
    MenuItemID?: SortOrder
    menuId?: SortOrder
    display_name?: SortOrder
    action_url?: SortOrder
    sort?: SortOrder
    created_at?: SortOrder
    icon_code?: SortOrder
    status?: SortOrder
  }

  export type MenuItemMinOrderByAggregateInput = {
    MenuItemID?: SortOrder
    menuId?: SortOrder
    display_name?: SortOrder
    action_url?: SortOrder
    sort?: SortOrder
    created_at?: SortOrder
    icon_code?: SortOrder
    status?: SortOrder
  }

  export type MenuItemSumOrderByAggregateInput = {
    MenuItemID?: SortOrder
    menuId?: SortOrder
    sort?: SortOrder
    status?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type CountryCountOrderByAggregateInput = {
    CountryID?: SortOrder
    isoCode?: SortOrder
    name?: SortOrder
    phonecode?: SortOrder
    flag?: SortOrder
    currency?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
  }

  export type CountryAvgOrderByAggregateInput = {
    CountryID?: SortOrder
  }

  export type CountryMaxOrderByAggregateInput = {
    CountryID?: SortOrder
    isoCode?: SortOrder
    name?: SortOrder
    phonecode?: SortOrder
    flag?: SortOrder
    currency?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
  }

  export type CountryMinOrderByAggregateInput = {
    CountryID?: SortOrder
    isoCode?: SortOrder
    name?: SortOrder
    phonecode?: SortOrder
    flag?: SortOrder
    currency?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
  }

  export type CountrySumOrderByAggregateInput = {
    CountryID?: SortOrder
  }

  export type StateCountOrderByAggregateInput = {
    stateId?: SortOrder
    name?: SortOrder
    isoCode?: SortOrder
    countryCode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
  }

  export type StateAvgOrderByAggregateInput = {
    stateId?: SortOrder
  }

  export type StateMaxOrderByAggregateInput = {
    stateId?: SortOrder
    name?: SortOrder
    isoCode?: SortOrder
    countryCode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
  }

  export type StateMinOrderByAggregateInput = {
    stateId?: SortOrder
    name?: SortOrder
    isoCode?: SortOrder
    countryCode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
  }

  export type StateSumOrderByAggregateInput = {
    stateId?: SortOrder
  }

  export type SuperUserNullableScalarRelationFilter = {
    is?: SuperUserWhereInput | null
    isNot?: SuperUserWhereInput | null
  }

  export type SuperUserListRelationFilter = {
    every?: SuperUserWhereInput
    some?: SuperUserWhereInput
    none?: SuperUserWhereInput
  }

  export type SuperUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SuperUserCountOrderByAggregateInput = {
    superUserId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phonenumber?: SortOrder
    status?: SortOrder
    clientId?: SortOrder
    roleId?: SortOrder
    createddate?: SortOrder
    updateddate?: SortOrder
    IsAdmin?: SortOrder
    reportsToId?: SortOrder
    person_name?: SortOrder
    passwordResetToken?: SortOrder
    passwordResetExpires?: SortOrder
  }

  export type SuperUserAvgOrderByAggregateInput = {
    superUserId?: SortOrder
    clientId?: SortOrder
    roleId?: SortOrder
    reportsToId?: SortOrder
  }

  export type SuperUserMaxOrderByAggregateInput = {
    superUserId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phonenumber?: SortOrder
    status?: SortOrder
    clientId?: SortOrder
    roleId?: SortOrder
    createddate?: SortOrder
    updateddate?: SortOrder
    IsAdmin?: SortOrder
    reportsToId?: SortOrder
    person_name?: SortOrder
    passwordResetToken?: SortOrder
    passwordResetExpires?: SortOrder
  }

  export type SuperUserMinOrderByAggregateInput = {
    superUserId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phonenumber?: SortOrder
    status?: SortOrder
    clientId?: SortOrder
    roleId?: SortOrder
    createddate?: SortOrder
    updateddate?: SortOrder
    IsAdmin?: SortOrder
    reportsToId?: SortOrder
    person_name?: SortOrder
    passwordResetToken?: SortOrder
    passwordResetExpires?: SortOrder
  }

  export type SuperUserSumOrderByAggregateInput = {
    superUserId?: SortOrder
    clientId?: SortOrder
    roleId?: SortOrder
    reportsToId?: SortOrder
  }

  export type ClientDetailsCreateNestedManyWithoutClientInfoInput = {
    create?: XOR<ClientDetailsCreateWithoutClientInfoInput, ClientDetailsUncheckedCreateWithoutClientInfoInput> | ClientDetailsCreateWithoutClientInfoInput[] | ClientDetailsUncheckedCreateWithoutClientInfoInput[]
    connectOrCreate?: ClientDetailsCreateOrConnectWithoutClientInfoInput | ClientDetailsCreateOrConnectWithoutClientInfoInput[]
    createMany?: ClientDetailsCreateManyClientInfoInputEnvelope
    connect?: ClientDetailsWhereUniqueInput | ClientDetailsWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutClientInfoInput = {
    create?: XOR<UserCreateWithoutClientInfoInput, UserUncheckedCreateWithoutClientInfoInput> | UserCreateWithoutClientInfoInput[] | UserUncheckedCreateWithoutClientInfoInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClientInfoInput | UserCreateOrConnectWithoutClientInfoInput[]
    createMany?: UserCreateManyClientInfoInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type RoleCreateNestedManyWithoutClientInfoInput = {
    create?: XOR<RoleCreateWithoutClientInfoInput, RoleUncheckedCreateWithoutClientInfoInput> | RoleCreateWithoutClientInfoInput[] | RoleUncheckedCreateWithoutClientInfoInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutClientInfoInput | RoleCreateOrConnectWithoutClientInfoInput[]
    createMany?: RoleCreateManyClientInfoInputEnvelope
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type ClientInfoLogCreateNestedManyWithoutClientInput = {
    create?: XOR<ClientInfoLogCreateWithoutClientInput, ClientInfoLogUncheckedCreateWithoutClientInput> | ClientInfoLogCreateWithoutClientInput[] | ClientInfoLogUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientInfoLogCreateOrConnectWithoutClientInput | ClientInfoLogCreateOrConnectWithoutClientInput[]
    createMany?: ClientInfoLogCreateManyClientInputEnvelope
    connect?: ClientInfoLogWhereUniqueInput | ClientInfoLogWhereUniqueInput[]
  }

  export type ClientDetailsUncheckedCreateNestedManyWithoutClientInfoInput = {
    create?: XOR<ClientDetailsCreateWithoutClientInfoInput, ClientDetailsUncheckedCreateWithoutClientInfoInput> | ClientDetailsCreateWithoutClientInfoInput[] | ClientDetailsUncheckedCreateWithoutClientInfoInput[]
    connectOrCreate?: ClientDetailsCreateOrConnectWithoutClientInfoInput | ClientDetailsCreateOrConnectWithoutClientInfoInput[]
    createMany?: ClientDetailsCreateManyClientInfoInputEnvelope
    connect?: ClientDetailsWhereUniqueInput | ClientDetailsWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutClientInfoInput = {
    create?: XOR<UserCreateWithoutClientInfoInput, UserUncheckedCreateWithoutClientInfoInput> | UserCreateWithoutClientInfoInput[] | UserUncheckedCreateWithoutClientInfoInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClientInfoInput | UserCreateOrConnectWithoutClientInfoInput[]
    createMany?: UserCreateManyClientInfoInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type RoleUncheckedCreateNestedManyWithoutClientInfoInput = {
    create?: XOR<RoleCreateWithoutClientInfoInput, RoleUncheckedCreateWithoutClientInfoInput> | RoleCreateWithoutClientInfoInput[] | RoleUncheckedCreateWithoutClientInfoInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutClientInfoInput | RoleCreateOrConnectWithoutClientInfoInput[]
    createMany?: RoleCreateManyClientInfoInputEnvelope
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type ClientInfoLogUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ClientInfoLogCreateWithoutClientInput, ClientInfoLogUncheckedCreateWithoutClientInput> | ClientInfoLogCreateWithoutClientInput[] | ClientInfoLogUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientInfoLogCreateOrConnectWithoutClientInput | ClientInfoLogCreateOrConnectWithoutClientInput[]
    createMany?: ClientInfoLogCreateManyClientInputEnvelope
    connect?: ClientInfoLogWhereUniqueInput | ClientInfoLogWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ClientDetailsUpdateManyWithoutClientInfoNestedInput = {
    create?: XOR<ClientDetailsCreateWithoutClientInfoInput, ClientDetailsUncheckedCreateWithoutClientInfoInput> | ClientDetailsCreateWithoutClientInfoInput[] | ClientDetailsUncheckedCreateWithoutClientInfoInput[]
    connectOrCreate?: ClientDetailsCreateOrConnectWithoutClientInfoInput | ClientDetailsCreateOrConnectWithoutClientInfoInput[]
    upsert?: ClientDetailsUpsertWithWhereUniqueWithoutClientInfoInput | ClientDetailsUpsertWithWhereUniqueWithoutClientInfoInput[]
    createMany?: ClientDetailsCreateManyClientInfoInputEnvelope
    set?: ClientDetailsWhereUniqueInput | ClientDetailsWhereUniqueInput[]
    disconnect?: ClientDetailsWhereUniqueInput | ClientDetailsWhereUniqueInput[]
    delete?: ClientDetailsWhereUniqueInput | ClientDetailsWhereUniqueInput[]
    connect?: ClientDetailsWhereUniqueInput | ClientDetailsWhereUniqueInput[]
    update?: ClientDetailsUpdateWithWhereUniqueWithoutClientInfoInput | ClientDetailsUpdateWithWhereUniqueWithoutClientInfoInput[]
    updateMany?: ClientDetailsUpdateManyWithWhereWithoutClientInfoInput | ClientDetailsUpdateManyWithWhereWithoutClientInfoInput[]
    deleteMany?: ClientDetailsScalarWhereInput | ClientDetailsScalarWhereInput[]
  }

  export type UserUpdateManyWithoutClientInfoNestedInput = {
    create?: XOR<UserCreateWithoutClientInfoInput, UserUncheckedCreateWithoutClientInfoInput> | UserCreateWithoutClientInfoInput[] | UserUncheckedCreateWithoutClientInfoInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClientInfoInput | UserCreateOrConnectWithoutClientInfoInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutClientInfoInput | UserUpsertWithWhereUniqueWithoutClientInfoInput[]
    createMany?: UserCreateManyClientInfoInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutClientInfoInput | UserUpdateWithWhereUniqueWithoutClientInfoInput[]
    updateMany?: UserUpdateManyWithWhereWithoutClientInfoInput | UserUpdateManyWithWhereWithoutClientInfoInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RoleUpdateManyWithoutClientInfoNestedInput = {
    create?: XOR<RoleCreateWithoutClientInfoInput, RoleUncheckedCreateWithoutClientInfoInput> | RoleCreateWithoutClientInfoInput[] | RoleUncheckedCreateWithoutClientInfoInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutClientInfoInput | RoleCreateOrConnectWithoutClientInfoInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutClientInfoInput | RoleUpsertWithWhereUniqueWithoutClientInfoInput[]
    createMany?: RoleCreateManyClientInfoInputEnvelope
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutClientInfoInput | RoleUpdateWithWhereUniqueWithoutClientInfoInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutClientInfoInput | RoleUpdateManyWithWhereWithoutClientInfoInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type ClientInfoLogUpdateManyWithoutClientNestedInput = {
    create?: XOR<ClientInfoLogCreateWithoutClientInput, ClientInfoLogUncheckedCreateWithoutClientInput> | ClientInfoLogCreateWithoutClientInput[] | ClientInfoLogUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientInfoLogCreateOrConnectWithoutClientInput | ClientInfoLogCreateOrConnectWithoutClientInput[]
    upsert?: ClientInfoLogUpsertWithWhereUniqueWithoutClientInput | ClientInfoLogUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ClientInfoLogCreateManyClientInputEnvelope
    set?: ClientInfoLogWhereUniqueInput | ClientInfoLogWhereUniqueInput[]
    disconnect?: ClientInfoLogWhereUniqueInput | ClientInfoLogWhereUniqueInput[]
    delete?: ClientInfoLogWhereUniqueInput | ClientInfoLogWhereUniqueInput[]
    connect?: ClientInfoLogWhereUniqueInput | ClientInfoLogWhereUniqueInput[]
    update?: ClientInfoLogUpdateWithWhereUniqueWithoutClientInput | ClientInfoLogUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ClientInfoLogUpdateManyWithWhereWithoutClientInput | ClientInfoLogUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ClientInfoLogScalarWhereInput | ClientInfoLogScalarWhereInput[]
  }

  export type ClientDetailsUncheckedUpdateManyWithoutClientInfoNestedInput = {
    create?: XOR<ClientDetailsCreateWithoutClientInfoInput, ClientDetailsUncheckedCreateWithoutClientInfoInput> | ClientDetailsCreateWithoutClientInfoInput[] | ClientDetailsUncheckedCreateWithoutClientInfoInput[]
    connectOrCreate?: ClientDetailsCreateOrConnectWithoutClientInfoInput | ClientDetailsCreateOrConnectWithoutClientInfoInput[]
    upsert?: ClientDetailsUpsertWithWhereUniqueWithoutClientInfoInput | ClientDetailsUpsertWithWhereUniqueWithoutClientInfoInput[]
    createMany?: ClientDetailsCreateManyClientInfoInputEnvelope
    set?: ClientDetailsWhereUniqueInput | ClientDetailsWhereUniqueInput[]
    disconnect?: ClientDetailsWhereUniqueInput | ClientDetailsWhereUniqueInput[]
    delete?: ClientDetailsWhereUniqueInput | ClientDetailsWhereUniqueInput[]
    connect?: ClientDetailsWhereUniqueInput | ClientDetailsWhereUniqueInput[]
    update?: ClientDetailsUpdateWithWhereUniqueWithoutClientInfoInput | ClientDetailsUpdateWithWhereUniqueWithoutClientInfoInput[]
    updateMany?: ClientDetailsUpdateManyWithWhereWithoutClientInfoInput | ClientDetailsUpdateManyWithWhereWithoutClientInfoInput[]
    deleteMany?: ClientDetailsScalarWhereInput | ClientDetailsScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutClientInfoNestedInput = {
    create?: XOR<UserCreateWithoutClientInfoInput, UserUncheckedCreateWithoutClientInfoInput> | UserCreateWithoutClientInfoInput[] | UserUncheckedCreateWithoutClientInfoInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClientInfoInput | UserCreateOrConnectWithoutClientInfoInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutClientInfoInput | UserUpsertWithWhereUniqueWithoutClientInfoInput[]
    createMany?: UserCreateManyClientInfoInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutClientInfoInput | UserUpdateWithWhereUniqueWithoutClientInfoInput[]
    updateMany?: UserUpdateManyWithWhereWithoutClientInfoInput | UserUpdateManyWithWhereWithoutClientInfoInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RoleUncheckedUpdateManyWithoutClientInfoNestedInput = {
    create?: XOR<RoleCreateWithoutClientInfoInput, RoleUncheckedCreateWithoutClientInfoInput> | RoleCreateWithoutClientInfoInput[] | RoleUncheckedCreateWithoutClientInfoInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutClientInfoInput | RoleCreateOrConnectWithoutClientInfoInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutClientInfoInput | RoleUpsertWithWhereUniqueWithoutClientInfoInput[]
    createMany?: RoleCreateManyClientInfoInputEnvelope
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutClientInfoInput | RoleUpdateWithWhereUniqueWithoutClientInfoInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutClientInfoInput | RoleUpdateManyWithWhereWithoutClientInfoInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type ClientInfoLogUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ClientInfoLogCreateWithoutClientInput, ClientInfoLogUncheckedCreateWithoutClientInput> | ClientInfoLogCreateWithoutClientInput[] | ClientInfoLogUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientInfoLogCreateOrConnectWithoutClientInput | ClientInfoLogCreateOrConnectWithoutClientInput[]
    upsert?: ClientInfoLogUpsertWithWhereUniqueWithoutClientInput | ClientInfoLogUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ClientInfoLogCreateManyClientInputEnvelope
    set?: ClientInfoLogWhereUniqueInput | ClientInfoLogWhereUniqueInput[]
    disconnect?: ClientInfoLogWhereUniqueInput | ClientInfoLogWhereUniqueInput[]
    delete?: ClientInfoLogWhereUniqueInput | ClientInfoLogWhereUniqueInput[]
    connect?: ClientInfoLogWhereUniqueInput | ClientInfoLogWhereUniqueInput[]
    update?: ClientInfoLogUpdateWithWhereUniqueWithoutClientInput | ClientInfoLogUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ClientInfoLogUpdateManyWithWhereWithoutClientInput | ClientInfoLogUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ClientInfoLogScalarWhereInput | ClientInfoLogScalarWhereInput[]
  }

  export type CountryCreateNestedOneWithoutClientDetailsInput = {
    create?: XOR<CountryCreateWithoutClientDetailsInput, CountryUncheckedCreateWithoutClientDetailsInput>
    connectOrCreate?: CountryCreateOrConnectWithoutClientDetailsInput
    connect?: CountryWhereUniqueInput
  }

  export type ClientInfoCreateNestedOneWithoutClientDetailsInput = {
    create?: XOR<ClientInfoCreateWithoutClientDetailsInput, ClientInfoUncheckedCreateWithoutClientDetailsInput>
    connectOrCreate?: ClientInfoCreateOrConnectWithoutClientDetailsInput
    connect?: ClientInfoWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type CountryUpdateOneWithoutClientDetailsNestedInput = {
    create?: XOR<CountryCreateWithoutClientDetailsInput, CountryUncheckedCreateWithoutClientDetailsInput>
    connectOrCreate?: CountryCreateOrConnectWithoutClientDetailsInput
    upsert?: CountryUpsertWithoutClientDetailsInput
    disconnect?: CountryWhereInput | boolean
    delete?: CountryWhereInput | boolean
    connect?: CountryWhereUniqueInput
    update?: XOR<XOR<CountryUpdateToOneWithWhereWithoutClientDetailsInput, CountryUpdateWithoutClientDetailsInput>, CountryUncheckedUpdateWithoutClientDetailsInput>
  }

  export type ClientInfoUpdateOneRequiredWithoutClientDetailsNestedInput = {
    create?: XOR<ClientInfoCreateWithoutClientDetailsInput, ClientInfoUncheckedCreateWithoutClientDetailsInput>
    connectOrCreate?: ClientInfoCreateOrConnectWithoutClientDetailsInput
    upsert?: ClientInfoUpsertWithoutClientDetailsInput
    connect?: ClientInfoWhereUniqueInput
    update?: XOR<XOR<ClientInfoUpdateToOneWithWhereWithoutClientDetailsInput, ClientInfoUpdateWithoutClientDetailsInput>, ClientInfoUncheckedUpdateWithoutClientDetailsInput>
  }

  export type ClientInfoCreateNestedOneWithoutClientInfoLogInput = {
    create?: XOR<ClientInfoCreateWithoutClientInfoLogInput, ClientInfoUncheckedCreateWithoutClientInfoLogInput>
    connectOrCreate?: ClientInfoCreateOrConnectWithoutClientInfoLogInput
    connect?: ClientInfoWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutClientInfoLogInput = {
    create?: XOR<UserCreateWithoutClientInfoLogInput, UserUncheckedCreateWithoutClientInfoLogInput>
    connectOrCreate?: UserCreateOrConnectWithoutClientInfoLogInput
    connect?: UserWhereUniqueInput
  }

  export type ClientInfoUpdateOneWithoutClientInfoLogNestedInput = {
    create?: XOR<ClientInfoCreateWithoutClientInfoLogInput, ClientInfoUncheckedCreateWithoutClientInfoLogInput>
    connectOrCreate?: ClientInfoCreateOrConnectWithoutClientInfoLogInput
    upsert?: ClientInfoUpsertWithoutClientInfoLogInput
    disconnect?: ClientInfoWhereInput | boolean
    delete?: ClientInfoWhereInput | boolean
    connect?: ClientInfoWhereUniqueInput
    update?: XOR<XOR<ClientInfoUpdateToOneWithWhereWithoutClientInfoLogInput, ClientInfoUpdateWithoutClientInfoLogInput>, ClientInfoUncheckedUpdateWithoutClientInfoLogInput>
  }

  export type UserUpdateOneWithoutClientInfoLogNestedInput = {
    create?: XOR<UserCreateWithoutClientInfoLogInput, UserUncheckedCreateWithoutClientInfoLogInput>
    connectOrCreate?: UserCreateOrConnectWithoutClientInfoLogInput
    upsert?: UserUpsertWithoutClientInfoLogInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutClientInfoLogInput, UserUpdateWithoutClientInfoLogInput>, UserUncheckedUpdateWithoutClientInfoLogInput>
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type ClientInfoCreateNestedOneWithoutUserInput = {
    create?: XOR<ClientInfoCreateWithoutUserInput, ClientInfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: ClientInfoCreateOrConnectWithoutUserInput
    connect?: ClientInfoWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSubordinatesInput = {
    create?: XOR<UserCreateWithoutSubordinatesInput, UserUncheckedCreateWithoutSubordinatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubordinatesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutReportsToUserInput = {
    create?: XOR<UserCreateWithoutReportsToUserInput, UserUncheckedCreateWithoutReportsToUserInput> | UserCreateWithoutReportsToUserInput[] | UserUncheckedCreateWithoutReportsToUserInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReportsToUserInput | UserCreateOrConnectWithoutReportsToUserInput[]
    createMany?: UserCreateManyReportsToUserInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type RoleCreateNestedManyWithoutCreatedByUserInput = {
    create?: XOR<RoleCreateWithoutCreatedByUserInput, RoleUncheckedCreateWithoutCreatedByUserInput> | RoleCreateWithoutCreatedByUserInput[] | RoleUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutCreatedByUserInput | RoleCreateOrConnectWithoutCreatedByUserInput[]
    createMany?: RoleCreateManyCreatedByUserInputEnvelope
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type ClientInfoLogCreateNestedManyWithoutCreatedUserInput = {
    create?: XOR<ClientInfoLogCreateWithoutCreatedUserInput, ClientInfoLogUncheckedCreateWithoutCreatedUserInput> | ClientInfoLogCreateWithoutCreatedUserInput[] | ClientInfoLogUncheckedCreateWithoutCreatedUserInput[]
    connectOrCreate?: ClientInfoLogCreateOrConnectWithoutCreatedUserInput | ClientInfoLogCreateOrConnectWithoutCreatedUserInput[]
    createMany?: ClientInfoLogCreateManyCreatedUserInputEnvelope
    connect?: ClientInfoLogWhereUniqueInput | ClientInfoLogWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutReportsToUserInput = {
    create?: XOR<UserCreateWithoutReportsToUserInput, UserUncheckedCreateWithoutReportsToUserInput> | UserCreateWithoutReportsToUserInput[] | UserUncheckedCreateWithoutReportsToUserInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReportsToUserInput | UserCreateOrConnectWithoutReportsToUserInput[]
    createMany?: UserCreateManyReportsToUserInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type RoleUncheckedCreateNestedManyWithoutCreatedByUserInput = {
    create?: XOR<RoleCreateWithoutCreatedByUserInput, RoleUncheckedCreateWithoutCreatedByUserInput> | RoleCreateWithoutCreatedByUserInput[] | RoleUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutCreatedByUserInput | RoleCreateOrConnectWithoutCreatedByUserInput[]
    createMany?: RoleCreateManyCreatedByUserInputEnvelope
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type ClientInfoLogUncheckedCreateNestedManyWithoutCreatedUserInput = {
    create?: XOR<ClientInfoLogCreateWithoutCreatedUserInput, ClientInfoLogUncheckedCreateWithoutCreatedUserInput> | ClientInfoLogCreateWithoutCreatedUserInput[] | ClientInfoLogUncheckedCreateWithoutCreatedUserInput[]
    connectOrCreate?: ClientInfoLogCreateOrConnectWithoutCreatedUserInput | ClientInfoLogCreateOrConnectWithoutCreatedUserInput[]
    createMany?: ClientInfoLogCreateManyCreatedUserInputEnvelope
    connect?: ClientInfoLogWhereUniqueInput | ClientInfoLogWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ClientInfoUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<ClientInfoCreateWithoutUserInput, ClientInfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: ClientInfoCreateOrConnectWithoutUserInput
    upsert?: ClientInfoUpsertWithoutUserInput
    connect?: ClientInfoWhereUniqueInput
    update?: XOR<XOR<ClientInfoUpdateToOneWithWhereWithoutUserInput, ClientInfoUpdateWithoutUserInput>, ClientInfoUncheckedUpdateWithoutUserInput>
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type UserUpdateOneWithoutSubordinatesNestedInput = {
    create?: XOR<UserCreateWithoutSubordinatesInput, UserUncheckedCreateWithoutSubordinatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubordinatesInput
    upsert?: UserUpsertWithoutSubordinatesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubordinatesInput, UserUpdateWithoutSubordinatesInput>, UserUncheckedUpdateWithoutSubordinatesInput>
  }

  export type UserUpdateManyWithoutReportsToUserNestedInput = {
    create?: XOR<UserCreateWithoutReportsToUserInput, UserUncheckedCreateWithoutReportsToUserInput> | UserCreateWithoutReportsToUserInput[] | UserUncheckedCreateWithoutReportsToUserInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReportsToUserInput | UserCreateOrConnectWithoutReportsToUserInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutReportsToUserInput | UserUpsertWithWhereUniqueWithoutReportsToUserInput[]
    createMany?: UserCreateManyReportsToUserInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutReportsToUserInput | UserUpdateWithWhereUniqueWithoutReportsToUserInput[]
    updateMany?: UserUpdateManyWithWhereWithoutReportsToUserInput | UserUpdateManyWithWhereWithoutReportsToUserInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RoleUpdateManyWithoutCreatedByUserNestedInput = {
    create?: XOR<RoleCreateWithoutCreatedByUserInput, RoleUncheckedCreateWithoutCreatedByUserInput> | RoleCreateWithoutCreatedByUserInput[] | RoleUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutCreatedByUserInput | RoleCreateOrConnectWithoutCreatedByUserInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutCreatedByUserInput | RoleUpsertWithWhereUniqueWithoutCreatedByUserInput[]
    createMany?: RoleCreateManyCreatedByUserInputEnvelope
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutCreatedByUserInput | RoleUpdateWithWhereUniqueWithoutCreatedByUserInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutCreatedByUserInput | RoleUpdateManyWithWhereWithoutCreatedByUserInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type ClientInfoLogUpdateManyWithoutCreatedUserNestedInput = {
    create?: XOR<ClientInfoLogCreateWithoutCreatedUserInput, ClientInfoLogUncheckedCreateWithoutCreatedUserInput> | ClientInfoLogCreateWithoutCreatedUserInput[] | ClientInfoLogUncheckedCreateWithoutCreatedUserInput[]
    connectOrCreate?: ClientInfoLogCreateOrConnectWithoutCreatedUserInput | ClientInfoLogCreateOrConnectWithoutCreatedUserInput[]
    upsert?: ClientInfoLogUpsertWithWhereUniqueWithoutCreatedUserInput | ClientInfoLogUpsertWithWhereUniqueWithoutCreatedUserInput[]
    createMany?: ClientInfoLogCreateManyCreatedUserInputEnvelope
    set?: ClientInfoLogWhereUniqueInput | ClientInfoLogWhereUniqueInput[]
    disconnect?: ClientInfoLogWhereUniqueInput | ClientInfoLogWhereUniqueInput[]
    delete?: ClientInfoLogWhereUniqueInput | ClientInfoLogWhereUniqueInput[]
    connect?: ClientInfoLogWhereUniqueInput | ClientInfoLogWhereUniqueInput[]
    update?: ClientInfoLogUpdateWithWhereUniqueWithoutCreatedUserInput | ClientInfoLogUpdateWithWhereUniqueWithoutCreatedUserInput[]
    updateMany?: ClientInfoLogUpdateManyWithWhereWithoutCreatedUserInput | ClientInfoLogUpdateManyWithWhereWithoutCreatedUserInput[]
    deleteMany?: ClientInfoLogScalarWhereInput | ClientInfoLogScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutReportsToUserNestedInput = {
    create?: XOR<UserCreateWithoutReportsToUserInput, UserUncheckedCreateWithoutReportsToUserInput> | UserCreateWithoutReportsToUserInput[] | UserUncheckedCreateWithoutReportsToUserInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReportsToUserInput | UserCreateOrConnectWithoutReportsToUserInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutReportsToUserInput | UserUpsertWithWhereUniqueWithoutReportsToUserInput[]
    createMany?: UserCreateManyReportsToUserInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutReportsToUserInput | UserUpdateWithWhereUniqueWithoutReportsToUserInput[]
    updateMany?: UserUpdateManyWithWhereWithoutReportsToUserInput | UserUpdateManyWithWhereWithoutReportsToUserInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RoleUncheckedUpdateManyWithoutCreatedByUserNestedInput = {
    create?: XOR<RoleCreateWithoutCreatedByUserInput, RoleUncheckedCreateWithoutCreatedByUserInput> | RoleCreateWithoutCreatedByUserInput[] | RoleUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutCreatedByUserInput | RoleCreateOrConnectWithoutCreatedByUserInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutCreatedByUserInput | RoleUpsertWithWhereUniqueWithoutCreatedByUserInput[]
    createMany?: RoleCreateManyCreatedByUserInputEnvelope
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutCreatedByUserInput | RoleUpdateWithWhereUniqueWithoutCreatedByUserInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutCreatedByUserInput | RoleUpdateManyWithWhereWithoutCreatedByUserInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type ClientInfoLogUncheckedUpdateManyWithoutCreatedUserNestedInput = {
    create?: XOR<ClientInfoLogCreateWithoutCreatedUserInput, ClientInfoLogUncheckedCreateWithoutCreatedUserInput> | ClientInfoLogCreateWithoutCreatedUserInput[] | ClientInfoLogUncheckedCreateWithoutCreatedUserInput[]
    connectOrCreate?: ClientInfoLogCreateOrConnectWithoutCreatedUserInput | ClientInfoLogCreateOrConnectWithoutCreatedUserInput[]
    upsert?: ClientInfoLogUpsertWithWhereUniqueWithoutCreatedUserInput | ClientInfoLogUpsertWithWhereUniqueWithoutCreatedUserInput[]
    createMany?: ClientInfoLogCreateManyCreatedUserInputEnvelope
    set?: ClientInfoLogWhereUniqueInput | ClientInfoLogWhereUniqueInput[]
    disconnect?: ClientInfoLogWhereUniqueInput | ClientInfoLogWhereUniqueInput[]
    delete?: ClientInfoLogWhereUniqueInput | ClientInfoLogWhereUniqueInput[]
    connect?: ClientInfoLogWhereUniqueInput | ClientInfoLogWhereUniqueInput[]
    update?: ClientInfoLogUpdateWithWhereUniqueWithoutCreatedUserInput | ClientInfoLogUpdateWithWhereUniqueWithoutCreatedUserInput[]
    updateMany?: ClientInfoLogUpdateManyWithWhereWithoutCreatedUserInput | ClientInfoLogUpdateManyWithWhereWithoutCreatedUserInput[]
    deleteMany?: ClientInfoLogScalarWhereInput | ClientInfoLogScalarWhereInput[]
  }

  export type ClientInfoCreateNestedOneWithoutRoleInput = {
    create?: XOR<ClientInfoCreateWithoutRoleInput, ClientInfoUncheckedCreateWithoutRoleInput>
    connectOrCreate?: ClientInfoCreateOrConnectWithoutRoleInput
    connect?: ClientInfoWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRoleuserInput = {
    create?: XOR<UserCreateWithoutRoleuserInput, UserUncheckedCreateWithoutRoleuserInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoleuserInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ClientInfoUpdateOneWithoutRoleNestedInput = {
    create?: XOR<ClientInfoCreateWithoutRoleInput, ClientInfoUncheckedCreateWithoutRoleInput>
    connectOrCreate?: ClientInfoCreateOrConnectWithoutRoleInput
    upsert?: ClientInfoUpsertWithoutRoleInput
    disconnect?: ClientInfoWhereInput | boolean
    delete?: ClientInfoWhereInput | boolean
    connect?: ClientInfoWhereUniqueInput
    update?: XOR<XOR<ClientInfoUpdateToOneWithWhereWithoutRoleInput, ClientInfoUpdateWithoutRoleInput>, ClientInfoUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateOneWithoutRoleuserNestedInput = {
    create?: XOR<UserCreateWithoutRoleuserInput, UserUncheckedCreateWithoutRoleuserInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoleuserInput
    upsert?: UserUpsertWithoutRoleuserInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRoleuserInput, UserUpdateWithoutRoleuserInput>, UserUncheckedUpdateWithoutRoleuserInput>
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type MenuItemCreateNestedManyWithoutMenuInput = {
    create?: XOR<MenuItemCreateWithoutMenuInput, MenuItemUncheckedCreateWithoutMenuInput> | MenuItemCreateWithoutMenuInput[] | MenuItemUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutMenuInput | MenuItemCreateOrConnectWithoutMenuInput[]
    createMany?: MenuItemCreateManyMenuInputEnvelope
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
  }

  export type MenuItemUncheckedCreateNestedManyWithoutMenuInput = {
    create?: XOR<MenuItemCreateWithoutMenuInput, MenuItemUncheckedCreateWithoutMenuInput> | MenuItemCreateWithoutMenuInput[] | MenuItemUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutMenuInput | MenuItemCreateOrConnectWithoutMenuInput[]
    createMany?: MenuItemCreateManyMenuInputEnvelope
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
  }

  export type MenuItemUpdateManyWithoutMenuNestedInput = {
    create?: XOR<MenuItemCreateWithoutMenuInput, MenuItemUncheckedCreateWithoutMenuInput> | MenuItemCreateWithoutMenuInput[] | MenuItemUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutMenuInput | MenuItemCreateOrConnectWithoutMenuInput[]
    upsert?: MenuItemUpsertWithWhereUniqueWithoutMenuInput | MenuItemUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: MenuItemCreateManyMenuInputEnvelope
    set?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    disconnect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    delete?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    update?: MenuItemUpdateWithWhereUniqueWithoutMenuInput | MenuItemUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: MenuItemUpdateManyWithWhereWithoutMenuInput | MenuItemUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
  }

  export type MenuItemUncheckedUpdateManyWithoutMenuNestedInput = {
    create?: XOR<MenuItemCreateWithoutMenuInput, MenuItemUncheckedCreateWithoutMenuInput> | MenuItemCreateWithoutMenuInput[] | MenuItemUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutMenuInput | MenuItemCreateOrConnectWithoutMenuInput[]
    upsert?: MenuItemUpsertWithWhereUniqueWithoutMenuInput | MenuItemUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: MenuItemCreateManyMenuInputEnvelope
    set?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    disconnect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    delete?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    update?: MenuItemUpdateWithWhereUniqueWithoutMenuInput | MenuItemUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: MenuItemUpdateManyWithWhereWithoutMenuInput | MenuItemUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
  }

  export type MenuCreateNestedOneWithoutMenuItemsInput = {
    create?: XOR<MenuCreateWithoutMenuItemsInput, MenuUncheckedCreateWithoutMenuItemsInput>
    connectOrCreate?: MenuCreateOrConnectWithoutMenuItemsInput
    connect?: MenuWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MenuUpdateOneRequiredWithoutMenuItemsNestedInput = {
    create?: XOR<MenuCreateWithoutMenuItemsInput, MenuUncheckedCreateWithoutMenuItemsInput>
    connectOrCreate?: MenuCreateOrConnectWithoutMenuItemsInput
    upsert?: MenuUpsertWithoutMenuItemsInput
    connect?: MenuWhereUniqueInput
    update?: XOR<XOR<MenuUpdateToOneWithWhereWithoutMenuItemsInput, MenuUpdateWithoutMenuItemsInput>, MenuUncheckedUpdateWithoutMenuItemsInput>
  }

  export type ClientDetailsCreateNestedManyWithoutCountryInput = {
    create?: XOR<ClientDetailsCreateWithoutCountryInput, ClientDetailsUncheckedCreateWithoutCountryInput> | ClientDetailsCreateWithoutCountryInput[] | ClientDetailsUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: ClientDetailsCreateOrConnectWithoutCountryInput | ClientDetailsCreateOrConnectWithoutCountryInput[]
    createMany?: ClientDetailsCreateManyCountryInputEnvelope
    connect?: ClientDetailsWhereUniqueInput | ClientDetailsWhereUniqueInput[]
  }

  export type ClientDetailsUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<ClientDetailsCreateWithoutCountryInput, ClientDetailsUncheckedCreateWithoutCountryInput> | ClientDetailsCreateWithoutCountryInput[] | ClientDetailsUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: ClientDetailsCreateOrConnectWithoutCountryInput | ClientDetailsCreateOrConnectWithoutCountryInput[]
    createMany?: ClientDetailsCreateManyCountryInputEnvelope
    connect?: ClientDetailsWhereUniqueInput | ClientDetailsWhereUniqueInput[]
  }

  export type ClientDetailsUpdateManyWithoutCountryNestedInput = {
    create?: XOR<ClientDetailsCreateWithoutCountryInput, ClientDetailsUncheckedCreateWithoutCountryInput> | ClientDetailsCreateWithoutCountryInput[] | ClientDetailsUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: ClientDetailsCreateOrConnectWithoutCountryInput | ClientDetailsCreateOrConnectWithoutCountryInput[]
    upsert?: ClientDetailsUpsertWithWhereUniqueWithoutCountryInput | ClientDetailsUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: ClientDetailsCreateManyCountryInputEnvelope
    set?: ClientDetailsWhereUniqueInput | ClientDetailsWhereUniqueInput[]
    disconnect?: ClientDetailsWhereUniqueInput | ClientDetailsWhereUniqueInput[]
    delete?: ClientDetailsWhereUniqueInput | ClientDetailsWhereUniqueInput[]
    connect?: ClientDetailsWhereUniqueInput | ClientDetailsWhereUniqueInput[]
    update?: ClientDetailsUpdateWithWhereUniqueWithoutCountryInput | ClientDetailsUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: ClientDetailsUpdateManyWithWhereWithoutCountryInput | ClientDetailsUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: ClientDetailsScalarWhereInput | ClientDetailsScalarWhereInput[]
  }

  export type ClientDetailsUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<ClientDetailsCreateWithoutCountryInput, ClientDetailsUncheckedCreateWithoutCountryInput> | ClientDetailsCreateWithoutCountryInput[] | ClientDetailsUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: ClientDetailsCreateOrConnectWithoutCountryInput | ClientDetailsCreateOrConnectWithoutCountryInput[]
    upsert?: ClientDetailsUpsertWithWhereUniqueWithoutCountryInput | ClientDetailsUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: ClientDetailsCreateManyCountryInputEnvelope
    set?: ClientDetailsWhereUniqueInput | ClientDetailsWhereUniqueInput[]
    disconnect?: ClientDetailsWhereUniqueInput | ClientDetailsWhereUniqueInput[]
    delete?: ClientDetailsWhereUniqueInput | ClientDetailsWhereUniqueInput[]
    connect?: ClientDetailsWhereUniqueInput | ClientDetailsWhereUniqueInput[]
    update?: ClientDetailsUpdateWithWhereUniqueWithoutCountryInput | ClientDetailsUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: ClientDetailsUpdateManyWithWhereWithoutCountryInput | ClientDetailsUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: ClientDetailsScalarWhereInput | ClientDetailsScalarWhereInput[]
  }

  export type SuperUserCreateNestedOneWithoutSubordinatesInput = {
    create?: XOR<SuperUserCreateWithoutSubordinatesInput, SuperUserUncheckedCreateWithoutSubordinatesInput>
    connectOrCreate?: SuperUserCreateOrConnectWithoutSubordinatesInput
    connect?: SuperUserWhereUniqueInput
  }

  export type SuperUserCreateNestedManyWithoutReportsToInput = {
    create?: XOR<SuperUserCreateWithoutReportsToInput, SuperUserUncheckedCreateWithoutReportsToInput> | SuperUserCreateWithoutReportsToInput[] | SuperUserUncheckedCreateWithoutReportsToInput[]
    connectOrCreate?: SuperUserCreateOrConnectWithoutReportsToInput | SuperUserCreateOrConnectWithoutReportsToInput[]
    createMany?: SuperUserCreateManyReportsToInputEnvelope
    connect?: SuperUserWhereUniqueInput | SuperUserWhereUniqueInput[]
  }

  export type SuperUserUncheckedCreateNestedManyWithoutReportsToInput = {
    create?: XOR<SuperUserCreateWithoutReportsToInput, SuperUserUncheckedCreateWithoutReportsToInput> | SuperUserCreateWithoutReportsToInput[] | SuperUserUncheckedCreateWithoutReportsToInput[]
    connectOrCreate?: SuperUserCreateOrConnectWithoutReportsToInput | SuperUserCreateOrConnectWithoutReportsToInput[]
    createMany?: SuperUserCreateManyReportsToInputEnvelope
    connect?: SuperUserWhereUniqueInput | SuperUserWhereUniqueInput[]
  }

  export type SuperUserUpdateOneWithoutSubordinatesNestedInput = {
    create?: XOR<SuperUserCreateWithoutSubordinatesInput, SuperUserUncheckedCreateWithoutSubordinatesInput>
    connectOrCreate?: SuperUserCreateOrConnectWithoutSubordinatesInput
    upsert?: SuperUserUpsertWithoutSubordinatesInput
    disconnect?: SuperUserWhereInput | boolean
    delete?: SuperUserWhereInput | boolean
    connect?: SuperUserWhereUniqueInput
    update?: XOR<XOR<SuperUserUpdateToOneWithWhereWithoutSubordinatesInput, SuperUserUpdateWithoutSubordinatesInput>, SuperUserUncheckedUpdateWithoutSubordinatesInput>
  }

  export type SuperUserUpdateManyWithoutReportsToNestedInput = {
    create?: XOR<SuperUserCreateWithoutReportsToInput, SuperUserUncheckedCreateWithoutReportsToInput> | SuperUserCreateWithoutReportsToInput[] | SuperUserUncheckedCreateWithoutReportsToInput[]
    connectOrCreate?: SuperUserCreateOrConnectWithoutReportsToInput | SuperUserCreateOrConnectWithoutReportsToInput[]
    upsert?: SuperUserUpsertWithWhereUniqueWithoutReportsToInput | SuperUserUpsertWithWhereUniqueWithoutReportsToInput[]
    createMany?: SuperUserCreateManyReportsToInputEnvelope
    set?: SuperUserWhereUniqueInput | SuperUserWhereUniqueInput[]
    disconnect?: SuperUserWhereUniqueInput | SuperUserWhereUniqueInput[]
    delete?: SuperUserWhereUniqueInput | SuperUserWhereUniqueInput[]
    connect?: SuperUserWhereUniqueInput | SuperUserWhereUniqueInput[]
    update?: SuperUserUpdateWithWhereUniqueWithoutReportsToInput | SuperUserUpdateWithWhereUniqueWithoutReportsToInput[]
    updateMany?: SuperUserUpdateManyWithWhereWithoutReportsToInput | SuperUserUpdateManyWithWhereWithoutReportsToInput[]
    deleteMany?: SuperUserScalarWhereInput | SuperUserScalarWhereInput[]
  }

  export type SuperUserUncheckedUpdateManyWithoutReportsToNestedInput = {
    create?: XOR<SuperUserCreateWithoutReportsToInput, SuperUserUncheckedCreateWithoutReportsToInput> | SuperUserCreateWithoutReportsToInput[] | SuperUserUncheckedCreateWithoutReportsToInput[]
    connectOrCreate?: SuperUserCreateOrConnectWithoutReportsToInput | SuperUserCreateOrConnectWithoutReportsToInput[]
    upsert?: SuperUserUpsertWithWhereUniqueWithoutReportsToInput | SuperUserUpsertWithWhereUniqueWithoutReportsToInput[]
    createMany?: SuperUserCreateManyReportsToInputEnvelope
    set?: SuperUserWhereUniqueInput | SuperUserWhereUniqueInput[]
    disconnect?: SuperUserWhereUniqueInput | SuperUserWhereUniqueInput[]
    delete?: SuperUserWhereUniqueInput | SuperUserWhereUniqueInput[]
    connect?: SuperUserWhereUniqueInput | SuperUserWhereUniqueInput[]
    update?: SuperUserUpdateWithWhereUniqueWithoutReportsToInput | SuperUserUpdateWithWhereUniqueWithoutReportsToInput[]
    updateMany?: SuperUserUpdateManyWithWhereWithoutReportsToInput | SuperUserUpdateManyWithWhereWithoutReportsToInput[]
    deleteMany?: SuperUserScalarWhereInput | SuperUserScalarWhereInput[]
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ClientDetailsCreateWithoutClientInfoInput = {
    ClientDetailsID?: bigint | number
    email: string
    contact_number: string
    address?: string | null
    state_name?: string | null
    state_isoCode?: string | null
    brand?: string | null
    country_name?: string | null
    country_phonecode?: string | null
    currency?: string | null
    agreement_date?: Date | string | null
    renewal_date?: Date | string | null
    address_proof?: string | null
    tax_proof?: string | null
    logo_exists?: boolean | null
    file_name?: string | null
    file_extension?: string | null
    created_at: Date | string
    updated_at?: Date | string
    country?: CountryCreateNestedOneWithoutClientDetailsInput
  }

  export type ClientDetailsUncheckedCreateWithoutClientInfoInput = {
    ClientDetailsID?: bigint | number
    email: string
    contact_number: string
    address?: string | null
    state_name?: string | null
    state_isoCode?: string | null
    brand?: string | null
    country_name?: string | null
    country_isoCode?: string | null
    country_phonecode?: string | null
    currency?: string | null
    agreement_date?: Date | string | null
    renewal_date?: Date | string | null
    address_proof?: string | null
    tax_proof?: string | null
    logo_exists?: boolean | null
    file_name?: string | null
    file_extension?: string | null
    created_at: Date | string
    updated_at?: Date | string
  }

  export type ClientDetailsCreateOrConnectWithoutClientInfoInput = {
    where: ClientDetailsWhereUniqueInput
    create: XOR<ClientDetailsCreateWithoutClientInfoInput, ClientDetailsUncheckedCreateWithoutClientInfoInput>
  }

  export type ClientDetailsCreateManyClientInfoInputEnvelope = {
    data: ClientDetailsCreateManyClientInfoInput | ClientDetailsCreateManyClientInfoInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutClientInfoInput = {
    UserID?: bigint | number
    username: string
    email: string
    password: string
    phonenumber: string
    status: boolean
    createddate?: Date | string
    updateddate?: Date | string | null
    IsAdmin: boolean
    person_name?: string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    Role: RoleCreateNestedOneWithoutUsersInput
    ReportsToUser?: UserCreateNestedOneWithoutSubordinatesInput
    Subordinates?: UserCreateNestedManyWithoutReportsToUserInput
    roleuser?: RoleCreateNestedManyWithoutCreatedByUserInput
    ClientInfoLog?: ClientInfoLogCreateNestedManyWithoutCreatedUserInput
  }

  export type UserUncheckedCreateWithoutClientInfoInput = {
    UserID?: bigint | number
    username: string
    email: string
    password: string
    phonenumber: string
    status: boolean
    roleId: bigint | number
    createddate?: Date | string
    updateddate?: Date | string | null
    IsAdmin: boolean
    reportsTo?: bigint | number | null
    person_name?: string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    Subordinates?: UserUncheckedCreateNestedManyWithoutReportsToUserInput
    roleuser?: RoleUncheckedCreateNestedManyWithoutCreatedByUserInput
    ClientInfoLog?: ClientInfoLogUncheckedCreateNestedManyWithoutCreatedUserInput
  }

  export type UserCreateOrConnectWithoutClientInfoInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClientInfoInput, UserUncheckedCreateWithoutClientInfoInput>
  }

  export type UserCreateManyClientInfoInputEnvelope = {
    data: UserCreateManyClientInfoInput | UserCreateManyClientInfoInput[]
    skipDuplicates?: boolean
  }

  export type RoleCreateWithoutClientInfoInput = {
    RoleID?: bigint | number
    rolename: string
    createddate?: Date | string | null
    updateddate?: Date | string | null
    CreatedByUser?: UserCreateNestedOneWithoutRoleuserInput
    Users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutClientInfoInput = {
    RoleID?: bigint | number
    rolename: string
    createdBy?: bigint | number | null
    createddate?: Date | string | null
    updateddate?: Date | string | null
    Users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutClientInfoInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutClientInfoInput, RoleUncheckedCreateWithoutClientInfoInput>
  }

  export type RoleCreateManyClientInfoInputEnvelope = {
    data: RoleCreateManyClientInfoInput | RoleCreateManyClientInfoInput[]
    skipDuplicates?: boolean
  }

  export type ClientInfoLogCreateWithoutClientInput = {
    ClientInfoLogId?: bigint | number
    renewalDate?: Date | string | null
    createdAt?: Date | string | null
    createdUser?: UserCreateNestedOneWithoutClientInfoLogInput
  }

  export type ClientInfoLogUncheckedCreateWithoutClientInput = {
    ClientInfoLogId?: bigint | number
    renewalDate?: Date | string | null
    createdAt?: Date | string | null
    createdBy?: bigint | number | null
  }

  export type ClientInfoLogCreateOrConnectWithoutClientInput = {
    where: ClientInfoLogWhereUniqueInput
    create: XOR<ClientInfoLogCreateWithoutClientInput, ClientInfoLogUncheckedCreateWithoutClientInput>
  }

  export type ClientInfoLogCreateManyClientInputEnvelope = {
    data: ClientInfoLogCreateManyClientInput | ClientInfoLogCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type ClientDetailsUpsertWithWhereUniqueWithoutClientInfoInput = {
    where: ClientDetailsWhereUniqueInput
    update: XOR<ClientDetailsUpdateWithoutClientInfoInput, ClientDetailsUncheckedUpdateWithoutClientInfoInput>
    create: XOR<ClientDetailsCreateWithoutClientInfoInput, ClientDetailsUncheckedCreateWithoutClientInfoInput>
  }

  export type ClientDetailsUpdateWithWhereUniqueWithoutClientInfoInput = {
    where: ClientDetailsWhereUniqueInput
    data: XOR<ClientDetailsUpdateWithoutClientInfoInput, ClientDetailsUncheckedUpdateWithoutClientInfoInput>
  }

  export type ClientDetailsUpdateManyWithWhereWithoutClientInfoInput = {
    where: ClientDetailsScalarWhereInput
    data: XOR<ClientDetailsUpdateManyMutationInput, ClientDetailsUncheckedUpdateManyWithoutClientInfoInput>
  }

  export type ClientDetailsScalarWhereInput = {
    AND?: ClientDetailsScalarWhereInput | ClientDetailsScalarWhereInput[]
    OR?: ClientDetailsScalarWhereInput[]
    NOT?: ClientDetailsScalarWhereInput | ClientDetailsScalarWhereInput[]
    ClientDetailsID?: BigIntFilter<"ClientDetails"> | bigint | number
    email?: StringFilter<"ClientDetails"> | string
    contact_number?: StringFilter<"ClientDetails"> | string
    address?: StringNullableFilter<"ClientDetails"> | string | null
    state_name?: StringNullableFilter<"ClientDetails"> | string | null
    state_isoCode?: StringNullableFilter<"ClientDetails"> | string | null
    brand?: StringNullableFilter<"ClientDetails"> | string | null
    country_name?: StringNullableFilter<"ClientDetails"> | string | null
    country_isoCode?: StringNullableFilter<"ClientDetails"> | string | null
    country_phonecode?: StringNullableFilter<"ClientDetails"> | string | null
    currency?: StringNullableFilter<"ClientDetails"> | string | null
    agreement_date?: DateTimeNullableFilter<"ClientDetails"> | Date | string | null
    renewal_date?: DateTimeNullableFilter<"ClientDetails"> | Date | string | null
    address_proof?: StringNullableFilter<"ClientDetails"> | string | null
    tax_proof?: StringNullableFilter<"ClientDetails"> | string | null
    logo_exists?: BoolNullableFilter<"ClientDetails"> | boolean | null
    file_name?: StringNullableFilter<"ClientDetails"> | string | null
    file_extension?: StringNullableFilter<"ClientDetails"> | string | null
    created_at?: DateTimeFilter<"ClientDetails"> | Date | string
    updated_at?: DateTimeFilter<"ClientDetails"> | Date | string
    ClientInfoID?: BigIntFilter<"ClientDetails"> | bigint | number
  }

  export type UserUpsertWithWhereUniqueWithoutClientInfoInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutClientInfoInput, UserUncheckedUpdateWithoutClientInfoInput>
    create: XOR<UserCreateWithoutClientInfoInput, UserUncheckedCreateWithoutClientInfoInput>
  }

  export type UserUpdateWithWhereUniqueWithoutClientInfoInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutClientInfoInput, UserUncheckedUpdateWithoutClientInfoInput>
  }

  export type UserUpdateManyWithWhereWithoutClientInfoInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutClientInfoInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    UserID?: BigIntFilter<"User"> | bigint | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phonenumber?: StringFilter<"User"> | string
    status?: BoolFilter<"User"> | boolean
    clientId?: BigIntFilter<"User"> | bigint | number
    roleId?: BigIntFilter<"User"> | bigint | number
    createddate?: DateTimeFilter<"User"> | Date | string
    updateddate?: DateTimeNullableFilter<"User"> | Date | string | null
    IsAdmin?: BoolFilter<"User"> | boolean
    reportsTo?: BigIntNullableFilter<"User"> | bigint | number | null
    person_name?: StringNullableFilter<"User"> | string | null
    passwordResetToken?: StringNullableFilter<"User"> | string | null
    passwordResetExpires?: DateTimeNullableFilter<"User"> | Date | string | null
  }

  export type RoleUpsertWithWhereUniqueWithoutClientInfoInput = {
    where: RoleWhereUniqueInput
    update: XOR<RoleUpdateWithoutClientInfoInput, RoleUncheckedUpdateWithoutClientInfoInput>
    create: XOR<RoleCreateWithoutClientInfoInput, RoleUncheckedCreateWithoutClientInfoInput>
  }

  export type RoleUpdateWithWhereUniqueWithoutClientInfoInput = {
    where: RoleWhereUniqueInput
    data: XOR<RoleUpdateWithoutClientInfoInput, RoleUncheckedUpdateWithoutClientInfoInput>
  }

  export type RoleUpdateManyWithWhereWithoutClientInfoInput = {
    where: RoleScalarWhereInput
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyWithoutClientInfoInput>
  }

  export type RoleScalarWhereInput = {
    AND?: RoleScalarWhereInput | RoleScalarWhereInput[]
    OR?: RoleScalarWhereInput[]
    NOT?: RoleScalarWhereInput | RoleScalarWhereInput[]
    RoleID?: BigIntFilter<"Role"> | bigint | number
    rolename?: StringFilter<"Role"> | string
    clientId?: BigIntNullableFilter<"Role"> | bigint | number | null
    createdBy?: BigIntNullableFilter<"Role"> | bigint | number | null
    createddate?: DateTimeNullableFilter<"Role"> | Date | string | null
    updateddate?: DateTimeNullableFilter<"Role"> | Date | string | null
  }

  export type ClientInfoLogUpsertWithWhereUniqueWithoutClientInput = {
    where: ClientInfoLogWhereUniqueInput
    update: XOR<ClientInfoLogUpdateWithoutClientInput, ClientInfoLogUncheckedUpdateWithoutClientInput>
    create: XOR<ClientInfoLogCreateWithoutClientInput, ClientInfoLogUncheckedCreateWithoutClientInput>
  }

  export type ClientInfoLogUpdateWithWhereUniqueWithoutClientInput = {
    where: ClientInfoLogWhereUniqueInput
    data: XOR<ClientInfoLogUpdateWithoutClientInput, ClientInfoLogUncheckedUpdateWithoutClientInput>
  }

  export type ClientInfoLogUpdateManyWithWhereWithoutClientInput = {
    where: ClientInfoLogScalarWhereInput
    data: XOR<ClientInfoLogUpdateManyMutationInput, ClientInfoLogUncheckedUpdateManyWithoutClientInput>
  }

  export type ClientInfoLogScalarWhereInput = {
    AND?: ClientInfoLogScalarWhereInput | ClientInfoLogScalarWhereInput[]
    OR?: ClientInfoLogScalarWhereInput[]
    NOT?: ClientInfoLogScalarWhereInput | ClientInfoLogScalarWhereInput[]
    ClientInfoLogId?: BigIntFilter<"ClientInfoLog"> | bigint | number
    clientId?: BigIntNullableFilter<"ClientInfoLog"> | bigint | number | null
    renewalDate?: DateTimeNullableFilter<"ClientInfoLog"> | Date | string | null
    createdAt?: DateTimeNullableFilter<"ClientInfoLog"> | Date | string | null
    createdBy?: BigIntNullableFilter<"ClientInfoLog"> | bigint | number | null
  }

  export type CountryCreateWithoutClientDetailsInput = {
    CountryID?: bigint | number
    isoCode: string
    name: string
    phonecode: string
    flag?: string | null
    currency?: string | null
    latitude?: string | null
    longitude?: string | null
    createdAt?: Date | string | null
  }

  export type CountryUncheckedCreateWithoutClientDetailsInput = {
    CountryID?: bigint | number
    isoCode: string
    name: string
    phonecode: string
    flag?: string | null
    currency?: string | null
    latitude?: string | null
    longitude?: string | null
    createdAt?: Date | string | null
  }

  export type CountryCreateOrConnectWithoutClientDetailsInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutClientDetailsInput, CountryUncheckedCreateWithoutClientDetailsInput>
  }

  export type ClientInfoCreateWithoutClientDetailsInput = {
    ClientInfoID?: bigint | number
    client_name: string
    firm_name: string
    status?: number | null
    created_at: Date | string
    updated_at?: Date | string
    updated_by?: number | null
    User?: UserCreateNestedManyWithoutClientInfoInput
    Role?: RoleCreateNestedManyWithoutClientInfoInput
    ClientInfoLog?: ClientInfoLogCreateNestedManyWithoutClientInput
  }

  export type ClientInfoUncheckedCreateWithoutClientDetailsInput = {
    ClientInfoID?: bigint | number
    client_name: string
    firm_name: string
    status?: number | null
    created_at: Date | string
    updated_at?: Date | string
    updated_by?: number | null
    User?: UserUncheckedCreateNestedManyWithoutClientInfoInput
    Role?: RoleUncheckedCreateNestedManyWithoutClientInfoInput
    ClientInfoLog?: ClientInfoLogUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientInfoCreateOrConnectWithoutClientDetailsInput = {
    where: ClientInfoWhereUniqueInput
    create: XOR<ClientInfoCreateWithoutClientDetailsInput, ClientInfoUncheckedCreateWithoutClientDetailsInput>
  }

  export type CountryUpsertWithoutClientDetailsInput = {
    update: XOR<CountryUpdateWithoutClientDetailsInput, CountryUncheckedUpdateWithoutClientDetailsInput>
    create: XOR<CountryCreateWithoutClientDetailsInput, CountryUncheckedCreateWithoutClientDetailsInput>
    where?: CountryWhereInput
  }

  export type CountryUpdateToOneWithWhereWithoutClientDetailsInput = {
    where?: CountryWhereInput
    data: XOR<CountryUpdateWithoutClientDetailsInput, CountryUncheckedUpdateWithoutClientDetailsInput>
  }

  export type CountryUpdateWithoutClientDetailsInput = {
    CountryID?: BigIntFieldUpdateOperationsInput | bigint | number
    isoCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phonecode?: StringFieldUpdateOperationsInput | string
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CountryUncheckedUpdateWithoutClientDetailsInput = {
    CountryID?: BigIntFieldUpdateOperationsInput | bigint | number
    isoCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phonecode?: StringFieldUpdateOperationsInput | string
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClientInfoUpsertWithoutClientDetailsInput = {
    update: XOR<ClientInfoUpdateWithoutClientDetailsInput, ClientInfoUncheckedUpdateWithoutClientDetailsInput>
    create: XOR<ClientInfoCreateWithoutClientDetailsInput, ClientInfoUncheckedCreateWithoutClientDetailsInput>
    where?: ClientInfoWhereInput
  }

  export type ClientInfoUpdateToOneWithWhereWithoutClientDetailsInput = {
    where?: ClientInfoWhereInput
    data: XOR<ClientInfoUpdateWithoutClientDetailsInput, ClientInfoUncheckedUpdateWithoutClientDetailsInput>
  }

  export type ClientInfoUpdateWithoutClientDetailsInput = {
    ClientInfoID?: BigIntFieldUpdateOperationsInput | bigint | number
    client_name?: StringFieldUpdateOperationsInput | string
    firm_name?: StringFieldUpdateOperationsInput | string
    status?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    User?: UserUpdateManyWithoutClientInfoNestedInput
    Role?: RoleUpdateManyWithoutClientInfoNestedInput
    ClientInfoLog?: ClientInfoLogUpdateManyWithoutClientNestedInput
  }

  export type ClientInfoUncheckedUpdateWithoutClientDetailsInput = {
    ClientInfoID?: BigIntFieldUpdateOperationsInput | bigint | number
    client_name?: StringFieldUpdateOperationsInput | string
    firm_name?: StringFieldUpdateOperationsInput | string
    status?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    User?: UserUncheckedUpdateManyWithoutClientInfoNestedInput
    Role?: RoleUncheckedUpdateManyWithoutClientInfoNestedInput
    ClientInfoLog?: ClientInfoLogUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientInfoCreateWithoutClientInfoLogInput = {
    ClientInfoID?: bigint | number
    client_name: string
    firm_name: string
    status?: number | null
    created_at: Date | string
    updated_at?: Date | string
    updated_by?: number | null
    ClientDetails?: ClientDetailsCreateNestedManyWithoutClientInfoInput
    User?: UserCreateNestedManyWithoutClientInfoInput
    Role?: RoleCreateNestedManyWithoutClientInfoInput
  }

  export type ClientInfoUncheckedCreateWithoutClientInfoLogInput = {
    ClientInfoID?: bigint | number
    client_name: string
    firm_name: string
    status?: number | null
    created_at: Date | string
    updated_at?: Date | string
    updated_by?: number | null
    ClientDetails?: ClientDetailsUncheckedCreateNestedManyWithoutClientInfoInput
    User?: UserUncheckedCreateNestedManyWithoutClientInfoInput
    Role?: RoleUncheckedCreateNestedManyWithoutClientInfoInput
  }

  export type ClientInfoCreateOrConnectWithoutClientInfoLogInput = {
    where: ClientInfoWhereUniqueInput
    create: XOR<ClientInfoCreateWithoutClientInfoLogInput, ClientInfoUncheckedCreateWithoutClientInfoLogInput>
  }

  export type UserCreateWithoutClientInfoLogInput = {
    UserID?: bigint | number
    username: string
    email: string
    password: string
    phonenumber: string
    status: boolean
    createddate?: Date | string
    updateddate?: Date | string | null
    IsAdmin: boolean
    person_name?: string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    ClientInfo: ClientInfoCreateNestedOneWithoutUserInput
    Role: RoleCreateNestedOneWithoutUsersInput
    ReportsToUser?: UserCreateNestedOneWithoutSubordinatesInput
    Subordinates?: UserCreateNestedManyWithoutReportsToUserInput
    roleuser?: RoleCreateNestedManyWithoutCreatedByUserInput
  }

  export type UserUncheckedCreateWithoutClientInfoLogInput = {
    UserID?: bigint | number
    username: string
    email: string
    password: string
    phonenumber: string
    status: boolean
    clientId: bigint | number
    roleId: bigint | number
    createddate?: Date | string
    updateddate?: Date | string | null
    IsAdmin: boolean
    reportsTo?: bigint | number | null
    person_name?: string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    Subordinates?: UserUncheckedCreateNestedManyWithoutReportsToUserInput
    roleuser?: RoleUncheckedCreateNestedManyWithoutCreatedByUserInput
  }

  export type UserCreateOrConnectWithoutClientInfoLogInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClientInfoLogInput, UserUncheckedCreateWithoutClientInfoLogInput>
  }

  export type ClientInfoUpsertWithoutClientInfoLogInput = {
    update: XOR<ClientInfoUpdateWithoutClientInfoLogInput, ClientInfoUncheckedUpdateWithoutClientInfoLogInput>
    create: XOR<ClientInfoCreateWithoutClientInfoLogInput, ClientInfoUncheckedCreateWithoutClientInfoLogInput>
    where?: ClientInfoWhereInput
  }

  export type ClientInfoUpdateToOneWithWhereWithoutClientInfoLogInput = {
    where?: ClientInfoWhereInput
    data: XOR<ClientInfoUpdateWithoutClientInfoLogInput, ClientInfoUncheckedUpdateWithoutClientInfoLogInput>
  }

  export type ClientInfoUpdateWithoutClientInfoLogInput = {
    ClientInfoID?: BigIntFieldUpdateOperationsInput | bigint | number
    client_name?: StringFieldUpdateOperationsInput | string
    firm_name?: StringFieldUpdateOperationsInput | string
    status?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    ClientDetails?: ClientDetailsUpdateManyWithoutClientInfoNestedInput
    User?: UserUpdateManyWithoutClientInfoNestedInput
    Role?: RoleUpdateManyWithoutClientInfoNestedInput
  }

  export type ClientInfoUncheckedUpdateWithoutClientInfoLogInput = {
    ClientInfoID?: BigIntFieldUpdateOperationsInput | bigint | number
    client_name?: StringFieldUpdateOperationsInput | string
    firm_name?: StringFieldUpdateOperationsInput | string
    status?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    ClientDetails?: ClientDetailsUncheckedUpdateManyWithoutClientInfoNestedInput
    User?: UserUncheckedUpdateManyWithoutClientInfoNestedInput
    Role?: RoleUncheckedUpdateManyWithoutClientInfoNestedInput
  }

  export type UserUpsertWithoutClientInfoLogInput = {
    update: XOR<UserUpdateWithoutClientInfoLogInput, UserUncheckedUpdateWithoutClientInfoLogInput>
    create: XOR<UserCreateWithoutClientInfoLogInput, UserUncheckedCreateWithoutClientInfoLogInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutClientInfoLogInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutClientInfoLogInput, UserUncheckedUpdateWithoutClientInfoLogInput>
  }

  export type UserUpdateWithoutClientInfoLogInput = {
    UserID?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phonenumber?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createddate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsAdmin?: BoolFieldUpdateOperationsInput | boolean
    person_name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ClientInfo?: ClientInfoUpdateOneRequiredWithoutUserNestedInput
    Role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    ReportsToUser?: UserUpdateOneWithoutSubordinatesNestedInput
    Subordinates?: UserUpdateManyWithoutReportsToUserNestedInput
    roleuser?: RoleUpdateManyWithoutCreatedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutClientInfoLogInput = {
    UserID?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phonenumber?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    clientId?: BigIntFieldUpdateOperationsInput | bigint | number
    roleId?: BigIntFieldUpdateOperationsInput | bigint | number
    createddate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsAdmin?: BoolFieldUpdateOperationsInput | boolean
    reportsTo?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    person_name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Subordinates?: UserUncheckedUpdateManyWithoutReportsToUserNestedInput
    roleuser?: RoleUncheckedUpdateManyWithoutCreatedByUserNestedInput
  }

  export type ClientInfoCreateWithoutUserInput = {
    ClientInfoID?: bigint | number
    client_name: string
    firm_name: string
    status?: number | null
    created_at: Date | string
    updated_at?: Date | string
    updated_by?: number | null
    ClientDetails?: ClientDetailsCreateNestedManyWithoutClientInfoInput
    Role?: RoleCreateNestedManyWithoutClientInfoInput
    ClientInfoLog?: ClientInfoLogCreateNestedManyWithoutClientInput
  }

  export type ClientInfoUncheckedCreateWithoutUserInput = {
    ClientInfoID?: bigint | number
    client_name: string
    firm_name: string
    status?: number | null
    created_at: Date | string
    updated_at?: Date | string
    updated_by?: number | null
    ClientDetails?: ClientDetailsUncheckedCreateNestedManyWithoutClientInfoInput
    Role?: RoleUncheckedCreateNestedManyWithoutClientInfoInput
    ClientInfoLog?: ClientInfoLogUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientInfoCreateOrConnectWithoutUserInput = {
    where: ClientInfoWhereUniqueInput
    create: XOR<ClientInfoCreateWithoutUserInput, ClientInfoUncheckedCreateWithoutUserInput>
  }

  export type RoleCreateWithoutUsersInput = {
    RoleID?: bigint | number
    rolename: string
    createddate?: Date | string | null
    updateddate?: Date | string | null
    ClientInfo?: ClientInfoCreateNestedOneWithoutRoleInput
    CreatedByUser?: UserCreateNestedOneWithoutRoleuserInput
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    RoleID?: bigint | number
    rolename: string
    clientId?: bigint | number | null
    createdBy?: bigint | number | null
    createddate?: Date | string | null
    updateddate?: Date | string | null
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type UserCreateWithoutSubordinatesInput = {
    UserID?: bigint | number
    username: string
    email: string
    password: string
    phonenumber: string
    status: boolean
    createddate?: Date | string
    updateddate?: Date | string | null
    IsAdmin: boolean
    person_name?: string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    ClientInfo: ClientInfoCreateNestedOneWithoutUserInput
    Role: RoleCreateNestedOneWithoutUsersInput
    ReportsToUser?: UserCreateNestedOneWithoutSubordinatesInput
    roleuser?: RoleCreateNestedManyWithoutCreatedByUserInput
    ClientInfoLog?: ClientInfoLogCreateNestedManyWithoutCreatedUserInput
  }

  export type UserUncheckedCreateWithoutSubordinatesInput = {
    UserID?: bigint | number
    username: string
    email: string
    password: string
    phonenumber: string
    status: boolean
    clientId: bigint | number
    roleId: bigint | number
    createddate?: Date | string
    updateddate?: Date | string | null
    IsAdmin: boolean
    reportsTo?: bigint | number | null
    person_name?: string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    roleuser?: RoleUncheckedCreateNestedManyWithoutCreatedByUserInput
    ClientInfoLog?: ClientInfoLogUncheckedCreateNestedManyWithoutCreatedUserInput
  }

  export type UserCreateOrConnectWithoutSubordinatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubordinatesInput, UserUncheckedCreateWithoutSubordinatesInput>
  }

  export type UserCreateWithoutReportsToUserInput = {
    UserID?: bigint | number
    username: string
    email: string
    password: string
    phonenumber: string
    status: boolean
    createddate?: Date | string
    updateddate?: Date | string | null
    IsAdmin: boolean
    person_name?: string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    ClientInfo: ClientInfoCreateNestedOneWithoutUserInput
    Role: RoleCreateNestedOneWithoutUsersInput
    Subordinates?: UserCreateNestedManyWithoutReportsToUserInput
    roleuser?: RoleCreateNestedManyWithoutCreatedByUserInput
    ClientInfoLog?: ClientInfoLogCreateNestedManyWithoutCreatedUserInput
  }

  export type UserUncheckedCreateWithoutReportsToUserInput = {
    UserID?: bigint | number
    username: string
    email: string
    password: string
    phonenumber: string
    status: boolean
    clientId: bigint | number
    roleId: bigint | number
    createddate?: Date | string
    updateddate?: Date | string | null
    IsAdmin: boolean
    person_name?: string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    Subordinates?: UserUncheckedCreateNestedManyWithoutReportsToUserInput
    roleuser?: RoleUncheckedCreateNestedManyWithoutCreatedByUserInput
    ClientInfoLog?: ClientInfoLogUncheckedCreateNestedManyWithoutCreatedUserInput
  }

  export type UserCreateOrConnectWithoutReportsToUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReportsToUserInput, UserUncheckedCreateWithoutReportsToUserInput>
  }

  export type UserCreateManyReportsToUserInputEnvelope = {
    data: UserCreateManyReportsToUserInput | UserCreateManyReportsToUserInput[]
    skipDuplicates?: boolean
  }

  export type RoleCreateWithoutCreatedByUserInput = {
    RoleID?: bigint | number
    rolename: string
    createddate?: Date | string | null
    updateddate?: Date | string | null
    ClientInfo?: ClientInfoCreateNestedOneWithoutRoleInput
    Users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutCreatedByUserInput = {
    RoleID?: bigint | number
    rolename: string
    clientId?: bigint | number | null
    createddate?: Date | string | null
    updateddate?: Date | string | null
    Users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutCreatedByUserInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutCreatedByUserInput, RoleUncheckedCreateWithoutCreatedByUserInput>
  }

  export type RoleCreateManyCreatedByUserInputEnvelope = {
    data: RoleCreateManyCreatedByUserInput | RoleCreateManyCreatedByUserInput[]
    skipDuplicates?: boolean
  }

  export type ClientInfoLogCreateWithoutCreatedUserInput = {
    ClientInfoLogId?: bigint | number
    renewalDate?: Date | string | null
    createdAt?: Date | string | null
    client?: ClientInfoCreateNestedOneWithoutClientInfoLogInput
  }

  export type ClientInfoLogUncheckedCreateWithoutCreatedUserInput = {
    ClientInfoLogId?: bigint | number
    clientId?: bigint | number | null
    renewalDate?: Date | string | null
    createdAt?: Date | string | null
  }

  export type ClientInfoLogCreateOrConnectWithoutCreatedUserInput = {
    where: ClientInfoLogWhereUniqueInput
    create: XOR<ClientInfoLogCreateWithoutCreatedUserInput, ClientInfoLogUncheckedCreateWithoutCreatedUserInput>
  }

  export type ClientInfoLogCreateManyCreatedUserInputEnvelope = {
    data: ClientInfoLogCreateManyCreatedUserInput | ClientInfoLogCreateManyCreatedUserInput[]
    skipDuplicates?: boolean
  }

  export type ClientInfoUpsertWithoutUserInput = {
    update: XOR<ClientInfoUpdateWithoutUserInput, ClientInfoUncheckedUpdateWithoutUserInput>
    create: XOR<ClientInfoCreateWithoutUserInput, ClientInfoUncheckedCreateWithoutUserInput>
    where?: ClientInfoWhereInput
  }

  export type ClientInfoUpdateToOneWithWhereWithoutUserInput = {
    where?: ClientInfoWhereInput
    data: XOR<ClientInfoUpdateWithoutUserInput, ClientInfoUncheckedUpdateWithoutUserInput>
  }

  export type ClientInfoUpdateWithoutUserInput = {
    ClientInfoID?: BigIntFieldUpdateOperationsInput | bigint | number
    client_name?: StringFieldUpdateOperationsInput | string
    firm_name?: StringFieldUpdateOperationsInput | string
    status?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    ClientDetails?: ClientDetailsUpdateManyWithoutClientInfoNestedInput
    Role?: RoleUpdateManyWithoutClientInfoNestedInput
    ClientInfoLog?: ClientInfoLogUpdateManyWithoutClientNestedInput
  }

  export type ClientInfoUncheckedUpdateWithoutUserInput = {
    ClientInfoID?: BigIntFieldUpdateOperationsInput | bigint | number
    client_name?: StringFieldUpdateOperationsInput | string
    firm_name?: StringFieldUpdateOperationsInput | string
    status?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    ClientDetails?: ClientDetailsUncheckedUpdateManyWithoutClientInfoNestedInput
    Role?: RoleUncheckedUpdateManyWithoutClientInfoNestedInput
    ClientInfoLog?: ClientInfoLogUncheckedUpdateManyWithoutClientNestedInput
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    RoleID?: BigIntFieldUpdateOperationsInput | bigint | number
    rolename?: StringFieldUpdateOperationsInput | string
    createddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ClientInfo?: ClientInfoUpdateOneWithoutRoleNestedInput
    CreatedByUser?: UserUpdateOneWithoutRoleuserNestedInput
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    RoleID?: BigIntFieldUpdateOperationsInput | bigint | number
    rolename?: StringFieldUpdateOperationsInput | string
    clientId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUpsertWithoutSubordinatesInput = {
    update: XOR<UserUpdateWithoutSubordinatesInput, UserUncheckedUpdateWithoutSubordinatesInput>
    create: XOR<UserCreateWithoutSubordinatesInput, UserUncheckedCreateWithoutSubordinatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubordinatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubordinatesInput, UserUncheckedUpdateWithoutSubordinatesInput>
  }

  export type UserUpdateWithoutSubordinatesInput = {
    UserID?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phonenumber?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createddate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsAdmin?: BoolFieldUpdateOperationsInput | boolean
    person_name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ClientInfo?: ClientInfoUpdateOneRequiredWithoutUserNestedInput
    Role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    ReportsToUser?: UserUpdateOneWithoutSubordinatesNestedInput
    roleuser?: RoleUpdateManyWithoutCreatedByUserNestedInput
    ClientInfoLog?: ClientInfoLogUpdateManyWithoutCreatedUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubordinatesInput = {
    UserID?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phonenumber?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    clientId?: BigIntFieldUpdateOperationsInput | bigint | number
    roleId?: BigIntFieldUpdateOperationsInput | bigint | number
    createddate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsAdmin?: BoolFieldUpdateOperationsInput | boolean
    reportsTo?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    person_name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roleuser?: RoleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    ClientInfoLog?: ClientInfoLogUncheckedUpdateManyWithoutCreatedUserNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutReportsToUserInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutReportsToUserInput, UserUncheckedUpdateWithoutReportsToUserInput>
    create: XOR<UserCreateWithoutReportsToUserInput, UserUncheckedCreateWithoutReportsToUserInput>
  }

  export type UserUpdateWithWhereUniqueWithoutReportsToUserInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutReportsToUserInput, UserUncheckedUpdateWithoutReportsToUserInput>
  }

  export type UserUpdateManyWithWhereWithoutReportsToUserInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutReportsToUserInput>
  }

  export type RoleUpsertWithWhereUniqueWithoutCreatedByUserInput = {
    where: RoleWhereUniqueInput
    update: XOR<RoleUpdateWithoutCreatedByUserInput, RoleUncheckedUpdateWithoutCreatedByUserInput>
    create: XOR<RoleCreateWithoutCreatedByUserInput, RoleUncheckedCreateWithoutCreatedByUserInput>
  }

  export type RoleUpdateWithWhereUniqueWithoutCreatedByUserInput = {
    where: RoleWhereUniqueInput
    data: XOR<RoleUpdateWithoutCreatedByUserInput, RoleUncheckedUpdateWithoutCreatedByUserInput>
  }

  export type RoleUpdateManyWithWhereWithoutCreatedByUserInput = {
    where: RoleScalarWhereInput
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyWithoutCreatedByUserInput>
  }

  export type ClientInfoLogUpsertWithWhereUniqueWithoutCreatedUserInput = {
    where: ClientInfoLogWhereUniqueInput
    update: XOR<ClientInfoLogUpdateWithoutCreatedUserInput, ClientInfoLogUncheckedUpdateWithoutCreatedUserInput>
    create: XOR<ClientInfoLogCreateWithoutCreatedUserInput, ClientInfoLogUncheckedCreateWithoutCreatedUserInput>
  }

  export type ClientInfoLogUpdateWithWhereUniqueWithoutCreatedUserInput = {
    where: ClientInfoLogWhereUniqueInput
    data: XOR<ClientInfoLogUpdateWithoutCreatedUserInput, ClientInfoLogUncheckedUpdateWithoutCreatedUserInput>
  }

  export type ClientInfoLogUpdateManyWithWhereWithoutCreatedUserInput = {
    where: ClientInfoLogScalarWhereInput
    data: XOR<ClientInfoLogUpdateManyMutationInput, ClientInfoLogUncheckedUpdateManyWithoutCreatedUserInput>
  }

  export type ClientInfoCreateWithoutRoleInput = {
    ClientInfoID?: bigint | number
    client_name: string
    firm_name: string
    status?: number | null
    created_at: Date | string
    updated_at?: Date | string
    updated_by?: number | null
    ClientDetails?: ClientDetailsCreateNestedManyWithoutClientInfoInput
    User?: UserCreateNestedManyWithoutClientInfoInput
    ClientInfoLog?: ClientInfoLogCreateNestedManyWithoutClientInput
  }

  export type ClientInfoUncheckedCreateWithoutRoleInput = {
    ClientInfoID?: bigint | number
    client_name: string
    firm_name: string
    status?: number | null
    created_at: Date | string
    updated_at?: Date | string
    updated_by?: number | null
    ClientDetails?: ClientDetailsUncheckedCreateNestedManyWithoutClientInfoInput
    User?: UserUncheckedCreateNestedManyWithoutClientInfoInput
    ClientInfoLog?: ClientInfoLogUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientInfoCreateOrConnectWithoutRoleInput = {
    where: ClientInfoWhereUniqueInput
    create: XOR<ClientInfoCreateWithoutRoleInput, ClientInfoUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateWithoutRoleuserInput = {
    UserID?: bigint | number
    username: string
    email: string
    password: string
    phonenumber: string
    status: boolean
    createddate?: Date | string
    updateddate?: Date | string | null
    IsAdmin: boolean
    person_name?: string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    ClientInfo: ClientInfoCreateNestedOneWithoutUserInput
    Role: RoleCreateNestedOneWithoutUsersInput
    ReportsToUser?: UserCreateNestedOneWithoutSubordinatesInput
    Subordinates?: UserCreateNestedManyWithoutReportsToUserInput
    ClientInfoLog?: ClientInfoLogCreateNestedManyWithoutCreatedUserInput
  }

  export type UserUncheckedCreateWithoutRoleuserInput = {
    UserID?: bigint | number
    username: string
    email: string
    password: string
    phonenumber: string
    status: boolean
    clientId: bigint | number
    roleId: bigint | number
    createddate?: Date | string
    updateddate?: Date | string | null
    IsAdmin: boolean
    reportsTo?: bigint | number | null
    person_name?: string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    Subordinates?: UserUncheckedCreateNestedManyWithoutReportsToUserInput
    ClientInfoLog?: ClientInfoLogUncheckedCreateNestedManyWithoutCreatedUserInput
  }

  export type UserCreateOrConnectWithoutRoleuserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleuserInput, UserUncheckedCreateWithoutRoleuserInput>
  }

  export type UserCreateWithoutRoleInput = {
    UserID?: bigint | number
    username: string
    email: string
    password: string
    phonenumber: string
    status: boolean
    createddate?: Date | string
    updateddate?: Date | string | null
    IsAdmin: boolean
    person_name?: string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    ClientInfo: ClientInfoCreateNestedOneWithoutUserInput
    ReportsToUser?: UserCreateNestedOneWithoutSubordinatesInput
    Subordinates?: UserCreateNestedManyWithoutReportsToUserInput
    roleuser?: RoleCreateNestedManyWithoutCreatedByUserInput
    ClientInfoLog?: ClientInfoLogCreateNestedManyWithoutCreatedUserInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    UserID?: bigint | number
    username: string
    email: string
    password: string
    phonenumber: string
    status: boolean
    clientId: bigint | number
    createddate?: Date | string
    updateddate?: Date | string | null
    IsAdmin: boolean
    reportsTo?: bigint | number | null
    person_name?: string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    Subordinates?: UserUncheckedCreateNestedManyWithoutReportsToUserInput
    roleuser?: RoleUncheckedCreateNestedManyWithoutCreatedByUserInput
    ClientInfoLog?: ClientInfoLogUncheckedCreateNestedManyWithoutCreatedUserInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type ClientInfoUpsertWithoutRoleInput = {
    update: XOR<ClientInfoUpdateWithoutRoleInput, ClientInfoUncheckedUpdateWithoutRoleInput>
    create: XOR<ClientInfoCreateWithoutRoleInput, ClientInfoUncheckedCreateWithoutRoleInput>
    where?: ClientInfoWhereInput
  }

  export type ClientInfoUpdateToOneWithWhereWithoutRoleInput = {
    where?: ClientInfoWhereInput
    data: XOR<ClientInfoUpdateWithoutRoleInput, ClientInfoUncheckedUpdateWithoutRoleInput>
  }

  export type ClientInfoUpdateWithoutRoleInput = {
    ClientInfoID?: BigIntFieldUpdateOperationsInput | bigint | number
    client_name?: StringFieldUpdateOperationsInput | string
    firm_name?: StringFieldUpdateOperationsInput | string
    status?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    ClientDetails?: ClientDetailsUpdateManyWithoutClientInfoNestedInput
    User?: UserUpdateManyWithoutClientInfoNestedInput
    ClientInfoLog?: ClientInfoLogUpdateManyWithoutClientNestedInput
  }

  export type ClientInfoUncheckedUpdateWithoutRoleInput = {
    ClientInfoID?: BigIntFieldUpdateOperationsInput | bigint | number
    client_name?: StringFieldUpdateOperationsInput | string
    firm_name?: StringFieldUpdateOperationsInput | string
    status?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    ClientDetails?: ClientDetailsUncheckedUpdateManyWithoutClientInfoNestedInput
    User?: UserUncheckedUpdateManyWithoutClientInfoNestedInput
    ClientInfoLog?: ClientInfoLogUncheckedUpdateManyWithoutClientNestedInput
  }

  export type UserUpsertWithoutRoleuserInput = {
    update: XOR<UserUpdateWithoutRoleuserInput, UserUncheckedUpdateWithoutRoleuserInput>
    create: XOR<UserCreateWithoutRoleuserInput, UserUncheckedCreateWithoutRoleuserInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRoleuserInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRoleuserInput, UserUncheckedUpdateWithoutRoleuserInput>
  }

  export type UserUpdateWithoutRoleuserInput = {
    UserID?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phonenumber?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createddate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsAdmin?: BoolFieldUpdateOperationsInput | boolean
    person_name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ClientInfo?: ClientInfoUpdateOneRequiredWithoutUserNestedInput
    Role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    ReportsToUser?: UserUpdateOneWithoutSubordinatesNestedInput
    Subordinates?: UserUpdateManyWithoutReportsToUserNestedInput
    ClientInfoLog?: ClientInfoLogUpdateManyWithoutCreatedUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleuserInput = {
    UserID?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phonenumber?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    clientId?: BigIntFieldUpdateOperationsInput | bigint | number
    roleId?: BigIntFieldUpdateOperationsInput | bigint | number
    createddate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsAdmin?: BoolFieldUpdateOperationsInput | boolean
    reportsTo?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    person_name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Subordinates?: UserUncheckedUpdateManyWithoutReportsToUserNestedInput
    ClientInfoLog?: ClientInfoLogUncheckedUpdateManyWithoutCreatedUserNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type MenuItemCreateWithoutMenuInput = {
    MenuItemID?: bigint | number
    display_name: string
    action_url: string
    sort: number
    created_at?: Date | string
    icon_code?: string | null
    status?: number
  }

  export type MenuItemUncheckedCreateWithoutMenuInput = {
    MenuItemID?: bigint | number
    display_name: string
    action_url: string
    sort: number
    created_at?: Date | string
    icon_code?: string | null
    status?: number
  }

  export type MenuItemCreateOrConnectWithoutMenuInput = {
    where: MenuItemWhereUniqueInput
    create: XOR<MenuItemCreateWithoutMenuInput, MenuItemUncheckedCreateWithoutMenuInput>
  }

  export type MenuItemCreateManyMenuInputEnvelope = {
    data: MenuItemCreateManyMenuInput | MenuItemCreateManyMenuInput[]
    skipDuplicates?: boolean
  }

  export type MenuItemUpsertWithWhereUniqueWithoutMenuInput = {
    where: MenuItemWhereUniqueInput
    update: XOR<MenuItemUpdateWithoutMenuInput, MenuItemUncheckedUpdateWithoutMenuInput>
    create: XOR<MenuItemCreateWithoutMenuInput, MenuItemUncheckedCreateWithoutMenuInput>
  }

  export type MenuItemUpdateWithWhereUniqueWithoutMenuInput = {
    where: MenuItemWhereUniqueInput
    data: XOR<MenuItemUpdateWithoutMenuInput, MenuItemUncheckedUpdateWithoutMenuInput>
  }

  export type MenuItemUpdateManyWithWhereWithoutMenuInput = {
    where: MenuItemScalarWhereInput
    data: XOR<MenuItemUpdateManyMutationInput, MenuItemUncheckedUpdateManyWithoutMenuInput>
  }

  export type MenuItemScalarWhereInput = {
    AND?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
    OR?: MenuItemScalarWhereInput[]
    NOT?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
    MenuItemID?: BigIntFilter<"MenuItem"> | bigint | number
    menuId?: BigIntFilter<"MenuItem"> | bigint | number
    display_name?: StringFilter<"MenuItem"> | string
    action_url?: StringFilter<"MenuItem"> | string
    sort?: IntFilter<"MenuItem"> | number
    created_at?: DateTimeFilter<"MenuItem"> | Date | string
    icon_code?: StringNullableFilter<"MenuItem"> | string | null
    status?: IntFilter<"MenuItem"> | number
  }

  export type MenuCreateWithoutMenuItemsInput = {
    MenuID?: bigint | number
    menu_name: string
    icon_code: string
    created_at?: Date | string
  }

  export type MenuUncheckedCreateWithoutMenuItemsInput = {
    MenuID?: bigint | number
    menu_name: string
    icon_code: string
    created_at?: Date | string
  }

  export type MenuCreateOrConnectWithoutMenuItemsInput = {
    where: MenuWhereUniqueInput
    create: XOR<MenuCreateWithoutMenuItemsInput, MenuUncheckedCreateWithoutMenuItemsInput>
  }

  export type MenuUpsertWithoutMenuItemsInput = {
    update: XOR<MenuUpdateWithoutMenuItemsInput, MenuUncheckedUpdateWithoutMenuItemsInput>
    create: XOR<MenuCreateWithoutMenuItemsInput, MenuUncheckedCreateWithoutMenuItemsInput>
    where?: MenuWhereInput
  }

  export type MenuUpdateToOneWithWhereWithoutMenuItemsInput = {
    where?: MenuWhereInput
    data: XOR<MenuUpdateWithoutMenuItemsInput, MenuUncheckedUpdateWithoutMenuItemsInput>
  }

  export type MenuUpdateWithoutMenuItemsInput = {
    MenuID?: BigIntFieldUpdateOperationsInput | bigint | number
    menu_name?: StringFieldUpdateOperationsInput | string
    icon_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuUncheckedUpdateWithoutMenuItemsInput = {
    MenuID?: BigIntFieldUpdateOperationsInput | bigint | number
    menu_name?: StringFieldUpdateOperationsInput | string
    icon_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientDetailsCreateWithoutCountryInput = {
    ClientDetailsID?: bigint | number
    email: string
    contact_number: string
    address?: string | null
    state_name?: string | null
    state_isoCode?: string | null
    brand?: string | null
    country_name?: string | null
    country_phonecode?: string | null
    currency?: string | null
    agreement_date?: Date | string | null
    renewal_date?: Date | string | null
    address_proof?: string | null
    tax_proof?: string | null
    logo_exists?: boolean | null
    file_name?: string | null
    file_extension?: string | null
    created_at: Date | string
    updated_at?: Date | string
    ClientInfo: ClientInfoCreateNestedOneWithoutClientDetailsInput
  }

  export type ClientDetailsUncheckedCreateWithoutCountryInput = {
    ClientDetailsID?: bigint | number
    email: string
    contact_number: string
    address?: string | null
    state_name?: string | null
    state_isoCode?: string | null
    brand?: string | null
    country_name?: string | null
    country_phonecode?: string | null
    currency?: string | null
    agreement_date?: Date | string | null
    renewal_date?: Date | string | null
    address_proof?: string | null
    tax_proof?: string | null
    logo_exists?: boolean | null
    file_name?: string | null
    file_extension?: string | null
    created_at: Date | string
    updated_at?: Date | string
    ClientInfoID: bigint | number
  }

  export type ClientDetailsCreateOrConnectWithoutCountryInput = {
    where: ClientDetailsWhereUniqueInput
    create: XOR<ClientDetailsCreateWithoutCountryInput, ClientDetailsUncheckedCreateWithoutCountryInput>
  }

  export type ClientDetailsCreateManyCountryInputEnvelope = {
    data: ClientDetailsCreateManyCountryInput | ClientDetailsCreateManyCountryInput[]
    skipDuplicates?: boolean
  }

  export type ClientDetailsUpsertWithWhereUniqueWithoutCountryInput = {
    where: ClientDetailsWhereUniqueInput
    update: XOR<ClientDetailsUpdateWithoutCountryInput, ClientDetailsUncheckedUpdateWithoutCountryInput>
    create: XOR<ClientDetailsCreateWithoutCountryInput, ClientDetailsUncheckedCreateWithoutCountryInput>
  }

  export type ClientDetailsUpdateWithWhereUniqueWithoutCountryInput = {
    where: ClientDetailsWhereUniqueInput
    data: XOR<ClientDetailsUpdateWithoutCountryInput, ClientDetailsUncheckedUpdateWithoutCountryInput>
  }

  export type ClientDetailsUpdateManyWithWhereWithoutCountryInput = {
    where: ClientDetailsScalarWhereInput
    data: XOR<ClientDetailsUpdateManyMutationInput, ClientDetailsUncheckedUpdateManyWithoutCountryInput>
  }

  export type SuperUserCreateWithoutSubordinatesInput = {
    superUserId?: bigint | number
    username: string
    email: string
    password: string
    phonenumber: string
    status: boolean
    clientId?: bigint | number | null
    roleId?: bigint | number | null
    createddate?: Date | string
    updateddate?: Date | string | null
    IsAdmin: boolean
    person_name?: string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    ReportsTo?: SuperUserCreateNestedOneWithoutSubordinatesInput
  }

  export type SuperUserUncheckedCreateWithoutSubordinatesInput = {
    superUserId?: bigint | number
    username: string
    email: string
    password: string
    phonenumber: string
    status: boolean
    clientId?: bigint | number | null
    roleId?: bigint | number | null
    createddate?: Date | string
    updateddate?: Date | string | null
    IsAdmin: boolean
    reportsToId?: bigint | number | null
    person_name?: string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
  }

  export type SuperUserCreateOrConnectWithoutSubordinatesInput = {
    where: SuperUserWhereUniqueInput
    create: XOR<SuperUserCreateWithoutSubordinatesInput, SuperUserUncheckedCreateWithoutSubordinatesInput>
  }

  export type SuperUserCreateWithoutReportsToInput = {
    superUserId?: bigint | number
    username: string
    email: string
    password: string
    phonenumber: string
    status: boolean
    clientId?: bigint | number | null
    roleId?: bigint | number | null
    createddate?: Date | string
    updateddate?: Date | string | null
    IsAdmin: boolean
    person_name?: string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    Subordinates?: SuperUserCreateNestedManyWithoutReportsToInput
  }

  export type SuperUserUncheckedCreateWithoutReportsToInput = {
    superUserId?: bigint | number
    username: string
    email: string
    password: string
    phonenumber: string
    status: boolean
    clientId?: bigint | number | null
    roleId?: bigint | number | null
    createddate?: Date | string
    updateddate?: Date | string | null
    IsAdmin: boolean
    person_name?: string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    Subordinates?: SuperUserUncheckedCreateNestedManyWithoutReportsToInput
  }

  export type SuperUserCreateOrConnectWithoutReportsToInput = {
    where: SuperUserWhereUniqueInput
    create: XOR<SuperUserCreateWithoutReportsToInput, SuperUserUncheckedCreateWithoutReportsToInput>
  }

  export type SuperUserCreateManyReportsToInputEnvelope = {
    data: SuperUserCreateManyReportsToInput | SuperUserCreateManyReportsToInput[]
    skipDuplicates?: boolean
  }

  export type SuperUserUpsertWithoutSubordinatesInput = {
    update: XOR<SuperUserUpdateWithoutSubordinatesInput, SuperUserUncheckedUpdateWithoutSubordinatesInput>
    create: XOR<SuperUserCreateWithoutSubordinatesInput, SuperUserUncheckedCreateWithoutSubordinatesInput>
    where?: SuperUserWhereInput
  }

  export type SuperUserUpdateToOneWithWhereWithoutSubordinatesInput = {
    where?: SuperUserWhereInput
    data: XOR<SuperUserUpdateWithoutSubordinatesInput, SuperUserUncheckedUpdateWithoutSubordinatesInput>
  }

  export type SuperUserUpdateWithoutSubordinatesInput = {
    superUserId?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phonenumber?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    clientId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    roleId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createddate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsAdmin?: BoolFieldUpdateOperationsInput | boolean
    person_name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ReportsTo?: SuperUserUpdateOneWithoutSubordinatesNestedInput
  }

  export type SuperUserUncheckedUpdateWithoutSubordinatesInput = {
    superUserId?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phonenumber?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    clientId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    roleId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createddate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsAdmin?: BoolFieldUpdateOperationsInput | boolean
    reportsToId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    person_name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SuperUserUpsertWithWhereUniqueWithoutReportsToInput = {
    where: SuperUserWhereUniqueInput
    update: XOR<SuperUserUpdateWithoutReportsToInput, SuperUserUncheckedUpdateWithoutReportsToInput>
    create: XOR<SuperUserCreateWithoutReportsToInput, SuperUserUncheckedCreateWithoutReportsToInput>
  }

  export type SuperUserUpdateWithWhereUniqueWithoutReportsToInput = {
    where: SuperUserWhereUniqueInput
    data: XOR<SuperUserUpdateWithoutReportsToInput, SuperUserUncheckedUpdateWithoutReportsToInput>
  }

  export type SuperUserUpdateManyWithWhereWithoutReportsToInput = {
    where: SuperUserScalarWhereInput
    data: XOR<SuperUserUpdateManyMutationInput, SuperUserUncheckedUpdateManyWithoutReportsToInput>
  }

  export type SuperUserScalarWhereInput = {
    AND?: SuperUserScalarWhereInput | SuperUserScalarWhereInput[]
    OR?: SuperUserScalarWhereInput[]
    NOT?: SuperUserScalarWhereInput | SuperUserScalarWhereInput[]
    superUserId?: BigIntFilter<"SuperUser"> | bigint | number
    username?: StringFilter<"SuperUser"> | string
    email?: StringFilter<"SuperUser"> | string
    password?: StringFilter<"SuperUser"> | string
    phonenumber?: StringFilter<"SuperUser"> | string
    status?: BoolFilter<"SuperUser"> | boolean
    clientId?: BigIntNullableFilter<"SuperUser"> | bigint | number | null
    roleId?: BigIntNullableFilter<"SuperUser"> | bigint | number | null
    createddate?: DateTimeFilter<"SuperUser"> | Date | string
    updateddate?: DateTimeNullableFilter<"SuperUser"> | Date | string | null
    IsAdmin?: BoolFilter<"SuperUser"> | boolean
    reportsToId?: BigIntNullableFilter<"SuperUser"> | bigint | number | null
    person_name?: StringNullableFilter<"SuperUser"> | string | null
    passwordResetToken?: StringNullableFilter<"SuperUser"> | string | null
    passwordResetExpires?: DateTimeNullableFilter<"SuperUser"> | Date | string | null
  }

  export type ClientDetailsCreateManyClientInfoInput = {
    ClientDetailsID?: bigint | number
    email: string
    contact_number: string
    address?: string | null
    state_name?: string | null
    state_isoCode?: string | null
    brand?: string | null
    country_name?: string | null
    country_isoCode?: string | null
    country_phonecode?: string | null
    currency?: string | null
    agreement_date?: Date | string | null
    renewal_date?: Date | string | null
    address_proof?: string | null
    tax_proof?: string | null
    logo_exists?: boolean | null
    file_name?: string | null
    file_extension?: string | null
    created_at: Date | string
    updated_at?: Date | string
  }

  export type UserCreateManyClientInfoInput = {
    UserID?: bigint | number
    username: string
    email: string
    password: string
    phonenumber: string
    status: boolean
    roleId: bigint | number
    createddate?: Date | string
    updateddate?: Date | string | null
    IsAdmin: boolean
    reportsTo?: bigint | number | null
    person_name?: string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
  }

  export type RoleCreateManyClientInfoInput = {
    RoleID?: bigint | number
    rolename: string
    createdBy?: bigint | number | null
    createddate?: Date | string | null
    updateddate?: Date | string | null
  }

  export type ClientInfoLogCreateManyClientInput = {
    ClientInfoLogId?: bigint | number
    renewalDate?: Date | string | null
    createdAt?: Date | string | null
    createdBy?: bigint | number | null
  }

  export type ClientDetailsUpdateWithoutClientInfoInput = {
    ClientDetailsID?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    contact_number?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    state_name?: NullableStringFieldUpdateOperationsInput | string | null
    state_isoCode?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    country_name?: NullableStringFieldUpdateOperationsInput | string | null
    country_phonecode?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    agreement_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    renewal_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address_proof?: NullableStringFieldUpdateOperationsInput | string | null
    tax_proof?: NullableStringFieldUpdateOperationsInput | string | null
    logo_exists?: NullableBoolFieldUpdateOperationsInput | boolean | null
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    file_extension?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: CountryUpdateOneWithoutClientDetailsNestedInput
  }

  export type ClientDetailsUncheckedUpdateWithoutClientInfoInput = {
    ClientDetailsID?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    contact_number?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    state_name?: NullableStringFieldUpdateOperationsInput | string | null
    state_isoCode?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    country_name?: NullableStringFieldUpdateOperationsInput | string | null
    country_isoCode?: NullableStringFieldUpdateOperationsInput | string | null
    country_phonecode?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    agreement_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    renewal_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address_proof?: NullableStringFieldUpdateOperationsInput | string | null
    tax_proof?: NullableStringFieldUpdateOperationsInput | string | null
    logo_exists?: NullableBoolFieldUpdateOperationsInput | boolean | null
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    file_extension?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientDetailsUncheckedUpdateManyWithoutClientInfoInput = {
    ClientDetailsID?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    contact_number?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    state_name?: NullableStringFieldUpdateOperationsInput | string | null
    state_isoCode?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    country_name?: NullableStringFieldUpdateOperationsInput | string | null
    country_isoCode?: NullableStringFieldUpdateOperationsInput | string | null
    country_phonecode?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    agreement_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    renewal_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address_proof?: NullableStringFieldUpdateOperationsInput | string | null
    tax_proof?: NullableStringFieldUpdateOperationsInput | string | null
    logo_exists?: NullableBoolFieldUpdateOperationsInput | boolean | null
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    file_extension?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutClientInfoInput = {
    UserID?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phonenumber?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createddate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsAdmin?: BoolFieldUpdateOperationsInput | boolean
    person_name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    ReportsToUser?: UserUpdateOneWithoutSubordinatesNestedInput
    Subordinates?: UserUpdateManyWithoutReportsToUserNestedInput
    roleuser?: RoleUpdateManyWithoutCreatedByUserNestedInput
    ClientInfoLog?: ClientInfoLogUpdateManyWithoutCreatedUserNestedInput
  }

  export type UserUncheckedUpdateWithoutClientInfoInput = {
    UserID?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phonenumber?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    roleId?: BigIntFieldUpdateOperationsInput | bigint | number
    createddate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsAdmin?: BoolFieldUpdateOperationsInput | boolean
    reportsTo?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    person_name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Subordinates?: UserUncheckedUpdateManyWithoutReportsToUserNestedInput
    roleuser?: RoleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    ClientInfoLog?: ClientInfoLogUncheckedUpdateManyWithoutCreatedUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutClientInfoInput = {
    UserID?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phonenumber?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    roleId?: BigIntFieldUpdateOperationsInput | bigint | number
    createddate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsAdmin?: BoolFieldUpdateOperationsInput | boolean
    reportsTo?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    person_name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoleUpdateWithoutClientInfoInput = {
    RoleID?: BigIntFieldUpdateOperationsInput | bigint | number
    rolename?: StringFieldUpdateOperationsInput | string
    createddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedByUser?: UserUpdateOneWithoutRoleuserNestedInput
    Users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutClientInfoInput = {
    RoleID?: BigIntFieldUpdateOperationsInput | bigint | number
    rolename?: StringFieldUpdateOperationsInput | string
    createdBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateManyWithoutClientInfoInput = {
    RoleID?: BigIntFieldUpdateOperationsInput | bigint | number
    rolename?: StringFieldUpdateOperationsInput | string
    createdBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClientInfoLogUpdateWithoutClientInput = {
    ClientInfoLogId?: BigIntFieldUpdateOperationsInput | bigint | number
    renewalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdUser?: UserUpdateOneWithoutClientInfoLogNestedInput
  }

  export type ClientInfoLogUncheckedUpdateWithoutClientInput = {
    ClientInfoLogId?: BigIntFieldUpdateOperationsInput | bigint | number
    renewalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type ClientInfoLogUncheckedUpdateManyWithoutClientInput = {
    ClientInfoLogId?: BigIntFieldUpdateOperationsInput | bigint | number
    renewalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type UserCreateManyReportsToUserInput = {
    UserID?: bigint | number
    username: string
    email: string
    password: string
    phonenumber: string
    status: boolean
    clientId: bigint | number
    roleId: bigint | number
    createddate?: Date | string
    updateddate?: Date | string | null
    IsAdmin: boolean
    person_name?: string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
  }

  export type RoleCreateManyCreatedByUserInput = {
    RoleID?: bigint | number
    rolename: string
    clientId?: bigint | number | null
    createddate?: Date | string | null
    updateddate?: Date | string | null
  }

  export type ClientInfoLogCreateManyCreatedUserInput = {
    ClientInfoLogId?: bigint | number
    clientId?: bigint | number | null
    renewalDate?: Date | string | null
    createdAt?: Date | string | null
  }

  export type UserUpdateWithoutReportsToUserInput = {
    UserID?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phonenumber?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createddate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsAdmin?: BoolFieldUpdateOperationsInput | boolean
    person_name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ClientInfo?: ClientInfoUpdateOneRequiredWithoutUserNestedInput
    Role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    Subordinates?: UserUpdateManyWithoutReportsToUserNestedInput
    roleuser?: RoleUpdateManyWithoutCreatedByUserNestedInput
    ClientInfoLog?: ClientInfoLogUpdateManyWithoutCreatedUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReportsToUserInput = {
    UserID?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phonenumber?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    clientId?: BigIntFieldUpdateOperationsInput | bigint | number
    roleId?: BigIntFieldUpdateOperationsInput | bigint | number
    createddate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsAdmin?: BoolFieldUpdateOperationsInput | boolean
    person_name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Subordinates?: UserUncheckedUpdateManyWithoutReportsToUserNestedInput
    roleuser?: RoleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    ClientInfoLog?: ClientInfoLogUncheckedUpdateManyWithoutCreatedUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutReportsToUserInput = {
    UserID?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phonenumber?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    clientId?: BigIntFieldUpdateOperationsInput | bigint | number
    roleId?: BigIntFieldUpdateOperationsInput | bigint | number
    createddate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsAdmin?: BoolFieldUpdateOperationsInput | boolean
    person_name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoleUpdateWithoutCreatedByUserInput = {
    RoleID?: BigIntFieldUpdateOperationsInput | bigint | number
    rolename?: StringFieldUpdateOperationsInput | string
    createddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ClientInfo?: ClientInfoUpdateOneWithoutRoleNestedInput
    Users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutCreatedByUserInput = {
    RoleID?: BigIntFieldUpdateOperationsInput | bigint | number
    rolename?: StringFieldUpdateOperationsInput | string
    clientId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateManyWithoutCreatedByUserInput = {
    RoleID?: BigIntFieldUpdateOperationsInput | bigint | number
    rolename?: StringFieldUpdateOperationsInput | string
    clientId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClientInfoLogUpdateWithoutCreatedUserInput = {
    ClientInfoLogId?: BigIntFieldUpdateOperationsInput | bigint | number
    renewalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client?: ClientInfoUpdateOneWithoutClientInfoLogNestedInput
  }

  export type ClientInfoLogUncheckedUpdateWithoutCreatedUserInput = {
    ClientInfoLogId?: BigIntFieldUpdateOperationsInput | bigint | number
    clientId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    renewalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClientInfoLogUncheckedUpdateManyWithoutCreatedUserInput = {
    ClientInfoLogId?: BigIntFieldUpdateOperationsInput | bigint | number
    clientId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    renewalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateManyRoleInput = {
    UserID?: bigint | number
    username: string
    email: string
    password: string
    phonenumber: string
    status: boolean
    clientId: bigint | number
    createddate?: Date | string
    updateddate?: Date | string | null
    IsAdmin: boolean
    reportsTo?: bigint | number | null
    person_name?: string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
  }

  export type UserUpdateWithoutRoleInput = {
    UserID?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phonenumber?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createddate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsAdmin?: BoolFieldUpdateOperationsInput | boolean
    person_name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ClientInfo?: ClientInfoUpdateOneRequiredWithoutUserNestedInput
    ReportsToUser?: UserUpdateOneWithoutSubordinatesNestedInput
    Subordinates?: UserUpdateManyWithoutReportsToUserNestedInput
    roleuser?: RoleUpdateManyWithoutCreatedByUserNestedInput
    ClientInfoLog?: ClientInfoLogUpdateManyWithoutCreatedUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    UserID?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phonenumber?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    clientId?: BigIntFieldUpdateOperationsInput | bigint | number
    createddate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsAdmin?: BoolFieldUpdateOperationsInput | boolean
    reportsTo?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    person_name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Subordinates?: UserUncheckedUpdateManyWithoutReportsToUserNestedInput
    roleuser?: RoleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    ClientInfoLog?: ClientInfoLogUncheckedUpdateManyWithoutCreatedUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    UserID?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phonenumber?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    clientId?: BigIntFieldUpdateOperationsInput | bigint | number
    createddate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsAdmin?: BoolFieldUpdateOperationsInput | boolean
    reportsTo?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    person_name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MenuItemCreateManyMenuInput = {
    MenuItemID?: bigint | number
    display_name: string
    action_url: string
    sort: number
    created_at?: Date | string
    icon_code?: string | null
    status?: number
  }

  export type MenuItemUpdateWithoutMenuInput = {
    MenuItemID?: BigIntFieldUpdateOperationsInput | bigint | number
    display_name?: StringFieldUpdateOperationsInput | string
    action_url?: StringFieldUpdateOperationsInput | string
    sort?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    icon_code?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
  }

  export type MenuItemUncheckedUpdateWithoutMenuInput = {
    MenuItemID?: BigIntFieldUpdateOperationsInput | bigint | number
    display_name?: StringFieldUpdateOperationsInput | string
    action_url?: StringFieldUpdateOperationsInput | string
    sort?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    icon_code?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
  }

  export type MenuItemUncheckedUpdateManyWithoutMenuInput = {
    MenuItemID?: BigIntFieldUpdateOperationsInput | bigint | number
    display_name?: StringFieldUpdateOperationsInput | string
    action_url?: StringFieldUpdateOperationsInput | string
    sort?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    icon_code?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
  }

  export type ClientDetailsCreateManyCountryInput = {
    ClientDetailsID?: bigint | number
    email: string
    contact_number: string
    address?: string | null
    state_name?: string | null
    state_isoCode?: string | null
    brand?: string | null
    country_name?: string | null
    country_phonecode?: string | null
    currency?: string | null
    agreement_date?: Date | string | null
    renewal_date?: Date | string | null
    address_proof?: string | null
    tax_proof?: string | null
    logo_exists?: boolean | null
    file_name?: string | null
    file_extension?: string | null
    created_at: Date | string
    updated_at?: Date | string
    ClientInfoID: bigint | number
  }

  export type ClientDetailsUpdateWithoutCountryInput = {
    ClientDetailsID?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    contact_number?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    state_name?: NullableStringFieldUpdateOperationsInput | string | null
    state_isoCode?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    country_name?: NullableStringFieldUpdateOperationsInput | string | null
    country_phonecode?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    agreement_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    renewal_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address_proof?: NullableStringFieldUpdateOperationsInput | string | null
    tax_proof?: NullableStringFieldUpdateOperationsInput | string | null
    logo_exists?: NullableBoolFieldUpdateOperationsInput | boolean | null
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    file_extension?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ClientInfo?: ClientInfoUpdateOneRequiredWithoutClientDetailsNestedInput
  }

  export type ClientDetailsUncheckedUpdateWithoutCountryInput = {
    ClientDetailsID?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    contact_number?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    state_name?: NullableStringFieldUpdateOperationsInput | string | null
    state_isoCode?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    country_name?: NullableStringFieldUpdateOperationsInput | string | null
    country_phonecode?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    agreement_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    renewal_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address_proof?: NullableStringFieldUpdateOperationsInput | string | null
    tax_proof?: NullableStringFieldUpdateOperationsInput | string | null
    logo_exists?: NullableBoolFieldUpdateOperationsInput | boolean | null
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    file_extension?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ClientInfoID?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ClientDetailsUncheckedUpdateManyWithoutCountryInput = {
    ClientDetailsID?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    contact_number?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    state_name?: NullableStringFieldUpdateOperationsInput | string | null
    state_isoCode?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    country_name?: NullableStringFieldUpdateOperationsInput | string | null
    country_phonecode?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    agreement_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    renewal_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address_proof?: NullableStringFieldUpdateOperationsInput | string | null
    tax_proof?: NullableStringFieldUpdateOperationsInput | string | null
    logo_exists?: NullableBoolFieldUpdateOperationsInput | boolean | null
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    file_extension?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ClientInfoID?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type SuperUserCreateManyReportsToInput = {
    superUserId?: bigint | number
    username: string
    email: string
    password: string
    phonenumber: string
    status: boolean
    clientId?: bigint | number | null
    roleId?: bigint | number | null
    createddate?: Date | string
    updateddate?: Date | string | null
    IsAdmin: boolean
    person_name?: string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
  }

  export type SuperUserUpdateWithoutReportsToInput = {
    superUserId?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phonenumber?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    clientId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    roleId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createddate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsAdmin?: BoolFieldUpdateOperationsInput | boolean
    person_name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Subordinates?: SuperUserUpdateManyWithoutReportsToNestedInput
  }

  export type SuperUserUncheckedUpdateWithoutReportsToInput = {
    superUserId?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phonenumber?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    clientId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    roleId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createddate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsAdmin?: BoolFieldUpdateOperationsInput | boolean
    person_name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Subordinates?: SuperUserUncheckedUpdateManyWithoutReportsToNestedInput
  }

  export type SuperUserUncheckedUpdateManyWithoutReportsToInput = {
    superUserId?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phonenumber?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    clientId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    roleId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createddate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsAdmin?: BoolFieldUpdateOperationsInput | boolean
    person_name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}