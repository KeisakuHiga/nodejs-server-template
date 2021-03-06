module.exports = {
  helloWorldService: (req, res) => {
    const result = {
      greed: 'hello world'
    }
    res.json(result)
  }
}
