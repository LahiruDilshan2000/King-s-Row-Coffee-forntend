const nameRegex = /^[A-Za-z0-9]{3,16}$/;
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const addressRegex =  /^[A-Za-z0-9]{3,25}$/;
const mobileRegex = /^0\d{9}$/;

export const validateName = (name:string):boolean => {
    console.log(nameRegex.test(name))
    return nameRegex.test(name);
}
export const validateEmail = (email:string):boolean => {
    return emailRegex.test(email);
}

export const validateAddress = (address:string):boolean => {
    console.log(addressRegex.test(address))
    return addressRegex.test(address);
}

export const validateAge = (age:number):boolean => {
    return age < 55 && age > 17;
}

export const validateContact = (contact:string):boolean => {
    return mobileRegex.test(contact);
}

export const validatePassword = (password:string):boolean => {
    return password.length >= 8;
}