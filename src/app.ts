//app.ts
import Koa from 'koa'; // import koa

import KoaLogger from 'koa-logger';      // import logger
import bodyparser from 'koa-bodyparser'; // import bodyparser
import path from 'path';
import {responseHandler} from './util/response'
import { koaSwagger } from 'koa2-swagger-ui';
import "./config/env";                  // import env config



const app = new Koa(); // new koa object
const views = require('koa-views');
const routerForum = require('./routes/forum');
const routerUser = require('./routes/users');
const routerIndex = require('./routes/index');
const routerGraphql = require('./routes/graphql');
const routerSwagger = require('./routes/swagger');
const logger = KoaLogger();
 
app.use(logger);

app.use(responseHandler);

app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = Number(new Date()) - Number(start)
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

app.use(
  koaSwagger({
    routePrefix: '/swagger/index.html', // swagger access path
    swaggerOptions: {
      url: '/swagger/swagger.json',     // doc config url。
    },
  }),
);

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))

// staticPath
const staticPath = path.join(__dirname, '../public'); // static files
const viewsPath = path.join(__dirname, '../views'); // view files
app.use(require('koa-static')(staticPath));
app.use(views(viewsPath, {
  extension: 'pug'
}));

app.use(routerIndex.routes());
app.use(routerUser.routes());
app.use(routerForum.routes());
app.use(routerGraphql.routes());
app.use(routerSwagger.routes());

module.exports = app;


