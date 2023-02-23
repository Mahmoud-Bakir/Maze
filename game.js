window.onload=function(){
    let start_div = document.getElementById("start");
    console.log(start_div);
    start_div.addEventListener("click",reset);
    let test =document.getElementsByClassName("boundary")
    console.log(test)
    function reset(){
       let i=0
       for(i=0;i<5;i++)
       test[i].style.backgroundColor="#eeeeee"
           }

    }
  

  
