
describe("Its First scenario",()=>{

    it("Go to IA.CA Web",()=>{
        cy.visit("https://ia.ca/individuals")
        cy.get("[data-utag-name='loans']").click()
         cy.get("[data-utag-name='rrsp_loan_calculator']").eq(1).click({force:true})
         cy.get("[class='slider-handle min-slider-handle custom']").invoke('attr', 'style', 'right: 50%;')
        })

        it("HSBC Slider Automation", ()=>{
            cy.visit("/")
            cy.get("#consent_prompt_submit").click()
            cy.get("._-7zKoh_6ZLeGTj0WTxwLz").eq(2).clear().type("32")
            cy.get(".Q1tZ2oJ8q9V7wWKzm7wyc").eq(0).find("input[type='range']").invoke('val', 30).trigger('change')
            cy.get(".Q1tZ2oJ8q9V7wWKzm7wyc").eq(0).find("input").should('have.attr', 'aria-valuenow', 30)
  

        })
         //.click({multiple: true,force:true}).type("{rightarrow}{rightarrow}{rightarrow}")
   
})