const express = require(`express`);
const app = express();
const path = require(`path`);
const http = require(`http`);
const server = http.createServer(app);
const socketio = require(`socket.io`);
const mysql = require(`mysql`);
const io = socketio(server);

app.use(express.static(path.join(__dirname)));

const PORT = 5500;

let user_info = [];
let jogak_info = [];
let userjogak_info = [];
server.listen(PORT, function () {
  console.log(`환영합니다. 포트번호 : ${PORT}`);
});

app.get(`/`, function (post, get) {
  get.sendFile(`/index.html`);
  console.log(__dirname);
});
const db = mysql.createConnection({
  host: "10.100.220.183",
  port: "13306",
  user: "root",
  password: "asset7878!",
  database: "jogack",
  multipleStatements: true,
});

db.connect(console.log(`DB접속 성공`));

db.query(`SELECT * FROM user_tb`, function (error, data) {
  const userdata = data;
  user_info.push({
    username: userdata[0].user_name,
    usermadi: userdata[0].user_madi,
    usersajin: userdata[0].user_sajin,
  });
});

db.query(`SELECT * FROM moim_tb`, function (error, data) {
  const johakdata = data;
  jogak_info = johakdata;
});

db.query(
  `SELECT moim_title, moim_int_value, moim_in_max, moim_so, moim_ji, moim_date, moim_time FROM join_tb a, moim_tb b WHERE a.moim_key = b.moim_key`,
  function (error, data) {
    const userjogack = data;
    userjogak_info = userjogack;
  }
);

io.on(`connection`, function (socket) {
  console.log(`연결되었따!`);
  socket.emit(`userinfo`, user_info);
  socket.emit(`jogakinfo`, jogak_info);
  socket.emit(`userjogak_info`, userjogak_info);
  socket.on(`disconnect`, function () {
    console.log(`접속종료1`);
  });
});

db.end();
