export class navigationPage{


static navigateToFormLayouts(){

    cy.contains('li','Forms').click();
    cy.contains('li','Form Layouts').click();


}
static navigateToDatePicker(){

    cy.contains('li','Datepicker').click();


}




}