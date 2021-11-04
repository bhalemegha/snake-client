// const setupInput = function () {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();
//   stdin.on('data', handleUserInput);
//   return stdin;
// };
// const handleUserInput = function(data){
//   setupInput().on(data,(key) => {
//     console.log
//     if (key === '\u0003') {
//       stdin.setRawMode(false);
//       process.exit()
//     }
//   });
  
// };

// setupInput();

const net = require('net');

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on("data", handleUserInput);
  return stdin;
}

const handleUserInput = function () {
  // on any input from stdin (standard input), output a "." to stdout
  const stdin = process.stdin;
  stdin.on('data', (key) => {
  process.stdout.write('.');
  if (key === '\u0003') {
    process.exit();
  }
});
};

module.exports = { setupInput }; 