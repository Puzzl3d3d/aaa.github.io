var generateButton = document.getElementById("generate")

function generate() {
    let row = Math.Round(Math.Random()*7)/7
    let col = "A" // Temporary

    let square = col+row

    generateButton.innerText = square
}
