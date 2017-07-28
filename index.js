const request = require("superagent");
const rpc = require("node-json-rpc2").Server;
const skygearCloud = require("skygear/cloud");

module.exports = {
  includeme() {
    console.log(`
      #############################
         INITIALIZING CLOUD CODE
      #############################
    `)
    skygearCloud.handler(
      "api", req => new Promise(
        resolve => {
          console.log(req);
          resolve({hello: "world"});
          request
            .post("http://localhost:58712")
            .send({})
            .end(resp => {});
        }
      ), {
        method: ["POST"]
      }
    );
    new rpc({
      path: "/",
      port: 58712,
      method: "POST"
    }).addMethod(
      "isNullOrUndefined", ({ value },id) => ({
        id,
        result: value === undefined || value === null
      })
    );
  }
};
