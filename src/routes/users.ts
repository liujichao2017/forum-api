//users.ts,for test,useless
import Router from 'koa-router';
const router = new Router();
 
router.prefix('/users');
 
router.get('/', function (ctx: any) {
  ctx.body = 'this is a users response!';
});
 
router.get('/bar', function (ctx: any) {
  ctx.body = 'this is a users/bar response';
});
 
module.exports = router;

