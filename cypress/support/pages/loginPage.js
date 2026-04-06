class LoginPage {

    selectorsList() {
        const selectors = {
            email: '[data-test="email"]',
            password: '[data-test="password"]',
            loginButton: '[data-test="login-submit"]',
        }
        return selectors;
    }

    loginForm(email, password) {
        cy.get(this.selectorsList().email).type(email);
        cy.get(this.selectorsList().password).type(password);
        cy.get(this.selectorsList().loginButton).click();
    }
}

export default LoginPage;