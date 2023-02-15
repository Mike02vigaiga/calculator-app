
const arrOperands:number[] = []

export const push_operand = (input: number) => {
    arrOperands.push(input)
};

export const result = () => {
  return arrOperands.pop();
};

export const add = () => {
    return arrOperands.reduce(
    (accumulator, currentValue) => accumulator + currentValue );
};

export const init = () => {
    arrOperands.splice(0, arrOperands.length)
 };

 export const subtract = () => {

    return arrOperands.reduce(
    (accumulator, currentValue) => accumulator - currentValue , 0 );
};