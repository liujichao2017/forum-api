import axios from 'axios';
import path from "path";

import dotenv from "dotenv";

dotenv.config({ path: path.resolve('.env') });
dotenv.config({ path: path.resolve('.env.development') });

const port = process.env.PORT;
const host = "localhost";
describe("forum-api test", () => {
  
  it("test message query",  async () => {
		// console.log(process.env.NODE_ENV) 
    await axios.get('http://' + host +':' + port + '/forum/queryAll?limit=&page=&channel=9')
	  .then(function (response) {
		  console.log(JSON.stringify(response.data));
	  })
	  .catch(function (error) {
		  console.log(error);
	  })
    
  });

  it("test create channel",  async () => {
    const params = {"name":"111111"}
    await axios.post('http://' + host +':' + port + '/forum/saveChannel',params)
	  .then(function (response) {
		  console.log(JSON.stringify(response.data));
	  })
	  .catch(function (error) {
		  console.log(error);
	  })
    
  });

  it("test  write message",  async () => {
    const params = {
      "title":"标题",
      "content":"本地html文件中的script标签引入ES6的模块，直接在浏览器中打开该html文件",
      "channel":"88"
    }
    await axios.post('http://' + host +':' + port + '/forum/saveMessage',params)
	  .then(function (response) {
		  console.log(JSON.stringify(response.data));
	  })
	  .catch(function (error) {
		  console.log(error);
	  })
    
  });

});

