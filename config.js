require('dotenv').config()

module.exports = {
  CHANNEL: process.env.CHANNEL,
  API_URL: process.env.API_URL || 'https://calendar-api.now.sh/',
  HOOK_URL: process.env.HOOK_URL,
  BOTS: [{
     "name": "Agustin Mulet",
     "avatar": "https://calendar-bot.now.sh/assets/agustin.jpeg"
   },
   {
     "name": "Goncy",
     "avatar": "https://calendar-bot.now.sh/assets/gonzo.jpeg"
   },
   {
     "name": "Nay",
     "avatar": "https://calendar-bot.now.sh/assets/nay.jpeg"
   }]
}
