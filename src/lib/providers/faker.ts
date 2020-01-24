import Randomizer from "../randomizer";
import Gender from "./gender";

export default class Faker {

    protected firstNamesMale = [
        'John', 'Jack', 'Joe'
    ];

    protected firstNamesFemale = [
        'Suzan', 'Jane', 'Mary'
    ];

    protected lastNames = [
        'Parker', 'Adams', 'Anderson'
    ];

    protected countries = [
        'France', 'Spain', 'Italy'
    ];

    protected states = [
        'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California'
    ];

    protected streetPrefix = [
        'rue', 'rue', 'chemin', 'avenue', 'boulevard', 'place', 'impasse'
    ];

    protected streetSuffix = [
        'Alley', 'Avenue', 'Branch', 'Bridge', 'Brook', 'Brooks', 'Burg', 'Burgs', 'Bypass', 'Camp', 'Canyon', 'Cape', 'Causeway', 'Center', 'Centers', 'Circle', 'Circles', 'Cliff', 'Cliffs', 'Club', 'Common', 'Corner', 'Corners', 'Course', 'Court', 'Courts', 'Cove', 'Coves', 'Creek', 'Crescent', 'Crest', 'Crossing', 'Crossroad', 'Curve', 'Dale', 'Dam', 'Divide', 'Drive', 'Drive', 'Drives', 'Estate', 'Estates', 'Expressway', 'Extension', 'Extensions', 'Fall', 'Falls', 'Ferry', 'Field', 'Fields', 'Flat', 'Flats', 'Ford', 'Fords', 'Forest', 'Forge', 'Forges', 'Fork', 'Forks', 'Fort', 'Freeway', 'Garden', 'Gardens', 'Gateway', 'Glen', 'Glens', 'Green', 'Greens', 'Grove', 'Groves', 'Harbor', 'Harbors', 'Haven', 'Heights', 'Highway', 'Hill', 'Hills', 'Hollow', 'Inlet', 'Inlet', 'Island', 'Island', 'Islands', 'Islands', 'Isle', 'Isle', 'Junction', 'Junctions', 'Key', 'Keys', 'Knoll', 'Knolls', 'Lake', 'Lakes', 'Land', 'Landing', 'Lane', 'Light', 'Lights', 'Loaf', 'Lock', 'Locks', 'Locks', 'Lodge', 'Lodge', 'Loop', 'Mall', 'Manor', 'Manors', 'Meadow', 'Meadows', 'Mews', 'Mill', 'Mills', 'Mission', 'Mission', 'Motorway', 'Mount', 'Mountain', 'Mountain', 'Mountains', 'Mountains', 'Neck', 'Orchard', 'Oval', 'Overpass', 'Park', 'Parks', 'Parkway', 'Parkways', 'Pass', 'Passage', 'Path', 'Pike', 'Pine', 'Pines', 'Place', 'Plain', 'Plains', 'Plains', 'Plaza', 'Plaza', 'Point', 'Points', 'Port', 'Port', 'Ports', 'Ports', 'Prairie', 'Prairie', 'Radial', 'Ramp', 'Ranch', 'Rapid', 'Rapids', 'Rest', 'Ridge', 'Ridges', 'River', 'Road', 'Road', 'Roads', 'Roads', 'Route', 'Row', 'Rue', 'Run', 'Shoal', 'Shoals', 'Shore', 'Shores', 'Skyway', 'Spring', 'Springs', 'Springs', 'Spur', 'Spurs', 'Square', 'Square', 'Squares', 'Squares', 'Station', 'Station', 'Stravenue', 'Stravenue', 'Stream', 'Stream', 'Street', 'Street', 'Streets', 'Summit', 'Summit', 'Terrace', 'Throughway', 'Trace', 'Track', 'Trafficway', 'Trail', 'Trail', 'Tunnel', 'Tunnel', 'Turnpike', 'Turnpike', 'Underpass', 'Union', 'Unions', 'Valley', 'Valleys', 'Via', 'Viaduct', 'View', 'Views', 'Village', 'Village', 'Villages', 'Ville', 'Vista', 'Vista', 'Walk', 'Walks', 'Wall', 'Way', 'Ways', 'Well', 'Wells'
    ];

    protected citySuffix = [
      ""
    ];

    protected jobs = [
        'Able Seamen', 'Account Manager', 'Accountant', 'Actor'
    ];

