/**
 * Created by Administrator on 2016/6/23.
 */


/*开始游戏*/
var Ostart=document.getElementById("start");
var OstartBox=document.getElementById("startbox")
console.log(Ostart);
Ostart.onclick=function(){
   // alert(1);
    $("#startbox").fadeOut("slow");
    OstartBox.style.display="none";
    gameInit();//游戏初始化
    gamePlay();//金币（DOM）元素创建之后，调用游戏开始的方法让其运动
}
/*查看排行榜*/
var oBtn=document.getElementById("count-list-btn")
oBtn.onclick=function(event){
    window.location="./rankinglist.html";
};
//生成随机坐标
function getPos(){ //利用工程模式写一个生成坐标的方法
    var pos={
        x:parseInt(Math.random()*(GlobalPrs.boxsize.width-30)),// 随机横坐标（）
        y:0
    }
    return pos;
    //console.log(x);
}
//设置金币尺寸 （10-30）
function getSize(){  //利用工程模式写一个生成金币尺寸的方法
    return parseInt(Math.random()*20)+15
}
//设置金币尺寸 （3-9）
function getSpeed(){  //利用工程模式写一个设置金币下落速度的方法
    return parseInt(Math.random()*6)+3
}
//游戏开始
function gamePlay(){  //游戏执行的方法
    createCar(); //游戏开始执行创建小车的方法
    carEvent(); //小车事件方法调用


    //游侠开始的时候创建一个全局定时器，等游戏开始的侯间隔50s创建一个定时器
    GlobalPrs.timer=setInterval(function(){
        GlobalPrs.code++;
        if( GlobalPrs.code%20==0){
            createGold();//设置间隔一定创建新的金币
            //console.log(GlobalPrs.goldall)
        }
        //倒计时
        if( GlobalPrs.code%20==0){
            var time=GlobalPrs.timeMax;
            GlobalPrs.timeMax--;
            if(parseInt(GlobalPrs.timeMax)>=10){
                time ="00:00:"+GlobalPrs.timeMax;
            }
            if(parseInt(GlobalPrs.timeMax)<10){
                time ="00:00:0"+GlobalPrs.timeMax;
            }
            if(parseInt(GlobalPrs.timeMax)<0){
                time ="00:00:00";
                gameOver();
            }
            //console.log(time)
            GlobalPrs.timeBox.innerHTML=time;
        }
        /*调用生成金币的方法 让创建的金币运动*/
        for(var i in GlobalPrs.goldall){
            GlobalPrs.goldall[i].move();
        }
        /*调用小车的运动方法*/
        GlobalPrs.car.moveCar();
    },1000/GlobalPrs.fps)
}
//添加元素ID
function getID(){   //创建ID的方法  生成一个16位的随机id
    var arr="qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOASDFGHJKLZXCVBNM"
    var id="a";
    for(var i=0;i<15;i++){
        id+=arr[Math.floor(Math.random()*62)]
    }
    return id;
}
//创建金币
function createGold(){ // 创建金币的方法
    var id=getID(); //声明一个变量id  将生成的id值赋给变量
    GlobalPrs.goldall[id]=new GoldObj({   //将新创建的对象保存在公共属性goldall中
        id:id,               //将id值赋给新对象的id属性
        class:parseInt(Math.random()*10)>7?"y":"w",
        speed:getSpeed(),  //在新创建的对象中调用随机速度的方法
        size:getSize(),  //在新创建的对象中调用生成金币尺寸的方法
        pos:getPos()   //在新创建的对象中调用生成随机坐标的方法
    })
    GlobalPrs.goldall[id].create();//保存的所有金币（DOM）元素调用创建的方法
}
//创建车对象
function createCar() {
    var size={
        width:60,
        height:30,
        speed:5
    };
    var pos={
        x:(GlobalPrs.boxsize.width-size.width)/2,
        y:GlobalPrs.boxsize.height-size.height
    };
    GlobalPrs.car=new carObj({
        size:size,   //小车尺寸
        pos:pos        //小车的定位
    })
    GlobalPrs.car.create();
};
//添加小车操作事件
function carEvent(){
    GlobalPrs.gameBox.addEventListener("click",function(event){
        var mx=event.offsetX;//设置鼠标相对于目标事件的父元素的内边界在x坐标上的位置。
        console.log(mx);
        var carC=GlobalPrs.car.config.pos.x+GlobalPrs.car.config.size.width/2;
        if(mx>carC){//判断小车中心位置与鼠标位置
            GlobalPrs.car.config.pir="right";
        }else{
            GlobalPrs.car.config.pir="left";
        }
    })
}
//游戏初始化
function gameInit(){
    var time ="00:00:"+GlobalPrs.timeMax;
    var oBox=document.getElementById("mainbox");
    oBox.style.width=GlobalPrs.boxsize.width+"px";
    GlobalPrs.gameBox.style.height=GlobalPrs.boxsize.height+"px";
    GlobalPrs.timeBox.innerHTML=time;
}
//游戏结束
function gameOver(){
    clearTimeout( GlobalPrs.timer);
    /*参数	返回值
     userID:用户名	提交数据成功：1
     score:int类型，游戏得分	没有游戏得分参数：2
     gname:游戏名称 （英文）可选参数，默认所有游戏	没有提交用户名：5
     游戏分数小于历史得分：6*/
    $.get("http://datainfo.duapp.com/gamesinfo/catchgolds/gamesubmit.php",{
        userID:125125,
        score:GlobalPrs.grossScore,
        gname:GlobalPrs.gameName
    },function(data){
        console.log(data);
        console.log(data.score);

    })
    //alert("游戏结束！！！");
    $("#overbox").show("slow","linear");
    $(".getscore").html("得分"+GlobalPrs.grossScore);
    $(".restart").on("click",function(){
        window.location="./index.html"
    })
    $(".reagain").click(function(){

    })
    $(".golist").click(function(){
        window.location="./rankinglist.html"
})
}