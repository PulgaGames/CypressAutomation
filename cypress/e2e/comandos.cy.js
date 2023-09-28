describe("Ejemplo de comandos", function(){

    this.beforeEach(function(){

        cy.visit("https://gas-uat.apps.cloud.sigmaingenieria.net/content-layout/login")
        cy.TipearLogin("juli","juli")
    })

    it("Test", function(){
        cy.log("Test")
    })

/* afterEach(function(){
        cy.LogOut()
    })
    */
})