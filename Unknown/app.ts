let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

/*userName = userInput //must first evaluate the type of userInput before assigning userName to userInput
better than ANY because you don't know what datatype you want to store BUT know what you want to do with the data
and just have to do a datatype check 
 */
if (typeof userInput === "string") {
  userName = userInput;
}
