describe("empty spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/"); //Port number subject to change
    //login
    // for (let i = 1; i <= 20; i++) {
    //   cy.findByRole('textbox', { name: /email address/i }).type(
    //     `rms${i}@gmail.com`
    //   );
    //   cy.findByLabelText(/password/i).type(`admin${i}`);
    //   cy.findByRole('button', { name: /login/i }).click();
    //   cy.findByRole('textbox', { name: /email address/i }).clear();
    //   cy.findByLabelText(/password/i).clear();
    // }
    for (let i = 1; i <= 20; i++) {
      cy.findByRole("button", { name: /toggle theme/i }).click();
    }
    cy.findByRole("textbox", { name: /email address/i }).type("rms@gmail.com");
    cy.findByLabelText(/password/i).type("admin");
    // cy.querySelector(
    //   '#root > div > div > div > form > div:nth-child(3) > div > div > label:nth-child(1) > span'
    // ).check();
    cy.findByRole("button", { name: /login/i }).click();
  });
});
