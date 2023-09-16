describe("Login user",()=>{
it("Should login user if credentials are correct",()=>{
    cy.visit('/login')
    cy.url().should('include','login')

    cy.get('[formControlName="jituEmail"]').type('david.munyiri@thejitu.com')
    cy.get('[formControlName="password"]').type('12345678')
    cy.get('[data-cy="loginbtn"]').click()
})
})
// cypress/integration/app.spec.js

describe('My Angular App', () => {
    beforeEach(() => {
      // Set up any test-specific configurations or actions here
      // e.g., visit the app's URL
      cy.visit('http://localhost:4200'); // Replace with your app's URL
    });
  
    it('Should load the homepage', () => {
      // Perform assertions to ensure the homepage is loaded correctly
      cy.contains('Welcome to My Angular App'); // Replace with your app's content
    });
  
    it('Should submit a form', () => {
      // Interact with elements and perform assertions
      cy.get('input[name="username"]').type('JohnDoe');
      cy.get('input[name="password"]').type('Secret123');
      cy.get('button[type="submit"]').click();
      
      // Assert that the user is redirected or the expected behavior occurs
      cy.url().should('eq', 'http://localhost:4200/dashboard');
    });
  });