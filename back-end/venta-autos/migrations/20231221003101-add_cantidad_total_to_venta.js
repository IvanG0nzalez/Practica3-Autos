'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('venta', 'cantidad', {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    });
    await queryInterface.addColumn('venta', 'total', {
      type: Sequelize.FLOAT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('venta', 'cantidad');
    await queryInterface.removeColumn('venta', 'total');
  },
};

