describe("home page", () => {
  const searchTerm = "happy";

  beforeEach(() => {
    cy.fixture("response.json").as("responseData");
    cy.server();
  });
  it("should display a list of images", () => {
    cy.route(
      `https://api.giphy.com/v1/gifs/trending?api_key=QddWXTR8o4J1p9HAE4GVDjffQuxYIKlZ&limit=9&offset=0`,
      "@responseData"
    ).as("response");
    cy.visit("/");
    cy.contains("ULTRA");
    cy.contains("Assessment");
    cy.wait("@response");
    cy.get(".image-column").should("have.length", 9);
  });

  it("should search for a tag and return data", () => {
    cy.get(".search-form")
      .find('[type="text"]')
      .type("happy {enter}", { force: true });
    cy.get(".search-form").submit();
    cy.get(".image-column").should("have.length", 9);
  });

  it("should go to next page", () => {
    cy.get(".ant-pagination-item").first().click();
    cy.contains("1-9 of");
    cy.get(".ant-pagination-item").eq(1).click();
    cy.contains("10-18 of");
    cy.get(".ant-pagination-item").eq(2).click();
    cy.contains("19-27 of");
  });
});
