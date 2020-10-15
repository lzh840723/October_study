
var express = require("express");
var bodyParser = require('body-parser');
var controller = require("../../controllers/loginController.js");

var router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json());

router.get('/',function(req,res){
    res.render('login/login');
})

router.post('/',async function(req,res){

    var flag = await controller.isloginCheck(req);
    if (flag){
        res.send('ログイン成功しました！');
    }else{
        res.send("<script>alert('ログイン失敗しました。');location.href='/login'</script>");
    }

})

router.get('/register',function(req,res){
    res.render('login/register');
})

router.post('/register',async　function(req,res){

    var flag = await controller.register(req);

    if (flag == "0"){
        res.send("<script>alert('登録成功しました。');location.href='/login'</script>");
    }else if(flag == "2"){
        res.send("<script>alert('メールが既に登録しています。');location.href='/login/register'</script>");
    }else{
        res.send("<script>alert('登録失敗しました。');location.href='/login/register'</script>");
    }
})

router.get('/forgot',function(req,res){
    res.render('login/forgot');
})

router.post('/forgot',async function(req,res){

    var flag = await controller.forgot(req);
    if (flag){
        res.render('login/reset',{email: req.body.email});
    }else{
        res.send("<script>alert('入力されたメールアドレスが存在しません。');location.href='/login/forgot'</script>");
    }    
    
})

router.get('/reset',function(req,res){
    res.render('login/reset');
})

router.post('/reset',async function(req,res){

    var flag = await controller.reset(req);
    if (flag){
        res.send("<script>alert('パスワード更新しました。');location.href='/login'</script>");
    }else{
        res.send("<script>alert('パスワード更新失敗しました。');location.href='/forgot'</script>");
    }
    
})

module.exports = router;

/*
  index画面　―→　login画面
  　　　　　　―→　register画面

  login画面 ―→　register画面  ―→　login画面　
                            　Registerボタン　―→　成功　 ―→　login画面
                                           　 ―→　失敗　 ―→　register画面


            ―→  forgot 画面  ―→　ResetPasswordボタン   ―→　確認OK　 ―→　reset画面
                                              　　　　　―→　確認NG　 ―→　forgot画面 

                　　　　　　　―→　reset画面　―→　成功　 ―→　login画面
                                           ―→　失敗　 ―→　forgot画面

            ―→　Loginボタン　―→　成功
            　　　　　　　　　―→　失敗　 ―→　login画面

*/