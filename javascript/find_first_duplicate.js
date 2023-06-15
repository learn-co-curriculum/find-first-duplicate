// Objective: Find the first dublicate in the array and return it's value. If there are no duplicates return -1 


function findFirstDuplicate(arr) {
  // initialize a new set to store unique elements 
  const set = new Set();

  // iterate through each element in the array
  for (let i = 0; i < arr.length; i++) {
    // If the set already contains the current element, return the current element
    const current = arr[i];

    // IF uniqueSET HAS array[i] RETURN array[i]
    if (set.has(current)) {
      return current;
    }

    //END IF

    // Else/IF NOT, add the curren element to the set
    set.add(current);
    //END FOR
  }

  // return -1 if no duplicates are found
  return -1;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", findFirstDuplicate([1, 1, 2, 3, 4]));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4, 1]));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4, 1, 2, 3, 4]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([5, 6, 7, 8, 9, 10]));

}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution

