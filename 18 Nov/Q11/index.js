
function processProducts(products) {
    const productNames = products.map(product => product.name);

    console.log("--- Price Analysis Log ---");
    products.forEach(product => {
        const threshold = 50;
        if (product.price > threshold) {
            console.log(`${product.name} is above $${threshold}`);
        } else {
            console.log(`${product.name} is below or equal to $${threshold}`);
        }
    });
    console.log("--------------------------");

    return productNames;
}
const inputProducts = [
    { name: "Laptop", price: 1000 }, 
    { name: "Mouse", price: 20 },
    { name: "Keyboard", price: 65 },
    { name: "Monitor", price: 49.99 }
];

const namesArray = processProducts(inputProducts);

console.log("Generated Array of Names (from map()):", namesArray);
