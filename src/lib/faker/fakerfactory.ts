import IFaker from "./ifaker";
import locales from "./locales";
import Faker from "../providers";
import Faker_fr_FR from "../providers/fr_FR";
import Faker_bzh_FR from "../providers/bzh_FR";

export default class FakerFactory {

    private static instance;

    // we dont want to do 'new FakerFactory'
    private constructor() {
    }

    static create(locale = "default") {

        switch (locale) {
            case locales.fr_FR:
                this.instance = new Faker_fr_FR();
                break;

            case locales.bzh_FR:
                this.instance = new Faker_bzh_FR();
                break;

            default:
                this.instance = new Faker();
                break;
        }

        return this.instance;
    }

}