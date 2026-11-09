let randomNumber;
function randomNum(){
    randomNumber = Math.floor(Math.random() * 10 + 1);
}

let attempts = 0;
if(attempts==0) randomNum();

function getRandomNumber() {
    console.log("Random Number : " + randomNumber);
    attempts++;
    if(attempts==3) {
        let guess = Number(document.getElementById("guessInput").value);
        console.log("Your Guess : " + guess);
        console.log("Attempts : " + attempts);

        if (guess === randomNumber) {
            Swal.fire({
                title: "Correct Guess!",
                text: "You clicked the button!",
                icon: "success"
            });
        } else {
            Swal.fire({
                title: "Wrong Guess!",
                text: "You clicked the button!",
                icon: "error"
            });
        }
        document.getElementById("guessInput").value = ""
        console.log("");
        //lordhistorytable();
    }
    let guess = Number(document.getElementById("guessInput").value);
}