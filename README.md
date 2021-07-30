# CrossBlog 🔀 Backend `work-in-progress`  
  
This repository houses a Docker enabled Nodejs/Typescript MongoDB backend for a personal project of mine - `CrossBlog 🔀`   

The project follows REST Principles and Folder structure, alongwith some basic Tests.  

# What is CrossBlog 🔀   
CrossBlog 🔀 is my personal Blog management system/dashboard.   
CrossBlog is made to actualize the idea of - `write once, post everywhere`   

Often times, bloggers/writers write blog posts on one platform. 
- They promote the blog post as they usually would.      
- A few days or a week later, when traffic is dying down, they syndicate the post or crosspost on Medium, or Dev.to, or Hashnode.      

Anyone who has done it before can tell you, it’s tedious and somewhat annoying to do. Part of the reason for this is that the respective blogging platforms don’t make it easy to import robust content automatically. You have to go through and copy-and-paste everything, format it using their tools, and generally reconstruct the entire post every time.  


# Quick Start Guide

To run the cloned codebase directly, you need to have [Node.js](https://nodejs.dev/download/) and [Docker](https://www.docker.com/get-started) installed.
  1. Run `npm i` to install dependencies.
  2. Run `sudo docker-compose up -d` to get a MongoDB instance running.
  3. Make your own `.env` file in the project root, following the key name but not value used in `.env.example`.
  4. From there, any the following should work:
  
  - `npm run test`
  - `npm run test-debug`
  - `npm start`
  - `npm run debug`
  
### For linux/mac users, replace the `scripts` of the `package.json` file with the following:  
  ```sh
  "scripts": {
    "start": "tsc && node --unhandled-rejections=strict ./dist/app.js",
    "debug": "export DEBUG=* && npm start",
    "test": "mocha -r ts-node/register 'test/**/*.test.ts' --unhandled-rejections=strict",
    "test-debug": "export DEBUG=* && npm test"
  },
  ```
  
# To-do
  1. Create Dockerfile to Contain the REST API in a Docker container.
  2. Create separate databases for test and debug cases.
  3. Allow `patch` requests in test but not in development.
  4. Write documentation for the APIs.
  
# Built with:
 - [Node.js](https://nodejs.dev/download/)
 - [TypeScript](https://www.typescriptlang.org/)
 - [Docker](https://www.docker.com/get-started)
 - [MongoDB](https://www.mongodb.com/)

  
  
  


