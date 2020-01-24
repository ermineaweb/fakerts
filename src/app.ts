import Faker from "./lib/fakerFact";
import Provider from "./lib/fakerFact/provider";

const faker = Faker.create(Provider.bzh_FR);
const tab = [];

for (let i = 0; i < 5; i++) {
    tab.push({
        person: faker.firstname() + " " + faker.lastname(),
        username: faker.username(),
        email: faker.email(),
        address: faker.street() + " - " + faker.zipcode() + " " + faker.city(),
        job: faker.job(),
    });
}
console.table(tab);