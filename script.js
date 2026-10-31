let player = document.getElementById("player");
let message = document.getElementById("message");

let scene = document.getElementById("scene");
let sceneText = document.getElementById("sceneText");

player.addEventListener("play", playerStarted);
player.addEventListener("timeupdate", playerProgressed);
player.addEventListener("pause", playerPaused);
player.addEventListener("ended", playerEnded);

let play = document.getElementById("play");
let pause = document.getElementById("pause");
let restart = document.getElementById("restart");

play.addEventListener("click", playAudio);
pause.addEventListener("click", pauseAudio);
restart.addEventListener("click", restartAudio);

function playerStarted() {
    message.innerHTML = "The journey is playing!";
}

function playerProgressed(e) {

    let minutes = Math.floor(player.currentTime / 60);
    let seconds = Math.floor(player.currentTime) - minutes * 60;

    message.innerHTML = "The journey is playing at " +
        minutes + ":" + seconds;

    if (player.currentTime < 5) {
        scene.src = "images/home.jpg";
        sceneText.innerHTML = "The journey begins with the familiar sounds of my neighbourhoods and passing traffic. At the crossing, the traffic signal beeps, waiting patiently to make your way to the subway.";
    }

    else if (player.currentTime < 10) {
        scene.src = "images/mtr.jpg";
        sceneText.innerHTML = "I rush towards the MTR subway station as the sound of an announcement echoes through the platform, signalling that the train is arriving.";
    }

    else if (player.currentTime < 20) {
        scene.src = "images/disneyMtr.jpg";
        sceneText.innerHTML = "I transfer onto the Disney themed train, surrounded by cheerful chatter and laughter, as the excitement builds for a magical day ahead!";
    }

    else if (player.currentTime < 37) {
        scene.src = "images/parade.jpg";
        sceneText.innerHTML = "As I step into Disneyland, cheerful music fills the air and a lively parade welcomes me, where I get to interact with my favourite Disney characters.";
    }

    else if (player.currentTime < 49) {
        scene.src = "images/rollerCoaster.jpg";
        sceneText.innerHTML = "As I walk into the heart of the park, there is the most exciting roller coaster in the whole park, and it's time for an exciting roller coaster ride filled with thrills and screams!";
    }

    else if (player.currentTime < 66) {
        scene.src = "images/attraction.jpg";
        sceneText.innerHTML = "After the thrilling roller coaster ride, I take a break at another attraction, where colourful clock towers play cheerful songs in different languages.";
    }

    else {
        scene.src = "images/fireworks.jpg";
        sceneText.innerHTML = "As night falls, colourful fireworks light up the sky with magical music, bringing my journey to a beautiful end at my favourite place in my home country, Hong Kong Disneyland.";
    }
}

function playerPaused() {
    message.innerHTML = "The journey is paused.";
}

function playerEnded() {
    message.innerHTML = "Thank you for joining my Disneyland journey!";
}

function playAudio() {
    player.play();
}
function pauseAudio() {
    player.pause();
}

function restartAudio() {
    player.currentTime = 0;
    player.play();
}