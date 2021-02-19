let buttonGeneret = document.querySelector('button')

buttonGeneret.addEventListener('click', () => {
    let element = faker.helpers.createCard()
    console.log(element)
    let {
        name,
        email,
        address: {
            city,
            country,
            zipcode
        }
    } = element;
    document.querySelector('#name').value = name;
    document.querySelector('#email').value = email;
    document.querySelector('#city').value = city;
    document.querySelector('#zipcode').value = zipcode;
    document.querySelector('#country').value = country;
})