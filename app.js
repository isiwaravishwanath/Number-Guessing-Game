let attempts = 0;
let randomNumber;

if (attempts == 0) randomNum();

function randomNum() {
    randomNumber = Math.floor(Math.random() * 10 + 1);
    console.log("Random Number : " + randomNumber);
}

function again() {
    document.getElementById("againButton")
    randomNum();
}


function getRandomNumber() {
    attempts++;
    if (attempts >= 3) {
        Swal.fire({
            title: "Your attempts are over!",
            text: "You clicked the button!",
            icon: "error"
        });
        attempts = 0;
        again();

    } else {
        let guess = Number(document.getElementById("guessInput").value);
        console.log("Your Guess : " + guess);
        console.log("Attempts : " + attempts);

        if (guess > randomNumber) {
            Swal.fire({
                title: "Your guessing is greater than the random number",
                text: "You clicked the button!",
                icon: "error"
            });
        } else if(guess<randomNumber) {
            Swal.fire({
                title: "Your guessing is less than the random number",
                text: "You clicked the button!",
                icon: "error"
            });
        }else{
            Swal.fire({
                title: "Correct Guess!",
                text: "You clicked the button!",
                icon: "success"
            });
        }

        document.getElementById("guessInput").value = ""
        console.log("");
    }
    let guess = Number(document.getElementById("guessInput").value);
}