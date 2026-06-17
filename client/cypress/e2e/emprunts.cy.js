describe("Test E2E - Mes emprunts", () => {
  it("recherche les emprunts d'un utilisateur et affiche les résultats", () => {
    cy.visit("http://localhost:5173/emprunts");

    cy.get('input[type="email"]')
      .clear()
      .type("jean.dupont@biblio.com");

    cy.contains("Voir mes emprunts").click();

    // Vérification de l'affichage des emprunts
    cy.contains("Le Petit Prince").should("be.visible");
    cy.contains("1984").should("be.visible");

    // Vérification de l'auteur
    cy.contains("George Orwell").should("be.visible");

    // Vérification des colonnes demandées
    cy.contains("Titre").should("be.visible");
    cy.contains("Auteur").should("be.visible");
    cy.contains("Date d’emprunt").should("be.visible");
    cy.contains("Date de retour").should("be.visible");

    // Vérification des dates affichées
    cy.contains("01/06/2026").should("be.visible");
    cy.contains("22/06/2026").should("be.visible");
  });
});