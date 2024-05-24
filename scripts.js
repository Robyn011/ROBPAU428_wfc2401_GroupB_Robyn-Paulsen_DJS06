// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// Scenario 1:
// Log each name
names.forEach(name => {
  console.log(name);
});
// Log each province
provinces.forEach(province => {
  console.log(province);
});
// Log each name with a matching province
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});


//Scenario 2:
// Create a new array of province names in all uppercase
const provincesUppercase = provinces.map(province => province.toUpperCase());
// Log the new array to the console
console.log(provincesUppercase);


//Scenario 3:
// Create a new array that contains the length of each name
const namesLength = names.map(name => name.length);
// Log the new array to the console
console.log(namesLength);

//Scenario 4:
// Sort the provinces alphabetically
const alphabeticalProvinces = provinces.sort();
// Log the sorted array to the console
console.log(alphabeticalProvinces);

//Scenario 5:
// Filter out provinces containing "Cape"
const filteredProvinces = provinces.filter(province => !province.includes('Cape'));
// Log the count of remaining provinces
console.log(filteredProvinces.length);

//Scenario 6:
// Create a boolean array to determine if a name contains the letter 'S' (case insensitive)
const containsS = names.map(name => name.toLowerCase().includes('s'));
// Log the boolean array to the console
console.log(containsS);


//Scenario 7:
// Use the reduce method on the names array to transform it into an object mapping names to their respective provinces
const namesToProvinces = names.reduce((acc, name, index) => {
  // For each name, add a key-value pair to the accumulator object
  // The key is the name and the value is the corresponding province from the provinces array
  acc[name] = provinces[index];
  //acc (short for accumulator) is the object that accumulates the results
  //index is the index of the current element in the names array.
  // Return the accumulator object to be used in the next iteration
  return acc;
// Initialize the accumulator as an empty object
}, {});
// Log the resulting object to the console
console.log(namesToProvinces);

//Advance Scenarios:

//Scenario 1:
for (const product of products) {
  console.log(product.product);
}

//Scenario 2:
const filteredProducts = products.filter(product => product.product.length <= 5);

for (const product of filteredProducts) {
  console.log(product.product);
}

//Scenario 3:
// We're going to filter out products that don't have prices and convert the prices of the remaining 
//products from text to numbers.
// Create a new list called 'productsWithPrices' to store products that have prices.
const productsWithPrices = products.filter(product => {
  // Check if each product has a price and if it can be converted into a number.
  return product.price !== '' && !isNaN(parseFloat(product.price));
});
// Calculate the total price of all products that have prices.
// Initialize a variable called 'totalPrice' to store the sum of all product prices.
const totalPrice = productsWithPrices.reduce((total, product) => {
  // For each product, add its price to the total.
  return total + parseFloat(product.price);
}, 0);
// Print out the products that have prices.
// Print a message to indicate that we're listing products with prices.
console.log("Products with prices:");
// Loop through each product in the 'productsWithPrices' list.
for (const product of productsWithPrices) {
  // Print the name of each product.
  console.log(product.product);
}
// Print out the total price of all products with prices.
// Print a message to indicate that we're displaying the total price.
console.log("Total Price:", totalPrice);


//Scenario 4:
// Use reduce to concatenate all product names into a single string
const allProductNames = products.reduce((accumulator, currentProduct) => {
  // Concatenate the current product name to the accumulator string with a comma
  if (accumulator !== '') {
    accumulator += ', '; // Add a comma and space if accumulator is not empty
  }
  accumulator += currentProduct.product; // Add the current product name
  return accumulator;
}, '');
console.log("All Product Names:", allProductNames);


//Scenario 5:
// Filter out products with empty prices
const productsHavePrices = products.filter(product => product.price !== '');

//console.log(productsHavePrices); // Check if productsHavePrices is correctly populated

// Find the highest and lowest-priced items among products with prices
const highestPriceItem = productsHavePrices.reduce((prev, current) => {
  return parseFloat(prev.price) > parseFloat(current.price) ? prev : current;
});

const lowestPriceItem = productsHavePrices.reduce((prev, current) => {
  return parseFloat(prev.price) < parseFloat(current.price) ? prev : current;
});

// Format the result string
const resultString = `Highest: ${highestPriceItem.product}. Lowest: ${lowestPriceItem.product}.`;

console.log(resultString);



//Scenario 6:
// Recreate the products object with keys 'name' and 'cost'
const recreatedProducts = Object.entries(products).reduce((acc, [key, value]) => {
  // For each entry in the original products object, create a new object with 'name' and 'cost' keys
  const { product, price } = value; // Destructure the value object to get 'product' and 'price'
  acc[key] = { name: product, cost: price }; // Assign 'name' and 'cost' keys to the new object
  return acc;
}, {});

console.log(recreatedProducts);