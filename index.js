document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('shakeButton').addEventListener('click', function () {
        const userQuestion = document.getElementById("questionInput").value.trim();

        if (userQuestion === "") {
            alert("Please ask a question!");
            return;
        }

        const ballImage = document.querySelector('.imageContainer img');
        ballImage.classList.add('shaking');

        setTimeout(function () {
            ballImage.classList.remove('shaking');
            const randomNumber = Math.floor(Math.random() * 8);
            let eightBall = "";

            switch (randomNumber) {
                case 0:
                    eightBall = "It is certain";
                    break;
                case 1:
                    eightBall = "It is decidedly so";
                    break;
                case 2:
                    eightBall = "Reply hazy try again";
                    break;
                case 3:
                    eightBall = "Cannot predict now";
                    break;
                case 4:
                    eightBall = "Do not count on it";
                    break;
                case 5:
                    eightBall = "My sources say no";
                    break;
                case 6:
                    eightBall = "Outlook is not so good";
                    break;
                case 7:
                    eightBall = "Signs point to yes";
                    break;
            }

            // Display the result in the result container
            const resultContainer = document.getElementById('resultContainer');
            const resultText = document.getElementById('resultText');
            resultText.innerText = `${eightBall}`;

            // Show the result container
            resultContainer.classList.remove('hidden');
        }, 1500);
    });
});
