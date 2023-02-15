
import { calculateIVA, calculateIVA_byZone, input, output, verify_country } from "./prod-util";

interface Orders {
    totalProducts: number;
    shippingCost: number;
    country: string;
}
const order:Orders = {
    totalProducts: 100,
    shippingCost: 10,
    country: 'Italy',
}

describe("validazione input informazioni ordini", () => {

    //1-I/O order
    test("imput imponibile, costo spedizione e paese", () => {

        input(order);
        const res = output()
        expect(res).toEqual({
            totalProducts: 100,
            shippingCost: 10,
            country: 'Italy',
        })
    })
    //2-verify country name
    test("verify country name italy", () => { 
        const res = verify_country("Italy");
        expect(res).toEqual('IT')
    })
    test("verify country name france", () => {
        const res = verify_country("France");
        expect(res).toEqual('FR')
    })
    //3-numbers controls
    test("totalProducts is a number ?", () => {
        input(order);
        const {totalProducts} = output()
        expect(totalProducts >= 0).toBeTruthy()
    })
    test("shippingCost is a number ?", () => {
        input(order);
        const {shippingCost} = output()
        expect(shippingCost >= 0).toBeTruthy()
    })
})

describe("get iva percentage by country ", () => {

    //1-get iva percentage
    test("get iva it", () => {
        const res = calculateIVA_byZone("it")
        expect(res).toEqual(22)
    })
    test("get iva ue", () => {
        const res = calculateIVA_byZone("fr")
        expect(res).toEqual(15)
    })
    test("get iva extra", () => {
        const res = calculateIVA_byZone("us")
        expect(res).toEqual(0)
    })
})

describe("iva calculation", () => {

    //1-calcolo iva
    test("calcolo iva it", () => {
        const res = calculateIVA(100, 22)
        expect(res).toEqual(122)
    })
    test("calcolo iva ue", () => {
        const res = calculateIVA(100, 15)
        expect(res).toEqual(115)
    })
    test("calcolo iva extra", () => {
        const res = calculateIVA(100, 0)
        expect(res).toEqual(100)
    })
})


