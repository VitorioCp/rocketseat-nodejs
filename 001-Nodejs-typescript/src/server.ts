import fastify from 'fastify'
import crypto from 'node:crypto'
import { knex } from './database'

const app = fastify()

app.get('/hello', async () => {
  const tables = await knex('sqlite_schema').select('*')
  const transaction = await knex('transactions').insert({
    id: crypto.randomUUID(),
    title: 'Transacao de teste',
    amount: 1000,
    
  })
  return tables
})

app
  .listen({
    port: 3131,
  })
  .then(() => {
    console.log('HTTP Server running')
  })
