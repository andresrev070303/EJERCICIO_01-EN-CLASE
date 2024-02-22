import generarFizzbuzz from "./fizzbuzz.js";

describe("Fizzbuzz", () => {
    it("debería generar el mismo número para uno que no tiene reglas, por ejemplo el número 1", () => {
        expect(generarFizzbuzz(1)).toEqual("1");
    });
});
it("debería generar el mismo número para otro numero que no tiene reglas como para el 2", () => {
    expect(generarFizzbuzz(1)).toEqual("1");
});
