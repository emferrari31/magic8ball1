document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('shakeButton').addEventListener('click', function () {
        //Get the user input
        const userQuestion = document.getElementById("questionInput").value.trim();

        if (userQuestion === "") {
            alert("Please ask a question!")
            return
        }


        const randomNumber = Math.floor(Math.random() * 8)
        let eightBall = ""

        switch (randomNumber) {
            case 0:
                eightBall = "It is certain"
                break
            case 1:
                eightBall = "It is decidedly so"
                break
            case 2:
                eightBall = "Reply hazy try again"
                break
            case 3:
                eightBall = "Cannot predict now"
                break
            case 4:
                eightBall = "Do not count on it"
                break
            case 5:
                eightBall = "My sources say no"
                break
            case 6:
                eightBall = "Outlook is not so good"
                break
            case 7:
                eightBall = "Signs point to yes"
        }

        alert(`You asked ${userQuestion}\nMagic 8-Ball says: ${eightBall}`)

    })
})

