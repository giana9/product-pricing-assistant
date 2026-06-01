// Variables
let productName = "Product X";
let costPerUnit = 11;
let basePrice = 20;
let discountRate = .1;
let salesTaxRate = .07;
let fixedMonthlyCosts = 1500;

// Calculations
let discountedPrice = basePrice * (1 - discountRate);
let finalPriceWithTax = discountedPrice * (1 + salesTaxRate);
let profitPerUnit = finalPriceWithTax - costPerUnit;
let breakEvenUnits = Math.ceil(fixedMonthlyCosts / profitPerUnit);
let isProfitablePerUnit = profitPerUnit > 0;

// Output
console.log("Product Name:", productName);
console.log("Discounted Price (Before Tax):", discountedPrice.toFixed(2));
console.log("Final Price With Tax:", finalPriceWithTax.toFixed(2));
console.log("Profit Per Unit:", profitPerUnit.toFixed(2));
console.log("Break-Even Units:", breakEvenUnits);
console.log("Per-Unit Profitability:", isProfitablePerUnit);