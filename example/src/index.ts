'use strict';
export const main_handler = async (event, context) => {
  console.log("Hello World, deploy with github action workflow")
  console.log(event)
  console.log(event["non-exist"])
  console.log(context)
  return event
}
