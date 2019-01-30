'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  baseURL: '"http://localhost:3030"',
  statisticsURL: '""' // 暂时没有仿真统计地址
})