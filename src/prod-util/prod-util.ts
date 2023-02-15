import {countries} from '../db/county-codes'

interface Orders {
    totalProducts: number;
    shippingCost: number;
    country: string;
  }
let order:Orders;

export const input = (orderImput:Orders) => {
    order = orderImput
}

export const output = () => {
    return order
}

export const verify_country = (input:string) => {
    let code
    countries.map((obj)=> {if(obj.name == input)code = obj.id;})
    return code  
}

export const calculateIVA = (input:number,percentage:number) => {
    return input+input/100*percentage
}

export const calculateIVA_byZone = (input:string) => {
    let iva 
    switch(getCountryRegion(input).toString()){
        case 'it':
        iva = 22
        break;
        case 'ue':
        iva = 15
        break;
        case 'extra':
        iva = 0
        break;
        default:
            iva = -1
        break;
    }
    return iva
}

const getCountryRegion = (input: string) =>  {
    let region = ''
    switch(input){
        case 'it':
        region = 'it'
        break;
        case 'fr':
        region = 'ue'
        break;
        case 'us':
        region = 'extra'
        break;
        default:
            region = 'unknown'
        break;
    }
    return region
}
