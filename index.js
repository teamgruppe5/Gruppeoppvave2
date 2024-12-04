let happynes = document.getElementById('barHappy')
let hunger = document.getElementById('barHunger')
let cleanliness = document.getElementById('barHealth')
let snakePic = document.getElementById('snakeImg')


const maxPixelsConst = 145
let pixelsHung 
let pixelsHappy 
let pixelsClean 
let lower

    start()
function start(){
    document.getElementById('happynessbtn').classList.remove('hidden')
    document.getElementById('healthbtn').classList.remove('hidden')
    document.getElementById('hungerbtn').classList.remove('hidden')
    document.getElementById('PlayAgain').classList.add('hidden')
     pixelsHung = maxPixelsConst
     pixelsHappy = maxPixelsConst
     pixelsClean = maxPixelsConst
     hunger.style.backgroundColor = 'green';
     happynes.style.backgroundColor = 'green';
     cleanliness.style.backgroundColor = 'green';
     hunger.style.width = "145px";
     happynes.style.width = "145px";
     cleanliness.style.width = "145px";
     changePic('')



    lower = setInterval(lowerTheBars, 10)
}

function fillHunger(){
    hunger.style.backgroundColor = 'green';
    pixelsHung = maxPixelsConst;
    hunger.style.width = "145px";
    changePic('')
    
};

function fillHapinness(){
    happynes.style.backgroundColor = 'green';
    pixelsHappy = maxPixelsConst;
    happynes.style.width = "145px";
    changePic('')
  
};

function fillCleanless(){
    cleanliness.style.backgroundColor = 'green';
    pixelsClean = maxPixelsConst;
    cleanliness.style.width = "145px";
    changePic('')
  
}


function lowerTheBars(){
    pixelsHappy -= 2
    pixelsHung -= 3
    pixelsClean -= 1
 
    
    happynes.style.width = "" + pixelsHappy + "px";
    hunger.style.width = "" + pixelsHung + "px";
    cleanliness.style.width = "" + pixelsClean + "px";

    if(pixelsHappy < 50 && pixelsHappy > 0){
        happynes.style.backgroundColor = 'red';
        changePic('sad')
    } 
    else if(pixelsHappy >= 50){
        happynes.style.backgroundColor = 'green';
    } 
    else {
        happynes.style.width = '1px';
        gameOver();
        changePic('death')
    }

    if (pixelsHung < 50 && pixelsHung > 0){
        hunger.style.backgroundColor = 'red';
        changePic('hungry');
    }
    else if(pixelsHung >= 50){
        hunger.style.backgroundColor  = 'green'
    }
    else{
        hunger.style.width = '1px'
        gameOver()
    }

    if(pixelsClean < 50 && pixelsClean > 0){
        cleanliness.style.backgroundColor = 'red'
        changePic('dirty')
    } 
    else if(pixelsClean >= 50){
        cleanliness.style.backgroundColor = 'green';
    } 
    else {
        cleanliness.style.width = '1px'
        gameOver()
    }
}

function gameOver(){
  clearInterval(lower)
  changePic('death')

  document.getElementById('happynessbtn').classList.add('hidden')
  document.getElementById('healthbtn').classList.add('hidden')
  document.getElementById('hungerbtn').classList.add('hidden')
  document.getElementById('PlayAgain').classList.remove('hidden')
  
}

function changePic(pic){
    if(pic == 'death'){
        snakePic.src = 'img/ded2.png'
    }else if (pic == 'hungry'){
        snakePic.src = 'img/standard.png'
    }else if (pic == 'sad') {
        snakePic.src = 'img/sad3.png'
    }else if(pic == 'dirty'){
        snakePic.src = 'img/dirtyplug.png'
    }else{
        snakePic.src = 'img/standard.png'
    }

}


