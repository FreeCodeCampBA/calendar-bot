const Slack = require('slack-node')
const moment = require('moment-timezone');

const { CHANNEL, BOTS, HOOK_URL } = require('../config');
const messageBuilder = require('./messageBuilder');
const getEvents = require('./getEvents');

const TIMEZONE = 'America/Buenos_Aires'
const timeFormat = 'HH:mm:ss';

moment.locale('es')

const getBot = () => BOTS[Math.floor(Math.random() * BOTS.length)];

const sendMessage = (options) => {
  const slack = new Slack()

  slack.setWebhook(HOOK_URL)
  slack.webhook(options, (error, response) => {
    if (error) return console.error(error)

    return console.log('Mensaje en Slack exitoso!')
  })
}

const run = async () => {
  const time = moment(new Date(), TIMEZONE);
  const morning = time.isBetween(moment('00:00:00', timeFormat).tz(TIMEZONE), moment('12:00:00', timeFormat).tz(TIMEZONE))
  console.log(moment('00:00:00', timeFormat).tz(TIMEZONE))
  console.log(moment(new Date(), TIMEZONE);)
  const dayToRetrieve = morning ? time : time.add(1, 'day')
  const events = (await getEvents(dayToRetrieve));
  const profile = getBot();

  if(events.length === 0) return console.log(`No hay eventos para el ${moment.tz(new Date(), TIMEZONE).format('YYYY-MM-DD')}`)

  sendMessage({
    channel: CHANNEL,
    icon_emoji: profile.avatar,
    username: profile.name,
    text: messageBuilder(morning, events)
  })
}

module.exports = {
  run
}
