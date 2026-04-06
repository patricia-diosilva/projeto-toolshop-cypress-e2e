import LoginPage from '../support/pages/loginPage';
import RegisterPage from '../support/pages/registerPage';
import userData from '../fixtures/userData.json';

const loginPage = new LoginPage();
const registerPage = new RegisterPage();


describe('Login Page', () => {

  beforeEach(() => {
    cy.visit('http://practicesoftwaretesting.com/auth/login');
  })

  it('Should login with customer credentials successfully', () => {
    loginPage.loginForm(userData.customer.email, userData.customer.password);
    cy.get('[data-test="page-title"]').should('contain', 'My account');
  })

  it('Should login with admin credentials successfully', () => {
    loginPage.loginForm(userData.admin.email, userData.admin.password);
    cy.get('[data-test="page-title"]').should('contain', 'Sales over the years');
  })

  it('Should display error when email is empty', () => {
    loginPage.loginForm(' ', userData.admin.password);
    registerPage.emailError();
  })

  it('Should display error when password is empty', () => {
    loginPage.loginForm(userData.customer.email, ' ');;
    registerPage.passwordError();
  })

  it('Should display error when email is invalid', () => {
    loginPage.loginForm('invalid-email', userData.admin.password);
    registerPage.emailError();
  })

  it('Should display error when password is incorrect', () => {
    loginPage.loginForm(userData.customer.email, 'Wrong-Password123!');
    cy.get('[data-test="login-error"]').should('be.visible');
  })

  it('Should display error when user does not exist', () => {
    loginPage.loginForm('nao1existe2@naoexiste3.com', 'Password123!');
    cy.get('[data-test="login-error"]').should('be.visible');
  })

});