#!/usr/bin/env node

const http=require('http'),
      url=require('url'),
      log=console.log,
      qs=require('querystring');

http.createServer((req,res)=>{
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log();
  
 let rect=qs.parse(url.parse(req.url).query);
 let r={
   perimeter:2*(Number(rect.width)+Number(rect.height)),
  area:Number(rect.width)*Number(rect.height)
 }
 res.end(JSON.stringify(r));
}).listen(8080);
