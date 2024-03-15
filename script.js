var input=document.querySelector("input");
var ul=document.querySelector("ul");
var bt=document.querySelector('button');
var clutter=""


var remove=document.querySelectorAll(".cut")

bt.addEventListener("click",function(){

    var inp=input.value;

     clutter+=`
    
     <div id="line">
                        
     <div id="sath">
         <h5><i  class="ri-checkbox-blank-circle-line"></i></h5><li>${inp} <div id="min"></div></li>
     </div>
      <div class="cut">
     <i class="ri-close-line"></i>

      </div>   
 </div>

    
    
    `;

    ul.innerHTML=clutter;
    input.value=""

    var cut =document.querySelectorAll(".cut")
    var line=document.querySelectorAll("#line")
   cut.forEach(function(elm,idx){
    elm.addEventListener("click",function(){
        line[idx].style.display="none"
    })
   })

    var gola=document.querySelectorAll("h5");
    console.log(gola)
    var mine=document.querySelectorAll("#min");

    gola.forEach(function(e,idx){
        e.addEventListener("click",function(){
            console.log("akdfnnlte")
          mine[idx].style.opacity="1";  
          e.innerHTML=`<i class="ri-checkbox-circle-line"></i>`  
        })
    })












})

