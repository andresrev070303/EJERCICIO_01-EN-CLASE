import generarFizzbuzz from "./fizzbuzz.js";

describe("Fizzbuzz", () => {
    it("debería generar el mismo número para uno que no tiene reglas, por ejemplo el número 1", () => {
        expect(generarFizzbuzz(1)).toEqual("1");
    });
});
it("debería generar el mismo número para otro numero que no tiene reglas como para el 2", () => {
    expect(generarFizzbuzz(2)).toEqual("2");
});
it("debería generar el fizz para un numero que sigue esa regla como para el 3", () => {
    expect(generarFizzbuzz(3)).toEqual("Fizz");
});
it("debería generar el bbuzz para un numero que sigue esa regla como para el 5", () => {
    expect(generarFizzbuzz(5)).toEqual("Buzz");
});