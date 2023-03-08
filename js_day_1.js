/**
 * Nama : Shafa' Tiara Tsabita Himawan
 *  Try create a book purchasing function that has parameters detail of 
    a book, percentage of the discount, percentage of tax. 
    Then display all the parameters with additional data:
    Amount of discount
    Price after discount
    Amount of tax
    Price after tax
Note:
The function must have at least:
Constant variable
Boolean, number, string variable
Assignment, addition, addition, subtraction, multiplication, division operator
 */

function bookPurchasing (book, discount, tax) { 
    let result = 0; 
    if (book && book.price) {
        const price = book.price; 
        const totalDiscount = (price * discount/100); 
        const priceAfterDiscount = price - totalDiscount; 
        const totalTax  = priceAfterDiscount * (tax/100); 
        const priceAfterTax = priceAfterDiscount + totalTax;

        console.log('Original Price         : ', price); 
        console.log('Amount of Discount     : ', totalDiscount); 
        console.log('Price After Discount   : ', priceAfterDiscount);
        console.log('Amount of Tax          : ', totalTax); 
        console.log('Price After Tax        : ', priceAfterTax); 
    }
    return result;
}

bookPurchasing({title: 'Buku Novel', price:300000}, 5, 10);