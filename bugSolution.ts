function greeter(person: string): string {
  return "Hello, "+ person;
}

let user = ["Jane", "Doe"];

//Solution 1: Accessing array element
console.log(greeter(user[0])); // Accessing the first element of the array

//Solution 2: Using array.join()
console.log(greeter(user.join(" "))); // Joining array elements into a single string

//Solution 3: Type Assertion (Use with caution)
console.log(greeter(user as unknown as string)); //This is unsafe. Only use if you are absolutely sure the array is a string.