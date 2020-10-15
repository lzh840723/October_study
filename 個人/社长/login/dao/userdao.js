/* 
　　ログイン機能モジュール
　　業務処理の必要な場合のみ、Controllerを利用する。
　　業務処理のない場合、Routerで画面を遷移する。
*/

var mongoose = require("mongoose");
var Model = require("../models/userModel");
const { unsubscribe } = require("../routes");

var userDao = {};

userDao.findByEmail = async function(email) {
  try {
      const user = await Model.findOne({email: email});
      return user;
  } catch (err) {
      console.log("DBError:", err);
  }
};

userDao.addUser = async function(req) {

    var user = new Model(req.body);
    try {
        const result = await user.save();
        return true;
    } catch (err) {
        console.log("DBError:", err);
    }
};

userDao.updateByEmail = async function(req) {
    try {

      const result = await Model.updateOne({email: req.body.email},{password:req.body.password});
      return true;
    } catch (err) {
        console.log("DBError:", err);
    }
    
};

module.exports = userDao;