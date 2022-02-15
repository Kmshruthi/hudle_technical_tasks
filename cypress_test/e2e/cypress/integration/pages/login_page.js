import LOGINENUM from '../ENUMS/loginPageENUM';

class LoginPage {

  static typeEmail(username) {
    cy
      .get("#email")
      .click({
        force: true
      })
      .clear()
      .type(username, { log: false })

  }

  static typePassword(password) {
    cy
      .get("#password")
      .click({
        force: true
      })
      .clear()
      .type(password, { log: false })
  }

  static pressSignIn(message) {
    cy.findAllByText(LOGINENUM.LOGIN_BUTTON, { timeout: 15000 }).eq(0).click({
      force: true
    });
    switch (message) {     
      case ' unsuccessful_login':
        cy.contains("We didn't recognize that email and/or password. Need help?").should("be.visible")
        break;
      case ' successful_login':
        cy.contains("MyProjectsample5").should("be.visible");
        cy.get('.hui-globaluseritem__display-name').click();
        cy.findAllByText(LOGINENUM.LOGIN_OUT).eq(0).click({force:true});
        cy.contains("We power sports.").should("be.visible")
        break;
      default:

        break;
    }



    // if ("not_successful_login" === "not_successful_login") {
    //   cy.log("Success")
    //   cy.contains("We didn't recognize that email and/or password. Need help?").should("be.visible")
      
    // } else if (message === 'success') {
    //   cy.contains("MyProjectsample5").should("be.visible");
    // } else {
    //   cy.log("NOTHING")
    // }

  }

}

export default LoginPage;
