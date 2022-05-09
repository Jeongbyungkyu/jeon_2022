const express = require(`express`);
const nodemailer = require(`nodemailer`);
const app = express();
const pass =`Z5HDQ4T4FPEY`;

async function main() {
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
        from: `ouregol@naver.com`, // sender address
        to: `byungkyujeon@assetplus.co.kr`, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "드디어 성공인가", // plain text body
        html: "<b>안녕하세요 드디어 메일을 보냅니다</b>", // html body
      });
    
      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }
    








app.listen(8080, function(){
    console.log(`환영합니다.`);
});

app.get(`/pet`, function(post, get){
    get.send(`헬로우~`);
})

app.get(`/1818`, function(post, get){
    get.send(`와우 신기하다11`);
})

app.get(`/`, function(post, get){
    get.sendFile(`D:/jeon_2022/jeon_2022/React_1/index.html`);
})
