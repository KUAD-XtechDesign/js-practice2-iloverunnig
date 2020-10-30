$(function(){
    let ko = 0;
    
    
    
    
    $("#button01").on("click",function(){
        for(let i=0; i<10;i++){
            ko=ko+2;
        
        }
        $("#content").text(ko);   
    })
    
    $("#button02").on("click",function(){
        for(let i=0; i<10;i++){
            ko=ko+i;
        }
        $("#content").text(ko);
    })
    
    $("#button03").on("click",function(){
        setInterval(function(){
            ko=ko+1;
            $("#content").text(ko);
        },1000)

    })

    $("#button04").on("click",function(){
       ko=0;
       $("#content").text(ko);

    })
    
    
    
    })