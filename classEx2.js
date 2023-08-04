const person = {
    fullName: function(){
      return this.firstName + " " + this.lastName;
    }
  }

  const personWithCity = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  
  // This will return "Mary Doe"
  console.log(person.fullName.call(person2));

  console.log(personWithCity.fullName.apply(person2, ["Oslo", "Norway"]));
  
  console.log(person.fullName.call(person1));

  console.log(personWithCity.fullName.call(person1,"Hyd","IND"));