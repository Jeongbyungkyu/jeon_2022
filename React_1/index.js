const axios = require("axios");
const cheerio = require("cheerio");
const log = console.log;



axios.get('http://data.krx.co.kr/comm/bldAttendant/getJsonData.cmd',headers,params)
  .then((Response) => {console.log(Response.data)})
  .catch((Error) => {console.log(Error)})