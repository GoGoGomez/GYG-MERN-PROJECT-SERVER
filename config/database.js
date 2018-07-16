if (process.env.NODE_ENV === 'production') {
  module.exports = { mongoURI: MONGOLAB_URI}
} else {
  module.exports = { mongoURI:'mongodb://localhost:27017/gyg-ordering' }
}

