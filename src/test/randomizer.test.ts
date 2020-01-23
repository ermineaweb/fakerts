import Randomizer from "../lib/randomizer";

const MIN = 1;
const MAX = 2;
const ARRAY = [0, 1, 2, 3, 4, 5];

describe("Randomizer.randNumber(max, min) must return a number between max (exclude) and min (include)", () => {
    test("Number returned must be greater than or equal min", () => {
        expect(Randomizer.randNumber(MAX, MIN)).toBeGreaterThanOrEqual(MIN);
    });
    test("Number returned must be less than max", () => {
        expect(Randomizer.randNumber(MAX, MIN)).toBeLessThan(MAX);
    });
    test("If max < min, an error must be throw", () => {
        expect(() => {
            Randomizer.randNumber(MIN, MAX)
        }).toThrow();
    });
});

describe("Randomizer.randomize(array) must return a random element of the array", () => {
    test("The element must be in the array", () => {
        expect(ARRAY).toContain(Randomizer.randomize(ARRAY));
    });
});
