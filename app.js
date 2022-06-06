/*  
 *  @author : Rohit Vishwakarma  
 *  @email : rv021561@gmail.com
 */


/* get the objects */

const buttonRoll = document.querySelector('#roll');
const buttonReset = document.querySelector('#reset');
const die = document.querySelector('#die');  

let curr_roll = document.querySelector('#current_roll');
let score_board = document.querySelector('#total_score'); 

buttonRoll.addEventListener('click', function(e){   

    die.classList.add('rolled');
    console.log(die.classList);
    
    setTimeout(function() {
        die.classList.remove('rolled');

        let dieValue = Math.floor(Math.random() * 6) + 1;
        curr_roll.textContent = `${dieValue}`; 
        let curr_score = parseInt(score_board.textContent.substring(8)); 
        console.log(curr_score);
        score_board.textContent = `Score : ${curr_score + dieValue}`;
        die.setAttribute('src', `images/${dieValue}.png`)
    },200);
    let dieSound = new Audio("dice.wav");
    dieSound.play();

});


// reset the value to 1 and score to 0.

buttonReset.addEventListener('click', function(e) {
    die.classList.add('rolled');
    console.log(die.classList);
    setTimeout(function() {
        die.classList.remove('rolled');
        curr_roll.textContent = `${1}`;      
        score_board.textContent = `Score : 0`;
        die.setAttribute('src', `images/1.png`)
    },200);  

}); 
