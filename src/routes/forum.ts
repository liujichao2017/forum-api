//forum.ts
import Router from 'koa-router';
const router = new Router();

router.prefix('/forum');


import ForumService from '../service/forum'

const {queryAll,saveChannel,saveMessage, } = new ForumService()

/**
 * query all messages by channel
 */
/**
 * @swagger
 * /forum/queryAll:
 *    get:
 *      tags:
 *      - forum-api
 *      summary: list messages in a channel and order by descending
 *      consumes:
 *        - application/json
 *      parameters:
 *      - name: page
 *        in: query
 *        description: query page,at least 1
 *        schema:
 *          type: string
 *      - name: limit
 *        in: query
 *        description: query limit,maximum is 20
 *        schema:
 *          type: string
 *      - name: channel
 *        in: query
 *        description: query channel,it should exist at first
 *        required: true
 *        schema:
 *          type: string
 *      responses:
 *        200:
 *          description: successful operation
 * */
 router.get('/queryAll',queryAll)
 
 
 /**
  * add a channel
  */
 /**
 * @swagger
 * /forum/saveChannel:
 *    post:
 *      tags:
 *      - forum-api
 *      summary: create a channel
 *      consumes:
 *        - application/x-www-form-urlencoded
 *      parameters:
 *      - name: name
 *        in: formData
 *        description: channel name
 *        required: true
 *        type: string
 *      responses:
 *        200:
 *          description: successful operation
 * */
  router.post('/saveChannel',saveChannel)


/**
  * add a message
  */
 /**
 * @swagger
 * /forum/saveMessage:
 *    post:
 *      tags:
 *      - forum-api
 *      summary: write messages in a channel
 *      consumes:
 *        - application/x-www-form-urlencoded
 *      parameters:
 *      - name: title
 *        in: formData
 *        description: message title
 *        required: true
 *        type: string
 *      - name: content
 *        in: formData
 *        description: message content
 *        required: true
 *        type: string
 *      - name: channel
 *        in: formData
 *        description: channel id
 *        required: true
 *        type: string
 *      responses:
 *        200:
 *          description: successful operation
 * */
  router.post('/saveMessage',saveMessage)

  // export default router;
module.exports = router;