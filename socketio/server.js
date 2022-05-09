const express = require(`express`);
const nodemailer = require(`nodemailer`);
const app = express();
const pass =`Z5HDQ4T4FPEY`;
const path = require(`path`);
const http = require(`http`);
const server = http.createServer(app);
const socketio = require(`socket.io`);

const io = socketio(server);

app.use(express.static(path.join(__dirname)))

const PORT = 5500;

server.listen(PORT, function(){
  console.log(`환영합니다. 포트번호 : ${PORT}`);
});

io.on(`connection`, (socket)=>{
  socket.on(`chatroom`,(data)=>{
    console.log(data)
    io.emit(`chatroom`, async function main(){
      let transporter = nodemailer.createTransport({
        host: "smtp.naver.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: `ouregol`, // generated ethereal user
          pass: pass, // generated ethereal password
        },
      });
    
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: data.from, // sender address
        to: data.to, // list of receivers
        subject: data.subject, // Subject line
        html: data.html, // html body
      });
    
      io.emit(`chatroom`, `보내기 완료`);
    })
    })
  })












app.get(`/`, function(post, get){
  get.sendFile(__dirname +`/index.html`)
})

app.get(`/pet`, function(post, get){
  get.send(`헬로우~`);
})


app.get(`/1818`, function(post, get){
  get.send(`와우 신기하다11`);
})






