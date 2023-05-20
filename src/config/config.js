const dotenv= require('dotenv')
const path = require('path');
const { program } = require('commander');
const { logger } = require('./config.winston');

program.requiredOption('--mode <mode>' , 'modo de ejecucion del servidor' , 'development');
program.parse();

const enviroment = program.opts().mode

dotenv.config({
  path: path.join(__dirname, enviroment == 'development' ? '../../.env.development' : '../../.env.production')
})

logger.info(`'MODE : ${process.env.ENVIROMENT}'`)

module.exports ={
  NODE: process.env.ENVIROMENT,
  MONGODBURL: process.env.MONGODBURL,
  PRIVATE_KEY_JWT: process.env.PRIVATE_KEY_JWT,
  REGISTER_STRATEGY: process.env.REGISTER_STRATEGY,
  LOGIN_STRATEGY: process.env.LOGIN_STRATEGY,
  JWT_STRATEGY: process.env.JWT_STRATEGY,
  PORT : process.env.PORT,
  COOKIE_USER: process.env.COOKIE_USER,
  PERCIST:process.env.PERCIST,
  GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET

}