import { faker } from '@faker-js/faker'

const generateUser = () => ({
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: 'StrongSenha123!',
    phone: '11999999999',
    city: 'Sao Paulo',
    state: 'Sao Paulo',
    country: 'Brazil',
    postcode: '01310-100',
    address: faker.location.streetAddress(),
    dob: '1990-01-01'
})

export default generateUser