const api = require('.././lib/api.js');
const m = require('.././main.js');
const expect = require('expect');


it('resolves', () => {
  api.getRange().then((results) =>{
  }).catch((e)=>{throw new ('error');});
});
