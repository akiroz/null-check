const http = require("http");
const request = require('superagent');
const rpc = require("node-json-rpc2").Server;

exports = {
  includeme(sg) {
    sg.handler(
      "/", req => new Promise(
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
      "isNullOrUndefined", (params,id) => ({
        id,
        result: 
      })
    );
  }
};
