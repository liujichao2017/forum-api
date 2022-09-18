import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema,
} from "graphql";
import ForumController from '../controller/forum'
import dayjs from 'dayjs'

const {queryAll,getCount,saveChannel,saveMessage,queryChannelById,queryChannelByName} = new ForumController()

const ChannelSchema = new GraphQLObjectType({
  name: "channel",
  fields: {
    id: {
      type: GraphQLInt,
    },
    name: {
      type: GraphQLString,
    },
  },
});

const MessageSchema = new GraphQLObjectType({
  name: "message",
  fields: {
    id: {
      type: GraphQLInt,
    },
    title: {
      type: GraphQLString,
    },
    content: {
      type: GraphQLString,
    },
    channel: {
      type: GraphQLString,
    },
    createdAt: {
      type: GraphQLString,
    },
  },
});

const messageDataSchema = new GraphQLObjectType({
  name: "dataDetails",
  fields: {
    records: {
      type: new GraphQLList(MessageSchema),
    },
    totalCount:{
      type: GraphQLInt,
    }
  },
});

const commonResponseSchema = new GraphQLObjectType({
  name: "commonResponse",
  fields: {
    code: {
      type: GraphQLInt,
    },
    msg: {
      type: GraphQLString,
    },
  },
});

const successResponseSchema = new GraphQLObjectType({
  name: "successReponse",
  fields: {
    code: {
      type: GraphQLInt,
    },
    msg: {
      type: GraphQLString,
    },
    data: {
      type: messageDataSchema,
    },
  },
});

const RootSchema = new GraphQLObjectType({
  name: "root",
  fields: {
    queryAll: {
      type: successResponseSchema,
      args: {
        page: {
          type: GraphQLString,
        },
        limit: {
          type: GraphQLString,
        },
        channel: {
          type: GraphQLString,
        },
      },
      async resolve(parent, args) {
        // const messageQueryParams: MessageQueryParams = {"page":args.page,"limit":args.limit,"channel":args.channel}
       
        if(!args.limit){
          args.limit = String(10);
        }
        if(!args.page){
          args.page = String(1);
        }
        let error:string = "";
        if (parseInt(args.page).toString() == "NaN" || parseInt(args.page) <= 0 ){
          error = "page must be a integer"
        } 
        if (parseInt(args.limit).toString() == "NaN" || parseInt(args.limit) <= 0 ){
          error = "limit must be a integer"
        } 
        if (String(args.channel).trim() == '' || parseInt(args.channel).toString() == "NaN" || parseInt(args.channel) <= 0 ){
          error = "channel must be a integer"
        } 
        if(error != ""){
          throw new Error(error)
        }
        if(Number(args.limit) > 20){
          args.limit = String(20);
        }
        const res = await queryAll({
          page: args.page,
          limit: args.limit,
          channel: args.channel, 
        })
        // console.log(res)
        const count = await getCount({
          page: args.page,
          limit: args.limit,
          channel: args.channel, 
        })
        // console.log(count)
        const data = {records:res,totalCount:count}
        // const data = {totalCount:count}
        let resJson: any = {}
        if(data){
          resJson = {"code":200,"msg":"success","data":data}
        }
        else{
          // resJson = {"code":99,"msg":"fail"}
          throw new Error("fail")
        }
        // return JSON.parse(JSON.stringify(resJson));
        return resJson
      },
    },
  }
});

const MutationSchema = new GraphQLObjectType({
  name: "mutation",
  fields: {
    saveChannel: {
      type: commonResponseSchema,
      args: {
        name: {
          type: GraphQLString,
        },
      },
      async resolve(parent, args) {

        let error:string = "";
        if (String(args.name).trim() == '' ){
          error = "channel name can not be null!"
        } 
        if(error != ""){
          throw new Error(error)
        }
        const existCount = await queryChannelByName(args.name)
        if(existCount > 0){
          throw new Error('channel name exist!')
        }

        const {dataValues} = await saveChannel({
          name: args.name,
        });
        let resJson: any = {}
        if(dataValues){
          resJson = {"code":200,"msg":"success"}
        }
        else{
          throw new Error("fail")
        }
        return resJson
      },

    },
    saveMessage: {
      type: commonResponseSchema,
      args: {
        title: {
          type: GraphQLString,
        },
        content: {
          type: GraphQLString,
        },
        channel: {
          type: GraphQLString,
        },
      },
      async resolve(parent, args) {

        let error:string = "";
        if (String(args.title).trim() == '' ){
          error = "title can not be null!"
        }
        if (String(args.content).trim() == '' ){
          error = "content can not be null!"
        } 
        if (String(args.channel).trim() == '' || parseInt(args.channel).toString() == "NaN" || parseInt(args.channel) <= 0 ){
          error = "channel must be a integer"
        }  
        if(error != ""){
          throw new Error(error)
        }
        const existCount = await queryChannelById(Number(args.channel))
        if(existCount == 0){
          throw new Error('channel is not exist!')
        }

        const {dataValues} = await saveMessage({
          title: args.title,
          content: args.content,
          channel: args.channel,
          createdAt: dayjs().format('YYYY-MM-DD HH:mm:ss')
        });
        let resJson: any = {}
        if(dataValues){
          resJson = {"code":200,"msg":"success"}
        }
        else{
          throw new Error("fail")
        }
        return resJson
      },

    }
  }
});

export default new GraphQLSchema({
  query: RootSchema,
  mutation: MutationSchema,
});