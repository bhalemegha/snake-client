const {MOVE_DOWN_KEY,MOVE_RIGHT_KEY,MOVE_UP_KEY,MOVE_LEFT_KEY} = require('./constants');
let connection;
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
}

const handleUserInput = function (data) {
  if (data[0] === MOVE_UP_KEY) {
    connection.write("Move: up");
  }  
  if (data[0] === MOVE_LEFT_KEY) {
    connection.write("Move: left");
  }  
  if (data[0] === MOVE_DOWN_KEY) {
    connection.write("Move: down");
  }  
  if (data[0] === MOVE_RIGHT_KEY) {
    connection.write("Move: right");
  }
  if (data[0] === 'l') {
    connection.write("Say: hhello");
  }
  if (data === '\u0003') {
    console.log()
    process.exit();
  }
};

setupInput().on("data", handleUserInput);
module.exports = { setupInput }; 