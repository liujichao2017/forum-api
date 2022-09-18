import {DataTypes} from 'sequelize';

import MySeq from '../config/seq';

const MessageModel = MySeq.define('f_message', {
  // model property
  id: {
    type: DataTypes.BIGINT,
    primaryKey:true,       //key
    autoIncrement:true     //autoIncrement
  },
  title: {
    type: DataTypes.STRING(200)
    
  },
  content: {
    type: DataTypes.STRING(200)
    
  },
  channel: {
    type: DataTypes.STRING(200)
    
  },
  createdAt: {
    type: DataTypes.STRING
  
  },

}, 
{
  freezeTableName:true,    //true means use the table name given
  timestamps:false         //true means add(createAt、updateAt),false means not
}
);

MessageModel.sync({force:false});

export default MessageModel;