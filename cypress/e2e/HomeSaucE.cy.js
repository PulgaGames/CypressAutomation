import homeSaucepageCy from "../paginas/saucedemo/homeSaucepage.cy"
import InventoryPageCy from "../paginas/saucedemo/InventoryPage.cy"
describe ("Pom implementacion ", () =>{
    

    beforeEach(() =>{
        cy.visit("https://gas-uat.apps.cloud.sigmaingenieria.net/content-layout/login")

    })

    it("debe logiarse en la pagina", () =>{
        homeSaucepageCy.typeUsername("juli")
        homeSaucepageCy.typePassword("juli")
        homeSaucepageCy.clicklogin();

        InventoryPageCy.elements.titleSpan().should("have.text", "GeoAseo")

    })
})