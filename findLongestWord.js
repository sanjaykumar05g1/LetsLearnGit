// Javascript program to search largest word from a string

function longest(str) {

    // Split the string using regex
    str = str.match(/[a-zA-Z0-9]+/gi);
    // Creating a empty string to store largest word
    let largest = "";

    // Creating a for...loop to iterate over the array
    for (let i = 0; i < str.length; i++) {
    
        // If the i'th item is greater than largest string
        // then overwrite the largest string with the i'th value
        if (str[i].length > largest.length) {
            largest = str[i];
        }
    }
    return largest;
}

console.log(
    longest(
        "Hello guys this is geeksforgeeks where" +
            " students learn programming"
    )
);