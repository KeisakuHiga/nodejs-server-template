const axios = require('axios')

module.exports = {
  helloWorldService: (req, res) => {
    const result = {
      greed: 'hello world'
    }
    res.json(result)
  },
  getMarketsService: async (req, res) => {
    try {
      // invoke bitFlyer's API to get markets info
      const { data } = await axios.get('https://api.bitflyer.com/v1/getmarkets')
      res.json(data)
    } catch (err) {
      console.log(err)
    }
  }
}
