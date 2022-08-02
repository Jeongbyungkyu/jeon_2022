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
const pwpw = require(`bcrypt`);
const setpw = 10;
const session = require(`express-session`);
let user_id;
// app.use(
//   session({
//     secret: "12345123123wsdfsdfsdf",
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: false },
//     maxAge: 5,
//   })
// );

app.use(express.static(path.join(__dirname)));
app.use(bodyParser.urlencoded({ extended: false }));
const PORT = 5300;

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

io.on(`connection`, function (socket) {
  console.log(`연결되었따!`);
  socket.emit(`userinfo`, db_se.login_info(user_id));
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
  res.sendFile(__dirname + `/main.html`);
});

app.post(`/main`, function (req, res) {
  let login_db = req.body;
  let login_pw = login_db.password;
  const idinfo = db_se.login_db(login_db.id);
  if (idinfo.length === 0) {
    res.send(
      `<script>alert('아이디또는 패워드확인하세요'); window.location.replace('/')</script>`
    );
  } else {
    pwpw.compare(login_pw, idinfo[0].user_pass, function (err, result) {
      try {
        if (result) {
          user_id = idinfo[0].user_id;
          res.sendFile(__dirname + `/main.html`);
        } else {
          res.send(
            `<script>alert('아이디또는 패워드확인하세요'); window.location.replace('/')</script>`
          );
        }
      } catch (err) {
        console.log(err);
      }
    });
  }
});
