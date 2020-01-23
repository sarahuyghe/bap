module.exports = app => {
  const controller = require('../controllers/books.controller.js');
  app.post('/books', controller.create);
  app.get('/books', controller.findAll);
  app.get('/books/:bookId', controller.findOne);
  app.put('/books/:bookId', controller.update);
  app.delete('/books/:bookId', controller.delete);
};
