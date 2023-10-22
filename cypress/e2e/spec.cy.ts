import { wrap } from "cypress/types/lodash";
import { navigationPage } from "../support/pageObjects/navigationPage";


describe("MY FIRST SUITE", () => {
  beforeEach("",()=>{
    cy.visit('/');

  })

  it("myy first test", () => {


  navigationPage.navigateToFormLayouts();
  navigationPage.navigateToDatePicker();

  });



});