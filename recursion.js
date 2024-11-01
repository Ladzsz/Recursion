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