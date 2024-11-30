
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
 * Model Blog
 * 
 */
export type Blog = $Result.DefaultSelection<Prisma.$BlogPayload>
/**
 * Model Blogcomment
 * 
 */
export type Blogcomment = $Result.DefaultSelection<Prisma.$BlogcommentPayload>
/**
 * Model Brand
 * 
 */
export type Brand = $Result.DefaultSelection<Prisma.$BrandPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Visitor
 * 
 */
export type Visitor = $Result.DefaultSelection<Prisma.$VisitorPayload>
/**
 * Model Bill
 * 
 */
export type Bill = $Result.DefaultSelection<Prisma.$BillPayload>
/**
 * Model invoicedetails
 * 
 */
export type invoicedetails = $Result.DefaultSelection<Prisma.$invoicedetailsPayload>
/**
 * Model RateBlog
 * 
 */
export type RateBlog = $Result.DefaultSelection<Prisma.$RateBlogPayload>

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
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

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
   * `prisma.blog`: Exposes CRUD operations for the **Blog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blogs
    * const blogs = await prisma.blog.findMany()
    * ```
    */
  get blog(): Prisma.BlogDelegate<ExtArgs>;

  /**
   * `prisma.blogcomment`: Exposes CRUD operations for the **Blogcomment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blogcomments
    * const blogcomments = await prisma.blogcomment.findMany()
    * ```
    */
  get blogcomment(): Prisma.BlogcommentDelegate<ExtArgs>;

  /**
   * `prisma.brand`: Exposes CRUD operations for the **Brand** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Brands
    * const brands = await prisma.brand.findMany()
    * ```
    */
  get brand(): Prisma.BrandDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs>;

  /**
   * `prisma.visitor`: Exposes CRUD operations for the **Visitor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Visitors
    * const visitors = await prisma.visitor.findMany()
    * ```
    */
  get visitor(): Prisma.VisitorDelegate<ExtArgs>;

  /**
   * `prisma.bill`: Exposes CRUD operations for the **Bill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bills
    * const bills = await prisma.bill.findMany()
    * ```
    */
  get bill(): Prisma.BillDelegate<ExtArgs>;

  /**
   * `prisma.invoicedetails`: Exposes CRUD operations for the **invoicedetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoicedetails
    * const invoicedetails = await prisma.invoicedetails.findMany()
    * ```
    */
  get invoicedetails(): Prisma.invoicedetailsDelegate<ExtArgs>;

  /**
   * `prisma.rateBlog`: Exposes CRUD operations for the **RateBlog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RateBlogs
    * const rateBlogs = await prisma.rateBlog.findMany()
    * ```
    */
  get rateBlog(): Prisma.RateBlogDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.10.2
   * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
    Blog: 'Blog',
    Blogcomment: 'Blogcomment',
    Brand: 'Brand',
    Category: 'Category',
    Product: 'Product',
    Visitor: 'Visitor',
    Bill: 'Bill',
    invoicedetails: 'invoicedetails',
    RateBlog: 'RateBlog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'blog' | 'blogcomment' | 'brand' | 'category' | 'product' | 'visitor' | 'bill' | 'invoicedetails' | 'rateBlog'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Blog: {
        payload: Prisma.$BlogPayload<ExtArgs>
        fields: Prisma.BlogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findFirst: {
            args: Prisma.BlogFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findMany: {
            args: Prisma.BlogFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          create: {
            args: Prisma.BlogCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          createMany: {
            args: Prisma.BlogCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BlogDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          update: {
            args: Prisma.BlogUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          deleteMany: {
            args: Prisma.BlogDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BlogUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BlogUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          aggregate: {
            args: Prisma.BlogAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBlog>
          }
          groupBy: {
            args: Prisma.BlogGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BlogGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogCountArgs<ExtArgs>,
            result: $Utils.Optional<BlogCountAggregateOutputType> | number
          }
        }
      }
      Blogcomment: {
        payload: Prisma.$BlogcommentPayload<ExtArgs>
        fields: Prisma.BlogcommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogcommentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogcommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogcommentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogcommentPayload>
          }
          findFirst: {
            args: Prisma.BlogcommentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogcommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogcommentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogcommentPayload>
          }
          findMany: {
            args: Prisma.BlogcommentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogcommentPayload>[]
          }
          create: {
            args: Prisma.BlogcommentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogcommentPayload>
          }
          createMany: {
            args: Prisma.BlogcommentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BlogcommentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogcommentPayload>
          }
          update: {
            args: Prisma.BlogcommentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogcommentPayload>
          }
          deleteMany: {
            args: Prisma.BlogcommentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BlogcommentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BlogcommentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogcommentPayload>
          }
          aggregate: {
            args: Prisma.BlogcommentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBlogcomment>
          }
          groupBy: {
            args: Prisma.BlogcommentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BlogcommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogcommentCountArgs<ExtArgs>,
            result: $Utils.Optional<BlogcommentCountAggregateOutputType> | number
          }
        }
      }
      Brand: {
        payload: Prisma.$BrandPayload<ExtArgs>
        fields: Prisma.BrandFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrandFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrandFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          findFirst: {
            args: Prisma.BrandFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrandFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          findMany: {
            args: Prisma.BrandFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          create: {
            args: Prisma.BrandCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          createMany: {
            args: Prisma.BrandCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BrandDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          update: {
            args: Prisma.BrandUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          deleteMany: {
            args: Prisma.BrandDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BrandUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BrandUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          aggregate: {
            args: Prisma.BrandAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBrand>
          }
          groupBy: {
            args: Prisma.BrandGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BrandGroupByOutputType>[]
          }
          count: {
            args: Prisma.BrandCountArgs<ExtArgs>,
            result: $Utils.Optional<BrandCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Visitor: {
        payload: Prisma.$VisitorPayload<ExtArgs>
        fields: Prisma.VisitorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VisitorFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VisitorFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>
          }
          findFirst: {
            args: Prisma.VisitorFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VisitorFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>
          }
          findMany: {
            args: Prisma.VisitorFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>[]
          }
          create: {
            args: Prisma.VisitorCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>
          }
          createMany: {
            args: Prisma.VisitorCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.VisitorDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>
          }
          update: {
            args: Prisma.VisitorUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>
          }
          deleteMany: {
            args: Prisma.VisitorDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VisitorUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VisitorUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>
          }
          aggregate: {
            args: Prisma.VisitorAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVisitor>
          }
          groupBy: {
            args: Prisma.VisitorGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VisitorGroupByOutputType>[]
          }
          count: {
            args: Prisma.VisitorCountArgs<ExtArgs>,
            result: $Utils.Optional<VisitorCountAggregateOutputType> | number
          }
        }
      }
      Bill: {
        payload: Prisma.$BillPayload<ExtArgs>
        fields: Prisma.BillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BillFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BillFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          findFirst: {
            args: Prisma.BillFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BillFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          findMany: {
            args: Prisma.BillFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BillPayload>[]
          }
          create: {
            args: Prisma.BillCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          createMany: {
            args: Prisma.BillCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BillDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          update: {
            args: Prisma.BillUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          deleteMany: {
            args: Prisma.BillDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BillUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BillUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          aggregate: {
            args: Prisma.BillAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBill>
          }
          groupBy: {
            args: Prisma.BillGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BillGroupByOutputType>[]
          }
          count: {
            args: Prisma.BillCountArgs<ExtArgs>,
            result: $Utils.Optional<BillCountAggregateOutputType> | number
          }
        }
      }
      invoicedetails: {
        payload: Prisma.$invoicedetailsPayload<ExtArgs>
        fields: Prisma.invoicedetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.invoicedetailsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$invoicedetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.invoicedetailsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$invoicedetailsPayload>
          }
          findFirst: {
            args: Prisma.invoicedetailsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$invoicedetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.invoicedetailsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$invoicedetailsPayload>
          }
          findMany: {
            args: Prisma.invoicedetailsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$invoicedetailsPayload>[]
          }
          create: {
            args: Prisma.invoicedetailsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$invoicedetailsPayload>
          }
          createMany: {
            args: Prisma.invoicedetailsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.invoicedetailsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$invoicedetailsPayload>
          }
          update: {
            args: Prisma.invoicedetailsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$invoicedetailsPayload>
          }
          deleteMany: {
            args: Prisma.invoicedetailsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.invoicedetailsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.invoicedetailsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$invoicedetailsPayload>
          }
          aggregate: {
            args: Prisma.InvoicedetailsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateInvoicedetails>
          }
          groupBy: {
            args: Prisma.invoicedetailsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<InvoicedetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.invoicedetailsCountArgs<ExtArgs>,
            result: $Utils.Optional<InvoicedetailsCountAggregateOutputType> | number
          }
        }
      }
      RateBlog: {
        payload: Prisma.$RateBlogPayload<ExtArgs>
        fields: Prisma.RateBlogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RateBlogFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RateBlogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RateBlogFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RateBlogPayload>
          }
          findFirst: {
            args: Prisma.RateBlogFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RateBlogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RateBlogFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RateBlogPayload>
          }
          findMany: {
            args: Prisma.RateBlogFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RateBlogPayload>[]
          }
          create: {
            args: Prisma.RateBlogCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RateBlogPayload>
          }
          createMany: {
            args: Prisma.RateBlogCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RateBlogDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RateBlogPayload>
          }
          update: {
            args: Prisma.RateBlogUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RateBlogPayload>
          }
          deleteMany: {
            args: Prisma.RateBlogDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RateBlogUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RateBlogUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RateBlogPayload>
          }
          aggregate: {
            args: Prisma.RateBlogAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRateBlog>
          }
          groupBy: {
            args: Prisma.RateBlogGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RateBlogGroupByOutputType>[]
          }
          count: {
            args: Prisma.RateBlogCountArgs<ExtArgs>,
            result: $Utils.Optional<RateBlogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    blogcomments: number
    products: number
    bills: number
    blogs: number
    rateBlogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogcomments?: boolean | UserCountOutputTypeCountBlogcommentsArgs
    products?: boolean | UserCountOutputTypeCountProductsArgs
    bills?: boolean | UserCountOutputTypeCountBillsArgs
    blogs?: boolean | UserCountOutputTypeCountBlogsArgs
    rateBlogs?: boolean | UserCountOutputTypeCountRateBlogsArgs
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
  export type UserCountOutputTypeCountBlogcommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogcommentWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBlogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRateBlogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RateBlogWhereInput
  }



  /**
   * Count Type BlogCountOutputType
   */

  export type BlogCountOutputType = {
    blogcomments: number
    rateBlogs: number
  }

  export type BlogCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogcomments?: boolean | BlogCountOutputTypeCountBlogcommentsArgs
    rateBlogs?: boolean | BlogCountOutputTypeCountRateBlogsArgs
  }

  // Custom InputTypes

  /**
   * BlogCountOutputType without action
   */
  export type BlogCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCountOutputType
     */
    select?: BlogCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * BlogCountOutputType without action
   */
  export type BlogCountOutputTypeCountBlogcommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogcommentWhereInput
  }


  /**
   * BlogCountOutputType without action
   */
  export type BlogCountOutputTypeCountRateBlogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RateBlogWhereInput
  }



  /**
   * Count Type BrandCountOutputType
   */

  export type BrandCountOutputType = {
    products: number
  }

  export type BrandCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | BrandCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes

  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandCountOutputType
     */
    select?: BrandCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }



  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    products: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }



  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    invoicedetails: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoicedetails?: boolean | ProductCountOutputTypeCountInvoicedetailsArgs
  }

  // Custom InputTypes

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountInvoicedetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoicedetailsWhereInput
  }



  /**
   * Count Type VisitorCountOutputType
   */

  export type VisitorCountOutputType = {
    bills: number
  }

  export type VisitorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bills?: boolean | VisitorCountOutputTypeCountBillsArgs
  }

  // Custom InputTypes

  /**
   * VisitorCountOutputType without action
   */
  export type VisitorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorCountOutputType
     */
    select?: VisitorCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * VisitorCountOutputType without action
   */
  export type VisitorCountOutputTypeCountBillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillWhereInput
  }



  /**
   * Count Type BillCountOutputType
   */

  export type BillCountOutputType = {
    invoicedetails: number
  }

  export type BillCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoicedetails?: boolean | BillCountOutputTypeCountInvoicedetailsArgs
  }

  // Custom InputTypes

  /**
   * BillCountOutputType without action
   */
  export type BillCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillCountOutputType
     */
    select?: BillCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * BillCountOutputType without action
   */
  export type BillCountOutputTypeCountInvoicedetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoicedetailsWhereInput
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
    level: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    level: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    avatar: string | null
    address: string | null
    level: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    avatar: string | null
    address: string | null
    level: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    phone: number
    avatar: number
    address: number
    level: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    level?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    level?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    avatar?: true
    address?: true
    level?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    avatar?: true
    address?: true
    level?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    avatar?: true
    address?: true
    level?: true
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
    name: string
    email: string
    password: string
    phone: string | null
    avatar: string | null
    address: string | null
    level: number
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
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    avatar?: boolean
    address?: boolean
    level?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    blogcomments?: boolean | User$blogcommentsArgs<ExtArgs>
    products?: boolean | User$productsArgs<ExtArgs>
    bills?: boolean | User$billsArgs<ExtArgs>
    blogs?: boolean | User$blogsArgs<ExtArgs>
    rateBlogs?: boolean | User$rateBlogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    avatar?: boolean
    address?: boolean
    level?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogcomments?: boolean | User$blogcommentsArgs<ExtArgs>
    products?: boolean | User$productsArgs<ExtArgs>
    bills?: boolean | User$billsArgs<ExtArgs>
    blogs?: boolean | User$blogsArgs<ExtArgs>
    rateBlogs?: boolean | User$rateBlogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      blogcomments: Prisma.$BlogcommentPayload<ExtArgs>[]
      products: Prisma.$ProductPayload<ExtArgs>[]
      bills: Prisma.$BillPayload<ExtArgs>[]
      blogs: Prisma.$BlogPayload<ExtArgs>[]
      rateBlogs: Prisma.$RateBlogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      phone: string | null
      avatar: string | null
      address: string | null
      level: number
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
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    blogcomments<T extends User$blogcommentsArgs<ExtArgs> = {}>(args?: Subset<T, User$blogcommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogcommentPayload<ExtArgs>, T, 'findMany'> | Null>;

    products<T extends User$productsArgs<ExtArgs> = {}>(args?: Subset<T, User$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'> | Null>;

    bills<T extends User$billsArgs<ExtArgs> = {}>(args?: Subset<T, User$billsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, 'findMany'> | Null>;

    blogs<T extends User$blogsArgs<ExtArgs> = {}>(args?: Subset<T, User$blogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, 'findMany'> | Null>;

    rateBlogs<T extends User$rateBlogsArgs<ExtArgs> = {}>(args?: Subset<T, User$rateBlogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RateBlogPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly level: FieldRef<"User", 'Int'>
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
   * User.blogcomments
   */
  export type User$blogcommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogcomment
     */
    select?: BlogcommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogcommentInclude<ExtArgs> | null
    where?: BlogcommentWhereInput
    orderBy?: BlogcommentOrderByWithRelationInput | BlogcommentOrderByWithRelationInput[]
    cursor?: BlogcommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogcommentScalarFieldEnum | BlogcommentScalarFieldEnum[]
  }


  /**
   * User.products
   */
  export type User$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * User.bills
   */
  export type User$billsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillInclude<ExtArgs> | null
    where?: BillWhereInput
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    cursor?: BillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }


  /**
   * User.blogs
   */
  export type User$blogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogInclude<ExtArgs> | null
    where?: BlogWhereInput
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    cursor?: BlogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }


  /**
   * User.rateBlogs
   */
  export type User$rateBlogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateBlog
     */
    select?: RateBlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RateBlogInclude<ExtArgs> | null
    where?: RateBlogWhereInput
    orderBy?: RateBlogOrderByWithRelationInput | RateBlogOrderByWithRelationInput[]
    cursor?: RateBlogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RateBlogScalarFieldEnum | RateBlogScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Blog
   */

  export type AggregateBlog = {
    _count: BlogCountAggregateOutputType | null
    _avg: BlogAvgAggregateOutputType | null
    _sum: BlogSumAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  export type BlogAvgAggregateOutputType = {
    id: number | null
    id_user: number | null
  }

  export type BlogSumAggregateOutputType = {
    id: number | null
    id_user: number | null
  }

  export type BlogMinAggregateOutputType = {
    id: number | null
    title: string | null
    image: string | null
    description: string | null
    content: string | null
    id_user: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogMaxAggregateOutputType = {
    id: number | null
    title: string | null
    image: string | null
    description: string | null
    content: string | null
    id_user: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogCountAggregateOutputType = {
    id: number
    title: number
    image: number
    description: number
    content: number
    id_user: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BlogAvgAggregateInputType = {
    id?: true
    id_user?: true
  }

  export type BlogSumAggregateInputType = {
    id?: true
    id_user?: true
  }

  export type BlogMinAggregateInputType = {
    id?: true
    title?: true
    image?: true
    description?: true
    content?: true
    id_user?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogMaxAggregateInputType = {
    id?: true
    title?: true
    image?: true
    description?: true
    content?: true
    id_user?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogCountAggregateInputType = {
    id?: true
    title?: true
    image?: true
    description?: true
    content?: true
    id_user?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BlogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blog to aggregate.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blogs
    **/
    _count?: true | BlogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogMaxAggregateInputType
  }

  export type GetBlogAggregateType<T extends BlogAggregateArgs> = {
        [P in keyof T & keyof AggregateBlog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlog[P]>
      : GetScalarType<T[P], AggregateBlog[P]>
  }




  export type BlogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogWhereInput
    orderBy?: BlogOrderByWithAggregationInput | BlogOrderByWithAggregationInput[]
    by: BlogScalarFieldEnum[] | BlogScalarFieldEnum
    having?: BlogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogCountAggregateInputType | true
    _avg?: BlogAvgAggregateInputType
    _sum?: BlogSumAggregateInputType
    _min?: BlogMinAggregateInputType
    _max?: BlogMaxAggregateInputType
  }

  export type BlogGroupByOutputType = {
    id: number
    title: string
    image: string
    description: string | null
    content: string | null
    id_user: number
    createdAt: Date
    updatedAt: Date
    _count: BlogCountAggregateOutputType | null
    _avg: BlogAvgAggregateOutputType | null
    _sum: BlogSumAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  type GetBlogGroupByPayload<T extends BlogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogGroupByOutputType[P]>
            : GetScalarType<T[P], BlogGroupByOutputType[P]>
        }
      >
    >


  export type BlogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    image?: boolean
    description?: boolean
    content?: boolean
    id_user?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    blogcomments?: boolean | Blog$blogcommentsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    rateBlogs?: boolean | Blog$rateBlogsArgs<ExtArgs>
    _count?: boolean | BlogCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectScalar = {
    id?: boolean
    title?: boolean
    image?: boolean
    description?: boolean
    content?: boolean
    id_user?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BlogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogcomments?: boolean | Blog$blogcommentsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    rateBlogs?: boolean | Blog$rateBlogsArgs<ExtArgs>
    _count?: boolean | BlogCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $BlogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Blog"
    objects: {
      blogcomments: Prisma.$BlogcommentPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
      rateBlogs: Prisma.$RateBlogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      image: string
      description: string | null
      content: string | null
      id_user: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["blog"]>
    composites: {}
  }


  type BlogGetPayload<S extends boolean | null | undefined | BlogDefaultArgs> = $Result.GetResult<Prisma.$BlogPayload, S>

  type BlogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BlogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BlogCountAggregateInputType | true
    }

  export interface BlogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Blog'], meta: { name: 'Blog' } }
    /**
     * Find zero or one Blog that matches the filter.
     * @param {BlogFindUniqueArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BlogFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BlogFindUniqueArgs<ExtArgs>>
    ): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Blog that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BlogFindUniqueOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BlogFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BlogFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Blog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BlogFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BlogFindFirstArgs<ExtArgs>>
    ): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Blog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BlogFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BlogFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Blogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blogs
     * const blogs = await prisma.blog.findMany()
     * 
     * // Get first 10 Blogs
     * const blogs = await prisma.blog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogWithIdOnly = await prisma.blog.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BlogFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BlogFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Blog.
     * @param {BlogCreateArgs} args - Arguments to create a Blog.
     * @example
     * // Create one Blog
     * const Blog = await prisma.blog.create({
     *   data: {
     *     // ... data to create a Blog
     *   }
     * })
     * 
    **/
    create<T extends BlogCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BlogCreateArgs<ExtArgs>>
    ): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Blogs.
     *     @param {BlogCreateManyArgs} args - Arguments to create many Blogs.
     *     @example
     *     // Create many Blogs
     *     const blog = await prisma.blog.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BlogCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BlogCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Blog.
     * @param {BlogDeleteArgs} args - Arguments to delete one Blog.
     * @example
     * // Delete one Blog
     * const Blog = await prisma.blog.delete({
     *   where: {
     *     // ... filter to delete one Blog
     *   }
     * })
     * 
    **/
    delete<T extends BlogDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BlogDeleteArgs<ExtArgs>>
    ): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Blog.
     * @param {BlogUpdateArgs} args - Arguments to update one Blog.
     * @example
     * // Update one Blog
     * const blog = await prisma.blog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BlogUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BlogUpdateArgs<ExtArgs>>
    ): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Blogs.
     * @param {BlogDeleteManyArgs} args - Arguments to filter Blogs to delete.
     * @example
     * // Delete a few Blogs
     * const { count } = await prisma.blog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BlogDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BlogDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blogs
     * const blog = await prisma.blog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BlogUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BlogUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Blog.
     * @param {BlogUpsertArgs} args - Arguments to update or create a Blog.
     * @example
     * // Update or create a Blog
     * const blog = await prisma.blog.upsert({
     *   create: {
     *     // ... data to create a Blog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blog we want to update
     *   }
     * })
    **/
    upsert<T extends BlogUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BlogUpsertArgs<ExtArgs>>
    ): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCountArgs} args - Arguments to filter Blogs to count.
     * @example
     * // Count the number of Blogs
     * const count = await prisma.blog.count({
     *   where: {
     *     // ... the filter for the Blogs we want to count
     *   }
     * })
    **/
    count<T extends BlogCountArgs>(
      args?: Subset<T, BlogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlogAggregateArgs>(args: Subset<T, BlogAggregateArgs>): Prisma.PrismaPromise<GetBlogAggregateType<T>>

    /**
     * Group by Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogGroupByArgs} args - Group by arguments.
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
      T extends BlogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogGroupByArgs['orderBy'] }
        : { orderBy?: BlogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Blog model
   */
  readonly fields: BlogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Blog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    blogcomments<T extends Blog$blogcommentsArgs<ExtArgs> = {}>(args?: Subset<T, Blog$blogcommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogcommentPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    rateBlogs<T extends Blog$rateBlogsArgs<ExtArgs> = {}>(args?: Subset<T, Blog$rateBlogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RateBlogPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Blog model
   */ 
  interface BlogFieldRefs {
    readonly id: FieldRef<"Blog", 'Int'>
    readonly title: FieldRef<"Blog", 'String'>
    readonly image: FieldRef<"Blog", 'String'>
    readonly description: FieldRef<"Blog", 'String'>
    readonly content: FieldRef<"Blog", 'String'>
    readonly id_user: FieldRef<"Blog", 'Int'>
    readonly createdAt: FieldRef<"Blog", 'DateTime'>
    readonly updatedAt: FieldRef<"Blog", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Blog findUnique
   */
  export type BlogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }


  /**
   * Blog findUniqueOrThrow
   */
  export type BlogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }


  /**
   * Blog findFirst
   */
  export type BlogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }


  /**
   * Blog findFirstOrThrow
   */
  export type BlogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }


  /**
   * Blog findMany
   */
  export type BlogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blogs to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }


  /**
   * Blog create
   */
  export type BlogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The data needed to create a Blog.
     */
    data: XOR<BlogCreateInput, BlogUncheckedCreateInput>
  }


  /**
   * Blog createMany
   */
  export type BlogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blogs.
     */
    data: BlogCreateManyInput | BlogCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Blog update
   */
  export type BlogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The data needed to update a Blog.
     */
    data: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
    /**
     * Choose, which Blog to update.
     */
    where: BlogWhereUniqueInput
  }


  /**
   * Blog updateMany
   */
  export type BlogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blogs.
     */
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyInput>
    /**
     * Filter which Blogs to update
     */
    where?: BlogWhereInput
  }


  /**
   * Blog upsert
   */
  export type BlogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The filter to search for the Blog to update in case it exists.
     */
    where: BlogWhereUniqueInput
    /**
     * In case the Blog found by the `where` argument doesn't exist, create a new Blog with this data.
     */
    create: XOR<BlogCreateInput, BlogUncheckedCreateInput>
    /**
     * In case the Blog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
  }


  /**
   * Blog delete
   */
  export type BlogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter which Blog to delete.
     */
    where: BlogWhereUniqueInput
  }


  /**
   * Blog deleteMany
   */
  export type BlogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blogs to delete
     */
    where?: BlogWhereInput
  }


  /**
   * Blog.blogcomments
   */
  export type Blog$blogcommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogcomment
     */
    select?: BlogcommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogcommentInclude<ExtArgs> | null
    where?: BlogcommentWhereInput
    orderBy?: BlogcommentOrderByWithRelationInput | BlogcommentOrderByWithRelationInput[]
    cursor?: BlogcommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogcommentScalarFieldEnum | BlogcommentScalarFieldEnum[]
  }


  /**
   * Blog.rateBlogs
   */
  export type Blog$rateBlogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateBlog
     */
    select?: RateBlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RateBlogInclude<ExtArgs> | null
    where?: RateBlogWhereInput
    orderBy?: RateBlogOrderByWithRelationInput | RateBlogOrderByWithRelationInput[]
    cursor?: RateBlogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RateBlogScalarFieldEnum | RateBlogScalarFieldEnum[]
  }


  /**
   * Blog without action
   */
  export type BlogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogInclude<ExtArgs> | null
  }



  /**
   * Model Blogcomment
   */

  export type AggregateBlogcomment = {
    _count: BlogcommentCountAggregateOutputType | null
    _avg: BlogcommentAvgAggregateOutputType | null
    _sum: BlogcommentSumAggregateOutputType | null
    _min: BlogcommentMinAggregateOutputType | null
    _max: BlogcommentMaxAggregateOutputType | null
  }

  export type BlogcommentAvgAggregateOutputType = {
    id: number | null
    id_blog: number | null
    id_user: number | null
    level: number | null
  }

  export type BlogcommentSumAggregateOutputType = {
    id: number | null
    id_blog: number | null
    id_user: number | null
    level: number | null
  }

  export type BlogcommentMinAggregateOutputType = {
    id: number | null
    comment: string | null
    id_blog: number | null
    id_user: number | null
    avatar: string | null
    name: string | null
    level: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogcommentMaxAggregateOutputType = {
    id: number | null
    comment: string | null
    id_blog: number | null
    id_user: number | null
    avatar: string | null
    name: string | null
    level: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogcommentCountAggregateOutputType = {
    id: number
    comment: number
    id_blog: number
    id_user: number
    avatar: number
    name: number
    level: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BlogcommentAvgAggregateInputType = {
    id?: true
    id_blog?: true
    id_user?: true
    level?: true
  }

  export type BlogcommentSumAggregateInputType = {
    id?: true
    id_blog?: true
    id_user?: true
    level?: true
  }

  export type BlogcommentMinAggregateInputType = {
    id?: true
    comment?: true
    id_blog?: true
    id_user?: true
    avatar?: true
    name?: true
    level?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogcommentMaxAggregateInputType = {
    id?: true
    comment?: true
    id_blog?: true
    id_user?: true
    avatar?: true
    name?: true
    level?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogcommentCountAggregateInputType = {
    id?: true
    comment?: true
    id_blog?: true
    id_user?: true
    avatar?: true
    name?: true
    level?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BlogcommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blogcomment to aggregate.
     */
    where?: BlogcommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogcomments to fetch.
     */
    orderBy?: BlogcommentOrderByWithRelationInput | BlogcommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogcommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogcomments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogcomments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blogcomments
    **/
    _count?: true | BlogcommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlogcommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlogcommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogcommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogcommentMaxAggregateInputType
  }

  export type GetBlogcommentAggregateType<T extends BlogcommentAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogcomment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogcomment[P]>
      : GetScalarType<T[P], AggregateBlogcomment[P]>
  }




  export type BlogcommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogcommentWhereInput
    orderBy?: BlogcommentOrderByWithAggregationInput | BlogcommentOrderByWithAggregationInput[]
    by: BlogcommentScalarFieldEnum[] | BlogcommentScalarFieldEnum
    having?: BlogcommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogcommentCountAggregateInputType | true
    _avg?: BlogcommentAvgAggregateInputType
    _sum?: BlogcommentSumAggregateInputType
    _min?: BlogcommentMinAggregateInputType
    _max?: BlogcommentMaxAggregateInputType
  }

  export type BlogcommentGroupByOutputType = {
    id: number
    comment: string
    id_blog: number
    id_user: number
    avatar: string | null
    name: string
    level: number
    createdAt: Date
    updatedAt: Date
    _count: BlogcommentCountAggregateOutputType | null
    _avg: BlogcommentAvgAggregateOutputType | null
    _sum: BlogcommentSumAggregateOutputType | null
    _min: BlogcommentMinAggregateOutputType | null
    _max: BlogcommentMaxAggregateOutputType | null
  }

  type GetBlogcommentGroupByPayload<T extends BlogcommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogcommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogcommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogcommentGroupByOutputType[P]>
            : GetScalarType<T[P], BlogcommentGroupByOutputType[P]>
        }
      >
    >


  export type BlogcommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comment?: boolean
    id_blog?: boolean
    id_user?: boolean
    avatar?: boolean
    name?: boolean
    level?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogcomment"]>

  export type BlogcommentSelectScalar = {
    id?: boolean
    comment?: boolean
    id_blog?: boolean
    id_user?: boolean
    avatar?: boolean
    name?: boolean
    level?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BlogcommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }


  export type $BlogcommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Blogcomment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      blog: Prisma.$BlogPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      comment: string
      id_blog: number
      id_user: number
      avatar: string | null
      name: string
      level: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["blogcomment"]>
    composites: {}
  }


  type BlogcommentGetPayload<S extends boolean | null | undefined | BlogcommentDefaultArgs> = $Result.GetResult<Prisma.$BlogcommentPayload, S>

  type BlogcommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BlogcommentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BlogcommentCountAggregateInputType | true
    }

  export interface BlogcommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Blogcomment'], meta: { name: 'Blogcomment' } }
    /**
     * Find zero or one Blogcomment that matches the filter.
     * @param {BlogcommentFindUniqueArgs} args - Arguments to find a Blogcomment
     * @example
     * // Get one Blogcomment
     * const blogcomment = await prisma.blogcomment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BlogcommentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BlogcommentFindUniqueArgs<ExtArgs>>
    ): Prisma__BlogcommentClient<$Result.GetResult<Prisma.$BlogcommentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Blogcomment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BlogcommentFindUniqueOrThrowArgs} args - Arguments to find a Blogcomment
     * @example
     * // Get one Blogcomment
     * const blogcomment = await prisma.blogcomment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BlogcommentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BlogcommentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BlogcommentClient<$Result.GetResult<Prisma.$BlogcommentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Blogcomment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogcommentFindFirstArgs} args - Arguments to find a Blogcomment
     * @example
     * // Get one Blogcomment
     * const blogcomment = await prisma.blogcomment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BlogcommentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BlogcommentFindFirstArgs<ExtArgs>>
    ): Prisma__BlogcommentClient<$Result.GetResult<Prisma.$BlogcommentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Blogcomment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogcommentFindFirstOrThrowArgs} args - Arguments to find a Blogcomment
     * @example
     * // Get one Blogcomment
     * const blogcomment = await prisma.blogcomment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BlogcommentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BlogcommentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BlogcommentClient<$Result.GetResult<Prisma.$BlogcommentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Blogcomments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogcommentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blogcomments
     * const blogcomments = await prisma.blogcomment.findMany()
     * 
     * // Get first 10 Blogcomments
     * const blogcomments = await prisma.blogcomment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogcommentWithIdOnly = await prisma.blogcomment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BlogcommentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BlogcommentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogcommentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Blogcomment.
     * @param {BlogcommentCreateArgs} args - Arguments to create a Blogcomment.
     * @example
     * // Create one Blogcomment
     * const Blogcomment = await prisma.blogcomment.create({
     *   data: {
     *     // ... data to create a Blogcomment
     *   }
     * })
     * 
    **/
    create<T extends BlogcommentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BlogcommentCreateArgs<ExtArgs>>
    ): Prisma__BlogcommentClient<$Result.GetResult<Prisma.$BlogcommentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Blogcomments.
     *     @param {BlogcommentCreateManyArgs} args - Arguments to create many Blogcomments.
     *     @example
     *     // Create many Blogcomments
     *     const blogcomment = await prisma.blogcomment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BlogcommentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BlogcommentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Blogcomment.
     * @param {BlogcommentDeleteArgs} args - Arguments to delete one Blogcomment.
     * @example
     * // Delete one Blogcomment
     * const Blogcomment = await prisma.blogcomment.delete({
     *   where: {
     *     // ... filter to delete one Blogcomment
     *   }
     * })
     * 
    **/
    delete<T extends BlogcommentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BlogcommentDeleteArgs<ExtArgs>>
    ): Prisma__BlogcommentClient<$Result.GetResult<Prisma.$BlogcommentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Blogcomment.
     * @param {BlogcommentUpdateArgs} args - Arguments to update one Blogcomment.
     * @example
     * // Update one Blogcomment
     * const blogcomment = await prisma.blogcomment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BlogcommentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BlogcommentUpdateArgs<ExtArgs>>
    ): Prisma__BlogcommentClient<$Result.GetResult<Prisma.$BlogcommentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Blogcomments.
     * @param {BlogcommentDeleteManyArgs} args - Arguments to filter Blogcomments to delete.
     * @example
     * // Delete a few Blogcomments
     * const { count } = await prisma.blogcomment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BlogcommentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BlogcommentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogcomments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogcommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blogcomments
     * const blogcomment = await prisma.blogcomment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BlogcommentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BlogcommentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Blogcomment.
     * @param {BlogcommentUpsertArgs} args - Arguments to update or create a Blogcomment.
     * @example
     * // Update or create a Blogcomment
     * const blogcomment = await prisma.blogcomment.upsert({
     *   create: {
     *     // ... data to create a Blogcomment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blogcomment we want to update
     *   }
     * })
    **/
    upsert<T extends BlogcommentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BlogcommentUpsertArgs<ExtArgs>>
    ): Prisma__BlogcommentClient<$Result.GetResult<Prisma.$BlogcommentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Blogcomments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogcommentCountArgs} args - Arguments to filter Blogcomments to count.
     * @example
     * // Count the number of Blogcomments
     * const count = await prisma.blogcomment.count({
     *   where: {
     *     // ... the filter for the Blogcomments we want to count
     *   }
     * })
    **/
    count<T extends BlogcommentCountArgs>(
      args?: Subset<T, BlogcommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogcommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blogcomment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogcommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlogcommentAggregateArgs>(args: Subset<T, BlogcommentAggregateArgs>): Prisma.PrismaPromise<GetBlogcommentAggregateType<T>>

    /**
     * Group by Blogcomment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogcommentGroupByArgs} args - Group by arguments.
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
      T extends BlogcommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogcommentGroupByArgs['orderBy'] }
        : { orderBy?: BlogcommentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlogcommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogcommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Blogcomment model
   */
  readonly fields: BlogcommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Blogcomment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogcommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    blog<T extends BlogDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlogDefaultArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Blogcomment model
   */ 
  interface BlogcommentFieldRefs {
    readonly id: FieldRef<"Blogcomment", 'Int'>
    readonly comment: FieldRef<"Blogcomment", 'String'>
    readonly id_blog: FieldRef<"Blogcomment", 'Int'>
    readonly id_user: FieldRef<"Blogcomment", 'Int'>
    readonly avatar: FieldRef<"Blogcomment", 'String'>
    readonly name: FieldRef<"Blogcomment", 'String'>
    readonly level: FieldRef<"Blogcomment", 'Int'>
    readonly createdAt: FieldRef<"Blogcomment", 'DateTime'>
    readonly updatedAt: FieldRef<"Blogcomment", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Blogcomment findUnique
   */
  export type BlogcommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogcomment
     */
    select?: BlogcommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogcommentInclude<ExtArgs> | null
    /**
     * Filter, which Blogcomment to fetch.
     */
    where: BlogcommentWhereUniqueInput
  }


  /**
   * Blogcomment findUniqueOrThrow
   */
  export type BlogcommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogcomment
     */
    select?: BlogcommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogcommentInclude<ExtArgs> | null
    /**
     * Filter, which Blogcomment to fetch.
     */
    where: BlogcommentWhereUniqueInput
  }


  /**
   * Blogcomment findFirst
   */
  export type BlogcommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogcomment
     */
    select?: BlogcommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogcommentInclude<ExtArgs> | null
    /**
     * Filter, which Blogcomment to fetch.
     */
    where?: BlogcommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogcomments to fetch.
     */
    orderBy?: BlogcommentOrderByWithRelationInput | BlogcommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogcomments.
     */
    cursor?: BlogcommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogcomments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogcomments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogcomments.
     */
    distinct?: BlogcommentScalarFieldEnum | BlogcommentScalarFieldEnum[]
  }


  /**
   * Blogcomment findFirstOrThrow
   */
  export type BlogcommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogcomment
     */
    select?: BlogcommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogcommentInclude<ExtArgs> | null
    /**
     * Filter, which Blogcomment to fetch.
     */
    where?: BlogcommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogcomments to fetch.
     */
    orderBy?: BlogcommentOrderByWithRelationInput | BlogcommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogcomments.
     */
    cursor?: BlogcommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogcomments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogcomments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogcomments.
     */
    distinct?: BlogcommentScalarFieldEnum | BlogcommentScalarFieldEnum[]
  }


  /**
   * Blogcomment findMany
   */
  export type BlogcommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogcomment
     */
    select?: BlogcommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogcommentInclude<ExtArgs> | null
    /**
     * Filter, which Blogcomments to fetch.
     */
    where?: BlogcommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogcomments to fetch.
     */
    orderBy?: BlogcommentOrderByWithRelationInput | BlogcommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blogcomments.
     */
    cursor?: BlogcommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogcomments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogcomments.
     */
    skip?: number
    distinct?: BlogcommentScalarFieldEnum | BlogcommentScalarFieldEnum[]
  }


  /**
   * Blogcomment create
   */
  export type BlogcommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogcomment
     */
    select?: BlogcommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogcommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Blogcomment.
     */
    data: XOR<BlogcommentCreateInput, BlogcommentUncheckedCreateInput>
  }


  /**
   * Blogcomment createMany
   */
  export type BlogcommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blogcomments.
     */
    data: BlogcommentCreateManyInput | BlogcommentCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Blogcomment update
   */
  export type BlogcommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogcomment
     */
    select?: BlogcommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogcommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Blogcomment.
     */
    data: XOR<BlogcommentUpdateInput, BlogcommentUncheckedUpdateInput>
    /**
     * Choose, which Blogcomment to update.
     */
    where: BlogcommentWhereUniqueInput
  }


  /**
   * Blogcomment updateMany
   */
  export type BlogcommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blogcomments.
     */
    data: XOR<BlogcommentUpdateManyMutationInput, BlogcommentUncheckedUpdateManyInput>
    /**
     * Filter which Blogcomments to update
     */
    where?: BlogcommentWhereInput
  }


  /**
   * Blogcomment upsert
   */
  export type BlogcommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogcomment
     */
    select?: BlogcommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogcommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Blogcomment to update in case it exists.
     */
    where: BlogcommentWhereUniqueInput
    /**
     * In case the Blogcomment found by the `where` argument doesn't exist, create a new Blogcomment with this data.
     */
    create: XOR<BlogcommentCreateInput, BlogcommentUncheckedCreateInput>
    /**
     * In case the Blogcomment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogcommentUpdateInput, BlogcommentUncheckedUpdateInput>
  }


  /**
   * Blogcomment delete
   */
  export type BlogcommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogcomment
     */
    select?: BlogcommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogcommentInclude<ExtArgs> | null
    /**
     * Filter which Blogcomment to delete.
     */
    where: BlogcommentWhereUniqueInput
  }


  /**
   * Blogcomment deleteMany
   */
  export type BlogcommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blogcomments to delete
     */
    where?: BlogcommentWhereInput
  }


  /**
   * Blogcomment without action
   */
  export type BlogcommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogcomment
     */
    select?: BlogcommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogcommentInclude<ExtArgs> | null
  }



  /**
   * Model Brand
   */

  export type AggregateBrand = {
    _count: BrandCountAggregateOutputType | null
    _avg: BrandAvgAggregateOutputType | null
    _sum: BrandSumAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  export type BrandAvgAggregateOutputType = {
    id: number | null
    status: number | null
  }

  export type BrandSumAggregateOutputType = {
    id: number | null
    status: number | null
  }

  export type BrandMinAggregateOutputType = {
    id: number | null
    brand: string | null
    slug: string | null
    status: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BrandMaxAggregateOutputType = {
    id: number | null
    brand: string | null
    slug: string | null
    status: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BrandCountAggregateOutputType = {
    id: number
    brand: number
    slug: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BrandAvgAggregateInputType = {
    id?: true
    status?: true
  }

  export type BrandSumAggregateInputType = {
    id?: true
    status?: true
  }

  export type BrandMinAggregateInputType = {
    id?: true
    brand?: true
    slug?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BrandMaxAggregateInputType = {
    id?: true
    brand?: true
    slug?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BrandCountAggregateInputType = {
    id?: true
    brand?: true
    slug?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BrandAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brand to aggregate.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Brands
    **/
    _count?: true | BrandCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BrandAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BrandSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrandMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrandMaxAggregateInputType
  }

  export type GetBrandAggregateType<T extends BrandAggregateArgs> = {
        [P in keyof T & keyof AggregateBrand]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrand[P]>
      : GetScalarType<T[P], AggregateBrand[P]>
  }




  export type BrandGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrandWhereInput
    orderBy?: BrandOrderByWithAggregationInput | BrandOrderByWithAggregationInput[]
    by: BrandScalarFieldEnum[] | BrandScalarFieldEnum
    having?: BrandScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrandCountAggregateInputType | true
    _avg?: BrandAvgAggregateInputType
    _sum?: BrandSumAggregateInputType
    _min?: BrandMinAggregateInputType
    _max?: BrandMaxAggregateInputType
  }

  export type BrandGroupByOutputType = {
    id: number
    brand: string
    slug: string
    status: number
    createdAt: Date
    updatedAt: Date
    _count: BrandCountAggregateOutputType | null
    _avg: BrandAvgAggregateOutputType | null
    _sum: BrandSumAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  type GetBrandGroupByPayload<T extends BrandGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrandGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrandGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrandGroupByOutputType[P]>
            : GetScalarType<T[P], BrandGroupByOutputType[P]>
        }
      >
    >


  export type BrandSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brand?: boolean
    slug?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    products?: boolean | Brand$productsArgs<ExtArgs>
    _count?: boolean | BrandCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brand"]>

  export type BrandSelectScalar = {
    id?: boolean
    brand?: boolean
    slug?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BrandInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Brand$productsArgs<ExtArgs>
    _count?: boolean | BrandCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $BrandPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Brand"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      brand: string
      slug: string
      status: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["brand"]>
    composites: {}
  }


  type BrandGetPayload<S extends boolean | null | undefined | BrandDefaultArgs> = $Result.GetResult<Prisma.$BrandPayload, S>

  type BrandCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BrandFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BrandCountAggregateInputType | true
    }

  export interface BrandDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Brand'], meta: { name: 'Brand' } }
    /**
     * Find zero or one Brand that matches the filter.
     * @param {BrandFindUniqueArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BrandFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BrandFindUniqueArgs<ExtArgs>>
    ): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Brand that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BrandFindUniqueOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BrandFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Brand that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BrandFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandFindFirstArgs<ExtArgs>>
    ): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Brand that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BrandFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Brands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Brands
     * const brands = await prisma.brand.findMany()
     * 
     * // Get first 10 Brands
     * const brands = await prisma.brand.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const brandWithIdOnly = await prisma.brand.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BrandFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Brand.
     * @param {BrandCreateArgs} args - Arguments to create a Brand.
     * @example
     * // Create one Brand
     * const Brand = await prisma.brand.create({
     *   data: {
     *     // ... data to create a Brand
     *   }
     * })
     * 
    **/
    create<T extends BrandCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BrandCreateArgs<ExtArgs>>
    ): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Brands.
     *     @param {BrandCreateManyArgs} args - Arguments to create many Brands.
     *     @example
     *     // Create many Brands
     *     const brand = await prisma.brand.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BrandCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Brand.
     * @param {BrandDeleteArgs} args - Arguments to delete one Brand.
     * @example
     * // Delete one Brand
     * const Brand = await prisma.brand.delete({
     *   where: {
     *     // ... filter to delete one Brand
     *   }
     * })
     * 
    **/
    delete<T extends BrandDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BrandDeleteArgs<ExtArgs>>
    ): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Brand.
     * @param {BrandUpdateArgs} args - Arguments to update one Brand.
     * @example
     * // Update one Brand
     * const brand = await prisma.brand.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BrandUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BrandUpdateArgs<ExtArgs>>
    ): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Brands.
     * @param {BrandDeleteManyArgs} args - Arguments to filter Brands to delete.
     * @example
     * // Delete a few Brands
     * const { count } = await prisma.brand.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BrandDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Brands
     * const brand = await prisma.brand.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BrandUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BrandUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Brand.
     * @param {BrandUpsertArgs} args - Arguments to update or create a Brand.
     * @example
     * // Update or create a Brand
     * const brand = await prisma.brand.upsert({
     *   create: {
     *     // ... data to create a Brand
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Brand we want to update
     *   }
     * })
    **/
    upsert<T extends BrandUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BrandUpsertArgs<ExtArgs>>
    ): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandCountArgs} args - Arguments to filter Brands to count.
     * @example
     * // Count the number of Brands
     * const count = await prisma.brand.count({
     *   where: {
     *     // ... the filter for the Brands we want to count
     *   }
     * })
    **/
    count<T extends BrandCountArgs>(
      args?: Subset<T, BrandCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrandCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BrandAggregateArgs>(args: Subset<T, BrandAggregateArgs>): Prisma.PrismaPromise<GetBrandAggregateType<T>>

    /**
     * Group by Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandGroupByArgs} args - Group by arguments.
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
      T extends BrandGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrandGroupByArgs['orderBy'] }
        : { orderBy?: BrandGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BrandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Brand model
   */
  readonly fields: BrandFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Brand.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrandClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    products<T extends Brand$productsArgs<ExtArgs> = {}>(args?: Subset<T, Brand$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Brand model
   */ 
  interface BrandFieldRefs {
    readonly id: FieldRef<"Brand", 'Int'>
    readonly brand: FieldRef<"Brand", 'String'>
    readonly slug: FieldRef<"Brand", 'String'>
    readonly status: FieldRef<"Brand", 'Int'>
    readonly createdAt: FieldRef<"Brand", 'DateTime'>
    readonly updatedAt: FieldRef<"Brand", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Brand findUnique
   */
  export type BrandFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }


  /**
   * Brand findUniqueOrThrow
   */
  export type BrandFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }


  /**
   * Brand findFirst
   */
  export type BrandFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }


  /**
   * Brand findFirstOrThrow
   */
  export type BrandFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }


  /**
   * Brand findMany
   */
  export type BrandFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brands to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }


  /**
   * Brand create
   */
  export type BrandCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The data needed to create a Brand.
     */
    data: XOR<BrandCreateInput, BrandUncheckedCreateInput>
  }


  /**
   * Brand createMany
   */
  export type BrandCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Brands.
     */
    data: BrandCreateManyInput | BrandCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Brand update
   */
  export type BrandUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The data needed to update a Brand.
     */
    data: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
    /**
     * Choose, which Brand to update.
     */
    where: BrandWhereUniqueInput
  }


  /**
   * Brand updateMany
   */
  export type BrandUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Brands.
     */
    data: XOR<BrandUpdateManyMutationInput, BrandUncheckedUpdateManyInput>
    /**
     * Filter which Brands to update
     */
    where?: BrandWhereInput
  }


  /**
   * Brand upsert
   */
  export type BrandUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The filter to search for the Brand to update in case it exists.
     */
    where: BrandWhereUniqueInput
    /**
     * In case the Brand found by the `where` argument doesn't exist, create a new Brand with this data.
     */
    create: XOR<BrandCreateInput, BrandUncheckedCreateInput>
    /**
     * In case the Brand was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
  }


  /**
   * Brand delete
   */
  export type BrandDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter which Brand to delete.
     */
    where: BrandWhereUniqueInput
  }


  /**
   * Brand deleteMany
   */
  export type BrandDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brands to delete
     */
    where?: BrandWhereInput
  }


  /**
   * Brand.products
   */
  export type Brand$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Brand without action
   */
  export type BrandDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude<ExtArgs> | null
  }



  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
    status: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
    status: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    category: string | null
    slug: string | null
    status: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    category: string | null
    slug: string | null
    status: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    category: number
    slug: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
    status?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
    status?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    category?: true
    slug?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    category?: true
    slug?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    category?: true
    slug?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    category: string
    slug: string
    status: number
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    slug?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    category?: boolean
    slug?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      category: string
      slug: string
      status: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }


  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends CategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Categories.
     *     @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends CategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    products<T extends Category$productsArgs<ExtArgs> = {}>(args?: Subset<T, Category$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly category: FieldRef<"Category", 'String'>
    readonly slug: FieldRef<"Category", 'String'>
    readonly status: FieldRef<"Category", 'Int'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }


  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }


  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }


  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }


  /**
   * Category.products
   */
  export type Category$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
  }



  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    price: number | null
    id_user: number | null
    id_category: number | null
    id_brand: number | null
    status: number | null
    sale: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    price: number | null
    id_user: number | null
    id_category: number | null
    id_brand: number | null
    status: number | null
    sale: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    price: number | null
    id_user: number | null
    id_category: number | null
    id_brand: number | null
    status: number | null
    sale: number | null
    company: string | null
    image_product: string | null
    detail: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    price: number | null
    id_user: number | null
    id_category: number | null
    id_brand: number | null
    status: number | null
    sale: number | null
    company: string | null
    image_product: string | null
    detail: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    price: number
    id_user: number
    id_category: number
    id_brand: number
    status: number
    sale: number
    company: number
    image_product: number
    detail: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    price?: true
    id_user?: true
    id_category?: true
    id_brand?: true
    status?: true
    sale?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    price?: true
    id_user?: true
    id_category?: true
    id_brand?: true
    status?: true
    sale?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    price?: true
    id_user?: true
    id_category?: true
    id_brand?: true
    status?: true
    sale?: true
    company?: true
    image_product?: true
    detail?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    price?: true
    id_user?: true
    id_category?: true
    id_brand?: true
    status?: true
    sale?: true
    company?: true
    image_product?: true
    detail?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    price?: true
    id_user?: true
    id_category?: true
    id_brand?: true
    status?: true
    sale?: true
    company?: true
    image_product?: true
    detail?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    name: string
    slug: string
    price: number
    id_user: number
    id_category: number
    id_brand: number
    status: number
    sale: number
    company: string | null
    image_product: string | null
    detail: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    price?: boolean
    id_user?: boolean
    id_category?: boolean
    id_brand?: boolean
    status?: boolean
    sale?: boolean
    company?: boolean
    image_product?: boolean
    detail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    invoicedetails?: boolean | Product$invoicedetailsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    price?: boolean
    id_user?: boolean
    id_category?: boolean
    id_brand?: boolean
    status?: boolean
    sale?: boolean
    company?: boolean
    image_product?: boolean
    detail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    invoicedetails?: boolean | Product$invoicedetailsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
      brand: Prisma.$BrandPayload<ExtArgs>
      invoicedetails: Prisma.$invoicedetailsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string
      price: number
      id_user: number
      id_category: number
      id_brand: number
      status: number
      sale: number
      company: string | null
      image_product: string | null
      detail: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }


  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
    **/
    create<T extends ProductCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductCreateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Products.
     *     @param {ProductCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const product = await prisma.product.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
    **/
    delete<T extends ProductDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
    **/
    upsert<T extends ProductUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    brand<T extends BrandDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BrandDefaultArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    invoicedetails<T extends Product$invoicedetailsArgs<ExtArgs> = {}>(args?: Subset<T, Product$invoicedetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicedetailsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly name: FieldRef<"Product", 'String'>
    readonly slug: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Float'>
    readonly id_user: FieldRef<"Product", 'Int'>
    readonly id_category: FieldRef<"Product", 'Int'>
    readonly id_brand: FieldRef<"Product", 'Int'>
    readonly status: FieldRef<"Product", 'Int'>
    readonly sale: FieldRef<"Product", 'Float'>
    readonly company: FieldRef<"Product", 'String'>
    readonly image_product: FieldRef<"Product", 'String'>
    readonly detail: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }


  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }


  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }


  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }


  /**
   * Product.invoicedetails
   */
  export type Product$invoicedetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoicedetails
     */
    select?: invoicedetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: invoicedetailsInclude<ExtArgs> | null
    where?: invoicedetailsWhereInput
    orderBy?: invoicedetailsOrderByWithRelationInput | invoicedetailsOrderByWithRelationInput[]
    cursor?: invoicedetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoicedetailsScalarFieldEnum | InvoicedetailsScalarFieldEnum[]
  }


  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
  }



  /**
   * Model Visitor
   */

  export type AggregateVisitor = {
    _count: VisitorCountAggregateOutputType | null
    _avg: VisitorAvgAggregateOutputType | null
    _sum: VisitorSumAggregateOutputType | null
    _min: VisitorMinAggregateOutputType | null
    _max: VisitorMaxAggregateOutputType | null
  }

  export type VisitorAvgAggregateOutputType = {
    id: number | null
  }

  export type VisitorSumAggregateOutputType = {
    id: number | null
  }

  export type VisitorMinAggregateOutputType = {
    id: number | null
    codeVisitor: string | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VisitorMaxAggregateOutputType = {
    id: number | null
    codeVisitor: string | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VisitorCountAggregateOutputType = {
    id: number
    codeVisitor: number
    name: number
    email: number
    phone: number
    address: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VisitorAvgAggregateInputType = {
    id?: true
  }

  export type VisitorSumAggregateInputType = {
    id?: true
  }

  export type VisitorMinAggregateInputType = {
    id?: true
    codeVisitor?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VisitorMaxAggregateInputType = {
    id?: true
    codeVisitor?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VisitorCountAggregateInputType = {
    id?: true
    codeVisitor?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VisitorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visitor to aggregate.
     */
    where?: VisitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitors to fetch.
     */
    orderBy?: VisitorOrderByWithRelationInput | VisitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VisitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Visitors
    **/
    _count?: true | VisitorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VisitorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VisitorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisitorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisitorMaxAggregateInputType
  }

  export type GetVisitorAggregateType<T extends VisitorAggregateArgs> = {
        [P in keyof T & keyof AggregateVisitor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisitor[P]>
      : GetScalarType<T[P], AggregateVisitor[P]>
  }




  export type VisitorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitorWhereInput
    orderBy?: VisitorOrderByWithAggregationInput | VisitorOrderByWithAggregationInput[]
    by: VisitorScalarFieldEnum[] | VisitorScalarFieldEnum
    having?: VisitorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisitorCountAggregateInputType | true
    _avg?: VisitorAvgAggregateInputType
    _sum?: VisitorSumAggregateInputType
    _min?: VisitorMinAggregateInputType
    _max?: VisitorMaxAggregateInputType
  }

  export type VisitorGroupByOutputType = {
    id: number
    codeVisitor: string
    name: string
    email: string
    phone: string | null
    address: string | null
    createdAt: Date
    updatedAt: Date
    _count: VisitorCountAggregateOutputType | null
    _avg: VisitorAvgAggregateOutputType | null
    _sum: VisitorSumAggregateOutputType | null
    _min: VisitorMinAggregateOutputType | null
    _max: VisitorMaxAggregateOutputType | null
  }

  type GetVisitorGroupByPayload<T extends VisitorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisitorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisitorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisitorGroupByOutputType[P]>
            : GetScalarType<T[P], VisitorGroupByOutputType[P]>
        }
      >
    >


  export type VisitorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codeVisitor?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bills?: boolean | Visitor$billsArgs<ExtArgs>
    _count?: boolean | VisitorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visitor"]>

  export type VisitorSelectScalar = {
    id?: boolean
    codeVisitor?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VisitorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bills?: boolean | Visitor$billsArgs<ExtArgs>
    _count?: boolean | VisitorCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $VisitorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Visitor"
    objects: {
      bills: Prisma.$BillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      codeVisitor: string
      name: string
      email: string
      phone: string | null
      address: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["visitor"]>
    composites: {}
  }


  type VisitorGetPayload<S extends boolean | null | undefined | VisitorDefaultArgs> = $Result.GetResult<Prisma.$VisitorPayload, S>

  type VisitorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VisitorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VisitorCountAggregateInputType | true
    }

  export interface VisitorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Visitor'], meta: { name: 'Visitor' } }
    /**
     * Find zero or one Visitor that matches the filter.
     * @param {VisitorFindUniqueArgs} args - Arguments to find a Visitor
     * @example
     * // Get one Visitor
     * const visitor = await prisma.visitor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VisitorFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VisitorFindUniqueArgs<ExtArgs>>
    ): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Visitor that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VisitorFindUniqueOrThrowArgs} args - Arguments to find a Visitor
     * @example
     * // Get one Visitor
     * const visitor = await prisma.visitor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VisitorFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VisitorFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Visitor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorFindFirstArgs} args - Arguments to find a Visitor
     * @example
     * // Get one Visitor
     * const visitor = await prisma.visitor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VisitorFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VisitorFindFirstArgs<ExtArgs>>
    ): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Visitor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorFindFirstOrThrowArgs} args - Arguments to find a Visitor
     * @example
     * // Get one Visitor
     * const visitor = await prisma.visitor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VisitorFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VisitorFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Visitors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Visitors
     * const visitors = await prisma.visitor.findMany()
     * 
     * // Get first 10 Visitors
     * const visitors = await prisma.visitor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const visitorWithIdOnly = await prisma.visitor.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VisitorFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VisitorFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Visitor.
     * @param {VisitorCreateArgs} args - Arguments to create a Visitor.
     * @example
     * // Create one Visitor
     * const Visitor = await prisma.visitor.create({
     *   data: {
     *     // ... data to create a Visitor
     *   }
     * })
     * 
    **/
    create<T extends VisitorCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VisitorCreateArgs<ExtArgs>>
    ): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Visitors.
     *     @param {VisitorCreateManyArgs} args - Arguments to create many Visitors.
     *     @example
     *     // Create many Visitors
     *     const visitor = await prisma.visitor.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VisitorCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VisitorCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Visitor.
     * @param {VisitorDeleteArgs} args - Arguments to delete one Visitor.
     * @example
     * // Delete one Visitor
     * const Visitor = await prisma.visitor.delete({
     *   where: {
     *     // ... filter to delete one Visitor
     *   }
     * })
     * 
    **/
    delete<T extends VisitorDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VisitorDeleteArgs<ExtArgs>>
    ): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Visitor.
     * @param {VisitorUpdateArgs} args - Arguments to update one Visitor.
     * @example
     * // Update one Visitor
     * const visitor = await prisma.visitor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VisitorUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VisitorUpdateArgs<ExtArgs>>
    ): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Visitors.
     * @param {VisitorDeleteManyArgs} args - Arguments to filter Visitors to delete.
     * @example
     * // Delete a few Visitors
     * const { count } = await prisma.visitor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VisitorDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VisitorDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Visitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Visitors
     * const visitor = await prisma.visitor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VisitorUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VisitorUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Visitor.
     * @param {VisitorUpsertArgs} args - Arguments to update or create a Visitor.
     * @example
     * // Update or create a Visitor
     * const visitor = await prisma.visitor.upsert({
     *   create: {
     *     // ... data to create a Visitor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Visitor we want to update
     *   }
     * })
    **/
    upsert<T extends VisitorUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VisitorUpsertArgs<ExtArgs>>
    ): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Visitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorCountArgs} args - Arguments to filter Visitors to count.
     * @example
     * // Count the number of Visitors
     * const count = await prisma.visitor.count({
     *   where: {
     *     // ... the filter for the Visitors we want to count
     *   }
     * })
    **/
    count<T extends VisitorCountArgs>(
      args?: Subset<T, VisitorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisitorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Visitor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VisitorAggregateArgs>(args: Subset<T, VisitorAggregateArgs>): Prisma.PrismaPromise<GetVisitorAggregateType<T>>

    /**
     * Group by Visitor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorGroupByArgs} args - Group by arguments.
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
      T extends VisitorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisitorGroupByArgs['orderBy'] }
        : { orderBy?: VisitorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VisitorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisitorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Visitor model
   */
  readonly fields: VisitorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Visitor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VisitorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    bills<T extends Visitor$billsArgs<ExtArgs> = {}>(args?: Subset<T, Visitor$billsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Visitor model
   */ 
  interface VisitorFieldRefs {
    readonly id: FieldRef<"Visitor", 'Int'>
    readonly codeVisitor: FieldRef<"Visitor", 'String'>
    readonly name: FieldRef<"Visitor", 'String'>
    readonly email: FieldRef<"Visitor", 'String'>
    readonly phone: FieldRef<"Visitor", 'String'>
    readonly address: FieldRef<"Visitor", 'String'>
    readonly createdAt: FieldRef<"Visitor", 'DateTime'>
    readonly updatedAt: FieldRef<"Visitor", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Visitor findUnique
   */
  export type VisitorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * Filter, which Visitor to fetch.
     */
    where: VisitorWhereUniqueInput
  }


  /**
   * Visitor findUniqueOrThrow
   */
  export type VisitorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * Filter, which Visitor to fetch.
     */
    where: VisitorWhereUniqueInput
  }


  /**
   * Visitor findFirst
   */
  export type VisitorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * Filter, which Visitor to fetch.
     */
    where?: VisitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitors to fetch.
     */
    orderBy?: VisitorOrderByWithRelationInput | VisitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visitors.
     */
    cursor?: VisitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visitors.
     */
    distinct?: VisitorScalarFieldEnum | VisitorScalarFieldEnum[]
  }


  /**
   * Visitor findFirstOrThrow
   */
  export type VisitorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * Filter, which Visitor to fetch.
     */
    where?: VisitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitors to fetch.
     */
    orderBy?: VisitorOrderByWithRelationInput | VisitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visitors.
     */
    cursor?: VisitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visitors.
     */
    distinct?: VisitorScalarFieldEnum | VisitorScalarFieldEnum[]
  }


  /**
   * Visitor findMany
   */
  export type VisitorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * Filter, which Visitors to fetch.
     */
    where?: VisitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitors to fetch.
     */
    orderBy?: VisitorOrderByWithRelationInput | VisitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Visitors.
     */
    cursor?: VisitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitors.
     */
    skip?: number
    distinct?: VisitorScalarFieldEnum | VisitorScalarFieldEnum[]
  }


  /**
   * Visitor create
   */
  export type VisitorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * The data needed to create a Visitor.
     */
    data: XOR<VisitorCreateInput, VisitorUncheckedCreateInput>
  }


  /**
   * Visitor createMany
   */
  export type VisitorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Visitors.
     */
    data: VisitorCreateManyInput | VisitorCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Visitor update
   */
  export type VisitorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * The data needed to update a Visitor.
     */
    data: XOR<VisitorUpdateInput, VisitorUncheckedUpdateInput>
    /**
     * Choose, which Visitor to update.
     */
    where: VisitorWhereUniqueInput
  }


  /**
   * Visitor updateMany
   */
  export type VisitorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Visitors.
     */
    data: XOR<VisitorUpdateManyMutationInput, VisitorUncheckedUpdateManyInput>
    /**
     * Filter which Visitors to update
     */
    where?: VisitorWhereInput
  }


  /**
   * Visitor upsert
   */
  export type VisitorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * The filter to search for the Visitor to update in case it exists.
     */
    where: VisitorWhereUniqueInput
    /**
     * In case the Visitor found by the `where` argument doesn't exist, create a new Visitor with this data.
     */
    create: XOR<VisitorCreateInput, VisitorUncheckedCreateInput>
    /**
     * In case the Visitor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisitorUpdateInput, VisitorUncheckedUpdateInput>
  }


  /**
   * Visitor delete
   */
  export type VisitorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * Filter which Visitor to delete.
     */
    where: VisitorWhereUniqueInput
  }


  /**
   * Visitor deleteMany
   */
  export type VisitorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visitors to delete
     */
    where?: VisitorWhereInput
  }


  /**
   * Visitor.bills
   */
  export type Visitor$billsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillInclude<ExtArgs> | null
    where?: BillWhereInput
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    cursor?: BillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }


  /**
   * Visitor without action
   */
  export type VisitorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitorInclude<ExtArgs> | null
  }



  /**
   * Model Bill
   */

  export type AggregateBill = {
    _count: BillCountAggregateOutputType | null
    _avg: BillAvgAggregateOutputType | null
    _sum: BillSumAggregateOutputType | null
    _min: BillMinAggregateOutputType | null
    _max: BillMaxAggregateOutputType | null
  }

  export type BillAvgAggregateOutputType = {
    id: number | null
    total: number | null
    id_Visitor: number | null
    id_user: number | null
    status: number | null
  }

  export type BillSumAggregateOutputType = {
    id: number | null
    total: number | null
    id_Visitor: number | null
    id_user: number | null
    status: number | null
  }

  export type BillMinAggregateOutputType = {
    id: number | null
    codeBill: string | null
    total: number | null
    id_Visitor: number | null
    id_user: number | null
    status: number | null
    paymenttype: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BillMaxAggregateOutputType = {
    id: number | null
    codeBill: string | null
    total: number | null
    id_Visitor: number | null
    id_user: number | null
    status: number | null
    paymenttype: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BillCountAggregateOutputType = {
    id: number
    codeBill: number
    total: number
    id_Visitor: number
    id_user: number
    status: number
    paymenttype: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BillAvgAggregateInputType = {
    id?: true
    total?: true
    id_Visitor?: true
    id_user?: true
    status?: true
  }

  export type BillSumAggregateInputType = {
    id?: true
    total?: true
    id_Visitor?: true
    id_user?: true
    status?: true
  }

  export type BillMinAggregateInputType = {
    id?: true
    codeBill?: true
    total?: true
    id_Visitor?: true
    id_user?: true
    status?: true
    paymenttype?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BillMaxAggregateInputType = {
    id?: true
    codeBill?: true
    total?: true
    id_Visitor?: true
    id_user?: true
    status?: true
    paymenttype?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BillCountAggregateInputType = {
    id?: true
    codeBill?: true
    total?: true
    id_Visitor?: true
    id_user?: true
    status?: true
    paymenttype?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bill to aggregate.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bills
    **/
    _count?: true | BillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BillMaxAggregateInputType
  }

  export type GetBillAggregateType<T extends BillAggregateArgs> = {
        [P in keyof T & keyof AggregateBill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBill[P]>
      : GetScalarType<T[P], AggregateBill[P]>
  }




  export type BillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillWhereInput
    orderBy?: BillOrderByWithAggregationInput | BillOrderByWithAggregationInput[]
    by: BillScalarFieldEnum[] | BillScalarFieldEnum
    having?: BillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BillCountAggregateInputType | true
    _avg?: BillAvgAggregateInputType
    _sum?: BillSumAggregateInputType
    _min?: BillMinAggregateInputType
    _max?: BillMaxAggregateInputType
  }

  export type BillGroupByOutputType = {
    id: number
    codeBill: string
    total: number
    id_Visitor: number
    id_user: number
    status: number
    paymenttype: string | null
    createdAt: Date
    updatedAt: Date
    _count: BillCountAggregateOutputType | null
    _avg: BillAvgAggregateOutputType | null
    _sum: BillSumAggregateOutputType | null
    _min: BillMinAggregateOutputType | null
    _max: BillMaxAggregateOutputType | null
  }

  type GetBillGroupByPayload<T extends BillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BillGroupByOutputType[P]>
            : GetScalarType<T[P], BillGroupByOutputType[P]>
        }
      >
    >


  export type BillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codeBill?: boolean
    total?: boolean
    id_Visitor?: boolean
    id_user?: boolean
    status?: boolean
    paymenttype?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    visitor?: boolean | VisitorDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    invoicedetails?: boolean | Bill$invoicedetailsArgs<ExtArgs>
    _count?: boolean | BillCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bill"]>

  export type BillSelectScalar = {
    id?: boolean
    codeBill?: boolean
    total?: boolean
    id_Visitor?: boolean
    id_user?: boolean
    status?: boolean
    paymenttype?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visitor?: boolean | VisitorDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    invoicedetails?: boolean | Bill$invoicedetailsArgs<ExtArgs>
    _count?: boolean | BillCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $BillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bill"
    objects: {
      visitor: Prisma.$VisitorPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      invoicedetails: Prisma.$invoicedetailsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      codeBill: string
      total: number
      id_Visitor: number
      id_user: number
      status: number
      paymenttype: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bill"]>
    composites: {}
  }


  type BillGetPayload<S extends boolean | null | undefined | BillDefaultArgs> = $Result.GetResult<Prisma.$BillPayload, S>

  type BillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BillFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BillCountAggregateInputType | true
    }

  export interface BillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bill'], meta: { name: 'Bill' } }
    /**
     * Find zero or one Bill that matches the filter.
     * @param {BillFindUniqueArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BillFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BillFindUniqueArgs<ExtArgs>>
    ): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Bill that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BillFindUniqueOrThrowArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BillFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BillFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Bill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillFindFirstArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BillFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BillFindFirstArgs<ExtArgs>>
    ): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Bill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillFindFirstOrThrowArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BillFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BillFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Bills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bills
     * const bills = await prisma.bill.findMany()
     * 
     * // Get first 10 Bills
     * const bills = await prisma.bill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const billWithIdOnly = await prisma.bill.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BillFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BillFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Bill.
     * @param {BillCreateArgs} args - Arguments to create a Bill.
     * @example
     * // Create one Bill
     * const Bill = await prisma.bill.create({
     *   data: {
     *     // ... data to create a Bill
     *   }
     * })
     * 
    **/
    create<T extends BillCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BillCreateArgs<ExtArgs>>
    ): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Bills.
     *     @param {BillCreateManyArgs} args - Arguments to create many Bills.
     *     @example
     *     // Create many Bills
     *     const bill = await prisma.bill.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BillCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BillCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bill.
     * @param {BillDeleteArgs} args - Arguments to delete one Bill.
     * @example
     * // Delete one Bill
     * const Bill = await prisma.bill.delete({
     *   where: {
     *     // ... filter to delete one Bill
     *   }
     * })
     * 
    **/
    delete<T extends BillDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BillDeleteArgs<ExtArgs>>
    ): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Bill.
     * @param {BillUpdateArgs} args - Arguments to update one Bill.
     * @example
     * // Update one Bill
     * const bill = await prisma.bill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BillUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BillUpdateArgs<ExtArgs>>
    ): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Bills.
     * @param {BillDeleteManyArgs} args - Arguments to filter Bills to delete.
     * @example
     * // Delete a few Bills
     * const { count } = await prisma.bill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BillDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BillDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bills
     * const bill = await prisma.bill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BillUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BillUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bill.
     * @param {BillUpsertArgs} args - Arguments to update or create a Bill.
     * @example
     * // Update or create a Bill
     * const bill = await prisma.bill.upsert({
     *   create: {
     *     // ... data to create a Bill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bill we want to update
     *   }
     * })
    **/
    upsert<T extends BillUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BillUpsertArgs<ExtArgs>>
    ): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillCountArgs} args - Arguments to filter Bills to count.
     * @example
     * // Count the number of Bills
     * const count = await prisma.bill.count({
     *   where: {
     *     // ... the filter for the Bills we want to count
     *   }
     * })
    **/
    count<T extends BillCountArgs>(
      args?: Subset<T, BillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BillAggregateArgs>(args: Subset<T, BillAggregateArgs>): Prisma.PrismaPromise<GetBillAggregateType<T>>

    /**
     * Group by Bill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillGroupByArgs} args - Group by arguments.
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
      T extends BillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BillGroupByArgs['orderBy'] }
        : { orderBy?: BillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bill model
   */
  readonly fields: BillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    visitor<T extends VisitorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VisitorDefaultArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    invoicedetails<T extends Bill$invoicedetailsArgs<ExtArgs> = {}>(args?: Subset<T, Bill$invoicedetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicedetailsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Bill model
   */ 
  interface BillFieldRefs {
    readonly id: FieldRef<"Bill", 'Int'>
    readonly codeBill: FieldRef<"Bill", 'String'>
    readonly total: FieldRef<"Bill", 'Float'>
    readonly id_Visitor: FieldRef<"Bill", 'Int'>
    readonly id_user: FieldRef<"Bill", 'Int'>
    readonly status: FieldRef<"Bill", 'Int'>
    readonly paymenttype: FieldRef<"Bill", 'String'>
    readonly createdAt: FieldRef<"Bill", 'DateTime'>
    readonly updatedAt: FieldRef<"Bill", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Bill findUnique
   */
  export type BillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where: BillWhereUniqueInput
  }


  /**
   * Bill findUniqueOrThrow
   */
  export type BillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where: BillWhereUniqueInput
  }


  /**
   * Bill findFirst
   */
  export type BillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bills.
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bills.
     */
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }


  /**
   * Bill findFirstOrThrow
   */
  export type BillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bills.
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bills.
     */
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }


  /**
   * Bill findMany
   */
  export type BillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bills to fetch.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bills.
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }


  /**
   * Bill create
   */
  export type BillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * The data needed to create a Bill.
     */
    data: XOR<BillCreateInput, BillUncheckedCreateInput>
  }


  /**
   * Bill createMany
   */
  export type BillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bills.
     */
    data: BillCreateManyInput | BillCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Bill update
   */
  export type BillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * The data needed to update a Bill.
     */
    data: XOR<BillUpdateInput, BillUncheckedUpdateInput>
    /**
     * Choose, which Bill to update.
     */
    where: BillWhereUniqueInput
  }


  /**
   * Bill updateMany
   */
  export type BillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bills.
     */
    data: XOR<BillUpdateManyMutationInput, BillUncheckedUpdateManyInput>
    /**
     * Filter which Bills to update
     */
    where?: BillWhereInput
  }


  /**
   * Bill upsert
   */
  export type BillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * The filter to search for the Bill to update in case it exists.
     */
    where: BillWhereUniqueInput
    /**
     * In case the Bill found by the `where` argument doesn't exist, create a new Bill with this data.
     */
    create: XOR<BillCreateInput, BillUncheckedCreateInput>
    /**
     * In case the Bill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BillUpdateInput, BillUncheckedUpdateInput>
  }


  /**
   * Bill delete
   */
  export type BillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter which Bill to delete.
     */
    where: BillWhereUniqueInput
  }


  /**
   * Bill deleteMany
   */
  export type BillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bills to delete
     */
    where?: BillWhereInput
  }


  /**
   * Bill.invoicedetails
   */
  export type Bill$invoicedetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoicedetails
     */
    select?: invoicedetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: invoicedetailsInclude<ExtArgs> | null
    where?: invoicedetailsWhereInput
    orderBy?: invoicedetailsOrderByWithRelationInput | invoicedetailsOrderByWithRelationInput[]
    cursor?: invoicedetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoicedetailsScalarFieldEnum | InvoicedetailsScalarFieldEnum[]
  }


  /**
   * Bill without action
   */
  export type BillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillInclude<ExtArgs> | null
  }



  /**
   * Model invoicedetails
   */

  export type AggregateInvoicedetails = {
    _count: InvoicedetailsCountAggregateOutputType | null
    _avg: InvoicedetailsAvgAggregateOutputType | null
    _sum: InvoicedetailsSumAggregateOutputType | null
    _min: InvoicedetailsMinAggregateOutputType | null
    _max: InvoicedetailsMaxAggregateOutputType | null
  }

  export type InvoicedetailsAvgAggregateOutputType = {
    id: number | null
    id_bill: number | null
    id_product: number | null
    qty: number | null
  }

  export type InvoicedetailsSumAggregateOutputType = {
    id: number | null
    id_bill: number | null
    id_product: number | null
    qty: number | null
  }

  export type InvoicedetailsMinAggregateOutputType = {
    id: number | null
    id_bill: number | null
    id_product: number | null
    qty: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoicedetailsMaxAggregateOutputType = {
    id: number | null
    id_bill: number | null
    id_product: number | null
    qty: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoicedetailsCountAggregateOutputType = {
    id: number
    id_bill: number
    id_product: number
    qty: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InvoicedetailsAvgAggregateInputType = {
    id?: true
    id_bill?: true
    id_product?: true
    qty?: true
  }

  export type InvoicedetailsSumAggregateInputType = {
    id?: true
    id_bill?: true
    id_product?: true
    qty?: true
  }

  export type InvoicedetailsMinAggregateInputType = {
    id?: true
    id_bill?: true
    id_product?: true
    qty?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoicedetailsMaxAggregateInputType = {
    id?: true
    id_bill?: true
    id_product?: true
    qty?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoicedetailsCountAggregateInputType = {
    id?: true
    id_bill?: true
    id_product?: true
    qty?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InvoicedetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invoicedetails to aggregate.
     */
    where?: invoicedetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoicedetails to fetch.
     */
    orderBy?: invoicedetailsOrderByWithRelationInput | invoicedetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: invoicedetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoicedetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoicedetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned invoicedetails
    **/
    _count?: true | InvoicedetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoicedetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoicedetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoicedetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoicedetailsMaxAggregateInputType
  }

  export type GetInvoicedetailsAggregateType<T extends InvoicedetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoicedetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoicedetails[P]>
      : GetScalarType<T[P], AggregateInvoicedetails[P]>
  }




  export type invoicedetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoicedetailsWhereInput
    orderBy?: invoicedetailsOrderByWithAggregationInput | invoicedetailsOrderByWithAggregationInput[]
    by: InvoicedetailsScalarFieldEnum[] | InvoicedetailsScalarFieldEnum
    having?: invoicedetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoicedetailsCountAggregateInputType | true
    _avg?: InvoicedetailsAvgAggregateInputType
    _sum?: InvoicedetailsSumAggregateInputType
    _min?: InvoicedetailsMinAggregateInputType
    _max?: InvoicedetailsMaxAggregateInputType
  }

  export type InvoicedetailsGroupByOutputType = {
    id: number
    id_bill: number
    id_product: number
    qty: number
    createdAt: Date
    updatedAt: Date
    _count: InvoicedetailsCountAggregateOutputType | null
    _avg: InvoicedetailsAvgAggregateOutputType | null
    _sum: InvoicedetailsSumAggregateOutputType | null
    _min: InvoicedetailsMinAggregateOutputType | null
    _max: InvoicedetailsMaxAggregateOutputType | null
  }

  type GetInvoicedetailsGroupByPayload<T extends invoicedetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoicedetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoicedetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoicedetailsGroupByOutputType[P]>
            : GetScalarType<T[P], InvoicedetailsGroupByOutputType[P]>
        }
      >
    >


  export type invoicedetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_bill?: boolean
    id_product?: boolean
    qty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bill?: boolean | BillDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoicedetails"]>

  export type invoicedetailsSelectScalar = {
    id?: boolean
    id_bill?: boolean
    id_product?: boolean
    qty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type invoicedetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bill?: boolean | BillDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }


  export type $invoicedetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "invoicedetails"
    objects: {
      bill: Prisma.$BillPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_bill: number
      id_product: number
      qty: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["invoicedetails"]>
    composites: {}
  }


  type invoicedetailsGetPayload<S extends boolean | null | undefined | invoicedetailsDefaultArgs> = $Result.GetResult<Prisma.$invoicedetailsPayload, S>

  type invoicedetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<invoicedetailsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InvoicedetailsCountAggregateInputType | true
    }

  export interface invoicedetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['invoicedetails'], meta: { name: 'invoicedetails' } }
    /**
     * Find zero or one Invoicedetails that matches the filter.
     * @param {invoicedetailsFindUniqueArgs} args - Arguments to find a Invoicedetails
     * @example
     * // Get one Invoicedetails
     * const invoicedetails = await prisma.invoicedetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends invoicedetailsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, invoicedetailsFindUniqueArgs<ExtArgs>>
    ): Prisma__invoicedetailsClient<$Result.GetResult<Prisma.$invoicedetailsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Invoicedetails that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {invoicedetailsFindUniqueOrThrowArgs} args - Arguments to find a Invoicedetails
     * @example
     * // Get one Invoicedetails
     * const invoicedetails = await prisma.invoicedetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends invoicedetailsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, invoicedetailsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__invoicedetailsClient<$Result.GetResult<Prisma.$invoicedetailsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Invoicedetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicedetailsFindFirstArgs} args - Arguments to find a Invoicedetails
     * @example
     * // Get one Invoicedetails
     * const invoicedetails = await prisma.invoicedetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends invoicedetailsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, invoicedetailsFindFirstArgs<ExtArgs>>
    ): Prisma__invoicedetailsClient<$Result.GetResult<Prisma.$invoicedetailsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Invoicedetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicedetailsFindFirstOrThrowArgs} args - Arguments to find a Invoicedetails
     * @example
     * // Get one Invoicedetails
     * const invoicedetails = await prisma.invoicedetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends invoicedetailsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, invoicedetailsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__invoicedetailsClient<$Result.GetResult<Prisma.$invoicedetailsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Invoicedetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicedetailsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoicedetails
     * const invoicedetails = await prisma.invoicedetails.findMany()
     * 
     * // Get first 10 Invoicedetails
     * const invoicedetails = await prisma.invoicedetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoicedetailsWithIdOnly = await prisma.invoicedetails.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends invoicedetailsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, invoicedetailsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicedetailsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Invoicedetails.
     * @param {invoicedetailsCreateArgs} args - Arguments to create a Invoicedetails.
     * @example
     * // Create one Invoicedetails
     * const Invoicedetails = await prisma.invoicedetails.create({
     *   data: {
     *     // ... data to create a Invoicedetails
     *   }
     * })
     * 
    **/
    create<T extends invoicedetailsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, invoicedetailsCreateArgs<ExtArgs>>
    ): Prisma__invoicedetailsClient<$Result.GetResult<Prisma.$invoicedetailsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Invoicedetails.
     *     @param {invoicedetailsCreateManyArgs} args - Arguments to create many Invoicedetails.
     *     @example
     *     // Create many Invoicedetails
     *     const invoicedetails = await prisma.invoicedetails.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends invoicedetailsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, invoicedetailsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Invoicedetails.
     * @param {invoicedetailsDeleteArgs} args - Arguments to delete one Invoicedetails.
     * @example
     * // Delete one Invoicedetails
     * const Invoicedetails = await prisma.invoicedetails.delete({
     *   where: {
     *     // ... filter to delete one Invoicedetails
     *   }
     * })
     * 
    **/
    delete<T extends invoicedetailsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, invoicedetailsDeleteArgs<ExtArgs>>
    ): Prisma__invoicedetailsClient<$Result.GetResult<Prisma.$invoicedetailsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Invoicedetails.
     * @param {invoicedetailsUpdateArgs} args - Arguments to update one Invoicedetails.
     * @example
     * // Update one Invoicedetails
     * const invoicedetails = await prisma.invoicedetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends invoicedetailsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, invoicedetailsUpdateArgs<ExtArgs>>
    ): Prisma__invoicedetailsClient<$Result.GetResult<Prisma.$invoicedetailsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Invoicedetails.
     * @param {invoicedetailsDeleteManyArgs} args - Arguments to filter Invoicedetails to delete.
     * @example
     * // Delete a few Invoicedetails
     * const { count } = await prisma.invoicedetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends invoicedetailsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, invoicedetailsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoicedetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicedetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoicedetails
     * const invoicedetails = await prisma.invoicedetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends invoicedetailsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, invoicedetailsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Invoicedetails.
     * @param {invoicedetailsUpsertArgs} args - Arguments to update or create a Invoicedetails.
     * @example
     * // Update or create a Invoicedetails
     * const invoicedetails = await prisma.invoicedetails.upsert({
     *   create: {
     *     // ... data to create a Invoicedetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoicedetails we want to update
     *   }
     * })
    **/
    upsert<T extends invoicedetailsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, invoicedetailsUpsertArgs<ExtArgs>>
    ): Prisma__invoicedetailsClient<$Result.GetResult<Prisma.$invoicedetailsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Invoicedetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicedetailsCountArgs} args - Arguments to filter Invoicedetails to count.
     * @example
     * // Count the number of Invoicedetails
     * const count = await prisma.invoicedetails.count({
     *   where: {
     *     // ... the filter for the Invoicedetails we want to count
     *   }
     * })
    **/
    count<T extends invoicedetailsCountArgs>(
      args?: Subset<T, invoicedetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoicedetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoicedetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoicedetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvoicedetailsAggregateArgs>(args: Subset<T, InvoicedetailsAggregateArgs>): Prisma.PrismaPromise<GetInvoicedetailsAggregateType<T>>

    /**
     * Group by Invoicedetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicedetailsGroupByArgs} args - Group by arguments.
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
      T extends invoicedetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: invoicedetailsGroupByArgs['orderBy'] }
        : { orderBy?: invoicedetailsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, invoicedetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoicedetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the invoicedetails model
   */
  readonly fields: invoicedetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for invoicedetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__invoicedetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    bill<T extends BillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BillDefaultArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the invoicedetails model
   */ 
  interface invoicedetailsFieldRefs {
    readonly id: FieldRef<"invoicedetails", 'Int'>
    readonly id_bill: FieldRef<"invoicedetails", 'Int'>
    readonly id_product: FieldRef<"invoicedetails", 'Int'>
    readonly qty: FieldRef<"invoicedetails", 'Int'>
    readonly createdAt: FieldRef<"invoicedetails", 'DateTime'>
    readonly updatedAt: FieldRef<"invoicedetails", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * invoicedetails findUnique
   */
  export type invoicedetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoicedetails
     */
    select?: invoicedetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: invoicedetailsInclude<ExtArgs> | null
    /**
     * Filter, which invoicedetails to fetch.
     */
    where: invoicedetailsWhereUniqueInput
  }


  /**
   * invoicedetails findUniqueOrThrow
   */
  export type invoicedetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoicedetails
     */
    select?: invoicedetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: invoicedetailsInclude<ExtArgs> | null
    /**
     * Filter, which invoicedetails to fetch.
     */
    where: invoicedetailsWhereUniqueInput
  }


  /**
   * invoicedetails findFirst
   */
  export type invoicedetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoicedetails
     */
    select?: invoicedetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: invoicedetailsInclude<ExtArgs> | null
    /**
     * Filter, which invoicedetails to fetch.
     */
    where?: invoicedetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoicedetails to fetch.
     */
    orderBy?: invoicedetailsOrderByWithRelationInput | invoicedetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invoicedetails.
     */
    cursor?: invoicedetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoicedetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoicedetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invoicedetails.
     */
    distinct?: InvoicedetailsScalarFieldEnum | InvoicedetailsScalarFieldEnum[]
  }


  /**
   * invoicedetails findFirstOrThrow
   */
  export type invoicedetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoicedetails
     */
    select?: invoicedetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: invoicedetailsInclude<ExtArgs> | null
    /**
     * Filter, which invoicedetails to fetch.
     */
    where?: invoicedetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoicedetails to fetch.
     */
    orderBy?: invoicedetailsOrderByWithRelationInput | invoicedetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invoicedetails.
     */
    cursor?: invoicedetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoicedetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoicedetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invoicedetails.
     */
    distinct?: InvoicedetailsScalarFieldEnum | InvoicedetailsScalarFieldEnum[]
  }


  /**
   * invoicedetails findMany
   */
  export type invoicedetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoicedetails
     */
    select?: invoicedetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: invoicedetailsInclude<ExtArgs> | null
    /**
     * Filter, which invoicedetails to fetch.
     */
    where?: invoicedetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoicedetails to fetch.
     */
    orderBy?: invoicedetailsOrderByWithRelationInput | invoicedetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing invoicedetails.
     */
    cursor?: invoicedetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoicedetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoicedetails.
     */
    skip?: number
    distinct?: InvoicedetailsScalarFieldEnum | InvoicedetailsScalarFieldEnum[]
  }


  /**
   * invoicedetails create
   */
  export type invoicedetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoicedetails
     */
    select?: invoicedetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: invoicedetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a invoicedetails.
     */
    data: XOR<invoicedetailsCreateInput, invoicedetailsUncheckedCreateInput>
  }


  /**
   * invoicedetails createMany
   */
  export type invoicedetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many invoicedetails.
     */
    data: invoicedetailsCreateManyInput | invoicedetailsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * invoicedetails update
   */
  export type invoicedetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoicedetails
     */
    select?: invoicedetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: invoicedetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a invoicedetails.
     */
    data: XOR<invoicedetailsUpdateInput, invoicedetailsUncheckedUpdateInput>
    /**
     * Choose, which invoicedetails to update.
     */
    where: invoicedetailsWhereUniqueInput
  }


  /**
   * invoicedetails updateMany
   */
  export type invoicedetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update invoicedetails.
     */
    data: XOR<invoicedetailsUpdateManyMutationInput, invoicedetailsUncheckedUpdateManyInput>
    /**
     * Filter which invoicedetails to update
     */
    where?: invoicedetailsWhereInput
  }


  /**
   * invoicedetails upsert
   */
  export type invoicedetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoicedetails
     */
    select?: invoicedetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: invoicedetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the invoicedetails to update in case it exists.
     */
    where: invoicedetailsWhereUniqueInput
    /**
     * In case the invoicedetails found by the `where` argument doesn't exist, create a new invoicedetails with this data.
     */
    create: XOR<invoicedetailsCreateInput, invoicedetailsUncheckedCreateInput>
    /**
     * In case the invoicedetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<invoicedetailsUpdateInput, invoicedetailsUncheckedUpdateInput>
  }


  /**
   * invoicedetails delete
   */
  export type invoicedetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoicedetails
     */
    select?: invoicedetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: invoicedetailsInclude<ExtArgs> | null
    /**
     * Filter which invoicedetails to delete.
     */
    where: invoicedetailsWhereUniqueInput
  }


  /**
   * invoicedetails deleteMany
   */
  export type invoicedetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invoicedetails to delete
     */
    where?: invoicedetailsWhereInput
  }


  /**
   * invoicedetails without action
   */
  export type invoicedetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoicedetails
     */
    select?: invoicedetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: invoicedetailsInclude<ExtArgs> | null
  }



  /**
   * Model RateBlog
   */

  export type AggregateRateBlog = {
    _count: RateBlogCountAggregateOutputType | null
    _avg: RateBlogAvgAggregateOutputType | null
    _sum: RateBlogSumAggregateOutputType | null
    _min: RateBlogMinAggregateOutputType | null
    _max: RateBlogMaxAggregateOutputType | null
  }

  export type RateBlogAvgAggregateOutputType = {
    id: number | null
    id_blog: number | null
    id_user: number | null
    rate: number | null
  }

  export type RateBlogSumAggregateOutputType = {
    id: number | null
    id_blog: number | null
    id_user: number | null
    rate: number | null
  }

  export type RateBlogMinAggregateOutputType = {
    id: number | null
    id_blog: number | null
    id_user: number | null
    rate: number | null
  }

  export type RateBlogMaxAggregateOutputType = {
    id: number | null
    id_blog: number | null
    id_user: number | null
    rate: number | null
  }

  export type RateBlogCountAggregateOutputType = {
    id: number
    id_blog: number
    id_user: number
    rate: number
    _all: number
  }


  export type RateBlogAvgAggregateInputType = {
    id?: true
    id_blog?: true
    id_user?: true
    rate?: true
  }

  export type RateBlogSumAggregateInputType = {
    id?: true
    id_blog?: true
    id_user?: true
    rate?: true
  }

  export type RateBlogMinAggregateInputType = {
    id?: true
    id_blog?: true
    id_user?: true
    rate?: true
  }

  export type RateBlogMaxAggregateInputType = {
    id?: true
    id_blog?: true
    id_user?: true
    rate?: true
  }

  export type RateBlogCountAggregateInputType = {
    id?: true
    id_blog?: true
    id_user?: true
    rate?: true
    _all?: true
  }

  export type RateBlogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RateBlog to aggregate.
     */
    where?: RateBlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RateBlogs to fetch.
     */
    orderBy?: RateBlogOrderByWithRelationInput | RateBlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RateBlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RateBlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RateBlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RateBlogs
    **/
    _count?: true | RateBlogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RateBlogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RateBlogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RateBlogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RateBlogMaxAggregateInputType
  }

  export type GetRateBlogAggregateType<T extends RateBlogAggregateArgs> = {
        [P in keyof T & keyof AggregateRateBlog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRateBlog[P]>
      : GetScalarType<T[P], AggregateRateBlog[P]>
  }




  export type RateBlogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RateBlogWhereInput
    orderBy?: RateBlogOrderByWithAggregationInput | RateBlogOrderByWithAggregationInput[]
    by: RateBlogScalarFieldEnum[] | RateBlogScalarFieldEnum
    having?: RateBlogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RateBlogCountAggregateInputType | true
    _avg?: RateBlogAvgAggregateInputType
    _sum?: RateBlogSumAggregateInputType
    _min?: RateBlogMinAggregateInputType
    _max?: RateBlogMaxAggregateInputType
  }

  export type RateBlogGroupByOutputType = {
    id: number
    id_blog: number
    id_user: number
    rate: number
    _count: RateBlogCountAggregateOutputType | null
    _avg: RateBlogAvgAggregateOutputType | null
    _sum: RateBlogSumAggregateOutputType | null
    _min: RateBlogMinAggregateOutputType | null
    _max: RateBlogMaxAggregateOutputType | null
  }

  type GetRateBlogGroupByPayload<T extends RateBlogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RateBlogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RateBlogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RateBlogGroupByOutputType[P]>
            : GetScalarType<T[P], RateBlogGroupByOutputType[P]>
        }
      >
    >


  export type RateBlogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_blog?: boolean
    id_user?: boolean
    rate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rateBlog"]>

  export type RateBlogSelectScalar = {
    id?: boolean
    id_blog?: boolean
    id_user?: boolean
    rate?: boolean
  }

  export type RateBlogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }


  export type $RateBlogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RateBlog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      blog: Prisma.$BlogPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_blog: number
      id_user: number
      rate: number
    }, ExtArgs["result"]["rateBlog"]>
    composites: {}
  }


  type RateBlogGetPayload<S extends boolean | null | undefined | RateBlogDefaultArgs> = $Result.GetResult<Prisma.$RateBlogPayload, S>

  type RateBlogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RateBlogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RateBlogCountAggregateInputType | true
    }

  export interface RateBlogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RateBlog'], meta: { name: 'RateBlog' } }
    /**
     * Find zero or one RateBlog that matches the filter.
     * @param {RateBlogFindUniqueArgs} args - Arguments to find a RateBlog
     * @example
     * // Get one RateBlog
     * const rateBlog = await prisma.rateBlog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RateBlogFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RateBlogFindUniqueArgs<ExtArgs>>
    ): Prisma__RateBlogClient<$Result.GetResult<Prisma.$RateBlogPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one RateBlog that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RateBlogFindUniqueOrThrowArgs} args - Arguments to find a RateBlog
     * @example
     * // Get one RateBlog
     * const rateBlog = await prisma.rateBlog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RateBlogFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RateBlogFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RateBlogClient<$Result.GetResult<Prisma.$RateBlogPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first RateBlog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateBlogFindFirstArgs} args - Arguments to find a RateBlog
     * @example
     * // Get one RateBlog
     * const rateBlog = await prisma.rateBlog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RateBlogFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RateBlogFindFirstArgs<ExtArgs>>
    ): Prisma__RateBlogClient<$Result.GetResult<Prisma.$RateBlogPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first RateBlog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateBlogFindFirstOrThrowArgs} args - Arguments to find a RateBlog
     * @example
     * // Get one RateBlog
     * const rateBlog = await prisma.rateBlog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RateBlogFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RateBlogFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RateBlogClient<$Result.GetResult<Prisma.$RateBlogPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more RateBlogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateBlogFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RateBlogs
     * const rateBlogs = await prisma.rateBlog.findMany()
     * 
     * // Get first 10 RateBlogs
     * const rateBlogs = await prisma.rateBlog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rateBlogWithIdOnly = await prisma.rateBlog.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RateBlogFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RateBlogFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RateBlogPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a RateBlog.
     * @param {RateBlogCreateArgs} args - Arguments to create a RateBlog.
     * @example
     * // Create one RateBlog
     * const RateBlog = await prisma.rateBlog.create({
     *   data: {
     *     // ... data to create a RateBlog
     *   }
     * })
     * 
    **/
    create<T extends RateBlogCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RateBlogCreateArgs<ExtArgs>>
    ): Prisma__RateBlogClient<$Result.GetResult<Prisma.$RateBlogPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many RateBlogs.
     *     @param {RateBlogCreateManyArgs} args - Arguments to create many RateBlogs.
     *     @example
     *     // Create many RateBlogs
     *     const rateBlog = await prisma.rateBlog.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RateBlogCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RateBlogCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RateBlog.
     * @param {RateBlogDeleteArgs} args - Arguments to delete one RateBlog.
     * @example
     * // Delete one RateBlog
     * const RateBlog = await prisma.rateBlog.delete({
     *   where: {
     *     // ... filter to delete one RateBlog
     *   }
     * })
     * 
    **/
    delete<T extends RateBlogDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RateBlogDeleteArgs<ExtArgs>>
    ): Prisma__RateBlogClient<$Result.GetResult<Prisma.$RateBlogPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one RateBlog.
     * @param {RateBlogUpdateArgs} args - Arguments to update one RateBlog.
     * @example
     * // Update one RateBlog
     * const rateBlog = await prisma.rateBlog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RateBlogUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RateBlogUpdateArgs<ExtArgs>>
    ): Prisma__RateBlogClient<$Result.GetResult<Prisma.$RateBlogPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more RateBlogs.
     * @param {RateBlogDeleteManyArgs} args - Arguments to filter RateBlogs to delete.
     * @example
     * // Delete a few RateBlogs
     * const { count } = await prisma.rateBlog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RateBlogDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RateBlogDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RateBlogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateBlogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RateBlogs
     * const rateBlog = await prisma.rateBlog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RateBlogUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RateBlogUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RateBlog.
     * @param {RateBlogUpsertArgs} args - Arguments to update or create a RateBlog.
     * @example
     * // Update or create a RateBlog
     * const rateBlog = await prisma.rateBlog.upsert({
     *   create: {
     *     // ... data to create a RateBlog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RateBlog we want to update
     *   }
     * })
    **/
    upsert<T extends RateBlogUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RateBlogUpsertArgs<ExtArgs>>
    ): Prisma__RateBlogClient<$Result.GetResult<Prisma.$RateBlogPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of RateBlogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateBlogCountArgs} args - Arguments to filter RateBlogs to count.
     * @example
     * // Count the number of RateBlogs
     * const count = await prisma.rateBlog.count({
     *   where: {
     *     // ... the filter for the RateBlogs we want to count
     *   }
     * })
    **/
    count<T extends RateBlogCountArgs>(
      args?: Subset<T, RateBlogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RateBlogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RateBlog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateBlogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RateBlogAggregateArgs>(args: Subset<T, RateBlogAggregateArgs>): Prisma.PrismaPromise<GetRateBlogAggregateType<T>>

    /**
     * Group by RateBlog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateBlogGroupByArgs} args - Group by arguments.
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
      T extends RateBlogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RateBlogGroupByArgs['orderBy'] }
        : { orderBy?: RateBlogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RateBlogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRateBlogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RateBlog model
   */
  readonly fields: RateBlogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RateBlog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RateBlogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    blog<T extends BlogDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlogDefaultArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the RateBlog model
   */ 
  interface RateBlogFieldRefs {
    readonly id: FieldRef<"RateBlog", 'Int'>
    readonly id_blog: FieldRef<"RateBlog", 'Int'>
    readonly id_user: FieldRef<"RateBlog", 'Int'>
    readonly rate: FieldRef<"RateBlog", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * RateBlog findUnique
   */
  export type RateBlogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateBlog
     */
    select?: RateBlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RateBlogInclude<ExtArgs> | null
    /**
     * Filter, which RateBlog to fetch.
     */
    where: RateBlogWhereUniqueInput
  }


  /**
   * RateBlog findUniqueOrThrow
   */
  export type RateBlogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateBlog
     */
    select?: RateBlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RateBlogInclude<ExtArgs> | null
    /**
     * Filter, which RateBlog to fetch.
     */
    where: RateBlogWhereUniqueInput
  }


  /**
   * RateBlog findFirst
   */
  export type RateBlogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateBlog
     */
    select?: RateBlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RateBlogInclude<ExtArgs> | null
    /**
     * Filter, which RateBlog to fetch.
     */
    where?: RateBlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RateBlogs to fetch.
     */
    orderBy?: RateBlogOrderByWithRelationInput | RateBlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RateBlogs.
     */
    cursor?: RateBlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RateBlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RateBlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RateBlogs.
     */
    distinct?: RateBlogScalarFieldEnum | RateBlogScalarFieldEnum[]
  }


  /**
   * RateBlog findFirstOrThrow
   */
  export type RateBlogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateBlog
     */
    select?: RateBlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RateBlogInclude<ExtArgs> | null
    /**
     * Filter, which RateBlog to fetch.
     */
    where?: RateBlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RateBlogs to fetch.
     */
    orderBy?: RateBlogOrderByWithRelationInput | RateBlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RateBlogs.
     */
    cursor?: RateBlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RateBlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RateBlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RateBlogs.
     */
    distinct?: RateBlogScalarFieldEnum | RateBlogScalarFieldEnum[]
  }


  /**
   * RateBlog findMany
   */
  export type RateBlogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateBlog
     */
    select?: RateBlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RateBlogInclude<ExtArgs> | null
    /**
     * Filter, which RateBlogs to fetch.
     */
    where?: RateBlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RateBlogs to fetch.
     */
    orderBy?: RateBlogOrderByWithRelationInput | RateBlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RateBlogs.
     */
    cursor?: RateBlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RateBlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RateBlogs.
     */
    skip?: number
    distinct?: RateBlogScalarFieldEnum | RateBlogScalarFieldEnum[]
  }


  /**
   * RateBlog create
   */
  export type RateBlogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateBlog
     */
    select?: RateBlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RateBlogInclude<ExtArgs> | null
    /**
     * The data needed to create a RateBlog.
     */
    data: XOR<RateBlogCreateInput, RateBlogUncheckedCreateInput>
  }


  /**
   * RateBlog createMany
   */
  export type RateBlogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RateBlogs.
     */
    data: RateBlogCreateManyInput | RateBlogCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * RateBlog update
   */
  export type RateBlogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateBlog
     */
    select?: RateBlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RateBlogInclude<ExtArgs> | null
    /**
     * The data needed to update a RateBlog.
     */
    data: XOR<RateBlogUpdateInput, RateBlogUncheckedUpdateInput>
    /**
     * Choose, which RateBlog to update.
     */
    where: RateBlogWhereUniqueInput
  }


  /**
   * RateBlog updateMany
   */
  export type RateBlogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RateBlogs.
     */
    data: XOR<RateBlogUpdateManyMutationInput, RateBlogUncheckedUpdateManyInput>
    /**
     * Filter which RateBlogs to update
     */
    where?: RateBlogWhereInput
  }


  /**
   * RateBlog upsert
   */
  export type RateBlogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateBlog
     */
    select?: RateBlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RateBlogInclude<ExtArgs> | null
    /**
     * The filter to search for the RateBlog to update in case it exists.
     */
    where: RateBlogWhereUniqueInput
    /**
     * In case the RateBlog found by the `where` argument doesn't exist, create a new RateBlog with this data.
     */
    create: XOR<RateBlogCreateInput, RateBlogUncheckedCreateInput>
    /**
     * In case the RateBlog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RateBlogUpdateInput, RateBlogUncheckedUpdateInput>
  }


  /**
   * RateBlog delete
   */
  export type RateBlogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateBlog
     */
    select?: RateBlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RateBlogInclude<ExtArgs> | null
    /**
     * Filter which RateBlog to delete.
     */
    where: RateBlogWhereUniqueInput
  }


  /**
   * RateBlog deleteMany
   */
  export type RateBlogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RateBlogs to delete
     */
    where?: RateBlogWhereInput
  }


  /**
   * RateBlog without action
   */
  export type RateBlogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateBlog
     */
    select?: RateBlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RateBlogInclude<ExtArgs> | null
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
    name: 'name',
    email: 'email',
    password: 'password',
    phone: 'phone',
    avatar: 'avatar',
    address: 'address',
    level: 'level',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BlogScalarFieldEnum: {
    id: 'id',
    title: 'title',
    image: 'image',
    description: 'description',
    content: 'content',
    id_user: 'id_user',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BlogScalarFieldEnum = (typeof BlogScalarFieldEnum)[keyof typeof BlogScalarFieldEnum]


  export const BlogcommentScalarFieldEnum: {
    id: 'id',
    comment: 'comment',
    id_blog: 'id_blog',
    id_user: 'id_user',
    avatar: 'avatar',
    name: 'name',
    level: 'level',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BlogcommentScalarFieldEnum = (typeof BlogcommentScalarFieldEnum)[keyof typeof BlogcommentScalarFieldEnum]


  export const BrandScalarFieldEnum: {
    id: 'id',
    brand: 'brand',
    slug: 'slug',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BrandScalarFieldEnum = (typeof BrandScalarFieldEnum)[keyof typeof BrandScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    category: 'category',
    slug: 'slug',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    price: 'price',
    id_user: 'id_user',
    id_category: 'id_category',
    id_brand: 'id_brand',
    status: 'status',
    sale: 'sale',
    company: 'company',
    image_product: 'image_product',
    detail: 'detail',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const VisitorScalarFieldEnum: {
    id: 'id',
    codeVisitor: 'codeVisitor',
    name: 'name',
    email: 'email',
    phone: 'phone',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VisitorScalarFieldEnum = (typeof VisitorScalarFieldEnum)[keyof typeof VisitorScalarFieldEnum]


  export const BillScalarFieldEnum: {
    id: 'id',
    codeBill: 'codeBill',
    total: 'total',
    id_Visitor: 'id_Visitor',
    id_user: 'id_user',
    status: 'status',
    paymenttype: 'paymenttype',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BillScalarFieldEnum = (typeof BillScalarFieldEnum)[keyof typeof BillScalarFieldEnum]


  export const InvoicedetailsScalarFieldEnum: {
    id: 'id',
    id_bill: 'id_bill',
    id_product: 'id_product',
    qty: 'qty',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InvoicedetailsScalarFieldEnum = (typeof InvoicedetailsScalarFieldEnum)[keyof typeof InvoicedetailsScalarFieldEnum]


  export const RateBlogScalarFieldEnum: {
    id: 'id',
    id_blog: 'id_blog',
    id_user: 'id_user',
    rate: 'rate'
  };

  export type RateBlogScalarFieldEnum = (typeof RateBlogScalarFieldEnum)[keyof typeof RateBlogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    level?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    blogcomments?: BlogcommentListRelationFilter
    products?: ProductListRelationFilter
    bills?: BillListRelationFilter
    blogs?: BlogListRelationFilter
    rateBlogs?: RateBlogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    blogcomments?: BlogcommentOrderByRelationAggregateInput
    products?: ProductOrderByRelationAggregateInput
    bills?: BillOrderByRelationAggregateInput
    blogs?: BlogOrderByRelationAggregateInput
    rateBlogs?: RateBlogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    level?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    blogcomments?: BlogcommentListRelationFilter
    products?: ProductListRelationFilter
    bills?: BillListRelationFilter
    blogs?: BlogListRelationFilter
    rateBlogs?: RateBlogListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    level?: SortOrder
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
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    level?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BlogWhereInput = {
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    id?: IntFilter<"Blog"> | number
    title?: StringFilter<"Blog"> | string
    image?: StringFilter<"Blog"> | string
    description?: StringNullableFilter<"Blog"> | string | null
    content?: StringNullableFilter<"Blog"> | string | null
    id_user?: IntFilter<"Blog"> | number
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
    blogcomments?: BlogcommentListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
    rateBlogs?: RateBlogListRelationFilter
  }

  export type BlogOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    description?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    id_user?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    blogcomments?: BlogcommentOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    rateBlogs?: RateBlogOrderByRelationAggregateInput
  }

  export type BlogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    title?: StringFilter<"Blog"> | string
    image?: StringFilter<"Blog"> | string
    description?: StringNullableFilter<"Blog"> | string | null
    content?: StringNullableFilter<"Blog"> | string | null
    id_user?: IntFilter<"Blog"> | number
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
    blogcomments?: BlogcommentListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
    rateBlogs?: RateBlogListRelationFilter
  }, "id">

  export type BlogOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    description?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    id_user?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BlogCountOrderByAggregateInput
    _avg?: BlogAvgOrderByAggregateInput
    _max?: BlogMaxOrderByAggregateInput
    _min?: BlogMinOrderByAggregateInput
    _sum?: BlogSumOrderByAggregateInput
  }

  export type BlogScalarWhereWithAggregatesInput = {
    AND?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    OR?: BlogScalarWhereWithAggregatesInput[]
    NOT?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Blog"> | number
    title?: StringWithAggregatesFilter<"Blog"> | string
    image?: StringWithAggregatesFilter<"Blog"> | string
    description?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    content?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    id_user?: IntWithAggregatesFilter<"Blog"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Blog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Blog"> | Date | string
  }

  export type BlogcommentWhereInput = {
    AND?: BlogcommentWhereInput | BlogcommentWhereInput[]
    OR?: BlogcommentWhereInput[]
    NOT?: BlogcommentWhereInput | BlogcommentWhereInput[]
    id?: IntFilter<"Blogcomment"> | number
    comment?: StringFilter<"Blogcomment"> | string
    id_blog?: IntFilter<"Blogcomment"> | number
    id_user?: IntFilter<"Blogcomment"> | number
    avatar?: StringNullableFilter<"Blogcomment"> | string | null
    name?: StringFilter<"Blogcomment"> | string
    level?: IntFilter<"Blogcomment"> | number
    createdAt?: DateTimeFilter<"Blogcomment"> | Date | string
    updatedAt?: DateTimeFilter<"Blogcomment"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    blog?: XOR<BlogRelationFilter, BlogWhereInput>
  }

  export type BlogcommentOrderByWithRelationInput = {
    id?: SortOrder
    comment?: SortOrder
    id_blog?: SortOrder
    id_user?: SortOrder
    avatar?: SortOrderInput | SortOrder
    name?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    blog?: BlogOrderByWithRelationInput
  }

  export type BlogcommentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BlogcommentWhereInput | BlogcommentWhereInput[]
    OR?: BlogcommentWhereInput[]
    NOT?: BlogcommentWhereInput | BlogcommentWhereInput[]
    comment?: StringFilter<"Blogcomment"> | string
    id_blog?: IntFilter<"Blogcomment"> | number
    id_user?: IntFilter<"Blogcomment"> | number
    avatar?: StringNullableFilter<"Blogcomment"> | string | null
    name?: StringFilter<"Blogcomment"> | string
    level?: IntFilter<"Blogcomment"> | number
    createdAt?: DateTimeFilter<"Blogcomment"> | Date | string
    updatedAt?: DateTimeFilter<"Blogcomment"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    blog?: XOR<BlogRelationFilter, BlogWhereInput>
  }, "id">

  export type BlogcommentOrderByWithAggregationInput = {
    id?: SortOrder
    comment?: SortOrder
    id_blog?: SortOrder
    id_user?: SortOrder
    avatar?: SortOrderInput | SortOrder
    name?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BlogcommentCountOrderByAggregateInput
    _avg?: BlogcommentAvgOrderByAggregateInput
    _max?: BlogcommentMaxOrderByAggregateInput
    _min?: BlogcommentMinOrderByAggregateInput
    _sum?: BlogcommentSumOrderByAggregateInput
  }

  export type BlogcommentScalarWhereWithAggregatesInput = {
    AND?: BlogcommentScalarWhereWithAggregatesInput | BlogcommentScalarWhereWithAggregatesInput[]
    OR?: BlogcommentScalarWhereWithAggregatesInput[]
    NOT?: BlogcommentScalarWhereWithAggregatesInput | BlogcommentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Blogcomment"> | number
    comment?: StringWithAggregatesFilter<"Blogcomment"> | string
    id_blog?: IntWithAggregatesFilter<"Blogcomment"> | number
    id_user?: IntWithAggregatesFilter<"Blogcomment"> | number
    avatar?: StringNullableWithAggregatesFilter<"Blogcomment"> | string | null
    name?: StringWithAggregatesFilter<"Blogcomment"> | string
    level?: IntWithAggregatesFilter<"Blogcomment"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Blogcomment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Blogcomment"> | Date | string
  }

  export type BrandWhereInput = {
    AND?: BrandWhereInput | BrandWhereInput[]
    OR?: BrandWhereInput[]
    NOT?: BrandWhereInput | BrandWhereInput[]
    id?: IntFilter<"Brand"> | number
    brand?: StringFilter<"Brand"> | string
    slug?: StringFilter<"Brand"> | string
    status?: IntFilter<"Brand"> | number
    createdAt?: DateTimeFilter<"Brand"> | Date | string
    updatedAt?: DateTimeFilter<"Brand"> | Date | string
    products?: ProductListRelationFilter
  }

  export type BrandOrderByWithRelationInput = {
    id?: SortOrder
    brand?: SortOrder
    slug?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    products?: ProductOrderByRelationAggregateInput
  }

  export type BrandWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BrandWhereInput | BrandWhereInput[]
    OR?: BrandWhereInput[]
    NOT?: BrandWhereInput | BrandWhereInput[]
    brand?: StringFilter<"Brand"> | string
    slug?: StringFilter<"Brand"> | string
    status?: IntFilter<"Brand"> | number
    createdAt?: DateTimeFilter<"Brand"> | Date | string
    updatedAt?: DateTimeFilter<"Brand"> | Date | string
    products?: ProductListRelationFilter
  }, "id">

  export type BrandOrderByWithAggregationInput = {
    id?: SortOrder
    brand?: SortOrder
    slug?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BrandCountOrderByAggregateInput
    _avg?: BrandAvgOrderByAggregateInput
    _max?: BrandMaxOrderByAggregateInput
    _min?: BrandMinOrderByAggregateInput
    _sum?: BrandSumOrderByAggregateInput
  }

  export type BrandScalarWhereWithAggregatesInput = {
    AND?: BrandScalarWhereWithAggregatesInput | BrandScalarWhereWithAggregatesInput[]
    OR?: BrandScalarWhereWithAggregatesInput[]
    NOT?: BrandScalarWhereWithAggregatesInput | BrandScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Brand"> | number
    brand?: StringWithAggregatesFilter<"Brand"> | string
    slug?: StringWithAggregatesFilter<"Brand"> | string
    status?: IntWithAggregatesFilter<"Brand"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Brand"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Brand"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    category?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    status?: IntFilter<"Category"> | number
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    products?: ProductListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    category?: SortOrder
    slug?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    products?: ProductOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    category?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    status?: IntFilter<"Category"> | number
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    products?: ProductListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    category?: SortOrder
    slug?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    category?: StringWithAggregatesFilter<"Category"> | string
    slug?: StringWithAggregatesFilter<"Category"> | string
    status?: IntWithAggregatesFilter<"Category"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    slug?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    id_user?: IntFilter<"Product"> | number
    id_category?: IntFilter<"Product"> | number
    id_brand?: IntFilter<"Product"> | number
    status?: IntFilter<"Product"> | number
    sale?: FloatFilter<"Product"> | number
    company?: StringNullableFilter<"Product"> | string | null
    image_product?: StringNullableFilter<"Product"> | string | null
    detail?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    brand?: XOR<BrandRelationFilter, BrandWhereInput>
    invoicedetails?: InvoicedetailsListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    price?: SortOrder
    id_user?: SortOrder
    id_category?: SortOrder
    id_brand?: SortOrder
    status?: SortOrder
    sale?: SortOrder
    company?: SortOrderInput | SortOrder
    image_product?: SortOrderInput | SortOrder
    detail?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    brand?: BrandOrderByWithRelationInput
    invoicedetails?: invoicedetailsOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    slug?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    id_user?: IntFilter<"Product"> | number
    id_category?: IntFilter<"Product"> | number
    id_brand?: IntFilter<"Product"> | number
    status?: IntFilter<"Product"> | number
    sale?: FloatFilter<"Product"> | number
    company?: StringNullableFilter<"Product"> | string | null
    image_product?: StringNullableFilter<"Product"> | string | null
    detail?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    brand?: XOR<BrandRelationFilter, BrandWhereInput>
    invoicedetails?: InvoicedetailsListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    price?: SortOrder
    id_user?: SortOrder
    id_category?: SortOrder
    id_brand?: SortOrder
    status?: SortOrder
    sale?: SortOrder
    company?: SortOrderInput | SortOrder
    image_product?: SortOrderInput | SortOrder
    detail?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    name?: StringWithAggregatesFilter<"Product"> | string
    slug?: StringWithAggregatesFilter<"Product"> | string
    price?: FloatWithAggregatesFilter<"Product"> | number
    id_user?: IntWithAggregatesFilter<"Product"> | number
    id_category?: IntWithAggregatesFilter<"Product"> | number
    id_brand?: IntWithAggregatesFilter<"Product"> | number
    status?: IntWithAggregatesFilter<"Product"> | number
    sale?: FloatWithAggregatesFilter<"Product"> | number
    company?: StringNullableWithAggregatesFilter<"Product"> | string | null
    image_product?: StringNullableWithAggregatesFilter<"Product"> | string | null
    detail?: StringNullableWithAggregatesFilter<"Product"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type VisitorWhereInput = {
    AND?: VisitorWhereInput | VisitorWhereInput[]
    OR?: VisitorWhereInput[]
    NOT?: VisitorWhereInput | VisitorWhereInput[]
    id?: IntFilter<"Visitor"> | number
    codeVisitor?: StringFilter<"Visitor"> | string
    name?: StringFilter<"Visitor"> | string
    email?: StringFilter<"Visitor"> | string
    phone?: StringNullableFilter<"Visitor"> | string | null
    address?: StringNullableFilter<"Visitor"> | string | null
    createdAt?: DateTimeFilter<"Visitor"> | Date | string
    updatedAt?: DateTimeFilter<"Visitor"> | Date | string
    bills?: BillListRelationFilter
  }

  export type VisitorOrderByWithRelationInput = {
    id?: SortOrder
    codeVisitor?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bills?: BillOrderByRelationAggregateInput
  }

  export type VisitorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VisitorWhereInput | VisitorWhereInput[]
    OR?: VisitorWhereInput[]
    NOT?: VisitorWhereInput | VisitorWhereInput[]
    codeVisitor?: StringFilter<"Visitor"> | string
    name?: StringFilter<"Visitor"> | string
    email?: StringFilter<"Visitor"> | string
    phone?: StringNullableFilter<"Visitor"> | string | null
    address?: StringNullableFilter<"Visitor"> | string | null
    createdAt?: DateTimeFilter<"Visitor"> | Date | string
    updatedAt?: DateTimeFilter<"Visitor"> | Date | string
    bills?: BillListRelationFilter
  }, "id">

  export type VisitorOrderByWithAggregationInput = {
    id?: SortOrder
    codeVisitor?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VisitorCountOrderByAggregateInput
    _avg?: VisitorAvgOrderByAggregateInput
    _max?: VisitorMaxOrderByAggregateInput
    _min?: VisitorMinOrderByAggregateInput
    _sum?: VisitorSumOrderByAggregateInput
  }

  export type VisitorScalarWhereWithAggregatesInput = {
    AND?: VisitorScalarWhereWithAggregatesInput | VisitorScalarWhereWithAggregatesInput[]
    OR?: VisitorScalarWhereWithAggregatesInput[]
    NOT?: VisitorScalarWhereWithAggregatesInput | VisitorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Visitor"> | number
    codeVisitor?: StringWithAggregatesFilter<"Visitor"> | string
    name?: StringWithAggregatesFilter<"Visitor"> | string
    email?: StringWithAggregatesFilter<"Visitor"> | string
    phone?: StringNullableWithAggregatesFilter<"Visitor"> | string | null
    address?: StringNullableWithAggregatesFilter<"Visitor"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Visitor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Visitor"> | Date | string
  }

  export type BillWhereInput = {
    AND?: BillWhereInput | BillWhereInput[]
    OR?: BillWhereInput[]
    NOT?: BillWhereInput | BillWhereInput[]
    id?: IntFilter<"Bill"> | number
    codeBill?: StringFilter<"Bill"> | string
    total?: FloatFilter<"Bill"> | number
    id_Visitor?: IntFilter<"Bill"> | number
    id_user?: IntFilter<"Bill"> | number
    status?: IntFilter<"Bill"> | number
    paymenttype?: StringNullableFilter<"Bill"> | string | null
    createdAt?: DateTimeFilter<"Bill"> | Date | string
    updatedAt?: DateTimeFilter<"Bill"> | Date | string
    visitor?: XOR<VisitorRelationFilter, VisitorWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    invoicedetails?: InvoicedetailsListRelationFilter
  }

  export type BillOrderByWithRelationInput = {
    id?: SortOrder
    codeBill?: SortOrder
    total?: SortOrder
    id_Visitor?: SortOrder
    id_user?: SortOrder
    status?: SortOrder
    paymenttype?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    visitor?: VisitorOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    invoicedetails?: invoicedetailsOrderByRelationAggregateInput
  }

  export type BillWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BillWhereInput | BillWhereInput[]
    OR?: BillWhereInput[]
    NOT?: BillWhereInput | BillWhereInput[]
    codeBill?: StringFilter<"Bill"> | string
    total?: FloatFilter<"Bill"> | number
    id_Visitor?: IntFilter<"Bill"> | number
    id_user?: IntFilter<"Bill"> | number
    status?: IntFilter<"Bill"> | number
    paymenttype?: StringNullableFilter<"Bill"> | string | null
    createdAt?: DateTimeFilter<"Bill"> | Date | string
    updatedAt?: DateTimeFilter<"Bill"> | Date | string
    visitor?: XOR<VisitorRelationFilter, VisitorWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    invoicedetails?: InvoicedetailsListRelationFilter
  }, "id">

  export type BillOrderByWithAggregationInput = {
    id?: SortOrder
    codeBill?: SortOrder
    total?: SortOrder
    id_Visitor?: SortOrder
    id_user?: SortOrder
    status?: SortOrder
    paymenttype?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BillCountOrderByAggregateInput
    _avg?: BillAvgOrderByAggregateInput
    _max?: BillMaxOrderByAggregateInput
    _min?: BillMinOrderByAggregateInput
    _sum?: BillSumOrderByAggregateInput
  }

  export type BillScalarWhereWithAggregatesInput = {
    AND?: BillScalarWhereWithAggregatesInput | BillScalarWhereWithAggregatesInput[]
    OR?: BillScalarWhereWithAggregatesInput[]
    NOT?: BillScalarWhereWithAggregatesInput | BillScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Bill"> | number
    codeBill?: StringWithAggregatesFilter<"Bill"> | string
    total?: FloatWithAggregatesFilter<"Bill"> | number
    id_Visitor?: IntWithAggregatesFilter<"Bill"> | number
    id_user?: IntWithAggregatesFilter<"Bill"> | number
    status?: IntWithAggregatesFilter<"Bill"> | number
    paymenttype?: StringNullableWithAggregatesFilter<"Bill"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Bill"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Bill"> | Date | string
  }

  export type invoicedetailsWhereInput = {
    AND?: invoicedetailsWhereInput | invoicedetailsWhereInput[]
    OR?: invoicedetailsWhereInput[]
    NOT?: invoicedetailsWhereInput | invoicedetailsWhereInput[]
    id?: IntFilter<"invoicedetails"> | number
    id_bill?: IntFilter<"invoicedetails"> | number
    id_product?: IntFilter<"invoicedetails"> | number
    qty?: IntFilter<"invoicedetails"> | number
    createdAt?: DateTimeFilter<"invoicedetails"> | Date | string
    updatedAt?: DateTimeFilter<"invoicedetails"> | Date | string
    bill?: XOR<BillRelationFilter, BillWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type invoicedetailsOrderByWithRelationInput = {
    id?: SortOrder
    id_bill?: SortOrder
    id_product?: SortOrder
    qty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bill?: BillOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type invoicedetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: invoicedetailsWhereInput | invoicedetailsWhereInput[]
    OR?: invoicedetailsWhereInput[]
    NOT?: invoicedetailsWhereInput | invoicedetailsWhereInput[]
    id_bill?: IntFilter<"invoicedetails"> | number
    id_product?: IntFilter<"invoicedetails"> | number
    qty?: IntFilter<"invoicedetails"> | number
    createdAt?: DateTimeFilter<"invoicedetails"> | Date | string
    updatedAt?: DateTimeFilter<"invoicedetails"> | Date | string
    bill?: XOR<BillRelationFilter, BillWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "id">

  export type invoicedetailsOrderByWithAggregationInput = {
    id?: SortOrder
    id_bill?: SortOrder
    id_product?: SortOrder
    qty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: invoicedetailsCountOrderByAggregateInput
    _avg?: invoicedetailsAvgOrderByAggregateInput
    _max?: invoicedetailsMaxOrderByAggregateInput
    _min?: invoicedetailsMinOrderByAggregateInput
    _sum?: invoicedetailsSumOrderByAggregateInput
  }

  export type invoicedetailsScalarWhereWithAggregatesInput = {
    AND?: invoicedetailsScalarWhereWithAggregatesInput | invoicedetailsScalarWhereWithAggregatesInput[]
    OR?: invoicedetailsScalarWhereWithAggregatesInput[]
    NOT?: invoicedetailsScalarWhereWithAggregatesInput | invoicedetailsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"invoicedetails"> | number
    id_bill?: IntWithAggregatesFilter<"invoicedetails"> | number
    id_product?: IntWithAggregatesFilter<"invoicedetails"> | number
    qty?: IntWithAggregatesFilter<"invoicedetails"> | number
    createdAt?: DateTimeWithAggregatesFilter<"invoicedetails"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"invoicedetails"> | Date | string
  }

  export type RateBlogWhereInput = {
    AND?: RateBlogWhereInput | RateBlogWhereInput[]
    OR?: RateBlogWhereInput[]
    NOT?: RateBlogWhereInput | RateBlogWhereInput[]
    id?: IntFilter<"RateBlog"> | number
    id_blog?: IntFilter<"RateBlog"> | number
    id_user?: IntFilter<"RateBlog"> | number
    rate?: IntFilter<"RateBlog"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    blog?: XOR<BlogRelationFilter, BlogWhereInput>
  }

  export type RateBlogOrderByWithRelationInput = {
    id?: SortOrder
    id_blog?: SortOrder
    id_user?: SortOrder
    rate?: SortOrder
    user?: UserOrderByWithRelationInput
    blog?: BlogOrderByWithRelationInput
  }

  export type RateBlogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RateBlogWhereInput | RateBlogWhereInput[]
    OR?: RateBlogWhereInput[]
    NOT?: RateBlogWhereInput | RateBlogWhereInput[]
    id_blog?: IntFilter<"RateBlog"> | number
    id_user?: IntFilter<"RateBlog"> | number
    rate?: IntFilter<"RateBlog"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    blog?: XOR<BlogRelationFilter, BlogWhereInput>
  }, "id">

  export type RateBlogOrderByWithAggregationInput = {
    id?: SortOrder
    id_blog?: SortOrder
    id_user?: SortOrder
    rate?: SortOrder
    _count?: RateBlogCountOrderByAggregateInput
    _avg?: RateBlogAvgOrderByAggregateInput
    _max?: RateBlogMaxOrderByAggregateInput
    _min?: RateBlogMinOrderByAggregateInput
    _sum?: RateBlogSumOrderByAggregateInput
  }

  export type RateBlogScalarWhereWithAggregatesInput = {
    AND?: RateBlogScalarWhereWithAggregatesInput | RateBlogScalarWhereWithAggregatesInput[]
    OR?: RateBlogScalarWhereWithAggregatesInput[]
    NOT?: RateBlogScalarWhereWithAggregatesInput | RateBlogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RateBlog"> | number
    id_blog?: IntWithAggregatesFilter<"RateBlog"> | number
    id_user?: IntWithAggregatesFilter<"RateBlog"> | number
    rate?: IntWithAggregatesFilter<"RateBlog"> | number
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    phone?: string | null
    avatar?: string | null
    address?: string | null
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    blogcomments?: BlogcommentCreateNestedManyWithoutUserInput
    products?: ProductCreateNestedManyWithoutUserInput
    bills?: BillCreateNestedManyWithoutUserInput
    blogs?: BlogCreateNestedManyWithoutUserInput
    rateBlogs?: RateBlogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    avatar?: string | null
    address?: string | null
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    blogcomments?: BlogcommentUncheckedCreateNestedManyWithoutUserInput
    products?: ProductUncheckedCreateNestedManyWithoutUserInput
    bills?: BillUncheckedCreateNestedManyWithoutUserInput
    blogs?: BlogUncheckedCreateNestedManyWithoutUserInput
    rateBlogs?: RateBlogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogcomments?: BlogcommentUpdateManyWithoutUserNestedInput
    products?: ProductUpdateManyWithoutUserNestedInput
    bills?: BillUpdateManyWithoutUserNestedInput
    blogs?: BlogUpdateManyWithoutUserNestedInput
    rateBlogs?: RateBlogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogcomments?: BlogcommentUncheckedUpdateManyWithoutUserNestedInput
    products?: ProductUncheckedUpdateManyWithoutUserNestedInput
    bills?: BillUncheckedUpdateManyWithoutUserNestedInput
    blogs?: BlogUncheckedUpdateManyWithoutUserNestedInput
    rateBlogs?: RateBlogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    avatar?: string | null
    address?: string | null
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogCreateInput = {
    title: string
    image: string
    description?: string | null
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    blogcomments?: BlogcommentCreateNestedManyWithoutBlogInput
    user: UserCreateNestedOneWithoutBlogsInput
    rateBlogs?: RateBlogCreateNestedManyWithoutBlogInput
  }

  export type BlogUncheckedCreateInput = {
    id?: number
    title: string
    image: string
    description?: string | null
    content?: string | null
    id_user: number
    createdAt?: Date | string
    updatedAt?: Date | string
    blogcomments?: BlogcommentUncheckedCreateNestedManyWithoutBlogInput
    rateBlogs?: RateBlogUncheckedCreateNestedManyWithoutBlogInput
  }

  export type BlogUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogcomments?: BlogcommentUpdateManyWithoutBlogNestedInput
    user?: UserUpdateOneRequiredWithoutBlogsNestedInput
    rateBlogs?: RateBlogUpdateManyWithoutBlogNestedInput
  }

  export type BlogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    id_user?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogcomments?: BlogcommentUncheckedUpdateManyWithoutBlogNestedInput
    rateBlogs?: RateBlogUncheckedUpdateManyWithoutBlogNestedInput
  }

  export type BlogCreateManyInput = {
    id?: number
    title: string
    image: string
    description?: string | null
    content?: string | null
    id_user: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    id_user?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogcommentCreateInput = {
    comment: string
    avatar?: string | null
    name: string
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBlogcommentsInput
    blog: BlogCreateNestedOneWithoutBlogcommentsInput
  }

  export type BlogcommentUncheckedCreateInput = {
    id?: number
    comment: string
    id_blog: number
    id_user: number
    avatar?: string | null
    name: string
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogcommentUpdateInput = {
    comment?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBlogcommentsNestedInput
    blog?: BlogUpdateOneRequiredWithoutBlogcommentsNestedInput
  }

  export type BlogcommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    id_blog?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogcommentCreateManyInput = {
    id?: number
    comment: string
    id_blog: number
    id_user: number
    avatar?: string | null
    name: string
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogcommentUpdateManyMutationInput = {
    comment?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogcommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    id_blog?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandCreateInput = {
    brand: string
    slug: string
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductCreateNestedManyWithoutBrandInput
  }

  export type BrandUncheckedCreateInput = {
    id?: number
    brand: string
    slug: string
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutBrandInput
  }

  export type BrandUpdateInput = {
    brand?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutBrandNestedInput
  }

  export type BrandUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type BrandCreateManyInput = {
    id?: number
    brand: string
    slug: string
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrandUpdateManyMutationInput = {
    brand?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    category: string
    slug: string
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    category: string
    slug: string
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    category?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    category: string
    slug: string
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    category?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    name: string
    slug: string
    price: number
    status?: number
    sale?: number
    company?: string | null
    image_product?: string | null
    detail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProductsInput
    category: CategoryCreateNestedOneWithoutProductsInput
    brand: BrandCreateNestedOneWithoutProductsInput
    invoicedetails?: invoicedetailsCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    name: string
    slug: string
    price: number
    id_user: number
    id_category: number
    id_brand: number
    status?: number
    sale?: number
    company?: string | null
    image_product?: string | null
    detail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoicedetails?: invoicedetailsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    sale?: FloatFieldUpdateOperationsInput | number
    company?: NullableStringFieldUpdateOperationsInput | string | null
    image_product?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProductsNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    brand?: BrandUpdateOneRequiredWithoutProductsNestedInput
    invoicedetails?: invoicedetailsUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    id_category?: IntFieldUpdateOperationsInput | number
    id_brand?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    sale?: FloatFieldUpdateOperationsInput | number
    company?: NullableStringFieldUpdateOperationsInput | string | null
    image_product?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoicedetails?: invoicedetailsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    name: string
    slug: string
    price: number
    id_user: number
    id_category: number
    id_brand: number
    status?: number
    sale?: number
    company?: string | null
    image_product?: string | null
    detail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    sale?: FloatFieldUpdateOperationsInput | number
    company?: NullableStringFieldUpdateOperationsInput | string | null
    image_product?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    id_category?: IntFieldUpdateOperationsInput | number
    id_brand?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    sale?: FloatFieldUpdateOperationsInput | number
    company?: NullableStringFieldUpdateOperationsInput | string | null
    image_product?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitorCreateInput = {
    codeVisitor: string
    name: string
    email: string
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bills?: BillCreateNestedManyWithoutVisitorInput
  }

  export type VisitorUncheckedCreateInput = {
    id?: number
    codeVisitor: string
    name: string
    email: string
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bills?: BillUncheckedCreateNestedManyWithoutVisitorInput
  }

  export type VisitorUpdateInput = {
    codeVisitor?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bills?: BillUpdateManyWithoutVisitorNestedInput
  }

  export type VisitorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    codeVisitor?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bills?: BillUncheckedUpdateManyWithoutVisitorNestedInput
  }

  export type VisitorCreateManyInput = {
    id?: number
    codeVisitor: string
    name: string
    email: string
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisitorUpdateManyMutationInput = {
    codeVisitor?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    codeVisitor?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillCreateInput = {
    codeBill: string
    total?: number
    status?: number
    paymenttype?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    visitor: VisitorCreateNestedOneWithoutBillsInput
    user?: UserCreateNestedOneWithoutBillsInput
    invoicedetails?: invoicedetailsCreateNestedManyWithoutBillInput
  }

  export type BillUncheckedCreateInput = {
    id?: number
    codeBill: string
    total?: number
    id_Visitor: number
    id_user?: number
    status?: number
    paymenttype?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoicedetails?: invoicedetailsUncheckedCreateNestedManyWithoutBillInput
  }

  export type BillUpdateInput = {
    codeBill?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    paymenttype?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visitor?: VisitorUpdateOneRequiredWithoutBillsNestedInput
    user?: UserUpdateOneRequiredWithoutBillsNestedInput
    invoicedetails?: invoicedetailsUpdateManyWithoutBillNestedInput
  }

  export type BillUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    codeBill?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    id_Visitor?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    paymenttype?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoicedetails?: invoicedetailsUncheckedUpdateManyWithoutBillNestedInput
  }

  export type BillCreateManyInput = {
    id?: number
    codeBill: string
    total?: number
    id_Visitor: number
    id_user?: number
    status?: number
    paymenttype?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillUpdateManyMutationInput = {
    codeBill?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    paymenttype?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    codeBill?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    id_Visitor?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    paymenttype?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invoicedetailsCreateInput = {
    qty: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bill: BillCreateNestedOneWithoutInvoicedetailsInput
    product: ProductCreateNestedOneWithoutInvoicedetailsInput
  }

  export type invoicedetailsUncheckedCreateInput = {
    id?: number
    id_bill: number
    id_product: number
    qty: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type invoicedetailsUpdateInput = {
    qty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bill?: BillUpdateOneRequiredWithoutInvoicedetailsNestedInput
    product?: ProductUpdateOneRequiredWithoutInvoicedetailsNestedInput
  }

  export type invoicedetailsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_bill?: IntFieldUpdateOperationsInput | number
    id_product?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invoicedetailsCreateManyInput = {
    id?: number
    id_bill: number
    id_product: number
    qty: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type invoicedetailsUpdateManyMutationInput = {
    qty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invoicedetailsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_bill?: IntFieldUpdateOperationsInput | number
    id_product?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RateBlogCreateInput = {
    rate: number
    user: UserCreateNestedOneWithoutRateBlogsInput
    blog: BlogCreateNestedOneWithoutRateBlogsInput
  }

  export type RateBlogUncheckedCreateInput = {
    id?: number
    id_blog: number
    id_user: number
    rate: number
  }

  export type RateBlogUpdateInput = {
    rate?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutRateBlogsNestedInput
    blog?: BlogUpdateOneRequiredWithoutRateBlogsNestedInput
  }

  export type RateBlogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_blog?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    rate?: IntFieldUpdateOperationsInput | number
  }

  export type RateBlogCreateManyInput = {
    id?: number
    id_blog: number
    id_user: number
    rate: number
  }

  export type RateBlogUpdateManyMutationInput = {
    rate?: IntFieldUpdateOperationsInput | number
  }

  export type RateBlogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_blog?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    rate?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BlogcommentListRelationFilter = {
    every?: BlogcommentWhereInput
    some?: BlogcommentWhereInput
    none?: BlogcommentWhereInput
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type BillListRelationFilter = {
    every?: BillWhereInput
    some?: BillWhereInput
    none?: BillWhereInput
  }

  export type BlogListRelationFilter = {
    every?: BlogWhereInput
    some?: BlogWhereInput
    none?: BlogWhereInput
  }

  export type RateBlogListRelationFilter = {
    every?: RateBlogWhereInput
    some?: RateBlogWhereInput
    none?: RateBlogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BlogcommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RateBlogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    avatar?: SortOrder
    address?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    avatar?: SortOrder
    address?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    avatar?: SortOrder
    address?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BlogCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    description?: SortOrder
    content?: SortOrder
    id_user?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogAvgOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
  }

  export type BlogMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    description?: SortOrder
    content?: SortOrder
    id_user?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    description?: SortOrder
    content?: SortOrder
    id_user?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogSumOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
  }

  export type BlogRelationFilter = {
    is?: BlogWhereInput
    isNot?: BlogWhereInput
  }

  export type BlogcommentCountOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    id_blog?: SortOrder
    id_user?: SortOrder
    avatar?: SortOrder
    name?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogcommentAvgOrderByAggregateInput = {
    id?: SortOrder
    id_blog?: SortOrder
    id_user?: SortOrder
    level?: SortOrder
  }

  export type BlogcommentMaxOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    id_blog?: SortOrder
    id_user?: SortOrder
    avatar?: SortOrder
    name?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogcommentMinOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    id_blog?: SortOrder
    id_user?: SortOrder
    avatar?: SortOrder
    name?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogcommentSumOrderByAggregateInput = {
    id?: SortOrder
    id_blog?: SortOrder
    id_user?: SortOrder
    level?: SortOrder
  }

  export type BrandCountOrderByAggregateInput = {
    id?: SortOrder
    brand?: SortOrder
    slug?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrandAvgOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
  }

  export type BrandMaxOrderByAggregateInput = {
    id?: SortOrder
    brand?: SortOrder
    slug?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrandMinOrderByAggregateInput = {
    id?: SortOrder
    brand?: SortOrder
    slug?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrandSumOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    slug?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    slug?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    slug?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type BrandRelationFilter = {
    is?: BrandWhereInput
    isNot?: BrandWhereInput
  }

  export type InvoicedetailsListRelationFilter = {
    every?: invoicedetailsWhereInput
    some?: invoicedetailsWhereInput
    none?: invoicedetailsWhereInput
  }

  export type invoicedetailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    price?: SortOrder
    id_user?: SortOrder
    id_category?: SortOrder
    id_brand?: SortOrder
    status?: SortOrder
    sale?: SortOrder
    company?: SortOrder
    image_product?: SortOrder
    detail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    id_user?: SortOrder
    id_category?: SortOrder
    id_brand?: SortOrder
    status?: SortOrder
    sale?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    price?: SortOrder
    id_user?: SortOrder
    id_category?: SortOrder
    id_brand?: SortOrder
    status?: SortOrder
    sale?: SortOrder
    company?: SortOrder
    image_product?: SortOrder
    detail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    price?: SortOrder
    id_user?: SortOrder
    id_category?: SortOrder
    id_brand?: SortOrder
    status?: SortOrder
    sale?: SortOrder
    company?: SortOrder
    image_product?: SortOrder
    detail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    id_user?: SortOrder
    id_category?: SortOrder
    id_brand?: SortOrder
    status?: SortOrder
    sale?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type VisitorCountOrderByAggregateInput = {
    id?: SortOrder
    codeVisitor?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VisitorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VisitorMaxOrderByAggregateInput = {
    id?: SortOrder
    codeVisitor?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VisitorMinOrderByAggregateInput = {
    id?: SortOrder
    codeVisitor?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VisitorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VisitorRelationFilter = {
    is?: VisitorWhereInput
    isNot?: VisitorWhereInput
  }

  export type BillCountOrderByAggregateInput = {
    id?: SortOrder
    codeBill?: SortOrder
    total?: SortOrder
    id_Visitor?: SortOrder
    id_user?: SortOrder
    status?: SortOrder
    paymenttype?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BillAvgOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    id_Visitor?: SortOrder
    id_user?: SortOrder
    status?: SortOrder
  }

  export type BillMaxOrderByAggregateInput = {
    id?: SortOrder
    codeBill?: SortOrder
    total?: SortOrder
    id_Visitor?: SortOrder
    id_user?: SortOrder
    status?: SortOrder
    paymenttype?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BillMinOrderByAggregateInput = {
    id?: SortOrder
    codeBill?: SortOrder
    total?: SortOrder
    id_Visitor?: SortOrder
    id_user?: SortOrder
    status?: SortOrder
    paymenttype?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BillSumOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    id_Visitor?: SortOrder
    id_user?: SortOrder
    status?: SortOrder
  }

  export type BillRelationFilter = {
    is?: BillWhereInput
    isNot?: BillWhereInput
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type invoicedetailsCountOrderByAggregateInput = {
    id?: SortOrder
    id_bill?: SortOrder
    id_product?: SortOrder
    qty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type invoicedetailsAvgOrderByAggregateInput = {
    id?: SortOrder
    id_bill?: SortOrder
    id_product?: SortOrder
    qty?: SortOrder
  }

  export type invoicedetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    id_bill?: SortOrder
    id_product?: SortOrder
    qty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type invoicedetailsMinOrderByAggregateInput = {
    id?: SortOrder
    id_bill?: SortOrder
    id_product?: SortOrder
    qty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type invoicedetailsSumOrderByAggregateInput = {
    id?: SortOrder
    id_bill?: SortOrder
    id_product?: SortOrder
    qty?: SortOrder
  }

  export type RateBlogCountOrderByAggregateInput = {
    id?: SortOrder
    id_blog?: SortOrder
    id_user?: SortOrder
    rate?: SortOrder
  }

  export type RateBlogAvgOrderByAggregateInput = {
    id?: SortOrder
    id_blog?: SortOrder
    id_user?: SortOrder
    rate?: SortOrder
  }

  export type RateBlogMaxOrderByAggregateInput = {
    id?: SortOrder
    id_blog?: SortOrder
    id_user?: SortOrder
    rate?: SortOrder
  }

  export type RateBlogMinOrderByAggregateInput = {
    id?: SortOrder
    id_blog?: SortOrder
    id_user?: SortOrder
    rate?: SortOrder
  }

  export type RateBlogSumOrderByAggregateInput = {
    id?: SortOrder
    id_blog?: SortOrder
    id_user?: SortOrder
    rate?: SortOrder
  }

  export type BlogcommentCreateNestedManyWithoutUserInput = {
    create?: XOR<BlogcommentCreateWithoutUserInput, BlogcommentUncheckedCreateWithoutUserInput> | BlogcommentCreateWithoutUserInput[] | BlogcommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogcommentCreateOrConnectWithoutUserInput | BlogcommentCreateOrConnectWithoutUserInput[]
    createMany?: BlogcommentCreateManyUserInputEnvelope
    connect?: BlogcommentWhereUniqueInput | BlogcommentWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutUserInput = {
    create?: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput> | ProductCreateWithoutUserInput[] | ProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUserInput | ProductCreateOrConnectWithoutUserInput[]
    createMany?: ProductCreateManyUserInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type BillCreateNestedManyWithoutUserInput = {
    create?: XOR<BillCreateWithoutUserInput, BillUncheckedCreateWithoutUserInput> | BillCreateWithoutUserInput[] | BillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BillCreateOrConnectWithoutUserInput | BillCreateOrConnectWithoutUserInput[]
    createMany?: BillCreateManyUserInputEnvelope
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
  }

  export type BlogCreateNestedManyWithoutUserInput = {
    create?: XOR<BlogCreateWithoutUserInput, BlogUncheckedCreateWithoutUserInput> | BlogCreateWithoutUserInput[] | BlogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutUserInput | BlogCreateOrConnectWithoutUserInput[]
    createMany?: BlogCreateManyUserInputEnvelope
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
  }

  export type RateBlogCreateNestedManyWithoutUserInput = {
    create?: XOR<RateBlogCreateWithoutUserInput, RateBlogUncheckedCreateWithoutUserInput> | RateBlogCreateWithoutUserInput[] | RateBlogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RateBlogCreateOrConnectWithoutUserInput | RateBlogCreateOrConnectWithoutUserInput[]
    createMany?: RateBlogCreateManyUserInputEnvelope
    connect?: RateBlogWhereUniqueInput | RateBlogWhereUniqueInput[]
  }

  export type BlogcommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BlogcommentCreateWithoutUserInput, BlogcommentUncheckedCreateWithoutUserInput> | BlogcommentCreateWithoutUserInput[] | BlogcommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogcommentCreateOrConnectWithoutUserInput | BlogcommentCreateOrConnectWithoutUserInput[]
    createMany?: BlogcommentCreateManyUserInputEnvelope
    connect?: BlogcommentWhereUniqueInput | BlogcommentWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput> | ProductCreateWithoutUserInput[] | ProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUserInput | ProductCreateOrConnectWithoutUserInput[]
    createMany?: ProductCreateManyUserInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type BillUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BillCreateWithoutUserInput, BillUncheckedCreateWithoutUserInput> | BillCreateWithoutUserInput[] | BillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BillCreateOrConnectWithoutUserInput | BillCreateOrConnectWithoutUserInput[]
    createMany?: BillCreateManyUserInputEnvelope
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
  }

  export type BlogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BlogCreateWithoutUserInput, BlogUncheckedCreateWithoutUserInput> | BlogCreateWithoutUserInput[] | BlogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutUserInput | BlogCreateOrConnectWithoutUserInput[]
    createMany?: BlogCreateManyUserInputEnvelope
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
  }

  export type RateBlogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RateBlogCreateWithoutUserInput, RateBlogUncheckedCreateWithoutUserInput> | RateBlogCreateWithoutUserInput[] | RateBlogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RateBlogCreateOrConnectWithoutUserInput | RateBlogCreateOrConnectWithoutUserInput[]
    createMany?: RateBlogCreateManyUserInputEnvelope
    connect?: RateBlogWhereUniqueInput | RateBlogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BlogcommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<BlogcommentCreateWithoutUserInput, BlogcommentUncheckedCreateWithoutUserInput> | BlogcommentCreateWithoutUserInput[] | BlogcommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogcommentCreateOrConnectWithoutUserInput | BlogcommentCreateOrConnectWithoutUserInput[]
    upsert?: BlogcommentUpsertWithWhereUniqueWithoutUserInput | BlogcommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BlogcommentCreateManyUserInputEnvelope
    set?: BlogcommentWhereUniqueInput | BlogcommentWhereUniqueInput[]
    disconnect?: BlogcommentWhereUniqueInput | BlogcommentWhereUniqueInput[]
    delete?: BlogcommentWhereUniqueInput | BlogcommentWhereUniqueInput[]
    connect?: BlogcommentWhereUniqueInput | BlogcommentWhereUniqueInput[]
    update?: BlogcommentUpdateWithWhereUniqueWithoutUserInput | BlogcommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BlogcommentUpdateManyWithWhereWithoutUserInput | BlogcommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BlogcommentScalarWhereInput | BlogcommentScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput> | ProductCreateWithoutUserInput[] | ProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUserInput | ProductCreateOrConnectWithoutUserInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutUserInput | ProductUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProductCreateManyUserInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutUserInput | ProductUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutUserInput | ProductUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type BillUpdateManyWithoutUserNestedInput = {
    create?: XOR<BillCreateWithoutUserInput, BillUncheckedCreateWithoutUserInput> | BillCreateWithoutUserInput[] | BillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BillCreateOrConnectWithoutUserInput | BillCreateOrConnectWithoutUserInput[]
    upsert?: BillUpsertWithWhereUniqueWithoutUserInput | BillUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BillCreateManyUserInputEnvelope
    set?: BillWhereUniqueInput | BillWhereUniqueInput[]
    disconnect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    delete?: BillWhereUniqueInput | BillWhereUniqueInput[]
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    update?: BillUpdateWithWhereUniqueWithoutUserInput | BillUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BillUpdateManyWithWhereWithoutUserInput | BillUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BillScalarWhereInput | BillScalarWhereInput[]
  }

  export type BlogUpdateManyWithoutUserNestedInput = {
    create?: XOR<BlogCreateWithoutUserInput, BlogUncheckedCreateWithoutUserInput> | BlogCreateWithoutUserInput[] | BlogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutUserInput | BlogCreateOrConnectWithoutUserInput[]
    upsert?: BlogUpsertWithWhereUniqueWithoutUserInput | BlogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BlogCreateManyUserInputEnvelope
    set?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    disconnect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    delete?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    update?: BlogUpdateWithWhereUniqueWithoutUserInput | BlogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BlogUpdateManyWithWhereWithoutUserInput | BlogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BlogScalarWhereInput | BlogScalarWhereInput[]
  }

  export type RateBlogUpdateManyWithoutUserNestedInput = {
    create?: XOR<RateBlogCreateWithoutUserInput, RateBlogUncheckedCreateWithoutUserInput> | RateBlogCreateWithoutUserInput[] | RateBlogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RateBlogCreateOrConnectWithoutUserInput | RateBlogCreateOrConnectWithoutUserInput[]
    upsert?: RateBlogUpsertWithWhereUniqueWithoutUserInput | RateBlogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RateBlogCreateManyUserInputEnvelope
    set?: RateBlogWhereUniqueInput | RateBlogWhereUniqueInput[]
    disconnect?: RateBlogWhereUniqueInput | RateBlogWhereUniqueInput[]
    delete?: RateBlogWhereUniqueInput | RateBlogWhereUniqueInput[]
    connect?: RateBlogWhereUniqueInput | RateBlogWhereUniqueInput[]
    update?: RateBlogUpdateWithWhereUniqueWithoutUserInput | RateBlogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RateBlogUpdateManyWithWhereWithoutUserInput | RateBlogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RateBlogScalarWhereInput | RateBlogScalarWhereInput[]
  }

  export type BlogcommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BlogcommentCreateWithoutUserInput, BlogcommentUncheckedCreateWithoutUserInput> | BlogcommentCreateWithoutUserInput[] | BlogcommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogcommentCreateOrConnectWithoutUserInput | BlogcommentCreateOrConnectWithoutUserInput[]
    upsert?: BlogcommentUpsertWithWhereUniqueWithoutUserInput | BlogcommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BlogcommentCreateManyUserInputEnvelope
    set?: BlogcommentWhereUniqueInput | BlogcommentWhereUniqueInput[]
    disconnect?: BlogcommentWhereUniqueInput | BlogcommentWhereUniqueInput[]
    delete?: BlogcommentWhereUniqueInput | BlogcommentWhereUniqueInput[]
    connect?: BlogcommentWhereUniqueInput | BlogcommentWhereUniqueInput[]
    update?: BlogcommentUpdateWithWhereUniqueWithoutUserInput | BlogcommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BlogcommentUpdateManyWithWhereWithoutUserInput | BlogcommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BlogcommentScalarWhereInput | BlogcommentScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput> | ProductCreateWithoutUserInput[] | ProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUserInput | ProductCreateOrConnectWithoutUserInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutUserInput | ProductUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProductCreateManyUserInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutUserInput | ProductUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutUserInput | ProductUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type BillUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BillCreateWithoutUserInput, BillUncheckedCreateWithoutUserInput> | BillCreateWithoutUserInput[] | BillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BillCreateOrConnectWithoutUserInput | BillCreateOrConnectWithoutUserInput[]
    upsert?: BillUpsertWithWhereUniqueWithoutUserInput | BillUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BillCreateManyUserInputEnvelope
    set?: BillWhereUniqueInput | BillWhereUniqueInput[]
    disconnect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    delete?: BillWhereUniqueInput | BillWhereUniqueInput[]
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    update?: BillUpdateWithWhereUniqueWithoutUserInput | BillUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BillUpdateManyWithWhereWithoutUserInput | BillUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BillScalarWhereInput | BillScalarWhereInput[]
  }

  export type BlogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BlogCreateWithoutUserInput, BlogUncheckedCreateWithoutUserInput> | BlogCreateWithoutUserInput[] | BlogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutUserInput | BlogCreateOrConnectWithoutUserInput[]
    upsert?: BlogUpsertWithWhereUniqueWithoutUserInput | BlogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BlogCreateManyUserInputEnvelope
    set?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    disconnect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    delete?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    update?: BlogUpdateWithWhereUniqueWithoutUserInput | BlogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BlogUpdateManyWithWhereWithoutUserInput | BlogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BlogScalarWhereInput | BlogScalarWhereInput[]
  }

  export type RateBlogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RateBlogCreateWithoutUserInput, RateBlogUncheckedCreateWithoutUserInput> | RateBlogCreateWithoutUserInput[] | RateBlogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RateBlogCreateOrConnectWithoutUserInput | RateBlogCreateOrConnectWithoutUserInput[]
    upsert?: RateBlogUpsertWithWhereUniqueWithoutUserInput | RateBlogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RateBlogCreateManyUserInputEnvelope
    set?: RateBlogWhereUniqueInput | RateBlogWhereUniqueInput[]
    disconnect?: RateBlogWhereUniqueInput | RateBlogWhereUniqueInput[]
    delete?: RateBlogWhereUniqueInput | RateBlogWhereUniqueInput[]
    connect?: RateBlogWhereUniqueInput | RateBlogWhereUniqueInput[]
    update?: RateBlogUpdateWithWhereUniqueWithoutUserInput | RateBlogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RateBlogUpdateManyWithWhereWithoutUserInput | RateBlogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RateBlogScalarWhereInput | RateBlogScalarWhereInput[]
  }

  export type BlogcommentCreateNestedManyWithoutBlogInput = {
    create?: XOR<BlogcommentCreateWithoutBlogInput, BlogcommentUncheckedCreateWithoutBlogInput> | BlogcommentCreateWithoutBlogInput[] | BlogcommentUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: BlogcommentCreateOrConnectWithoutBlogInput | BlogcommentCreateOrConnectWithoutBlogInput[]
    createMany?: BlogcommentCreateManyBlogInputEnvelope
    connect?: BlogcommentWhereUniqueInput | BlogcommentWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutBlogsInput = {
    create?: XOR<UserCreateWithoutBlogsInput, UserUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlogsInput
    connect?: UserWhereUniqueInput
  }

  export type RateBlogCreateNestedManyWithoutBlogInput = {
    create?: XOR<RateBlogCreateWithoutBlogInput, RateBlogUncheckedCreateWithoutBlogInput> | RateBlogCreateWithoutBlogInput[] | RateBlogUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: RateBlogCreateOrConnectWithoutBlogInput | RateBlogCreateOrConnectWithoutBlogInput[]
    createMany?: RateBlogCreateManyBlogInputEnvelope
    connect?: RateBlogWhereUniqueInput | RateBlogWhereUniqueInput[]
  }

  export type BlogcommentUncheckedCreateNestedManyWithoutBlogInput = {
    create?: XOR<BlogcommentCreateWithoutBlogInput, BlogcommentUncheckedCreateWithoutBlogInput> | BlogcommentCreateWithoutBlogInput[] | BlogcommentUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: BlogcommentCreateOrConnectWithoutBlogInput | BlogcommentCreateOrConnectWithoutBlogInput[]
    createMany?: BlogcommentCreateManyBlogInputEnvelope
    connect?: BlogcommentWhereUniqueInput | BlogcommentWhereUniqueInput[]
  }

  export type RateBlogUncheckedCreateNestedManyWithoutBlogInput = {
    create?: XOR<RateBlogCreateWithoutBlogInput, RateBlogUncheckedCreateWithoutBlogInput> | RateBlogCreateWithoutBlogInput[] | RateBlogUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: RateBlogCreateOrConnectWithoutBlogInput | RateBlogCreateOrConnectWithoutBlogInput[]
    createMany?: RateBlogCreateManyBlogInputEnvelope
    connect?: RateBlogWhereUniqueInput | RateBlogWhereUniqueInput[]
  }

  export type BlogcommentUpdateManyWithoutBlogNestedInput = {
    create?: XOR<BlogcommentCreateWithoutBlogInput, BlogcommentUncheckedCreateWithoutBlogInput> | BlogcommentCreateWithoutBlogInput[] | BlogcommentUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: BlogcommentCreateOrConnectWithoutBlogInput | BlogcommentCreateOrConnectWithoutBlogInput[]
    upsert?: BlogcommentUpsertWithWhereUniqueWithoutBlogInput | BlogcommentUpsertWithWhereUniqueWithoutBlogInput[]
    createMany?: BlogcommentCreateManyBlogInputEnvelope
    set?: BlogcommentWhereUniqueInput | BlogcommentWhereUniqueInput[]
    disconnect?: BlogcommentWhereUniqueInput | BlogcommentWhereUniqueInput[]
    delete?: BlogcommentWhereUniqueInput | BlogcommentWhereUniqueInput[]
    connect?: BlogcommentWhereUniqueInput | BlogcommentWhereUniqueInput[]
    update?: BlogcommentUpdateWithWhereUniqueWithoutBlogInput | BlogcommentUpdateWithWhereUniqueWithoutBlogInput[]
    updateMany?: BlogcommentUpdateManyWithWhereWithoutBlogInput | BlogcommentUpdateManyWithWhereWithoutBlogInput[]
    deleteMany?: BlogcommentScalarWhereInput | BlogcommentScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutBlogsNestedInput = {
    create?: XOR<UserCreateWithoutBlogsInput, UserUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlogsInput
    upsert?: UserUpsertWithoutBlogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBlogsInput, UserUpdateWithoutBlogsInput>, UserUncheckedUpdateWithoutBlogsInput>
  }

  export type RateBlogUpdateManyWithoutBlogNestedInput = {
    create?: XOR<RateBlogCreateWithoutBlogInput, RateBlogUncheckedCreateWithoutBlogInput> | RateBlogCreateWithoutBlogInput[] | RateBlogUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: RateBlogCreateOrConnectWithoutBlogInput | RateBlogCreateOrConnectWithoutBlogInput[]
    upsert?: RateBlogUpsertWithWhereUniqueWithoutBlogInput | RateBlogUpsertWithWhereUniqueWithoutBlogInput[]
    createMany?: RateBlogCreateManyBlogInputEnvelope
    set?: RateBlogWhereUniqueInput | RateBlogWhereUniqueInput[]
    disconnect?: RateBlogWhereUniqueInput | RateBlogWhereUniqueInput[]
    delete?: RateBlogWhereUniqueInput | RateBlogWhereUniqueInput[]
    connect?: RateBlogWhereUniqueInput | RateBlogWhereUniqueInput[]
    update?: RateBlogUpdateWithWhereUniqueWithoutBlogInput | RateBlogUpdateWithWhereUniqueWithoutBlogInput[]
    updateMany?: RateBlogUpdateManyWithWhereWithoutBlogInput | RateBlogUpdateManyWithWhereWithoutBlogInput[]
    deleteMany?: RateBlogScalarWhereInput | RateBlogScalarWhereInput[]
  }

  export type BlogcommentUncheckedUpdateManyWithoutBlogNestedInput = {
    create?: XOR<BlogcommentCreateWithoutBlogInput, BlogcommentUncheckedCreateWithoutBlogInput> | BlogcommentCreateWithoutBlogInput[] | BlogcommentUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: BlogcommentCreateOrConnectWithoutBlogInput | BlogcommentCreateOrConnectWithoutBlogInput[]
    upsert?: BlogcommentUpsertWithWhereUniqueWithoutBlogInput | BlogcommentUpsertWithWhereUniqueWithoutBlogInput[]
    createMany?: BlogcommentCreateManyBlogInputEnvelope
    set?: BlogcommentWhereUniqueInput | BlogcommentWhereUniqueInput[]
    disconnect?: BlogcommentWhereUniqueInput | BlogcommentWhereUniqueInput[]
    delete?: BlogcommentWhereUniqueInput | BlogcommentWhereUniqueInput[]
    connect?: BlogcommentWhereUniqueInput | BlogcommentWhereUniqueInput[]
    update?: BlogcommentUpdateWithWhereUniqueWithoutBlogInput | BlogcommentUpdateWithWhereUniqueWithoutBlogInput[]
    updateMany?: BlogcommentUpdateManyWithWhereWithoutBlogInput | BlogcommentUpdateManyWithWhereWithoutBlogInput[]
    deleteMany?: BlogcommentScalarWhereInput | BlogcommentScalarWhereInput[]
  }

  export type RateBlogUncheckedUpdateManyWithoutBlogNestedInput = {
    create?: XOR<RateBlogCreateWithoutBlogInput, RateBlogUncheckedCreateWithoutBlogInput> | RateBlogCreateWithoutBlogInput[] | RateBlogUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: RateBlogCreateOrConnectWithoutBlogInput | RateBlogCreateOrConnectWithoutBlogInput[]
    upsert?: RateBlogUpsertWithWhereUniqueWithoutBlogInput | RateBlogUpsertWithWhereUniqueWithoutBlogInput[]
    createMany?: RateBlogCreateManyBlogInputEnvelope
    set?: RateBlogWhereUniqueInput | RateBlogWhereUniqueInput[]
    disconnect?: RateBlogWhereUniqueInput | RateBlogWhereUniqueInput[]
    delete?: RateBlogWhereUniqueInput | RateBlogWhereUniqueInput[]
    connect?: RateBlogWhereUniqueInput | RateBlogWhereUniqueInput[]
    update?: RateBlogUpdateWithWhereUniqueWithoutBlogInput | RateBlogUpdateWithWhereUniqueWithoutBlogInput[]
    updateMany?: RateBlogUpdateManyWithWhereWithoutBlogInput | RateBlogUpdateManyWithWhereWithoutBlogInput[]
    deleteMany?: RateBlogScalarWhereInput | RateBlogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBlogcommentsInput = {
    create?: XOR<UserCreateWithoutBlogcommentsInput, UserUncheckedCreateWithoutBlogcommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlogcommentsInput
    connect?: UserWhereUniqueInput
  }

  export type BlogCreateNestedOneWithoutBlogcommentsInput = {
    create?: XOR<BlogCreateWithoutBlogcommentsInput, BlogUncheckedCreateWithoutBlogcommentsInput>
    connectOrCreate?: BlogCreateOrConnectWithoutBlogcommentsInput
    connect?: BlogWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBlogcommentsNestedInput = {
    create?: XOR<UserCreateWithoutBlogcommentsInput, UserUncheckedCreateWithoutBlogcommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlogcommentsInput
    upsert?: UserUpsertWithoutBlogcommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBlogcommentsInput, UserUpdateWithoutBlogcommentsInput>, UserUncheckedUpdateWithoutBlogcommentsInput>
  }

  export type BlogUpdateOneRequiredWithoutBlogcommentsNestedInput = {
    create?: XOR<BlogCreateWithoutBlogcommentsInput, BlogUncheckedCreateWithoutBlogcommentsInput>
    connectOrCreate?: BlogCreateOrConnectWithoutBlogcommentsInput
    upsert?: BlogUpsertWithoutBlogcommentsInput
    connect?: BlogWhereUniqueInput
    update?: XOR<XOR<BlogUpdateToOneWithWhereWithoutBlogcommentsInput, BlogUpdateWithoutBlogcommentsInput>, BlogUncheckedUpdateWithoutBlogcommentsInput>
  }

  export type ProductCreateNestedManyWithoutBrandInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutBrandInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutBrandNestedInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutBrandInput | ProductUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutBrandInput | ProductUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutBrandInput | ProductUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutBrandInput | ProductUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutBrandInput | ProductUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutBrandInput | ProductUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProductsInput = {
    create?: XOR<UserCreateWithoutProductsInput, UserUncheckedCreateWithoutProductsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProductsInput
    connect?: UserWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    connect?: CategoryWhereUniqueInput
  }

  export type BrandCreateNestedOneWithoutProductsInput = {
    create?: XOR<BrandCreateWithoutProductsInput, BrandUncheckedCreateWithoutProductsInput>
    connectOrCreate?: BrandCreateOrConnectWithoutProductsInput
    connect?: BrandWhereUniqueInput
  }

  export type invoicedetailsCreateNestedManyWithoutProductInput = {
    create?: XOR<invoicedetailsCreateWithoutProductInput, invoicedetailsUncheckedCreateWithoutProductInput> | invoicedetailsCreateWithoutProductInput[] | invoicedetailsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: invoicedetailsCreateOrConnectWithoutProductInput | invoicedetailsCreateOrConnectWithoutProductInput[]
    createMany?: invoicedetailsCreateManyProductInputEnvelope
    connect?: invoicedetailsWhereUniqueInput | invoicedetailsWhereUniqueInput[]
  }

  export type invoicedetailsUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<invoicedetailsCreateWithoutProductInput, invoicedetailsUncheckedCreateWithoutProductInput> | invoicedetailsCreateWithoutProductInput[] | invoicedetailsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: invoicedetailsCreateOrConnectWithoutProductInput | invoicedetailsCreateOrConnectWithoutProductInput[]
    createMany?: invoicedetailsCreateManyProductInputEnvelope
    connect?: invoicedetailsWhereUniqueInput | invoicedetailsWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<UserCreateWithoutProductsInput, UserUncheckedCreateWithoutProductsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProductsInput
    upsert?: UserUpsertWithoutProductsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProductsInput, UserUpdateWithoutProductsInput>, UserUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    upsert?: CategoryUpsertWithoutProductsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductsInput, CategoryUpdateWithoutProductsInput>, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type BrandUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<BrandCreateWithoutProductsInput, BrandUncheckedCreateWithoutProductsInput>
    connectOrCreate?: BrandCreateOrConnectWithoutProductsInput
    upsert?: BrandUpsertWithoutProductsInput
    connect?: BrandWhereUniqueInput
    update?: XOR<XOR<BrandUpdateToOneWithWhereWithoutProductsInput, BrandUpdateWithoutProductsInput>, BrandUncheckedUpdateWithoutProductsInput>
  }

  export type invoicedetailsUpdateManyWithoutProductNestedInput = {
    create?: XOR<invoicedetailsCreateWithoutProductInput, invoicedetailsUncheckedCreateWithoutProductInput> | invoicedetailsCreateWithoutProductInput[] | invoicedetailsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: invoicedetailsCreateOrConnectWithoutProductInput | invoicedetailsCreateOrConnectWithoutProductInput[]
    upsert?: invoicedetailsUpsertWithWhereUniqueWithoutProductInput | invoicedetailsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: invoicedetailsCreateManyProductInputEnvelope
    set?: invoicedetailsWhereUniqueInput | invoicedetailsWhereUniqueInput[]
    disconnect?: invoicedetailsWhereUniqueInput | invoicedetailsWhereUniqueInput[]
    delete?: invoicedetailsWhereUniqueInput | invoicedetailsWhereUniqueInput[]
    connect?: invoicedetailsWhereUniqueInput | invoicedetailsWhereUniqueInput[]
    update?: invoicedetailsUpdateWithWhereUniqueWithoutProductInput | invoicedetailsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: invoicedetailsUpdateManyWithWhereWithoutProductInput | invoicedetailsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: invoicedetailsScalarWhereInput | invoicedetailsScalarWhereInput[]
  }

  export type invoicedetailsUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<invoicedetailsCreateWithoutProductInput, invoicedetailsUncheckedCreateWithoutProductInput> | invoicedetailsCreateWithoutProductInput[] | invoicedetailsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: invoicedetailsCreateOrConnectWithoutProductInput | invoicedetailsCreateOrConnectWithoutProductInput[]
    upsert?: invoicedetailsUpsertWithWhereUniqueWithoutProductInput | invoicedetailsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: invoicedetailsCreateManyProductInputEnvelope
    set?: invoicedetailsWhereUniqueInput | invoicedetailsWhereUniqueInput[]
    disconnect?: invoicedetailsWhereUniqueInput | invoicedetailsWhereUniqueInput[]
    delete?: invoicedetailsWhereUniqueInput | invoicedetailsWhereUniqueInput[]
    connect?: invoicedetailsWhereUniqueInput | invoicedetailsWhereUniqueInput[]
    update?: invoicedetailsUpdateWithWhereUniqueWithoutProductInput | invoicedetailsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: invoicedetailsUpdateManyWithWhereWithoutProductInput | invoicedetailsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: invoicedetailsScalarWhereInput | invoicedetailsScalarWhereInput[]
  }

  export type BillCreateNestedManyWithoutVisitorInput = {
    create?: XOR<BillCreateWithoutVisitorInput, BillUncheckedCreateWithoutVisitorInput> | BillCreateWithoutVisitorInput[] | BillUncheckedCreateWithoutVisitorInput[]
    connectOrCreate?: BillCreateOrConnectWithoutVisitorInput | BillCreateOrConnectWithoutVisitorInput[]
    createMany?: BillCreateManyVisitorInputEnvelope
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
  }

  export type BillUncheckedCreateNestedManyWithoutVisitorInput = {
    create?: XOR<BillCreateWithoutVisitorInput, BillUncheckedCreateWithoutVisitorInput> | BillCreateWithoutVisitorInput[] | BillUncheckedCreateWithoutVisitorInput[]
    connectOrCreate?: BillCreateOrConnectWithoutVisitorInput | BillCreateOrConnectWithoutVisitorInput[]
    createMany?: BillCreateManyVisitorInputEnvelope
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
  }

  export type BillUpdateManyWithoutVisitorNestedInput = {
    create?: XOR<BillCreateWithoutVisitorInput, BillUncheckedCreateWithoutVisitorInput> | BillCreateWithoutVisitorInput[] | BillUncheckedCreateWithoutVisitorInput[]
    connectOrCreate?: BillCreateOrConnectWithoutVisitorInput | BillCreateOrConnectWithoutVisitorInput[]
    upsert?: BillUpsertWithWhereUniqueWithoutVisitorInput | BillUpsertWithWhereUniqueWithoutVisitorInput[]
    createMany?: BillCreateManyVisitorInputEnvelope
    set?: BillWhereUniqueInput | BillWhereUniqueInput[]
    disconnect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    delete?: BillWhereUniqueInput | BillWhereUniqueInput[]
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    update?: BillUpdateWithWhereUniqueWithoutVisitorInput | BillUpdateWithWhereUniqueWithoutVisitorInput[]
    updateMany?: BillUpdateManyWithWhereWithoutVisitorInput | BillUpdateManyWithWhereWithoutVisitorInput[]
    deleteMany?: BillScalarWhereInput | BillScalarWhereInput[]
  }

  export type BillUncheckedUpdateManyWithoutVisitorNestedInput = {
    create?: XOR<BillCreateWithoutVisitorInput, BillUncheckedCreateWithoutVisitorInput> | BillCreateWithoutVisitorInput[] | BillUncheckedCreateWithoutVisitorInput[]
    connectOrCreate?: BillCreateOrConnectWithoutVisitorInput | BillCreateOrConnectWithoutVisitorInput[]
    upsert?: BillUpsertWithWhereUniqueWithoutVisitorInput | BillUpsertWithWhereUniqueWithoutVisitorInput[]
    createMany?: BillCreateManyVisitorInputEnvelope
    set?: BillWhereUniqueInput | BillWhereUniqueInput[]
    disconnect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    delete?: BillWhereUniqueInput | BillWhereUniqueInput[]
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    update?: BillUpdateWithWhereUniqueWithoutVisitorInput | BillUpdateWithWhereUniqueWithoutVisitorInput[]
    updateMany?: BillUpdateManyWithWhereWithoutVisitorInput | BillUpdateManyWithWhereWithoutVisitorInput[]
    deleteMany?: BillScalarWhereInput | BillScalarWhereInput[]
  }

  export type VisitorCreateNestedOneWithoutBillsInput = {
    create?: XOR<VisitorCreateWithoutBillsInput, VisitorUncheckedCreateWithoutBillsInput>
    connectOrCreate?: VisitorCreateOrConnectWithoutBillsInput
    connect?: VisitorWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBillsInput = {
    create?: XOR<UserCreateWithoutBillsInput, UserUncheckedCreateWithoutBillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBillsInput
    connect?: UserWhereUniqueInput
  }

  export type invoicedetailsCreateNestedManyWithoutBillInput = {
    create?: XOR<invoicedetailsCreateWithoutBillInput, invoicedetailsUncheckedCreateWithoutBillInput> | invoicedetailsCreateWithoutBillInput[] | invoicedetailsUncheckedCreateWithoutBillInput[]
    connectOrCreate?: invoicedetailsCreateOrConnectWithoutBillInput | invoicedetailsCreateOrConnectWithoutBillInput[]
    createMany?: invoicedetailsCreateManyBillInputEnvelope
    connect?: invoicedetailsWhereUniqueInput | invoicedetailsWhereUniqueInput[]
  }

  export type invoicedetailsUncheckedCreateNestedManyWithoutBillInput = {
    create?: XOR<invoicedetailsCreateWithoutBillInput, invoicedetailsUncheckedCreateWithoutBillInput> | invoicedetailsCreateWithoutBillInput[] | invoicedetailsUncheckedCreateWithoutBillInput[]
    connectOrCreate?: invoicedetailsCreateOrConnectWithoutBillInput | invoicedetailsCreateOrConnectWithoutBillInput[]
    createMany?: invoicedetailsCreateManyBillInputEnvelope
    connect?: invoicedetailsWhereUniqueInput | invoicedetailsWhereUniqueInput[]
  }

  export type VisitorUpdateOneRequiredWithoutBillsNestedInput = {
    create?: XOR<VisitorCreateWithoutBillsInput, VisitorUncheckedCreateWithoutBillsInput>
    connectOrCreate?: VisitorCreateOrConnectWithoutBillsInput
    upsert?: VisitorUpsertWithoutBillsInput
    connect?: VisitorWhereUniqueInput
    update?: XOR<XOR<VisitorUpdateToOneWithWhereWithoutBillsInput, VisitorUpdateWithoutBillsInput>, VisitorUncheckedUpdateWithoutBillsInput>
  }

  export type UserUpdateOneRequiredWithoutBillsNestedInput = {
    create?: XOR<UserCreateWithoutBillsInput, UserUncheckedCreateWithoutBillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBillsInput
    upsert?: UserUpsertWithoutBillsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBillsInput, UserUpdateWithoutBillsInput>, UserUncheckedUpdateWithoutBillsInput>
  }

  export type invoicedetailsUpdateManyWithoutBillNestedInput = {
    create?: XOR<invoicedetailsCreateWithoutBillInput, invoicedetailsUncheckedCreateWithoutBillInput> | invoicedetailsCreateWithoutBillInput[] | invoicedetailsUncheckedCreateWithoutBillInput[]
    connectOrCreate?: invoicedetailsCreateOrConnectWithoutBillInput | invoicedetailsCreateOrConnectWithoutBillInput[]
    upsert?: invoicedetailsUpsertWithWhereUniqueWithoutBillInput | invoicedetailsUpsertWithWhereUniqueWithoutBillInput[]
    createMany?: invoicedetailsCreateManyBillInputEnvelope
    set?: invoicedetailsWhereUniqueInput | invoicedetailsWhereUniqueInput[]
    disconnect?: invoicedetailsWhereUniqueInput | invoicedetailsWhereUniqueInput[]
    delete?: invoicedetailsWhereUniqueInput | invoicedetailsWhereUniqueInput[]
    connect?: invoicedetailsWhereUniqueInput | invoicedetailsWhereUniqueInput[]
    update?: invoicedetailsUpdateWithWhereUniqueWithoutBillInput | invoicedetailsUpdateWithWhereUniqueWithoutBillInput[]
    updateMany?: invoicedetailsUpdateManyWithWhereWithoutBillInput | invoicedetailsUpdateManyWithWhereWithoutBillInput[]
    deleteMany?: invoicedetailsScalarWhereInput | invoicedetailsScalarWhereInput[]
  }

  export type invoicedetailsUncheckedUpdateManyWithoutBillNestedInput = {
    create?: XOR<invoicedetailsCreateWithoutBillInput, invoicedetailsUncheckedCreateWithoutBillInput> | invoicedetailsCreateWithoutBillInput[] | invoicedetailsUncheckedCreateWithoutBillInput[]
    connectOrCreate?: invoicedetailsCreateOrConnectWithoutBillInput | invoicedetailsCreateOrConnectWithoutBillInput[]
    upsert?: invoicedetailsUpsertWithWhereUniqueWithoutBillInput | invoicedetailsUpsertWithWhereUniqueWithoutBillInput[]
    createMany?: invoicedetailsCreateManyBillInputEnvelope
    set?: invoicedetailsWhereUniqueInput | invoicedetailsWhereUniqueInput[]
    disconnect?: invoicedetailsWhereUniqueInput | invoicedetailsWhereUniqueInput[]
    delete?: invoicedetailsWhereUniqueInput | invoicedetailsWhereUniqueInput[]
    connect?: invoicedetailsWhereUniqueInput | invoicedetailsWhereUniqueInput[]
    update?: invoicedetailsUpdateWithWhereUniqueWithoutBillInput | invoicedetailsUpdateWithWhereUniqueWithoutBillInput[]
    updateMany?: invoicedetailsUpdateManyWithWhereWithoutBillInput | invoicedetailsUpdateManyWithWhereWithoutBillInput[]
    deleteMany?: invoicedetailsScalarWhereInput | invoicedetailsScalarWhereInput[]
  }

  export type BillCreateNestedOneWithoutInvoicedetailsInput = {
    create?: XOR<BillCreateWithoutInvoicedetailsInput, BillUncheckedCreateWithoutInvoicedetailsInput>
    connectOrCreate?: BillCreateOrConnectWithoutInvoicedetailsInput
    connect?: BillWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutInvoicedetailsInput = {
    create?: XOR<ProductCreateWithoutInvoicedetailsInput, ProductUncheckedCreateWithoutInvoicedetailsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutInvoicedetailsInput
    connect?: ProductWhereUniqueInput
  }

  export type BillUpdateOneRequiredWithoutInvoicedetailsNestedInput = {
    create?: XOR<BillCreateWithoutInvoicedetailsInput, BillUncheckedCreateWithoutInvoicedetailsInput>
    connectOrCreate?: BillCreateOrConnectWithoutInvoicedetailsInput
    upsert?: BillUpsertWithoutInvoicedetailsInput
    connect?: BillWhereUniqueInput
    update?: XOR<XOR<BillUpdateToOneWithWhereWithoutInvoicedetailsInput, BillUpdateWithoutInvoicedetailsInput>, BillUncheckedUpdateWithoutInvoicedetailsInput>
  }

  export type ProductUpdateOneRequiredWithoutInvoicedetailsNestedInput = {
    create?: XOR<ProductCreateWithoutInvoicedetailsInput, ProductUncheckedCreateWithoutInvoicedetailsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutInvoicedetailsInput
    upsert?: ProductUpsertWithoutInvoicedetailsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutInvoicedetailsInput, ProductUpdateWithoutInvoicedetailsInput>, ProductUncheckedUpdateWithoutInvoicedetailsInput>
  }

  export type UserCreateNestedOneWithoutRateBlogsInput = {
    create?: XOR<UserCreateWithoutRateBlogsInput, UserUncheckedCreateWithoutRateBlogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRateBlogsInput
    connect?: UserWhereUniqueInput
  }

  export type BlogCreateNestedOneWithoutRateBlogsInput = {
    create?: XOR<BlogCreateWithoutRateBlogsInput, BlogUncheckedCreateWithoutRateBlogsInput>
    connectOrCreate?: BlogCreateOrConnectWithoutRateBlogsInput
    connect?: BlogWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRateBlogsNestedInput = {
    create?: XOR<UserCreateWithoutRateBlogsInput, UserUncheckedCreateWithoutRateBlogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRateBlogsInput
    upsert?: UserUpsertWithoutRateBlogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRateBlogsInput, UserUpdateWithoutRateBlogsInput>, UserUncheckedUpdateWithoutRateBlogsInput>
  }

  export type BlogUpdateOneRequiredWithoutRateBlogsNestedInput = {
    create?: XOR<BlogCreateWithoutRateBlogsInput, BlogUncheckedCreateWithoutRateBlogsInput>
    connectOrCreate?: BlogCreateOrConnectWithoutRateBlogsInput
    upsert?: BlogUpsertWithoutRateBlogsInput
    connect?: BlogWhereUniqueInput
    update?: XOR<XOR<BlogUpdateToOneWithWhereWithoutRateBlogsInput, BlogUpdateWithoutRateBlogsInput>, BlogUncheckedUpdateWithoutRateBlogsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
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
    in?: number[]
    notIn?: number[]
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

  export type BlogcommentCreateWithoutUserInput = {
    comment: string
    avatar?: string | null
    name: string
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    blog: BlogCreateNestedOneWithoutBlogcommentsInput
  }

  export type BlogcommentUncheckedCreateWithoutUserInput = {
    id?: number
    comment: string
    id_blog: number
    avatar?: string | null
    name: string
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogcommentCreateOrConnectWithoutUserInput = {
    where: BlogcommentWhereUniqueInput
    create: XOR<BlogcommentCreateWithoutUserInput, BlogcommentUncheckedCreateWithoutUserInput>
  }

  export type BlogcommentCreateManyUserInputEnvelope = {
    data: BlogcommentCreateManyUserInput | BlogcommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutUserInput = {
    name: string
    slug: string
    price: number
    status?: number
    sale?: number
    company?: string | null
    image_product?: string | null
    detail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    brand: BrandCreateNestedOneWithoutProductsInput
    invoicedetails?: invoicedetailsCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    slug: string
    price: number
    id_category: number
    id_brand: number
    status?: number
    sale?: number
    company?: string | null
    image_product?: string | null
    detail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoicedetails?: invoicedetailsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutUserInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput>
  }

  export type ProductCreateManyUserInputEnvelope = {
    data: ProductCreateManyUserInput | ProductCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BillCreateWithoutUserInput = {
    codeBill: string
    total?: number
    status?: number
    paymenttype?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    visitor: VisitorCreateNestedOneWithoutBillsInput
    invoicedetails?: invoicedetailsCreateNestedManyWithoutBillInput
  }

  export type BillUncheckedCreateWithoutUserInput = {
    id?: number
    codeBill: string
    total?: number
    id_Visitor: number
    status?: number
    paymenttype?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoicedetails?: invoicedetailsUncheckedCreateNestedManyWithoutBillInput
  }

  export type BillCreateOrConnectWithoutUserInput = {
    where: BillWhereUniqueInput
    create: XOR<BillCreateWithoutUserInput, BillUncheckedCreateWithoutUserInput>
  }

  export type BillCreateManyUserInputEnvelope = {
    data: BillCreateManyUserInput | BillCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BlogCreateWithoutUserInput = {
    title: string
    image: string
    description?: string | null
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    blogcomments?: BlogcommentCreateNestedManyWithoutBlogInput
    rateBlogs?: RateBlogCreateNestedManyWithoutBlogInput
  }

  export type BlogUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    image: string
    description?: string | null
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    blogcomments?: BlogcommentUncheckedCreateNestedManyWithoutBlogInput
    rateBlogs?: RateBlogUncheckedCreateNestedManyWithoutBlogInput
  }

  export type BlogCreateOrConnectWithoutUserInput = {
    where: BlogWhereUniqueInput
    create: XOR<BlogCreateWithoutUserInput, BlogUncheckedCreateWithoutUserInput>
  }

  export type BlogCreateManyUserInputEnvelope = {
    data: BlogCreateManyUserInput | BlogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RateBlogCreateWithoutUserInput = {
    rate: number
    blog: BlogCreateNestedOneWithoutRateBlogsInput
  }

  export type RateBlogUncheckedCreateWithoutUserInput = {
    id?: number
    id_blog: number
    rate: number
  }

  export type RateBlogCreateOrConnectWithoutUserInput = {
    where: RateBlogWhereUniqueInput
    create: XOR<RateBlogCreateWithoutUserInput, RateBlogUncheckedCreateWithoutUserInput>
  }

  export type RateBlogCreateManyUserInputEnvelope = {
    data: RateBlogCreateManyUserInput | RateBlogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BlogcommentUpsertWithWhereUniqueWithoutUserInput = {
    where: BlogcommentWhereUniqueInput
    update: XOR<BlogcommentUpdateWithoutUserInput, BlogcommentUncheckedUpdateWithoutUserInput>
    create: XOR<BlogcommentCreateWithoutUserInput, BlogcommentUncheckedCreateWithoutUserInput>
  }

  export type BlogcommentUpdateWithWhereUniqueWithoutUserInput = {
    where: BlogcommentWhereUniqueInput
    data: XOR<BlogcommentUpdateWithoutUserInput, BlogcommentUncheckedUpdateWithoutUserInput>
  }

  export type BlogcommentUpdateManyWithWhereWithoutUserInput = {
    where: BlogcommentScalarWhereInput
    data: XOR<BlogcommentUpdateManyMutationInput, BlogcommentUncheckedUpdateManyWithoutUserInput>
  }

  export type BlogcommentScalarWhereInput = {
    AND?: BlogcommentScalarWhereInput | BlogcommentScalarWhereInput[]
    OR?: BlogcommentScalarWhereInput[]
    NOT?: BlogcommentScalarWhereInput | BlogcommentScalarWhereInput[]
    id?: IntFilter<"Blogcomment"> | number
    comment?: StringFilter<"Blogcomment"> | string
    id_blog?: IntFilter<"Blogcomment"> | number
    id_user?: IntFilter<"Blogcomment"> | number
    avatar?: StringNullableFilter<"Blogcomment"> | string | null
    name?: StringFilter<"Blogcomment"> | string
    level?: IntFilter<"Blogcomment"> | number
    createdAt?: DateTimeFilter<"Blogcomment"> | Date | string
    updatedAt?: DateTimeFilter<"Blogcomment"> | Date | string
  }

  export type ProductUpsertWithWhereUniqueWithoutUserInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutUserInput, ProductUncheckedUpdateWithoutUserInput>
    create: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutUserInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutUserInput, ProductUncheckedUpdateWithoutUserInput>
  }

  export type ProductUpdateManyWithWhereWithoutUserInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutUserInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    slug?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    id_user?: IntFilter<"Product"> | number
    id_category?: IntFilter<"Product"> | number
    id_brand?: IntFilter<"Product"> | number
    status?: IntFilter<"Product"> | number
    sale?: FloatFilter<"Product"> | number
    company?: StringNullableFilter<"Product"> | string | null
    image_product?: StringNullableFilter<"Product"> | string | null
    detail?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type BillUpsertWithWhereUniqueWithoutUserInput = {
    where: BillWhereUniqueInput
    update: XOR<BillUpdateWithoutUserInput, BillUncheckedUpdateWithoutUserInput>
    create: XOR<BillCreateWithoutUserInput, BillUncheckedCreateWithoutUserInput>
  }

  export type BillUpdateWithWhereUniqueWithoutUserInput = {
    where: BillWhereUniqueInput
    data: XOR<BillUpdateWithoutUserInput, BillUncheckedUpdateWithoutUserInput>
  }

  export type BillUpdateManyWithWhereWithoutUserInput = {
    where: BillScalarWhereInput
    data: XOR<BillUpdateManyMutationInput, BillUncheckedUpdateManyWithoutUserInput>
  }

  export type BillScalarWhereInput = {
    AND?: BillScalarWhereInput | BillScalarWhereInput[]
    OR?: BillScalarWhereInput[]
    NOT?: BillScalarWhereInput | BillScalarWhereInput[]
    id?: IntFilter<"Bill"> | number
    codeBill?: StringFilter<"Bill"> | string
    total?: FloatFilter<"Bill"> | number
    id_Visitor?: IntFilter<"Bill"> | number
    id_user?: IntFilter<"Bill"> | number
    status?: IntFilter<"Bill"> | number
    paymenttype?: StringNullableFilter<"Bill"> | string | null
    createdAt?: DateTimeFilter<"Bill"> | Date | string
    updatedAt?: DateTimeFilter<"Bill"> | Date | string
  }

  export type BlogUpsertWithWhereUniqueWithoutUserInput = {
    where: BlogWhereUniqueInput
    update: XOR<BlogUpdateWithoutUserInput, BlogUncheckedUpdateWithoutUserInput>
    create: XOR<BlogCreateWithoutUserInput, BlogUncheckedCreateWithoutUserInput>
  }

  export type BlogUpdateWithWhereUniqueWithoutUserInput = {
    where: BlogWhereUniqueInput
    data: XOR<BlogUpdateWithoutUserInput, BlogUncheckedUpdateWithoutUserInput>
  }

  export type BlogUpdateManyWithWhereWithoutUserInput = {
    where: BlogScalarWhereInput
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyWithoutUserInput>
  }

  export type BlogScalarWhereInput = {
    AND?: BlogScalarWhereInput | BlogScalarWhereInput[]
    OR?: BlogScalarWhereInput[]
    NOT?: BlogScalarWhereInput | BlogScalarWhereInput[]
    id?: IntFilter<"Blog"> | number
    title?: StringFilter<"Blog"> | string
    image?: StringFilter<"Blog"> | string
    description?: StringNullableFilter<"Blog"> | string | null
    content?: StringNullableFilter<"Blog"> | string | null
    id_user?: IntFilter<"Blog"> | number
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
  }

  export type RateBlogUpsertWithWhereUniqueWithoutUserInput = {
    where: RateBlogWhereUniqueInput
    update: XOR<RateBlogUpdateWithoutUserInput, RateBlogUncheckedUpdateWithoutUserInput>
    create: XOR<RateBlogCreateWithoutUserInput, RateBlogUncheckedCreateWithoutUserInput>
  }

  export type RateBlogUpdateWithWhereUniqueWithoutUserInput = {
    where: RateBlogWhereUniqueInput
    data: XOR<RateBlogUpdateWithoutUserInput, RateBlogUncheckedUpdateWithoutUserInput>
  }

  export type RateBlogUpdateManyWithWhereWithoutUserInput = {
    where: RateBlogScalarWhereInput
    data: XOR<RateBlogUpdateManyMutationInput, RateBlogUncheckedUpdateManyWithoutUserInput>
  }

  export type RateBlogScalarWhereInput = {
    AND?: RateBlogScalarWhereInput | RateBlogScalarWhereInput[]
    OR?: RateBlogScalarWhereInput[]
    NOT?: RateBlogScalarWhereInput | RateBlogScalarWhereInput[]
    id?: IntFilter<"RateBlog"> | number
    id_blog?: IntFilter<"RateBlog"> | number
    id_user?: IntFilter<"RateBlog"> | number
    rate?: IntFilter<"RateBlog"> | number
  }

  export type BlogcommentCreateWithoutBlogInput = {
    comment: string
    avatar?: string | null
    name: string
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBlogcommentsInput
  }

  export type BlogcommentUncheckedCreateWithoutBlogInput = {
    id?: number
    comment: string
    id_user: number
    avatar?: string | null
    name: string
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogcommentCreateOrConnectWithoutBlogInput = {
    where: BlogcommentWhereUniqueInput
    create: XOR<BlogcommentCreateWithoutBlogInput, BlogcommentUncheckedCreateWithoutBlogInput>
  }

  export type BlogcommentCreateManyBlogInputEnvelope = {
    data: BlogcommentCreateManyBlogInput | BlogcommentCreateManyBlogInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutBlogsInput = {
    name: string
    email: string
    password: string
    phone?: string | null
    avatar?: string | null
    address?: string | null
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    blogcomments?: BlogcommentCreateNestedManyWithoutUserInput
    products?: ProductCreateNestedManyWithoutUserInput
    bills?: BillCreateNestedManyWithoutUserInput
    rateBlogs?: RateBlogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBlogsInput = {
    id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    avatar?: string | null
    address?: string | null
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    blogcomments?: BlogcommentUncheckedCreateNestedManyWithoutUserInput
    products?: ProductUncheckedCreateNestedManyWithoutUserInput
    bills?: BillUncheckedCreateNestedManyWithoutUserInput
    rateBlogs?: RateBlogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBlogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBlogsInput, UserUncheckedCreateWithoutBlogsInput>
  }

  export type RateBlogCreateWithoutBlogInput = {
    rate: number
    user: UserCreateNestedOneWithoutRateBlogsInput
  }

  export type RateBlogUncheckedCreateWithoutBlogInput = {
    id?: number
    id_user: number
    rate: number
  }

  export type RateBlogCreateOrConnectWithoutBlogInput = {
    where: RateBlogWhereUniqueInput
    create: XOR<RateBlogCreateWithoutBlogInput, RateBlogUncheckedCreateWithoutBlogInput>
  }

  export type RateBlogCreateManyBlogInputEnvelope = {
    data: RateBlogCreateManyBlogInput | RateBlogCreateManyBlogInput[]
    skipDuplicates?: boolean
  }

  export type BlogcommentUpsertWithWhereUniqueWithoutBlogInput = {
    where: BlogcommentWhereUniqueInput
    update: XOR<BlogcommentUpdateWithoutBlogInput, BlogcommentUncheckedUpdateWithoutBlogInput>
    create: XOR<BlogcommentCreateWithoutBlogInput, BlogcommentUncheckedCreateWithoutBlogInput>
  }

  export type BlogcommentUpdateWithWhereUniqueWithoutBlogInput = {
    where: BlogcommentWhereUniqueInput
    data: XOR<BlogcommentUpdateWithoutBlogInput, BlogcommentUncheckedUpdateWithoutBlogInput>
  }

  export type BlogcommentUpdateManyWithWhereWithoutBlogInput = {
    where: BlogcommentScalarWhereInput
    data: XOR<BlogcommentUpdateManyMutationInput, BlogcommentUncheckedUpdateManyWithoutBlogInput>
  }

  export type UserUpsertWithoutBlogsInput = {
    update: XOR<UserUpdateWithoutBlogsInput, UserUncheckedUpdateWithoutBlogsInput>
    create: XOR<UserCreateWithoutBlogsInput, UserUncheckedCreateWithoutBlogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBlogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBlogsInput, UserUncheckedUpdateWithoutBlogsInput>
  }

  export type UserUpdateWithoutBlogsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogcomments?: BlogcommentUpdateManyWithoutUserNestedInput
    products?: ProductUpdateManyWithoutUserNestedInput
    bills?: BillUpdateManyWithoutUserNestedInput
    rateBlogs?: RateBlogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBlogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogcomments?: BlogcommentUncheckedUpdateManyWithoutUserNestedInput
    products?: ProductUncheckedUpdateManyWithoutUserNestedInput
    bills?: BillUncheckedUpdateManyWithoutUserNestedInput
    rateBlogs?: RateBlogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RateBlogUpsertWithWhereUniqueWithoutBlogInput = {
    where: RateBlogWhereUniqueInput
    update: XOR<RateBlogUpdateWithoutBlogInput, RateBlogUncheckedUpdateWithoutBlogInput>
    create: XOR<RateBlogCreateWithoutBlogInput, RateBlogUncheckedCreateWithoutBlogInput>
  }

  export type RateBlogUpdateWithWhereUniqueWithoutBlogInput = {
    where: RateBlogWhereUniqueInput
    data: XOR<RateBlogUpdateWithoutBlogInput, RateBlogUncheckedUpdateWithoutBlogInput>
  }

  export type RateBlogUpdateManyWithWhereWithoutBlogInput = {
    where: RateBlogScalarWhereInput
    data: XOR<RateBlogUpdateManyMutationInput, RateBlogUncheckedUpdateManyWithoutBlogInput>
  }

  export type UserCreateWithoutBlogcommentsInput = {
    name: string
    email: string
    password: string
    phone?: string | null
    avatar?: string | null
    address?: string | null
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductCreateNestedManyWithoutUserInput
    bills?: BillCreateNestedManyWithoutUserInput
    blogs?: BlogCreateNestedManyWithoutUserInput
    rateBlogs?: RateBlogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBlogcommentsInput = {
    id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    avatar?: string | null
    address?: string | null
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutUserInput
    bills?: BillUncheckedCreateNestedManyWithoutUserInput
    blogs?: BlogUncheckedCreateNestedManyWithoutUserInput
    rateBlogs?: RateBlogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBlogcommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBlogcommentsInput, UserUncheckedCreateWithoutBlogcommentsInput>
  }

  export type BlogCreateWithoutBlogcommentsInput = {
    title: string
    image: string
    description?: string | null
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBlogsInput
    rateBlogs?: RateBlogCreateNestedManyWithoutBlogInput
  }

  export type BlogUncheckedCreateWithoutBlogcommentsInput = {
    id?: number
    title: string
    image: string
    description?: string | null
    content?: string | null
    id_user: number
    createdAt?: Date | string
    updatedAt?: Date | string
    rateBlogs?: RateBlogUncheckedCreateNestedManyWithoutBlogInput
  }

  export type BlogCreateOrConnectWithoutBlogcommentsInput = {
    where: BlogWhereUniqueInput
    create: XOR<BlogCreateWithoutBlogcommentsInput, BlogUncheckedCreateWithoutBlogcommentsInput>
  }

  export type UserUpsertWithoutBlogcommentsInput = {
    update: XOR<UserUpdateWithoutBlogcommentsInput, UserUncheckedUpdateWithoutBlogcommentsInput>
    create: XOR<UserCreateWithoutBlogcommentsInput, UserUncheckedCreateWithoutBlogcommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBlogcommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBlogcommentsInput, UserUncheckedUpdateWithoutBlogcommentsInput>
  }

  export type UserUpdateWithoutBlogcommentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutUserNestedInput
    bills?: BillUpdateManyWithoutUserNestedInput
    blogs?: BlogUpdateManyWithoutUserNestedInput
    rateBlogs?: RateBlogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBlogcommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutUserNestedInput
    bills?: BillUncheckedUpdateManyWithoutUserNestedInput
    blogs?: BlogUncheckedUpdateManyWithoutUserNestedInput
    rateBlogs?: RateBlogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BlogUpsertWithoutBlogcommentsInput = {
    update: XOR<BlogUpdateWithoutBlogcommentsInput, BlogUncheckedUpdateWithoutBlogcommentsInput>
    create: XOR<BlogCreateWithoutBlogcommentsInput, BlogUncheckedCreateWithoutBlogcommentsInput>
    where?: BlogWhereInput
  }

  export type BlogUpdateToOneWithWhereWithoutBlogcommentsInput = {
    where?: BlogWhereInput
    data: XOR<BlogUpdateWithoutBlogcommentsInput, BlogUncheckedUpdateWithoutBlogcommentsInput>
  }

  export type BlogUpdateWithoutBlogcommentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBlogsNestedInput
    rateBlogs?: RateBlogUpdateManyWithoutBlogNestedInput
  }

  export type BlogUncheckedUpdateWithoutBlogcommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    id_user?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rateBlogs?: RateBlogUncheckedUpdateManyWithoutBlogNestedInput
  }

  export type ProductCreateWithoutBrandInput = {
    name: string
    slug: string
    price: number
    status?: number
    sale?: number
    company?: string | null
    image_product?: string | null
    detail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProductsInput
    category: CategoryCreateNestedOneWithoutProductsInput
    invoicedetails?: invoicedetailsCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutBrandInput = {
    id?: number
    name: string
    slug: string
    price: number
    id_user: number
    id_category: number
    status?: number
    sale?: number
    company?: string | null
    image_product?: string | null
    detail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoicedetails?: invoicedetailsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutBrandInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput>
  }

  export type ProductCreateManyBrandInputEnvelope = {
    data: ProductCreateManyBrandInput | ProductCreateManyBrandInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutBrandInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutBrandInput, ProductUncheckedUpdateWithoutBrandInput>
    create: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutBrandInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutBrandInput, ProductUncheckedUpdateWithoutBrandInput>
  }

  export type ProductUpdateManyWithWhereWithoutBrandInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutBrandInput>
  }

  export type ProductCreateWithoutCategoryInput = {
    name: string
    slug: string
    price: number
    status?: number
    sale?: number
    company?: string | null
    image_product?: string | null
    detail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProductsInput
    brand: BrandCreateNestedOneWithoutProductsInput
    invoicedetails?: invoicedetailsCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    slug: string
    price: number
    id_user: number
    id_brand: number
    status?: number
    sale?: number
    company?: string | null
    image_product?: string | null
    detail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoicedetails?: invoicedetailsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type UserCreateWithoutProductsInput = {
    name: string
    email: string
    password: string
    phone?: string | null
    avatar?: string | null
    address?: string | null
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    blogcomments?: BlogcommentCreateNestedManyWithoutUserInput
    bills?: BillCreateNestedManyWithoutUserInput
    blogs?: BlogCreateNestedManyWithoutUserInput
    rateBlogs?: RateBlogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    avatar?: string | null
    address?: string | null
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    blogcomments?: BlogcommentUncheckedCreateNestedManyWithoutUserInput
    bills?: BillUncheckedCreateNestedManyWithoutUserInput
    blogs?: BlogUncheckedCreateNestedManyWithoutUserInput
    rateBlogs?: RateBlogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProductsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProductsInput, UserUncheckedCreateWithoutProductsInput>
  }

  export type CategoryCreateWithoutProductsInput = {
    category: string
    slug: string
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUncheckedCreateWithoutProductsInput = {
    id?: number
    category: string
    slug: string
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type BrandCreateWithoutProductsInput = {
    brand: string
    slug: string
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrandUncheckedCreateWithoutProductsInput = {
    id?: number
    brand: string
    slug: string
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrandCreateOrConnectWithoutProductsInput = {
    where: BrandWhereUniqueInput
    create: XOR<BrandCreateWithoutProductsInput, BrandUncheckedCreateWithoutProductsInput>
  }

  export type invoicedetailsCreateWithoutProductInput = {
    qty: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bill: BillCreateNestedOneWithoutInvoicedetailsInput
  }

  export type invoicedetailsUncheckedCreateWithoutProductInput = {
    id?: number
    id_bill: number
    qty: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type invoicedetailsCreateOrConnectWithoutProductInput = {
    where: invoicedetailsWhereUniqueInput
    create: XOR<invoicedetailsCreateWithoutProductInput, invoicedetailsUncheckedCreateWithoutProductInput>
  }

  export type invoicedetailsCreateManyProductInputEnvelope = {
    data: invoicedetailsCreateManyProductInput | invoicedetailsCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProductsInput = {
    update: XOR<UserUpdateWithoutProductsInput, UserUncheckedUpdateWithoutProductsInput>
    create: XOR<UserCreateWithoutProductsInput, UserUncheckedCreateWithoutProductsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProductsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProductsInput, UserUncheckedUpdateWithoutProductsInput>
  }

  export type UserUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogcomments?: BlogcommentUpdateManyWithoutUserNestedInput
    bills?: BillUpdateManyWithoutUserNestedInput
    blogs?: BlogUpdateManyWithoutUserNestedInput
    rateBlogs?: RateBlogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogcomments?: BlogcommentUncheckedUpdateManyWithoutUserNestedInput
    bills?: BillUncheckedUpdateManyWithoutUserNestedInput
    blogs?: BlogUncheckedUpdateManyWithoutUserNestedInput
    rateBlogs?: RateBlogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateWithoutProductsInput = {
    category?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandUpsertWithoutProductsInput = {
    update: XOR<BrandUpdateWithoutProductsInput, BrandUncheckedUpdateWithoutProductsInput>
    create: XOR<BrandCreateWithoutProductsInput, BrandUncheckedCreateWithoutProductsInput>
    where?: BrandWhereInput
  }

  export type BrandUpdateToOneWithWhereWithoutProductsInput = {
    where?: BrandWhereInput
    data: XOR<BrandUpdateWithoutProductsInput, BrandUncheckedUpdateWithoutProductsInput>
  }

  export type BrandUpdateWithoutProductsInput = {
    brand?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invoicedetailsUpsertWithWhereUniqueWithoutProductInput = {
    where: invoicedetailsWhereUniqueInput
    update: XOR<invoicedetailsUpdateWithoutProductInput, invoicedetailsUncheckedUpdateWithoutProductInput>
    create: XOR<invoicedetailsCreateWithoutProductInput, invoicedetailsUncheckedCreateWithoutProductInput>
  }

  export type invoicedetailsUpdateWithWhereUniqueWithoutProductInput = {
    where: invoicedetailsWhereUniqueInput
    data: XOR<invoicedetailsUpdateWithoutProductInput, invoicedetailsUncheckedUpdateWithoutProductInput>
  }

  export type invoicedetailsUpdateManyWithWhereWithoutProductInput = {
    where: invoicedetailsScalarWhereInput
    data: XOR<invoicedetailsUpdateManyMutationInput, invoicedetailsUncheckedUpdateManyWithoutProductInput>
  }

  export type invoicedetailsScalarWhereInput = {
    AND?: invoicedetailsScalarWhereInput | invoicedetailsScalarWhereInput[]
    OR?: invoicedetailsScalarWhereInput[]
    NOT?: invoicedetailsScalarWhereInput | invoicedetailsScalarWhereInput[]
    id?: IntFilter<"invoicedetails"> | number
    id_bill?: IntFilter<"invoicedetails"> | number
    id_product?: IntFilter<"invoicedetails"> | number
    qty?: IntFilter<"invoicedetails"> | number
    createdAt?: DateTimeFilter<"invoicedetails"> | Date | string
    updatedAt?: DateTimeFilter<"invoicedetails"> | Date | string
  }

  export type BillCreateWithoutVisitorInput = {
    codeBill: string
    total?: number
    status?: number
    paymenttype?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutBillsInput
    invoicedetails?: invoicedetailsCreateNestedManyWithoutBillInput
  }

  export type BillUncheckedCreateWithoutVisitorInput = {
    id?: number
    codeBill: string
    total?: number
    id_user?: number
    status?: number
    paymenttype?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoicedetails?: invoicedetailsUncheckedCreateNestedManyWithoutBillInput
  }

  export type BillCreateOrConnectWithoutVisitorInput = {
    where: BillWhereUniqueInput
    create: XOR<BillCreateWithoutVisitorInput, BillUncheckedCreateWithoutVisitorInput>
  }

  export type BillCreateManyVisitorInputEnvelope = {
    data: BillCreateManyVisitorInput | BillCreateManyVisitorInput[]
    skipDuplicates?: boolean
  }

  export type BillUpsertWithWhereUniqueWithoutVisitorInput = {
    where: BillWhereUniqueInput
    update: XOR<BillUpdateWithoutVisitorInput, BillUncheckedUpdateWithoutVisitorInput>
    create: XOR<BillCreateWithoutVisitorInput, BillUncheckedCreateWithoutVisitorInput>
  }

  export type BillUpdateWithWhereUniqueWithoutVisitorInput = {
    where: BillWhereUniqueInput
    data: XOR<BillUpdateWithoutVisitorInput, BillUncheckedUpdateWithoutVisitorInput>
  }

  export type BillUpdateManyWithWhereWithoutVisitorInput = {
    where: BillScalarWhereInput
    data: XOR<BillUpdateManyMutationInput, BillUncheckedUpdateManyWithoutVisitorInput>
  }

  export type VisitorCreateWithoutBillsInput = {
    codeVisitor: string
    name: string
    email: string
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisitorUncheckedCreateWithoutBillsInput = {
    id?: number
    codeVisitor: string
    name: string
    email: string
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisitorCreateOrConnectWithoutBillsInput = {
    where: VisitorWhereUniqueInput
    create: XOR<VisitorCreateWithoutBillsInput, VisitorUncheckedCreateWithoutBillsInput>
  }

  export type UserCreateWithoutBillsInput = {
    name: string
    email: string
    password: string
    phone?: string | null
    avatar?: string | null
    address?: string | null
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    blogcomments?: BlogcommentCreateNestedManyWithoutUserInput
    products?: ProductCreateNestedManyWithoutUserInput
    blogs?: BlogCreateNestedManyWithoutUserInput
    rateBlogs?: RateBlogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBillsInput = {
    id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    avatar?: string | null
    address?: string | null
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    blogcomments?: BlogcommentUncheckedCreateNestedManyWithoutUserInput
    products?: ProductUncheckedCreateNestedManyWithoutUserInput
    blogs?: BlogUncheckedCreateNestedManyWithoutUserInput
    rateBlogs?: RateBlogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBillsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBillsInput, UserUncheckedCreateWithoutBillsInput>
  }

  export type invoicedetailsCreateWithoutBillInput = {
    qty: number
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutInvoicedetailsInput
  }

  export type invoicedetailsUncheckedCreateWithoutBillInput = {
    id?: number
    id_product: number
    qty: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type invoicedetailsCreateOrConnectWithoutBillInput = {
    where: invoicedetailsWhereUniqueInput
    create: XOR<invoicedetailsCreateWithoutBillInput, invoicedetailsUncheckedCreateWithoutBillInput>
  }

  export type invoicedetailsCreateManyBillInputEnvelope = {
    data: invoicedetailsCreateManyBillInput | invoicedetailsCreateManyBillInput[]
    skipDuplicates?: boolean
  }

  export type VisitorUpsertWithoutBillsInput = {
    update: XOR<VisitorUpdateWithoutBillsInput, VisitorUncheckedUpdateWithoutBillsInput>
    create: XOR<VisitorCreateWithoutBillsInput, VisitorUncheckedCreateWithoutBillsInput>
    where?: VisitorWhereInput
  }

  export type VisitorUpdateToOneWithWhereWithoutBillsInput = {
    where?: VisitorWhereInput
    data: XOR<VisitorUpdateWithoutBillsInput, VisitorUncheckedUpdateWithoutBillsInput>
  }

  export type VisitorUpdateWithoutBillsInput = {
    codeVisitor?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitorUncheckedUpdateWithoutBillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    codeVisitor?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutBillsInput = {
    update: XOR<UserUpdateWithoutBillsInput, UserUncheckedUpdateWithoutBillsInput>
    create: XOR<UserCreateWithoutBillsInput, UserUncheckedCreateWithoutBillsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBillsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBillsInput, UserUncheckedUpdateWithoutBillsInput>
  }

  export type UserUpdateWithoutBillsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogcomments?: BlogcommentUpdateManyWithoutUserNestedInput
    products?: ProductUpdateManyWithoutUserNestedInput
    blogs?: BlogUpdateManyWithoutUserNestedInput
    rateBlogs?: RateBlogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogcomments?: BlogcommentUncheckedUpdateManyWithoutUserNestedInput
    products?: ProductUncheckedUpdateManyWithoutUserNestedInput
    blogs?: BlogUncheckedUpdateManyWithoutUserNestedInput
    rateBlogs?: RateBlogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type invoicedetailsUpsertWithWhereUniqueWithoutBillInput = {
    where: invoicedetailsWhereUniqueInput
    update: XOR<invoicedetailsUpdateWithoutBillInput, invoicedetailsUncheckedUpdateWithoutBillInput>
    create: XOR<invoicedetailsCreateWithoutBillInput, invoicedetailsUncheckedCreateWithoutBillInput>
  }

  export type invoicedetailsUpdateWithWhereUniqueWithoutBillInput = {
    where: invoicedetailsWhereUniqueInput
    data: XOR<invoicedetailsUpdateWithoutBillInput, invoicedetailsUncheckedUpdateWithoutBillInput>
  }

  export type invoicedetailsUpdateManyWithWhereWithoutBillInput = {
    where: invoicedetailsScalarWhereInput
    data: XOR<invoicedetailsUpdateManyMutationInput, invoicedetailsUncheckedUpdateManyWithoutBillInput>
  }

  export type BillCreateWithoutInvoicedetailsInput = {
    codeBill: string
    total?: number
    status?: number
    paymenttype?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    visitor: VisitorCreateNestedOneWithoutBillsInput
    user?: UserCreateNestedOneWithoutBillsInput
  }

  export type BillUncheckedCreateWithoutInvoicedetailsInput = {
    id?: number
    codeBill: string
    total?: number
    id_Visitor: number
    id_user?: number
    status?: number
    paymenttype?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillCreateOrConnectWithoutInvoicedetailsInput = {
    where: BillWhereUniqueInput
    create: XOR<BillCreateWithoutInvoicedetailsInput, BillUncheckedCreateWithoutInvoicedetailsInput>
  }

  export type ProductCreateWithoutInvoicedetailsInput = {
    name: string
    slug: string
    price: number
    status?: number
    sale?: number
    company?: string | null
    image_product?: string | null
    detail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProductsInput
    category: CategoryCreateNestedOneWithoutProductsInput
    brand: BrandCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutInvoicedetailsInput = {
    id?: number
    name: string
    slug: string
    price: number
    id_user: number
    id_category: number
    id_brand: number
    status?: number
    sale?: number
    company?: string | null
    image_product?: string | null
    detail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCreateOrConnectWithoutInvoicedetailsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutInvoicedetailsInput, ProductUncheckedCreateWithoutInvoicedetailsInput>
  }

  export type BillUpsertWithoutInvoicedetailsInput = {
    update: XOR<BillUpdateWithoutInvoicedetailsInput, BillUncheckedUpdateWithoutInvoicedetailsInput>
    create: XOR<BillCreateWithoutInvoicedetailsInput, BillUncheckedCreateWithoutInvoicedetailsInput>
    where?: BillWhereInput
  }

  export type BillUpdateToOneWithWhereWithoutInvoicedetailsInput = {
    where?: BillWhereInput
    data: XOR<BillUpdateWithoutInvoicedetailsInput, BillUncheckedUpdateWithoutInvoicedetailsInput>
  }

  export type BillUpdateWithoutInvoicedetailsInput = {
    codeBill?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    paymenttype?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visitor?: VisitorUpdateOneRequiredWithoutBillsNestedInput
    user?: UserUpdateOneRequiredWithoutBillsNestedInput
  }

  export type BillUncheckedUpdateWithoutInvoicedetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    codeBill?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    id_Visitor?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    paymenttype?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpsertWithoutInvoicedetailsInput = {
    update: XOR<ProductUpdateWithoutInvoicedetailsInput, ProductUncheckedUpdateWithoutInvoicedetailsInput>
    create: XOR<ProductCreateWithoutInvoicedetailsInput, ProductUncheckedCreateWithoutInvoicedetailsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutInvoicedetailsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutInvoicedetailsInput, ProductUncheckedUpdateWithoutInvoicedetailsInput>
  }

  export type ProductUpdateWithoutInvoicedetailsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    sale?: FloatFieldUpdateOperationsInput | number
    company?: NullableStringFieldUpdateOperationsInput | string | null
    image_product?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProductsNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    brand?: BrandUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutInvoicedetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    id_category?: IntFieldUpdateOperationsInput | number
    id_brand?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    sale?: FloatFieldUpdateOperationsInput | number
    company?: NullableStringFieldUpdateOperationsInput | string | null
    image_product?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutRateBlogsInput = {
    name: string
    email: string
    password: string
    phone?: string | null
    avatar?: string | null
    address?: string | null
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    blogcomments?: BlogcommentCreateNestedManyWithoutUserInput
    products?: ProductCreateNestedManyWithoutUserInput
    bills?: BillCreateNestedManyWithoutUserInput
    blogs?: BlogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRateBlogsInput = {
    id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    avatar?: string | null
    address?: string | null
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    blogcomments?: BlogcommentUncheckedCreateNestedManyWithoutUserInput
    products?: ProductUncheckedCreateNestedManyWithoutUserInput
    bills?: BillUncheckedCreateNestedManyWithoutUserInput
    blogs?: BlogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRateBlogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRateBlogsInput, UserUncheckedCreateWithoutRateBlogsInput>
  }

  export type BlogCreateWithoutRateBlogsInput = {
    title: string
    image: string
    description?: string | null
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    blogcomments?: BlogcommentCreateNestedManyWithoutBlogInput
    user: UserCreateNestedOneWithoutBlogsInput
  }

  export type BlogUncheckedCreateWithoutRateBlogsInput = {
    id?: number
    title: string
    image: string
    description?: string | null
    content?: string | null
    id_user: number
    createdAt?: Date | string
    updatedAt?: Date | string
    blogcomments?: BlogcommentUncheckedCreateNestedManyWithoutBlogInput
  }

  export type BlogCreateOrConnectWithoutRateBlogsInput = {
    where: BlogWhereUniqueInput
    create: XOR<BlogCreateWithoutRateBlogsInput, BlogUncheckedCreateWithoutRateBlogsInput>
  }

  export type UserUpsertWithoutRateBlogsInput = {
    update: XOR<UserUpdateWithoutRateBlogsInput, UserUncheckedUpdateWithoutRateBlogsInput>
    create: XOR<UserCreateWithoutRateBlogsInput, UserUncheckedCreateWithoutRateBlogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRateBlogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRateBlogsInput, UserUncheckedUpdateWithoutRateBlogsInput>
  }

  export type UserUpdateWithoutRateBlogsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogcomments?: BlogcommentUpdateManyWithoutUserNestedInput
    products?: ProductUpdateManyWithoutUserNestedInput
    bills?: BillUpdateManyWithoutUserNestedInput
    blogs?: BlogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRateBlogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogcomments?: BlogcommentUncheckedUpdateManyWithoutUserNestedInput
    products?: ProductUncheckedUpdateManyWithoutUserNestedInput
    bills?: BillUncheckedUpdateManyWithoutUserNestedInput
    blogs?: BlogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BlogUpsertWithoutRateBlogsInput = {
    update: XOR<BlogUpdateWithoutRateBlogsInput, BlogUncheckedUpdateWithoutRateBlogsInput>
    create: XOR<BlogCreateWithoutRateBlogsInput, BlogUncheckedCreateWithoutRateBlogsInput>
    where?: BlogWhereInput
  }

  export type BlogUpdateToOneWithWhereWithoutRateBlogsInput = {
    where?: BlogWhereInput
    data: XOR<BlogUpdateWithoutRateBlogsInput, BlogUncheckedUpdateWithoutRateBlogsInput>
  }

  export type BlogUpdateWithoutRateBlogsInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogcomments?: BlogcommentUpdateManyWithoutBlogNestedInput
    user?: UserUpdateOneRequiredWithoutBlogsNestedInput
  }

  export type BlogUncheckedUpdateWithoutRateBlogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    id_user?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogcomments?: BlogcommentUncheckedUpdateManyWithoutBlogNestedInput
  }

  export type BlogcommentCreateManyUserInput = {
    id?: number
    comment: string
    id_blog: number
    avatar?: string | null
    name: string
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCreateManyUserInput = {
    id?: number
    name: string
    slug: string
    price: number
    id_category: number
    id_brand: number
    status?: number
    sale?: number
    company?: string | null
    image_product?: string | null
    detail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillCreateManyUserInput = {
    id?: number
    codeBill: string
    total?: number
    id_Visitor: number
    status?: number
    paymenttype?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogCreateManyUserInput = {
    id?: number
    title: string
    image: string
    description?: string | null
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RateBlogCreateManyUserInput = {
    id?: number
    id_blog: number
    rate: number
  }

  export type BlogcommentUpdateWithoutUserInput = {
    comment?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blog?: BlogUpdateOneRequiredWithoutBlogcommentsNestedInput
  }

  export type BlogcommentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    id_blog?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogcommentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    id_blog?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    sale?: FloatFieldUpdateOperationsInput | number
    company?: NullableStringFieldUpdateOperationsInput | string | null
    image_product?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    brand?: BrandUpdateOneRequiredWithoutProductsNestedInput
    invoicedetails?: invoicedetailsUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    id_category?: IntFieldUpdateOperationsInput | number
    id_brand?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    sale?: FloatFieldUpdateOperationsInput | number
    company?: NullableStringFieldUpdateOperationsInput | string | null
    image_product?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoicedetails?: invoicedetailsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    id_category?: IntFieldUpdateOperationsInput | number
    id_brand?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    sale?: FloatFieldUpdateOperationsInput | number
    company?: NullableStringFieldUpdateOperationsInput | string | null
    image_product?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillUpdateWithoutUserInput = {
    codeBill?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    paymenttype?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visitor?: VisitorUpdateOneRequiredWithoutBillsNestedInput
    invoicedetails?: invoicedetailsUpdateManyWithoutBillNestedInput
  }

  export type BillUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    codeBill?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    id_Visitor?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    paymenttype?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoicedetails?: invoicedetailsUncheckedUpdateManyWithoutBillNestedInput
  }

  export type BillUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    codeBill?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    id_Visitor?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    paymenttype?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogcomments?: BlogcommentUpdateManyWithoutBlogNestedInput
    rateBlogs?: RateBlogUpdateManyWithoutBlogNestedInput
  }

  export type BlogUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogcomments?: BlogcommentUncheckedUpdateManyWithoutBlogNestedInput
    rateBlogs?: RateBlogUncheckedUpdateManyWithoutBlogNestedInput
  }

  export type BlogUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RateBlogUpdateWithoutUserInput = {
    rate?: IntFieldUpdateOperationsInput | number
    blog?: BlogUpdateOneRequiredWithoutRateBlogsNestedInput
  }

  export type RateBlogUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_blog?: IntFieldUpdateOperationsInput | number
    rate?: IntFieldUpdateOperationsInput | number
  }

  export type RateBlogUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_blog?: IntFieldUpdateOperationsInput | number
    rate?: IntFieldUpdateOperationsInput | number
  }

  export type BlogcommentCreateManyBlogInput = {
    id?: number
    comment: string
    id_user: number
    avatar?: string | null
    name: string
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RateBlogCreateManyBlogInput = {
    id?: number
    id_user: number
    rate: number
  }

  export type BlogcommentUpdateWithoutBlogInput = {
    comment?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBlogcommentsNestedInput
  }

  export type BlogcommentUncheckedUpdateWithoutBlogInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    id_user?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogcommentUncheckedUpdateManyWithoutBlogInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    id_user?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RateBlogUpdateWithoutBlogInput = {
    rate?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutRateBlogsNestedInput
  }

  export type RateBlogUncheckedUpdateWithoutBlogInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    rate?: IntFieldUpdateOperationsInput | number
  }

  export type RateBlogUncheckedUpdateManyWithoutBlogInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    rate?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCreateManyBrandInput = {
    id?: number
    name: string
    slug: string
    price: number
    id_user: number
    id_category: number
    status?: number
    sale?: number
    company?: string | null
    image_product?: string | null
    detail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateWithoutBrandInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    sale?: FloatFieldUpdateOperationsInput | number
    company?: NullableStringFieldUpdateOperationsInput | string | null
    image_product?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProductsNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    invoicedetails?: invoicedetailsUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutBrandInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    id_category?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    sale?: FloatFieldUpdateOperationsInput | number
    company?: NullableStringFieldUpdateOperationsInput | string | null
    image_product?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoicedetails?: invoicedetailsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutBrandInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    id_category?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    sale?: FloatFieldUpdateOperationsInput | number
    company?: NullableStringFieldUpdateOperationsInput | string | null
    image_product?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyCategoryInput = {
    id?: number
    name: string
    slug: string
    price: number
    id_user: number
    id_brand: number
    status?: number
    sale?: number
    company?: string | null
    image_product?: string | null
    detail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    sale?: FloatFieldUpdateOperationsInput | number
    company?: NullableStringFieldUpdateOperationsInput | string | null
    image_product?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProductsNestedInput
    brand?: BrandUpdateOneRequiredWithoutProductsNestedInput
    invoicedetails?: invoicedetailsUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    id_brand?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    sale?: FloatFieldUpdateOperationsInput | number
    company?: NullableStringFieldUpdateOperationsInput | string | null
    image_product?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoicedetails?: invoicedetailsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    id_brand?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    sale?: FloatFieldUpdateOperationsInput | number
    company?: NullableStringFieldUpdateOperationsInput | string | null
    image_product?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invoicedetailsCreateManyProductInput = {
    id?: number
    id_bill: number
    qty: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type invoicedetailsUpdateWithoutProductInput = {
    qty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bill?: BillUpdateOneRequiredWithoutInvoicedetailsNestedInput
  }

  export type invoicedetailsUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_bill?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invoicedetailsUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_bill?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillCreateManyVisitorInput = {
    id?: number
    codeBill: string
    total?: number
    id_user?: number
    status?: number
    paymenttype?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillUpdateWithoutVisitorInput = {
    codeBill?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    paymenttype?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBillsNestedInput
    invoicedetails?: invoicedetailsUpdateManyWithoutBillNestedInput
  }

  export type BillUncheckedUpdateWithoutVisitorInput = {
    id?: IntFieldUpdateOperationsInput | number
    codeBill?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    paymenttype?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoicedetails?: invoicedetailsUncheckedUpdateManyWithoutBillNestedInput
  }

  export type BillUncheckedUpdateManyWithoutVisitorInput = {
    id?: IntFieldUpdateOperationsInput | number
    codeBill?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    paymenttype?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invoicedetailsCreateManyBillInput = {
    id?: number
    id_product: number
    qty: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type invoicedetailsUpdateWithoutBillInput = {
    qty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutInvoicedetailsNestedInput
  }

  export type invoicedetailsUncheckedUpdateWithoutBillInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_product?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invoicedetailsUncheckedUpdateManyWithoutBillInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_product?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
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
     * @deprecated Use BlogCountOutputTypeDefaultArgs instead
     */
    export type BlogCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BlogCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BrandCountOutputTypeDefaultArgs instead
     */
    export type BrandCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BrandCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductCountOutputTypeDefaultArgs instead
     */
    export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VisitorCountOutputTypeDefaultArgs instead
     */
    export type VisitorCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VisitorCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BillCountOutputTypeDefaultArgs instead
     */
    export type BillCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BillCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BlogDefaultArgs instead
     */
    export type BlogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BlogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BlogcommentDefaultArgs instead
     */
    export type BlogcommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BlogcommentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BrandDefaultArgs instead
     */
    export type BrandArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BrandDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VisitorDefaultArgs instead
     */
    export type VisitorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VisitorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BillDefaultArgs instead
     */
    export type BillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BillDefaultArgs<ExtArgs>
    /**
     * @deprecated Use invoicedetailsDefaultArgs instead
     */
    export type invoicedetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = invoicedetailsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RateBlogDefaultArgs instead
     */
    export type RateBlogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RateBlogDefaultArgs<ExtArgs>

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