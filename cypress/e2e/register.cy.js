import { userData } from '@faker-js/faker';
import generateUser from '../support/factories/userData'
import RegisterPage from '../support/pages/registerPage'

const registerPage = new RegisterPage();

describe('Sign In Page', () => {

  beforeEach(() => {
    cy.visit('http://practicesoftwaretesting.com');
    cy.get('[href="/auth/login"]').click()
  })


  it('Should successful Sign In', () => {
    const userData = generateUser();
    registerPage.newRegister();
    registerPage.fillRegisterForm(userData.firstName, userData.lastName, userData.dob, userData.address, userData.postcode, userData.city, userData.state, userData.country, userData.phone, userData.email, userData.password);
    cy.get('[data-test="login-form"]').should('be.visible');
  })


  it('Should display errors when submitting empty form', () => {
    registerPage.newRegister();
    cy.get('[data-test="register-submit"]').click();
    registerPage.firstNameError();
    registerPage.lastNameError();
    registerPage.dobError();
    registerPage.streetError();
    registerPage.postalCodeError();
    registerPage.cityError();
    registerPage.stateError();
    registerPage.countryError();
    registerPage.phoneError();
    registerPage.emailError();
    registerPage.passwordError();
  })

  it('Should display error when first name is empty', () => {
    const userData = generateUser();
    registerPage.newRegister();
    registerPage.fillRegisterForm(' ', userData.lastName, '1992-06-02', userData.address, userData.postcode, userData.city, userData.state, userData.country, userData.phone, userData.email, userData.password);
    registerPage.firstNameError();
  })

  it('Should display error when last name is empty', () => {
    const userData = generateUser();
    registerPage.newRegister();
    registerPage.fillRegisterForm(userData.firstName, ' ', '1992-06-02', userData.address, userData.postcode, userData.city, userData.state, userData.country, userData.phone, userData.email, userData.password);
    registerPage.lastNameError();
  })

  it('Should display error when DOB is empty', () => {
    const userData = generateUser();
    registerPage.newRegister();
    registerPage.fillRegisterForm(userData.firstName, userData.lastName, ' ', userData.address, userData.postcode, userData.city, userData.state, userData.country, userData.phone, userData.email, userData.password);
    registerPage.dobError();
  })

  it('Should display error when street is empty', () => {
    const userData = generateUser();
    registerPage.newRegister();
    registerPage.fillRegisterForm(userData.firstName, userData.lastName, '1992-06-02', ' ', userData.postcode, userData.city, userData.state, userData.country, userData.phone, userData.email, userData.password);
    registerPage.streetError();
  })

  it('Should display error when postal code is empty', () => {
    const userData = generateUser();
    registerPage.newRegister();
    registerPage.fillRegisterForm(userData.firstName, userData.lastName, '1992-06-02', userData.address, ' ', userData.city, userData.state, userData.country, userData.phone, userData.email, userData.password);
    registerPage.postalCodeError();
  })

  it('Should display error when city is empty', () => {
    const userData = generateUser();
    registerPage.newRegister();
    registerPage.fillRegisterForm(userData.firstName, userData.lastName, '1992-06-02', userData.address, userData.postcode, ' ', userData.state, userData.country, userData.phone, userData.email, userData.password);
    registerPage.cityError();
  })

  it('Should display error when state is empty', () => {
    const userData = generateUser();
    registerPage.newRegister();
    registerPage.fillRegisterForm(userData.firstName, userData.lastName, '1992-06-02', userData.address, userData.postcode, userData.city, ' ', userData.country, userData.phone, userData.email, userData.password);
    registerPage.stateError();
  })

  it('Should display error when country is empty', () => {
    const userData = generateUser();
    registerPage.newRegister();
    registerPage.fillRegisterForm(userData.firstName, userData.lastName, '1992-06-02', userData.address, userData.postcode, userData.city, userData.state, null, userData.phone, userData.email, userData.password);
    registerPage.countryError();
  })

  it('Should display error when phone is empty', () => {
    const userData = generateUser();
    registerPage.newRegister();
    registerPage.fillRegisterForm(userData.firstName, userData.lastName, '1992-06-02', userData.address, userData.postcode, userData.city, userData.state, userData.country, ' ', userData.email, userData.password);
    registerPage.phoneError();
  })

  it('Should display error when email is empty', () => {
    const userData = generateUser();
    registerPage.newRegister();
    registerPage.fillRegisterForm(userData.firstName, userData.lastName, '1992-06-02', userData.address, userData.postcode, userData.city, userData.state, userData.country, userData.phone, ' ', userData.password);
    registerPage.emailError();
  })

  it('Should display error when password is empty', () => {
    const userData = generateUser();
    registerPage.newRegister();
    registerPage.fillRegisterForm(userData.firstName, userData.lastName, '1992-06-02', userData.address, userData.postcode, userData.city, userData.state, userData.country, userData.phone, userData.email, ' ');
    registerPage.passwordError();
  })

  it('Should display error when password has less than 6 characters', () => {
    const userData = generateUser();
    registerPage.newRegister();
    registerPage.fillRegisterForm(userData.firstName, userData.lastName, '1992-06-02', userData.address, userData.postcode, userData.city, userData.state, userData.country, userData.phone, userData.email, 'senha');
    registerPage.passwordError();
  })

  it('Should display error when password has invalid characters', () => {
    const userData = generateUser();
    registerPage.newRegister();
    registerPage.fillRegisterForm(userData.firstName, userData.lastName, '1992-06-02', userData.address, userData.postcode, userData.city, userData.state, userData.country, userData.phone, userData.email, '123!');
    registerPage.passwordError();
  })

  it('Should display weak password strength', () => {
    const userData = generateUser();
    registerPage.newRegister();
    registerPage.fillRegisterForm(userData.firstName, userData.lastName, '1992-06-02', userData.address, userData.postcode, userData.city, userData.state, userData.country, userData.phone, userData.email, 'S');
    registerPage.passwordError();
    cy.get("[style='width: 20%;']").should('be.visible');
  })

  it('Should display moderate password strength', () => {
    const userData = generateUser();
    registerPage.newRegister();
    registerPage.fillRegisterForm(userData.firstName, userData.lastName, '1992-06-02', userData.address, userData.postcode, userData.city, userData.state, userData.country, userData.phone, userData.email, 'Sen');
    registerPage.passwordError();
    cy.get("[style='width: 40%;']").should('be.visible');
  })

  it('Should display strong password strength', () => {
    const userData = generateUser();
    registerPage.newRegister();
    registerPage.fillRegisterForm(userData.firstName, userData.lastName, '1992-06-02', userData.address, userData.postcode, userData.city, userData.state, userData.country, userData.phone, userData.email, 'Senha1');
    registerPage.passwordError();
    cy.get("[style='width: 60%;']").should('be.visible');
  })

  it('Should display very strong password strength', () => {
    const userData = generateUser();
    registerPage.newRegister();
    registerPage.fillRegisterForm(userData.firstName, userData.lastName, '1992-06-02', userData.address, userData.postcode, userData.city, userData.state, userData.country, userData.phone, userData.email, 'Password123');
    registerPage.passwordError();
    cy.get("[style='width: 80%;']").should('be.visible');
  })

  it('Should display excellent password strength', () => {
    const userData = generateUser();
    registerPage.newRegister();
    registerPage.fillRegisterForm(userData.firstName, userData.lastName, '1992-06-02', userData.address, userData.postcode, userData.city, userData.state, userData.country, userData.phone, userData.email, 'G00dPassword123!');
    registerPage.passwordError();
    cy.get("[style='width: 100%;']").should('be.visible');

    it('Should display error when email is already registered', () => {
      const userData = generateUser();
      registerPage.newRegister();
      registerPage.fillRegisterForm(userData.firstName, userData.lastName, '1992-06-02', userData.address, userData.postcode, userData.city, userData.state, userData.country, userData.phone, 'patricia@email.com.br', userData.password);
      registerPage.emailError();
    })

    it('Should display password has appeared in a data leak', () =>{
      const userData = generateUser();
      registerPage.newRegister();
      registerPage.fillRegisterForm(userData.firstName, userData.lastName, '1992-06-02', userData.address, userData.postcode, userData.city, userData.state, userData.country, userData.phone, userData.email, 'Senha123!');
      registerPage.passwordError().should('contain', 'leak')
    })
  })
});