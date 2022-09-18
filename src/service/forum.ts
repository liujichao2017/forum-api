import ForumController from '../controller/forum'
import dayjs from 'dayjs'
import { Channel, Message, MessageQueryParams } from '../types/forum'
import validate from '../util/validate';
import { channelRules,messageRules,queryMessageRules } from '../validate/rules';
const {queryAll,getCount,saveChannel,saveMessage,queryChannelById,queryChannelByName} = new ForumController()

export default class ForumService{
  /**
   * query all messages by channel
   * @param ctx
   */
  async queryAll(ctx: any):Promise<void>{
      
      const messageQueryParams: MessageQueryParams = ctx.query
      if(!messageQueryParams.limit){
        messageQueryParams.limit = String(10);
      }
      if(!messageQueryParams.page){
        messageQueryParams.page = String(1);
      }
      const { error } = await validate<MessageQueryParams>(ctx, queryMessageRules);
      if(error){
        ctx.fail(
          error
        )
        return;
      }
      
      if(Number(messageQueryParams.limit) > 20){
        messageQueryParams.limit = String(20);
      }
      
      const res = await queryAll(messageQueryParams)
      // console.log(res)
      const count = await getCount(messageQueryParams)
      // console.log(count)
      const data = {records:res,totalCount:count}
      if(res){
        ctx.success(
          data
        )
      }
      else{
        ctx.fail(
          'fail'
        )
      }  
  }

  /**
   * add a channel
   * @param ctx
   */
  async saveChannel(ctx: any):Promise<void>{
      const channel: Channel = ctx.request.body

      const { error } = await validate<Channel>(ctx, channelRules);
      if(error){
        ctx.fail(
          error
        )
        return;
      }
      
      const existCount = await queryChannelByName(channel.name)
      if(existCount > 0){
        ctx.fail(
          'channel name exist!'
        )
        return;
      }
      const {dataValues} = await saveChannel(channel)
      // console.log(dataValues)
      if(dataValues){
        ctx.success(
          []
        )
      }
      else{
        ctx.fail(
          'fail'
        )
      }  
  }

  /**
   * add a message
   * @param ctx
   */
   async saveMessage(ctx: any):Promise<void>{

    const message: Message = ctx.request.body
    const { error } = await validate<Message>(ctx, messageRules);
    if(error){
      ctx.fail(
        error
      )
      return;
    }
      
    const existCount = await queryChannelById(Number(message.channel))
  
    if(existCount == 0){
      ctx.fail(
        'channel is not exist!'
      )
      return;
    }

    message.createdAt = dayjs().format('YYYY-MM-DD HH:mm:ss');
    const {dataValues} = await saveMessage(message)
    if(dataValues){
      ctx.success(
        []
      )
    }
    else{
      ctx.fail(
        'fail'
      )
    }  
  }

}
