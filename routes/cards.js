const express = require('express')
const router = express.Router()
const Card = require('../models/Card')

router.get('/', async (req, res, next) => {
  res.json(await Card.find())
})

router.get('/:id', async (req, res, next) => {
  const { id } = req.params
  res.json(await Card.findById(id))
})

router.post('/', async (req, res, next) => {
  res.status(201).json(await Card.create(req.body))
})

router.patch('/:id', async (req, res, next) => {
  const { id } = req.params
  res.json(await Card.findByIdAndUpdate(id, req.body, { new: true }))
})

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params
  res.sendStatus(204).json(await Card.findByIdAndDelete(id))
})

module.exports = router
