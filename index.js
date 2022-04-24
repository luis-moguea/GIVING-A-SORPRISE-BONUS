function giveMoneyBack (cust, spending) {
    if (spending <= 0) {
        return false            
        } else if (spending >= 200000) {
        return `Congratulations ${cust}, you have won a $50000 giftcard for having spent ${spending} in our store products`   
        } else {
         return "Return the remaining money according to what was consumed by the customer"
        }            
}

console.log(giveMoneyBack("Claudia", 150000));
console.log(giveMoneyBack("Mayis", 230000));
console.log(giveMoneyBack("Luis", 0));