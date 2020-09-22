//Event listeners
document.getElementById('calcBtn').addEventListener('click', getVal)

//Functions
function getVal() {
    //Input
    let side1 = +document.getElementById('aInput').value;
    let side2 = +document.getElementById('bInput').value;
    let side3 = +document.getElementById('cInput').value;

    //Process
    heronsFormula(side1, side2, side3);
}

function heronsFormula(a, b, c) {
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    //output
    document.getElementById('output').innerHTML = area;
}