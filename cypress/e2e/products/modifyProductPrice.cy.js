describe('Modify Product Price Page', () => {
    beforeEach(() => {
        cy.intercept('GET', '/product/getAll', {
            fixture: 'products.json' // Asegúrate de crear este fixture
        }).as('getProducts');
        cy.visit('/ModifyPrice');
        cy.wait('@getProducts');
    });

    it('should display the modify product price page correctly', () => {
        cy.contains('Actualizar precio del producto:').should('be.visible');
    });

    it('should update the product price successfully', () => {
        cy.get('#product-select').select('1'); // Asume que el producto con id 1 existe en el fixture
        cy.get('#product-price').clear().type('25');
        cy.intercept('PUT', '/shop/update/product/price', {
            statusCode: 200,
            body: { success: true }
        }).as('updatePrice');
        cy.get('button[type="submit"]').click();
        cy.wait('@updatePrice');
        cy.contains('Precio del producto actualizado con éxito').should('be.visible');
    });

    it('should not update the product price with invalid price', () => {
        cy.get('#product-select').select('1');
        cy.get('#product-price').clear().type('0');
        cy.get('button[type="submit"]').click();
        cy.contains('Error actualizando el precio del producto').should('be.visible');
    });
});
