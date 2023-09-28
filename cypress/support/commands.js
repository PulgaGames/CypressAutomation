// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("TipearLogin", (username , password)=>{

    cy.get("select#sistema").select("GeoAseo Pruebas")
    cy.get('input#inputUsuario').type(username)
    cy.get("input#inputPass").type(password)

    cy.get("#login > div > div > div > div > div.card-body > div > form > div.form-group.botones-login > div > div > button").click()

})

/*Cypress.Commands.add("LogOut", () =>{
    cy.get("#dropdownBasic3 > i").click()
    cy.get("#navbarSupportedContent > ul > li.nav-item.show.dropdown > div > a:nth-child(5) > span").click()


})*/