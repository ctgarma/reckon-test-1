const api = require('./lib/api');

const getdetails = () => {
  var range;
  var divisor;

  return new Promise((resolve, reject) => {
    api.getRange().then(
      (data) => {
        range = data.data;
        return api.getDivisor();
      }
    ).then((data) => {
      divisor = data;
      resolve([range, divisor]);
    }).catch((e) => {
      console.log(e);
      getdetails().then((data) => {
        resolve(data);
      });
    });

  });
}

const genOutput = (data) => {
  var upper = data[0].upper;
  var lower = data[0].lower;
  var div = data[1];

  var output,html;
  html='<p>';

  for (i = lower; i <= upper; i++) {
    output='';
    for (len = 0; len < div.length; len++) {
      if ((i % div[len].divisor) == 0 && i!=0) {
        output+=div[len].output;
      }
    }

  html+=`${i}: ${output}<br>`;
  }  
  html+='</p>';
  return html;
}


module.exports.getdetails =getdetails;
module.exports.genOutput =genOutput;
