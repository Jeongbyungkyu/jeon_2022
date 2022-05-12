const axios = require(`axios`)
const che = require(`cheerio`)


const gethtml = async () =>{
    try{
       return await axios.get(`http://data.krx.co.kr/contents/MDC/MDI/mdiLoader/index.cmd?menuId=MDC0201030101`)
    }catch (err){
        console.log(`에러닷ㅂ`);
    }
}



const parse1 = async () =>{
    const html = await gethtml();
    const $ = che.load(html.data)
    const $list = $(`#jsMdiContent > div > div.CI-GRID-AREA.CI-GRID-ON-WINDOWS.CI-GRID-CLICKED > div.CI-GRID-WRAPPER > div.CI-GRID-MAIN-WRAPPER > div.CI-GRID-BODY-WRAPPER > div > div > table > tbody > tr:nth-child(1)`)
    console.log($list)
    
    let cour =[];
    $list.each((idx, node)=>{
        const title = $(node).find(`CI-GRID-ALIGN-CENTER`).text();
        console.log(title)
    })


}

parse1();
