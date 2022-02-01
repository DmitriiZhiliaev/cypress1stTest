export class MainPage{


    getIcons(){
        return  cy.get('div.services-new__icon')
    }

    getIconTitles(){
        return cy.get('div.services-new__item-title')
    }

    getInputField(){
        return cy.get('.input__input.mini-suggest__input')
    }

    getResultsLinks(){
        return cy.get('.OrganicTitle-LinkText.organic__url-text')
    }
}