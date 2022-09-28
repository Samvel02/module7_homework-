const products = {
    bread: 55,
    apple: 60,
    meat: 320
}

const productsDairy = Object.create(products)
productsDairy.milk = 75;
productsDairy.iceCream = 90;
productsDairy.oil = 115;

for(let key in productsDairy) {
    if(productsDairy.hasOwnProperty(key)) {
        alert(key);
    }
}

alert(productsDairy);