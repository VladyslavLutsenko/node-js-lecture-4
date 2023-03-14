const express = require('express');
const { findAll, findOne, add, updateById, deleteById } = require('../../controllers/books.controller');
const controllerWrapper = require('../../helpers/controllerWrapper');
const validationMiddleware = require('../../middlewares/validation.middleware');
const { bookAddSchema, bookUpdateSchema } = require('../../schemas/book.schema');
const {createValidator} = require('express-joi-validation');

const router = express.Router();
const validator = createValidator();

router.get('/', controllerWrapper(findAll));

router.get('/:id', controllerWrapper(findOne));

router.post('/', validator.body(bookAddSchema), controllerWrapper(add));

router.patch('/:id', validationMiddleware(bookUpdateSchema), controllerWrapper(updateById));

router.delete('/:id', controllerWrapper(deleteById));

module.exports = router;
