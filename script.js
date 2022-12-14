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
let var1 = '';
let var2 = '';
let varop = '';

function operate() {
    if (varop !== '' & var1 !== '' & total.value !== '') {

        let vartotal = '';
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
        var2 = '';
    }
}

function number(a) {
    let prev = total.value;
    printToDisplay('total', `${prev}${a}`);
}

function period() {
    let prev = total.value;
    if (!(prev.includes('.'))) {
        printToDisplay('total', `${prev}.`);
    }
}

function backspace() {
    let prev = total.value;
    printToDisplay('total', prev.slice(0, -1))
}

function cls() {
    printToDisplay('total', '');
    printToDisplay('subtotal', '');
    var1 = '';
    varop = '';
    var2 = '';
}

function operator(op) {
    if (varop !== '' & var1 !== '' & total.value !== '') operate();
    if (varop === '') {
        var1 = Number(total.value);
    }
    varop = op;
    printToDisplay('subtotal', `${var1}${op}`)
    printToDisplay('total', '');
}

function printToDisplay(display, toPrint) {
    const tmp = document.querySelector('.' + display);
    tmp.value = toPrint
} 