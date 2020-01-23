import Faker from "./lib/faker";
import locales from "./lib/faker/locales";

const faker = Faker.create();
const fakerFR = Faker.create(locales.fr_FR);
const tab = [];
const tabFr = [];

for (let i = 0; i < 5; i++) {
    tab.push(
        {
            firstname: faker.firstName(),
            lastname: faker.lastName(),
            username: faker.username(),
            email: faker.email(),
            street: faker.street(),
            zipcode: faker.zipcode(),
            state: faker.state(),
            country: faker.country(),
            job: faker.job(),
            date: faker.month() + ", " + faker.day(),
        }
    );
    tabFr.push(
        {
            firstname: fakerFR.firstName(),
            lastname: fakerFR.lastName(),
            username: fakerFR.username(),
            email: fakerFR.email(),
            state: fakerFR.state(),
            country: fakerFR.country(),
            job: fakerFR.job(),
            date: fakerFR.month() + ", " + fakerFR.day(),
        }
    );
}

console.table(tabFr);
console.table(tab);









