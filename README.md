# contact-api-js

Simple retrieve contact information API for LOOSEDAYS site.

## Requirement

- NodeJS v8.10+
- npm 3.5.2+

## Quick Start

1. Start node app

```
npm install
node app/app.js
```

2. Publish HTTP request

Request

```
curl -H "X-MAKE-CONTACT:1" http://localhost:3000/
```

or

```
curl -H "X-MAKE-CONTACT:1" http://localhost:3000/ | jq
```

Response

```
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 79
< ETag: W/"4f-5iP0X5jI3Mr9F/sQh74zQVwca+A"
< Date: Sat, 12 Dec 2020 10:06:32 GMT
< Connection: keep-alive
<

{
  "company_name": "LOOSEDAYS Co.,Ltd.",
  "contact": {
    "email": [
      ".......E-Mail........"
    ]
  }
}
```

Just a simple !

## License

MIT

