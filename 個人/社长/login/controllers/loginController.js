/* 
　　ログイン機能の業務処理モジュール
　　データ処理モジュールを呼び出す。
　　業務データをRouterを経由し、クライアントへリスポンスする。
*/

var userDao = require("../dao/userdao.js");
var Md5 = require("../modules/md5.js");
var log = require('../modules/logUtils.js');

var loginController = {};

/*
    ログインチェックメソッド(非同期処理を同期化)
    戻り値：boolean  --> 
           true:success　
           false:failure  
*/
loginController.isloginCheck = async function(req) {

    //findByEmailを呼び出す
    var user = await userDao.findByEmail(req.body.email);
    
    //パスワードを照合する
    if (user && user.password==Md5.toMd5String(req.body.password)){

        log.logger(log.getLoginInfo(req),true);
        return true;
    }else{

        log.logger(log.getLoginInfo(req),false);
        return false;
    } 
}

/* 
    メールアドレス有無チェックメソッド(非同期処理を同期化)
    戻り値：true:存在している
            false:存在していない
*/
loginController.isExist = async function(email) {

    //findByEmailを呼び出す
    var user = await userDao.findByEmail(email);

    //入力されるemailで既存
    if (user){
        return true;
    }else{
        return false;
    }
}

/* 
    ユーザー登録処理(非同期処理を同期化)
    戻り値：String  --> 
           "0":success　
           "1":failure  
           "2":email address already exist
*/
loginController.register = async function(req) {

    //リクエストの変数password文字列をMD5のハッシュ値に変換する
    req.body.password = Md5.toMd5String(req.body.password);

    //メールアドレス有無チェック
    if (await this.isExist(req.body.email)){
        return 2;
    }else{

        //入力されるemailが既存していない場合、登録する
        var flag = await userDao.addUser(req);
        if (flag){

            log.logger(log.getRegisterInfo(req),true);
            return 0;
        }else{

            log.logger(log.getRegisterInfo(req),false);
            return 1;    
        }
    } 

}

/* 
    パスワード更新用チェック処理(非同期処理を同期化)
    戻り値：true:存在している
            false:存在していない
*/
loginController.forgot = async function(req) {

    //メールアドレス有無チェック
    if (await this.isExist(req.body.email)){

        log.logger(log.getForgotInfo(req),true);
        return true;
    }else{

        log.logger(log.getForgotInfo(req),false);
        return false;
    }

}

/* 
    パスワード更新処理(非同期処理を同期化)
    戻り値：
*/
loginController.reset = async function(req) {

    //リクエストの変数password文字列をMD5のハッシュ値に変換する
    req.body.password = Md5.toMd5String(req.body.password);
    //req.body.email="flying-stone@flying-stone.com";

    //メールアドレス有無チェック
    var flag = await userDao.updateByEmail(req);
    if (flag){

        log.logger(log.getResetInfo(req),true);
        return true;
    }else{

        log.logger(log.getResetInfo(req),false);
        return false;
    }

}

module.exports = loginController;

