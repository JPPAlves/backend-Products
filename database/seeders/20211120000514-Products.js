'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Products', [{
      name: 'Pirulito',
      preco: '1.00',
      preco_desc: '10',
      prod_qt_estoque: '200',
      cate_id: '1',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: 'Goma',
      preco: '0.50',
      preco_desc: '5',
      prod_qt_estoque: '300',
      cate_id: '1',
      created_at: new Date(),
      updated_at: new Date(),
    }
    ], {});

  },
  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Products', null, {});

  }
};
