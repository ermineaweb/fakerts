import IFaker from "../../faker/ifaker";
import Faker from "../faker";

export default class FakerImpl extends Faker {

    firstName(): string {
        return "un prenom FR";
    }

}