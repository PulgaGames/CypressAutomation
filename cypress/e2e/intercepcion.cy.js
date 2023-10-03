describe("Intercepcion demo", () =>{

    it("Inicial     Validacion ", () =>{
        cypress.visit("htpp")
        cypress.get("#todo-list li")
        .should("have.length", 2)
        .and("contain", "test")
        .and("contain", "wash dishes")
        
    })
})