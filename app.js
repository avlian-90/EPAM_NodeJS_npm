import faker from "faker";
import _ from "lodash";

// const fakeUsers = [];

// for (let i = 0; i < 10; i++) {
//     fakeUsers.push({
//         name: faker.name.findName(),
//         email: faker.internet.email(),
//         phone: faker.phone.phoneNumber()
//     })
// }

const fakeUsers = Array.from({ length: 10 }, () => ({
    name: faker.name.findName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
}));

const sortedUsers = _.sortBy(fakeUsers, user => user.name);

console.log("Users:", fakeUsers);
console.log("Sorted Users:", sortedUsers);
