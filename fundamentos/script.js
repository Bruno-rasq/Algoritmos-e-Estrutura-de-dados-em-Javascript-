console.log("Hello World");

// console
console.log("Console.log");
console.error("console.error");
console.warn("console.warn");

function PhoneNumberFormat(phone){

    let phoneNumber = /(\d{3})(\d{3})(\d{4})/g;
    let formatNumber = "\($1\) $2 $3";

    let response = phone.replace(phoneNumber, formatNumber);
    return console.log(response);
}

PhoneNumberFormat("0987654321");