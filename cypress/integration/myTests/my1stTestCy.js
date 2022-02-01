import {MainPage} from "../../fixtures/pages/mainPage";

describe('mytest', () => {
  let main

  beforeEach(() => {
    cy.visit('https://yandex.ru')
    main = new MainPage()

  })

  it('Check yandex main page', () => {
    main.getIcons().should('have.length', 9)
    main.getIconTitles().should('have.length', 10)
    main.getIconTitles().first().should("have.text",'Маркет')
    main.getIconTitles().last().should("have.text",'ещё')

    main.getInputField().type(`T-Systems{enter}`)
    main.getResultsLinks().should("have.length",10)
    // We can go even further and check that the default todos each contain
    // the correct text. We use the `first` and `last` functions
    // to get just the first and last matched elements individually,
    // and then perform an assertion with `should`.
    //cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
    //cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
  })
})
