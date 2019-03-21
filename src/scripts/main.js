const emailsArray = customers.map((customerEmail) => {
    return customerEmail.contacts.email
})
let array = [].concat.apply([], emailsArray)
console.log(array)
