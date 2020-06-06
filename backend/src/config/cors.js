module.exports = (req, res, next) => {
  res.header('Access-Control-Allow-Oigin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,PATCH,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Oringin, X-Requested-With, Content-Type, Accept')

  next()
}
