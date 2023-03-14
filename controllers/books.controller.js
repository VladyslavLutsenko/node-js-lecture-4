const createError = require('../helpers/createError');
const {
  findAll: modelFindAll,
  findOne: modelFindOne,
  add: modelAdd,
  updateById: modelUpdateById,
  deleteById: modelDeleteById,
} = require('../models/books');

const findAll = async (req, res, next) => {
  const books = await modelFindAll();
  res.json(books);
};

const findOne = async (req, res, next) => {
  const { id } = req.params;
  const book = await modelFindOne(id);
  if (!book) {
    const error = createError(404, 'Book not found');
    throw error;
  }
  res.json(book);
};

const add = async (req, res, next) => {
  const { title, author, rating } = req.body;
  const book = await modelAdd({ title, author, rating });
  res.status(201).json(book);
};

const updateById = async (req, res, next) => {
  const { title, author } = req.body;
  const { id } = req.params;
  const book = await modelUpdateById({ title, author, id });
  res.json(book);
};

const deleteById = async (req, res, next) => {
  try {
    const { id } = req.params;
    await modelDeleteById(id);
    res.status(204).send();
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  findAll,
  findOne,
  add,
  updateById,
  deleteById,
};
