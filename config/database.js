if (process.env.NODE_ENV === 'production') {
  module.exports = { mongoURI: MONGODB_URL}
} else {
  module.exports = { mongoURI:'mongodb://localhost:27017/gyg-ordering' }
}

