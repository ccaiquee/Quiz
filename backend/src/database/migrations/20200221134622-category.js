'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('category', { 
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
          alloNull: false
        },        
        name: {
          type: Sequelize.STRING(40),
          alloNull: false
        }
       });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('category');
  }
};
