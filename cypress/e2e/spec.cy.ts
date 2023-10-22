import { wrap } from "cypress/types/lodash";
import { navigationPage } from "../support/pageObjects/navigationPage";


describe("MY FIRST SUITE", () => {
  beforeEach("",()=>{
    cy.visit('/');

  })

  it("my first test", () => {


  navigationPage.navigateToFormLayouts();
  navigationPage.navigateToDatePicker();

  });



});