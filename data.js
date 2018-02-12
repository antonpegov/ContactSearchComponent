module.exports = function(){
  const faker = require('faker');
  const people = [];
  for (let n = 0; n < 100; n+=1) {
    people.push({
      key: n,
      fname: faker.name.firstName(),
      lname: faker.name.lastName(),
      avatar: faker.internet.avatar(),
      phone: faker.phone.phoneNumber(),      
      adress: faker.address.streetAddress(),
      city: faker.address.city()
    })
  }
  return {people};
}