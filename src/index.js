// Only for environment variable
const { config } = require('dotenv');
const { ok } = require('assert');
const { join } = require('path');

const env = process.env.NODE_ENV || 'dev';
ok(env === 'prod' || env === 'dev', 'Invalid environment');

const configPath = join(__dirname, './config', `.env.${env}`);
config({
  path: configPath,
});

const express = require('express');
const mongoose = require('mongoose');
const categoryRoutes = require('./routes/categoryRoutes');
const questionRoutes = require('./routes/questionRoutes');
const subjectRoutes = require('./routes/subjectRoutes');

const app = express();
const port = process.env.PORT || process.env.SERVICE_PORT;

app.use(express.json());
app.use('/category', categoryRoutes);
app.use('/question', questionRoutes);
app.use('/subject', subjectRoutes);

app.listen(port, '0.0.0.0');

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

console.log(`Running on port ${port}`);