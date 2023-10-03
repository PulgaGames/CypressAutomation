describe("Login Plataforma Geoaseo ", function(){   

    beforeEach(function(){
        cy.visit("https://gas-uat.apps.cloud.sigmaingenieria.net/content-layout/login")
        
    })
    it("Obtener eñ usuario ", function(){
        cy.get.title("GeoAseo")

    })







})
