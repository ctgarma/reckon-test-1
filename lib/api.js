const axios = require('axios');

const apiRangeInfo = 'https://join.reckon.com/test1/rangeInfo';
const apiDivisorInfo = 'https://join.reckon.com/test1/divisorInfo';

const getRange = () => {
  return new Promise((resolve, reject) => {
    axios.get(apiRangeInfo).then((res) => {
      resolve(res);
    }).catch((e) => {
      reject('error with range API')
    });
  });
}

const getDivisor = () => {
  return new Promise((resolve, reject) => {
    axios.get(apiDivisorInfo)
      .then((res) => {
          resolve(res.data.outputDetails);
      })
      .catch((e) => {
        reject('error with divisor api');
      });
  })
}


module.exports.getRange = getRange;
module.exports.getDivisor = getDivisor;
