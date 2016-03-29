var fs = require('fs');

module.exports = function cpipe(dirFile,rename){
  if(rename)
  fs.createReadStream(__dirname+dirFile).pipe(fs.createWriteStream('./'+rename));
  else if(!rename)
  fs.createReadStream(__dirname +dirFile).pipe(process.stdout);
  else
  console.log('something went wrong!');
};
