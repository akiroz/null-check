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
        (resolve,reject) => {
          request
            .post("http://localhost:58712")
            .send(JSON.parse(req.body))
            .end((err,resp) => {
              if(err) reject(err);
              resolve(resp.body);
            });
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
