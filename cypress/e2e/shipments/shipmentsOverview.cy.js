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

    it('should update order status to READY_FOR_PICKUP', () => {
        cy.intercept('GET', '/order/getAll', { fixture: 'orders.json' }).as('getOrders');
        cy.intercept('PUT', '/order/ready-for-pickup/1', { statusCode: 200 }).as('updateOrderStatus');
        cy.visit('/ShipmentsOverview');
        cy.wait('@getOrders');
        cy.get('button').contains('Ready').click();
        cy.wait('@updateOrderStatus');
        cy.contains('Order status updated successfully!').should('be.visible');
    });

    it('should update order status to DELIVERED', () => {
        cy.intercept('GET', '/order/getAll', { fixture: 'orders.json' }).as('getOrders');
        cy.intercept('PUT', '/order/delivered/1', { statusCode: 200 }).as('updateOrderStatus');
        cy.visit('/ShipmentsOverview');
        cy.wait('@getOrders');
        cy.get('button').contains('Delivered').click();
        cy.wait('@updateOrderStatus');
        cy.contains('Order status updated successfully!').should('be.visible');
    });
});
