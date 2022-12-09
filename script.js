function add(a, b) {
    return a + b;;
}
function substract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

const total = document.querySelector('.total');
const subtotal = document.querySelector('.subtotal');
let var1 = 0;
let var2 = 0;
let varop = '';
let vartotal = 0;

function operate() {
    var2 = Number(total.value);

    if (varop == '+') vartotal = add(var1, var2);
    if (varop == '-') vartotal = substract(var1, var2);
    if (varop == '*') vartotal = multiply(var1, var2);
    if (varop == '/') vartotal = divide(var1, var2);


    let prev = subtotal.value;
    printToDisplay('subtotal', prev + var2)
    printToDisplay('total', vartotal)
    var1 = vartotal;
    varop = '';
    var2 = 0;
}

function number(a) {
    let prev = total.value;
    printToDisplay('total', `${prev}${a}`);
}

function cls() {
    printToDisplay('total', '');
}

function operator(op) {
    var1 = Number(total.value);
    varop = op;
    printToDisplay('subtotal', `${var1}${op}`)
    cls();
}

function printToDisplay(display, toPrint) {
    const tmp = document.querySelector('.' + display);
    tmp.value = toPrint
}