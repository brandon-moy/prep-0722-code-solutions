var person = {
  firstName: 'Brandon',
  lastName: 'Moy',
  hobby: 'Pokemon'
};

var fullName = person.firstName + ' ' + person.lastName;
person.job = 'Purchasing Manager';
person.previousJob = 'Operations Manager';
console.log(person);
console.log("The person's name is:", fullName);
console.log("The person's current job is:", person.job);
console.log("The person's previous job is:", person.previousJob);
console.log('The complete person object:', person);
