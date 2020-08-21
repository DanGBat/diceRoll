
//! FUNCTION TO ANIMATE DICE
function rotateDiceAnimation() {
    document.getElementById("leftDice").src ="images/animate/spin1.png";
    document.getElementById("rightDice").src ="images/animate/spin3.png";
}

//! FUNCTION TO CHOOSE A RANDOM NUMBER BETWEEN 1-6 AND ADD IT TO THE END OF THE PNG FILE NAME
function throwDice() {
    setTimeout(function(){
        let randomLeftDice = Math.floor(Math.random()*5) +1;
        let randomRightDice = Math.floor(Math.random()*5) +1;

        document.getElementById("leftDice").src ="images/dice/dice" + randomLeftDice + ".png";
        document.getElementById("rightDice").src ="images/dice/dice" + randomRightDice + ".png";

        let totalOfDice = randomLeftDice + randomRightDice;

        document.getElementById("userMessage").innerHTML = (`YOU ROLLED A TOTAL OF ${totalOfDice}`);
    }, 250);
}

//! FUNCTION TO PLAY THE DICE ROLL SOUND WHEN CALLED
function playDiceRoll(path) {
    new Audio(path).play();
}


// function showSlides() {
//     var imageIndex = 0;
//     var i;
//     var image = document.getElementsByClassName("leftDice");
//         for (i = 0; i < image.length; i++) {
//             image[i].style.display = "none"; 
//         }
//         imageIndex++;
//         if (imageIndex > image.length) {imageIndex = 1} 
//         image[imageIndex-1].style.display = "block"; 
//         setTimeout(showSlides, 500); // Change image every '?' seconds
// }

// function animateDice() {
//     document.getElementById("leftDice").src ="images/spinningDice.png";
//     document.getElementById("rightDice").src ="images/spinningDice.png";
// }

// function animateDice() {
//     var animateLeftDice = document.getElementById('leftDice');  
//     var imageDir = "images/animate/";                                                     

//     var images = ['spin1.png', 'spin2.png', 'spin3.png'];

//     var num = 0;
//     var changeImage = function() {
//         var len = images.length;
//         rotator.src = imageDir + images[num++];
//         if (num == len) {
//             num = 0;
//         }
//     };
//     setInterval(changeImage, 1000);
// };


// function animateDice(){
//     let i = 0
//         document.getElementById('leftDice').src = images[i].src
//     if (i<2)
//         i++
//     else
//         i=0
//     //call function "slideit()" every 2.5 seconds
//     setTimeout("slideit()",0.200)
// }


// function animateDice() {
//     let aniImages = 'images/animate/';
//     for(let i = 0; i < aniImages.length; i++) {
//         document.getElementById('leftDice').src = "images/animate/spin" + i + ".png";
//     }
//     else
// }

