enum Role {
  Admin,
  Read_only,
  Author,
} //Commonly identified with all uppercase values (not requirement)
// Custom variable

const person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["reading", "singing"],
  role: Role.Admin,
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  //   console.log(hobby.map()); ERROR due to datatype!
}
