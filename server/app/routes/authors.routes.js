module.exports = app => {
  const controller = require('../controllers/authors.controller.js');
  app.post('/authors', controller.create);
  app.get('/authors', controller.findAll);
  app.get('/authors/:authord', controller.findOne);
  app.put('/authors/:authorId', controller.update);
};
