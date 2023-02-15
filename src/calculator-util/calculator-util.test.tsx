import React from "react"
import { screen } from "@testing-library/react"
import { render } from ".././test-utils"
import { Result } from "postcss";
import { add, init, push_operand, result, subtract } from "./calculator-util";


describe("test case ADD calculator", () => {
    beforeEach(() => {
        init();
    });

    //1-enter single number
    test("enter single number", () => {
        push_operand(1);
        const res = result()
        expect(res).toEqual(1)
    })
    //2-enter 2 number
    test("enter 2 numbers", () => {
        push_operand(2);
        push_operand(3);
        const res = result()
        expect(res).toEqual(3)
    })
    //3-add 2 numbers
    test("add 2 numbers", () => {
        push_operand(2);
        push_operand(3);
        const res = add()
        expect(res).toEqual(5)
    })
    //4-enter 3 numbers
    test("enter 3 numbers", () => {
        push_operand(2);
        push_operand(3);
        push_operand(4);
        const res = result()
        expect(res).toEqual(4)
    })

    //5-add 3 numbers
    test("add 3 numbers", () => {
        push_operand(2);
        push_operand(3);
        push_operand(4);
        const res = add()
        expect(res).toEqual(9)
    })
})


describe("test case Subtract calculator", () => {
    beforeEach(() => {
        init();
    });

    //1-subtract 1 number
    test("subtract 1 number", () => {
        push_operand(2);
        const res = subtract()
        expect(res).toEqual(-2)
    })
    //2-subtract 2 number
    test("subtract 2 number", () => {
        push_operand(2);
        push_operand(3);
        const res = subtract()
        expect(res).toEqual(-5)
    })
    //3-subtract 2 number
    test("subtract 3 number", () => {
        push_operand(2);
        push_operand(3);
        push_operand(4);
        const res = subtract()
        expect(res).toEqual(-9)
    })
})

describe("test case BOH---- calculator", () => {
    beforeEach(() => {
        init();
    });

    //1-subtract 1 number
    test("subtract 1 number", () => {
        push_operand(2);
        const res = subtract()
        expect(res).toEqual(-2)
    })
    //2-subtract 2 number
    test("subtract 2 number", () => {
        push_operand(2);
        push_operand(3);
        const res = subtract()
        expect(res).toEqual(-5)
    })
    //3-subtract 2 number
    test("subtract 3 number", () => {
        push_operand(2);
        push_operand(3);
        push_operand(4);
        const res = subtract()
        expect(res).toEqual(-9)
    })
})

