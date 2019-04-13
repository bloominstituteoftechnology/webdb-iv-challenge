module.exports = (err, req, res, next) => {
  console.error(err.stack)
  next(err)
}
