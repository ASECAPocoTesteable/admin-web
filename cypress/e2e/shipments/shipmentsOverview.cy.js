describe('Shipments Overview Page', () => {
    it('should display the orders overview page correctly', () => {
        cy.visit('/ShipmentsOverview');
        cy.contains('Orders overview:').should('be.visible');
    });

    it('should display orders when available', () => {
        cy.intercept('GET', '/order/getAll', { fixture: 'orders.json' }).as('getOrders');
        cy.visit('/ShipmentsOverview');
        cy.wait('@getOrders');
        cy.contains('Order ID: 1').should('be.visible');
        cy.contains('Avenida Siempreviva 742').should('be.visible');
        cy.contains('Processing').should('be.visible');
        cy.contains('Calle Falsa 123').should('be.visible');
    });
});
