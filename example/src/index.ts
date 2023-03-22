'use strict';

import { request } from 'urllib';

export const main_handler = async (event: any, context: any) => {
  console.log("Hello World, deploy with github action workflow")
  console.log(event["non-exist"])
  console.log(context)

  const { data, res } = await request('http://cnodejs.org/');

  return {
    statusCode: res.statusCode,
    dataLength: data.length,
    resHeaders: res.headers
  }
}
