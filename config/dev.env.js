'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  baseURL: '"http://localhost:3030"',
  // baseURL: '"http://192.168.1.112:3030"',
  statisticsURL: '"http://dt-rxtbak.chamc.com.cn:8080/dt/recv"'
})