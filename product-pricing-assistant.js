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