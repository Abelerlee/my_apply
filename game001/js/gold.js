/**
 * Created by Administrator on 2016/6/20.
 */
/*
function  fn() {
    alert(1);
}
fn();*/
function GoldObj(opt){
    this.config={
        id:null,
        pos:{x:0,y:0},
        size:20,
        score:10,
        speed:10,
        class:"y"  //y代表钱币 的颜色  w代表钱币 的颜色
    }
    for(var i in opt){
       // console.log(i);
        this.config[i]=opt[i]
    }
    this.ele=null; //声明一个属性  （ps:构造函数的指向性强）
}

GoldObj.prototype={
    //创建金币
    create:function(){
       var ele= document.createElement("div")
        ele.className="gold "+this.config.class
        ele.style.cssText="top:"+this.config.pos.y+"px;left:"+this.config.pos.x+"px;width:"+this.config.size+"px;height:"+this.config.size+"px",
        GlobalPrs.gameBox.appendChild(ele)
        this.ele=ele;   //将创建的对象赋给
        this.config.score=parseInt((this.config.speed+this.config.size)*0.5); //设置元素的分值

    },
    //删除金币
    delete:function(){
        GlobalPrs.gameBox.removeChild(this.ele)
        delete GlobalPrs.goldall[this.config.id]

    },
    //移动金币
    move:function(){
        this.config.pos.y += this.config.speed;
        this.ele.style.top=this.config.pos.y+"px";
        this.drawListener();
    },
    //对接金币对象的操作
    drawListener:function(){
        if(this.config.pos.y>GlobalPrs.boxsize.height){
           this.delete();
        }
        var thisSizeH={w:this.config.size/2,h:this.config.size/2};//金币宽高的一般
        var thisC={x:this.config.pos.x+thisSizeH.w,y:this.config.pos.y+thisSizeH.h}  //金币的中心坐标
        var carSizeH={w:GlobalPrs.car.config.size.width/2,h:GlobalPrs.car.config.size.height/2}; //车的宽高的一般
        var carC={x:GlobalPrs.car.config.pos.x+carSizeH.w,y:GlobalPrs.car.config.pos.y+carSizeH.h};  //车的中心点
        if(Math.abs(carC.x-thisC.x)<(thisSizeH.w+carSizeH.w)&&Math.abs(carC.y-thisC.y)<(thisSizeH.h+carSizeH.h)){
            this.getCode();
        }
    },
    getCode:function(){
        if(this.config.class=="y"){
            GlobalPrs.grossScore+=(this.config.score)*2;
            GlobalPrs.getCode.innerHTML=GlobalPrs.grossScore;
            this.delete();
        }
        if(this.config.class=="w"){
            GlobalPrs.grossScore+=this.config.score;
            GlobalPrs.getCode.innerHTML=GlobalPrs.grossScore;
            this.delete();
        }

    }
}