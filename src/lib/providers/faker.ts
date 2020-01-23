import IFaker from "../faker/ifaker";
import Randomizer from "../randomizer";

export default class Faker {

    protected firstNamesMale = [
        "John", "Joe"
    ];

    protected firstNamesFemale = [
        "Jane", "Jessie"
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

}