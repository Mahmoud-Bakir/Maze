window.onload=function(){
    let start_div = document.getElementById("start");
    console.log(start_div);
    start_div.addEventListener("click",reset);
    let test =document.getElementsByClassName("boundary")
    console.log(test)
    test[0].addEventListener("mouseover",danger)
    test[1].addEventListener("mouseover",danger)
    test[2].addEventListener("mouseover",danger)
    test[3].addEventListener("mouseover",danger)
    test[4].addEventListener("mouseover",danger)
    test[5].addEventListener("mouseover",danger)


    
    function reset(){
       let i=0
       for(i=0;i<5;i++)
       test[i].style.backgroundColor="#eeeeee"
           }
    function danger(){
       let i=0
       for(i=0;i<5;i++)
       test[i].style.backgroundColor="red"
           }

    }
  

  
