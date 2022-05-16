const axios = require(`axios`)
const che = require(`cheerio`)


const gethtml = async () =>{
    try{
       return await axios.get(`https://finance.naver.com/marketindex/`)
    }catch (err){
        console.log(`에러닷ㅂ`);
    }
}



const parse1 = async () =>{
    const html = await gethtml();
    const $ = che.load(html.data)
    const $list = $(`.tbl_exchange`)
    console.log($list)
    
    let cour =[];
    $list.each((idx, node)=>{
        const title = $(node).find(`.sale`).text();
        console.log(title)
    })

    
}

parse1();
