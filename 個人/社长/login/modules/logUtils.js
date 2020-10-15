/*
    ログ書込み処理用モジュール
*/
var fs = require('fs');
var date = require('./dateUtils.js');

/*
    ログ情報をログファイルに書込みメソッド    
    戻り値：ture/false 
*/
exports.logger=function(string,flag){

    if (flag){
        string+='--成功';
    }else{
        string+='--失敗';
    }

    fs.appendFile('logs/login.log',string+'\n',(err)=>{

        if(err){
            return false;
        }else{
            return true;
        }
    });
}

/*
    ログイン情報ログ文字列作成メソッド    
    戻り値：String 
*/
exports.getLoginInfo=function(req){

    return "ログイン：" + this.getLogInfo(req);
}

/*
    ユーザ登録情報ログ文字列作成メソッド    
    戻り値：String 
*/
exports.getRegisterInfo=function(req){

    return "ユーザ登録：" + this.getLogInfo(req);
}

/*
    パスワード変更情報ログ文字列作成メソッド    
    戻り値：String 
*/
exports.getResetInfo=function(req){

    return "パスワード変更：" + this.getLogInfo(req);
}

/*
    パスワード変更情報ログ文字列作成メソッド    
    戻り値：String 
*/
exports.getForgotInfo=function(req){

    return "メール確認：" + this.getLogInfo(req);
}
/*
    ログ用リクエスト情報文字列作成メソッド    
    戻り値：String 
*/
exports.getLogInfo=function(req){

    //リクエストIPADDRESSを取得する
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    //ユーザ情報を戻す
    return 'RunTime:'+date.getDate()
           +'--'+'IPAddress:'+ip
           +'--'+'Email:'+req.body.email;

}