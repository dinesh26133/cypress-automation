const employee = 
{
employeeID: "PB221",
firstName: "Dinesh",
LastName: "Manchanda",
}

console.log(employee);
console.log(typeof(employee.employeeID));
console.log(typeof(employee.firstName));
console.log(employee["employeeID"],employee["firstName"],employee["LastName"]);

const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

  person.firstName = "DINNU";
  Object.freeze(person);
  person.firstName = "PETER";

  // here if we only write fullName then it just a reference, if we have to call the function you have to use paranthesis
  // i.e. fullName()
  //If you access a method without the () parentheses, it will return the function definition:
  //function() { return this.firstName + " " + this.lastName; }
  console.log(person.fullName());

  let comments;

  console.log(comments?comments: " ");



