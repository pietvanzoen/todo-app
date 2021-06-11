import express from 'express'
import morgan from 'morgan';
import sequelize from 'sequelize';
import sqlzcrd from 'express-sequelize-crud'
import { Todo } from './models.js'

const { crud, sequelizeCrud } = sqlzcrd;


const app = express()
app.use(morgan('dev'));
app.use(
  crud('/todos', {
    ...sequelizeCrud(Todo),
  })
)

app.use(function (err, req, res, next) {
  if (err instanceof sequelize.ValidationError) {
    res.status(400).json({ message: err.message })
    return;
  }
  console.error(err.stack)
  res.status(500).json({ message: 'Something broke!' })
})

await Todo.sync()
await app.listen(8080);

console.log('Server started');
