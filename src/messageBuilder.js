const moment = require('moment-timezone');

const TIMEZONE = 'America/Buenos_Aires'
const TODAY_MESSAGE = 'Estos son los eventos de hoy :simple_smile:\n\n'
const TOMORROW_MESSAGE = 'Estos son los eventos de mañana :simple_smile:\n\n'

const header = morning => morning ? TODAY_MESSAGE : TOMORROW_MESSAGE
const eventsList = events => events.map(({
  eventName,
  place,
  date,
  eventLink
}) => (
  `*${eventName}*\n>${(place ? ` _${place}_, ` : '')} ${moment.tz(new Date(date), TIMEZONE).utc().format('HH:mm')} hs.\n> ${eventLink}\n\n`
)).join('\n')


module.exports = (morning, events) => {
  return (
    `${header(morning)} ${eventsList(events)}`
  )
}
