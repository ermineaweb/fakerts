import FakerFactory from "../faker";

export default class Guesser {

    static guess(name: string): string {

        switch (name) {
            case "username":
            case "pseudo":
            case "login":
                return FakerFactory.create().userName();
        }
    }

}