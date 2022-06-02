const db_se = require(`./serverjs/server_ga.js`);
const express = require(`express`);
const app = express();
const path = require(`path`);
const http = require(`http`);
const server = http.createServer(app);
const socketio = require(`socket.io`);
const mysql = require(`mysql`);
const io = socketio(server);
const router = express.Router();
const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname)));
app.use(bodyParser.urlencoded({ extended: false }));
const PORT = 5300;

let user_info = [];

server.listen(PORT, function () {
  console.log(`환영합니다. 포트번호 : ${PORT}`);
});

app.get(`/`, function (post, get) {
  get.sendFile(`/index.html`);
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

io.on(`connection`, function (socket) {
  console.log(`연결되었따!`);
  socket.emit(`userinfo`, user_info);
  socket.emit(`jogakinfo`, db_se.list_today_cu);
  socket.emit(`userjogak_info`, db_se.list_today());
  socket.emit(`userjogak_info_m`, db_se.list_m());
  socket.on(`disconnect`, function () {
    console.log(`접속종료1`);
  });

  socket.on(`serch_list`, (data) => {
    socket.emit(`serch_list_s`, db_se.serch_list(data));
  });
});

app.post(`/go`, function (req, res) {
  let input_db = req.body;
  db_se.moim_input(input_db);
  res.sendFile(__dirname + `/index.html`);
});
