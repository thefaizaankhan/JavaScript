// Object Constructor 

// const tinderUser = new Object(); // It is Singleton object
const tinderUser = {} // It is a non-Singleton Object

tinderUser.id = "123abcd"
tinderUser.name = "Jimmy"
tinderUser.isLoggedIn = false

// console.log(tinderUser); 

const regularUser = {
    email: "harry@gmail.com",
    fullname: {
        userFullName: {
            firstName: "Faizaan",
            lastName: "Khan"
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstName);
// when handling data through apis what if fullname object doesn't exist so we use ? (known as Optional Chaining)
// console.log(regularUser.fullname?.userFullName.firstName);

// combining objects
const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "a",
    4: "b"
}

const obj3 = {
    3: "a",
    4: "b"
}

// const obj3 = {obj1, obj2} // a bit problematic not good

// here we use {} -> to combine objects in a target empty {} ->  Object.assign(target, source)
// const obj4 = Object.assign({}, obj1, obj2, obj3);

// combining objects using spread operator 
const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);

// when values come from db (in array of objects)
const dbUsers = [
    {
        id: 1, 
        email: "user@gmail.com"
    },
    {
        id: 2, 
        email: "one@gmail.com"
    },
    {
        id: 3, 
        email: "hello@gmail.com"
    }
]

// console.log(dbUsers[0].email);
// console.log(dbUsers[1].email);

console.log(tinderUser);
// Important** - gives all the keys from an object in the form of array
console.log(Object.keys(tinderUser));
// Important** - gives all the value from an object in the form of array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
// check if the property email exist
console.log(tinderUser.hasOwnProperty('email'));


// put const obj1 = {1: "a", 2: "b"} in browser console and look for different methods which can be applied on objects




