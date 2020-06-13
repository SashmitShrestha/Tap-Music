window.addEventListener('load', () =>{
    const sound1= new Audio("sounds/bubbles.mp3");
    const sound2= new Audio("sounds/clay.mp3");
    const sound3= new Audio("sounds/confetti.mp3");
    const sound4= new Audio("sounds/glimmer.mp3");
    const sound5= new Audio("sounds/moon.mp3");
    const sound6= new Audio("sounds/ufo.mp3");
   const sounds=[sound1,sound2,sound3,sound4,sound5,sound6];
   const pads=document.querySelectorAll(".pads div");
   const visual =document.querySelector('.visual');
   const colours=[
    '#60d394',
    '#d36060',
    '#c060d3',
    '#d49825',
    '#6860d3',
    '#60d394'
   ];
   pads.forEach((pad,index) =>{
    pad.addEventListener('click',function(){
    sounds[index].currentTime=0;
    sounds[index].play();    
    const bubble =document.createElement("div");
       visual.appendChild(bubble);
       bubble.style.backgroundColor = colours[index];
       bubble.style.animation= "jump 1s ease";    
    });
   });

  
     
});

