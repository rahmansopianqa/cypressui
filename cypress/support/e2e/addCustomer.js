import faker from 'faker';

const nama = faker.name.findName()
const alamat = faker.address.streetAddress()
const phoneNumber = faker.phone.phoneNumber('08##########');
const keterangan = faker.lorem.paragraph()

describe("Add Customer Test Scenario", ()=>{
    it('User success add customer to kasir aja', ()=>{
        cy.visit(Cypress.env('baseUrl'))
        cy.get('#email').type(Cypress.env('email'))
        cy.get('#password').type(Cypress.env('password'))
        cy.get('#root > div > div > div > div.css-1w7v3tn > div > button').click()
        cy.get(':nth-child(9) > .css-ewi1jp > .css-1xhj18k > .css-1mqa38q').click()
        cy.contains('tambah').click()
        cy.get('#nama').type(nama)
        cy.get('[id$="no.hp"]').type(phoneNumber)
        cy.get('#alamat').type(alamat)
        cy.get('#keterangan').type(keterangan)
        cy.contains('simpan').click()
        cy.contains('item ditambahkan', { timeout: 10000 })
    }),
    it('User unsuccess add customer to kasir aja when data empty', ()=>{
        cy.visit(Cypress.env('baseUrl'))
        cy.get('#email').type(Cypress.env('email'))
        cy.get('#password').type(Cypress.env('password'))
        cy.get('#root > div > div > div > div.css-1w7v3tn > div > button').click()
        cy.get(':nth-child(9) > .css-ewi1jp > .css-1xhj18k > .css-1mqa38q').click()
        cy.contains('tambah').click()
        cy.contains('simpan').click()
        cy.contains('"name" is not allowed to be empty')
    })
});