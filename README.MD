# project-structrue
forum-api               
├── build                    # built files 
├── node_modules             # dependencies
├── logs                     # project logs
├── public                   # public files
├── src
│   ├── bin                  # root cmd file
│   ├── config               # db and env config
│   ├── controller           # business controllers
│   ├── model                # db model
│   └── routes               # provide entries for access the apis
│   └── schemas              # graphql schema files
│   └── service              # business services
│   └── types                # declared ts types
│   └── util                 # useful tools
│   └── validate             # validate ruls for apis
│   └── app.ts               # project entrypoint
├── test                     # test api cases by jest
├── views                    # views,not used
├── .babelrc                 # jest test needed
├── .editorconfig            
├── .gitignore               
├── .env             
├── .env.development
├── .env.production
├── .eslintrc.ts
├── .eslintignore
├── .prettierrc
├── babel.config.ts         # jest test needed
├── Dockerfile              # build your docker image
├── forum.yml               # build your docker container by image bulit previous step 
├── forum.sql               # db file,you need to import this file to rebuild the db
├── nodemon.json
├── package-lock.json
├── package.json
└── README.MD               # project instruction,provide some tips for project
└── tsconfig.json
└── tsconfig.json
└── yarn.lock

# introduction
1、 based on koa2,typescript,nodejs-16
2、 database on mysql5.7 or higner
3、 sequelize is used for orm
4、 support both graphql and swagger
5、 provide docker build file for deploy if you want
6、 check the info in .env.development and .env.production,it would not be working if the info is incorrect

# how to start the project
1、make sure you have installed nodejs in your machine,and connect a working mysql server
2、open the project by some ide(e.g VsCode),run "npm install" in the terminal
3、connect to the mysql server, and import the data structrue and some test data by forum.sql in project
4、start the project on your machine by run "npm run start"
5、you can input the graphql/swagger(introduced below) access address in your browser to see whether everything is ok now

# docker build
1、 make sure you have installed the docker successfully and it is working,both on your machine and server
2、 make sure the Dockerfile is exist
3、 make sure mysql server is working, check the info in .env.production, and the mysql server could be connected by the server which you would publish the docker-image 
4、 build project on your machine by run "npm run build", make sure the port(line 14) in the Dockerfile must keep the same with the .env.production
5、 build the docker image on your machine by run "npm run docker-build"
6、 upload the built docker image to your private docker hub, or you could directly publish on your machine with mysql if docker installed,it will work faster than upload
7、 login in the docker server,start the docker container by execute the commond like this: "npm run docker-run"
8、you can input the graphql/swagger(introduced below) access address in your browser to see whether everything is ok now

# swagger api documentation
1、make sure you have started the project successfully
2、input the graphql access address in your browser,like chrome,the address looks like this: http://localhost:3001/swagger/index.html, the port is dependent on you set in env file 
3、you will see api interfaces listed in this page
4、you can click one to expand details,the neccessary parameters marked too,also you could try it out by yourself 

# graphgl documentation
1、make sure you have started the project successfully
2、input the graphql access address in your browser,like chrome,the address looks like this: http://localhost:3001/graphql, the port is dependent on you set in env file 
3、in graphql panel,you can input query language for api access like below,you can copy the scripts to panel,of course you should remove "#" before each row
# my api graphql examples:

# mutation saveChannel{
#   saveChannel(name:"hsjkahd"){
#     code,
#     msg
#   }
# }

# {
#    queryAll(page:"1",limit:"2",channel:"1"){
#     msg,
#     code,
#     data {
#       totalCount,
#       records {
#         id,
#         title,
#         content,
#         channel,
#         createdAt
#       }
#     }
#   }
# }

# mutation saveMessage{
#   saveMessage(title:"1111",content:"hsdhlsadalsk",channel:"88"){
#     code,
#    msg
#   }
# }

# test
1、use ject as test tool
2、test case file is in root-dir/test
3、make sure you have started the project successfully at first
4、suggest you install the plugin jest-runner on your vscode,it make the test easier
5、just click the run link on the method you want to test,then you will see the result
on the console