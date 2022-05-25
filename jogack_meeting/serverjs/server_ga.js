const mysql = require(`sync-mysql`);
const moment = require(`moment`);
const db = new mysql({
  host: "10.100.220.183",
  port: "13306",
  user: "root",
  password: "asset7878!",
  database: "jogack",
  dateStrings: "date",
  multipleStatements: true,
});

let get_Date = new Date();
let getf_Date = moment(get_Date).format();
let date =
  getf_Date.substr(0, 4) +
  `-` +
  getf_Date.substr(5, 2) +
  `-` +
  getf_Date.substr(8, 2);
let moth = getf_Date.substr(0, 4) + `-` + getf_Date.substr(5, 2);

module.exports = {
  list_m: function () {
    let m_list = db.query(
      `SELECT moim_title, moim_int_value, moim_in_max, moim_so, moim_ji, moim_date, moim_time 
      FROM join_tb a, moim_tb b 
      WHERE a.moim_key = b.moim_key 
      AND moim_date LIKE '%${moth}%'`
    );
    return m_list;
  },

  list_today_cu: db.query(
    `SELECT * FROM moim_tb WHERE moim_in_max != moim_int_value`
  ),

  list_today: function () {
    let today_list = db.query(
      `SELECT moim_title, moim_int_value, moim_in_max, moim_so, moim_ji, moim_date, moim_time 
        FROM join_tb a, moim_tb b 
        WHERE a.moim_key = b.moim_key AND a.user_id ='ouregol'
        AND moim_date = '${date}'`
    );
    return today_list;
  },

  //   list_m: db.query(
  //     `SELECT moim_title, moim_int_value, moim_in_max, moim_so, moim_ji, moim_date, moim_time
  //     FROM join_tb a, moim_tb b
  //     WHERE a.moim_key = b.moim_key
  //     AND moim_date LIKE '%${moth}%'`
  //   ),
};
