$(function(){

        let txt1 ="おは〜"
        let txt2 ="お元気？？"
        let num1 =20;
        let num2 =32; 
        
        
        function seyHello(){
         $("#content").text("こんちゃ");
       }

       function seySomething(txt){
        $("#content").text(txt);
      }

      function samTwo(arg1,arq2){
          $("content").tex(arg1 + arg2);
      }


       $("#button01").on("click",function(){ 
        seyHello

    })

    $("#button02").on("click",function(){ 
       seySomething(txt1)

    })
    $("#button03").on("click",function(){ 
        samTwo(txt1,txt2)
    })
    $("#button04").on("click",function(){ 
        samTow(num1,num2)

    })
    $("#button05").on("click",function(){ 
        samTwo(txt1,txt2)
        samTwo(num1,num2)
    })
})
  
    


