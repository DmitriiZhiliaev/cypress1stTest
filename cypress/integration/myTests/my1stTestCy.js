describe('mytest', () => {
  beforeEach(() => {
    cy.visit('https://yandex.ru')
  })

  it('Check yandex main page', () => {

    cy.get('div.services-new__icon').should('have.length', 9)

    cy.get('div.services-new__item-title').should('have.length', 10)
    cy.get('div.services-new__item-title').first().should("have.text",'Маркет')
    cy.get('div.services-new__item-title').last().should("have.text",'ещё')

    cy.get('.input__input.mini-suggest__input').type(`'T-Systems'{enter}`)
    // We can go even further and check that the default todos each contain
    // the correct text. We use the `first` and `last` functions
    // to get just the first and last matched elements individually,
    // and then perform an assertion with `should`.
    //cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
    //cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
  })
})
