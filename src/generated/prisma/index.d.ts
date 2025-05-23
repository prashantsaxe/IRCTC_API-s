
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Train
 * 
 */
export type Train = $Result.DefaultSelection<Prisma.$TrainPayload>
/**
 * Model Station
 * 
 */
export type Station = $Result.DefaultSelection<Prisma.$StationPayload>
/**
 * Model TrainRoute
 * 
 */
export type TrainRoute = $Result.DefaultSelection<Prisma.$TrainRoutePayload>
/**
 * Model Seat
 * 
 */
export type Seat = $Result.DefaultSelection<Prisma.$SeatPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.train`: Exposes CRUD operations for the **Train** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trains
    * const trains = await prisma.train.findMany()
    * ```
    */
  get train(): Prisma.TrainDelegate<ExtArgs>;

  /**
   * `prisma.station`: Exposes CRUD operations for the **Station** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stations
    * const stations = await prisma.station.findMany()
    * ```
    */
  get station(): Prisma.StationDelegate<ExtArgs>;

  /**
   * `prisma.trainRoute`: Exposes CRUD operations for the **TrainRoute** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrainRoutes
    * const trainRoutes = await prisma.trainRoute.findMany()
    * ```
    */
  get trainRoute(): Prisma.TrainRouteDelegate<ExtArgs>;

  /**
   * `prisma.seat`: Exposes CRUD operations for the **Seat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Seats
    * const seats = await prisma.seat.findMany()
    * ```
    */
  get seat(): Prisma.SeatDelegate<ExtArgs>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    User: 'User',
    Train: 'Train',
    Station: 'Station',
    TrainRoute: 'TrainRoute',
    Seat: 'Seat',
    Booking: 'Booking'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "train" | "station" | "trainRoute" | "seat" | "booking"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      Train: {
        payload: Prisma.$TrainPayload<ExtArgs>
        fields: Prisma.TrainFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrainFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrainFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainPayload>
          }
          findFirst: {
            args: Prisma.TrainFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrainFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainPayload>
          }
          findMany: {
            args: Prisma.TrainFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainPayload>[]
          }
          create: {
            args: Prisma.TrainCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainPayload>
          }
          createMany: {
            args: Prisma.TrainCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrainCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainPayload>[]
          }
          delete: {
            args: Prisma.TrainDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainPayload>
          }
          update: {
            args: Prisma.TrainUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainPayload>
          }
          deleteMany: {
            args: Prisma.TrainDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrainUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TrainUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainPayload>
          }
          aggregate: {
            args: Prisma.TrainAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrain>
          }
          groupBy: {
            args: Prisma.TrainGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrainGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrainCountArgs<ExtArgs>
            result: $Utils.Optional<TrainCountAggregateOutputType> | number
          }
        }
      }
      Station: {
        payload: Prisma.$StationPayload<ExtArgs>
        fields: Prisma.StationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          findFirst: {
            args: Prisma.StationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          findMany: {
            args: Prisma.StationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload>[]
          }
          create: {
            args: Prisma.StationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          createMany: {
            args: Prisma.StationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload>[]
          }
          delete: {
            args: Prisma.StationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          update: {
            args: Prisma.StationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          deleteMany: {
            args: Prisma.StationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          aggregate: {
            args: Prisma.StationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStation>
          }
          groupBy: {
            args: Prisma.StationGroupByArgs<ExtArgs>
            result: $Utils.Optional<StationGroupByOutputType>[]
          }
          count: {
            args: Prisma.StationCountArgs<ExtArgs>
            result: $Utils.Optional<StationCountAggregateOutputType> | number
          }
        }
      }
      TrainRoute: {
        payload: Prisma.$TrainRoutePayload<ExtArgs>
        fields: Prisma.TrainRouteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrainRouteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainRoutePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrainRouteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainRoutePayload>
          }
          findFirst: {
            args: Prisma.TrainRouteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainRoutePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrainRouteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainRoutePayload>
          }
          findMany: {
            args: Prisma.TrainRouteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainRoutePayload>[]
          }
          create: {
            args: Prisma.TrainRouteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainRoutePayload>
          }
          createMany: {
            args: Prisma.TrainRouteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrainRouteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainRoutePayload>[]
          }
          delete: {
            args: Prisma.TrainRouteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainRoutePayload>
          }
          update: {
            args: Prisma.TrainRouteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainRoutePayload>
          }
          deleteMany: {
            args: Prisma.TrainRouteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrainRouteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TrainRouteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainRoutePayload>
          }
          aggregate: {
            args: Prisma.TrainRouteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrainRoute>
          }
          groupBy: {
            args: Prisma.TrainRouteGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrainRouteGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrainRouteCountArgs<ExtArgs>
            result: $Utils.Optional<TrainRouteCountAggregateOutputType> | number
          }
        }
      }
      Seat: {
        payload: Prisma.$SeatPayload<ExtArgs>
        fields: Prisma.SeatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          findFirst: {
            args: Prisma.SeatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          findMany: {
            args: Prisma.SeatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>[]
          }
          create: {
            args: Prisma.SeatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          createMany: {
            args: Prisma.SeatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>[]
          }
          delete: {
            args: Prisma.SeatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          update: {
            args: Prisma.SeatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          deleteMany: {
            args: Prisma.SeatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SeatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          aggregate: {
            args: Prisma.SeatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeat>
          }
          groupBy: {
            args: Prisma.SeatGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeatGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeatCountArgs<ExtArgs>
            result: $Utils.Optional<SeatCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    bookings: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | UserCountOutputTypeCountBookingsArgs
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
  export type UserCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type TrainCountOutputType
   */

  export type TrainCountOutputType = {
    bookings: number
    trainRoutes: number
    seats: number
  }

  export type TrainCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | TrainCountOutputTypeCountBookingsArgs
    trainRoutes?: boolean | TrainCountOutputTypeCountTrainRoutesArgs
    seats?: boolean | TrainCountOutputTypeCountSeatsArgs
  }

  // Custom InputTypes
  /**
   * TrainCountOutputType without action
   */
  export type TrainCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainCountOutputType
     */
    select?: TrainCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TrainCountOutputType without action
   */
  export type TrainCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * TrainCountOutputType without action
   */
  export type TrainCountOutputTypeCountTrainRoutesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainRouteWhereInput
  }

  /**
   * TrainCountOutputType without action
   */
  export type TrainCountOutputTypeCountSeatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeatWhereInput
  }


  /**
   * Count Type StationCountOutputType
   */

  export type StationCountOutputType = {
    sourceRoutes: number
    destRoutes: number
  }

  export type StationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sourceRoutes?: boolean | StationCountOutputTypeCountSourceRoutesArgs
    destRoutes?: boolean | StationCountOutputTypeCountDestRoutesArgs
  }

  // Custom InputTypes
  /**
   * StationCountOutputType without action
   */
  export type StationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StationCountOutputType
     */
    select?: StationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StationCountOutputType without action
   */
  export type StationCountOutputTypeCountSourceRoutesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainRouteWhereInput
  }

  /**
   * StationCountOutputType without action
   */
  export type StationCountOutputTypeCountDestRoutesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainRouteWhereInput
  }


  /**
   * Count Type SeatCountOutputType
   */

  export type SeatCountOutputType = {
    bookings: number
  }

  export type SeatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | SeatCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * SeatCountOutputType without action
   */
  export type SeatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatCountOutputType
     */
    select?: SeatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SeatCountOutputType without action
   */
  export type SeatCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Models
   */

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
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    email: string | null
    role: $Enums.UserRole | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    email: string | null
    role: $Enums.UserRole | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    email: number
    role: number
    token: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    role?: true
    token?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    role?: true
    token?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    role?: true
    token?: true
    createdAt?: true
    updatedAt?: true
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
    id: number
    username: string
    password: string
    email: string
    role: $Enums.UserRole
    token: string | null
    createdAt: Date
    updatedAt: Date
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
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    role?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    role?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    role?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      email: string
      role: $Enums.UserRole
      token: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends User$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, User$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly token: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
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
  }

  /**
   * User.bookings
   */
  export type User$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Train
   */

  export type AggregateTrain = {
    _count: TrainCountAggregateOutputType | null
    _avg: TrainAvgAggregateOutputType | null
    _sum: TrainSumAggregateOutputType | null
    _min: TrainMinAggregateOutputType | null
    _max: TrainMaxAggregateOutputType | null
  }

  export type TrainAvgAggregateOutputType = {
    id: number | null
    totalSeats: number | null
  }

  export type TrainSumAggregateOutputType = {
    id: number | null
    totalSeats: number | null
  }

  export type TrainMinAggregateOutputType = {
    id: number | null
    trainNumber: string | null
    name: string | null
    source: string | null
    destination: string | null
    schedule: Date | null
    totalSeats: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TrainMaxAggregateOutputType = {
    id: number | null
    trainNumber: string | null
    name: string | null
    source: string | null
    destination: string | null
    schedule: Date | null
    totalSeats: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TrainCountAggregateOutputType = {
    id: number
    trainNumber: number
    name: number
    source: number
    destination: number
    schedule: number
    totalSeats: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TrainAvgAggregateInputType = {
    id?: true
    totalSeats?: true
  }

  export type TrainSumAggregateInputType = {
    id?: true
    totalSeats?: true
  }

  export type TrainMinAggregateInputType = {
    id?: true
    trainNumber?: true
    name?: true
    source?: true
    destination?: true
    schedule?: true
    totalSeats?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TrainMaxAggregateInputType = {
    id?: true
    trainNumber?: true
    name?: true
    source?: true
    destination?: true
    schedule?: true
    totalSeats?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TrainCountAggregateInputType = {
    id?: true
    trainNumber?: true
    name?: true
    source?: true
    destination?: true
    schedule?: true
    totalSeats?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TrainAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Train to aggregate.
     */
    where?: TrainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trains to fetch.
     */
    orderBy?: TrainOrderByWithRelationInput | TrainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trains
    **/
    _count?: true | TrainCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrainAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrainSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrainMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrainMaxAggregateInputType
  }

  export type GetTrainAggregateType<T extends TrainAggregateArgs> = {
        [P in keyof T & keyof AggregateTrain]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrain[P]>
      : GetScalarType<T[P], AggregateTrain[P]>
  }




  export type TrainGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainWhereInput
    orderBy?: TrainOrderByWithAggregationInput | TrainOrderByWithAggregationInput[]
    by: TrainScalarFieldEnum[] | TrainScalarFieldEnum
    having?: TrainScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrainCountAggregateInputType | true
    _avg?: TrainAvgAggregateInputType
    _sum?: TrainSumAggregateInputType
    _min?: TrainMinAggregateInputType
    _max?: TrainMaxAggregateInputType
  }

  export type TrainGroupByOutputType = {
    id: number
    trainNumber: string
    name: string
    source: string
    destination: string
    schedule: Date
    totalSeats: number
    createdAt: Date
    updatedAt: Date
    _count: TrainCountAggregateOutputType | null
    _avg: TrainAvgAggregateOutputType | null
    _sum: TrainSumAggregateOutputType | null
    _min: TrainMinAggregateOutputType | null
    _max: TrainMaxAggregateOutputType | null
  }

  type GetTrainGroupByPayload<T extends TrainGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrainGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrainGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrainGroupByOutputType[P]>
            : GetScalarType<T[P], TrainGroupByOutputType[P]>
        }
      >
    >


  export type TrainSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trainNumber?: boolean
    name?: boolean
    source?: boolean
    destination?: boolean
    schedule?: boolean
    totalSeats?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bookings?: boolean | Train$bookingsArgs<ExtArgs>
    trainRoutes?: boolean | Train$trainRoutesArgs<ExtArgs>
    seats?: boolean | Train$seatsArgs<ExtArgs>
    _count?: boolean | TrainCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["train"]>

  export type TrainSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trainNumber?: boolean
    name?: boolean
    source?: boolean
    destination?: boolean
    schedule?: boolean
    totalSeats?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["train"]>

  export type TrainSelectScalar = {
    id?: boolean
    trainNumber?: boolean
    name?: boolean
    source?: boolean
    destination?: boolean
    schedule?: boolean
    totalSeats?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TrainInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | Train$bookingsArgs<ExtArgs>
    trainRoutes?: boolean | Train$trainRoutesArgs<ExtArgs>
    seats?: boolean | Train$seatsArgs<ExtArgs>
    _count?: boolean | TrainCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TrainIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TrainPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Train"
    objects: {
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      trainRoutes: Prisma.$TrainRoutePayload<ExtArgs>[]
      seats: Prisma.$SeatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      trainNumber: string
      name: string
      source: string
      destination: string
      schedule: Date
      totalSeats: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["train"]>
    composites: {}
  }

  type TrainGetPayload<S extends boolean | null | undefined | TrainDefaultArgs> = $Result.GetResult<Prisma.$TrainPayload, S>

  type TrainCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TrainFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TrainCountAggregateInputType | true
    }

  export interface TrainDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Train'], meta: { name: 'Train' } }
    /**
     * Find zero or one Train that matches the filter.
     * @param {TrainFindUniqueArgs} args - Arguments to find a Train
     * @example
     * // Get one Train
     * const train = await prisma.train.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrainFindUniqueArgs>(args: SelectSubset<T, TrainFindUniqueArgs<ExtArgs>>): Prisma__TrainClient<$Result.GetResult<Prisma.$TrainPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Train that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TrainFindUniqueOrThrowArgs} args - Arguments to find a Train
     * @example
     * // Get one Train
     * const train = await prisma.train.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrainFindUniqueOrThrowArgs>(args: SelectSubset<T, TrainFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrainClient<$Result.GetResult<Prisma.$TrainPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Train that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainFindFirstArgs} args - Arguments to find a Train
     * @example
     * // Get one Train
     * const train = await prisma.train.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrainFindFirstArgs>(args?: SelectSubset<T, TrainFindFirstArgs<ExtArgs>>): Prisma__TrainClient<$Result.GetResult<Prisma.$TrainPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Train that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainFindFirstOrThrowArgs} args - Arguments to find a Train
     * @example
     * // Get one Train
     * const train = await prisma.train.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrainFindFirstOrThrowArgs>(args?: SelectSubset<T, TrainFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrainClient<$Result.GetResult<Prisma.$TrainPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Trains that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trains
     * const trains = await prisma.train.findMany()
     * 
     * // Get first 10 Trains
     * const trains = await prisma.train.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trainWithIdOnly = await prisma.train.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrainFindManyArgs>(args?: SelectSubset<T, TrainFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Train.
     * @param {TrainCreateArgs} args - Arguments to create a Train.
     * @example
     * // Create one Train
     * const Train = await prisma.train.create({
     *   data: {
     *     // ... data to create a Train
     *   }
     * })
     * 
     */
    create<T extends TrainCreateArgs>(args: SelectSubset<T, TrainCreateArgs<ExtArgs>>): Prisma__TrainClient<$Result.GetResult<Prisma.$TrainPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Trains.
     * @param {TrainCreateManyArgs} args - Arguments to create many Trains.
     * @example
     * // Create many Trains
     * const train = await prisma.train.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrainCreateManyArgs>(args?: SelectSubset<T, TrainCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trains and returns the data saved in the database.
     * @param {TrainCreateManyAndReturnArgs} args - Arguments to create many Trains.
     * @example
     * // Create many Trains
     * const train = await prisma.train.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trains and only return the `id`
     * const trainWithIdOnly = await prisma.train.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrainCreateManyAndReturnArgs>(args?: SelectSubset<T, TrainCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Train.
     * @param {TrainDeleteArgs} args - Arguments to delete one Train.
     * @example
     * // Delete one Train
     * const Train = await prisma.train.delete({
     *   where: {
     *     // ... filter to delete one Train
     *   }
     * })
     * 
     */
    delete<T extends TrainDeleteArgs>(args: SelectSubset<T, TrainDeleteArgs<ExtArgs>>): Prisma__TrainClient<$Result.GetResult<Prisma.$TrainPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Train.
     * @param {TrainUpdateArgs} args - Arguments to update one Train.
     * @example
     * // Update one Train
     * const train = await prisma.train.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrainUpdateArgs>(args: SelectSubset<T, TrainUpdateArgs<ExtArgs>>): Prisma__TrainClient<$Result.GetResult<Prisma.$TrainPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Trains.
     * @param {TrainDeleteManyArgs} args - Arguments to filter Trains to delete.
     * @example
     * // Delete a few Trains
     * const { count } = await prisma.train.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrainDeleteManyArgs>(args?: SelectSubset<T, TrainDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trains
     * const train = await prisma.train.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrainUpdateManyArgs>(args: SelectSubset<T, TrainUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Train.
     * @param {TrainUpsertArgs} args - Arguments to update or create a Train.
     * @example
     * // Update or create a Train
     * const train = await prisma.train.upsert({
     *   create: {
     *     // ... data to create a Train
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Train we want to update
     *   }
     * })
     */
    upsert<T extends TrainUpsertArgs>(args: SelectSubset<T, TrainUpsertArgs<ExtArgs>>): Prisma__TrainClient<$Result.GetResult<Prisma.$TrainPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Trains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainCountArgs} args - Arguments to filter Trains to count.
     * @example
     * // Count the number of Trains
     * const count = await prisma.train.count({
     *   where: {
     *     // ... the filter for the Trains we want to count
     *   }
     * })
    **/
    count<T extends TrainCountArgs>(
      args?: Subset<T, TrainCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrainCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Train.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrainAggregateArgs>(args: Subset<T, TrainAggregateArgs>): Prisma.PrismaPromise<GetTrainAggregateType<T>>

    /**
     * Group by Train.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainGroupByArgs} args - Group by arguments.
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
      T extends TrainGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrainGroupByArgs['orderBy'] }
        : { orderBy?: TrainGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TrainGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrainGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Train model
   */
  readonly fields: TrainFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Train.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrainClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends Train$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Train$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany"> | Null>
    trainRoutes<T extends Train$trainRoutesArgs<ExtArgs> = {}>(args?: Subset<T, Train$trainRoutesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainRoutePayload<ExtArgs>, T, "findMany"> | Null>
    seats<T extends Train$seatsArgs<ExtArgs> = {}>(args?: Subset<T, Train$seatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Train model
   */ 
  interface TrainFieldRefs {
    readonly id: FieldRef<"Train", 'Int'>
    readonly trainNumber: FieldRef<"Train", 'String'>
    readonly name: FieldRef<"Train", 'String'>
    readonly source: FieldRef<"Train", 'String'>
    readonly destination: FieldRef<"Train", 'String'>
    readonly schedule: FieldRef<"Train", 'DateTime'>
    readonly totalSeats: FieldRef<"Train", 'Int'>
    readonly createdAt: FieldRef<"Train", 'DateTime'>
    readonly updatedAt: FieldRef<"Train", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Train findUnique
   */
  export type TrainFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Train
     */
    select?: TrainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainInclude<ExtArgs> | null
    /**
     * Filter, which Train to fetch.
     */
    where: TrainWhereUniqueInput
  }

  /**
   * Train findUniqueOrThrow
   */
  export type TrainFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Train
     */
    select?: TrainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainInclude<ExtArgs> | null
    /**
     * Filter, which Train to fetch.
     */
    where: TrainWhereUniqueInput
  }

  /**
   * Train findFirst
   */
  export type TrainFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Train
     */
    select?: TrainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainInclude<ExtArgs> | null
    /**
     * Filter, which Train to fetch.
     */
    where?: TrainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trains to fetch.
     */
    orderBy?: TrainOrderByWithRelationInput | TrainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trains.
     */
    cursor?: TrainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trains.
     */
    distinct?: TrainScalarFieldEnum | TrainScalarFieldEnum[]
  }

  /**
   * Train findFirstOrThrow
   */
  export type TrainFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Train
     */
    select?: TrainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainInclude<ExtArgs> | null
    /**
     * Filter, which Train to fetch.
     */
    where?: TrainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trains to fetch.
     */
    orderBy?: TrainOrderByWithRelationInput | TrainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trains.
     */
    cursor?: TrainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trains.
     */
    distinct?: TrainScalarFieldEnum | TrainScalarFieldEnum[]
  }

  /**
   * Train findMany
   */
  export type TrainFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Train
     */
    select?: TrainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainInclude<ExtArgs> | null
    /**
     * Filter, which Trains to fetch.
     */
    where?: TrainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trains to fetch.
     */
    orderBy?: TrainOrderByWithRelationInput | TrainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trains.
     */
    cursor?: TrainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trains.
     */
    skip?: number
    distinct?: TrainScalarFieldEnum | TrainScalarFieldEnum[]
  }

  /**
   * Train create
   */
  export type TrainCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Train
     */
    select?: TrainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainInclude<ExtArgs> | null
    /**
     * The data needed to create a Train.
     */
    data: XOR<TrainCreateInput, TrainUncheckedCreateInput>
  }

  /**
   * Train createMany
   */
  export type TrainCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trains.
     */
    data: TrainCreateManyInput | TrainCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Train createManyAndReturn
   */
  export type TrainCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Train
     */
    select?: TrainSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Trains.
     */
    data: TrainCreateManyInput | TrainCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Train update
   */
  export type TrainUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Train
     */
    select?: TrainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainInclude<ExtArgs> | null
    /**
     * The data needed to update a Train.
     */
    data: XOR<TrainUpdateInput, TrainUncheckedUpdateInput>
    /**
     * Choose, which Train to update.
     */
    where: TrainWhereUniqueInput
  }

  /**
   * Train updateMany
   */
  export type TrainUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trains.
     */
    data: XOR<TrainUpdateManyMutationInput, TrainUncheckedUpdateManyInput>
    /**
     * Filter which Trains to update
     */
    where?: TrainWhereInput
  }

  /**
   * Train upsert
   */
  export type TrainUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Train
     */
    select?: TrainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainInclude<ExtArgs> | null
    /**
     * The filter to search for the Train to update in case it exists.
     */
    where: TrainWhereUniqueInput
    /**
     * In case the Train found by the `where` argument doesn't exist, create a new Train with this data.
     */
    create: XOR<TrainCreateInput, TrainUncheckedCreateInput>
    /**
     * In case the Train was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrainUpdateInput, TrainUncheckedUpdateInput>
  }

  /**
   * Train delete
   */
  export type TrainDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Train
     */
    select?: TrainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainInclude<ExtArgs> | null
    /**
     * Filter which Train to delete.
     */
    where: TrainWhereUniqueInput
  }

  /**
   * Train deleteMany
   */
  export type TrainDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trains to delete
     */
    where?: TrainWhereInput
  }

  /**
   * Train.bookings
   */
  export type Train$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Train.trainRoutes
   */
  export type Train$trainRoutesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainRoute
     */
    select?: TrainRouteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainRouteInclude<ExtArgs> | null
    where?: TrainRouteWhereInput
    orderBy?: TrainRouteOrderByWithRelationInput | TrainRouteOrderByWithRelationInput[]
    cursor?: TrainRouteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrainRouteScalarFieldEnum | TrainRouteScalarFieldEnum[]
  }

  /**
   * Train.seats
   */
  export type Train$seatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    where?: SeatWhereInput
    orderBy?: SeatOrderByWithRelationInput | SeatOrderByWithRelationInput[]
    cursor?: SeatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeatScalarFieldEnum | SeatScalarFieldEnum[]
  }

  /**
   * Train without action
   */
  export type TrainDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Train
     */
    select?: TrainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainInclude<ExtArgs> | null
  }


  /**
   * Model Station
   */

  export type AggregateStation = {
    _count: StationCountAggregateOutputType | null
    _avg: StationAvgAggregateOutputType | null
    _sum: StationSumAggregateOutputType | null
    _min: StationMinAggregateOutputType | null
    _max: StationMaxAggregateOutputType | null
  }

  export type StationAvgAggregateOutputType = {
    id: number | null
  }

  export type StationSumAggregateOutputType = {
    id: number | null
  }

  export type StationMinAggregateOutputType = {
    id: number | null
    name: string | null
    location: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StationMaxAggregateOutputType = {
    id: number | null
    name: string | null
    location: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StationCountAggregateOutputType = {
    id: number
    name: number
    location: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StationAvgAggregateInputType = {
    id?: true
  }

  export type StationSumAggregateInputType = {
    id?: true
  }

  export type StationMinAggregateInputType = {
    id?: true
    name?: true
    location?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StationMaxAggregateInputType = {
    id?: true
    name?: true
    location?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StationCountAggregateInputType = {
    id?: true
    name?: true
    location?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Station to aggregate.
     */
    where?: StationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stations to fetch.
     */
    orderBy?: StationOrderByWithRelationInput | StationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stations
    **/
    _count?: true | StationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StationMaxAggregateInputType
  }

  export type GetStationAggregateType<T extends StationAggregateArgs> = {
        [P in keyof T & keyof AggregateStation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStation[P]>
      : GetScalarType<T[P], AggregateStation[P]>
  }




  export type StationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StationWhereInput
    orderBy?: StationOrderByWithAggregationInput | StationOrderByWithAggregationInput[]
    by: StationScalarFieldEnum[] | StationScalarFieldEnum
    having?: StationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StationCountAggregateInputType | true
    _avg?: StationAvgAggregateInputType
    _sum?: StationSumAggregateInputType
    _min?: StationMinAggregateInputType
    _max?: StationMaxAggregateInputType
  }

  export type StationGroupByOutputType = {
    id: number
    name: string
    location: string
    createdAt: Date
    updatedAt: Date
    _count: StationCountAggregateOutputType | null
    _avg: StationAvgAggregateOutputType | null
    _sum: StationSumAggregateOutputType | null
    _min: StationMinAggregateOutputType | null
    _max: StationMaxAggregateOutputType | null
  }

  type GetStationGroupByPayload<T extends StationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StationGroupByOutputType[P]>
            : GetScalarType<T[P], StationGroupByOutputType[P]>
        }
      >
    >


  export type StationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sourceRoutes?: boolean | Station$sourceRoutesArgs<ExtArgs>
    destRoutes?: boolean | Station$destRoutesArgs<ExtArgs>
    _count?: boolean | StationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["station"]>

  export type StationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["station"]>

  export type StationSelectScalar = {
    id?: boolean
    name?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sourceRoutes?: boolean | Station$sourceRoutesArgs<ExtArgs>
    destRoutes?: boolean | Station$destRoutesArgs<ExtArgs>
    _count?: boolean | StationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Station"
    objects: {
      sourceRoutes: Prisma.$TrainRoutePayload<ExtArgs>[]
      destRoutes: Prisma.$TrainRoutePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      location: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["station"]>
    composites: {}
  }

  type StationGetPayload<S extends boolean | null | undefined | StationDefaultArgs> = $Result.GetResult<Prisma.$StationPayload, S>

  type StationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StationCountAggregateInputType | true
    }

  export interface StationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Station'], meta: { name: 'Station' } }
    /**
     * Find zero or one Station that matches the filter.
     * @param {StationFindUniqueArgs} args - Arguments to find a Station
     * @example
     * // Get one Station
     * const station = await prisma.station.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StationFindUniqueArgs>(args: SelectSubset<T, StationFindUniqueArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Station that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StationFindUniqueOrThrowArgs} args - Arguments to find a Station
     * @example
     * // Get one Station
     * const station = await prisma.station.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StationFindUniqueOrThrowArgs>(args: SelectSubset<T, StationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Station that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationFindFirstArgs} args - Arguments to find a Station
     * @example
     * // Get one Station
     * const station = await prisma.station.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StationFindFirstArgs>(args?: SelectSubset<T, StationFindFirstArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Station that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationFindFirstOrThrowArgs} args - Arguments to find a Station
     * @example
     * // Get one Station
     * const station = await prisma.station.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StationFindFirstOrThrowArgs>(args?: SelectSubset<T, StationFindFirstOrThrowArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Stations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stations
     * const stations = await prisma.station.findMany()
     * 
     * // Get first 10 Stations
     * const stations = await prisma.station.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stationWithIdOnly = await prisma.station.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StationFindManyArgs>(args?: SelectSubset<T, StationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Station.
     * @param {StationCreateArgs} args - Arguments to create a Station.
     * @example
     * // Create one Station
     * const Station = await prisma.station.create({
     *   data: {
     *     // ... data to create a Station
     *   }
     * })
     * 
     */
    create<T extends StationCreateArgs>(args: SelectSubset<T, StationCreateArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Stations.
     * @param {StationCreateManyArgs} args - Arguments to create many Stations.
     * @example
     * // Create many Stations
     * const station = await prisma.station.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StationCreateManyArgs>(args?: SelectSubset<T, StationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stations and returns the data saved in the database.
     * @param {StationCreateManyAndReturnArgs} args - Arguments to create many Stations.
     * @example
     * // Create many Stations
     * const station = await prisma.station.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stations and only return the `id`
     * const stationWithIdOnly = await prisma.station.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StationCreateManyAndReturnArgs>(args?: SelectSubset<T, StationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Station.
     * @param {StationDeleteArgs} args - Arguments to delete one Station.
     * @example
     * // Delete one Station
     * const Station = await prisma.station.delete({
     *   where: {
     *     // ... filter to delete one Station
     *   }
     * })
     * 
     */
    delete<T extends StationDeleteArgs>(args: SelectSubset<T, StationDeleteArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Station.
     * @param {StationUpdateArgs} args - Arguments to update one Station.
     * @example
     * // Update one Station
     * const station = await prisma.station.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StationUpdateArgs>(args: SelectSubset<T, StationUpdateArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Stations.
     * @param {StationDeleteManyArgs} args - Arguments to filter Stations to delete.
     * @example
     * // Delete a few Stations
     * const { count } = await prisma.station.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StationDeleteManyArgs>(args?: SelectSubset<T, StationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stations
     * const station = await prisma.station.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StationUpdateManyArgs>(args: SelectSubset<T, StationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Station.
     * @param {StationUpsertArgs} args - Arguments to update or create a Station.
     * @example
     * // Update or create a Station
     * const station = await prisma.station.upsert({
     *   create: {
     *     // ... data to create a Station
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Station we want to update
     *   }
     * })
     */
    upsert<T extends StationUpsertArgs>(args: SelectSubset<T, StationUpsertArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Stations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationCountArgs} args - Arguments to filter Stations to count.
     * @example
     * // Count the number of Stations
     * const count = await prisma.station.count({
     *   where: {
     *     // ... the filter for the Stations we want to count
     *   }
     * })
    **/
    count<T extends StationCountArgs>(
      args?: Subset<T, StationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Station.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StationAggregateArgs>(args: Subset<T, StationAggregateArgs>): Prisma.PrismaPromise<GetStationAggregateType<T>>

    /**
     * Group by Station.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationGroupByArgs} args - Group by arguments.
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
      T extends StationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StationGroupByArgs['orderBy'] }
        : { orderBy?: StationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Station model
   */
  readonly fields: StationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Station.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sourceRoutes<T extends Station$sourceRoutesArgs<ExtArgs> = {}>(args?: Subset<T, Station$sourceRoutesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainRoutePayload<ExtArgs>, T, "findMany"> | Null>
    destRoutes<T extends Station$destRoutesArgs<ExtArgs> = {}>(args?: Subset<T, Station$destRoutesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainRoutePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Station model
   */ 
  interface StationFieldRefs {
    readonly id: FieldRef<"Station", 'Int'>
    readonly name: FieldRef<"Station", 'String'>
    readonly location: FieldRef<"Station", 'String'>
    readonly createdAt: FieldRef<"Station", 'DateTime'>
    readonly updatedAt: FieldRef<"Station", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Station findUnique
   */
  export type StationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * Filter, which Station to fetch.
     */
    where: StationWhereUniqueInput
  }

  /**
   * Station findUniqueOrThrow
   */
  export type StationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * Filter, which Station to fetch.
     */
    where: StationWhereUniqueInput
  }

  /**
   * Station findFirst
   */
  export type StationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * Filter, which Station to fetch.
     */
    where?: StationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stations to fetch.
     */
    orderBy?: StationOrderByWithRelationInput | StationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stations.
     */
    cursor?: StationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stations.
     */
    distinct?: StationScalarFieldEnum | StationScalarFieldEnum[]
  }

  /**
   * Station findFirstOrThrow
   */
  export type StationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * Filter, which Station to fetch.
     */
    where?: StationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stations to fetch.
     */
    orderBy?: StationOrderByWithRelationInput | StationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stations.
     */
    cursor?: StationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stations.
     */
    distinct?: StationScalarFieldEnum | StationScalarFieldEnum[]
  }

  /**
   * Station findMany
   */
  export type StationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * Filter, which Stations to fetch.
     */
    where?: StationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stations to fetch.
     */
    orderBy?: StationOrderByWithRelationInput | StationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stations.
     */
    cursor?: StationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stations.
     */
    skip?: number
    distinct?: StationScalarFieldEnum | StationScalarFieldEnum[]
  }

  /**
   * Station create
   */
  export type StationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * The data needed to create a Station.
     */
    data: XOR<StationCreateInput, StationUncheckedCreateInput>
  }

  /**
   * Station createMany
   */
  export type StationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stations.
     */
    data: StationCreateManyInput | StationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Station createManyAndReturn
   */
  export type StationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Stations.
     */
    data: StationCreateManyInput | StationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Station update
   */
  export type StationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * The data needed to update a Station.
     */
    data: XOR<StationUpdateInput, StationUncheckedUpdateInput>
    /**
     * Choose, which Station to update.
     */
    where: StationWhereUniqueInput
  }

  /**
   * Station updateMany
   */
  export type StationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stations.
     */
    data: XOR<StationUpdateManyMutationInput, StationUncheckedUpdateManyInput>
    /**
     * Filter which Stations to update
     */
    where?: StationWhereInput
  }

  /**
   * Station upsert
   */
  export type StationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * The filter to search for the Station to update in case it exists.
     */
    where: StationWhereUniqueInput
    /**
     * In case the Station found by the `where` argument doesn't exist, create a new Station with this data.
     */
    create: XOR<StationCreateInput, StationUncheckedCreateInput>
    /**
     * In case the Station was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StationUpdateInput, StationUncheckedUpdateInput>
  }

  /**
   * Station delete
   */
  export type StationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * Filter which Station to delete.
     */
    where: StationWhereUniqueInput
  }

  /**
   * Station deleteMany
   */
  export type StationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stations to delete
     */
    where?: StationWhereInput
  }

  /**
   * Station.sourceRoutes
   */
  export type Station$sourceRoutesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainRoute
     */
    select?: TrainRouteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainRouteInclude<ExtArgs> | null
    where?: TrainRouteWhereInput
    orderBy?: TrainRouteOrderByWithRelationInput | TrainRouteOrderByWithRelationInput[]
    cursor?: TrainRouteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrainRouteScalarFieldEnum | TrainRouteScalarFieldEnum[]
  }

  /**
   * Station.destRoutes
   */
  export type Station$destRoutesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainRoute
     */
    select?: TrainRouteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainRouteInclude<ExtArgs> | null
    where?: TrainRouteWhereInput
    orderBy?: TrainRouteOrderByWithRelationInput | TrainRouteOrderByWithRelationInput[]
    cursor?: TrainRouteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrainRouteScalarFieldEnum | TrainRouteScalarFieldEnum[]
  }

  /**
   * Station without action
   */
  export type StationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
  }


  /**
   * Model TrainRoute
   */

  export type AggregateTrainRoute = {
    _count: TrainRouteCountAggregateOutputType | null
    _avg: TrainRouteAvgAggregateOutputType | null
    _sum: TrainRouteSumAggregateOutputType | null
    _min: TrainRouteMinAggregateOutputType | null
    _max: TrainRouteMaxAggregateOutputType | null
  }

  export type TrainRouteAvgAggregateOutputType = {
    id: number | null
    trainId: number | null
    sourceStationId: number | null
    destStationId: number | null
    distance: number | null
  }

  export type TrainRouteSumAggregateOutputType = {
    id: number | null
    trainId: number | null
    sourceStationId: number | null
    destStationId: number | null
    distance: number | null
  }

  export type TrainRouteMinAggregateOutputType = {
    id: number | null
    trainId: number | null
    sourceStationId: number | null
    destStationId: number | null
    departureTime: Date | null
    arrivalTime: Date | null
    distance: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TrainRouteMaxAggregateOutputType = {
    id: number | null
    trainId: number | null
    sourceStationId: number | null
    destStationId: number | null
    departureTime: Date | null
    arrivalTime: Date | null
    distance: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TrainRouteCountAggregateOutputType = {
    id: number
    trainId: number
    sourceStationId: number
    destStationId: number
    departureTime: number
    arrivalTime: number
    distance: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TrainRouteAvgAggregateInputType = {
    id?: true
    trainId?: true
    sourceStationId?: true
    destStationId?: true
    distance?: true
  }

  export type TrainRouteSumAggregateInputType = {
    id?: true
    trainId?: true
    sourceStationId?: true
    destStationId?: true
    distance?: true
  }

  export type TrainRouteMinAggregateInputType = {
    id?: true
    trainId?: true
    sourceStationId?: true
    destStationId?: true
    departureTime?: true
    arrivalTime?: true
    distance?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TrainRouteMaxAggregateInputType = {
    id?: true
    trainId?: true
    sourceStationId?: true
    destStationId?: true
    departureTime?: true
    arrivalTime?: true
    distance?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TrainRouteCountAggregateInputType = {
    id?: true
    trainId?: true
    sourceStationId?: true
    destStationId?: true
    departureTime?: true
    arrivalTime?: true
    distance?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TrainRouteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrainRoute to aggregate.
     */
    where?: TrainRouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainRoutes to fetch.
     */
    orderBy?: TrainRouteOrderByWithRelationInput | TrainRouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrainRouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainRoutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainRoutes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrainRoutes
    **/
    _count?: true | TrainRouteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrainRouteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrainRouteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrainRouteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrainRouteMaxAggregateInputType
  }

  export type GetTrainRouteAggregateType<T extends TrainRouteAggregateArgs> = {
        [P in keyof T & keyof AggregateTrainRoute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrainRoute[P]>
      : GetScalarType<T[P], AggregateTrainRoute[P]>
  }




  export type TrainRouteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainRouteWhereInput
    orderBy?: TrainRouteOrderByWithAggregationInput | TrainRouteOrderByWithAggregationInput[]
    by: TrainRouteScalarFieldEnum[] | TrainRouteScalarFieldEnum
    having?: TrainRouteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrainRouteCountAggregateInputType | true
    _avg?: TrainRouteAvgAggregateInputType
    _sum?: TrainRouteSumAggregateInputType
    _min?: TrainRouteMinAggregateInputType
    _max?: TrainRouteMaxAggregateInputType
  }

  export type TrainRouteGroupByOutputType = {
    id: number
    trainId: number
    sourceStationId: number
    destStationId: number
    departureTime: Date
    arrivalTime: Date
    distance: number
    createdAt: Date
    updatedAt: Date
    _count: TrainRouteCountAggregateOutputType | null
    _avg: TrainRouteAvgAggregateOutputType | null
    _sum: TrainRouteSumAggregateOutputType | null
    _min: TrainRouteMinAggregateOutputType | null
    _max: TrainRouteMaxAggregateOutputType | null
  }

  type GetTrainRouteGroupByPayload<T extends TrainRouteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrainRouteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrainRouteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrainRouteGroupByOutputType[P]>
            : GetScalarType<T[P], TrainRouteGroupByOutputType[P]>
        }
      >
    >


  export type TrainRouteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trainId?: boolean
    sourceStationId?: boolean
    destStationId?: boolean
    departureTime?: boolean
    arrivalTime?: boolean
    distance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    train?: boolean | TrainDefaultArgs<ExtArgs>
    sourceStation?: boolean | StationDefaultArgs<ExtArgs>
    destStation?: boolean | StationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trainRoute"]>

  export type TrainRouteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trainId?: boolean
    sourceStationId?: boolean
    destStationId?: boolean
    departureTime?: boolean
    arrivalTime?: boolean
    distance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    train?: boolean | TrainDefaultArgs<ExtArgs>
    sourceStation?: boolean | StationDefaultArgs<ExtArgs>
    destStation?: boolean | StationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trainRoute"]>

  export type TrainRouteSelectScalar = {
    id?: boolean
    trainId?: boolean
    sourceStationId?: boolean
    destStationId?: boolean
    departureTime?: boolean
    arrivalTime?: boolean
    distance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TrainRouteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    train?: boolean | TrainDefaultArgs<ExtArgs>
    sourceStation?: boolean | StationDefaultArgs<ExtArgs>
    destStation?: boolean | StationDefaultArgs<ExtArgs>
  }
  export type TrainRouteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    train?: boolean | TrainDefaultArgs<ExtArgs>
    sourceStation?: boolean | StationDefaultArgs<ExtArgs>
    destStation?: boolean | StationDefaultArgs<ExtArgs>
  }

  export type $TrainRoutePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrainRoute"
    objects: {
      train: Prisma.$TrainPayload<ExtArgs>
      sourceStation: Prisma.$StationPayload<ExtArgs>
      destStation: Prisma.$StationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      trainId: number
      sourceStationId: number
      destStationId: number
      departureTime: Date
      arrivalTime: Date
      distance: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["trainRoute"]>
    composites: {}
  }

  type TrainRouteGetPayload<S extends boolean | null | undefined | TrainRouteDefaultArgs> = $Result.GetResult<Prisma.$TrainRoutePayload, S>

  type TrainRouteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TrainRouteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TrainRouteCountAggregateInputType | true
    }

  export interface TrainRouteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrainRoute'], meta: { name: 'TrainRoute' } }
    /**
     * Find zero or one TrainRoute that matches the filter.
     * @param {TrainRouteFindUniqueArgs} args - Arguments to find a TrainRoute
     * @example
     * // Get one TrainRoute
     * const trainRoute = await prisma.trainRoute.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrainRouteFindUniqueArgs>(args: SelectSubset<T, TrainRouteFindUniqueArgs<ExtArgs>>): Prisma__TrainRouteClient<$Result.GetResult<Prisma.$TrainRoutePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TrainRoute that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TrainRouteFindUniqueOrThrowArgs} args - Arguments to find a TrainRoute
     * @example
     * // Get one TrainRoute
     * const trainRoute = await prisma.trainRoute.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrainRouteFindUniqueOrThrowArgs>(args: SelectSubset<T, TrainRouteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrainRouteClient<$Result.GetResult<Prisma.$TrainRoutePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TrainRoute that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainRouteFindFirstArgs} args - Arguments to find a TrainRoute
     * @example
     * // Get one TrainRoute
     * const trainRoute = await prisma.trainRoute.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrainRouteFindFirstArgs>(args?: SelectSubset<T, TrainRouteFindFirstArgs<ExtArgs>>): Prisma__TrainRouteClient<$Result.GetResult<Prisma.$TrainRoutePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TrainRoute that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainRouteFindFirstOrThrowArgs} args - Arguments to find a TrainRoute
     * @example
     * // Get one TrainRoute
     * const trainRoute = await prisma.trainRoute.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrainRouteFindFirstOrThrowArgs>(args?: SelectSubset<T, TrainRouteFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrainRouteClient<$Result.GetResult<Prisma.$TrainRoutePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TrainRoutes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainRouteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrainRoutes
     * const trainRoutes = await prisma.trainRoute.findMany()
     * 
     * // Get first 10 TrainRoutes
     * const trainRoutes = await prisma.trainRoute.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trainRouteWithIdOnly = await prisma.trainRoute.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrainRouteFindManyArgs>(args?: SelectSubset<T, TrainRouteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainRoutePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TrainRoute.
     * @param {TrainRouteCreateArgs} args - Arguments to create a TrainRoute.
     * @example
     * // Create one TrainRoute
     * const TrainRoute = await prisma.trainRoute.create({
     *   data: {
     *     // ... data to create a TrainRoute
     *   }
     * })
     * 
     */
    create<T extends TrainRouteCreateArgs>(args: SelectSubset<T, TrainRouteCreateArgs<ExtArgs>>): Prisma__TrainRouteClient<$Result.GetResult<Prisma.$TrainRoutePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TrainRoutes.
     * @param {TrainRouteCreateManyArgs} args - Arguments to create many TrainRoutes.
     * @example
     * // Create many TrainRoutes
     * const trainRoute = await prisma.trainRoute.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrainRouteCreateManyArgs>(args?: SelectSubset<T, TrainRouteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TrainRoutes and returns the data saved in the database.
     * @param {TrainRouteCreateManyAndReturnArgs} args - Arguments to create many TrainRoutes.
     * @example
     * // Create many TrainRoutes
     * const trainRoute = await prisma.trainRoute.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TrainRoutes and only return the `id`
     * const trainRouteWithIdOnly = await prisma.trainRoute.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrainRouteCreateManyAndReturnArgs>(args?: SelectSubset<T, TrainRouteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainRoutePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TrainRoute.
     * @param {TrainRouteDeleteArgs} args - Arguments to delete one TrainRoute.
     * @example
     * // Delete one TrainRoute
     * const TrainRoute = await prisma.trainRoute.delete({
     *   where: {
     *     // ... filter to delete one TrainRoute
     *   }
     * })
     * 
     */
    delete<T extends TrainRouteDeleteArgs>(args: SelectSubset<T, TrainRouteDeleteArgs<ExtArgs>>): Prisma__TrainRouteClient<$Result.GetResult<Prisma.$TrainRoutePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TrainRoute.
     * @param {TrainRouteUpdateArgs} args - Arguments to update one TrainRoute.
     * @example
     * // Update one TrainRoute
     * const trainRoute = await prisma.trainRoute.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrainRouteUpdateArgs>(args: SelectSubset<T, TrainRouteUpdateArgs<ExtArgs>>): Prisma__TrainRouteClient<$Result.GetResult<Prisma.$TrainRoutePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TrainRoutes.
     * @param {TrainRouteDeleteManyArgs} args - Arguments to filter TrainRoutes to delete.
     * @example
     * // Delete a few TrainRoutes
     * const { count } = await prisma.trainRoute.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrainRouteDeleteManyArgs>(args?: SelectSubset<T, TrainRouteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrainRoutes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainRouteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrainRoutes
     * const trainRoute = await prisma.trainRoute.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrainRouteUpdateManyArgs>(args: SelectSubset<T, TrainRouteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TrainRoute.
     * @param {TrainRouteUpsertArgs} args - Arguments to update or create a TrainRoute.
     * @example
     * // Update or create a TrainRoute
     * const trainRoute = await prisma.trainRoute.upsert({
     *   create: {
     *     // ... data to create a TrainRoute
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrainRoute we want to update
     *   }
     * })
     */
    upsert<T extends TrainRouteUpsertArgs>(args: SelectSubset<T, TrainRouteUpsertArgs<ExtArgs>>): Prisma__TrainRouteClient<$Result.GetResult<Prisma.$TrainRoutePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TrainRoutes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainRouteCountArgs} args - Arguments to filter TrainRoutes to count.
     * @example
     * // Count the number of TrainRoutes
     * const count = await prisma.trainRoute.count({
     *   where: {
     *     // ... the filter for the TrainRoutes we want to count
     *   }
     * })
    **/
    count<T extends TrainRouteCountArgs>(
      args?: Subset<T, TrainRouteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrainRouteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrainRoute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainRouteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrainRouteAggregateArgs>(args: Subset<T, TrainRouteAggregateArgs>): Prisma.PrismaPromise<GetTrainRouteAggregateType<T>>

    /**
     * Group by TrainRoute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainRouteGroupByArgs} args - Group by arguments.
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
      T extends TrainRouteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrainRouteGroupByArgs['orderBy'] }
        : { orderBy?: TrainRouteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TrainRouteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrainRouteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrainRoute model
   */
  readonly fields: TrainRouteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrainRoute.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrainRouteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    train<T extends TrainDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TrainDefaultArgs<ExtArgs>>): Prisma__TrainClient<$Result.GetResult<Prisma.$TrainPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    sourceStation<T extends StationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StationDefaultArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    destStation<T extends StationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StationDefaultArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the TrainRoute model
   */ 
  interface TrainRouteFieldRefs {
    readonly id: FieldRef<"TrainRoute", 'Int'>
    readonly trainId: FieldRef<"TrainRoute", 'Int'>
    readonly sourceStationId: FieldRef<"TrainRoute", 'Int'>
    readonly destStationId: FieldRef<"TrainRoute", 'Int'>
    readonly departureTime: FieldRef<"TrainRoute", 'DateTime'>
    readonly arrivalTime: FieldRef<"TrainRoute", 'DateTime'>
    readonly distance: FieldRef<"TrainRoute", 'Float'>
    readonly createdAt: FieldRef<"TrainRoute", 'DateTime'>
    readonly updatedAt: FieldRef<"TrainRoute", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TrainRoute findUnique
   */
  export type TrainRouteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainRoute
     */
    select?: TrainRouteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainRouteInclude<ExtArgs> | null
    /**
     * Filter, which TrainRoute to fetch.
     */
    where: TrainRouteWhereUniqueInput
  }

  /**
   * TrainRoute findUniqueOrThrow
   */
  export type TrainRouteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainRoute
     */
    select?: TrainRouteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainRouteInclude<ExtArgs> | null
    /**
     * Filter, which TrainRoute to fetch.
     */
    where: TrainRouteWhereUniqueInput
  }

  /**
   * TrainRoute findFirst
   */
  export type TrainRouteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainRoute
     */
    select?: TrainRouteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainRouteInclude<ExtArgs> | null
    /**
     * Filter, which TrainRoute to fetch.
     */
    where?: TrainRouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainRoutes to fetch.
     */
    orderBy?: TrainRouteOrderByWithRelationInput | TrainRouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrainRoutes.
     */
    cursor?: TrainRouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainRoutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainRoutes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrainRoutes.
     */
    distinct?: TrainRouteScalarFieldEnum | TrainRouteScalarFieldEnum[]
  }

  /**
   * TrainRoute findFirstOrThrow
   */
  export type TrainRouteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainRoute
     */
    select?: TrainRouteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainRouteInclude<ExtArgs> | null
    /**
     * Filter, which TrainRoute to fetch.
     */
    where?: TrainRouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainRoutes to fetch.
     */
    orderBy?: TrainRouteOrderByWithRelationInput | TrainRouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrainRoutes.
     */
    cursor?: TrainRouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainRoutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainRoutes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrainRoutes.
     */
    distinct?: TrainRouteScalarFieldEnum | TrainRouteScalarFieldEnum[]
  }

  /**
   * TrainRoute findMany
   */
  export type TrainRouteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainRoute
     */
    select?: TrainRouteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainRouteInclude<ExtArgs> | null
    /**
     * Filter, which TrainRoutes to fetch.
     */
    where?: TrainRouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainRoutes to fetch.
     */
    orderBy?: TrainRouteOrderByWithRelationInput | TrainRouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrainRoutes.
     */
    cursor?: TrainRouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainRoutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainRoutes.
     */
    skip?: number
    distinct?: TrainRouteScalarFieldEnum | TrainRouteScalarFieldEnum[]
  }

  /**
   * TrainRoute create
   */
  export type TrainRouteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainRoute
     */
    select?: TrainRouteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainRouteInclude<ExtArgs> | null
    /**
     * The data needed to create a TrainRoute.
     */
    data: XOR<TrainRouteCreateInput, TrainRouteUncheckedCreateInput>
  }

  /**
   * TrainRoute createMany
   */
  export type TrainRouteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrainRoutes.
     */
    data: TrainRouteCreateManyInput | TrainRouteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrainRoute createManyAndReturn
   */
  export type TrainRouteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainRoute
     */
    select?: TrainRouteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TrainRoutes.
     */
    data: TrainRouteCreateManyInput | TrainRouteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainRouteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrainRoute update
   */
  export type TrainRouteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainRoute
     */
    select?: TrainRouteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainRouteInclude<ExtArgs> | null
    /**
     * The data needed to update a TrainRoute.
     */
    data: XOR<TrainRouteUpdateInput, TrainRouteUncheckedUpdateInput>
    /**
     * Choose, which TrainRoute to update.
     */
    where: TrainRouteWhereUniqueInput
  }

  /**
   * TrainRoute updateMany
   */
  export type TrainRouteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrainRoutes.
     */
    data: XOR<TrainRouteUpdateManyMutationInput, TrainRouteUncheckedUpdateManyInput>
    /**
     * Filter which TrainRoutes to update
     */
    where?: TrainRouteWhereInput
  }

  /**
   * TrainRoute upsert
   */
  export type TrainRouteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainRoute
     */
    select?: TrainRouteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainRouteInclude<ExtArgs> | null
    /**
     * The filter to search for the TrainRoute to update in case it exists.
     */
    where: TrainRouteWhereUniqueInput
    /**
     * In case the TrainRoute found by the `where` argument doesn't exist, create a new TrainRoute with this data.
     */
    create: XOR<TrainRouteCreateInput, TrainRouteUncheckedCreateInput>
    /**
     * In case the TrainRoute was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrainRouteUpdateInput, TrainRouteUncheckedUpdateInput>
  }

  /**
   * TrainRoute delete
   */
  export type TrainRouteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainRoute
     */
    select?: TrainRouteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainRouteInclude<ExtArgs> | null
    /**
     * Filter which TrainRoute to delete.
     */
    where: TrainRouteWhereUniqueInput
  }

  /**
   * TrainRoute deleteMany
   */
  export type TrainRouteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrainRoutes to delete
     */
    where?: TrainRouteWhereInput
  }

  /**
   * TrainRoute without action
   */
  export type TrainRouteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainRoute
     */
    select?: TrainRouteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainRouteInclude<ExtArgs> | null
  }


  /**
   * Model Seat
   */

  export type AggregateSeat = {
    _count: SeatCountAggregateOutputType | null
    _avg: SeatAvgAggregateOutputType | null
    _sum: SeatSumAggregateOutputType | null
    _min: SeatMinAggregateOutputType | null
    _max: SeatMaxAggregateOutputType | null
  }

  export type SeatAvgAggregateOutputType = {
    id: number | null
    trainId: number | null
    seatNumber: number | null
  }

  export type SeatSumAggregateOutputType = {
    id: number | null
    trainId: number | null
    seatNumber: number | null
  }

  export type SeatMinAggregateOutputType = {
    id: number | null
    trainId: number | null
    seatNumber: number | null
    isAvailable: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SeatMaxAggregateOutputType = {
    id: number | null
    trainId: number | null
    seatNumber: number | null
    isAvailable: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SeatCountAggregateOutputType = {
    id: number
    trainId: number
    seatNumber: number
    isAvailable: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SeatAvgAggregateInputType = {
    id?: true
    trainId?: true
    seatNumber?: true
  }

  export type SeatSumAggregateInputType = {
    id?: true
    trainId?: true
    seatNumber?: true
  }

  export type SeatMinAggregateInputType = {
    id?: true
    trainId?: true
    seatNumber?: true
    isAvailable?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SeatMaxAggregateInputType = {
    id?: true
    trainId?: true
    seatNumber?: true
    isAvailable?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SeatCountAggregateInputType = {
    id?: true
    trainId?: true
    seatNumber?: true
    isAvailable?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SeatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seat to aggregate.
     */
    where?: SeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seats to fetch.
     */
    orderBy?: SeatOrderByWithRelationInput | SeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Seats
    **/
    _count?: true | SeatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeatMaxAggregateInputType
  }

  export type GetSeatAggregateType<T extends SeatAggregateArgs> = {
        [P in keyof T & keyof AggregateSeat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeat[P]>
      : GetScalarType<T[P], AggregateSeat[P]>
  }




  export type SeatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeatWhereInput
    orderBy?: SeatOrderByWithAggregationInput | SeatOrderByWithAggregationInput[]
    by: SeatScalarFieldEnum[] | SeatScalarFieldEnum
    having?: SeatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeatCountAggregateInputType | true
    _avg?: SeatAvgAggregateInputType
    _sum?: SeatSumAggregateInputType
    _min?: SeatMinAggregateInputType
    _max?: SeatMaxAggregateInputType
  }

  export type SeatGroupByOutputType = {
    id: number
    trainId: number
    seatNumber: number
    isAvailable: boolean
    createdAt: Date
    updatedAt: Date
    _count: SeatCountAggregateOutputType | null
    _avg: SeatAvgAggregateOutputType | null
    _sum: SeatSumAggregateOutputType | null
    _min: SeatMinAggregateOutputType | null
    _max: SeatMaxAggregateOutputType | null
  }

  type GetSeatGroupByPayload<T extends SeatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeatGroupByOutputType[P]>
            : GetScalarType<T[P], SeatGroupByOutputType[P]>
        }
      >
    >


  export type SeatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trainId?: boolean
    seatNumber?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    train?: boolean | TrainDefaultArgs<ExtArgs>
    bookings?: boolean | Seat$bookingsArgs<ExtArgs>
    _count?: boolean | SeatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seat"]>

  export type SeatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trainId?: boolean
    seatNumber?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    train?: boolean | TrainDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seat"]>

  export type SeatSelectScalar = {
    id?: boolean
    trainId?: boolean
    seatNumber?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SeatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    train?: boolean | TrainDefaultArgs<ExtArgs>
    bookings?: boolean | Seat$bookingsArgs<ExtArgs>
    _count?: boolean | SeatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SeatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    train?: boolean | TrainDefaultArgs<ExtArgs>
  }

  export type $SeatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Seat"
    objects: {
      train: Prisma.$TrainPayload<ExtArgs>
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      trainId: number
      seatNumber: number
      isAvailable: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["seat"]>
    composites: {}
  }

  type SeatGetPayload<S extends boolean | null | undefined | SeatDefaultArgs> = $Result.GetResult<Prisma.$SeatPayload, S>

  type SeatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SeatFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SeatCountAggregateInputType | true
    }

  export interface SeatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Seat'], meta: { name: 'Seat' } }
    /**
     * Find zero or one Seat that matches the filter.
     * @param {SeatFindUniqueArgs} args - Arguments to find a Seat
     * @example
     * // Get one Seat
     * const seat = await prisma.seat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeatFindUniqueArgs>(args: SelectSubset<T, SeatFindUniqueArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Seat that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SeatFindUniqueOrThrowArgs} args - Arguments to find a Seat
     * @example
     * // Get one Seat
     * const seat = await prisma.seat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeatFindUniqueOrThrowArgs>(args: SelectSubset<T, SeatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Seat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatFindFirstArgs} args - Arguments to find a Seat
     * @example
     * // Get one Seat
     * const seat = await prisma.seat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeatFindFirstArgs>(args?: SelectSubset<T, SeatFindFirstArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Seat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatFindFirstOrThrowArgs} args - Arguments to find a Seat
     * @example
     * // Get one Seat
     * const seat = await prisma.seat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeatFindFirstOrThrowArgs>(args?: SelectSubset<T, SeatFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Seats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Seats
     * const seats = await prisma.seat.findMany()
     * 
     * // Get first 10 Seats
     * const seats = await prisma.seat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seatWithIdOnly = await prisma.seat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeatFindManyArgs>(args?: SelectSubset<T, SeatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Seat.
     * @param {SeatCreateArgs} args - Arguments to create a Seat.
     * @example
     * // Create one Seat
     * const Seat = await prisma.seat.create({
     *   data: {
     *     // ... data to create a Seat
     *   }
     * })
     * 
     */
    create<T extends SeatCreateArgs>(args: SelectSubset<T, SeatCreateArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Seats.
     * @param {SeatCreateManyArgs} args - Arguments to create many Seats.
     * @example
     * // Create many Seats
     * const seat = await prisma.seat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeatCreateManyArgs>(args?: SelectSubset<T, SeatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Seats and returns the data saved in the database.
     * @param {SeatCreateManyAndReturnArgs} args - Arguments to create many Seats.
     * @example
     * // Create many Seats
     * const seat = await prisma.seat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Seats and only return the `id`
     * const seatWithIdOnly = await prisma.seat.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeatCreateManyAndReturnArgs>(args?: SelectSubset<T, SeatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Seat.
     * @param {SeatDeleteArgs} args - Arguments to delete one Seat.
     * @example
     * // Delete one Seat
     * const Seat = await prisma.seat.delete({
     *   where: {
     *     // ... filter to delete one Seat
     *   }
     * })
     * 
     */
    delete<T extends SeatDeleteArgs>(args: SelectSubset<T, SeatDeleteArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Seat.
     * @param {SeatUpdateArgs} args - Arguments to update one Seat.
     * @example
     * // Update one Seat
     * const seat = await prisma.seat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeatUpdateArgs>(args: SelectSubset<T, SeatUpdateArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Seats.
     * @param {SeatDeleteManyArgs} args - Arguments to filter Seats to delete.
     * @example
     * // Delete a few Seats
     * const { count } = await prisma.seat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeatDeleteManyArgs>(args?: SelectSubset<T, SeatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Seats
     * const seat = await prisma.seat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeatUpdateManyArgs>(args: SelectSubset<T, SeatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Seat.
     * @param {SeatUpsertArgs} args - Arguments to update or create a Seat.
     * @example
     * // Update or create a Seat
     * const seat = await prisma.seat.upsert({
     *   create: {
     *     // ... data to create a Seat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Seat we want to update
     *   }
     * })
     */
    upsert<T extends SeatUpsertArgs>(args: SelectSubset<T, SeatUpsertArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Seats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatCountArgs} args - Arguments to filter Seats to count.
     * @example
     * // Count the number of Seats
     * const count = await prisma.seat.count({
     *   where: {
     *     // ... the filter for the Seats we want to count
     *   }
     * })
    **/
    count<T extends SeatCountArgs>(
      args?: Subset<T, SeatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Seat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SeatAggregateArgs>(args: Subset<T, SeatAggregateArgs>): Prisma.PrismaPromise<GetSeatAggregateType<T>>

    /**
     * Group by Seat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatGroupByArgs} args - Group by arguments.
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
      T extends SeatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeatGroupByArgs['orderBy'] }
        : { orderBy?: SeatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SeatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Seat model
   */
  readonly fields: SeatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Seat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    train<T extends TrainDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TrainDefaultArgs<ExtArgs>>): Prisma__TrainClient<$Result.GetResult<Prisma.$TrainPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    bookings<T extends Seat$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Seat$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Seat model
   */ 
  interface SeatFieldRefs {
    readonly id: FieldRef<"Seat", 'Int'>
    readonly trainId: FieldRef<"Seat", 'Int'>
    readonly seatNumber: FieldRef<"Seat", 'Int'>
    readonly isAvailable: FieldRef<"Seat", 'Boolean'>
    readonly createdAt: FieldRef<"Seat", 'DateTime'>
    readonly updatedAt: FieldRef<"Seat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Seat findUnique
   */
  export type SeatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter, which Seat to fetch.
     */
    where: SeatWhereUniqueInput
  }

  /**
   * Seat findUniqueOrThrow
   */
  export type SeatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter, which Seat to fetch.
     */
    where: SeatWhereUniqueInput
  }

  /**
   * Seat findFirst
   */
  export type SeatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter, which Seat to fetch.
     */
    where?: SeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seats to fetch.
     */
    orderBy?: SeatOrderByWithRelationInput | SeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seats.
     */
    cursor?: SeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seats.
     */
    distinct?: SeatScalarFieldEnum | SeatScalarFieldEnum[]
  }

  /**
   * Seat findFirstOrThrow
   */
  export type SeatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter, which Seat to fetch.
     */
    where?: SeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seats to fetch.
     */
    orderBy?: SeatOrderByWithRelationInput | SeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seats.
     */
    cursor?: SeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seats.
     */
    distinct?: SeatScalarFieldEnum | SeatScalarFieldEnum[]
  }

  /**
   * Seat findMany
   */
  export type SeatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter, which Seats to fetch.
     */
    where?: SeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seats to fetch.
     */
    orderBy?: SeatOrderByWithRelationInput | SeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Seats.
     */
    cursor?: SeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seats.
     */
    skip?: number
    distinct?: SeatScalarFieldEnum | SeatScalarFieldEnum[]
  }

  /**
   * Seat create
   */
  export type SeatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * The data needed to create a Seat.
     */
    data: XOR<SeatCreateInput, SeatUncheckedCreateInput>
  }

  /**
   * Seat createMany
   */
  export type SeatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Seats.
     */
    data: SeatCreateManyInput | SeatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Seat createManyAndReturn
   */
  export type SeatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Seats.
     */
    data: SeatCreateManyInput | SeatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Seat update
   */
  export type SeatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * The data needed to update a Seat.
     */
    data: XOR<SeatUpdateInput, SeatUncheckedUpdateInput>
    /**
     * Choose, which Seat to update.
     */
    where: SeatWhereUniqueInput
  }

  /**
   * Seat updateMany
   */
  export type SeatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Seats.
     */
    data: XOR<SeatUpdateManyMutationInput, SeatUncheckedUpdateManyInput>
    /**
     * Filter which Seats to update
     */
    where?: SeatWhereInput
  }

  /**
   * Seat upsert
   */
  export type SeatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * The filter to search for the Seat to update in case it exists.
     */
    where: SeatWhereUniqueInput
    /**
     * In case the Seat found by the `where` argument doesn't exist, create a new Seat with this data.
     */
    create: XOR<SeatCreateInput, SeatUncheckedCreateInput>
    /**
     * In case the Seat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeatUpdateInput, SeatUncheckedUpdateInput>
  }

  /**
   * Seat delete
   */
  export type SeatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter which Seat to delete.
     */
    where: SeatWhereUniqueInput
  }

  /**
   * Seat deleteMany
   */
  export type SeatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seats to delete
     */
    where?: SeatWhereInput
  }

  /**
   * Seat.bookings
   */
  export type Seat$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Seat without action
   */
  export type SeatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    trainId: number | null
    seatId: number | null
    sourceId: number | null
    destinationId: number | null
  }

  export type BookingSumAggregateOutputType = {
    id: number | null
    userId: number | null
    trainId: number | null
    seatId: number | null
    sourceId: number | null
    destinationId: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: number | null
    userId: number | null
    trainId: number | null
    seatId: number | null
    sourceId: number | null
    destinationId: number | null
    bookingDate: Date | null
    journeyDate: Date | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    trainId: number | null
    seatId: number | null
    sourceId: number | null
    destinationId: number | null
    bookingDate: Date | null
    journeyDate: Date | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    userId: number
    trainId: number
    seatId: number
    sourceId: number
    destinationId: number
    bookingDate: number
    journeyDate: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    id?: true
    userId?: true
    trainId?: true
    seatId?: true
    sourceId?: true
    destinationId?: true
  }

  export type BookingSumAggregateInputType = {
    id?: true
    userId?: true
    trainId?: true
    seatId?: true
    sourceId?: true
    destinationId?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    userId?: true
    trainId?: true
    seatId?: true
    sourceId?: true
    destinationId?: true
    bookingDate?: true
    journeyDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    userId?: true
    trainId?: true
    seatId?: true
    sourceId?: true
    destinationId?: true
    bookingDate?: true
    journeyDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    userId?: true
    trainId?: true
    seatId?: true
    sourceId?: true
    destinationId?: true
    bookingDate?: true
    journeyDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: number
    userId: number
    trainId: number
    seatId: number
    sourceId: number
    destinationId: number
    bookingDate: Date
    journeyDate: Date
    status: string
    createdAt: Date
    updatedAt: Date
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    trainId?: boolean
    seatId?: boolean
    sourceId?: boolean
    destinationId?: boolean
    bookingDate?: boolean
    journeyDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    train?: boolean | TrainDefaultArgs<ExtArgs>
    seat?: boolean | SeatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    trainId?: boolean
    seatId?: boolean
    sourceId?: boolean
    destinationId?: boolean
    bookingDate?: boolean
    journeyDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    train?: boolean | TrainDefaultArgs<ExtArgs>
    seat?: boolean | SeatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    userId?: boolean
    trainId?: boolean
    seatId?: boolean
    sourceId?: boolean
    destinationId?: boolean
    bookingDate?: boolean
    journeyDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    train?: boolean | TrainDefaultArgs<ExtArgs>
    seat?: boolean | SeatDefaultArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    train?: boolean | TrainDefaultArgs<ExtArgs>
    seat?: boolean | SeatDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      train: Prisma.$TrainPayload<ExtArgs>
      seat: Prisma.$SeatPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      trainId: number
      seatId: number
      sourceId: number
      destinationId: number
      bookingDate: Date
      journeyDate: Date
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
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
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    train<T extends TrainDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TrainDefaultArgs<ExtArgs>>): Prisma__TrainClient<$Result.GetResult<Prisma.$TrainPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    seat<T extends SeatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SeatDefaultArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Booking model
   */ 
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'Int'>
    readonly userId: FieldRef<"Booking", 'Int'>
    readonly trainId: FieldRef<"Booking", 'Int'>
    readonly seatId: FieldRef<"Booking", 'Int'>
    readonly sourceId: FieldRef<"Booking", 'Int'>
    readonly destinationId: FieldRef<"Booking", 'Int'>
    readonly bookingDate: FieldRef<"Booking", 'DateTime'>
    readonly journeyDate: FieldRef<"Booking", 'DateTime'>
    readonly status: FieldRef<"Booking", 'String'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
    readonly updatedAt: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    email: 'email',
    role: 'role',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TrainScalarFieldEnum: {
    id: 'id',
    trainNumber: 'trainNumber',
    name: 'name',
    source: 'source',
    destination: 'destination',
    schedule: 'schedule',
    totalSeats: 'totalSeats',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TrainScalarFieldEnum = (typeof TrainScalarFieldEnum)[keyof typeof TrainScalarFieldEnum]


  export const StationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    location: 'location',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StationScalarFieldEnum = (typeof StationScalarFieldEnum)[keyof typeof StationScalarFieldEnum]


  export const TrainRouteScalarFieldEnum: {
    id: 'id',
    trainId: 'trainId',
    sourceStationId: 'sourceStationId',
    destStationId: 'destStationId',
    departureTime: 'departureTime',
    arrivalTime: 'arrivalTime',
    distance: 'distance',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TrainRouteScalarFieldEnum = (typeof TrainRouteScalarFieldEnum)[keyof typeof TrainRouteScalarFieldEnum]


  export const SeatScalarFieldEnum: {
    id: 'id',
    trainId: 'trainId',
    seatNumber: 'seatNumber',
    isAvailable: 'isAvailable',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SeatScalarFieldEnum = (typeof SeatScalarFieldEnum)[keyof typeof SeatScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    trainId: 'trainId',
    seatId: 'seatId',
    sourceId: 'sourceId',
    destinationId: 'destinationId',
    bookingDate: 'bookingDate',
    journeyDate: 'journeyDate',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    token?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    bookings?: BookingListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    token?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    token?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    bookings?: BookingListRelationFilter
  }, "id" | "username" | "email" | "token">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    token?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    token?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TrainWhereInput = {
    AND?: TrainWhereInput | TrainWhereInput[]
    OR?: TrainWhereInput[]
    NOT?: TrainWhereInput | TrainWhereInput[]
    id?: IntFilter<"Train"> | number
    trainNumber?: StringFilter<"Train"> | string
    name?: StringFilter<"Train"> | string
    source?: StringFilter<"Train"> | string
    destination?: StringFilter<"Train"> | string
    schedule?: DateTimeFilter<"Train"> | Date | string
    totalSeats?: IntFilter<"Train"> | number
    createdAt?: DateTimeFilter<"Train"> | Date | string
    updatedAt?: DateTimeFilter<"Train"> | Date | string
    bookings?: BookingListRelationFilter
    trainRoutes?: TrainRouteListRelationFilter
    seats?: SeatListRelationFilter
  }

  export type TrainOrderByWithRelationInput = {
    id?: SortOrder
    trainNumber?: SortOrder
    name?: SortOrder
    source?: SortOrder
    destination?: SortOrder
    schedule?: SortOrder
    totalSeats?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bookings?: BookingOrderByRelationAggregateInput
    trainRoutes?: TrainRouteOrderByRelationAggregateInput
    seats?: SeatOrderByRelationAggregateInput
  }

  export type TrainWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    trainNumber?: string
    AND?: TrainWhereInput | TrainWhereInput[]
    OR?: TrainWhereInput[]
    NOT?: TrainWhereInput | TrainWhereInput[]
    name?: StringFilter<"Train"> | string
    source?: StringFilter<"Train"> | string
    destination?: StringFilter<"Train"> | string
    schedule?: DateTimeFilter<"Train"> | Date | string
    totalSeats?: IntFilter<"Train"> | number
    createdAt?: DateTimeFilter<"Train"> | Date | string
    updatedAt?: DateTimeFilter<"Train"> | Date | string
    bookings?: BookingListRelationFilter
    trainRoutes?: TrainRouteListRelationFilter
    seats?: SeatListRelationFilter
  }, "id" | "trainNumber">

  export type TrainOrderByWithAggregationInput = {
    id?: SortOrder
    trainNumber?: SortOrder
    name?: SortOrder
    source?: SortOrder
    destination?: SortOrder
    schedule?: SortOrder
    totalSeats?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TrainCountOrderByAggregateInput
    _avg?: TrainAvgOrderByAggregateInput
    _max?: TrainMaxOrderByAggregateInput
    _min?: TrainMinOrderByAggregateInput
    _sum?: TrainSumOrderByAggregateInput
  }

  export type TrainScalarWhereWithAggregatesInput = {
    AND?: TrainScalarWhereWithAggregatesInput | TrainScalarWhereWithAggregatesInput[]
    OR?: TrainScalarWhereWithAggregatesInput[]
    NOT?: TrainScalarWhereWithAggregatesInput | TrainScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Train"> | number
    trainNumber?: StringWithAggregatesFilter<"Train"> | string
    name?: StringWithAggregatesFilter<"Train"> | string
    source?: StringWithAggregatesFilter<"Train"> | string
    destination?: StringWithAggregatesFilter<"Train"> | string
    schedule?: DateTimeWithAggregatesFilter<"Train"> | Date | string
    totalSeats?: IntWithAggregatesFilter<"Train"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Train"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Train"> | Date | string
  }

  export type StationWhereInput = {
    AND?: StationWhereInput | StationWhereInput[]
    OR?: StationWhereInput[]
    NOT?: StationWhereInput | StationWhereInput[]
    id?: IntFilter<"Station"> | number
    name?: StringFilter<"Station"> | string
    location?: StringFilter<"Station"> | string
    createdAt?: DateTimeFilter<"Station"> | Date | string
    updatedAt?: DateTimeFilter<"Station"> | Date | string
    sourceRoutes?: TrainRouteListRelationFilter
    destRoutes?: TrainRouteListRelationFilter
  }

  export type StationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sourceRoutes?: TrainRouteOrderByRelationAggregateInput
    destRoutes?: TrainRouteOrderByRelationAggregateInput
  }

  export type StationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: StationWhereInput | StationWhereInput[]
    OR?: StationWhereInput[]
    NOT?: StationWhereInput | StationWhereInput[]
    location?: StringFilter<"Station"> | string
    createdAt?: DateTimeFilter<"Station"> | Date | string
    updatedAt?: DateTimeFilter<"Station"> | Date | string
    sourceRoutes?: TrainRouteListRelationFilter
    destRoutes?: TrainRouteListRelationFilter
  }, "id" | "name">

  export type StationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StationCountOrderByAggregateInput
    _avg?: StationAvgOrderByAggregateInput
    _max?: StationMaxOrderByAggregateInput
    _min?: StationMinOrderByAggregateInput
    _sum?: StationSumOrderByAggregateInput
  }

  export type StationScalarWhereWithAggregatesInput = {
    AND?: StationScalarWhereWithAggregatesInput | StationScalarWhereWithAggregatesInput[]
    OR?: StationScalarWhereWithAggregatesInput[]
    NOT?: StationScalarWhereWithAggregatesInput | StationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Station"> | number
    name?: StringWithAggregatesFilter<"Station"> | string
    location?: StringWithAggregatesFilter<"Station"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Station"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Station"> | Date | string
  }

  export type TrainRouteWhereInput = {
    AND?: TrainRouteWhereInput | TrainRouteWhereInput[]
    OR?: TrainRouteWhereInput[]
    NOT?: TrainRouteWhereInput | TrainRouteWhereInput[]
    id?: IntFilter<"TrainRoute"> | number
    trainId?: IntFilter<"TrainRoute"> | number
    sourceStationId?: IntFilter<"TrainRoute"> | number
    destStationId?: IntFilter<"TrainRoute"> | number
    departureTime?: DateTimeFilter<"TrainRoute"> | Date | string
    arrivalTime?: DateTimeFilter<"TrainRoute"> | Date | string
    distance?: FloatFilter<"TrainRoute"> | number
    createdAt?: DateTimeFilter<"TrainRoute"> | Date | string
    updatedAt?: DateTimeFilter<"TrainRoute"> | Date | string
    train?: XOR<TrainRelationFilter, TrainWhereInput>
    sourceStation?: XOR<StationRelationFilter, StationWhereInput>
    destStation?: XOR<StationRelationFilter, StationWhereInput>
  }

  export type TrainRouteOrderByWithRelationInput = {
    id?: SortOrder
    trainId?: SortOrder
    sourceStationId?: SortOrder
    destStationId?: SortOrder
    departureTime?: SortOrder
    arrivalTime?: SortOrder
    distance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    train?: TrainOrderByWithRelationInput
    sourceStation?: StationOrderByWithRelationInput
    destStation?: StationOrderByWithRelationInput
  }

  export type TrainRouteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    trainId_sourceStationId_destStationId?: TrainRouteTrainIdSourceStationIdDestStationIdCompoundUniqueInput
    AND?: TrainRouteWhereInput | TrainRouteWhereInput[]
    OR?: TrainRouteWhereInput[]
    NOT?: TrainRouteWhereInput | TrainRouteWhereInput[]
    trainId?: IntFilter<"TrainRoute"> | number
    sourceStationId?: IntFilter<"TrainRoute"> | number
    destStationId?: IntFilter<"TrainRoute"> | number
    departureTime?: DateTimeFilter<"TrainRoute"> | Date | string
    arrivalTime?: DateTimeFilter<"TrainRoute"> | Date | string
    distance?: FloatFilter<"TrainRoute"> | number
    createdAt?: DateTimeFilter<"TrainRoute"> | Date | string
    updatedAt?: DateTimeFilter<"TrainRoute"> | Date | string
    train?: XOR<TrainRelationFilter, TrainWhereInput>
    sourceStation?: XOR<StationRelationFilter, StationWhereInput>
    destStation?: XOR<StationRelationFilter, StationWhereInput>
  }, "id" | "trainId_sourceStationId_destStationId">

  export type TrainRouteOrderByWithAggregationInput = {
    id?: SortOrder
    trainId?: SortOrder
    sourceStationId?: SortOrder
    destStationId?: SortOrder
    departureTime?: SortOrder
    arrivalTime?: SortOrder
    distance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TrainRouteCountOrderByAggregateInput
    _avg?: TrainRouteAvgOrderByAggregateInput
    _max?: TrainRouteMaxOrderByAggregateInput
    _min?: TrainRouteMinOrderByAggregateInput
    _sum?: TrainRouteSumOrderByAggregateInput
  }

  export type TrainRouteScalarWhereWithAggregatesInput = {
    AND?: TrainRouteScalarWhereWithAggregatesInput | TrainRouteScalarWhereWithAggregatesInput[]
    OR?: TrainRouteScalarWhereWithAggregatesInput[]
    NOT?: TrainRouteScalarWhereWithAggregatesInput | TrainRouteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TrainRoute"> | number
    trainId?: IntWithAggregatesFilter<"TrainRoute"> | number
    sourceStationId?: IntWithAggregatesFilter<"TrainRoute"> | number
    destStationId?: IntWithAggregatesFilter<"TrainRoute"> | number
    departureTime?: DateTimeWithAggregatesFilter<"TrainRoute"> | Date | string
    arrivalTime?: DateTimeWithAggregatesFilter<"TrainRoute"> | Date | string
    distance?: FloatWithAggregatesFilter<"TrainRoute"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TrainRoute"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TrainRoute"> | Date | string
  }

  export type SeatWhereInput = {
    AND?: SeatWhereInput | SeatWhereInput[]
    OR?: SeatWhereInput[]
    NOT?: SeatWhereInput | SeatWhereInput[]
    id?: IntFilter<"Seat"> | number
    trainId?: IntFilter<"Seat"> | number
    seatNumber?: IntFilter<"Seat"> | number
    isAvailable?: BoolFilter<"Seat"> | boolean
    createdAt?: DateTimeFilter<"Seat"> | Date | string
    updatedAt?: DateTimeFilter<"Seat"> | Date | string
    train?: XOR<TrainRelationFilter, TrainWhereInput>
    bookings?: BookingListRelationFilter
  }

  export type SeatOrderByWithRelationInput = {
    id?: SortOrder
    trainId?: SortOrder
    seatNumber?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    train?: TrainOrderByWithRelationInput
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type SeatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    trainId_seatNumber?: SeatTrainIdSeatNumberCompoundUniqueInput
    AND?: SeatWhereInput | SeatWhereInput[]
    OR?: SeatWhereInput[]
    NOT?: SeatWhereInput | SeatWhereInput[]
    trainId?: IntFilter<"Seat"> | number
    seatNumber?: IntFilter<"Seat"> | number
    isAvailable?: BoolFilter<"Seat"> | boolean
    createdAt?: DateTimeFilter<"Seat"> | Date | string
    updatedAt?: DateTimeFilter<"Seat"> | Date | string
    train?: XOR<TrainRelationFilter, TrainWhereInput>
    bookings?: BookingListRelationFilter
  }, "id" | "trainId_seatNumber">

  export type SeatOrderByWithAggregationInput = {
    id?: SortOrder
    trainId?: SortOrder
    seatNumber?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SeatCountOrderByAggregateInput
    _avg?: SeatAvgOrderByAggregateInput
    _max?: SeatMaxOrderByAggregateInput
    _min?: SeatMinOrderByAggregateInput
    _sum?: SeatSumOrderByAggregateInput
  }

  export type SeatScalarWhereWithAggregatesInput = {
    AND?: SeatScalarWhereWithAggregatesInput | SeatScalarWhereWithAggregatesInput[]
    OR?: SeatScalarWhereWithAggregatesInput[]
    NOT?: SeatScalarWhereWithAggregatesInput | SeatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Seat"> | number
    trainId?: IntWithAggregatesFilter<"Seat"> | number
    seatNumber?: IntWithAggregatesFilter<"Seat"> | number
    isAvailable?: BoolWithAggregatesFilter<"Seat"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Seat"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Seat"> | Date | string
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: IntFilter<"Booking"> | number
    userId?: IntFilter<"Booking"> | number
    trainId?: IntFilter<"Booking"> | number
    seatId?: IntFilter<"Booking"> | number
    sourceId?: IntFilter<"Booking"> | number
    destinationId?: IntFilter<"Booking"> | number
    bookingDate?: DateTimeFilter<"Booking"> | Date | string
    journeyDate?: DateTimeFilter<"Booking"> | Date | string
    status?: StringFilter<"Booking"> | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    train?: XOR<TrainRelationFilter, TrainWhereInput>
    seat?: XOR<SeatRelationFilter, SeatWhereInput>
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    trainId?: SortOrder
    seatId?: SortOrder
    sourceId?: SortOrder
    destinationId?: SortOrder
    bookingDate?: SortOrder
    journeyDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    train?: TrainOrderByWithRelationInput
    seat?: SeatOrderByWithRelationInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    trainId_seatId_journeyDate?: BookingTrainIdSeatIdJourneyDateCompoundUniqueInput
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    userId?: IntFilter<"Booking"> | number
    trainId?: IntFilter<"Booking"> | number
    seatId?: IntFilter<"Booking"> | number
    sourceId?: IntFilter<"Booking"> | number
    destinationId?: IntFilter<"Booking"> | number
    bookingDate?: DateTimeFilter<"Booking"> | Date | string
    journeyDate?: DateTimeFilter<"Booking"> | Date | string
    status?: StringFilter<"Booking"> | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    train?: XOR<TrainRelationFilter, TrainWhereInput>
    seat?: XOR<SeatRelationFilter, SeatWhereInput>
  }, "id" | "trainId_seatId_journeyDate">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    trainId?: SortOrder
    seatId?: SortOrder
    sourceId?: SortOrder
    destinationId?: SortOrder
    bookingDate?: SortOrder
    journeyDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Booking"> | number
    userId?: IntWithAggregatesFilter<"Booking"> | number
    trainId?: IntWithAggregatesFilter<"Booking"> | number
    seatId?: IntWithAggregatesFilter<"Booking"> | number
    sourceId?: IntWithAggregatesFilter<"Booking"> | number
    destinationId?: IntWithAggregatesFilter<"Booking"> | number
    bookingDate?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    journeyDate?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    status?: StringWithAggregatesFilter<"Booking"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type UserCreateInput = {
    username: string
    password: string
    email: string
    role?: $Enums.UserRole
    token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    email: string
    role?: $Enums.UserRole
    token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    password: string
    email: string
    role?: $Enums.UserRole
    token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainCreateInput = {
    trainNumber: string
    name: string
    source: string
    destination: string
    schedule: Date | string
    totalSeats?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutTrainInput
    trainRoutes?: TrainRouteCreateNestedManyWithoutTrainInput
    seats?: SeatCreateNestedManyWithoutTrainInput
  }

  export type TrainUncheckedCreateInput = {
    id?: number
    trainNumber: string
    name: string
    source: string
    destination: string
    schedule: Date | string
    totalSeats?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutTrainInput
    trainRoutes?: TrainRouteUncheckedCreateNestedManyWithoutTrainInput
    seats?: SeatUncheckedCreateNestedManyWithoutTrainInput
  }

  export type TrainUpdateInput = {
    trainNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    schedule?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutTrainNestedInput
    trainRoutes?: TrainRouteUpdateManyWithoutTrainNestedInput
    seats?: SeatUpdateManyWithoutTrainNestedInput
  }

  export type TrainUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    trainNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    schedule?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutTrainNestedInput
    trainRoutes?: TrainRouteUncheckedUpdateManyWithoutTrainNestedInput
    seats?: SeatUncheckedUpdateManyWithoutTrainNestedInput
  }

  export type TrainCreateManyInput = {
    id?: number
    trainNumber: string
    name: string
    source: string
    destination: string
    schedule: Date | string
    totalSeats?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrainUpdateManyMutationInput = {
    trainNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    schedule?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    trainNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    schedule?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StationCreateInput = {
    name: string
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sourceRoutes?: TrainRouteCreateNestedManyWithoutSourceStationInput
    destRoutes?: TrainRouteCreateNestedManyWithoutDestStationInput
  }

  export type StationUncheckedCreateInput = {
    id?: number
    name: string
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sourceRoutes?: TrainRouteUncheckedCreateNestedManyWithoutSourceStationInput
    destRoutes?: TrainRouteUncheckedCreateNestedManyWithoutDestStationInput
  }

  export type StationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceRoutes?: TrainRouteUpdateManyWithoutSourceStationNestedInput
    destRoutes?: TrainRouteUpdateManyWithoutDestStationNestedInput
  }

  export type StationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceRoutes?: TrainRouteUncheckedUpdateManyWithoutSourceStationNestedInput
    destRoutes?: TrainRouteUncheckedUpdateManyWithoutDestStationNestedInput
  }

  export type StationCreateManyInput = {
    id?: number
    name: string
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainRouteCreateInput = {
    departureTime: Date | string
    arrivalTime: Date | string
    distance: number
    createdAt?: Date | string
    updatedAt?: Date | string
    train: TrainCreateNestedOneWithoutTrainRoutesInput
    sourceStation: StationCreateNestedOneWithoutSourceRoutesInput
    destStation: StationCreateNestedOneWithoutDestRoutesInput
  }

  export type TrainRouteUncheckedCreateInput = {
    id?: number
    trainId: number
    sourceStationId: number
    destStationId: number
    departureTime: Date | string
    arrivalTime: Date | string
    distance: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrainRouteUpdateInput = {
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    distance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    train?: TrainUpdateOneRequiredWithoutTrainRoutesNestedInput
    sourceStation?: StationUpdateOneRequiredWithoutSourceRoutesNestedInput
    destStation?: StationUpdateOneRequiredWithoutDestRoutesNestedInput
  }

  export type TrainRouteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    trainId?: IntFieldUpdateOperationsInput | number
    sourceStationId?: IntFieldUpdateOperationsInput | number
    destStationId?: IntFieldUpdateOperationsInput | number
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    distance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainRouteCreateManyInput = {
    id?: number
    trainId: number
    sourceStationId: number
    destStationId: number
    departureTime: Date | string
    arrivalTime: Date | string
    distance: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrainRouteUpdateManyMutationInput = {
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    distance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainRouteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    trainId?: IntFieldUpdateOperationsInput | number
    sourceStationId?: IntFieldUpdateOperationsInput | number
    destStationId?: IntFieldUpdateOperationsInput | number
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    distance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeatCreateInput = {
    seatNumber: number
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    train: TrainCreateNestedOneWithoutSeatsInput
    bookings?: BookingCreateNestedManyWithoutSeatInput
  }

  export type SeatUncheckedCreateInput = {
    id?: number
    trainId: number
    seatNumber: number
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutSeatInput
  }

  export type SeatUpdateInput = {
    seatNumber?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    train?: TrainUpdateOneRequiredWithoutSeatsNestedInput
    bookings?: BookingUpdateManyWithoutSeatNestedInput
  }

  export type SeatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    trainId?: IntFieldUpdateOperationsInput | number
    seatNumber?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutSeatNestedInput
  }

  export type SeatCreateManyInput = {
    id?: number
    trainId: number
    seatNumber: number
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeatUpdateManyMutationInput = {
    seatNumber?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    trainId?: IntFieldUpdateOperationsInput | number
    seatNumber?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateInput = {
    sourceId: number
    destinationId: number
    bookingDate?: Date | string
    journeyDate: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    train: TrainCreateNestedOneWithoutBookingsInput
    seat: SeatCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateInput = {
    id?: number
    userId: number
    trainId: number
    seatId: number
    sourceId: number
    destinationId: number
    bookingDate?: Date | string
    journeyDate: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateInput = {
    sourceId?: IntFieldUpdateOperationsInput | number
    destinationId?: IntFieldUpdateOperationsInput | number
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    journeyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    train?: TrainUpdateOneRequiredWithoutBookingsNestedInput
    seat?: SeatUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    trainId?: IntFieldUpdateOperationsInput | number
    seatId?: IntFieldUpdateOperationsInput | number
    sourceId?: IntFieldUpdateOperationsInput | number
    destinationId?: IntFieldUpdateOperationsInput | number
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    journeyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyInput = {
    id?: number
    userId: number
    trainId: number
    seatId: number
    sourceId: number
    destinationId: number
    bookingDate?: Date | string
    journeyDate: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    sourceId?: IntFieldUpdateOperationsInput | number
    destinationId?: IntFieldUpdateOperationsInput | number
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    journeyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    trainId?: IntFieldUpdateOperationsInput | number
    seatId?: IntFieldUpdateOperationsInput | number
    sourceId?: IntFieldUpdateOperationsInput | number
    destinationId?: IntFieldUpdateOperationsInput | number
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    journeyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type TrainRouteListRelationFilter = {
    every?: TrainRouteWhereInput
    some?: TrainRouteWhereInput
    none?: TrainRouteWhereInput
  }

  export type SeatListRelationFilter = {
    every?: SeatWhereInput
    some?: SeatWhereInput
    none?: SeatWhereInput
  }

  export type TrainRouteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SeatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrainCountOrderByAggregateInput = {
    id?: SortOrder
    trainNumber?: SortOrder
    name?: SortOrder
    source?: SortOrder
    destination?: SortOrder
    schedule?: SortOrder
    totalSeats?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrainAvgOrderByAggregateInput = {
    id?: SortOrder
    totalSeats?: SortOrder
  }

  export type TrainMaxOrderByAggregateInput = {
    id?: SortOrder
    trainNumber?: SortOrder
    name?: SortOrder
    source?: SortOrder
    destination?: SortOrder
    schedule?: SortOrder
    totalSeats?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrainMinOrderByAggregateInput = {
    id?: SortOrder
    trainNumber?: SortOrder
    name?: SortOrder
    source?: SortOrder
    destination?: SortOrder
    schedule?: SortOrder
    totalSeats?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrainSumOrderByAggregateInput = {
    id?: SortOrder
    totalSeats?: SortOrder
  }

  export type StationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type TrainRelationFilter = {
    is?: TrainWhereInput
    isNot?: TrainWhereInput
  }

  export type StationRelationFilter = {
    is?: StationWhereInput
    isNot?: StationWhereInput
  }

  export type TrainRouteTrainIdSourceStationIdDestStationIdCompoundUniqueInput = {
    trainId: number
    sourceStationId: number
    destStationId: number
  }

  export type TrainRouteCountOrderByAggregateInput = {
    id?: SortOrder
    trainId?: SortOrder
    sourceStationId?: SortOrder
    destStationId?: SortOrder
    departureTime?: SortOrder
    arrivalTime?: SortOrder
    distance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrainRouteAvgOrderByAggregateInput = {
    id?: SortOrder
    trainId?: SortOrder
    sourceStationId?: SortOrder
    destStationId?: SortOrder
    distance?: SortOrder
  }

  export type TrainRouteMaxOrderByAggregateInput = {
    id?: SortOrder
    trainId?: SortOrder
    sourceStationId?: SortOrder
    destStationId?: SortOrder
    departureTime?: SortOrder
    arrivalTime?: SortOrder
    distance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrainRouteMinOrderByAggregateInput = {
    id?: SortOrder
    trainId?: SortOrder
    sourceStationId?: SortOrder
    destStationId?: SortOrder
    departureTime?: SortOrder
    arrivalTime?: SortOrder
    distance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrainRouteSumOrderByAggregateInput = {
    id?: SortOrder
    trainId?: SortOrder
    sourceStationId?: SortOrder
    destStationId?: SortOrder
    distance?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SeatTrainIdSeatNumberCompoundUniqueInput = {
    trainId: number
    seatNumber: number
  }

  export type SeatCountOrderByAggregateInput = {
    id?: SortOrder
    trainId?: SortOrder
    seatNumber?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeatAvgOrderByAggregateInput = {
    id?: SortOrder
    trainId?: SortOrder
    seatNumber?: SortOrder
  }

  export type SeatMaxOrderByAggregateInput = {
    id?: SortOrder
    trainId?: SortOrder
    seatNumber?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeatMinOrderByAggregateInput = {
    id?: SortOrder
    trainId?: SortOrder
    seatNumber?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeatSumOrderByAggregateInput = {
    id?: SortOrder
    trainId?: SortOrder
    seatNumber?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SeatRelationFilter = {
    is?: SeatWhereInput
    isNot?: SeatWhereInput
  }

  export type BookingTrainIdSeatIdJourneyDateCompoundUniqueInput = {
    trainId: number
    seatId: number
    journeyDate: Date | string
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    trainId?: SortOrder
    seatId?: SortOrder
    sourceId?: SortOrder
    destinationId?: SortOrder
    bookingDate?: SortOrder
    journeyDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    trainId?: SortOrder
    seatId?: SortOrder
    sourceId?: SortOrder
    destinationId?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    trainId?: SortOrder
    seatId?: SortOrder
    sourceId?: SortOrder
    destinationId?: SortOrder
    bookingDate?: SortOrder
    journeyDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    trainId?: SortOrder
    seatId?: SortOrder
    sourceId?: SortOrder
    destinationId?: SortOrder
    bookingDate?: SortOrder
    journeyDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    trainId?: SortOrder
    seatId?: SortOrder
    sourceId?: SortOrder
    destinationId?: SortOrder
  }

  export type BookingCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BookingUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingCreateNestedManyWithoutTrainInput = {
    create?: XOR<BookingCreateWithoutTrainInput, BookingUncheckedCreateWithoutTrainInput> | BookingCreateWithoutTrainInput[] | BookingUncheckedCreateWithoutTrainInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutTrainInput | BookingCreateOrConnectWithoutTrainInput[]
    createMany?: BookingCreateManyTrainInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type TrainRouteCreateNestedManyWithoutTrainInput = {
    create?: XOR<TrainRouteCreateWithoutTrainInput, TrainRouteUncheckedCreateWithoutTrainInput> | TrainRouteCreateWithoutTrainInput[] | TrainRouteUncheckedCreateWithoutTrainInput[]
    connectOrCreate?: TrainRouteCreateOrConnectWithoutTrainInput | TrainRouteCreateOrConnectWithoutTrainInput[]
    createMany?: TrainRouteCreateManyTrainInputEnvelope
    connect?: TrainRouteWhereUniqueInput | TrainRouteWhereUniqueInput[]
  }

  export type SeatCreateNestedManyWithoutTrainInput = {
    create?: XOR<SeatCreateWithoutTrainInput, SeatUncheckedCreateWithoutTrainInput> | SeatCreateWithoutTrainInput[] | SeatUncheckedCreateWithoutTrainInput[]
    connectOrCreate?: SeatCreateOrConnectWithoutTrainInput | SeatCreateOrConnectWithoutTrainInput[]
    createMany?: SeatCreateManyTrainInputEnvelope
    connect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutTrainInput = {
    create?: XOR<BookingCreateWithoutTrainInput, BookingUncheckedCreateWithoutTrainInput> | BookingCreateWithoutTrainInput[] | BookingUncheckedCreateWithoutTrainInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutTrainInput | BookingCreateOrConnectWithoutTrainInput[]
    createMany?: BookingCreateManyTrainInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type TrainRouteUncheckedCreateNestedManyWithoutTrainInput = {
    create?: XOR<TrainRouteCreateWithoutTrainInput, TrainRouteUncheckedCreateWithoutTrainInput> | TrainRouteCreateWithoutTrainInput[] | TrainRouteUncheckedCreateWithoutTrainInput[]
    connectOrCreate?: TrainRouteCreateOrConnectWithoutTrainInput | TrainRouteCreateOrConnectWithoutTrainInput[]
    createMany?: TrainRouteCreateManyTrainInputEnvelope
    connect?: TrainRouteWhereUniqueInput | TrainRouteWhereUniqueInput[]
  }

  export type SeatUncheckedCreateNestedManyWithoutTrainInput = {
    create?: XOR<SeatCreateWithoutTrainInput, SeatUncheckedCreateWithoutTrainInput> | SeatCreateWithoutTrainInput[] | SeatUncheckedCreateWithoutTrainInput[]
    connectOrCreate?: SeatCreateOrConnectWithoutTrainInput | SeatCreateOrConnectWithoutTrainInput[]
    createMany?: SeatCreateManyTrainInputEnvelope
    connect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
  }

  export type BookingUpdateManyWithoutTrainNestedInput = {
    create?: XOR<BookingCreateWithoutTrainInput, BookingUncheckedCreateWithoutTrainInput> | BookingCreateWithoutTrainInput[] | BookingUncheckedCreateWithoutTrainInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutTrainInput | BookingCreateOrConnectWithoutTrainInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutTrainInput | BookingUpsertWithWhereUniqueWithoutTrainInput[]
    createMany?: BookingCreateManyTrainInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutTrainInput | BookingUpdateWithWhereUniqueWithoutTrainInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutTrainInput | BookingUpdateManyWithWhereWithoutTrainInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type TrainRouteUpdateManyWithoutTrainNestedInput = {
    create?: XOR<TrainRouteCreateWithoutTrainInput, TrainRouteUncheckedCreateWithoutTrainInput> | TrainRouteCreateWithoutTrainInput[] | TrainRouteUncheckedCreateWithoutTrainInput[]
    connectOrCreate?: TrainRouteCreateOrConnectWithoutTrainInput | TrainRouteCreateOrConnectWithoutTrainInput[]
    upsert?: TrainRouteUpsertWithWhereUniqueWithoutTrainInput | TrainRouteUpsertWithWhereUniqueWithoutTrainInput[]
    createMany?: TrainRouteCreateManyTrainInputEnvelope
    set?: TrainRouteWhereUniqueInput | TrainRouteWhereUniqueInput[]
    disconnect?: TrainRouteWhereUniqueInput | TrainRouteWhereUniqueInput[]
    delete?: TrainRouteWhereUniqueInput | TrainRouteWhereUniqueInput[]
    connect?: TrainRouteWhereUniqueInput | TrainRouteWhereUniqueInput[]
    update?: TrainRouteUpdateWithWhereUniqueWithoutTrainInput | TrainRouteUpdateWithWhereUniqueWithoutTrainInput[]
    updateMany?: TrainRouteUpdateManyWithWhereWithoutTrainInput | TrainRouteUpdateManyWithWhereWithoutTrainInput[]
    deleteMany?: TrainRouteScalarWhereInput | TrainRouteScalarWhereInput[]
  }

  export type SeatUpdateManyWithoutTrainNestedInput = {
    create?: XOR<SeatCreateWithoutTrainInput, SeatUncheckedCreateWithoutTrainInput> | SeatCreateWithoutTrainInput[] | SeatUncheckedCreateWithoutTrainInput[]
    connectOrCreate?: SeatCreateOrConnectWithoutTrainInput | SeatCreateOrConnectWithoutTrainInput[]
    upsert?: SeatUpsertWithWhereUniqueWithoutTrainInput | SeatUpsertWithWhereUniqueWithoutTrainInput[]
    createMany?: SeatCreateManyTrainInputEnvelope
    set?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    disconnect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    delete?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    connect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    update?: SeatUpdateWithWhereUniqueWithoutTrainInput | SeatUpdateWithWhereUniqueWithoutTrainInput[]
    updateMany?: SeatUpdateManyWithWhereWithoutTrainInput | SeatUpdateManyWithWhereWithoutTrainInput[]
    deleteMany?: SeatScalarWhereInput | SeatScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutTrainNestedInput = {
    create?: XOR<BookingCreateWithoutTrainInput, BookingUncheckedCreateWithoutTrainInput> | BookingCreateWithoutTrainInput[] | BookingUncheckedCreateWithoutTrainInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutTrainInput | BookingCreateOrConnectWithoutTrainInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutTrainInput | BookingUpsertWithWhereUniqueWithoutTrainInput[]
    createMany?: BookingCreateManyTrainInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutTrainInput | BookingUpdateWithWhereUniqueWithoutTrainInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutTrainInput | BookingUpdateManyWithWhereWithoutTrainInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type TrainRouteUncheckedUpdateManyWithoutTrainNestedInput = {
    create?: XOR<TrainRouteCreateWithoutTrainInput, TrainRouteUncheckedCreateWithoutTrainInput> | TrainRouteCreateWithoutTrainInput[] | TrainRouteUncheckedCreateWithoutTrainInput[]
    connectOrCreate?: TrainRouteCreateOrConnectWithoutTrainInput | TrainRouteCreateOrConnectWithoutTrainInput[]
    upsert?: TrainRouteUpsertWithWhereUniqueWithoutTrainInput | TrainRouteUpsertWithWhereUniqueWithoutTrainInput[]
    createMany?: TrainRouteCreateManyTrainInputEnvelope
    set?: TrainRouteWhereUniqueInput | TrainRouteWhereUniqueInput[]
    disconnect?: TrainRouteWhereUniqueInput | TrainRouteWhereUniqueInput[]
    delete?: TrainRouteWhereUniqueInput | TrainRouteWhereUniqueInput[]
    connect?: TrainRouteWhereUniqueInput | TrainRouteWhereUniqueInput[]
    update?: TrainRouteUpdateWithWhereUniqueWithoutTrainInput | TrainRouteUpdateWithWhereUniqueWithoutTrainInput[]
    updateMany?: TrainRouteUpdateManyWithWhereWithoutTrainInput | TrainRouteUpdateManyWithWhereWithoutTrainInput[]
    deleteMany?: TrainRouteScalarWhereInput | TrainRouteScalarWhereInput[]
  }

  export type SeatUncheckedUpdateManyWithoutTrainNestedInput = {
    create?: XOR<SeatCreateWithoutTrainInput, SeatUncheckedCreateWithoutTrainInput> | SeatCreateWithoutTrainInput[] | SeatUncheckedCreateWithoutTrainInput[]
    connectOrCreate?: SeatCreateOrConnectWithoutTrainInput | SeatCreateOrConnectWithoutTrainInput[]
    upsert?: SeatUpsertWithWhereUniqueWithoutTrainInput | SeatUpsertWithWhereUniqueWithoutTrainInput[]
    createMany?: SeatCreateManyTrainInputEnvelope
    set?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    disconnect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    delete?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    connect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    update?: SeatUpdateWithWhereUniqueWithoutTrainInput | SeatUpdateWithWhereUniqueWithoutTrainInput[]
    updateMany?: SeatUpdateManyWithWhereWithoutTrainInput | SeatUpdateManyWithWhereWithoutTrainInput[]
    deleteMany?: SeatScalarWhereInput | SeatScalarWhereInput[]
  }

  export type TrainRouteCreateNestedManyWithoutSourceStationInput = {
    create?: XOR<TrainRouteCreateWithoutSourceStationInput, TrainRouteUncheckedCreateWithoutSourceStationInput> | TrainRouteCreateWithoutSourceStationInput[] | TrainRouteUncheckedCreateWithoutSourceStationInput[]
    connectOrCreate?: TrainRouteCreateOrConnectWithoutSourceStationInput | TrainRouteCreateOrConnectWithoutSourceStationInput[]
    createMany?: TrainRouteCreateManySourceStationInputEnvelope
    connect?: TrainRouteWhereUniqueInput | TrainRouteWhereUniqueInput[]
  }

  export type TrainRouteCreateNestedManyWithoutDestStationInput = {
    create?: XOR<TrainRouteCreateWithoutDestStationInput, TrainRouteUncheckedCreateWithoutDestStationInput> | TrainRouteCreateWithoutDestStationInput[] | TrainRouteUncheckedCreateWithoutDestStationInput[]
    connectOrCreate?: TrainRouteCreateOrConnectWithoutDestStationInput | TrainRouteCreateOrConnectWithoutDestStationInput[]
    createMany?: TrainRouteCreateManyDestStationInputEnvelope
    connect?: TrainRouteWhereUniqueInput | TrainRouteWhereUniqueInput[]
  }

  export type TrainRouteUncheckedCreateNestedManyWithoutSourceStationInput = {
    create?: XOR<TrainRouteCreateWithoutSourceStationInput, TrainRouteUncheckedCreateWithoutSourceStationInput> | TrainRouteCreateWithoutSourceStationInput[] | TrainRouteUncheckedCreateWithoutSourceStationInput[]
    connectOrCreate?: TrainRouteCreateOrConnectWithoutSourceStationInput | TrainRouteCreateOrConnectWithoutSourceStationInput[]
    createMany?: TrainRouteCreateManySourceStationInputEnvelope
    connect?: TrainRouteWhereUniqueInput | TrainRouteWhereUniqueInput[]
  }

  export type TrainRouteUncheckedCreateNestedManyWithoutDestStationInput = {
    create?: XOR<TrainRouteCreateWithoutDestStationInput, TrainRouteUncheckedCreateWithoutDestStationInput> | TrainRouteCreateWithoutDestStationInput[] | TrainRouteUncheckedCreateWithoutDestStationInput[]
    connectOrCreate?: TrainRouteCreateOrConnectWithoutDestStationInput | TrainRouteCreateOrConnectWithoutDestStationInput[]
    createMany?: TrainRouteCreateManyDestStationInputEnvelope
    connect?: TrainRouteWhereUniqueInput | TrainRouteWhereUniqueInput[]
  }

  export type TrainRouteUpdateManyWithoutSourceStationNestedInput = {
    create?: XOR<TrainRouteCreateWithoutSourceStationInput, TrainRouteUncheckedCreateWithoutSourceStationInput> | TrainRouteCreateWithoutSourceStationInput[] | TrainRouteUncheckedCreateWithoutSourceStationInput[]
    connectOrCreate?: TrainRouteCreateOrConnectWithoutSourceStationInput | TrainRouteCreateOrConnectWithoutSourceStationInput[]
    upsert?: TrainRouteUpsertWithWhereUniqueWithoutSourceStationInput | TrainRouteUpsertWithWhereUniqueWithoutSourceStationInput[]
    createMany?: TrainRouteCreateManySourceStationInputEnvelope
    set?: TrainRouteWhereUniqueInput | TrainRouteWhereUniqueInput[]
    disconnect?: TrainRouteWhereUniqueInput | TrainRouteWhereUniqueInput[]
    delete?: TrainRouteWhereUniqueInput | TrainRouteWhereUniqueInput[]
    connect?: TrainRouteWhereUniqueInput | TrainRouteWhereUniqueInput[]
    update?: TrainRouteUpdateWithWhereUniqueWithoutSourceStationInput | TrainRouteUpdateWithWhereUniqueWithoutSourceStationInput[]
    updateMany?: TrainRouteUpdateManyWithWhereWithoutSourceStationInput | TrainRouteUpdateManyWithWhereWithoutSourceStationInput[]
    deleteMany?: TrainRouteScalarWhereInput | TrainRouteScalarWhereInput[]
  }

  export type TrainRouteUpdateManyWithoutDestStationNestedInput = {
    create?: XOR<TrainRouteCreateWithoutDestStationInput, TrainRouteUncheckedCreateWithoutDestStationInput> | TrainRouteCreateWithoutDestStationInput[] | TrainRouteUncheckedCreateWithoutDestStationInput[]
    connectOrCreate?: TrainRouteCreateOrConnectWithoutDestStationInput | TrainRouteCreateOrConnectWithoutDestStationInput[]
    upsert?: TrainRouteUpsertWithWhereUniqueWithoutDestStationInput | TrainRouteUpsertWithWhereUniqueWithoutDestStationInput[]
    createMany?: TrainRouteCreateManyDestStationInputEnvelope
    set?: TrainRouteWhereUniqueInput | TrainRouteWhereUniqueInput[]
    disconnect?: TrainRouteWhereUniqueInput | TrainRouteWhereUniqueInput[]
    delete?: TrainRouteWhereUniqueInput | TrainRouteWhereUniqueInput[]
    connect?: TrainRouteWhereUniqueInput | TrainRouteWhereUniqueInput[]
    update?: TrainRouteUpdateWithWhereUniqueWithoutDestStationInput | TrainRouteUpdateWithWhereUniqueWithoutDestStationInput[]
    updateMany?: TrainRouteUpdateManyWithWhereWithoutDestStationInput | TrainRouteUpdateManyWithWhereWithoutDestStationInput[]
    deleteMany?: TrainRouteScalarWhereInput | TrainRouteScalarWhereInput[]
  }

  export type TrainRouteUncheckedUpdateManyWithoutSourceStationNestedInput = {
    create?: XOR<TrainRouteCreateWithoutSourceStationInput, TrainRouteUncheckedCreateWithoutSourceStationInput> | TrainRouteCreateWithoutSourceStationInput[] | TrainRouteUncheckedCreateWithoutSourceStationInput[]
    connectOrCreate?: TrainRouteCreateOrConnectWithoutSourceStationInput | TrainRouteCreateOrConnectWithoutSourceStationInput[]
    upsert?: TrainRouteUpsertWithWhereUniqueWithoutSourceStationInput | TrainRouteUpsertWithWhereUniqueWithoutSourceStationInput[]
    createMany?: TrainRouteCreateManySourceStationInputEnvelope
    set?: TrainRouteWhereUniqueInput | TrainRouteWhereUniqueInput[]
    disconnect?: TrainRouteWhereUniqueInput | TrainRouteWhereUniqueInput[]
    delete?: TrainRouteWhereUniqueInput | TrainRouteWhereUniqueInput[]
    connect?: TrainRouteWhereUniqueInput | TrainRouteWhereUniqueInput[]
    update?: TrainRouteUpdateWithWhereUniqueWithoutSourceStationInput | TrainRouteUpdateWithWhereUniqueWithoutSourceStationInput[]
    updateMany?: TrainRouteUpdateManyWithWhereWithoutSourceStationInput | TrainRouteUpdateManyWithWhereWithoutSourceStationInput[]
    deleteMany?: TrainRouteScalarWhereInput | TrainRouteScalarWhereInput[]
  }

  export type TrainRouteUncheckedUpdateManyWithoutDestStationNestedInput = {
    create?: XOR<TrainRouteCreateWithoutDestStationInput, TrainRouteUncheckedCreateWithoutDestStationInput> | TrainRouteCreateWithoutDestStationInput[] | TrainRouteUncheckedCreateWithoutDestStationInput[]
    connectOrCreate?: TrainRouteCreateOrConnectWithoutDestStationInput | TrainRouteCreateOrConnectWithoutDestStationInput[]
    upsert?: TrainRouteUpsertWithWhereUniqueWithoutDestStationInput | TrainRouteUpsertWithWhereUniqueWithoutDestStationInput[]
    createMany?: TrainRouteCreateManyDestStationInputEnvelope
    set?: TrainRouteWhereUniqueInput | TrainRouteWhereUniqueInput[]
    disconnect?: TrainRouteWhereUniqueInput | TrainRouteWhereUniqueInput[]
    delete?: TrainRouteWhereUniqueInput | TrainRouteWhereUniqueInput[]
    connect?: TrainRouteWhereUniqueInput | TrainRouteWhereUniqueInput[]
    update?: TrainRouteUpdateWithWhereUniqueWithoutDestStationInput | TrainRouteUpdateWithWhereUniqueWithoutDestStationInput[]
    updateMany?: TrainRouteUpdateManyWithWhereWithoutDestStationInput | TrainRouteUpdateManyWithWhereWithoutDestStationInput[]
    deleteMany?: TrainRouteScalarWhereInput | TrainRouteScalarWhereInput[]
  }

  export type TrainCreateNestedOneWithoutTrainRoutesInput = {
    create?: XOR<TrainCreateWithoutTrainRoutesInput, TrainUncheckedCreateWithoutTrainRoutesInput>
    connectOrCreate?: TrainCreateOrConnectWithoutTrainRoutesInput
    connect?: TrainWhereUniqueInput
  }

  export type StationCreateNestedOneWithoutSourceRoutesInput = {
    create?: XOR<StationCreateWithoutSourceRoutesInput, StationUncheckedCreateWithoutSourceRoutesInput>
    connectOrCreate?: StationCreateOrConnectWithoutSourceRoutesInput
    connect?: StationWhereUniqueInput
  }

  export type StationCreateNestedOneWithoutDestRoutesInput = {
    create?: XOR<StationCreateWithoutDestRoutesInput, StationUncheckedCreateWithoutDestRoutesInput>
    connectOrCreate?: StationCreateOrConnectWithoutDestRoutesInput
    connect?: StationWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TrainUpdateOneRequiredWithoutTrainRoutesNestedInput = {
    create?: XOR<TrainCreateWithoutTrainRoutesInput, TrainUncheckedCreateWithoutTrainRoutesInput>
    connectOrCreate?: TrainCreateOrConnectWithoutTrainRoutesInput
    upsert?: TrainUpsertWithoutTrainRoutesInput
    connect?: TrainWhereUniqueInput
    update?: XOR<XOR<TrainUpdateToOneWithWhereWithoutTrainRoutesInput, TrainUpdateWithoutTrainRoutesInput>, TrainUncheckedUpdateWithoutTrainRoutesInput>
  }

  export type StationUpdateOneRequiredWithoutSourceRoutesNestedInput = {
    create?: XOR<StationCreateWithoutSourceRoutesInput, StationUncheckedCreateWithoutSourceRoutesInput>
    connectOrCreate?: StationCreateOrConnectWithoutSourceRoutesInput
    upsert?: StationUpsertWithoutSourceRoutesInput
    connect?: StationWhereUniqueInput
    update?: XOR<XOR<StationUpdateToOneWithWhereWithoutSourceRoutesInput, StationUpdateWithoutSourceRoutesInput>, StationUncheckedUpdateWithoutSourceRoutesInput>
  }

  export type StationUpdateOneRequiredWithoutDestRoutesNestedInput = {
    create?: XOR<StationCreateWithoutDestRoutesInput, StationUncheckedCreateWithoutDestRoutesInput>
    connectOrCreate?: StationCreateOrConnectWithoutDestRoutesInput
    upsert?: StationUpsertWithoutDestRoutesInput
    connect?: StationWhereUniqueInput
    update?: XOR<XOR<StationUpdateToOneWithWhereWithoutDestRoutesInput, StationUpdateWithoutDestRoutesInput>, StationUncheckedUpdateWithoutDestRoutesInput>
  }

  export type TrainCreateNestedOneWithoutSeatsInput = {
    create?: XOR<TrainCreateWithoutSeatsInput, TrainUncheckedCreateWithoutSeatsInput>
    connectOrCreate?: TrainCreateOrConnectWithoutSeatsInput
    connect?: TrainWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutSeatInput = {
    create?: XOR<BookingCreateWithoutSeatInput, BookingUncheckedCreateWithoutSeatInput> | BookingCreateWithoutSeatInput[] | BookingUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutSeatInput | BookingCreateOrConnectWithoutSeatInput[]
    createMany?: BookingCreateManySeatInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutSeatInput = {
    create?: XOR<BookingCreateWithoutSeatInput, BookingUncheckedCreateWithoutSeatInput> | BookingCreateWithoutSeatInput[] | BookingUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutSeatInput | BookingCreateOrConnectWithoutSeatInput[]
    createMany?: BookingCreateManySeatInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TrainUpdateOneRequiredWithoutSeatsNestedInput = {
    create?: XOR<TrainCreateWithoutSeatsInput, TrainUncheckedCreateWithoutSeatsInput>
    connectOrCreate?: TrainCreateOrConnectWithoutSeatsInput
    upsert?: TrainUpsertWithoutSeatsInput
    connect?: TrainWhereUniqueInput
    update?: XOR<XOR<TrainUpdateToOneWithWhereWithoutSeatsInput, TrainUpdateWithoutSeatsInput>, TrainUncheckedUpdateWithoutSeatsInput>
  }

  export type BookingUpdateManyWithoutSeatNestedInput = {
    create?: XOR<BookingCreateWithoutSeatInput, BookingUncheckedCreateWithoutSeatInput> | BookingCreateWithoutSeatInput[] | BookingUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutSeatInput | BookingCreateOrConnectWithoutSeatInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutSeatInput | BookingUpsertWithWhereUniqueWithoutSeatInput[]
    createMany?: BookingCreateManySeatInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutSeatInput | BookingUpdateWithWhereUniqueWithoutSeatInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutSeatInput | BookingUpdateManyWithWhereWithoutSeatInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutSeatNestedInput = {
    create?: XOR<BookingCreateWithoutSeatInput, BookingUncheckedCreateWithoutSeatInput> | BookingCreateWithoutSeatInput[] | BookingUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutSeatInput | BookingCreateOrConnectWithoutSeatInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutSeatInput | BookingUpsertWithWhereUniqueWithoutSeatInput[]
    createMany?: BookingCreateManySeatInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutSeatInput | BookingUpdateWithWhereUniqueWithoutSeatInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutSeatInput | BookingUpdateManyWithWhereWithoutSeatInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBookingsInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    connect?: UserWhereUniqueInput
  }

  export type TrainCreateNestedOneWithoutBookingsInput = {
    create?: XOR<TrainCreateWithoutBookingsInput, TrainUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: TrainCreateOrConnectWithoutBookingsInput
    connect?: TrainWhereUniqueInput
  }

  export type SeatCreateNestedOneWithoutBookingsInput = {
    create?: XOR<SeatCreateWithoutBookingsInput, SeatUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: SeatCreateOrConnectWithoutBookingsInput
    connect?: SeatWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    upsert?: UserUpsertWithoutBookingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingsInput, UserUpdateWithoutBookingsInput>, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type TrainUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<TrainCreateWithoutBookingsInput, TrainUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: TrainCreateOrConnectWithoutBookingsInput
    upsert?: TrainUpsertWithoutBookingsInput
    connect?: TrainWhereUniqueInput
    update?: XOR<XOR<TrainUpdateToOneWithWhereWithoutBookingsInput, TrainUpdateWithoutBookingsInput>, TrainUncheckedUpdateWithoutBookingsInput>
  }

  export type SeatUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<SeatCreateWithoutBookingsInput, SeatUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: SeatCreateOrConnectWithoutBookingsInput
    upsert?: SeatUpsertWithoutBookingsInput
    connect?: SeatWhereUniqueInput
    update?: XOR<XOR<SeatUpdateToOneWithWhereWithoutBookingsInput, SeatUpdateWithoutBookingsInput>, SeatUncheckedUpdateWithoutBookingsInput>
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type BookingCreateWithoutUserInput = {
    sourceId: number
    destinationId: number
    bookingDate?: Date | string
    journeyDate: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    train: TrainCreateNestedOneWithoutBookingsInput
    seat: SeatCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutUserInput = {
    id?: number
    trainId: number
    seatId: number
    sourceId: number
    destinationId: number
    bookingDate?: Date | string
    journeyDate: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutUserInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingCreateManyUserInputEnvelope = {
    data: BookingCreateManyUserInput | BookingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BookingUpsertWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
  }

  export type BookingUpdateManyWithWhereWithoutUserInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutUserInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: IntFilter<"Booking"> | number
    userId?: IntFilter<"Booking"> | number
    trainId?: IntFilter<"Booking"> | number
    seatId?: IntFilter<"Booking"> | number
    sourceId?: IntFilter<"Booking"> | number
    destinationId?: IntFilter<"Booking"> | number
    bookingDate?: DateTimeFilter<"Booking"> | Date | string
    journeyDate?: DateTimeFilter<"Booking"> | Date | string
    status?: StringFilter<"Booking"> | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
  }

  export type BookingCreateWithoutTrainInput = {
    sourceId: number
    destinationId: number
    bookingDate?: Date | string
    journeyDate: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    seat: SeatCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutTrainInput = {
    id?: number
    userId: number
    seatId: number
    sourceId: number
    destinationId: number
    bookingDate?: Date | string
    journeyDate: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutTrainInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutTrainInput, BookingUncheckedCreateWithoutTrainInput>
  }

  export type BookingCreateManyTrainInputEnvelope = {
    data: BookingCreateManyTrainInput | BookingCreateManyTrainInput[]
    skipDuplicates?: boolean
  }

  export type TrainRouteCreateWithoutTrainInput = {
    departureTime: Date | string
    arrivalTime: Date | string
    distance: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sourceStation: StationCreateNestedOneWithoutSourceRoutesInput
    destStation: StationCreateNestedOneWithoutDestRoutesInput
  }

  export type TrainRouteUncheckedCreateWithoutTrainInput = {
    id?: number
    sourceStationId: number
    destStationId: number
    departureTime: Date | string
    arrivalTime: Date | string
    distance: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrainRouteCreateOrConnectWithoutTrainInput = {
    where: TrainRouteWhereUniqueInput
    create: XOR<TrainRouteCreateWithoutTrainInput, TrainRouteUncheckedCreateWithoutTrainInput>
  }

  export type TrainRouteCreateManyTrainInputEnvelope = {
    data: TrainRouteCreateManyTrainInput | TrainRouteCreateManyTrainInput[]
    skipDuplicates?: boolean
  }

  export type SeatCreateWithoutTrainInput = {
    seatNumber: number
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutSeatInput
  }

  export type SeatUncheckedCreateWithoutTrainInput = {
    id?: number
    seatNumber: number
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutSeatInput
  }

  export type SeatCreateOrConnectWithoutTrainInput = {
    where: SeatWhereUniqueInput
    create: XOR<SeatCreateWithoutTrainInput, SeatUncheckedCreateWithoutTrainInput>
  }

  export type SeatCreateManyTrainInputEnvelope = {
    data: SeatCreateManyTrainInput | SeatCreateManyTrainInput[]
    skipDuplicates?: boolean
  }

  export type BookingUpsertWithWhereUniqueWithoutTrainInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutTrainInput, BookingUncheckedUpdateWithoutTrainInput>
    create: XOR<BookingCreateWithoutTrainInput, BookingUncheckedCreateWithoutTrainInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutTrainInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutTrainInput, BookingUncheckedUpdateWithoutTrainInput>
  }

  export type BookingUpdateManyWithWhereWithoutTrainInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutTrainInput>
  }

  export type TrainRouteUpsertWithWhereUniqueWithoutTrainInput = {
    where: TrainRouteWhereUniqueInput
    update: XOR<TrainRouteUpdateWithoutTrainInput, TrainRouteUncheckedUpdateWithoutTrainInput>
    create: XOR<TrainRouteCreateWithoutTrainInput, TrainRouteUncheckedCreateWithoutTrainInput>
  }

  export type TrainRouteUpdateWithWhereUniqueWithoutTrainInput = {
    where: TrainRouteWhereUniqueInput
    data: XOR<TrainRouteUpdateWithoutTrainInput, TrainRouteUncheckedUpdateWithoutTrainInput>
  }

  export type TrainRouteUpdateManyWithWhereWithoutTrainInput = {
    where: TrainRouteScalarWhereInput
    data: XOR<TrainRouteUpdateManyMutationInput, TrainRouteUncheckedUpdateManyWithoutTrainInput>
  }

  export type TrainRouteScalarWhereInput = {
    AND?: TrainRouteScalarWhereInput | TrainRouteScalarWhereInput[]
    OR?: TrainRouteScalarWhereInput[]
    NOT?: TrainRouteScalarWhereInput | TrainRouteScalarWhereInput[]
    id?: IntFilter<"TrainRoute"> | number
    trainId?: IntFilter<"TrainRoute"> | number
    sourceStationId?: IntFilter<"TrainRoute"> | number
    destStationId?: IntFilter<"TrainRoute"> | number
    departureTime?: DateTimeFilter<"TrainRoute"> | Date | string
    arrivalTime?: DateTimeFilter<"TrainRoute"> | Date | string
    distance?: FloatFilter<"TrainRoute"> | number
    createdAt?: DateTimeFilter<"TrainRoute"> | Date | string
    updatedAt?: DateTimeFilter<"TrainRoute"> | Date | string
  }

  export type SeatUpsertWithWhereUniqueWithoutTrainInput = {
    where: SeatWhereUniqueInput
    update: XOR<SeatUpdateWithoutTrainInput, SeatUncheckedUpdateWithoutTrainInput>
    create: XOR<SeatCreateWithoutTrainInput, SeatUncheckedCreateWithoutTrainInput>
  }

  export type SeatUpdateWithWhereUniqueWithoutTrainInput = {
    where: SeatWhereUniqueInput
    data: XOR<SeatUpdateWithoutTrainInput, SeatUncheckedUpdateWithoutTrainInput>
  }

  export type SeatUpdateManyWithWhereWithoutTrainInput = {
    where: SeatScalarWhereInput
    data: XOR<SeatUpdateManyMutationInput, SeatUncheckedUpdateManyWithoutTrainInput>
  }

  export type SeatScalarWhereInput = {
    AND?: SeatScalarWhereInput | SeatScalarWhereInput[]
    OR?: SeatScalarWhereInput[]
    NOT?: SeatScalarWhereInput | SeatScalarWhereInput[]
    id?: IntFilter<"Seat"> | number
    trainId?: IntFilter<"Seat"> | number
    seatNumber?: IntFilter<"Seat"> | number
    isAvailable?: BoolFilter<"Seat"> | boolean
    createdAt?: DateTimeFilter<"Seat"> | Date | string
    updatedAt?: DateTimeFilter<"Seat"> | Date | string
  }

  export type TrainRouteCreateWithoutSourceStationInput = {
    departureTime: Date | string
    arrivalTime: Date | string
    distance: number
    createdAt?: Date | string
    updatedAt?: Date | string
    train: TrainCreateNestedOneWithoutTrainRoutesInput
    destStation: StationCreateNestedOneWithoutDestRoutesInput
  }

  export type TrainRouteUncheckedCreateWithoutSourceStationInput = {
    id?: number
    trainId: number
    destStationId: number
    departureTime: Date | string
    arrivalTime: Date | string
    distance: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrainRouteCreateOrConnectWithoutSourceStationInput = {
    where: TrainRouteWhereUniqueInput
    create: XOR<TrainRouteCreateWithoutSourceStationInput, TrainRouteUncheckedCreateWithoutSourceStationInput>
  }

  export type TrainRouteCreateManySourceStationInputEnvelope = {
    data: TrainRouteCreateManySourceStationInput | TrainRouteCreateManySourceStationInput[]
    skipDuplicates?: boolean
  }

  export type TrainRouteCreateWithoutDestStationInput = {
    departureTime: Date | string
    arrivalTime: Date | string
    distance: number
    createdAt?: Date | string
    updatedAt?: Date | string
    train: TrainCreateNestedOneWithoutTrainRoutesInput
    sourceStation: StationCreateNestedOneWithoutSourceRoutesInput
  }

  export type TrainRouteUncheckedCreateWithoutDestStationInput = {
    id?: number
    trainId: number
    sourceStationId: number
    departureTime: Date | string
    arrivalTime: Date | string
    distance: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrainRouteCreateOrConnectWithoutDestStationInput = {
    where: TrainRouteWhereUniqueInput
    create: XOR<TrainRouteCreateWithoutDestStationInput, TrainRouteUncheckedCreateWithoutDestStationInput>
  }

  export type TrainRouteCreateManyDestStationInputEnvelope = {
    data: TrainRouteCreateManyDestStationInput | TrainRouteCreateManyDestStationInput[]
    skipDuplicates?: boolean
  }

  export type TrainRouteUpsertWithWhereUniqueWithoutSourceStationInput = {
    where: TrainRouteWhereUniqueInput
    update: XOR<TrainRouteUpdateWithoutSourceStationInput, TrainRouteUncheckedUpdateWithoutSourceStationInput>
    create: XOR<TrainRouteCreateWithoutSourceStationInput, TrainRouteUncheckedCreateWithoutSourceStationInput>
  }

  export type TrainRouteUpdateWithWhereUniqueWithoutSourceStationInput = {
    where: TrainRouteWhereUniqueInput
    data: XOR<TrainRouteUpdateWithoutSourceStationInput, TrainRouteUncheckedUpdateWithoutSourceStationInput>
  }

  export type TrainRouteUpdateManyWithWhereWithoutSourceStationInput = {
    where: TrainRouteScalarWhereInput
    data: XOR<TrainRouteUpdateManyMutationInput, TrainRouteUncheckedUpdateManyWithoutSourceStationInput>
  }

  export type TrainRouteUpsertWithWhereUniqueWithoutDestStationInput = {
    where: TrainRouteWhereUniqueInput
    update: XOR<TrainRouteUpdateWithoutDestStationInput, TrainRouteUncheckedUpdateWithoutDestStationInput>
    create: XOR<TrainRouteCreateWithoutDestStationInput, TrainRouteUncheckedCreateWithoutDestStationInput>
  }

  export type TrainRouteUpdateWithWhereUniqueWithoutDestStationInput = {
    where: TrainRouteWhereUniqueInput
    data: XOR<TrainRouteUpdateWithoutDestStationInput, TrainRouteUncheckedUpdateWithoutDestStationInput>
  }

  export type TrainRouteUpdateManyWithWhereWithoutDestStationInput = {
    where: TrainRouteScalarWhereInput
    data: XOR<TrainRouteUpdateManyMutationInput, TrainRouteUncheckedUpdateManyWithoutDestStationInput>
  }

  export type TrainCreateWithoutTrainRoutesInput = {
    trainNumber: string
    name: string
    source: string
    destination: string
    schedule: Date | string
    totalSeats?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutTrainInput
    seats?: SeatCreateNestedManyWithoutTrainInput
  }

  export type TrainUncheckedCreateWithoutTrainRoutesInput = {
    id?: number
    trainNumber: string
    name: string
    source: string
    destination: string
    schedule: Date | string
    totalSeats?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutTrainInput
    seats?: SeatUncheckedCreateNestedManyWithoutTrainInput
  }

  export type TrainCreateOrConnectWithoutTrainRoutesInput = {
    where: TrainWhereUniqueInput
    create: XOR<TrainCreateWithoutTrainRoutesInput, TrainUncheckedCreateWithoutTrainRoutesInput>
  }

  export type StationCreateWithoutSourceRoutesInput = {
    name: string
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
    destRoutes?: TrainRouteCreateNestedManyWithoutDestStationInput
  }

  export type StationUncheckedCreateWithoutSourceRoutesInput = {
    id?: number
    name: string
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
    destRoutes?: TrainRouteUncheckedCreateNestedManyWithoutDestStationInput
  }

  export type StationCreateOrConnectWithoutSourceRoutesInput = {
    where: StationWhereUniqueInput
    create: XOR<StationCreateWithoutSourceRoutesInput, StationUncheckedCreateWithoutSourceRoutesInput>
  }

  export type StationCreateWithoutDestRoutesInput = {
    name: string
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sourceRoutes?: TrainRouteCreateNestedManyWithoutSourceStationInput
  }

  export type StationUncheckedCreateWithoutDestRoutesInput = {
    id?: number
    name: string
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sourceRoutes?: TrainRouteUncheckedCreateNestedManyWithoutSourceStationInput
  }

  export type StationCreateOrConnectWithoutDestRoutesInput = {
    where: StationWhereUniqueInput
    create: XOR<StationCreateWithoutDestRoutesInput, StationUncheckedCreateWithoutDestRoutesInput>
  }

  export type TrainUpsertWithoutTrainRoutesInput = {
    update: XOR<TrainUpdateWithoutTrainRoutesInput, TrainUncheckedUpdateWithoutTrainRoutesInput>
    create: XOR<TrainCreateWithoutTrainRoutesInput, TrainUncheckedCreateWithoutTrainRoutesInput>
    where?: TrainWhereInput
  }

  export type TrainUpdateToOneWithWhereWithoutTrainRoutesInput = {
    where?: TrainWhereInput
    data: XOR<TrainUpdateWithoutTrainRoutesInput, TrainUncheckedUpdateWithoutTrainRoutesInput>
  }

  export type TrainUpdateWithoutTrainRoutesInput = {
    trainNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    schedule?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutTrainNestedInput
    seats?: SeatUpdateManyWithoutTrainNestedInput
  }

  export type TrainUncheckedUpdateWithoutTrainRoutesInput = {
    id?: IntFieldUpdateOperationsInput | number
    trainNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    schedule?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutTrainNestedInput
    seats?: SeatUncheckedUpdateManyWithoutTrainNestedInput
  }

  export type StationUpsertWithoutSourceRoutesInput = {
    update: XOR<StationUpdateWithoutSourceRoutesInput, StationUncheckedUpdateWithoutSourceRoutesInput>
    create: XOR<StationCreateWithoutSourceRoutesInput, StationUncheckedCreateWithoutSourceRoutesInput>
    where?: StationWhereInput
  }

  export type StationUpdateToOneWithWhereWithoutSourceRoutesInput = {
    where?: StationWhereInput
    data: XOR<StationUpdateWithoutSourceRoutesInput, StationUncheckedUpdateWithoutSourceRoutesInput>
  }

  export type StationUpdateWithoutSourceRoutesInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    destRoutes?: TrainRouteUpdateManyWithoutDestStationNestedInput
  }

  export type StationUncheckedUpdateWithoutSourceRoutesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    destRoutes?: TrainRouteUncheckedUpdateManyWithoutDestStationNestedInput
  }

  export type StationUpsertWithoutDestRoutesInput = {
    update: XOR<StationUpdateWithoutDestRoutesInput, StationUncheckedUpdateWithoutDestRoutesInput>
    create: XOR<StationCreateWithoutDestRoutesInput, StationUncheckedCreateWithoutDestRoutesInput>
    where?: StationWhereInput
  }

  export type StationUpdateToOneWithWhereWithoutDestRoutesInput = {
    where?: StationWhereInput
    data: XOR<StationUpdateWithoutDestRoutesInput, StationUncheckedUpdateWithoutDestRoutesInput>
  }

  export type StationUpdateWithoutDestRoutesInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceRoutes?: TrainRouteUpdateManyWithoutSourceStationNestedInput
  }

  export type StationUncheckedUpdateWithoutDestRoutesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceRoutes?: TrainRouteUncheckedUpdateManyWithoutSourceStationNestedInput
  }

  export type TrainCreateWithoutSeatsInput = {
    trainNumber: string
    name: string
    source: string
    destination: string
    schedule: Date | string
    totalSeats?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutTrainInput
    trainRoutes?: TrainRouteCreateNestedManyWithoutTrainInput
  }

  export type TrainUncheckedCreateWithoutSeatsInput = {
    id?: number
    trainNumber: string
    name: string
    source: string
    destination: string
    schedule: Date | string
    totalSeats?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutTrainInput
    trainRoutes?: TrainRouteUncheckedCreateNestedManyWithoutTrainInput
  }

  export type TrainCreateOrConnectWithoutSeatsInput = {
    where: TrainWhereUniqueInput
    create: XOR<TrainCreateWithoutSeatsInput, TrainUncheckedCreateWithoutSeatsInput>
  }

  export type BookingCreateWithoutSeatInput = {
    sourceId: number
    destinationId: number
    bookingDate?: Date | string
    journeyDate: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    train: TrainCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutSeatInput = {
    id?: number
    userId: number
    trainId: number
    sourceId: number
    destinationId: number
    bookingDate?: Date | string
    journeyDate: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutSeatInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutSeatInput, BookingUncheckedCreateWithoutSeatInput>
  }

  export type BookingCreateManySeatInputEnvelope = {
    data: BookingCreateManySeatInput | BookingCreateManySeatInput[]
    skipDuplicates?: boolean
  }

  export type TrainUpsertWithoutSeatsInput = {
    update: XOR<TrainUpdateWithoutSeatsInput, TrainUncheckedUpdateWithoutSeatsInput>
    create: XOR<TrainCreateWithoutSeatsInput, TrainUncheckedCreateWithoutSeatsInput>
    where?: TrainWhereInput
  }

  export type TrainUpdateToOneWithWhereWithoutSeatsInput = {
    where?: TrainWhereInput
    data: XOR<TrainUpdateWithoutSeatsInput, TrainUncheckedUpdateWithoutSeatsInput>
  }

  export type TrainUpdateWithoutSeatsInput = {
    trainNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    schedule?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutTrainNestedInput
    trainRoutes?: TrainRouteUpdateManyWithoutTrainNestedInput
  }

  export type TrainUncheckedUpdateWithoutSeatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    trainNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    schedule?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutTrainNestedInput
    trainRoutes?: TrainRouteUncheckedUpdateManyWithoutTrainNestedInput
  }

  export type BookingUpsertWithWhereUniqueWithoutSeatInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutSeatInput, BookingUncheckedUpdateWithoutSeatInput>
    create: XOR<BookingCreateWithoutSeatInput, BookingUncheckedCreateWithoutSeatInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutSeatInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutSeatInput, BookingUncheckedUpdateWithoutSeatInput>
  }

  export type BookingUpdateManyWithWhereWithoutSeatInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutSeatInput>
  }

  export type UserCreateWithoutBookingsInput = {
    username: string
    password: string
    email: string
    role?: $Enums.UserRole
    token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutBookingsInput = {
    id?: number
    username: string
    password: string
    email: string
    role?: $Enums.UserRole
    token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutBookingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
  }

  export type TrainCreateWithoutBookingsInput = {
    trainNumber: string
    name: string
    source: string
    destination: string
    schedule: Date | string
    totalSeats?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    trainRoutes?: TrainRouteCreateNestedManyWithoutTrainInput
    seats?: SeatCreateNestedManyWithoutTrainInput
  }

  export type TrainUncheckedCreateWithoutBookingsInput = {
    id?: number
    trainNumber: string
    name: string
    source: string
    destination: string
    schedule: Date | string
    totalSeats?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    trainRoutes?: TrainRouteUncheckedCreateNestedManyWithoutTrainInput
    seats?: SeatUncheckedCreateNestedManyWithoutTrainInput
  }

  export type TrainCreateOrConnectWithoutBookingsInput = {
    where: TrainWhereUniqueInput
    create: XOR<TrainCreateWithoutBookingsInput, TrainUncheckedCreateWithoutBookingsInput>
  }

  export type SeatCreateWithoutBookingsInput = {
    seatNumber: number
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    train: TrainCreateNestedOneWithoutSeatsInput
  }

  export type SeatUncheckedCreateWithoutBookingsInput = {
    id?: number
    trainId: number
    seatNumber: number
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeatCreateOrConnectWithoutBookingsInput = {
    where: SeatWhereUniqueInput
    create: XOR<SeatCreateWithoutBookingsInput, SeatUncheckedCreateWithoutBookingsInput>
  }

  export type UserUpsertWithoutBookingsInput = {
    update: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateWithoutBookingsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainUpsertWithoutBookingsInput = {
    update: XOR<TrainUpdateWithoutBookingsInput, TrainUncheckedUpdateWithoutBookingsInput>
    create: XOR<TrainCreateWithoutBookingsInput, TrainUncheckedCreateWithoutBookingsInput>
    where?: TrainWhereInput
  }

  export type TrainUpdateToOneWithWhereWithoutBookingsInput = {
    where?: TrainWhereInput
    data: XOR<TrainUpdateWithoutBookingsInput, TrainUncheckedUpdateWithoutBookingsInput>
  }

  export type TrainUpdateWithoutBookingsInput = {
    trainNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    schedule?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainRoutes?: TrainRouteUpdateManyWithoutTrainNestedInput
    seats?: SeatUpdateManyWithoutTrainNestedInput
  }

  export type TrainUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    trainNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    schedule?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainRoutes?: TrainRouteUncheckedUpdateManyWithoutTrainNestedInput
    seats?: SeatUncheckedUpdateManyWithoutTrainNestedInput
  }

  export type SeatUpsertWithoutBookingsInput = {
    update: XOR<SeatUpdateWithoutBookingsInput, SeatUncheckedUpdateWithoutBookingsInput>
    create: XOR<SeatCreateWithoutBookingsInput, SeatUncheckedCreateWithoutBookingsInput>
    where?: SeatWhereInput
  }

  export type SeatUpdateToOneWithWhereWithoutBookingsInput = {
    where?: SeatWhereInput
    data: XOR<SeatUpdateWithoutBookingsInput, SeatUncheckedUpdateWithoutBookingsInput>
  }

  export type SeatUpdateWithoutBookingsInput = {
    seatNumber?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    train?: TrainUpdateOneRequiredWithoutSeatsNestedInput
  }

  export type SeatUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    trainId?: IntFieldUpdateOperationsInput | number
    seatNumber?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyUserInput = {
    id?: number
    trainId: number
    seatId: number
    sourceId: number
    destinationId: number
    bookingDate?: Date | string
    journeyDate: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateWithoutUserInput = {
    sourceId?: IntFieldUpdateOperationsInput | number
    destinationId?: IntFieldUpdateOperationsInput | number
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    journeyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    train?: TrainUpdateOneRequiredWithoutBookingsNestedInput
    seat?: SeatUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    trainId?: IntFieldUpdateOperationsInput | number
    seatId?: IntFieldUpdateOperationsInput | number
    sourceId?: IntFieldUpdateOperationsInput | number
    destinationId?: IntFieldUpdateOperationsInput | number
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    journeyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    trainId?: IntFieldUpdateOperationsInput | number
    seatId?: IntFieldUpdateOperationsInput | number
    sourceId?: IntFieldUpdateOperationsInput | number
    destinationId?: IntFieldUpdateOperationsInput | number
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    journeyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyTrainInput = {
    id?: number
    userId: number
    seatId: number
    sourceId: number
    destinationId: number
    bookingDate?: Date | string
    journeyDate: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrainRouteCreateManyTrainInput = {
    id?: number
    sourceStationId: number
    destStationId: number
    departureTime: Date | string
    arrivalTime: Date | string
    distance: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeatCreateManyTrainInput = {
    id?: number
    seatNumber: number
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateWithoutTrainInput = {
    sourceId?: IntFieldUpdateOperationsInput | number
    destinationId?: IntFieldUpdateOperationsInput | number
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    journeyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    seat?: SeatUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutTrainInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    seatId?: IntFieldUpdateOperationsInput | number
    sourceId?: IntFieldUpdateOperationsInput | number
    destinationId?: IntFieldUpdateOperationsInput | number
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    journeyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutTrainInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    seatId?: IntFieldUpdateOperationsInput | number
    sourceId?: IntFieldUpdateOperationsInput | number
    destinationId?: IntFieldUpdateOperationsInput | number
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    journeyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainRouteUpdateWithoutTrainInput = {
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    distance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceStation?: StationUpdateOneRequiredWithoutSourceRoutesNestedInput
    destStation?: StationUpdateOneRequiredWithoutDestRoutesNestedInput
  }

  export type TrainRouteUncheckedUpdateWithoutTrainInput = {
    id?: IntFieldUpdateOperationsInput | number
    sourceStationId?: IntFieldUpdateOperationsInput | number
    destStationId?: IntFieldUpdateOperationsInput | number
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    distance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainRouteUncheckedUpdateManyWithoutTrainInput = {
    id?: IntFieldUpdateOperationsInput | number
    sourceStationId?: IntFieldUpdateOperationsInput | number
    destStationId?: IntFieldUpdateOperationsInput | number
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    distance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeatUpdateWithoutTrainInput = {
    seatNumber?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutSeatNestedInput
  }

  export type SeatUncheckedUpdateWithoutTrainInput = {
    id?: IntFieldUpdateOperationsInput | number
    seatNumber?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutSeatNestedInput
  }

  export type SeatUncheckedUpdateManyWithoutTrainInput = {
    id?: IntFieldUpdateOperationsInput | number
    seatNumber?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainRouteCreateManySourceStationInput = {
    id?: number
    trainId: number
    destStationId: number
    departureTime: Date | string
    arrivalTime: Date | string
    distance: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrainRouteCreateManyDestStationInput = {
    id?: number
    trainId: number
    sourceStationId: number
    departureTime: Date | string
    arrivalTime: Date | string
    distance: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrainRouteUpdateWithoutSourceStationInput = {
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    distance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    train?: TrainUpdateOneRequiredWithoutTrainRoutesNestedInput
    destStation?: StationUpdateOneRequiredWithoutDestRoutesNestedInput
  }

  export type TrainRouteUncheckedUpdateWithoutSourceStationInput = {
    id?: IntFieldUpdateOperationsInput | number
    trainId?: IntFieldUpdateOperationsInput | number
    destStationId?: IntFieldUpdateOperationsInput | number
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    distance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainRouteUncheckedUpdateManyWithoutSourceStationInput = {
    id?: IntFieldUpdateOperationsInput | number
    trainId?: IntFieldUpdateOperationsInput | number
    destStationId?: IntFieldUpdateOperationsInput | number
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    distance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainRouteUpdateWithoutDestStationInput = {
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    distance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    train?: TrainUpdateOneRequiredWithoutTrainRoutesNestedInput
    sourceStation?: StationUpdateOneRequiredWithoutSourceRoutesNestedInput
  }

  export type TrainRouteUncheckedUpdateWithoutDestStationInput = {
    id?: IntFieldUpdateOperationsInput | number
    trainId?: IntFieldUpdateOperationsInput | number
    sourceStationId?: IntFieldUpdateOperationsInput | number
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    distance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainRouteUncheckedUpdateManyWithoutDestStationInput = {
    id?: IntFieldUpdateOperationsInput | number
    trainId?: IntFieldUpdateOperationsInput | number
    sourceStationId?: IntFieldUpdateOperationsInput | number
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    distance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManySeatInput = {
    id?: number
    userId: number
    trainId: number
    sourceId: number
    destinationId: number
    bookingDate?: Date | string
    journeyDate: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateWithoutSeatInput = {
    sourceId?: IntFieldUpdateOperationsInput | number
    destinationId?: IntFieldUpdateOperationsInput | number
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    journeyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    train?: TrainUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutSeatInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    trainId?: IntFieldUpdateOperationsInput | number
    sourceId?: IntFieldUpdateOperationsInput | number
    destinationId?: IntFieldUpdateOperationsInput | number
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    journeyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutSeatInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    trainId?: IntFieldUpdateOperationsInput | number
    sourceId?: IntFieldUpdateOperationsInput | number
    destinationId?: IntFieldUpdateOperationsInput | number
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    journeyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TrainCountOutputTypeDefaultArgs instead
     */
    export type TrainCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TrainCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StationCountOutputTypeDefaultArgs instead
     */
    export type StationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SeatCountOutputTypeDefaultArgs instead
     */
    export type SeatCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SeatCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TrainDefaultArgs instead
     */
    export type TrainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TrainDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StationDefaultArgs instead
     */
    export type StationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TrainRouteDefaultArgs instead
     */
    export type TrainRouteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TrainRouteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SeatDefaultArgs instead
     */
    export type SeatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SeatDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BookingDefaultArgs instead
     */
    export type BookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BookingDefaultArgs<ExtArgs>

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