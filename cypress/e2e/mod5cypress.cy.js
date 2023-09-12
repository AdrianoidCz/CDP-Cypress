const urlFabrykaTestow = 'https://fabrykatestow.pl/'
const urlFabrykaTestowCypress = 'https://fabrykatestow.pl/cypress/'

describe('MOD5 - Homework', () => {
  it('Demo login test', function () {
    cy.visit(urlFabrykaTestow);
    cy.get('a[class="elementor-button elementor-button-link elementor-size-sm elementor-animation-grow"]').eq(1).click();
    cy.url().should('eq', urlFabrykaTestowCypress)
    cy.get('[data-id="2d7d28f4"]').scrollTo('center', {ensureScrollable: false}).screenshot();    
  });
});
