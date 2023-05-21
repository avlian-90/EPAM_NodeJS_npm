import { faker } from "@faker-js/faker";
import _ from "lodash";

function createRandomUser() {
    return {
      name: faker.internet.userName(),
      email: faker.internet.email(),
      phone: faker.phone.number()
    };
}
  
const fakeUsers = faker.helpers.multiple(createRandomUser, {
    count: 10
});

const sortedUsers = _.sortBy(fakeUsers, user => user.name);

console.log("Users:", fakeUsers);
console.log("Sorted Users:", sortedUsers);
