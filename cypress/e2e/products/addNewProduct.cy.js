describe('Add New Product Page', () => {
    it('should display the add new product page correctly', () => {
        cy.visit('/AddNewProduct');
        cy.contains('Añadir nuevo producto:').should('be.visible');
    });

    it('should add a new product successfully', () => {
        cy.visit('/AddNewProduct');
        cy.get('#product-name').type('Product C');
        cy.get('#product-price').type('30');
        cy.intercept('POST', '/shop/product/add', {
            statusCode: 200,
            body: { success: true }
        }).as('addProduct');
        cy.get('button[type="submit"]').click();
        cy.wait('@addProduct');
        cy.contains('Producto agregado con éxito').should('be.visible');
    });

    it('should not add a new product with invalid name', () => {
        cy.visit('/AddNewProduct');
        cy.get('#product-name').clear();
        cy.get('#product-price').type('30');
        cy.get('button[type="submit"]').click();
        cy.contains('Error creando producto').should('be.visible');
    });

    it('should not add a new product with invalid price', () => {
        cy.visit('/AddNewProduct');
        cy.get('#product-name').type('Product C');
        cy.get('#product-price').type('0');
        cy.get('button[type="submit"]').click();
        cy.contains('Error creando producto').should('be.visible');
    });
});
