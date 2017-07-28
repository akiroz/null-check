# Null-Check as a Service

Checking for `null` and `undefined` values is an essential part of
JavaScript development and yet there's only been a handful of packages
on npm that does this important task. Here's some of them:

- https://www.npmjs.com/package/validate.io-undefined-or-null
- https://www.npmjs.com/package/is-empty
- https://www.npmjs.com/package/is-nil
- https://www.npmjs.com/package/defined
- https://www.npmjs.com/package/existy
- https://www.npmjs.com/package/is-undefined
- https://www.npmjs.com/package/is-nil-x
- https://www.npmjs.com/package/is-null-like
- https://www.npmjs.com/package/is-null

This project attempts to rectify the situation by providing a
full-blown service hosted on the cloud to satisify all your
"null or undefined" checking needs.

Enjoy!


## Usage

You can talk to this service using our JSON-RPC 2.0 over HTTP API.

This service currently only provides 1 method: `isNullOrUndefined`,
it expects an object parameter with a single property: `value` which
could be undefined.

#### Request:

```
GET /api HTTP/1.1
Host: null.skygeario.com
Content-Type: application/json

{
  "jsonrpc": "2.0",
  "method": "isNullOrUndefined",
  "params": { "value": null },
  "id": 1
}
```

#### Response:

```
HTTP/1.1 200 OK
Content-Type: application/json

{
  "jsonrpc": "2.0",
  "result": true,
  "id": 1
}
```

