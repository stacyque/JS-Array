// alerts!
function notnum(){
    alert('Error! Input is  not a number');
}

function empty(){
    alert('Error! Empty Field');
}

// get Inputs!
var product = "";
var price = 0;
var quantity = 0;
var inputCash = 0;
var total = 0;
var change = 0;

function getProduct() {
    product = document.getElementById('product').value;
}

function getPrice() {
    price = Number(document.getElementById('price').value);
}

function getQuantity() {
    quantity = Number(document.getElementById('quantity').value);
}

function getCash() {
    inputCash = Number(document.getElementById('inputCash').value);
}

// main Functions!
function getTotal() {
    getPrice();
    getQuantity();
    getProduct();
    if(isNaN(price) || isNaN(quantity)){
        notnum();
    }
    else if(price == "" || quantity == "" || product == ""){
        empty();
    }
    else{
        total = price * quantity;
        document.getElementById("total").innerHTML = total;
    }
   
    return false;
}



function save() {
    getCash();
    if (inputCash < total) {
        alert('Insufficient Funds!');
    }
    else if(inputCash == ""){
        empty();
    }
    else{
        change = inputCash - total;
        document.getElementById("productTxt").innerHTML = product;
        document.getElementById("priceTxt").innerHTML = price;
        document.getElementById("quantityTxt").innerHTML = quantity;
        document.getElementById("total2").innerHTML = total;
        document.getElementById("cash").innerHTML = inputCash;
        document.getElementById("change").innerHTML = change;
    }
}