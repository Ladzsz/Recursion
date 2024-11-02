function fibs(num) {
    // Return an empty array if n is 0 or negative
    if (num <= 0) return [];       

    // Return [0] if n is 1
    if (num === 1) return [0];    

    // Starting elements of the sequence
    const sequence = [0, 1];   

    // Add the next number in the sequence
    for (let i = 2; i < num; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]); 
    }
    
    return sequence;
}

console.log(`Normal: ${fibs(8)}`);

function fibsRec(num) {
    //if statement to stop recursion
    if (num <= 0) {
        return [];
    } else if (num === 1) {
        return [0];
    } else if (num === 2) {
        return [0, 1];
    } else {
        
        // Get the sequence up to (num - 1)
        const sequence = fibsRec(num - 1); 

        // Calculate the next Fibonacci number
        const nextValue = sequence[sequence.length - 1] + sequence[sequence.length - 2]; 

        // Add the next Fibonacci number to the sequence
        sequence.push(nextValue); 
        return sequence;
    } 
}

console.log(`Recursive: ${fibsRec(8)}`);

//merge sort example

function mergeSort(array) {
  //making sure array has more then one element
  if (array.length <= 1) {
    return array;
  }

  //solitting the array into different parts
  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));

  //initalizing the sorted array and array indexes
  let sortedArray = [];
  let i = 0;
  let j = 0;

  //sorting and merging the arrays
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sortedArray.push(left[i]);
      i++;
    } else {
      sortedArray.push(right[j]);
      j++;
    }
  }

  //returning the sorted array
  return sortedArray.concat(left.slice(i)).concat(right.slice(j));
}

console.log(`Merge Sort: ${mergeSort([105, 79, 100, 110])}`)

console.log(`Merge Sort: ${mergeSort([3, 2, 1, 13, 8, 5, 0, 1])}`)