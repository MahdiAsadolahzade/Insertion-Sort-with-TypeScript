class PaginationHelper {
  private array: string[];
  private itemsPerPage: number;

  constructor(array: string[], itemsPerPage: number) {
    this.array = array;
    this.itemsPerPage = itemsPerPage;
  }

  // Returns the total number of pages
  pageCount(): number {
    return Math.ceil(this.array.length / this.itemsPerPage);
  }

  // Returns the total number of items
  itemCount(): number {
    return this.array.length;
  }

  // Returns the number of items on the given pageIndex (page 0 is the first page)
  // Returns -1 for out-of-bounds pages
  pageItemCount(pageIndex: number): number {
    if (pageIndex < 0 || pageIndex >= this.pageCount()) {
      return -1; // Invalid page index
    }
    
    if (pageIndex === this.pageCount() - 1) {
      // Last page, possibly with fewer items
      return this.array.length % this.itemsPerPage || this.itemsPerPage;
    }

    return this.itemsPerPage; // All other pages are full
  }

  // Returns the page index where the given itemIndex is located
  // Returns -1 for out-of-bounds itemIndex
  pageIndex(itemIndex: number): number {
    if (itemIndex < 0 || itemIndex >= this.array.length) {
      return -1; // Invalid item index
    }

    return Math.floor(itemIndex / this.itemsPerPage);
  }
}

const helper = new PaginationHelper(["a", "b", "c", "d", "e", "f", "g", "h", "i"], 4);
console.log(helper.pageCount());       // Output: 3 (since there are 9 items and 4 items per page)
console.log(helper.itemCount());       // Output: 9
console.log(helper.pageItemCount(0));  // Output: 4 (first page has 4 items)
console.log(helper.pageItemCount(1));  // Output: 4 (second page also has 4 items)
console.log(helper.pageItemCount(2));  // Output: 1 (third page has 1 item left)
console.log(helper.pageItemCount(3));  // Output: -1 (pageIndex out of range)
console.log(helper.pageIndex(5));      // Output: 1 (item at index 5 is on the second page)
console.log(helper.pageIndex(10));     // Output: -1 (itemIndex out of range)
