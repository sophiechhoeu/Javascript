// console.log("Hello World")

// it requires from the node modules
// const color = require('color');
//
// const redHexa = color({r: 255, g:0, b:0})
//
// console.log(redHexa.hex());

// import Dog from "./dog"
//
// // const Dog = require('./dog')
//
// const toby = new Dog("Toby");
//
// console.log(toby.bark())

const readline = require('readline');
const fs = require('fs');
const prefix = 'TO DO LIST> ';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// write to file
let logger = fs.createWriteStream('list.txt', {
  flags: 'a' // 'a' means appending (old data will be preserved)
})


rl.on('line', function(line) {
  switch(line.trim()) {
    default:
      console.log('You need to do: `' + line.trim() + '`');
      logger.write(line);
      logger.write(`\n`);
      break;
  }
  rl.setPrompt(prefix, prefix.length);
  rl.prompt();

}).on('close', function() {

  const rl2 = readline.createInterface({
    input: fs.createReadStream('list.txt'),
    crlfDelay: Infinity
  });

console.log("\n Here's your list")

  rl2.on('line', function(line){
    console.log(`${line}`);
  }).on('close',function(){
      process.exit(0);
  });
});

console.log(prefix + 'Do you have things to do? Write them below');
rl.setPrompt(prefix, prefix.length);
rl.prompt();
