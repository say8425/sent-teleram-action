const core = require('@actions/core')
const axios = require('axios')

async function sentTelegram () {
  const telegramURL = `https://api.telegram.org/bot635365494:${core.getInput('key')}/sendMessage`
  try {
    const response = await axios.post(telegramURL, {
      chat_id: core.getInput('chat_id'),
      text: core.getInput('text')
    })
    console.log(response.data.ok)
  } catch (error) {
    core.setFailed(JSON.stringify(error.response.data))
  }
}

sentTelegram()