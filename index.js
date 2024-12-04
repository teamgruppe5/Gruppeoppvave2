let happynes = document.getElementById('barHappy')
let hunger = document.getElementById('barHunger')
let cleanliness = document.getElementById('barHealth')
let snakePic = document.getElementById('snakeImg')


const maxPixelsConst = 145
let pixelsHung = maxPixelsConst
let pixelsHappy = maxPixelsConst
let pixelsClean = maxPixelsConst
happynes.style.backgroundColor = 'green';
hunger.style.backgroundColor = 'green';
cleanliness.style.backgroundColor = 'green';

    // setup()

let lower = setInterval(lowerTheBars, 500)

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
    pixelsHappy -= 15
    pixelsHung -= 10
    pixelsClean -= 12
 
    
    happynes.style.width = "" + pixelsHappy + "px";
    hunger.style.width = "" + pixelsHung + "px";
    cleanliness.style.width = "" + pixelsClean + "px";

    if(pixelsHappy < 80 && pixelsHappy > 0){
        happynes.style.backgroundColor = 'red';
        changePic('sad')
    } 
    else if(pixelsHappy >= 80){
        happynes.style.backgroundColor = 'green';
    } 
    else {
        happynes.style.width = '1px';
        gameOver();
        changePic('death')
    }

    if (pixelsHung < 80 && pixelsHung > 0){
        hunger.style.backgroundColor = 'red';
        changePic('hungry');
    }
    else if(pixelsHung >= 80){
        hunger.style.backgroundColor  = 'green'
    }
    else{
        hunger.style.width = '1px'
        gameOver()
    }

    if(pixelsClean < 80 && pixelsClean > 0){
        cleanliness.style.backgroundColor = 'red'
        changePic('dirty')
    } 
    else if(pixelsClean >= 80){
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


