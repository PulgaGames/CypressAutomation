class homeSaucepage{
    elements = {
        usernameImput : () => cy.get("#inputUsuario"),
        passwordInput: () => cy.get("#inputPass"),
        login:         () => cy.get("#login > div > div > div > div > div.card-body > div > form > div.form-group.botones-login > div > div > button"),
        errorMsm      :() => cy.get("h3[data-test='error']")

    }

    typeUsername(username){
        this.elements.usernameImput().type(username)

    }

    typePassword(password){
        this.elements.passwordInput().type(password)
    }

    clicklogin(){

        this.elements.login().click();

    }


}

module.exports = new homeSaucepage();

