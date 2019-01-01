var minion1 = document.getElementById('minion1');
var minion2 = document.getElementById('minion2');
var minion3 = document.getElementById('minion3');
var minion4 = document.getElementById('minion4');
var minion5 = document.getElementById('minion5');
var minion = 0 ;
var result = 0;
var level = 1;
var i = 0;

function howMuchMouse(){

     for(var i = 0; i > n; i++){
         minion = document.getElementById()
     } 

}

function startGame(){
    document.getElementById('startBlock').style.display = 'none';
    document.getElementById('gameHover').style.display = 'none';

    document.getElementById('currentScore').style.display = 'block';
    document.getElementById('currentScore').innerHTML = 0;
    init();
}

function init(){
    level = 1;
    result = 0;
    growMinion();
}

function growMinion(){
    var myTimer = setTimeout(function(){
        
        if(minion1.offsetHeight > 500 ||
             minion2.offsetHeight > 500 ||
                minion3.offsetHeight > 500 ||
                    minion4.offsetHeight > 500 ||
                        minion5.offsetHeight > 500){
            gameOver();
            return false;
        }
        
        minion1.style.height = minion1.offsetHeight + 10 +'px';
        minion2.style.height = minion2.offsetHeight + 10 +'px';
        minion3.style.height = minion3.offsetHeight + 10 +'px';
        minion4.style.height = minion4.offsetHeight + 10 +'px';
        minion5.style.height = minion5.offsetHeight + 10 +'px';
        growMinion();
    }, 400/level);
}

function smashMinion(goblin){
    document.getElementById(goblin).style.height = 100 + 'px';
    result += 1;

    if(result % 10 === 0){
        levelUp();
    }
    
    document.getElementById('currentScore').innerHTML = result;
}

function levelUp(){
    level++;
    document.getElementById('levelUp').style.display = 'block';
    document.getElementById('levelUp').innerHTML = 'Level up' + level;

    setTimeout(function(){
        document.getElementById('levelUp').style.display = 'none';
    }, 300)
}

function gameOver (){

    minion1.style.height = minion2.style.height = minion3.style.height = minion4.style.height = minion5.style.height = '100px';

    document.getElementById('gameHover').style.display = 'block';
    document.getElementById('gameoverBlock').style.display = 'block';
    document.getElementById('result').innerHTML = result;

    result = 0;
}

function restartGame(){

    document.getElementById('gameHover').style.display = 'none';
    document.getElementById('gameoverBlock').style.display = 'none';
    init();

}
