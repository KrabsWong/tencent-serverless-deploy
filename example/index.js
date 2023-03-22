"use strict";

/**
 * 以当前文件作为 scf 实际运行的入口
 * 方便管理 ts 源文件以及编译后的 js 文件
 * */

const { main_handler } = require("./dist/index");

exports.main_handler = async function (event, context) {
  return await main_handler(event, context);
};
