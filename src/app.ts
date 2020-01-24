import Faker from "./lib/fakerFact";
import providers from "./lib/fakerFact/provider";
import Gender from "./lib/providers/gender";

const faker = Faker.create();
const tab = [];

for (let i = 0; i < 5; i++) {
    tab.push(
        {
            person: faker.firstName() + " " + faker.lastName(),
            username: faker.username(),
            email: faker.email(),
            address: faker.street() + " - " + faker.zipcode() + " " + faker.city(),
            job: faker.job(),
        }
    );
}

console.table(tab);