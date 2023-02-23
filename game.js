window.onload=function(){
    let start_div = document.getElementById("game")
    console.log(start_div)
    start_div.addEventListener("click",reset)
  

   function reset(){
    start_div.style.backgroundColor="red"
   }
}