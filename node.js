let list = [
    "joe",
    "dani",
    "samo",
    "roni",
    "bellingham"
]

parentDiv = document.querySelector(".root")
function draw(tot){

   const input = document.createElement("input");

   tot.map(function(name){
    const div = document.createElement("div");
    div.innerText = name
     return div;
   }).forEach(function(val){
    parentDiv.appendChild(val)
   })
   
}

alert(draw(list))