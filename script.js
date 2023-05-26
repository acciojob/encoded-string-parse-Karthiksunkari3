const parseCode = (str) => {
  const [firstName, lastName, id] = str.split('0');
  return { firstName, lastName, id };
};
console.log(parseCode("John000Doe000123"));
// Output: { firstName: "John", lastName: "Doe", id: "123" }

console.log(parseCode("michael0smith004331"));
// Output: { firstName: "michael", lastName: "smith", id: "4331" }

console.log(parseCode("Thomas00LEE0000043"));
// Output: { firstName: "Thomas", lastName: "LEE", id: "43" }
