const moment = require('moment-timezone');

const { CHANNEL } = require('../config');
const messageBuilder = require('./messageBuilder');
const getEvents = require('./getEvents');

const TIMEZONE = 'America/Buenos_Aires'
const timeFormat = 'HH:mm:ss';

const Slack = require('slack-node')

moment.locale('es')

const sendMessage = (options) => {
  const messageOptions = {
      channel: process.env.CHANNEL,
      icon_emoji: '',
      text: 'test',
      username: 'randomBot.name'
  }
  const slack = new Slack()

  slack.setWebhook('https://hooks.slack.com/services/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')
  slack.webhook(options, (error, response) => {
      if (error) return console.error(error)

      return console.log('Mensaje en Slack exitoso!')
  })
}

const run = async () => {
  const time = moment(new Date(), TIMEZONE);
  const morning = time.isBetween(moment('00:00:00', timeFormat), moment('12:00:00', timeFormat))
  const dayToRetrieve = morning ? time : time.add(4, 'day')
  const events = (await getEvents(dayToRetrieve));

  if(events.length === 0) return console.log(`No hay eventos para el ${moment.tz(new Date(), TIMEZONE).format('YYYY-MM-DD')}`)

  sendMessage({
    channel: CHANNEL,
    text: messageBuilder(morning, events)
  })
}

module.exports = {
  run
}
