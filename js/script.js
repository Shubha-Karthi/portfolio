const roles = [

    "Software Developer",

    "Python Developer",

    "AI Enthusiast",

    "IoT Engineer"

];

let roleIndex = 0;

const typingText = document.getElementById("typing-text");

function changeRole(){

    typingText.textContent = roles[roleIndex];

    roleIndex++;

    if(roleIndex >= roles.length){

        roleIndex = 0;

    }

}

changeRole();

setInterval(changeRole,2000);