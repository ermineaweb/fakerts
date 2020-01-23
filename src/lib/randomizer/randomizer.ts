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
     * randomize(array)
     *
     * return a random element of array
     *
     * @param array
     */
    public static randomize(array: Array<any>): any {
        return array[this.randNumber(array.length)];
    }

}