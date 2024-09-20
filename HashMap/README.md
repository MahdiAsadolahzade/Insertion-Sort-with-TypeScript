# Hash Map

## Structure 

`Keys and Values`:
In a hash map, data is stored as key-value pairs. Each unique key maps to a specific value.

`Hash Function` :
A hash function takes a key and computes an index (hash code) in an array where the corresponding value will be stored. The goal is to distribute keys uniformly across the array to minimize collisions.

`Buckets` :
The underlying storage of a hash map is typically an array where each position is called a bucket. Each bucket can store one or more key-value pairs.

`Handling Collisions` : 
Since different keys can produce the same hash code (leading to the same bucket), hash maps must handle these collisions. Common collision resolution strategies include:

- `Chaining`: Each bucket contains a linked list (or another data structure) of key-value pairs. When a collision occurs, the new key-value pair is added to the list.

- `Open Addressing`: When a collision occurs, the hash map probes other buckets (using methods like linear probing, quadratic probing, or double hashing) to find an empty slot.

`Load Factor` : 
This is the ratio of the number of stored entries to the number of buckets. A high load factor increases the chance of collisions, so hash maps typically resize (increase the number of buckets) when the load factor exceeds a certain threshold.

## Implementing a Hash Map from Scratch

code [here](Base/hashMap.ts)

## Real World Challenges with Hash map 

### First Non-Repeating Character
Given a string, find the first non-repeating character and return its index. If it doesn't exist, return -1. This problem is often encountered in text processing, like in search engines or spell-checking systems.

code [here](Problems/FirstNonRepeatingCharacter.ts)