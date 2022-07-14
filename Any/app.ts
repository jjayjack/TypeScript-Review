/* LIMIT use - no way to check datatype */

const person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["reading", "singing"],
};

let favoriteActivities: any[];
favoriteActivities = ["Sports"];

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  //   console.log(hobby.map()); ERROR due to datatype!
}
