const breakCamel = (camel) => {
    camel.split(/(?=[A-Z])/);
    camel.join(' ')
    return camel
}

console.log(breakCamel("breakTheCamel"))
