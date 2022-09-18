import ChannelModel from '../model/channel'
import MessageModel from '../model/message'
import { Channel, Message, MessageQueryParams } from '../types/forum'

export default class ForumController {
    /**
     * query all messages by channel
     * @param messageQueryParams
     */
    queryAll(messageQueryParams: MessageQueryParams){
        return MessageModel.findAll({
            where:{channel: messageQueryParams.channel},
            attributes:['id','title','content','channel','createdAt'],
            order: [
                ['id', 'desc'],
            ],
            offset: (Number(messageQueryParams.page) - 1) * Number(messageQueryParams.limit), 
            limit: Number(messageQueryParams.limit),
            // raw:true
        }).then((result: any)=>{
            // console.log(result);
            return result
        }).catch((err: any)=>{
            // console.log(err);
            return err
        })
    }

    /**
     * query totalCount by channel
     * @param messageQueryParams
     */
    getCount(messageQueryParams: MessageQueryParams){
        return MessageModel.count({
            where:{channel: messageQueryParams.channel},
            // raw:true
        }).then((result: any)=>{
            // console.log(result);
            return result
        }).catch((err: any)=>{
            // console.log(err);
            return err
        })
    }

    /**
     * query channel by id
     * @param id
     */
    queryChannelById(id: Number){
        return ChannelModel.count({
            where:{id: id},
            // raw:true
        }).then((result: any)=>{
            // console.log(result);
            return result
        }).catch((err: any)=>{
            // console.log(err);
            return err
        })
    }

    /**
     * query channel by name
     * @param name
     */
     queryChannelByName(name:string){
        return ChannelModel.count({
            where:{name: name},
            // raw:true
        }).then((result: any)=>{
            // console.log(result);
            return result
        }).catch((err: any)=>{
            // console.log(err);
            return err
        })
    }

    /**
     * add a channel
     * @param channel
     */
    saveChannel(channel: Channel){
        //insert the data
        return ChannelModel.create({
            name:channel.name,
        }).then((result: any)=>{
            // console.log("success！",result);
            return result;
            
        }).catch((err: any)=>{
            // console.log("fail！",err);
            return err;
        })
    }

    /**
     * add a message
     * @param message
     */
     saveMessage(message:Message){
        //insert the data
        return MessageModel.create({
            title:message.title,
            content:message.content,
            channel:message.channel,
            createdAt:message.createdAt,

        }).then((result: any)=>{
            // console.log("success！",result);
            return result;
            
        }).catch((err: any)=>{
            // console.log("fail！",err);
            return err;
        })
  }
}

