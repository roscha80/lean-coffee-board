const MongoClient = require('mongodb').MongoClient
const assert = require('assert')

// Connection URL
const url = 'mongodb://localhost:27017'

// Database Name
const dbName = 'lean-coffee-board'
const client = new MongoClient(url)
// Use connect method to connect to the server
client.connect(function (err) {
  assert.strictEqual(null, err)
  console.log('Connected successfully to server')

  const db = client.db(dbName)
  const colllection = db.collection('users')
  console.log(collection.users.find())

  client.close()
})
