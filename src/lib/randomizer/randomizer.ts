export default class Randomizer {

    /**
     * randNumber(max, min)
     *
     * return a random number between min and max.
     * min = 0 if not assigned.
     *
     * @param max
     * @param min
     */
    public static randNumber(max: number, min: number = 0): number {
        if (max < min) {
            throw new Error("'max' value must be > 'min' value");
        }
        return Math.floor(Math.random() * (max - min) + min);
    }

    /**
     * randomize(list)
     *
     * return a random element included in list
     *
     * @param tab
     */
    public static randomize(tab: Array<any>): any {
        return tab[this.randNumber(tab.length)];
    }

}