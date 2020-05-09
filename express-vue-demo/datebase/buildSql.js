/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-05-09 11:42:30
 * @LastEditors: 
 * @LastEditTime: 2020-05-09 11:43:07
 */
module.exports = function buildSql (menu, parent, grade, path, sort) {

  let sql = "insert ignore into admin_menus(";
  let columns = [];
  let values = [];
  for (let key in sqlValues) {
    columns.push(key);
    values.push("'" + sqlValues[key] + "'");
  }
  sql += columns.join(",");
  sql += ")values(";
  sql += values.join(",");
  sql += ")";
  return sql;
}