    protected domains = [
        'gmail.com', 'yahoo.com', 'hotmail.com'
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

    protected words = [

    ];

    constructor() {
    }

    public firstname(gender: Gender = null): string {
        switch (gender) {
            case null:
                return Randomizer.randomize([...this.firstNamesMale, ...this.firstNamesFemale]);

            case Gender.male:
                return this.firstnameMale();

            case Gender.female:
                return this.firstnameFemale();

            default:
                throw new Error("firstName(gender) : If you precise gender, it must be " + Object.keys(Gender).map(g => "Gender." + g));
        }
    }

    public firstnameMale(): string {
        return Randomizer.randomize(this.firstNamesMale);
    }

    public firstnameFemale(): string {
        return Randomizer.randomize(this.firstNamesFemale);
    }

    public lastname(): string {
        return Randomizer.randomize(this.lastNames);
    }

    public username(gender: Gender = null): string {
        const MIN_CHAR = Randomizer.randNumber(5, 2);

        switch (gender) {
            case null:
                switch (Randomizer.randNumber(7)) {
                    case 0:
                        // pau.pau or paupau or pau_pau ...
                        return `${this.firstname().slice(0, MIN_CHAR)}${Randomizer.randomize(this.emailDelimiters)}${this.firstname().slice(0, MIN_CHAR)}`.toLowerCase();
                    case 1:
                        // pau52_68 or pau5268 or pau52.68 ...
                        return `${this.firstname().slice(0, MIN_CHAR)}${Randomizer.randNumber(100)}${Randomizer.randomize(this.emailDelimiters)}${Randomizer.randNumber(100)}`.toLowerCase();
                    case 2:
                        // pauline_52
                        return `${this.firstname()}${Randomizer.randomize(this.emailDelimiters)}${Randomizer.randNumber(100)}`.toLowerCase();
                    case 3:
                        return `${this.firstname()}${Randomizer.randomize(this.emailDelimiters)}${Randomizer.randNumber(100)}`.toLowerCase();
                    case 4:
                    case 5:
                    case 6:
                        return `${this.firstname()}${Randomizer.randomize(this.emailDelimiters)}${Randomizer.randNumber(100)}`.toLowerCase();
                }
                break;

            case Gender.male:
                return this.usernameMale();

            case Gender.female:
                return this.usernameFemale();

            default:
                throw new Error("username(gender) : If you precise gender, it must be " + Object.keys(Gender).map(g => "Gender." + g));
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
        switch (Randomizer.randNumber(8)) {
            case 0:
                // 8 rue Durand
                return `${Randomizer.randNumber(100, 1)} ${Randomizer.randomize(this.streetPrefix)} ${this.lastname()}`;
            case 1:
                // 8 rue Pierre Durand
                return `${Randomizer.randNumber(100, 1)} ${Randomizer.randomize(this.streetPrefix)} ${this.firstname()} ${this.lastname()}`;
            case 2:
                // 8 rue de Pierre Durand
                return `${Randomizer.randNumber(100, 1)} ${Randomizer.randomize(this.streetPrefix)} de ${this.firstname()} ${this.lastname()}`;
            case 3:
                // 8, rue Durand
                return `${Randomizer.randNumber(100, 1)}, ${Randomizer.randomize(this.streetPrefix)} ${this.lastname()}`;
            case 4:
                // 8, rue Pierre Durand
                return `${Randomizer.randNumber(100, 1)}, ${Randomizer.randomize(this.streetPrefix)} ${this.firstname()} ${this.lastname()}`;
            case 5:
                // 8, rue de Pierre Durand
                return `${Randomizer.randNumber(100, 1)}, ${Randomizer.randomize(this.streetPrefix)} de ${this.firstname()} ${this.lastname()}`;
            case 6:
                // rue de Pierre Durand
                return `${Randomizer.randomize(this.streetPrefix)} de ${this.firstname()} ${this.lastname()}`;
            case 7:
                // rue Pierre Durand
                return `${Randomizer.randomize(this.streetPrefix)} ${this.firstname()} ${this.lastname()}`;
        }
    }

    public zipcode(): string {
        const first = Randomizer.randNumber(9);
        const second = Randomizer.randNumber(9);
        const thirst = Randomizer.randNumber(9);
        const fourth = Randomizer.randNumber(9);
        const fifth = Randomizer.randNumber(9);
        return `${first}${second}${thirst}${fourth}${fifth}`;
    }

    public job(): string {
        return Randomizer.randomize(this.jobs);
    }

    public email(): string {
        // normalize to remove accents
        return this.username().normalize("NFD").replace(/[\u0300-\u036f]/g, "") + "@" + Randomizer.randomize(this.domains);
    }

    public day(): string {
        return Randomizer.randomize(this.days);
    }

    public month(): string {
        return Randomizer.randomize(this.months);
    }

    public city(): string {
        return Randomizer.randomize(this.lastNames);
    }

}