import Faker from "./lib/faker";
import providers from "./lib/faker/providers";
import Gender from "./lib/providers/gender";

const faker = Faker.create(providers.fr_FR);
const tab = [];

for (let i = 0; i < 10; i++) {
    tab.push(
        {
            firstname: faker.firstName(),
            lastname: faker.lastName(),
            username: faker.username(),
            email: faker.email(),
            street: faker.street(),
            zipcode: faker.zipcode(),
            region: faker.state(),
            job: faker.job(),
            date: faker.month() + ", " + faker.day(),
        }
    );
}

console.table(tab);









