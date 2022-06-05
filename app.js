let parent = document.querySelector("#parent");
let cng = document.getElementById("cng")
const pops = document.createElement("div");
let allclicked = []

const balloonArray = [{
  
  img: "images/1.png",
},
{
  
  img: "images/2.png",
},
{
  
  img: "images/3.png",
},
{
 
  img: "images/4.png",
},
{
  
  img: "images/5.png",
},
{
 
  img: "images/6.png",
},
{
 
  img: "images/7.png",
},
{

  img: "images/8.png",
},
{
 
  img: "images/9.png",
},
{
 
  img: "images/10.png",
},
{
  
  img: "images/11.png",
},
{
  
  img: "images/12.png",
},
{
  
  img: "images/13.png",
},
{
 
  img: "images/14.png",
},
{
  
  img: "images/15.png",
},
{
 
  img: "images/16.png",
},
{
 
  img: "images/17.png",
},
{
 
    img: "images/10.png",
  },
  {
    
    img: "images/11.png",
  },
  {
    
    img: "images/12.png",
  },
  {
    
    img: "images/13.png",
  },
  {
   
    img: "images/14.png",
  },
  {
    
    img: "images/15.png",
  },
  {
   
    img: "images/16.png",
  },
  {
   
    img: "images/17.png",
  },

];

balloonArray.sort(() => 0.5 - Math.random()); 


function getballoons() {
  for (let i = 0; i < balloonArray.length; i++) {
    const balloons = document.createElement("img");
    parent.appendChild(balloons);
    balloons.setAttribute("src",balloonArray [i].img)
    balloons.addEventListener("click", popballoon);
    console.log(balloons)
  }
}
getballoons();

function popballoon() {
    
    
 
    
    this.setAttribute("src" , "./images/popped.png")
    var tom1 = new Audio('./images/pop.mp3');
    tom1.play();
    
     this.removeEventListener("click", popballoon)
    allclicked.push(this);
   
    console.log(allclicked)
    if (allclicked.length === 25) {

    
        parent.style.display ="none";
        cng.style.display = "block"
        document.getElementById("doneit").style.display="block"
        document.getElementById("doit").style.display="none"
  

     }
    }

popballoon();












