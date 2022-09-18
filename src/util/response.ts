import { Context, Next } from 'koa'

export const responseHandler = async (ctx: Context, next: Next) => {

  ctx.success = function (data: any) {
    ctx.type = 'json'
    ctx.body = {
        code : 200,
        msg : 'success',
        data : data
    }
  }

  ctx.fail = function (msg: string) {
      ctx.type = 'json'
      ctx.body = {
          code : 99,
          msg : msg || 'fail',
      }
  }

  await next()

}