var qr = require('qr-image');
var fs = require('fs');

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What url do you want ? ', (url) => {

  rl.question('What name do you want ? ', (name) => {

      var code = qr.image(url, { type: 'png' });
      var output = fs.createWriteStream(name+'.png');
      code.pipe(output);
      console.log(`Created : ${name}.png with "${url}"`);

    rl.close();
  });

});
/*
var url  ="http://10.3.4.102:3000/vtt.html";
var url  ="10.3.4.102:3000/camera.html";
//url  ="10.3.4.102:3000/golf.html";

var code = qr.image(url, { type: 'png' });
var output = fs.createWriteStream('qr-ski.png');

code.pipe(output);*/
