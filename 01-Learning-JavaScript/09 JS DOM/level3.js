const user = {
    name: "Umesh",
    age: 19,
    city: "Bangalore"
};

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

const user1 = {
    name: "Umesh"
};

Object.assign(user1, {
    age: 19,
    city: "Bangalore"
});

console.log(user);


const classInfo = [
    {
        name: "Umesh",
        age: 19,
        city: "Bangalore"
    },
    {
        name: "John",
        age: 20,
        city: "New York"
    },
    {
        name: "Alice",
        age: 21,
        city: "Los Angeles"
    }
]

classInfo.forEach((user) => {
    console.log(`Name: ${user.name}, Age: ${user.age}, City: ${user.city}`);
});


