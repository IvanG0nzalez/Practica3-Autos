'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('venta', 'recargo', {
      type: Sequelize.FLOAT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('venta', 'recargo');
  }
};

