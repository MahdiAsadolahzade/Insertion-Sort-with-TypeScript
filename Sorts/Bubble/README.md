# Bubble Sort
## Base Bubble Sort
implement basic code of Bubble sort


### :book: Info

randomly exchanges the naighbors in array to get sort

time Complexity
$ O(n) = n^2$
- :link:  code [here](Base/bubbleSort.ts)

## Real World Problems and Examples

### Product Rating System

**Scenario**:
You’re building a product rating system for an e-commerce platform. Customers rate products, and the platform stores both the rating and the number of reviews for each product. The system needs to:

Sort products by rating (highest first).
If two products have the same rating, sort by the number of reviews (highest first).
The list should be sorted using Bubble Sort, and once sorted, customers should be able to search for products by name using Binary Search.

**Requirements**:
You must implement Bubble Sort for the sorting part.
Use Binary Search to allow customers to search for a product by name.
Bonus: Optimize the search by adding a Linear Search fallback in case of multiple products with the same name.

- :link:  code [here](Problems/productRatingSystemProblem.ts)