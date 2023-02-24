window.onload=function(){
    var increment=0
    let  points= document.getElementsByTagName("p")[0]
    console.log(points)
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
    let status = document.getElementsByTagName("h2")[0]
    console.log(status.innerHTML)
    let finish=document.getElementById("end")
    console.log(finish)
    finish.addEventListener("mouseover",winner)
    function reset(){
       let i=0
       for(i=0;i<5;i++)
       test[i].style.backgroundColor="#eeeeee"
       status.innerHTML="Let's GOO"
       increment=0
       points.innerHTML=`points: ${increment} `
      
           }
    function danger(){
       let i=0
       for(i=0;i<5;i++)
       test[i].style.backgroundColor="red"
       status.innerHTML="You Lost"
       points.innerHTML=`points: ${increment-=10} `
    }
        function winner(){
            if (status.innerHTML!="You Lost"){
            status.innerHTML="You Won !"
            points.innerHTML=`points: ${increment+=5} `
             }
    }


    }
  

  
