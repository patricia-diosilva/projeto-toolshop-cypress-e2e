import { userData } from "@faker-js/faker";

class RegisterPage {

    selectorsList() {
        const selectors = {
            firstName: '[data-test="first-name"]',
            lastName: '[data-test="last-name"]',
            dob: '[data-test="dob"]',
            street: '[data-test="street"]',
            postalCode: '[data-test="postal_code"]',
            city: '[data-test="city"]',
            state: '[data-test="state"]',
            country: '[data-test="country"]',
            phone: '[data-test="phone"]',
            email: '[data-test="email"]',
            password: '[data-test="password"]',
            registerSubmit: '[data-test="register-submit"]',
            registerError: '[data-test="register-error"]',
            firstNameError: '[data-test="first-name-error"]',
            lastNameError: '[data-test="last-name-error"]',
            dobError: '[data-test="dob-error"]',
            streetError: '[data-test="street-error"]',
            postalCodeError: '[data-test="postal-code-error"]',
            cityError: '[data-test="city-error"]',
            stateError: '[data-test="state-error"]',
            countryError: '[data-test="country-error"]',
            phoneError: '[data-test="phone-error"]',
            emailError: '[data-test="email-error"]',
            passwordError: '[data-test="password-error"]'
        };
        return selectors;
    }

    newRegister() {
        cy.get('[href="/auth/register"]').click();
    };

    fillRegisterForm(firstName, lastName, dob, street, postalCode, city, state, country, phone, email, password) {
        cy.get(this.selectorsList().firstName).type(firstName);
        cy.get(this.selectorsList().lastName).type(lastName);
        cy.get(this.selectorsList().dob).type(dob);
        cy.get(this.selectorsList().street).type(street);
        cy.get(this.selectorsList().postalCode).type(postalCode);
        cy.get(this.selectorsList().city).type(city);
        cy.get(this.selectorsList().state).type(state);
        if (country) cy.get(this.selectorsList().country).select(country)
        cy.get(this.selectorsList().phone).type(phone);
        cy.get(this.selectorsList().email).type(email);
        cy.get(this.selectorsList().password).type(password);
        cy.get(this.selectorsList().registerSubmit).click();
    };

    firstNameError() {
        cy.get(this.selectorsList().firstName).should('be.visible');
    };
    lastNameError() {
        cy.get(this.selectorsList().lastName).should('be.visible');
    };
    dobError() {
        cy.get(this.selectorsList().dob).should('be.visible');
    };
    streetError() {
        cy.get(this.selectorsList().street).should('be.visible');
    };
    postalCodeError() {
        cy.get(this.selectorsList().postalCode).should('be.visible');
    };
    cityError() {
        cy.get(this.selectorsList().city).should('be.visible');
    };
    stateError() {
        cy.get(this.selectorsList().state).should('be.visible');
    };
    countryError() {
        cy.get(this.selectorsList().country).should('be.visible');
    };
    phoneError() {
        cy.get(this.selectorsList().phone).should('be.visible');
    };
    emailError() {
        cy.get(this.selectorsList().email).should('be.visible');
    };
    passwordError() {
        cy.get(this.selectorsList().password).should('be.visible');
    };
}


export default RegisterPage;