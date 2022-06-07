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

  serch_list: function (data) {
    let list_serch = db.query(
      `SELECT * FROM moim_tb WHERE moim_title LIKE '%${data}%' OR moim_so LIKE '%${data}%' OR moim_ji LIKE '%${data}%'`
    );
    return list_serch;
  },

  moim_input: function (data) {
    let soget = data.soget.replace(/(?:\r\n|\r|\n)/g, "<br/>");
    let input_moim = db.query(
      `INSERT INTO moim_tb (moim_title, moim_in_max, moim_date, moim_time, moim_ji, moim_so, make_user, moim_soget) VALUES('${data.title}', '${data.saram}', '${data.date}', '${data.time}', '${data.moim__y_ji_cu}', '테스트지역', 'ouregol', '${soget}')`
    );
    let input_join = db.query(
      `SELECT make_user, moim_key FROM moim_tb WHERE make_user ='ouregol' AND moim_title = '${data.title}' AND moim_in_max='${data.saram}' AND moim_date='${data.date}'`
    );
    db.query(
      `INSERT INTO join_tb (user_id, moim_key) VALUES('${input_join[0].make_user}','${input_join[0].moim_key}')`
    );
    return input_moim;
  },

  login_db: function (data) {
    let db_login = db.query(`SELECT * FROM user_tb WHERE user_id = '${data}'`);
    return db_login;
  },

  login_info: function (data) {
    let info_log = db.query(
      `SELECT user_id, user_name, user_email, user_madi FROM user_tb WHERE user_id = '${data}'`
    );
    return info_log;
  },

  //   list_m: db.query(
  //     `SELECT moim_title, moim_int_value, moim_in_max, moim_so, moim_ji, moim_date, moim_time
  //     FROM join_tb a, moim_tb b
  //     WHERE a.moim_key = b.moim_key
  //     AND moim_date LIKE '%${moth}%'`
  //   ),
};
