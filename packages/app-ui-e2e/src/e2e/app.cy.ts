import { getNewArticleLink } from '../support/app.po';

describe('ui', () => {
  before(() => cy.viewport('macbook-11'));

  beforeEach(() => cy.visit('/'));

  it('should display App Header', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    getNewArticleLink().click();
    cy.url().should('include', '/articles');
  });
});
