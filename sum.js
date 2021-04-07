#!/usr/bin/env node

if(process.argv.length !==4){
  console.log('./sum.js x y');
  process.exit(1);
}
let x=Number(process.argv[2]),
    y=Number(process.argv[3]);

const add=require('./add.js');
console.log(`${x} + ${y}=${add(x,y)}`);
