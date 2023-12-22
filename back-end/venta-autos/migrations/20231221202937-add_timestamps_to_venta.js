'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('venta', 'createdAt', {
      allowNull: false,
      type: Sequelize.DATE,
    })
      .then(() => {
        return queryInterface.addColumn('venta', 'updatedAt', {
          allowNull: false,
          type: Sequelize.DATE,
        });
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('venta', 'createdAt')
      .then(() => {
        return queryInterface.removeColumn('venta', 'updatedAt');
      });
  },
};


