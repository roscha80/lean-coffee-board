module.exports = (err, req, res, next) => {
  err && res.status(err.status)
  res.json({ error: err })
}
