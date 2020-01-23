import Randomizer from "../randomizer";

export default class Faker {

    protected firstNamesMale = [
        'Aaron', 'Abdiel', 'Abdul', 'Abdullah', 'Abe'
    ];

    protected firstNamesFemale = [
        'Aaliyah', 'Abagail', 'Abbey', 'Abbie', 'Abbigail'
    ];

    protected lastNames = [
        'Abbott', 'Abernathy', 'Abshire', 'Adams', 'Altenwerth', 'Anderson'
    ];

    protected countries = [
        'Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra'
    ];

    protected states = [
        'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California'
    ];

    protected streetPrefix = [
        'rue', 'rue', 'chemin', 'avenue', 'boulevard', 'place', 'impasse'
    ];

    protected jobs = [
        'Able Seamen', 'Account Manager', 'Accountant', 'Actor'
    ];

    protected domains = [
        'voila.fr', 'gmail.com', 'hotmail.fr', 'yahoo.fr', 'laposte.net', 'free.fr',
        'sfr.fr', 'orange.fr', 'bouygtel.fr', 'club-internet.fr', 'dbmail.com',
        'live.com', 'ifrance.com', 'noos.fr', 'tele2.fr', 'tiscali.fr', 'wanadoo.fr',
        'gmail.com', 'yahoo.com', 'hotmail.com', 'gmail.com', 'gmail.com', 'gmail.com'
    ];

    protected days = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];

    protected months = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Decembrer"
    ];

    protected emailDelimiters = [
      ".", "-", "_", "",
    ];

    constructor() {
    }

    public firstName(gender: string = ""): string {
        switch (gender.toLowerCase()) {
            case "male":
            case "m":
                return this.firstNameMale();

            case "female":
            case "f":
                return this.firstNameFemale();

            default:
                return Randomizer.randomize([...this.firstNamesMale, ...this.firstNamesFemale]);
        }
    }

    public firstNameMale(): string {
        return Randomizer.randomize(this.firstNamesMale);
    }

    public firstNameFemale(): string {
        return Randomizer.randomize(this.firstNamesFemale);
    }

    public lastName(): string {
        return Randomizer.randomize(this.lastNames);
    }

    public username(gender: string = ""): string {
        const MIN_CHAR = Randomizer.randNumber(5,2);

        switch (gender.toLowerCase()) {
            case "m":
            case "h":
            case "male":
                return this.usernameMale();

            case "f":
            case "femme":
            case "female":
                return this.usernameFemale();

            default:
                switch (Randomizer.randNumber(4)) {
                    case 0:
                        // pau.pau or paupau or pau_pau ...
                        return `${this.firstName().slice(0, MIN_CHAR)}${Randomizer.randomize(this.emailDelimiters)}${this.firstName().slice(0, MIN_CHAR)}`.toLowerCase();
                    case 1:
                        // pau52_68 or pau5268 or pau52.68 ...
                        return `${this.firstName().slice(0, MIN_CHAR)}${Randomizer.randNumber(100)}${Randomizer.randomize(this.emailDelimiters)}${Randomizer.randNumber(100)}`.toLowerCase();
                    case 2:
                        // pauline_52
                        return `${this.firstName()}${Randomizer.randomize(this.emailDelimiters)}${Randomizer.randNumber(100)}`.toLowerCase();
                    case 3:
                        return `${this.firstName()}${Randomizer.randomize(this.emailDelimiters)}${Randomizer.randNumber(100)}`.toLowerCase();
                    case 4:
                        return `${this.firstName()}${Randomizer.randomize(this.emailDelimiters)}${Randomizer.randNumber(100)}`.toLowerCase();
                }
        }
    }

    public usernameMale(): string {
        // TODO
        return "male username";
    }

    public usernameFemale(): string {
        // TODO
        return "female username";
    }

    public country(): string {
        return Randomizer.randomize(this.countries);
    }

    public state(): string {
        return Randomizer.randomize(this.states);
    }

    public street(): string {
        switch (Randomizer.randNumber(5)) {
            case 0:
                // 8 rue Durand
                return `${Randomizer.randNumber(100, 1)} ${Randomizer.randomize(this.streetPrefix)} ${this.lastName()}`;
            case 1:
                // 8 rue Pierre Durand
                return `${Randomizer.randNumber(100, 1)} ${Randomizer.randomize(this.streetPrefix)} ${this.firstName()} ${this.lastName()}`;
            case 2:
                // 8 rue de Pierre Durand
                return `${Randomizer.randNumber(100, 1)} ${Randomizer.randomize(this.streetPrefix)} de ${this.firstName()} ${this.lastName()}`;
            case 3:
                // 8, rue Durand
                return `${Randomizer.randNumber(100, 1)}, ${Randomizer.randomize(this.streetPrefix)} ${this.lastName()}`;
            case 4:
                // 8, rue Pierre Durand
                return `${Randomizer.randNumber(100, 1)}, ${Randomizer.randomize(this.streetPrefix)} ${this.firstName()} ${this.lastName()}`;
            case 5:
                // 8, rue de Pierre Durand
                return `${Randomizer.randNumber(100, 1)}, ${Randomizer.randomize(this.streetPrefix)} de ${this.firstName()} ${this.lastName()}`;
        }
    }

    public zipcode(): string {
        return "10500";
    }

    public job(): string {
        return Randomizer.randomize(this.jobs);
    }

    public email(): string {
        return this.username() + "@" + Randomizer.randomize(this.domains);
    }

    public day(): string {
        return Randomizer.randomize(this.days);
    }

    public month(): string {
        return Randomizer.randomize(this.months);
    }

}