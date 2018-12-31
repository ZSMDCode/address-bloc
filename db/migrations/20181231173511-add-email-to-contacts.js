'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
*/
      return queryInterface.addColumn('Contacts','email', Sequelize.STRING);
/*
      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      */
            return queryInterface.removeColumn('Contacts', 'email');
      /*
      Example:
      return queryInterface.dropTable('users');
    */
  }
};
