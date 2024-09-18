// Pagination Helper

class PaginationHelper {
  private array: string[];
  private number: number;
  public constructor(array: string[], number: number) {
    this.array = array;
    this.number = number;
  }

  public pageCount() {
    return Math.floor(this.array.length / this.number) + 1;
  }

  public itemCount() {
    return this.array.length;
  }

  public pageItemCount(pageIndex: number) {
    if (pageIndex +1 < this.pageCount()) {
      return this.number;
    } else if(pageIndex +1 === this.pageCount()){
      return Math.abs(this.array.length - this.number);
    }else{
        return 'X'
    }
  }

  public pageIndex(itemIndex: number) {
    return itemIndex % this.number;
  }
}

// const helper = new PaginationHelper(["a", "b", "c", "d", "e", "f"], 4);
// console.log(
//   helper.pageCount(),
//   helper.itemCount(),
//   helper.pageItemCount(0),
//   helper.pageItemCount(1),
//   helper.pageIndex(5)
// );


const helper = new PaginationHelper(["a", "b", "c", "d", "e", "f",'g','h','i',], 10);
console.log(
  helper.pageCount(),
  helper.itemCount(),
  helper.pageItemCount(0),
  helper.pageItemCount(1),
  helper.pageIndex(5)
);