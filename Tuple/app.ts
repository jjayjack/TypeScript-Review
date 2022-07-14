const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Maximilian",
  age: 30,
  hobbies: ["reading", "singing"],
  role: [2, "author"],
};

// person.role.push("admin");
// Push is exception
// person.role[1] = 10;
person.role = [0, "Admin"];

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
