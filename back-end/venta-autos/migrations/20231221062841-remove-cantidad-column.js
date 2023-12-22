'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Elimina la columna 'cantidad' de la tabla 'venta'
    await queryInterface.removeColumn('venta', 'cantidad');
  },

  down: async (queryInterface, Sequelize) => {
    // Agrega nuevamente la columna 'cantidad' a la tabla 'venta'
    await queryInterface.addColumn('venta', 'cantidad', {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    });
  },
};

