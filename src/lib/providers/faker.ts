import IFaker from "../faker/ifaker";
import Randomizer from "../randomizer";

export default class Faker {

    protected firstnamesMale = [
        "John"
    ];
    protected firstnamesFemale = [
        "Jane"
    ];

    constructor() {
    }

    firstName(gender: string): string {
        return this.firstNameMale();
    }

    firstNameMale(): string {
        return this.firstnamesMale[0];
    }

    firstNameFemale(): string {
        return this.firstnamesFemale[0];
    }

}