import Faker from "./lib/faker";

const faker = Faker.create();
console.log(faker.firstName("m"));
console.log(faker.firstName("f"));
console.log(faker.firstName());


