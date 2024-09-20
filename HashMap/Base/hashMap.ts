// Define the type for a key-value pair

type Entry<K, V> = {
  key: K;
  value: V;
};

// HashMap Class

class HashMap<K, V> {
  private buckets: Array<Entry<K, V>[]>;
  private capacity: number;
  private sizeCount: number;
  private loadFactor: number;

  constructor(initialCapacity: number = 16, loadFactor: number = 0.75) {
    this.capacity = initialCapacity;
    this.loadFactor = loadFactor;
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
    this.sizeCount = 0;
  }

  // Simple hash function for demonstration (not suitable for production)
  private hash(key: K): number {
    let hashValue = 0;
    const keyString = String(key);
    for (let i = 0; i < keyString.length; i++) {
      hashValue += keyString.charCodeAt(i);
    }
    return hashValue % this.capacity;
  }

  // Resize the buckets array when load factor is exceeded

  private resize() {
    const oldBuckets = this.buckets;
    this.capacity *= 2;
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
    this.sizeCount = 0;

    for (const bucket of oldBuckets) {
      for (const entry of bucket) {
        this.set(entry.key, entry.value);
      }
    }
  }

  // Set a key-value pair

  set(key: K, value: V): void {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    // Check if key already exists and update
    for (const entry of bucket) {
      if (entry.key === key) {
        entry.value = value;
        return;
      }
    }

    // If key does not exist, add new entry

    bucket.push({ key, value });
    this.sizeCount++;

    // Check load factor

    if (this.sizeCount / this.capacity > this.loadFactor) {
      this.resize();
    }
  }

  // Get the value for a key

  get(key: K): V | undefined {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (const entry of bucket) {
      if (entry.key === key) {
        return entry.value;
      }
    }

    return undefined;
  }

  // Check if a key exists

  has(key: K): boolean {
    return this.get(key) !== undefined;
  }

  // Delete a key-value pair
  delete(key: K): boolean {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        bucket.splice(i, 1);
        this.sizeCount--;
        return true;
      }
    }

    return false; // Key not found
  }

  // Get all keys
  keys(): K[] {
    const keysArray: K[] = [];
    for (const bucket of this.buckets) {
      for (const entry of bucket) {
        keysArray.push(entry.key);
      }
    }
    return keysArray;
  }

  // Get all values
  values(): V[] {
    const valuesArray: V[] = [];
    for (const bucket of this.buckets) {
      for (const entry of bucket) {
        valuesArray.push(entry.value);
      }
    }
    return valuesArray;
  }

  // Get the number of key-value pairs
  size(): number {
    return this.sizeCount;
  }

  // Clear the hash map
  clear(): void {
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
    this.sizeCount = 0;
  }
}


//--------------------------------------------

// Create a new HashMap instance
const map = new HashMap<string, number>();

// Insert key-value pairs
map.set("apple", 1);
map.set("banana", 2);
map.set("orange", 3);

// Retrieve values
console.log(map.get("apple"));   // Output: 1
console.log(map.get("banana"));  // Output: 2
console.log(map.get("grape"));   // Output: undefined (key not found)

// Check existence of keys
console.log(map.has("orange"));  // Output: true
console.log(map.has("grape"));   // Output: false

// Update a value
map.set("banana", 20);
console.log(map.get("banana"));  // Output: 20

// Delete a key-value pair
console.log(map.delete("apple")); // Output: true
console.log(map.get("apple"));    // Output: undefined

// Get all keys
console.log(map.keys()); // Output: ['banana', 'orange']

// Get all values
console.log(map.values()); // Output: [20, 3]

// Get the size of the map
console.log(map.size()); // Output: 2

// Clear the map
map.clear();
console.log(map.size()); // Output: 0
