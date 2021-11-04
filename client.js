const net = require("net");
const {IP,PORT} = require("./constants");
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT// PORT number here,
  });

  conn.on("connect", () => {
    conn.write("Name: SNK");
  //   setInterval(() => { 
  //                 conn.write("Move: up")
  //               },200);
  //   setInterval(() => { 
  //                 conn.write("Move: up")
  //               },200);                
   });
  conn.on('data', (data) => {
    console.log(data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};
module.exports = {
  connect
};