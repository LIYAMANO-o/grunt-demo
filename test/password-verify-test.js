const expect = require('chai').expect,
{verifyPassword}=require('../password-verify.js'),
  sinon=require('sinon'),
  chai=require(chai),
  sinonChai=require('sinon-chai');

describe('password verify unit-test with sinon',()=>{
  it('given a Failing rule',()=>{

    const fakeRule=sinon.fake.returns({passed:false,reason:'fake reason'});
    let errs=verifyPassword('abc',[fakeRule]);
    errs=verifyPassword('123456',[fakeRule]);
       expect(errs[0]).to.be.equal('error fake reason');
    expect(fakeRule).to.heve.been.calledTwice;

  });
});

describe('password verify unit-test',()=>{
  it('given a failing rule',()=>{
    const fakeRule=input=>({passed:false,reason:'fake reason'});
    const errs=verifyPassword('abc',[fakeRule]);
    expect(errs[0]).to.be.equal('error fake reason');
  });
})
