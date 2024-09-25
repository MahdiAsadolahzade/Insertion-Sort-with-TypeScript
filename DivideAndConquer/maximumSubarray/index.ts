// find Maximum Subarray 

function maxCrossingSum(arr: number[], left: number, mid: number, right: number): number {  
    let sum = 0;  
    let leftSum = Number.NEGATIVE_INFINITY;   

    for (let i = mid; i >= left; i--) {  
        sum += arr[i];  
        if (sum > leftSum) {  
            leftSum = sum;  
        }  
    }  

    sum = 0;  
    let rightSum = Number.NEGATIVE_INFINITY;  

    for (let i = mid + 1; i <= right; i++) {  
        sum += arr[i];  
        if (sum > rightSum) {  
            rightSum = sum;  
        }  
    }  

    return leftSum + rightSum;  
}  

function maxSubArray(arr: number[], left: number, right: number): number {  
    if (left === right) {  
        return arr[left];  
    }  

    const mid = Math.floor((left + right) / 2);  

    const leftMax = maxSubArray(arr, left, mid);  
    const rightMax = maxSubArray(arr, mid + 1, right);  
    const crossMax = maxCrossingSum(arr, left, mid, right);  

    return Math.max(leftMax, rightMax, crossMax);  
}  

const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; // Example array  
const maxSum = maxSubArray(array, 0, array.length - 1);  
console.log(maxSum); // Output the maximum subarray sum