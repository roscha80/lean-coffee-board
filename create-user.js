const [name, age, email] = process.argv.slice(2)

writeToDatabase()

async function writeToDatabase() {
  const mongodb = require('mongodb')
  let client

  try {
    client = await mongodb.connect('mongodb://localhost', {
      useUnifiedTopology: true,
    })
  } catch (error) {
    console.error(error)
    process.exit(1)
  }

  const db = client.db('lean-coffee-board')

  try {
    const response = await db
      .collection('users')
      .insertOne({ name, age, email })

    console.log(
      `SUCCESS: Inserted ${name}, ${age}, ${email} with ObjectId "${response.insertedId}"`
    )
    client.close()
  } catch (error) {
    console.error(error)
    client.close()
    process.exit(1)
  }
}
