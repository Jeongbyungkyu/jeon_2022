const request = require("request");
const cheerio = require("cheerio");
const axios = require("axios");
const ic = require("iconv-lite")

let coma = [];

const cocoma = async ()=>{

await axios.get(`http://data.krx.co.kr/contents/MDC/MDI/mdiLoader/index.cmd?menuId=MDC0201030101`)


// {responseType: "arraybuffer"}

.then(async (data1)=>{
    const string = await data1.data;
    console.log(data1.data)
    // const string1 = ic.decode(string, `EUC-KR`).toString();
    const string2 = string.replace(/(\r\n|\n|\r)/gm, "");
    const $ = cheerio.load(string2);
    const data2 = $(`.content`)
    data2.each(async (idx, node) =>{
       const title = $(node).find(`p`).text();
    //    console.log(title)
        await coma.push({
            date: $(node).find(`p`).text(),
        })  
    })
})

return coma
}

cocoma().then((result) => {
    console.log(result)
});