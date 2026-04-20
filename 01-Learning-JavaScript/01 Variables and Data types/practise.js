"use strict";

// ==============================
// Product Object
// ==============================
const product = {
  name: "Parker Jotter Pen",
  color: "Black",
  price: 270,
  offerPercentage: 5,

  // Method to calculate discounted price
  getDiscountedPrice() {
    return this.price - (this.price * this.offerPercentage) / 100;
  }
};

console.log("Product Details:", product);
console.log("Type of product:", typeof product);

// Display discounted price
console.log("Discounted Price:", product.getDiscountedPrice());


// ==============================
// String vs Number Example
// ==============================
const a = "1";
const b = "44";

// String concatenation
console.log("String addition:", a + b); // "144"

// Convert to numbers (Best Practice)
const numA = Number(a);
const numB = Number(b);

console.log("Numeric addition:", numA + numB); // 45
