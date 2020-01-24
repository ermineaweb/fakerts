## Fake Data Generator

Get some fake and anonymous datas.

Created to learn TypeScript, inspired by [fzaninotto/Faker](https://github.com/fzaninotto/Faker)


### Index
- [Install](#Install)
- [Usage](#Usage)
- [Methods](#Methods)

-----------------------------------------------------------------
### Usage
[Index](#Index)

``` 
npm i ermineafaker
```

-----------------------------------------------------------------
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
faker.city(); // Anderson
faker.street(); // place Clémence Rousset
faker.job(); // Actor

fakerFr.firstname(); // Pierre
fakerFr.lastname(); // Durand
fakerFr.username(); // matthieu45
faker.email(); // mar5764@voila.fr
fakerFr.city(); // Chauvin-sur-Delmas
fakerFr.street(); // place Clémence Rousset
fakerFr.job(); // Elagueur-grimpeur
```

Example

![screen](/exemple1.png)


-----------------------------------------------------------------
### Methods
[Index](#Index)



