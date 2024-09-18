// Define the product interface
interface Product {
  name: string;
  rating: number;
  reviews: number;
}

// Bubble Sort to sort products by rating and reviews
const bubbleSortProducts = (products: Product[]): Product[] => {
  let swapped: boolean;
  const n = products.length;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      // Sort by rating (highest first)
      if (products[i].rating < products[i + 1].rating) {
        [products[i], products[i + 1]] = [products[i + 1], products[i]];
        swapped = true;
      }
      // If ratings are equal, sort by number of reviews (highest first)
      else if (
        products[i].rating === products[i + 1].rating &&
        products[i].reviews < products[i + 1].reviews
      ) {
        [products[i], products[i + 1]] = [products[i + 1], products[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return products;
};

// Binary Search to find a product by name
const binarySearchProduct = (
  products: Product[],
  productName: string
): number => {
  let low = 0;
  let high = products.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (products[mid].name.toLowerCase() === productName.toLowerCase()) {
      return mid; // Product found
    } else if (products[mid].name.toLowerCase() < productName.toLowerCase()) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1; // Product not found
};

// Example usage with an array of products
const products: Product[] = [
  { name: "Phone", rating: 4.5, reviews: 120 },
  { name: "Laptop", rating: 4.8, reviews: 89 },
  { name: "Headphones", rating: 4.5, reviews: 150 },
  { name: "Smartwatch", rating: 4.8, reviews: 200 },
  { name: "Tablet", rating: 4.0, reviews: 50 },
];

// Sort the products
const sortedProducts = bubbleSortProducts(products);
console.log("Sorted Products by rating and reviews:");
console.log(sortedProducts);

// Searching for a product
const searchProduct = "Phone";
const index = binarySearchProduct(sortedProducts, searchProduct);

if (index !== -1) {
  console.log(`Found product ${searchProduct}:`, sortedProducts[index]);
} else {
  console.log(`Product ${searchProduct} not found.`);
}
