//TASK1....

//TASk2...

const idkWhatis = (string) => {
    return string.map((word) => {
      return word
        .split("_")
        .map((s) => {
          return s[0].toUpperCase() + s.slice(1);
        })
        .join(" ");
    });
  };
  
  console.log(idkWhatis(["hello_world", "i_ want", "to_ goo_ home"]));

// TASK3...

const users = [
    {name: "Vsili", age: 21  },
    {name: "Giorgi", age: 24 },
    {name: "Salome", age: 25  },
    {name: "Davit", age: 27 },
    {name:"Qetevan" , age: 22 }
];

 users.sort = (a, b) => {
   return a.age - b.age;
 };

 console.log(users)
