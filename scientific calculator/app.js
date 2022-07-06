var input;

function value1() {
    var value = 1;
    display(value)
}
function value2() {
    var value = 2;
    display(value)
}
function value3() {
    var value = 3;
    display(value)
}
function value4() {
    var value = 4;
    display(value)
}
function value5() {
    var value = 5;
    display(value)
}
function value6() {
    var value = 6;
    display(value)
}
function value7() {
    var value = 7;
    display(value)

}
function value8() {
    var value = 8;
    display(value)
}
function value9() {
    var value = 9;
    display(value)
}
function minus() {
    var value = "-";
    display(value)
}
function divide() {
    var value = "/";
    display(value)
}
function multiply() {
    var value = "*";
    display(value)
}
function dot() {
    var value = ".";
    display(value)
}
function equal() {
    var value = "=";
    display(value)
}
function plus() {
    var value = "+";
    display(value)
}
function value0() {
    var value = 0;
    display(value)
}
function value00() {
    var value = 00;
    display(value)
}
function cooma() {
    var value = document.getElementById("display");
    value = value.innerText;
    document.getElementById("display").innerText = Math.cooma(value);
}
function on() {
    var value = document.getElementById("display");
    value = value.innerText;
    document.getElementById("display").innerText = "Hello press DEL and use:";
}
function root() {
    var value = document.getElementById("display");
    value = value.innerText;
    document.getElementById("display").innerText = Math.root(value);
}
function abc() {
    var value = document.getElementById("display");
    value = value.innerText;
    document.getElementById("display").innerText = Math.abc(value);
}
function log() {
    var value = document.getElementById("display");
    value = value.innerText;
    document.getElementById("display").innerText = Math.log(value);
}
function del() {
    var value = document.getElementById("display");
    value = value.innerText;
    document.getElementById("display").innerText = "";
}
function sin() {
    var value = document.getElementById("display");
    value = value.innerText;
    document.getElementById("display").innerText = Math.sin(value);
}
function cos() {
    var value = document.getElementById("display");
    value = value.innerText;
    document.getElementById("display").innerText = Math.cos(value);
}
function tan() {
    var value = document.getElementById("display");
    value = value.innerText;
    document.getElementById("display").innerText = Math.tan(value);
}

function display(v) {
    if (v === "=") {
        input = document.getElementById("display");
        var data = input.innerText;
        var total = eval(data);
        document.getElementById("display").innerText = total;
    }
    else {
        document.getElementById("display").innerText += v;
    }
}



// function tanFn(){
//     var value = document.getElementById("screen");
//     value = value.innerText
//     document.getElementById("screen").innerText = Math.tan(value);
// }