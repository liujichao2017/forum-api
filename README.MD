# project-structrue
# forum-api               
├── build&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;built files         
├── node_modules&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;depedencies               
├── logs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;project logs           
├── public&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public files                                 
├── src                                                        
├&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── bin&&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;root cmd file                        
├&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── config&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;db and env config                           
├&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── controller&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;business controllers                       
├&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── model&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;db model                                 
├&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── routes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;provide entries for access the apis             
├&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── schemas&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;graphql schema files                           
├&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── service&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;business services                            
├&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── types&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;declared ts types                         
├&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── util&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;useful tools                          
├&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── validate&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;validate ruls for apis                      
├&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── app.ts&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;project entrypoint                       
├── test&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;test api cases by jest                             
├── views&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;views,not used                                
├── .babelrc&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;jest test needed                                  
├── .editorconfig                                                 
├── .gitignore                                                      
├── .env.              
├── .env.development                                       
├── .env.production                                              
├── .eslintrc.ts                                  
├── .eslintignore                          
├── .prettierrc                         
├── babel.config.ts&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;jest test needed                                           
├── Dockerfile&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;build your docker image                                             
├── forum.yml&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;build your docker container by image bulit previous step                                     
├── forum.sql&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;db file,you need to import this file to rebuild the db                                       
├── nodemon.json                          
├── package-lock.json                       
├── package.json                             
├── README.MD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;project instruction,provide some tips for project                          
├── tsconfig.json                                   
├── tsconfig.json                                 
├── yarn.lock                            

# introduction
1、 based on koa2,typescript,nodejs-16<br>
2、 database on mysql5.7 or higner<br>
3、 sequelize is used for orm<br>
4、 support both graphql and swagger<br>
5、 provide docker build file for deploy if you want<br>
6、 check the info in .env.development and .env.production,it would not be working if the info is incorrect<br>

# how to start the project
1、make sure you have installed nodejs in your machine,and connect a working mysql server<br>
2、open the project by some ide(e.g VsCode),run "npm install" in the terminal<br>
3、connect to the mysql server, and import the data structrue and some test data by forum.sql in project<br>
4、start the project on your machine by run "npm run start"<br>
5、you can input the graphql/swagger(introduced below) access address in your browser to see whether everything is ok now<br>

# docker build
1、 make sure you have installed the docker successfully and it is working,both on your machine and server<br>
2、 make sure the Dockerfile is exist<br>
3、 make sure mysql server is working, check the info in .env.production, and the mysql server could be connected by the server which you would publish the docker-image<br> 
4、 build project on your machine by run "npm run build", make sure the port(line 14) in the Dockerfile must keep the same with the .env.production<br>
5、 build the docker image on your machine by run "npm run docker-build"<br>
6、 upload the built docker image to your private docker hub, or you could directly publish on your machine with mysql if docker installed,it will work faster than upload<br>
7、 login in the docker server,start the docker container by execute the commond like this: "npm run docker-run"<br>
8、you can input the graphql/swagger(introduced below) access address in your browser to see whether everything is ok now<br>

# swagger api documentation
1、make sure you have started the project successfully<br>
2、input the graphql access address in your browser,like chrome,the address looks like this: http://localhost:3001/swagger/index.html, the port is dependent on you set in env file<br>
3、you will see api interfaces listed in this page<br>
4、you can click one to expand details,the neccessary parameters marked too,also you could try it out by yourself<br> 

# graphgl documentation
1、make sure you have started the project successfully<br>
2、input the graphql access address in your browser,like chrome,the address looks like this: http://localhost:3001/graphql, the port is dependent on you set in env file<br> 
3、in graphql panel,you can input query language for api access like below,you can copy the scripts to panel,of course you should remove "#" before each row<br>
# my api graphql examples:

mutation saveChannel{<br>
&nbsp;&nbsp;&nbsp;&nbsp;saveChannel(name:"hsjkahd"){<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;code,<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;msg<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;}<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;{<br>
&nbsp;&nbsp;&nbsp;&nbsp;queryAll(page:"1",limit:"2",channel:"1"){<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;msg,<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;code,<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;totalCount,<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;records {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id,<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title,<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content,<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;channel,<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;createdAt<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;}<br>
<br>
 mutation saveMessage{<br>
&nbsp;&nbsp;&nbsp;&nbsp;saveMessage(title:"1111",content:"hsdhlsadalsk",channel:"88"){<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;code,<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;msg<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;}<br>
<br>
# test
1、use ject as test tool<br>
2、test case file is in root-dir/test<br>
3、make sure you have started the project successfully at first<br>
4、suggest you install the plugin jest-runner on your vscode,it make the test easier<br>
5、just click the run link on the method you want to test,then you will see the result
on the console<br>
