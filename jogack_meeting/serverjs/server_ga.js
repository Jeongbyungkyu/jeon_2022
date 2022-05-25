const mysql = require(`sync-mysql`);
const db = new mysql({
  host: "10.100.220.183",
  port: "13306",
  user: "root",
  password: "asset7878!",
  database: "jogack",
  multipleStatements: true,
});

module.exports = {
  list_today: db.query(
    `SELECT moim_title, moim_int_value, moim_in_max, moim_so, moim_ji, moim_date, moim_time FROM join_tb a, moim_tb b WHERE a.moim_key = b.moim_key`
  ),

  list_m: db.query(
    `SET @mot = DATE_FORMAT(now(), '%Y-%m');
    SELECT moim_title, moim_int_value, moim_in_max, moim_so, moim_ji, moim_date, moim_time 
    FROM join_tb a, moim_tb b 
    WHERE a.moim_key = b.moim_key 
    AND moim_date LIKE CONCAT('%', @mot,'%')`
  ),
};
