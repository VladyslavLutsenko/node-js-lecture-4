const express = require('express');
const fs = require('fs/promises');
const cors = require('cors');
const router = require('./routes/api/books.routes');
const morgan = require('morgan');
const errorFilter = require('./middlewares/errorFilter.middleware');

const app = express();

const logLevel = process.env.NODE_ENV === 'dev' ? 'dev' : 'short';

app.use(cors(), express.json(), morgan(logLevel));

app.use('/api/books', router);
app.use((req, res) => res.send(404).json());

app.use(errorFilter);

app.listen(3000, () => console.log('Server is running'));
