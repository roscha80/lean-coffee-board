const express = require('express')
const uuidv4 = require('uuid').v4
const router = express.Router()

let cards = [
  {
    title: 'This is the first title',
    body: 'loremLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
    author: 'Peter',
    votes: 0,
    id: '1',
  },
]

router.get('/', (req, res, next) => {
  res.json(cards)
})

router.get('/', (req, res, next) => {
  const { id } = req.params
  const foundCards = cards.find(card => card.id === id)
  foundCards ? res.json(foundCards) : next()
})

router.get('/', (req, res, next) => {
  const newCard = { ...req.body, id: uuidv4() }
  cards.push(newCard)
  res.status(201).json(newCard)
})

router.patch('/:id', (req, res, next) => {
  const { id } = req.params

  const index = cards.findIndex(card => card.id === id)
  const card = card[index]
  const updateCard = { ...card, ...req.body }
  cards.splice(index, 1, updateCard)
  res.json(updateCard)
})

router.delete('/:id', (req, res, next) => {
  const { id } = req.params
  cards = cards.filter(card => card.id !== id)
  res.sendStatus(204)
})

module.exports = router
