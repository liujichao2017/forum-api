//index.ts
import Router from 'koa-router';
const router = new Router();
 
router.get('/', async (ctx: any) => {
  // await ctx.render('index', {
  //   title: 'Hello Koa!'
  // });
  ctx.body = 'Hello Koa!';
  ctx.status = 200;
});
 
router.get('/string', async (ctx: any) => {
  ctx.body = 'koa2 string';
  ctx.status = 200;
});
 
router.get('/json', async (ctx: any) => {
  ctx.body = {
    title: 'koa2 json'
  };
});
 
module.exports = router;

