let people = [
  {
    name: "Alice",
    address: {
      city: "New York",
      street: { name: "Broadway", number: 123 }
    }
  },
  {
    name: "Bob",
    address: {
      city: "Los Angeles",
      street: { name: "Sunset Boulevard", number: 456 }
    }
  }
];


let result = people.map(person => {
  let {
    name,
    address: {
      city,
      street: { name: streetName }
    }
  } = person;

  return `${name lives in ${city} on ${streetName}`;
});

console.log(result);

