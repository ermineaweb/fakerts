import Provider from "./provider";
import Faker from "../providers";
import Faker_fr_FR from "../providers/fr_FR";
import Faker_bzh_FR from "../providers/bzh_FR";

export default class FakerFactory {

    private static instance;

    // we dont want to let developers create a 'new FakerFactory'
    private constructor() {
    }

    static create(provider: Provider = null) {

        switch (provider) {
            case null:
                this.instance = new Faker();
                break;

            case Provider.fr_FR:
                this.instance = new Faker_fr_FR();
                break;

            case Provider.bzh_FR:
                this.instance = new Faker_bzh_FR();
                break;

            default:
                Error("invalid provider : " + Object.keys(Provider).map(p => "Provider." + p));
                break;
        }

        return this.instance;
    }

}