const joi = require('joi');

const bookAddSchema = joi.object({
  title: joi.string().required(),
  author: joi.string().required().messages({'any.required': 'test message'}),
  rating: joi.number().min(0).max(10).required(),
})

const bookUpdateSchema = joi.object({
  title: joi.string().optional(),
  author: joi.string().optional(),
  rating: joi.number().min(0).max(10).optional(),
})

module.exports = {
  bookAddSchema,
  bookUpdateSchema,
}
