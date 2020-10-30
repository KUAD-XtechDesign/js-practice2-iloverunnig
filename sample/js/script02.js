$(function(){
let ko = 0;

function checBox(){
    if(ko > 5){
        $("#content").text(ko+"入っています。箱はいっぱいです。箱を空にします");
        ko = 0;
    }else if(ko <= 0){
        ko=0;
        $("#content").text(ko+"個。入っていません");
        
    }else{
        $("#content").text(ko+"個入っています。まだ入ります");
    }
    
}


$("#button01").on("click",function(){
    checBox()
})

$("#button02").on("click",function(){
    ko=ko+1;
    checBox()
})

$("#button03").on("click",function(){
    ko=ko-1;
    checBox()
})



})