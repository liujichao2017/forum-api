import {DataTypes} from 'sequelize';

import MySeq from '../config/seq';

const ChannelModel = MySeq.define('f_channel', {
  // model property
  id: {
    type: DataTypes.BIGINT,
    primaryKey:true,         //key
    autoIncrement:true       //autoIncrement
  },
  name: {
    type: DataTypes.STRING(200)
    // allowNull default true
  }
}, 
{
  freezeTableName:true,  //true means use the table name given
  timestamps:false       //true means add(createAt、updateAt),false means not
}
);

ChannelModel.sync({force:false});

export default ChannelModel;