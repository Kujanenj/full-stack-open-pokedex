describe('Pokedex', function() {
    it('front page can be opened', function() {
      cy.visit('http://localhost:5000')
      cy.contains('ivysaur')
      cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
    })
    it('visit some pokemon?', function () {
      cy.visit('http://localhost:5000');
            cy.contains("arbok");
            cy.get('a[href*="arbok"]').click()
            cy.contains("unnerve")
        })
  })
