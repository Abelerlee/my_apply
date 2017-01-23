/**
 * Created by Administrator on 2016/6/21.
 */
function carObj(car){
    this.config={
        id:null,    //小车id
        speed:5,   //小车速度
        size:{width:50,height:30},  //小车尺寸
        pir:null,   //运动方向
        pos:{x:0,y:0}  //小车定位
    }
    for(var i in car){
        this.config[i]=car[i]
    }
    this.ele=null;
}
carObj.prototype={
    create:function(){
        var ele= document.createElement("div")
        ele.className="car"
        ele.style.cssText="top:"+this.config.pos.y+"px;left:"+this.config.pos.x+"px;width:"+this.config.size.width+"px;height:"+this.config.size.height+"px",
        GlobalPrs.gameBox.appendChild(ele)

        this.ele=ele;   //？？？？

    },
    moveCar:function(){
        switch (this.config.pir){
            case "right":
                this.config.pos.x+=this.config.speed
                break;
            case "left":
                this.config.pos.x-=this.config.speed
                break;
        }
        this.drawListener();//小车的碰撞事件
        this.ele.style.left=this.config.pos.x+"px"
    },
    drawListener:function(){
        var max=GlobalPrs.boxsize.width-this.config.size.width;
        if(this.config.pos.x<0){
            this.config.pos.x=0;
        }else if(this.config.pos.x>max){
            this.config.pos.x=max;
        }
    },
    deleteCar:function(){

    }
}