/**
 * Created by Administrator on 2016/6/20.
 */
var  GlobalPrs= {
        gameName:"getGold",
        boxsize: {width:320, height: 360},
        gameBox: document.getElementById("gamebox"),
        timeBox: document.getElementById("timebox"),
        getCode: document.getElementById("getcode"),
        timer:null,    //创建一个全局定时器（ps:耗能 帧的概念）
        fps:20,        //帧数
        goldall:{},    //创建一个对象用来保存创建的金币（DOM对象）
        code:0,        //计时
        car:null,     //为了金币与小车的交互（定义一个全局的车）
        timeMax:5,  //游戏倒计时
        grossScore:0  //累计得分

}
