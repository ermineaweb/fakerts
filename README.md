## Fake Data Generator

Get some fake and anonymous datas, inspired by [fzaninotto/Faker](https://github.com/fzaninotto/Faker)

Created to learn TypeScript, Webpack, Jest, Nodemon.


### Index
- [Install](#Install)
- [Providers](#Providers)
- [Usage](#Usage)
- [Methods](#Methods)

---------------------------------------------------------
### Install
[Index](#Index)

``` 
// not allowed at this time
```

---------------------------------------------------------
### Providers
[Index](#Index)
```
en_US (default)
fr_FR
bzh_FR
```

---------------------------------------------------------
### Usage
[Index](#Index)

Create some fakers
```javascript
const Faker = require("ermineafaker");
const faker = Faker.create();
const fakerFr = Faker.create("fr_FR");
```

Use them
```javascript
faker.firstname(); // John
faker.lastname(); // Parker
faker.username(); // joe-56
faker.email(); // jack_37@hotmail.com

fakerFr.firstname(); // Pierre
fakerFr.lastname(); // Durand
fakerFr.username(); // matthieu45
fakerFr.email(); // mar5764@voila.fr
```

Example : create five persons
```javascript
const faker = Faker.create(Provider.fr_FR);
const persons = [];

for (let i = 0; i < 5; i++) {
    persons.push({
        person: faker.firstName() + " " + faker.lastName(),
        username: faker.username(),
        email: faker.email(),
        address: faker.street() + " - " + faker.zipcode() + " " + faker.city(),
    });
}
console.table(persons);
```

![screen](/exemple1.png)

---------------------------------------------------------
### Methods
[Index](#Index)



