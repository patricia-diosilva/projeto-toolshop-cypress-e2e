import LoginPage from '../support/pages/loginPage';
import userData from '../fixtures/userData.json';

const loginPage = new LoginPage();


describe('Login Page', () => {

  beforeEach(() => {
    cy.visit('http://practicesoftwaretesting.com/auth/login');
  })

  it('Should login and go to the products page', () => {

})

})